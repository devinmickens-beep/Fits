const CACHE_NAME = "closet-archive-v244-board-sizing";
const APP_SHELL = [
  "/",
  "/index.html",
  "/assets/fits-app.css?v=178",
  "/assets/style-os.css?v=5",
  "/assets/vision-board.css?v=8",
  "/assets/board-layers.js?v=2",
  "/assets/fragrance-profiles.js",
  "/assets/fragrance-temperature.js?v=1",
  "/manifest.webmanifest",
  "/icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon-32.png",
  "/favicon-16.png",
  "/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/.netlify/functions/")) return;

  // HTML navigations: always fresh from network, fall back to cached shell offline.
  if (request.mode === "navigate" || url.pathname === "/" || url.pathname.endsWith("/index.html")) {
    event.respondWith(fetch(request, { cache: "no-store" }).catch(() => caches.match("/index.html")));
    return;
  }

  const sameOrigin = url.origin === self.location.origin;
  const isStyleOrScript = request.destination === "style" || request.destination === "script" ||
    /\.(css|js|mjs|webmanifest)$/i.test(url.pathname);

  // Same-origin CSS/JS: network-first so style/script updates land immediately when online.
  // Keeps a cached copy for offline use; never serves a stale stylesheet while connected.
  if (sameOrigin && isStyleOrScript) {
    event.respondWith(
      fetch(request).then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match(request).then(cached => cached || caches.match("/index.html")))
    );
    return;
  }

  // Everything else (images, fonts, cross-origin): cache-first for speed/offline.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200) return response;
        const isImage = request.destination === "image";
        if (sameOrigin || isImage) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match("/index.html"));
    })
  );
});
