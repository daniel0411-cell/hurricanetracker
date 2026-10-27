import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

// Exercise the page's actual script without a browser dependency.
const source = await fs.readFile("src/pages/tools/power-outage-planner.astro", "utf8");
const script = source.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert(script, "Planner script must exist");
assert.match(source, /name="people" type="number" min="1" step="1"/);
assert.doesNotMatch(script, /localStorage|sessionStorage|fetch\(/);
const events = {};
const fields = { people: "8", duration: "7", coldFood: "both", medical: "yes", power: "generator", pets: "yes" };
const form = { addEventListener: (name, callback) => { events[name] = callback; }, reportValidity: () => true };
const title = {};
const result = {};
const print = { hidden: true, addEventListener: () => {} };
const record = { value: "Provider <instructions>\nSecond line", nextElementSibling: {}, addEventListener: (name, callback) => { assert.equal(name, "input"); events.record = callback; } };
const elements = { "#outage-form": form, "#outage-result-title": title, "#outage-result": result, "#outage-print": print };
const { outputText } = ts.transpileModule(script, { compilerOptions: { target: ts.ScriptTarget.ES2022 } });
vm.runInNewContext(outputText, {
  document: { querySelector: (selector) => elements[selector], querySelectorAll: () => [record] },
  FormData: class { get(name) { return fields[name] ?? null; } },
  window: { print() {} }
});
const submit = () => events.submit({ preventDefault() {} });
submit();
assert.match(result.innerHTML, /at least 56 gallons/);
assert.match(result.innerHTML, /more than 20 feet/);
assert.equal(print.hidden, false);
events.record();
assert.equal(record.nextElementSibling.textContent, record.value);
fields.people = "6";
events.input();
assert.equal(print.hidden, true, "Changed answers invalidate the old plan");
assert.equal(record.value, "Provider <instructions>\nSecond line", "Recalculation preserves records");
submit();
assert.match(result.innerHTML, /at least 42 gallons/);
for (const invalid of ["", "0", "-1", "2.5", "NaN", "Infinity", "9007199254740991"]) {
  fields.people = invalid;
  submit();
  assert.equal(print.hidden, true, `Reject ${invalid}`);
  assert.match(title.textContent, /valid whole number/);
}
fields.people = "1";
fields.duration = "2";
submit();
assert.equal(print.hidden, true);
fields.duration = "3";
fields.power = '<img src=x onerror="alert(1)">';
submit();
assert(!result.innerHTML.includes("<img"), "Escape reflected form values");
assert.match(result.innerHTML, /at least 3 gallons/);
console.log("Outage planner regression passed: exact counts, invalid inputs, stale plans, safe output and local print records.");
