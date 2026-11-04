import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const modules = new Map();
function compile(source) {
  return ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
}
function load(file) {
  file = path.resolve(root, file);
  if (!path.extname(file)) file += ".ts";
  if (modules.has(file)) return modules.get(file);
  const module = { exports: {} };
  vm.runInNewContext(compile(fs.readFileSync(file, "utf8")), {
    module, exports: module.exports, Date, URL,
    require: (specifier) => load(path.resolve(path.dirname(file), specifier))
  }, { filename: file });
  modules.set(file, module.exports);
  return module.exports;
}
const weather = load("src/lib/weather.ts");
const status = load("src/lib/weatherFeedStatus.ts");
const { contentModifiedFor } = load("src/data/contentDates.ts");
const fresh = () => new Date().toISOString();
const old = () => new Date(Date.now() - 3600_000).toISOString();
const storm = { id: "AL012026", name: "Synthetic", classification: "TS", latitudeNumeric: 26, longitudeNumeric: -87 };
const alerts = (event) => [{ event }];
for (const [event, expected] of [
  ["Hurricane Watch", "Prepare"], ["Storm Surge Watch", "Prepare"],
  ["Hurricane Warning", "Act"], ["Storm Surge Warning", "Act"],
  ["Extreme Wind Warning", "Act"], ["Tornado Warning", "Act"],
  ["Flash Flood Warning", "Act"], ["Evacuation Order", "Leave"],
  ["No Evacuation Order", "Monitor"], ["Evacuation Advisory", "Prepare"]
]) assert.equal(weather.decisionLevel(alerts(event), []), expected, event);
assert.equal(weather.decisionLevel([...alerts("Tornado Warning"), ...alerts("Evacuation Order")], []), "Act");
for (const event of ["Tornado Warning", "Extreme Wind Warning"]) {
  const actions = weather.alertActionGuidance(alerts(event)).join(" ");
  assert.match(actions, /shelter/i);
  assert.match(actions, /Warning area/);
  assert.doesNotMatch(actions, /Take medication, IDs|Use official routes|Move vulnerable people early/);
}
assert.match(weather.alertActionGuidance(alerts("Flash Flood Warning")).join(" "), /Never walk or drive through floodwater/);
assert.equal(status.isStormFeedAvailable({ storms: [], fetchedAt: fresh() }), true);
for (const feed of [null, {}, { storms: [] }, { storms: [], fetchedAt: old() }, { storms: [], fetchedAt: fresh(), cacheStatus: "stale" }, { storms: [{}], fetchedAt: fresh() }, { storms: [{ id: storm.id }], fetchedAt: fresh() }]) {
  assert.equal(status.isStormFeedAvailable(feed), false, JSON.stringify(feed));
}
assert.equal(status.isStormFeedAvailable({ storms: [storm], fetchedAt: fresh() }), true);
assert.equal(status.isAlertFeedAvailable({ alerts: [], decisionLevel: "Monitor", fetchedAt: fresh() }), true);
assert.equal(status.isAlertFeedAvailable({ alerts: [], decisionLevel: "Monitor", fetchedAt: old() }), false);
assert.equal(status.isOutlookAvailable({ text: "Official outlook", issuedAt: fresh() }), true);
assert.equal(status.isOutlookAvailable({ text: "Official outlook", issuedAt: "2020-01-01" }), false);
assert.equal(contentModifiedFor("/", "old"), "2026-11-02T00:00:00.000Z");
assert.equal(contentModifiedFor("/hurricane-tracker/city/miami/", "old"), "2026-11-04T00:00:00.000Z");
for (const route of ["/privacy/", "/hurricane-tracker/city/", "/hurricane-tracker/tropical-disturbances/", "/blog/unchanged-article/"]) assert.equal(contentModifiedFor(route, "old"), "old");

function dom(initial = {}) {
  const els = new Map();
  function element(key) {
    if (!els.has(key)) els.set(key, {
      textContent: "", innerHTML: "", value: "", dataset: {}, hidden: false,
      classList: { toggle() {} },
      addEventListener(type, fn) { this[type] = fn; },
      querySelector: element, replaceChildren(...children) { this.children = children; },
      appendChild() {}, prepend() {}, ...initial[key]
    });
    return els.get(key);
  }
  return { element, document: { querySelector: element, createElement: () => element(Symbol()), addEventListener() {} } };
}
const flush = () => new Promise((resolve) => setImmediate(resolve));
function run(file, index, d, fetch, extra = {}) {
  const source = [...fs.readFileSync(path.join(root, file), "utf8").matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)][index][1];
  const context = {
    exports: {}, document: d.document, fetch, Date, URL, AbortSignal,
    console: { error() {}, log() {} }, window: { setInterval() {} },
    require: (specifier) => load(path.resolve(root, path.dirname(file), specifier)), ...extra
  };
  vm.runInNewContext(compile(source), context, { filename: file });
}
function response(body, ok = true) { return { ok, status: ok ? 200 : 503, json: async () => body }; }

