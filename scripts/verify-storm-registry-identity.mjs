import assert from "node:assert/strict";
import { consolidateStormRecords } from "../src/lib/stormRegistryIdentity.ts";

const records = consolidateStormRecords([
  { id: "al092026", slug: "isaias", firstSeen: "2026-10-09T18:00:00Z", lastSeen: "2026-10-10T01:30:00Z", active: true },
  { id: "al092026", slug: "nine", firstSeen: "2026-10-08T12:00:00Z", lastSeen: "2026-10-09T17:00:00Z", active: false }
]);

assert.equal(records.length, 1);
assert.equal(records[0].slug, "isaias");
assert.deepEqual(records[0].aliases, ["nine"]);
assert.equal(records[0].firstSeen, "2026-10-08T12:00:00Z");
console.log("[storm-registry] identity migration passed");
