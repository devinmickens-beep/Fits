# Cross-device sync setup

Until storage is configured, the app works exactly as before — everything stays
in each browser's local storage and the Sync Devices panel reports that sync
isn't configured. Nothing breaks; sync simply stays off.

The site runs on **Vercel** (`https://fits-rho-eight.vercel.app`), so the quick
path below needs no new accounts and no new passwords. A Supabase alternative is
documented afterwards if you ever move hosts.

---

## Recommended: Vercel Blob (about 2 minutes, no signup)

1. Go to <https://vercel.com/dashboard> and open the **Fits** project.
2. Click the **Storage** tab.
3. **Create Database** → choose **Blob** → name it anything (`fits-blob` is fine)
   → **Create**.
4. When it offers to connect the store to the Fits project, accept. That is what
   adds the `BLOB_READ_WRITE_TOKEN` environment variable for you.
5. Go to **Deployments**, open the most recent one, and **Redeploy** so the
   functions pick up the new variable.

Check it worked by opening this in a browser:

```
https://fits-rho-eight.vercel.app/api/sync?code=probe
```

- `{"error":"Invalid sync code"}` → **storage is connected.** (`probe` isn't a
  real code, so this rejection is the success case.)
- `{"error":"Sync storage is not configured..."}` → the variable isn't live yet;
  confirm the store is connected to this project and redeploy.

Then pair your devices using the section further down.

---

## Alternative: Supabase Storage

Only needed if the app moves off Vercel. Requires a free Supabase account.

1. Create a project at <https://supabase.com>.
2. **Storage → Buckets → New bucket**, named exactly `fits-sync`, **Public off**.
3. From **Project Settings → API**, copy the Project URL and the `service_role` key.
4. Add both to your host's environment variables, then redeploy:

```
SUPABASE_URL=https://abcdefgh.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

The service role key bypasses row-level security. Keep it server-side only —
never paste it into the app or commit it.

If both backends are configured, Vercel Blob wins. The `storage` field in a push
response tells you which one handled the request.

---

## Pair your devices — start from the most accurate one

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
  items of the local one, the pull stops and reports both counts instead of
  applying it. **Force Pull** accepts it anyway when that really is what you want.

Before any pull replaces local data, the previous contents are saved to
`closet_archive_v2_presync_backup` in local storage, recoverable from the
browser console.

`Push This Device` and `Force Pull` both confirm before acting and both state
the item counts involved, so the overwrite direction is always explicit.

If you edit on two devices while one is offline, the one that syncs last wins.
Sync a device before doing a batch of edits on it.

## Limits worth knowing

- A sync payload is capped at **4 MB** to stay under serverless request body
  limits. Fit photos save at 900px / 0.72 quality to stay well inside that, but
  a very large lookbook can eventually exceed it — the app says so rather than
  failing silently.
- Anyone holding the sync code can read and overwrite that closet. It is a
  32-character random code, not a password, and there is no account system.
  Treat it like a secret; use **Disconnect** and generate a new one if it leaks.
- Snapshots are stored under a SHA-256 hash of the sync code, so the code itself
  is never written to storage.
- There is no rate limiting on the endpoint. Fine for personal use.
