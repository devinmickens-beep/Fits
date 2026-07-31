# Cross-device sync setup

Until this is configured, the app works exactly as before — everything stays in
each browser's local storage and the Sync Devices panel will report that the
endpoint isn't configured. Nothing breaks; sync simply stays off.

Sync uses **Supabase Storage** over its REST API. That choice means no npm
packages and no build step, and the same code runs on both Vercel and Netlify —
the app probes `/api/sync` first and falls back to
`/.netlify/functions/sync`, so whichever host is live will work.

## 1. Create the Supabase project and bucket

1. Sign up at <https://supabase.com> and create a project (the free tier is enough).
2. In the dashboard go to **Storage → Buckets → New bucket**.
3. Name it exactly `fits-sync` and leave **Public** switched **off**.

## 2. Collect two values

From **Project Settings → API**:

| Value | Where it appears |
| --- | --- |
| Project URL, e.g. `https://abcdefgh.supabase.co` | "Project URL" |
| Service role key | "Project API keys" → `service_role` |

The service role key bypasses row-level security. Keep it server-side only —
never paste it into the app, a client file, or a commit.

## 3. Add them as environment variables on your host

**Vercel** — Project → Settings → Environment Variables:

```
SUPABASE_URL=https://abcdefgh.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

**Netlify** — Site configuration → Environment variables: the same two keys.

Redeploy after adding them so the functions pick the values up.

## 4. Pair your devices

1. Open the app on your desktop → **Sync Devices** in the left sidebar.
2. Click **Generate New Code** and then **Copy Code**.
3. Open the app on your phone → **Sync Devices** → paste the same code → **Sync Now**.

After that each device pushes automatically a couple of seconds after any
change, and pulls when the app is opened.

## How conflicts are handled

The newest snapshot wins. Before a device overwrites its local copy during a
pull, the previous contents are kept in local storage under
`closet_archive_v2_presync_backup`, so a bad overwrite can be recovered from
the browser console.

If you edit the same closet on two devices while one is offline, the device
that syncs last overwrites the other. Sync on a device before making a batch of
changes on it.

## Limits worth knowing

- A sync payload is capped at **4 MB**, which keeps it under the serverless
  request body limits on both hosts. Fit photos are stored at 900px / 0.72
  quality to stay well inside that, but a very large lookbook can eventually
  exceed it — the app will say so instead of failing silently.
- Anyone holding the sync code can read and overwrite that closet. It is a
  32-character random code, not a password, and there is no account system.
  Treat it like a secret and use **Disconnect** plus a new code if it leaks.
- There is no rate limiting on the endpoint. It is fine for personal use; do
  not publish the code anywhere.
