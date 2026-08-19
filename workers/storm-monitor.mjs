const NHC = "https://www.nhc.noaa.gov/CurrentStorms.json";
const SITE = "https://www.hurricanetracker.cc";
const KEY = "7429d9b1224488da7dfa4eae2076dd5e382911169c27b9ea39e6dd692305e179";
const STATE_KEY = "seo:storm-monitor-state:v1";

function slugify(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

async function run(env) {
  const response = await fetch(NHC, { headers: { accept: "application/json", "user-agent": "HurricaneHub-StormMonitor/1.0 (https://www.hurricanetracker.cc)" } });
  if (!response.ok) throw new Error(`NHC returned HTTP ${response.status}`);
  const data = await response.json();
  const storms = Array.isArray(data.activeStorms) ? data.activeStorms : [];
  const previous = (await env.HURRICANEHUB_CACHE.get(STATE_KEY, "json")) || {};
  const next = {};
  const changedUrls = [];
  for (const storm of storms) {
    if (!storm.id || !storm.name) continue;
    const advisory = storm.forecastTrack?.advNum || storm.lastUpdate || "current";
    next[storm.id] = advisory;
    const stormUrl = `${SITE}/hurricane-tracker/storm/${slugify(storm.name)}/`;
    if (previous[storm.id] !== advisory) changedUrls.push(stormUrl, `${SITE}/hurricane-tracker/live/`, `${SITE}/`);
    await fetch(`${SITE}/api/nhc/forecast/${String(storm.id).toLowerCase()}.json`, { headers: { accept: "application/json" } });
  }
  await env.HURRICANEHUB_CACHE.put(STATE_KEY, JSON.stringify(next));
  const uniqueUrls = [...new Set(changedUrls)];
  if (uniqueUrls.length) {
    const indexNow = await fetch("https://api.indexnow.org/IndexNow", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ host: "www.hurricanetracker.cc", key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: uniqueUrls }) });
    if (!indexNow.ok) throw new Error(`IndexNow returned HTTP ${indexNow.status}`);
  }
  return { storms: storms.length, submitted: uniqueUrls.length };
}

export default {
  async scheduled(_event, env, ctx) { ctx.waitUntil(run(env)); },
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/health") return new Response("Not found", { status: 404 });
    return Response.json({ ok: true, monitor: "storm-advisories" });
  }
};
