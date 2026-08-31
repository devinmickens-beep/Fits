#!/bin/sh
# Import the real Fits source (frontend + ALL api functions) into GitHub so both
# agents can work from one place. Run from the root of the live source tree.
set -e
BRANCH="${1:-style-os}"
REMOTE="https://github.com/devinmickens-beep/Fits.git"

echo "== 1. sanity: is this the real tree? =="
[ -f index.html ] || { echo "FAIL: no index.html here"; exit 1; }
size=$(wc -c < index.html)
echo "   index.html: $size bytes"
[ "$size" -gt 900000 ] || { echo "FAIL: too small to be the live lineage (expected ~1.2MB)"; exit 1; }

echo "== 2. the three functions that must not be missing =="
missing=0
for f in api/fit-mockup.js api/cloud-sync.js api/photo-upload.js api/judge-fit.js; do
  if [ -f "$f" ]; then echo "   ok   $f"; else echo "   MISSING $f"; missing=1; fi
done
[ "$missing" -eq 0 ] || { echo "FAIL: pushing without these breaks the live app"; exit 1; }

echo "== 3. secret scan (this repo is PUBLIC) =="
hits=$(grep -rlE 'sk-[A-Za-z0-9]{20,}|BLOB_READ_WRITE_TOKEN=|vercel_blob_rw_' . \
        --exclude-dir=node_modules --exclude-dir=.git 2>/dev/null || true)
if [ -n "$hits" ]; then
  echo "   STOP — possible secrets in:"; echo "$hits" | sed 's/^/     /'
  echo "   Add them to .gitignore or move them to Vercel env vars, then re-run."
  exit 1
fi
[ -f .env ] && { echo "   STOP — .env present. gitignore it first."; exit 1; }
echo "   clean"

echo "== 4. commit and push to '$BRANCH' =="
[ -d .git ] || git init -q
grep -qx ".env" .gitignore 2>/dev/null || echo ".env" >> .gitignore
grep -qx "node_modules/" .gitignore 2>/dev/null || echo "node_modules/" >> .gitignore
git add -A
git commit -q -m "Import complete Fits source: frontend + all api functions" || echo "   (nothing new to commit)"
git remote get-url origin >/dev/null 2>&1 || git remote add origin "$REMOTE"
git push -u origin "HEAD:$BRANCH"

echo ""
echo "DONE. Pushed to $BRANCH."
echo "Next: point Vercel production at '$BRANCH' (not main — main holds a stale"
echo "lineage with no builder and no api functions)."
