import test from "node:test";
import assert from "node:assert/strict";
import { evacuationDecision } from "../src/lib/evacuationDecision.ts";
import { advisoryUrl } from "../src/lib/weather.ts";

test("official evacuation order gives its own action without household scoring", () => {
  assert.equal(evacuationDecision("evacuation").level, "Leave");
  assert.match(evacuationDecision("evacuation").summary, /local mandatory evacuation order/);
});

test("immediate warnings give hazard-specific actions without household scoring", () => {
  const tornado = evacuationDecision("tornado");
  assert.equal(tornado.level, "Act");
  assert.match(tornado.summary, /shelter immediately/i);
  assert.match(tornado.summary, /Do not start a hurricane evacuation/i);
  const flood = evacuationDecision("flood");
  assert.equal(flood.level, "Act");
  assert.match(flood.summary, /higher ground/i);
  for (const warning of ["surge", "hurricane"]) {
    assert.equal(evacuationDecision(warning).level, "Act");
  }
});

test("a checked source with no alert does not establish an all-clear", () => {
  assert.equal(evacuationDecision("watch").level, "Prepare");
  assert.equal(evacuationDecision("none").level, "Monitor");
  assert.match(evacuationDecision("none").summary, /not an all-clear/);
});

test("unknown, missing and unrecognized statuses never become no alert", () => {
  for (const status of ["unknown", undefined, null, "", "unsupported", {}, 0]) {
    assert.equal(evacuationDecision(status).level, "Unconfirmed");
    assert.match(evacuationDecision(status).summary, /do not assume there is no alert/);
  }
});

test("official advisory links accept both supported feed formats and omit invalid links", () => {
  const url = "https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.008.shtml";
  assert.equal(advisoryUrl(url), url);
  assert.equal(advisoryUrl({ url }), url);
  for (const value of [undefined, null, {}, { url: "[object Object]" }, "javascript:alert(1)", ""]) {
    assert.equal(advisoryUrl(value), "");
  }
});
