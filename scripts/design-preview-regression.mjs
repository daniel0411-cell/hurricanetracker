import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const transpile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const tracker = read("../src/pages/design-preview/tracker.astro");
const blog = read("../src/pages/design-preview/blog-article.astro");
const weather = { exports: {} };
const health = { exports: {} };
vm.runInNewContext(transpile(read("../src/lib/weather.ts")), weather);
vm.runInNewContext(transpile(read("../src/lib/weatherFeedStatus.ts")), health);

async function renderState(data) {
  return vm.runInNewContext(`(async () => {
    ${transpile(tracker.split("---")[1])}
    return { stormsAvailable, statusClass, stormHeading, stormMessage, checkedTime, atlanticStorms, pacificStorms };
  })()`, {
    exports: {}, Date, URL, AbortSignal,
    Astro: { url: new URL("http://localhost/design-preview/tracker/"), response: { headers: new Headers() } },
    fetch: async () => {
      if (data instanceof Error) throw data;
      return { ok: data !== null, json: async () => data };
    },
    require: (name) => {
      if (name.endsWith("/weatherFeedStatus")) return health.exports;
      if (name.endsWith("/weather")) return weather.exports;
      return { site: { url: "https://www.hurricanetracker.cc" }, coastalStates: [] };
    }
  });
}

const fresh = { storms: [], fetchedAt: new Date().toISOString() };
for (const failed of [null, new Error("Timeout"), {}, { ...fresh, storms: [null] },
  { ...fresh, fetchedAt: "invalid" }, { ...fresh, fetchedAt: new Date(Date.now() - 3_600_000).toISOString() }]) {
  const state = await renderState(failed);
  assert.equal(state.stormsAvailable, false);
  assert.equal(state.statusClass, "status-unavailable");
  assert.match(state.stormHeading, /Unavailable/);
  assert.doesNotMatch(state.stormHeading, /No Active/);
  assert.match(state.stormMessage, /cannot determine/);
  assert.doesNotMatch(state.checkedTime, /Recently synced|Invalid Date/);
}
assert.match((await renderState(fresh)).stormHeading, /No Active Atlantic/);
assert.match((await renderState(fresh)).stormMessage, /not an all-clear/);
const mixed = await renderState({ ...fresh, storms: [{ id: "al012026" }, { id: "ep012026" }] });
assert.equal(mixed.atlanticStorms.length, 1);
assert.equal(mixed.pacificStorms.length, 1);
assert.equal(mixed.statusClass, "status-active");
assert.match(tracker, /<h3>\{stormHeading\}<\/h3>/);
assert.match(tracker, /<p>\{stormMessage\}<\/p>/);
assert.match(tracker, /\{formatStormMotion\(storm\)\}/);
assert.equal(weather.exports.formatStormMotion({ movementDir: 0, movementSpeed: 7 }), "0\u00b0 at 7 mph");
assert.equal(weather.exports.formatStormMotion({ movementDir: 0, movementSpeed: 0 }), "stationary (0 mph)");
assert.match(tracker, /`\$\{storm.latitude\}, \$\{storm.longitude\}`/);
assert.doesNotMatch(tracker, /storm\.latitude\}.*\u00b0N|movementSpeed.*kt|Operations Downlink/);
for (const name of ["index", "tracker", "blog-article"]) {
  const page = read(`../src/pages/design-preview/${name}.astro`);
  assert.match(page, /Astro.response.headers.set\("X-Robots-Tag", "noindex, nofollow"\)/);
  assert.doesNotMatch(page, /<main\b/);
}
for (const signal of ["post.sourceCheck.date", "post.sourceCheck.scope", "post.review.correction", "<FaqBlock faqs={post.faqs}"])
  assert.ok(blog.includes(signal), `Missing visible editorial context: ${signal}`);
assert.doesNotMatch(blog, /Meteorological Editorial|academic model consensus referenced/);
assert.match(blog, /const url = `\$\{site.url\}\/blog\/\$\{post.slug\}\//);
assert.match(tracker, /const url = `\$\{site.url\}\/hurricane-tracker\/live\//);
console.log("PASS design previews: unavailable vs calm, basin scope, mph/zero motion, coordinates, noindex, canonical owners and editorial context");
