// Cross-device sync endpoint (Vercel runtime).
//
// Two storage backends are supported and picked automatically from whichever
// environment variables are present. Neither needs an npm package or a build
// step, so the deployment stays a plain static site plus functions.
//
//   1. Vercel Blob  — set BLOB_READ_WRITE_TOKEN (added for you when you create
//      a Blob store in the Vercel dashboard). Nothing else to sign up for.
//   2. Supabase Storage — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, and
//      create a private bucket named "fits-sync".
//
// See SYNC-SETUP.md for the click-by-click setup.

const PREFIX = "fits-sync";
const SUPABASE_BUCKET = "fits-sync";
const BLOB_API = "https://blob.vercel-storage.com";
const BLOB_API_VERSION = "7";

function isValidCode(code) {
  return typeof code === "string" && /^[a-f0-9]{32,64}$/.test(code);
}

async function hashCode(code) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}

/* ---------------------------------------------------------------- Vercel Blob */

function blobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN || "";
}

async function blobFindUrl(token, pathname) {
  const res = await fetch(`${BLOB_API}?prefix=${encodeURIComponent(pathname)}&limit=1`, {
    headers: { authorization: `Bearer ${token}`, "x-api-version": BLOB_API_VERSION }
  });
  if (!res.ok) throw new Error(`blob list failed (${res.status}): ${await res.text()}`);
  const data = await res.json();
  const hit = (data.blobs || []).find(b => b.pathname === pathname);
  return hit ? (hit.downloadUrl || hit.url) : null;
}

async function blobRead(token, pathname) {
  const url = await blobFindUrl(token, pathname);
  if (!url) return null;
  // Cache-bust so a pull never receives a stale CDN copy after a fresh push.
  const res = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, {
    cache: "no-store"
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`blob read failed (${res.status})`);
  return await res.json();
}

async function blobWrite(token, pathname, body) {
  const res = await fetch(`${BLOB_API}/${encodeURI(pathname)}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "x-api-version": BLOB_API_VERSION,
      "x-content-type": "application/json",
      "x-add-random-suffix": "0",
      "x-cache-control-max-age": "0"
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`blob write failed (${res.status}): ${await res.text()}`);
}

/* ------------------------------------------------------------ Supabase Storage */

function supabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

async function supabaseRead(cfg, path) {
  const res = await fetch(`${cfg.url}/storage/v1/object/${SUPABASE_BUCKET}/${path}`, {
    headers: { Authorization: `Bearer ${cfg.key}` }
  });
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error(`storage read failed (${res.status})`);
  return await res.json();
}

async function supabaseWrite(cfg, path, body) {
  const res = await fetch(`${cfg.url}/storage/v1/object/${SUPABASE_BUCKET}/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.key}`,
      "Content-Type": "application/json",
      "x-upsert": "true"
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`storage write failed (${res.status}): ${await res.text()}`);
}

/* -------------------------------------------------------------------- provider */

function resolveProvider() {
  const token = blobToken();
  if (token) {
    return {
      name: "vercel-blob",
      read: path => blobRead(token, `${PREFIX}/${path}`),
      write: (path, body) => blobWrite(token, `${PREFIX}/${path}`, body)
    };
  }
  const cfg = supabaseConfig();
  if (cfg) {
    return {
      name: "supabase",
      read: path => supabaseRead(cfg, path),
      write: (path, body) => supabaseWrite(cfg, path, body)
    };
  }
  return null;
}

export default async function handler(req, res) {
  const provider = resolveProvider();
  if (!provider) {
    res.status(500).json({
      error: "Sync storage is not configured. Create a Vercel Blob store (sets BLOB_READ_WRITE_TOKEN), or set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    });
    return;
  }

  try {
    if (req.method === "GET") {
      const code = req.query && req.query.code;
      if (!isValidCode(code)) { res.status(400).json({ error: "Invalid sync code" }); return; }
      const snapshot = await provider.read(`${await hashCode(code)}.json`);
      if (!snapshot) { res.status(404).json({ error: "No snapshot yet for this code" }); return; }
      res.status(200).json(snapshot);
      return;
    }

    if (req.method === "POST" || req.method === "PUT") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const { code, state, updatedAt } = body;
      if (!isValidCode(code)) { res.status(400).json({ error: "Invalid sync code" }); return; }
      if (!state || typeof state !== "object") { res.status(400).json({ error: "Missing state" }); return; }
      const snapshot = { updatedAt: updatedAt || new Date().toISOString(), state };
      await provider.write(`${await hashCode(code)}.json`, snapshot);
      res.status(200).json({ ok: true, updatedAt: snapshot.updatedAt, storage: provider.name });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(502).json({ error: String(error && error.message || error) });
  }
}
