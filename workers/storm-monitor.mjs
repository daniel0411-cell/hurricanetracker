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
  const warmupFailures = [];
  for (const storm of storms) {
    if (!storm.id || !storm.name) continue;
    const advisory = storm.forecastTrack?.advNum || storm.lastUpdate || "current";
    next[storm.id] = advisory;
    const stormUrl = `${SITE}/hurricane-tracker/storm/${slugify(storm.name)}/`;
    if (previous[storm.id] !== advisory) changedUrls.push(stormUrl, `${SITE}/hurricane-tracker/live/`, `${SITE}/`);
    try {
      const forecast = await fetch(`${SITE}/api/nhc/forecast/${String(storm.id).toLowerCase()}.json`, { headers: { accept: "application/json" } });
      if (!forecast.ok) {
        warmupFailures.push({ stormId: storm.id, status: forecast.status, body: (await forecast.text()).slice(0, 200) });
      }
    } catch (error) {
      warmupFailures.push({ stormId: storm.id, error: error instanceof Error ? error.message : String(error) });
    }
  }
  const uniqueUrls = [...new Set(changedUrls)];
  let indexNow = { status: null, submitted: 0 };
  if (uniqueUrls.length) {
    try {
      const response = await fetch("https://api.indexnow.org/IndexNow", { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify({ host: "www.hurricanetracker.cc", key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: uniqueUrls }) });
      indexNow = { status: response.status, submitted: response.ok ? uniqueUrls.length : 0 };
      if (!response.ok) {
        console.error(JSON.stringify({ event: "storm-monitor-indexnow-failed", status: response.status, body: (await response.text()).slice(0, 300), urls: uniqueUrls }));
      }
    } catch (error) {
      console.error(JSON.stringify({ event: "storm-monitor-indexnow-failed", error: error instanceof Error ? error.message : String(error), urls: uniqueUrls }));
    }
  }
  if (!uniqueUrls.length || indexNow.submitted) await env.HURRICANEHUB_CACHE.put(STATE_KEY, JSON.stringify(next));
  if (warmupFailures.length) console.error(JSON.stringify({ event: "storm-monitor-warmup-failed", failures: warmupFailures }));
  return { storms: storms.length, submitted: indexNow.submitted, indexNowStatus: indexNow.status, warmupFailures: warmupFailures.length };
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(run(env)
      .then((result) => console.log(JSON.stringify({ event: "storm-monitor-ok", scheduledTime: event.scheduledTime, ...result })))
      .catch((error) => {
        console.error(JSON.stringify({ event: "storm-monitor-error", scheduledTime: event.scheduledTime, message: error instanceof Error ? error.message : String(error) }));
      }));
  },
  async fetch(request, _env) {
    const url = new URL(request.url);
    if (url.pathname !== "/health") return new Response("Not found", { status: 404 });
    return Response.json({ ok: true, monitor: "storm-advisories" });
  }
};
