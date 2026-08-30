# ⚠️ Do not merge this branch into `main`

`main` is the branch Vercel deploys to **production**. This branch is a
**preview-only** build and merging it would break the live app.

## Why

Production runs four serverless functions. This repository contains two:

| endpoint | live in production | in this repo |
|---|---|---|
| `/api/judge-fit` | yes | yes |
| `/api/fit-mockup` | yes | **NO** |
| `/api/cloud-sync` | yes | **NO** |
| `/api/photo-upload` | yes | **NO** |

Those three have **never** existed in this repository — zero commits in the
entire history mention them. Proof of the split: `/api/generate-fit-image`
*is* in this repo and returns **404** in production.

A push to `main` from here already happened once (2026-08-20) and took the
mockup generator down for about nine minutes.

## What this branch is for

A Vercel **preview** deployment, so the fixes below can be tested on a phone
without touching production. On the preview these will not work, because the
functions are absent: on-body mockups, cloud photo upload, cloud sync.
Everything else works.

## What is in it

Built from the live **V213** source, byte-identical apart from these fixes:

1. **AI request timeout (the freeze).** `openAiResponse()` had no timeout on the
   `/api/judge-fit` call. A stalled request meant the `await` never settled, the
   `catch` never ran, the local fallback never ran, and the fit was left exactly
   as picked — locked pieces showing, everything else empty, score stuck on
   `"..."`. Now gives up at 35s with a readable message.
   *(V213 already added `fetchWithTimeout` for `/api/fit-mockup` and
   `/api/photo-upload` — it was just never applied to `judge-fit`.)*
2. **Render error boundary (the blank screen).** `render()` had no try/catch, so
   any exception left the page half-written; every later interaction called
   `render()` again, threw again, and the app stayed dead until force-restart.
   Now shows a recoverable notice with the real error and a "Back to Today".
3. **Locked-piece style gate.** The build-around exemption was hardcoded to the
   **bottoms** slot, so locking outerwear or shoes let `materialWeatherLogic`
   reject every candidate — including all four OpenAI attempts.
4. **`/api/cloud-sync` timeout** (45s).
5. **Two dupe bottle images replaced.** Majalis and Verticaloud were showing
   Fragrance Revival *clone* bottles with "…Type" printed on the glass, not the
   real products. Now the real Spirit of Dubai (37766) and Hermetica (52021)
   bottles, both confirmed by eye.
6. **`load()` hardening.** Any throw inside `upgradeState()` used to fall through
   to the factory seed — and the next `save()` wrote those defaults over the real
   archive. Once real data has parsed it is now always returned.

## Verified

Chromium, 390px: all 7 tabs render, **0 page errors**. Hung `/api/judge-fit`
recovers at 35s (previously never). Crash boundary catches a thrown render and
returns to Today. Full inline script passes `node --check`.

## The real fix

Get the three serverless functions into one repository together with this
frontend, then point Vercel production at it. Until then every change has to be
hand-carried into the Codex staging tree, which is how the two lineages keep
overwriting each other.
