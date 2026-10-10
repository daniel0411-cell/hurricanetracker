import assert from "node:assert/strict";
import { cachedWeather } from "../src/lib/weatherCache.ts";

const entries = new Map();
let puts = 0;
globalThis.caches = { default: {
  async match(request) { return entries.get(request.url)?.clone(); },
  async put(request, response) { puts++; entries.set(request.url, response.clone()); }
} };

let loads = 0;
const load = async () => ({ sequence: ++loads });
assert.equal((await cachedWeather("nhc", 600, load)).cacheStatus, "miss");
assert.deepEqual(await cachedWeather("nhc", 600, load), { value: { sequence: 1 }, cacheStatus: "hit" });
assert.equal(loads, 1);
assert.equal(puts, 1);

const originalNow = Date.now;
Date.now = () => originalNow() + 601_000;
assert.equal((await cachedWeather("nhc", 600, load)).cacheStatus, "miss", "expired data must be refreshed");
Date.now = originalNow;

const priorPuts = puts;
await assert.rejects(cachedWeather("failed-upstream", 300, async () => { throw new Error("upstream down"); }));
assert.equal(puts, priorPuts, "upstream errors must not be cached");
assert.equal((await cachedWeather("failed-upstream", 300, async () => "recovered")).value, "recovered");
await cachedWeather("null", 300, async () => null);
assert.equal(entries.has("https://www.hurricanetracker.cc/__weather-cache/v1/null"), false);

const originalError = console.error;
const errors = [];
console.error = (...args) => errors.push(args);
globalThis.caches.default = {
  async match() { throw new Error("cache read unavailable"); },
  async put() { throw new Error("cache write unavailable"); }
};
assert.equal((await cachedWeather("uncached", 300, async () => "usable weather")).value, "usable weather");
assert.equal(errors.length, 2);
console.error = originalError;
delete globalThis.caches;
assert.equal((await cachedWeather("no-cache-api", 300, async () => "usable weather")).value, "usable weather");
console.log("[weather-cache] hit, expiry, upstream failure and cache failure checks passed");
