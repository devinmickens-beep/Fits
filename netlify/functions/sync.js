// Cross-device sync endpoint (Netlify runtime).
// Mirrors api/sync.js so the app works on either host. Storage is Supabase
// Storage over its REST API, so this needs no npm packages. Required env vars:
//   SUPABASE_URL                 e.g. https://xxxxxxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY    service role key (server-side only)
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

const json = (statusCode, payload) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});

exports.handler = async function (event) {
  const cfg = storageConfig();
  if (!cfg) {
    return json(500, { error: "Sync is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." });
  }

  try {
    if (event.httpMethod === "GET") {
      const code = event.queryStringParameters && event.queryStringParameters.code;
      if (!isValidCode(code)) return json(400, { error: "Invalid sync code" });
      const snapshot = await readSnapshot(cfg, `${await hashCode(code)}.json`);
      if (!snapshot) return json(404, { error: "No snapshot yet for this code" });
      return json(200, snapshot);
    }

    if (event.httpMethod === "POST" || event.httpMethod === "PUT") {
      let body;
      try {
        body = JSON.parse(event.body || "{}");
      } catch (error) {
        return json(400, { error: "Invalid JSON" });
      }
      const { code, state, updatedAt } = body;
      if (!isValidCode(code)) return json(400, { error: "Invalid sync code" });
      if (!state || typeof state !== "object") return json(400, { error: "Missing state" });
      const snapshot = { updatedAt: updatedAt || new Date().toISOString(), state };
      await writeSnapshot(cfg, `${await hashCode(code)}.json`, snapshot);
      return json(200, { ok: true, updatedAt: snapshot.updatedAt });
    }

    return json(405, { error: "Method not allowed" });
  } catch (error) {
    return json(502, { error: String(error && error.message || error) });
  }
};
