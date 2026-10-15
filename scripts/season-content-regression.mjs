import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const page = readFileSync(new URL("../src/pages/2026-hurricane-season.astro", import.meta.url), "utf8");
const frontmatter = page.split("---")[1];
const { outputText } = ts.transpileModule(frontmatter, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
});
const now = Date.parse("2026-10-15T08:35:00Z");
class TestDate extends Date { static now() { return now; } }
const archive = (name) => ({ id: "al092026", name, firstSeen: "2026-10-07", lastSeen: "2026-10-10", active: false });

async function season({ storms = [], registry = [archive("Isaias")], cacheStatus = "hit", fetchedAt = new Date(now).toISOString(), failure = false } = {}) {
  const context = {
    exports: {}, Date: TestDate, console: { error() {} },
    require(name) {
      if (name === "../data/site") return { site: { url: "https://www.hurricanetracker.cc", canonicalUrl: "https://www.hurricanetracker.cc/" } };
      if (name === "../data/states") return { coastalStates: [] };
      if (name === "../lib/nhcCurrent") return {
        NHC_CURRENT_CACHE_TTL_SECONDS: 600,
        async getNhcCurrentFeed() {
          if (failure) throw new Error("Upstream timeout");
          return { feed: { storms, fetchedAt, updatedAt: fetchedAt }, cacheStatus };
        }
      };
      if (name === "../lib/stormRegistry") return { async readStormRegistry() { return registry; } };
      if (name === "../lib/schema") return new Proxy({}, { get: () => (...args) => args });
      if (name === "../lib/weather") return { advisoryUrl() {} };
      if (name === "../lib/wind-speed") return { formatWind: String };
      throw new Error(`Unexpected import: ${name}`);
    }
  };
  return vm.runInNewContext(`(async () => { ${outputText}\nreturn { feedAvailable, storms, otherBasinStorms, names2026, nextName, nextNameAnswer, currentAnswer, description, nameRows }; })()`, context);
}

let result = await season();
assert.equal(result.feedAvailable, true);
assert.match(result.currentAnswer, /no active Atlantic/);
assert.equal(result.nextName, "Josephine");
assert.ok(result.names2026.includes("Isaias"));
assert.ok(!result.names2026.includes("Isaac"));
assert.equal(result.nameRows.find((row) => row.name === "Isaias").status, "recorded");

result = await season({ storms: [{ id: "ep212026", name: "Trudy", classification: "TS" }] });
assert.equal(result.storms.length, 0);
assert.equal(result.otherBasinStorms.length, 1);
assert.match(result.description, /No active Atlantic/);

result = await season({ storms: [{ id: "al102026", name: "Josephine", classification: "TS" }] });
assert.match(result.currentAnswer, /1 active system: Josephine/);
assert.equal(result.nextName, "Kyle");
assert.equal(result.nameRows.find((row) => row.name === "Josephine").status, "active");

result = await season({ registry: [archive("Wilfred")] });
assert.equal(result.nextName, undefined);
assert.match(result.nextNameAnswer, /list has been used/);
result = await season({ registry: [] });
assert.equal(result.nextName, undefined);
assert.match(result.nextNameAnswer, /could not be verified/);

for (const input of [
  { failure: true }, { cacheStatus: "stale" },
  { fetchedAt: "invalid" }, { fetchedAt: null }, { storms: null },
  { fetchedAt: new Date(now - 601_000).toISOString() },
  { storms: {} },
  { storms: [null] }, { storms: [{ name: "Missing ID" }] }, { storms: [{ id: 123 }] }
]) {
  result = await season(input);
  assert.equal(result.feedAvailable, false, JSON.stringify(input));
  assert.match(result.currentAnswer, /temporarily unavailable/);
  assert.match(result.description, /temporarily unavailable/);
  assert.doesNotMatch(result.description, /No active Atlantic/);
  assert.equal(result.nextName, undefined);
  assert.match(result.nextNameAnswer, /could not be verified/);
}

const blogSource = readFileSync(new URL("../src/data/blog.ts", import.meta.url), "utf8");
const blogJs = ts.transpileModule(blogSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const blogContext = { exports: {} };
vm.runInNewContext(blogJs, blogContext);
const slug = "below-normal-hurricane-season-2026-real-time-tracker";
const post = blogContext.exports.blogPosts.find((item) => item.slug === slug);
assert.equal(post.dateModified, "2026-10-15");
assert.doesNotMatch(post.description, /Cristobal|this week|already made landfall/i);
assert.ok(post.sections.every((section) => !/may form this week|peak season is just beginning/i.test(section.heading)));
assert.ok(blogContext.exports.getRelatedPosts(slug, 3).some((related) => related.slug === "how-el-nino-affects-hurricanes"));
assert.ok(post.sections.map((section) => section.body).join(" ").split(/\s+/).length >= 800);
console.log("PASS season names, basin separation, active/empty/unavailable states, and historical blog context");
