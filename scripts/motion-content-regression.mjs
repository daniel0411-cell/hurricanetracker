import assert from "node:assert/strict";
import fs from "node:fs/promises";
import ts from "typescript";

async function load(path) {
  const { outputText } = ts.transpileModule(await fs.readFile(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}
const { formatStormMotion, summarizeStorm } = await load("src/lib/weather.ts");
// NHC Vance advisory 24: CurrentStorms motion 8 mph; intensity 40 kt.
const storm = { name: "Vance", classification: "TS", movementDir: 310, movementSpeed: 8, intensity: "40" };
assert.equal(formatStormMotion(storm), "310° at 8 mph");
assert.equal(summarizeStorm(storm), "TS Vance: 40 kt, 310° at 8 mph.");
assert.equal(formatStormMotion({ movementDir: 0, movementSpeed: "8" }), "0° at 8 mph");
assert.equal(formatStormMotion({ movementSpeed: 0 }), "stationary (0 mph)");
assert.equal(formatStormMotion({ movementSpeed: 8 }), "direction pending at 8 mph");
for (const movementSpeed of [undefined, null, "", " ", "NaN", "8 mph", -1, Infinity]) {
  assert.equal(formatStormMotion({ movementSpeed }), "motion pending");
}
for (const path of ["src/components/StormCard.astro", "src/pages/embed/radar.astro", "src/pages/tracker/[id].astro", "src/pages/hurricane-tracker/storm/[storm].astro", "src/pages/updates.astro"]) {
  const source = await fs.readFile(path, "utf8");
  assert(source.includes("formatStormMotion("), `${path}: use the shared motion formatter`);
  assert(!source.includes("movementSpeed"), `${path}: no raw speed rendering without a unit`);
}
const current = await fs.readFile("src/lib/nhcCurrent.ts", "utf8");
assert.match(current, /movementSpeedUnit: "mph"/);
assert.match(current, /nhc:current-storms:motion-mph-v2/);
const { blogPosts } = await load("src/data/blog.ts");
for (const slug of ["how-to-read-hurricane-spaghetti-models", "hurricane-water-storage-purification-emergency"]) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert.equal(post.dateModified, "2026-10-27");
  assert.equal(post.sourceCheck.date, "2026-10-27");
  assert(post.sections.map((section) => `${section.body} ${(section.bullets ?? []).join(" ")}`).join(" ").split(/\s+/).length >= 800);
}
const models = blogPosts.find((post) => post.slug === "how-to-read-hurricane-spaghetti-models");
assert(models.sources.some((source) => source.href.endsWith("2021feb09_ww_models.pdf#page=7")));
assert(models.sections.some((section) => section.body.includes("22 August 2015")));
assert(!JSON.stringify(models).includes("European) global model is generally the most accurate"));
assert(models.sections.some((section) => section.body.includes("NVGM is the Navy Global Environmental Model")));
const water = blogPosts.find((post) => post.slug === "hurricane-water-storage-purification-emergency");
assert(water.sections.some((section) => section.heading === "Make a Five-Field Water Notice Record"));
assert.match(water.sourceCheck.scope, /not a verified rescission/);
assert(water.sections.some((section) => section.body.includes("not a hurricane case")));
assert(water.sections.some((section) => section.bullets?.some((text) => text.includes("not proof"))));
console.log("Motion units and two evidence-based articles: passed");
