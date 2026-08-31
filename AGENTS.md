# Working on Fits with two agents

Codex runs on Devin's Mac. Claude runs in a cloud container. Neither can see the
other's filesystem. This repo is the only place both can reach, so it has to be
the source of truth — otherwise both agents edit separate copies and whoever
deploys last silently wins. That is exactly what happened through August 2026:
production went v213 → v219 → v222 from the Mac while verified fixes sat unmerged
on a branch, and each agent kept re-fixing what the other had already fixed.

## ⚠️ Read this before pushing anything

**`main` is currently dangerous.** It holds an old, unrelated lineage:

| | `main` | live production |
|---|---|---|
| `index.html` | 331,955 bytes | ~1,218,578 bytes |
| builder code (`rejectBuilderCandidate`) | **absent** | present |
| `api/` | `judge-fit`, `generate-fit-image` | `judge-fit`, `fit-mockup`, `cloud-sync`, `photo-upload` |

If Vercel still deploys `main`, **any** commit to it — even a docs-only one —
replaces the live app with a build that has no outfit builder and none of the
serverless functions. This already happened on 2026-08-20 and took the mockup
generator down.

Until the import below is done: **do not push to `main`.** Feature branches are
safe; they produce preview deployments only.

## One-time fix

From the Mac, in the real source tree, push the complete app — frontend **and**
all four `api/*.js` functions:

    tools/import-from-mac.sh

That script checks for secrets first (this repo is public), verifies the api
functions are present, and pushes to a branch. Once it lands, someone with
Vercel access sets production to that branch, and `main` stops being a hazard.

## Then: how the two of us work in parallel

Branch per agent, merge often:

* Codex → `codex/<task>`
* Claude → `claude/<task>`

Both branch from the production branch. Small commits. Pull before starting —
that is the whole point, so each of us can see what the other did with
`git log` instead of downloading the live site and diffing it.

Rough split that matches what each is good at:

* **Codex** — features, AI/judge work, anything needing the real Vercel key.
* **Claude** — bug hunting, verification, data repair. It can hang an endpoint
  and drive a real browser to prove a fix, but cannot reach production secrets.

Both touching `index.html` is fine. Git only conflicts on the same lines.

## House rules for this app

Learned the hard way; all of these have broken production before.

1. **The closet is not in this repo.** It lives in `localStorage` under
   `closet_archive_v2`, per device. It cannot be restored from here.
2. **`load()` must never return the seed once real data has parsed.** Returning
   the factory catalogue makes the next `save()` overwrite the real archive.
3. **Every `localStorage.setItem` inside `try/catch`.** Photos are base64 and the
   browser cap is ~5–10MB.
4. **Never rename a stored field** (`photo`, `wears`, `items`, `outfits`,
   `wearLog`, `topTen`). Renaming orphans the user's data.
5. **Every `fetch` needs a timeout.** A stalled request with no `signal` hangs the
   feature forever with no error — this is what froze the outfit builder.
6. **`render()` must stay wrapped in try/catch.** Without it one exception blanks
   the app until it is force-restarted.
7. **Bump `CACHE_NAME` in `sw.js` on every deploy**, then fully close and reopen
   the app. A refresh alone serves the cached version.
8. **Verify images by looking at them.** A `200 image/*` check proves a link
   resolves, not that it is the right product — two bottles in the archive were
   dupe-seller clones that passed every status check.
9. **Test at 390px and 320px** for any nav or layout change.