for (const [body, ok, expected] of [
  [{ error: "NHC unavailable" }, false, /unavailable/],
  [{ storms: [] }, true, /unavailable/],
  [{ storms: [], fetchedAt: old() }, true, /unavailable/],
  [{ storms: [], fetchedAt: fresh() }, true, /No active NHC center/]
]) {
  const d = dom({ "[data-city-storm-relevance]": { dataset: { cityLat: "25.76", cityLon: "-80.19" } } });
  run("src/pages/hurricane-tracker/city/[city].astro", 0, d, async () => response(body, ok));
  await flush(); await flush();
  assert.match(d.element("[data-city-storm-answer]").textContent, expected);
}
{
  const d = dom({ "[data-live-storm-list]": { innerHTML: "OLD ACTIVE STORM CARD" } });
  let next = { storms: [], fetchedAt: fresh() };
  let refresh;
  run("src/pages/hurricane-tracker/live.astro", 0, d, async () => response(next), { window: { setInterval(fn) { refresh = fn; } } });
  await flush(); await flush();
  assert.equal(d.element("[data-live-storm-count]").textContent, "0");
  assert.doesNotMatch(d.element("[data-live-storm-list]").innerHTML, /OLD ACTIVE/);
  next = { storms: [storm], fetchedAt: fresh() };
  await refresh();
  assert.match(d.element("[data-live-storm-list]").innerHTML, /Synthetic/);
  next = { storms: [], fetchedAt: old() };
  await refresh();
  assert.equal(d.element("[data-live-storm-count]").textContent, "—");
  assert.match(d.element("[data-live-storm-list]").innerHTML, /could not be verified/);
  assert.doesNotMatch(d.element("[data-live-storm-list]").innerHTML, /Synthetic/);
}
for (const [selection, expected] of [["tornado", "Act"], ["extreme-wind", "Act"], ["watch", "Prepare"], ["surge-watch", "Prepare"], ["surge", "Act"], ["evacuation", "Leave"]]) {
  const d = dom();
  class FormData { get(key) { return key === "alert" ? selection : "vulnerable"; } }
  run("src/pages/tools/alert-action-decoder.astro", 0, d, undefined, { FormData });
  d.element("#decoder-form").submit({ preventDefault() {} });
  assert.equal(d.element("#decoder-level").textContent, expected);
  if (["tornado", "extreme-wind"].includes(selection)) assert.doesNotMatch(d.element("#decoder-actions").innerHTML, /arrange medical support|Move vulnerable|Take medication, IDs|Use official routes/);
}
{
  const d = dom({ "#window-state": { value: "FL" } });
  let fail = false;
  const calls = [];
  run("src/pages/tools/impact-window-estimator.astro", 0, d, async (url) => {
    calls.push(url);
    return url.includes("nws") ? response({ alerts: alerts("Extreme Wind Warning"), decisionLevel: "Act", fetchedAt: fresh() }, !fail) : response({ storms: [], fetchedAt: fresh() });
  });
  await d.element("#window-form").submit({ preventDefault() {} });
  assert.equal(d.element("#window-level").textContent, "Act");
  assert.match(d.element("#window-actions").innerHTML, /shelter/);
  assert.doesNotMatch(d.element("#window-actions").innerHTML, /Within (24|48)|Use official routes/);
  assert.match(d.element("#window-summary").textContent, /Expiration is not wind arrival/);
  assert.deepEqual(calls, ["/api/nws/alerts.json?area=FL", "/api/nhc/current.json"]);
  fail = true;
  await d.element("#window-form").submit({ preventDefault() {} });
  assert.equal(d.element("#window-level").textContent, "Unavailable");
  assert.equal(d.element("#window-actions").innerHTML, "");
}
console.log("Content trust regression passed: hazard actions, feed validation, city failure, live end-of-storm clearing, decoder, state summary, and editorial dates.");
