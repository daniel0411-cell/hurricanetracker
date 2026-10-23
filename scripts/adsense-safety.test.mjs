import test from "node:test";
import assert from "node:assert/strict";
import { evacuationDecision } from "../src/lib/evacuationDecision.ts";
import { advisoryUrl } from "../src/lib/weather.ts";

test("mandatory evacuation always overrides household scoring", () => {
  for (let score = 0; score <= 10; score++) {
    assert.equal(evacuationDecision("evacuation", score).level, "Leave");
  }
});

test("immediate warnings give hazard-specific actions at every household score", () => {
  for (let score = 0; score <= 10; score++) {
    const tornado = evacuationDecision("tornado", score);
    assert.equal(tornado.level, "Act");
    assert.match(tornado.summary, /shelter immediately/i);
    assert.match(tornado.summary, /Do not start a hurricane evacuation/i);
    const flood = evacuationDecision("flood", score);
    assert.equal(flood.level, "Act");
    assert.match(flood.summary, /higher ground/i);
    for (const warning of ["surge", "hurricane"]) {
      assert.equal(evacuationDecision(warning, score).level, "Act");
    }
  }
});

test("household planning does not invent an evacuation order or an all-clear", () => {
  assert.equal(evacuationDecision("watch", 0).level, "Prepare");
  assert.equal(evacuationDecision("none", 2).level, "Prepare");
  assert.equal(evacuationDecision("none", 5).level, "Act");
  assert.match(evacuationDecision("none", 5).summary, /not an evacuation order/);
  assert.equal(evacuationDecision("none", 0).level, "Monitor");
  assert.match(evacuationDecision("none", 0).summary, /not an all-clear/);
});

test("official advisory links accept both supported feed formats and omit invalid links", () => {
  const url = "https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.008.shtml";
  assert.equal(advisoryUrl(url), url);
  assert.equal(advisoryUrl({ url }), url);
  for (const value of [undefined, null, {}, { url: "[object Object]" }, "javascript:alert(1)", ""]) {
    assert.equal(advisoryUrl(value), "");
  }
});
