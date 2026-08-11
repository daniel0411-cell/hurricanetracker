/* HurricaneHub service worker.
 *  - Web Push notifications (push + notificationclick)
 *  - Offline app-shell caching: network-first for pages, cache-first for static
 *    assets, with a cached offline fallback page.
 */
const RUNTIME_CACHE = "hurricanehub-runtime-v1";
const OFFLINE_URL = "/offline";
const PRECACHE = [OFFLINE_URL, "/icons/app-icon-maskable.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(RUNTIME_CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== RUNTIME_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only manage same-origin requests; never cache API/data endpoints.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Static assets: cache-first, then network (and cache the result).
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.ok && (res.type === "basic" || res.type === "default")) {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});

/* ---------- Client-side alert monitoring (no server egress required) ----------
 * Subscribed users store a monitor location (ZIP + lat/lon) in the SW. The SW
 * then checks api.weather.gov directly from the browser — bypassing Cloudflare
 * Worker egress limits — and shows a local notification when a relevant alert
 * appears. Triggered by (a) a foreground page poll, (b) Periodic Background Sync
 * on Chromium, or (c) an explicit check after (re)subscribing.
 */
const HH_STATE = "hurricanehub-state-v1";
const HH_RELEVANT = /hurricane|tropical storm|storm surge|potential tropical/i;

async function hhGet(key) {
  try {
    const cache = await caches.open(HH_STATE);
    const res = await cache.match(key);
    return res || null;
  } catch {
    return null;
  }
}
async function hhPut(key, value) {
  try {
    const cache = await caches.open(HH_STATE);
    await cache.put(key, new Response(typeof value === "string" ? value : JSON.stringify(value)));
  } catch {
    /* best effort */
  }
}

async function hhCheckAndNotify() {
  const monitorRes = await hhGet("hh-monitor");
  if (!monitorRes) return;
  let monitor;
  try {
    monitor = await monitorRes.json();
  } catch {
    return;
  }
  if (!monitor || typeof monitor.lat !== "number" || typeof monitor.lon !== "number") return;

  let data;
  try {
    const res = await fetch(
      `https://api.weather.gov/alerts/active?point=${monitor.lat.toFixed(4)},${monitor.lon.toFixed(4)}`,
      { headers: { accept: "application/geo+json", "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc)" } }
    );
    if (!res.ok) return;
    data = await res.json();
  } catch {
    return;
  }

  const features = (data && data.features) || [];
  const events = [];
  for (const f of features) {
    const ev = (f.properties && f.properties.event) || "";
    if (HH_RELEVANT.test(ev)) events.push(ev);
  }
  if (events.length === 0) return;

  const sig = events.slice().sort().join("|");
  const lastRes = await hhGet("hh-last-sig");
  const last = lastRes ? await lastRes.text() : "";
  if (last === sig) return; // already notified about this exact set
  await hhPut("hh-last-sig", sig);

  const where = [monitor.zip, monitor.state].filter(Boolean).join(", ");
  const body = (events.join("; ") + (where ? ` near ${where}` : "")).slice(0, 240);
  await self.registration.showNotification("HurricaneHub: active alert near you", {
    body,
    tag: "hurricanehub-local-alert",
    renotify: true,
    data: { url: "/alerts/" }
  });
}

self.addEventListener("message", (event) => {
  const msg = event.data || {};
  if (msg.type === "hh-set-monitor") {
    hhPut("hh-monitor", msg.monitor || null);
    hhPut("hh-last-sig", ""); // reset so the next check notifies about current alerts
    event.waitUntil(hhCheckAndNotify());
  } else if (msg.type === "hh-check-now") {
    event.waitUntil(hhCheckAndNotify());
  } else if (msg.type === "hh-clear-monitor") {
    hhPut("hh-monitor", null);
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "hh-alerts") {
    event.waitUntil(hhCheckAndNotify());
  }
});

/* ---------- Web Push ---------- */
self.addEventListener("push", (event) => {
  let data = { title: "HurricaneHub Alert", body: "New hurricane alert for your area.", url: "/" };
  try {
    if (event.data) data = Object.assign(data, event.data.json());
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }
  const options = {
    body: data.body,
    data: { url: data.url || "/" },
    tag: "hurricanehub-alert",
    renotify: true
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ("focus" in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      return self.clients.openWindow(target);
    })
  );
});
