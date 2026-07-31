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

## 4. Pair your devices — start from the most accurate one

Pair from whichever device holds the closet you trust. **Generating** a code
declares that device the source; **pasting** a code makes a device a joiner.

1. On the accurate device (the desktop) → **Sync Devices** in the left sidebar.
2. **Generate New Code**, then **Copy Code**, then **Push This Device**.
3. On the other device → **Sync Devices** → paste the code → **Sync Now**.

The joiner adopts the published closet on its first pull and replaces whatever
it had. After that both devices push automatically a couple of seconds after a
change and pull on launch.

## How your accurate copy is protected

Three guards stop a thinner or staler copy from winning:

- **Joiners cannot publish before they pull.** A device that pasted a code is
  held in a pending state — its automatic pushes are suppressed until it has
  pulled once, so it can never overwrite the established closet just because
  you opened it and tapped something.
- **Stale snapshots lose.** Every save stamps the closet with a timestamp, and
  a pull is refused when the remote copy is older than what the device already
  holds.
- **Gutted snapshots are blocked.** If an incoming copy has less than half the
  items of the local one, the pull stops and tells you the counts instead of
  applying it. **Force Pull** accepts it anyway when that really is what you want.

Before any pull replaces local data, the previous contents are saved to
`closet_archive_v2_presync_backup` in local storage, recoverable from the
browser console.

`Push This Device` and `Force Pull` both ask for confirmation and both state
the item counts involved, so the overwrite direction is always explicit.

If you edit on two devices while one is offline, the one that syncs last wins.
Sync a device before doing a batch of edits on it.

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
