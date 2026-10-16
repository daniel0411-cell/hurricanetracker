import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function load(source, globals = {}) {
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  });
  const context = { exports: {}, ...globals };
  vm.runInNewContext(outputText, context);
  return context.exports;
}
const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const { detectRapidIntensification: detect } = load(read("../src/lib/riDetection.ts"));
const now = Date.parse("2026-10-16T12:00:00Z");
const observation = (hoursAgo, windSpeedMph, pressureMb) => ({
  advisoryNumber: String(hoursAgo), time: new Date(now - hoursAgo * 3600000).toISOString(), windSpeedMph, pressureMb
});
const history = [observation(0, 100, 980), observation(24, 65, 1000)];
assert.equal(detect(history, now).riActive, true);
assert.equal(detect([...history].reverse(), now).riActive, true);
assert.equal(detect([observation(0, 70, 970), observation(24, 65, 1000)], now).riActive, false);
assert.equal(detect([observation(0, null, 970), observation(24, 65, 1000)], now).riActive, false);
assert.equal(detect([observation(0, Infinity, 970), observation(24, 65, 1000)], now).riActive, false);
assert.equal(detect([observation(0, 100, 980), observation(30, 65, 1000)], now).riActive, false);
assert.equal(detect(history, now + 9 * 3600000).riActive, false);
assert.equal(detect(history, now - 3600000).riActive, false);
assert.equal(detect([], now).riActive, false);

const listeners = {};
let values = { windPremium: "1000", discount: "10", inspectionCost: "150" };
const form = { addEventListener: (name, callback) => { listeners[name] = callback; }, reportValidity: () => true };
const elements = Object.fromEntries(["#savings-amount", "#payback-period", "#calculation-detail"].map((id) => [id, { textContent: "" }]));
const events = [];
const page = read("../src/pages/tools/wind-mitigation-calculator.astro");
load(page.match(/<script>([\s\S]*?)<\/script>/)[1], {
  document: { querySelector: (id) => id === "#wind-tool" ? form : elements[id] },
  FormData: class { get(key) { return values[key]; } },
  require: () => ({ trackToolResult: (...args) => events.push(args) })
});
assert.equal(events.length, 0, "Page load is not a completed calculation");
const submit = () => listeners.submit({ preventDefault() {} });
submit();
assert.match(elements["#savings-amount"].textContent, /\$100\.00/);
assert.match(elements["#payback-period"].textContent, /18 months/);
assert.deepEqual(events, [["wind_mitigation", "success"]]);
listeners.input();
assert.equal(events.length, 1, "Editing does not emit success");
assert.equal(elements["#payback-period"].textContent, "");
values.discount = "0";
submit();
assert.match(elements["#savings-amount"].textContent, /\$0\.00/);
assert.match(elements["#payback-period"].textContent, /savings are zero/);
values.inspectionCost = "0";
submit();
assert.match(elements["#payback-period"].textContent, /No inspection cost/);
for (const invalid of ["", "NaN", "Infinity", "-1", "101"]) {
  values.discount = invalid;
  submit();
  assert.equal(events.at(-1)[1], "error");
  assert.equal(elements["#payback-period"].textContent, "");
}
assert.ok(!page.includes("state-select"));
assert.ok(!page.includes("Estimated statutory discount"));
const stateEvents = [];
let historyUnavailable = false;
let forecastAvailable = true;
let staleFeed = false;
const state = load(read("../src/lib/stateCurrent.ts"), {
  console: { error() {} },
  require(name) {
    if (name === "./nhcCurrent") return { getNhcCurrentFeed: async () => ({ feed: { storms: [{ id: "AL01", name: "Test" }], fetchedAt: new Date(now).toISOString() }, cacheStatus: staleFeed ? "stale" : "hit" }) };
    if (name === "./nhcForecast") return {
      getNhcForecast: async () => forecastAvailable ? { track: [[-80, 25]] } : null,
      getAdvisoryHistory: async () => {
        if (historyUnavailable) throw new Error("History unavailable");
        return history;
      }
    };
    if (name === "./stormRelevance") return { relevantLocations: () => ({ cities: [{ stateCode: "FL", distanceMiles: 100 }] }) };
    if (name === "./riDetection") return { detectRapidIntensification: (items) => { stateEvents.push(items); return detect(items, now); } };
    throw new Error(`Unexpected module ${name}`);
  }
});
const result = await state.getStateCurrentStatus("FL");
assert.equal(result.feedAvailable, true);
assert.equal(result.matches[0].riSignal.riActive, true);
assert.equal(stateEvents.length, 1);
historyUnavailable = true;
const withoutHistory = await state.getStateCurrentStatus("FL");
assert.equal(withoutHistory.feedAvailable, true, "Optional RI history failure must not hide current storm data");
assert.equal(withoutHistory.matches[0].riSignal, undefined);
forecastAvailable = false;
assert.equal((await state.getStateCurrentStatus("FL")).feedAvailable, false);
forecastAvailable = true;
staleFeed = true;
assert.equal((await state.getStateCurrentStatus("FL")).feedAvailable, false);
assert.match(read("../src/components/StateCurrentAnswer.astro"), /nearest\.riSignal\?\.riActive/);
console.log("PASS savings arithmetic, validation, submit-only analytics, fresh wind-only RI, and canonical state integration");
