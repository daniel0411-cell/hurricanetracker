import assert from "node:assert/strict";
import { startVisiblePolling } from "../src/lib/visiblePolling.ts";

let now = 0;
let id = 0;
const timers = new Map();
const listeners = new Map();
Date.now = () => now;
globalThis.setTimeout = (task, delay) => { const key = ++id; timers.set(key, { task, at: now + delay }); return key; };
globalThis.clearTimeout = (key) => timers.delete(key);
globalThis.document = {
  hidden: false,
  addEventListener(event, callback) { listeners.set(`document:${event}`, callback); },
  removeEventListener(event) { listeners.delete(`document:${event}`); }
};
globalThis.window = {
  addEventListener(event, callback) { listeners.set(`window:${event}`, callback); },
  removeEventListener(event) { listeners.delete(`window:${event}`); }
};

let calls = 0;
let release;
const stop = startVisiblePolling(async () => {
  calls++;
  await new Promise((resolve) => { release = resolve; });
}, () => 100);
assert.equal([...timers.values()][0].at, 100);
now = 50;
document.hidden = true;
listeners.get("document:visibilitychange")();
assert.equal(timers.size, 0, "hidden tabs must stop polling");

now = 60;
document.hidden = false;
listeners.get("document:visibilitychange")();
assert.equal([...timers.values()][0].at, 100, "a quick return must not refetch early");
document.hidden = true;
listeners.get("document:visibilitychange")();
now = 200;
document.hidden = false;
listeners.get("document:visibilitychange")();
const [key, timer] = [...timers.entries()][0];
assert.equal(timer.at, 200, "overdue data must refresh on return");
timers.delete(key);
const running = timer.task();
assert.equal(calls, 1);
listeners.get("document:visibilitychange")();
assert.equal(timers.size, 0, "a running refresh must not overlap another");
document.hidden = true;
release();
await running;
assert.equal(timers.size, 0, "a request finishing in the background must not restart polling");
stop();
assert.equal(listeners.size, 0);
console.log("[visible-polling] pause, timed resume, no overlap and cleanup checks passed");
