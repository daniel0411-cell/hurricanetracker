import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (file) => fs.readFileSync(file, "utf8");
const compile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
function evaluate(source, imports = {}) {
  const module = { exports: {} };
  vm.runInNewContext(compile(source), {
    module, exports: module.exports, Date, Response, console: { error() {} },
    require: (name) => {
      assert.ok(name in imports, `Unexpected import: ${name}`);
      return imports[name];
    }
  });
  return module.exports;
}

const status = evaluate(read("src/lib/weatherFeedStatus.ts"));
const stormPage = read("src/pages/hurricane-tracker/storm/[storm].astro");
const policy = stormPage.match(/^const noindex = (.+);$/m)?.[1];
assert.ok(policy, "Named storm route must declare its indexing policy");
for (const curated of [false, true]) {
  for (const active of [false, true]) {
    const noindex = vm.runInNewContext(policy, {
      knownPage: curated ? { historicalReport: {} } : undefined,
      activeStorm: active ? { id: "AL012026" } : undefined
    });
    assert.equal(noindex, !curated && !active, `curated=${curated}, active=${active}`);
  }
}
assert.match(stormPage, /if \(!feedAvailable\) feed = null;/);
assert.match(stormPage, /<Layout[^>]*noindex=\{noindex\}/);
const seo = read("src/components/SEO.astro");
assert.equal((seo.match(/name="robots"/g) ?? []).length, 1);
assert.match(seo, /noindex \? "noindex,follow" : "index,follow,/);
assert.match(read("src/layouts/Layout.astro"), /<SEO[\s\S]*?noindex=\{noindex\}/);

const fixed = [{ path: "tracker/florida/" }, { path: "hurricane-tracker/storm/erin/" }];
const activeStorm = { id: "AL012026", name: "Test", latitudeNumeric: 25, longitudeNumeric: -75 };
let response;
const { GET } = evaluate(read("src/pages/sitemap-locations.xml.ts"), {
  "../lib/sitemapRoutes": { routesBySection: () => fixed, renderUrlset: (routes) => JSON.stringify(routes) },
  "../lib/nhcCurrent": { getNhcCurrentFeed: async () => { if (response instanceof Error) throw response; return response; } },
  "../lib/weatherFeedStatus": status
});
const fresh = () => new Date().toISOString();
for (const [value, expected] of [
  [{ feed: { storms: [activeStorm], fetchedAt: fresh() }, cacheStatus: "hit" }, 3],
  [{ feed: { storms: [{ ...activeStorm, name: "Erin" }], fetchedAt: fresh() }, cacheStatus: "hit" }, 2],
  [{ feed: { storms: [], fetchedAt: fresh() }, cacheStatus: "hit" }, 2],
  [{ feed: { storms: [activeStorm], fetchedAt: fresh() }, cacheStatus: "stale" }, 2],
  [{ feed: { storms: [activeStorm], fetchedAt: "2020-01-01" }, cacheStatus: "hit" }, 2],
  [{ feed: { storms: [{}], fetchedAt: fresh() }, cacheStatus: "hit" }, 2],
  [new Error("Simulated upstream timeout"), 2]
]) {
  response = value;
  const result = await GET();
  const routes = await result.json();
  assert.equal(routes.length, expected);
  for (const route of fixed) assert.ok(routes.some((item) => item.path === route.path));
  assert.ok(!routes.some((item) => item.path.includes("vance")));
  assert.match(result.headers.get("content-type"), /application\/xml/);
}

const local = read("src/components/LocalPreparednessPage.astro");
const site = evaluate(read("src/data/site.ts"));
const declarations = local.match(/^const (?:hasStateTracker|currentTracker|currentTrackerLabel) = .+;$/gm)?.join("\n");
assert.ok(declarations);
for (const [name, slug] of [["Massachusetts", "massachusetts"], ["New Jersey", "new-jersey"], ["New York", "new-york"], ...site.states.map(([, name]) => [name, name.toLowerCase().replaceAll(" ", "-")])]) {
  const page = { kind: "state", stateName: name, name, stateSlug: slug };
  const result = vm.runInNewContext(`${declarations}\n({currentTracker,currentTrackerLabel,hasStateTracker})`, { page, states: site.states });
  assert.equal(result.currentTracker, site.states.some(([, item]) => item === name) ? `/tracker/${slug}/` : "/hurricane-tracker/live/");
  if (!result.hasStateTracker) assert.equal(result.currentTrackerLabel, "All-basin live hurricane tracker");
}
assert.equal(site.faqs.length, 1);
console.log("PASS: storm indexing, stale/error sitemap fallback, curated deduplication, nine supported and three unsupported state links, shared FAQ.");
