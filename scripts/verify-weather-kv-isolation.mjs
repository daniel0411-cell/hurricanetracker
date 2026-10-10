import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { zipSync, strToU8 } from "fflate";

let reads = 0;
let writes = 0;
globalThis.__weatherTestEnv = { HURRICANEHUB_CACHE: {
  async get() { reads++; throw new Error("KV read quota exceeded"); },
  async put() { writes++; throw new Error("KV write quota exceeded"); }
} };
registerHooks({ resolve(specifier, context, next) {
  if (specifier === "cloudflare:workers") {
    return { url: "data:text/javascript,export const env = globalThis.__weatherTestEnv", shortCircuit: true };
  }
  return next(specifier.startsWith(".") && !/\.[a-z]+$/i.test(specifier) ? `${specifier}.ts` : specifier, context);
} });

const entries = new Map();
globalThis.caches = { default: {
  async match(request) { return entries.get(request.url)?.clone(); },
  async put(request, response) { entries.set(request.url, response.clone()); }
} };
const storm = {
  id: "al992026", name: "Test", intensity: "45", lastUpdate: "2026-10-10T00:00:00Z",
  forecastTrack: { advNum: "1", kmzFile: "https://www.nhc.noaa.gov/test-track.kmz" },
  trackCone: { kmzFile: "https://www.nhc.noaa.gov/test-cone.kmz" }
};
const kml = `<kml><Placemark><LineString><coordinates>-80,25 -81,26</coordinates></LineString><Polygon><outerBoundaryIs><LinearRing><coordinates>-80,25 -81,26 -82,25 -80,25</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark></kml>`;
let currentFetches = 0;
let upstreamDown = false;
globalThis.fetch = async (input) => {
  const url = String(input);
  if (url.includes("CurrentStorms.json")) { currentFetches++; return Response.json({ activeStorms: [storm] }); }
  if (url.endsWith(".kmz")) return new Response(zipSync({ "test.kml": strToU8(kml) }));
  if (url.includes("api.weather.gov")) return upstreamDown ? new Response("Unavailable", { status: 503 }) : Response.json({ features: [] });
  if (url.includes("rainviewer")) return Response.json({ host: "https://tilecache.rainviewer.com", radar: { past: [{ time: 1, path: "/test" }] } });
  throw new Error(`Unexpected fetch: ${url}`);
};
const originalError = console.error;
console.error = () => {};

const { getStateCurrentStatus } = await import("../src/lib/stateCurrent.ts");
const status = await getStateCurrentStatus("FL");
assert.equal(status.feedAvailable, true, "KV outage must not hide usable NHC data");
assert.equal(currentFetches, 1, "forecast must reuse the current storm record");
assert.equal(reads, 2, "only durable registry and advisory history may read KV");
assert.equal(writes, 0, "failed history reads must not overwrite durable records");
await getStateCurrentStatus("FL");
assert.equal(reads, 2, "warm weather requests must not read KV");

const { GET: alerts } = await import("../src/pages/api/nws/alerts.ts");
const { GET: states } = await import("../src/pages/api/nws/states.ts");
const { GET: radar } = await import("../src/pages/api/radar/rainviewer.json.ts");
for (const route of [() => alerts({ url: new URL("https://www.hurricanetracker.cc/api/nws/alerts?area=FL") }), states, radar]) {
  const miss = await route();
  assert.equal(miss.status, 200);
  assert.equal(miss.headers.get("x-hurricanehub-cache"), "miss");
  const hit = await route();
  assert.equal(hit.status, 200);
  assert.equal(hit.headers.get("x-hurricanehub-cache"), "hit");
}
assert.equal(reads, 2);
assert.equal(writes, 0, "NWS and radar caches must not use KV");
upstreamDown = true;
const failed = await alerts({ url: new URL("https://www.hurricanetracker.cc/api/nws/alerts?area=TX") });
assert.equal(failed.status, 502);
assert.equal(failed.headers.get("cache-control"), "no-store");
upstreamDown = false;
assert.equal((await alerts({ url: new URL("https://www.hurricanetracker.cc/api/nws/alerts?area=TX") })).status, 200);
console.error = originalError;
console.log("[weather-kv] quota outage isolation, durable record preservation, reuse and upstream recovery checks passed");
