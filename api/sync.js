// Cross-device sync endpoint (Vercel runtime).
// Storage is Supabase Storage over its REST API, so this needs no npm packages
// and runs identically on Vercel and Netlify. Required environment variables:
//   SUPABASE_URL                 e.g. https://xxxxxxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY    service role key (server-side only, never shipped to the browser)
// A private Storage bucket named "fits-sync" must exist in the Supabase project.

const BUCKET = "fits-sync";

function storageConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

function isValidCode(code) {
  return typeof code === "string" && /^[a-f0-9]{32,64}$/.test(code);
}

async function hashCode(code) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function readSnapshot(cfg, path) {
  const res = await fetch(`${cfg.url}/storage/v1/object/${BUCKET}/${path}`, {
    headers: { Authorization: `Bearer ${cfg.key}` }
  });
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error(`storage read failed (${res.status})`);
  return await res.json();
}

async function writeSnapshot(cfg, path, body) {
  const res = await fetch(`${cfg.url}/storage/v1/object/${BUCKET}/${path}`, {
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

export default async function handler(req, res) {
  const cfg = storageConfig();
  if (!cfg) {
    res.status(500).json({ error: "Sync is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." });
    return;
  }

  try {
    if (req.method === "GET") {
      const code = req.query && req.query.code;
      if (!isValidCode(code)) { res.status(400).json({ error: "Invalid sync code" }); return; }
      const snapshot = await readSnapshot(cfg, `${await hashCode(code)}.json`);
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
      await writeSnapshot(cfg, `${await hashCode(code)}.json`, snapshot);
      res.status(200).json({ ok: true, updatedAt: snapshot.updatedAt });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(502).json({ error: String(error && error.message || error) });
  }
}
