import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const transpile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const page = read("../src/components/Homepage.astro");
const now = Date.parse("2026-10-28T12:00:00Z");
class TestDate extends Date { static now() { return now; } }
const fetchedAt = new Date(now).toISOString();
const nhc = { storms: [], fetchedAt };
const nws = { alerts: [], decisionLevel: "Monitor", fetchedAt };
const outlook = { issuedAt: fetchedAt, issued: "800 AM EDT Wed Oct 28 2026", text: "Test outlook", formationChance7d: 80 };
const statusContext = { exports: {}, Date: TestDate };
vm.runInNewContext(transpile(read("../src/lib/weatherFeedStatus.ts")), statusContext);

async function preview(stormData = nhc, alertData = nws, outlookData = outlook, isPreview = true) {
  const context = {
    exports: {}, Date: TestDate, URL, AbortSignal,
    Astro: { props: { preview: isPreview }, url: new URL("https://www.hurricanetracker.cc/"), response: { headers: new Headers() } },
    async fetch(url) {
      const data = url.pathname.includes("/nhc/") ? stormData : alertData;
      if (data instanceof Error) throw data;
      return { ok: data !== null, json: async () => data };
    },
    require(name) {
      if (name.endsWith("/weatherFeedStatus")) return statusContext.exports;
      if (name.endsWith("/nhcOutlook")) return { getAtlanticOutlook: async () => outlookData };
      if (name.endsWith("/states")) return { coastalStates: [] };
      if (name.endsWith("/cities")) return { hurricaneCities: [] };
      if (name.endsWith("/site")) return { site: { canonicalUrl: "https://www.hurricanetracker.cc/", url: "https://www.hurricanetracker.cc" }, faqs: [] };
      if (name.endsWith("/topicPages")) return { topicPages: [] };
      if (name.endsWith("/schema")) return { graph() {}, websiteSchema() {}, articleSchema() {}, faqSchema() {} };
      throw new Error(`Unexpected import: ${name}`);
    }
  };
  return vm.runInNewContext(`(async () => { ${transpile(page.split("---")[1])}
    return { stormsAvailable, alertsAvailable, outlookAvailable, stormHeading, stormStatusClass,
      atlanticStorms, pacificStorms, robots: Astro.response.headers.get("X-Robots-Tag") };
  })()`, context);
}
assert.match((await preview()).stormHeading, /No active Atlantic/);
assert.equal((await preview()).stormStatusClass, "status-calm");
assert.match(read("../src/pages/design-preview/homepage-v2.astro"), /Astro.response.headers.set\("X-Robots-Tag", "noindex, nofollow"\)/);
assert.equal((await preview(nhc, nws, outlook, false)).robots, null, "Production homepage must remain indexable");
for (const failure of [null, new Error("Timeout"), {}, { ...nhc, storms: {} }, { ...nhc, storms: [null] }, { ...nhc, storms: [{ name: "Missing identity" }] }, { ...nhc, fetchedAt: "invalid" }, { ...nhc, fetchedAt: new Date(now - 16 * 60_000).toISOString() }, { ...nhc, fetchedAt: new Date(now + 16 * 60_000).toISOString() }]) {
  const result = await preview(failure);
  assert.equal(result.stormsAvailable, false);
  assert.equal(result.stormStatusClass, "status-unavailable");
  assert.equal(result.alertsAvailable, true);
  assert.match(result.stormHeading, /unavailable/);
}
for (const failure of [null, new Error("Timeout"), {}, { ...nws, alerts: [null] }, { ...nws, alerts: [{}] }, { ...nws, decisionLevel: "Unexpected" }, { ...nws, fetchedAt: undefined }, { ...nws, fetchedAt: "invalid" }, { ...nws, fetchedAt: new Date(now - 11 * 60_000).toISOString() }, { ...nws, fetchedAt: new Date(now + 16 * 60_000).toISOString() }]) {
  assert.equal((await preview(nhc, failure)).alertsAvailable, false);
}
for (const failure of [null, { ...outlook, issuedAt: null }, { ...outlook, issuedAt: new Date(now - 13 * 60 * 60_000).toISOString() }]) {
  assert.equal((await preview(nhc, nws, failure)).outlookAvailable, false);
}
const mixed = await preview({ ...nhc, storms: [{ id: "al012026" }, { id: "ep012026" }] });
assert.equal(mixed.atlanticStorms.length, 1);
assert.equal(mixed.stormStatusClass, "status-active");
assert.equal(mixed.pacificStorms.length, 1);
assert.equal((await preview()).outlookAvailable, true);
assert.doesNotMatch(page, /simulated-radar|40% - 55%|atlanticOutlook \? "Low"/);

const nodes = Object.fromEntries(["preview-zip-form", "preview-zip", "preview-local-status", "preview-local-result"].map((id) => [id, {
  value: "33101", textContent: "", innerHTML: "", hidden: true, listeners: {},
  addEventListener(name, callback) { this.listeners[name] = callback; },
  reportValidity() { return true; }, replaceChildren() { this.innerHTML = ""; }
}]));
let pointFeed = nws;
let location = { latitude: "25.77", longitude: "-80.19", city: "Miami", state: "FL" };
let failNetwork = false;
let delayedLocation;
const context = {
  exports: {}, Date: TestDate, AbortSignal,
  document: { querySelector: (selector) => nodes[selector.slice(1)] },
  require: () => statusContext.exports,
  async fetch(path) {
    if (failNetwork) throw new Error("Network unavailable");
    if (delayedLocation && path.includes("/location/")) return delayedLocation;
    const data = path.includes("/location/") ? location : pointFeed;
    return { ok: true, json: async () => data };
  }
};
vm.runInNewContext(transpile(page.match(/<script>([\s\S]*?)<\/script>/)[1]), context);
const submit = () => nodes["preview-zip-form"].listeners.submit({ preventDefault() {} });
const resultNode = nodes["preview-local-result"];
const statusNode = nodes["preview-local-status"];
await submit();
assert.match(resultNode.innerHTML, /0 active NWS alerts/);
assert.match(resultNode.innerHTML, /not an all-clear/);
pointFeed = { ...nws, alerts: [{ event: "Flash Flood Warning", headline: "<img src=x onerror=alert(1)>" }] };
await submit();
assert.match(resultNode.innerHTML, /Flash Flood Warning/);
assert.doesNotMatch(resultNode.innerHTML, /<img/);
for (const failure of [null, {}, { ...nws, fetchedAt: "invalid" }, { ...nws, fetchedAt: new Date(now - 11 * 60_000).toISOString() }]) {
  pointFeed = failure;
  await submit();
  assert.match(statusNode.textContent, /No current alert conclusion/);
  assert.doesNotMatch(resultNode.innerHTML, /0 active/);
}
for (const invalid of [null, {}, { ...location, latitude: true }, { ...location, latitude: "" }, { ...location, longitude: 181 }]) {
  const original = location;
  location = invalid;
  await submit();
  assert.match(statusNode.textContent, /unavailable/);
  location = original;
}
failNetwork = true;
await submit();
assert.match(statusNode.textContent, /unavailable/);
failNetwork = false;
pointFeed = nws;
let release;
delayedLocation = new Promise((resolve) => { release = resolve; });
const pending = submit();
nodes["preview-zip"].listeners.input();
release({ ok: true, json: async () => location });
await pending;
assert.equal(resultNode.hidden, true, "Editing a ZIP invalidates an in-flight result");
console.log("PASS: preview feed failures, freshness, basin scope, noindex, ZIP results, escaping and in-flight invalidation");
