import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const transpile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const page = read("../src/pages/index.astro");
const frontmatter = transpile(page.split("---")[1]);
const now = Date.parse("2026-10-17T12:00:00Z");
class TestDate extends Date { static now() { return now; } }
const fetchedAt = new Date(now).toISOString();
const nhc = { storms: [], fetchedAt };
const nws = { alerts: [], decisionLevel: "Monitor", fetchedAt };
const statusContext = { exports: {}, Date: TestDate };
vm.runInNewContext(transpile(read("../src/lib/weatherFeedStatus.ts")), statusContext);

async function home(stormFeed = nhc, alertFeed = nws) {
  const context = {
    exports: {}, Date: TestDate, URL, AbortSignal,
    Astro: { url: new URL("https://www.hurricanetracker.cc/") },
    console: { error() {} },
    async fetch(url) {
      const data = url.pathname.includes("/nhc/") ? stormFeed : alertFeed;
      if (data instanceof Error) throw data;
      return { ok: data !== null, status: data === null ? 502 : 200, json: async () => data };
    },
    require(name) {
      if (name === "../data/site") return { site: { canonicalUrl: "https://www.hurricanetracker.cc/" } };
      if (name === "../data/states") return { coastalStates: [] };
      if (name === "../data/cities") return { hurricaneCities: [] };
      if (name === "../data/topicPages") return { topicPages: [] };
      if (name === "../data/contentClusters") return { contentClusters: [] };
      if (name === "../lib/nhcForecast") return { getNhcForecast: async () => null };
      if (name === "../lib/nhcOutlook") return { getAtlanticOutlook: async () => null };
      if (name === "../lib/stormRelevance") return { relevantLocations: () => ({ states: [] }) };
      if (name === "../lib/weatherFeedStatus") return statusContext.exports;
      if (name === "../lib/schema") return new Proxy({}, { get: () => (...args) => args });
      throw new Error(`Unexpected import: ${name}`);
    }
  };
  return vm.runInNewContext(`(async () => { ${frontmatter}
    return { stormFeedAvailable, alertFeedAvailable, stormStatus, stormHeading, stormChecked,
      alertsChecked, featuredDecisionLevel, nextAction, atlanticStorms, pacificStorms, floridaAlerts, lastModified };
  })()`, context);
}

let result = await home();
assert.equal(result.stormFeedAvailable, true);
assert.equal(result.alertFeedAvailable, true);
assert.match(result.stormStatus, /no active Atlantic/);
assert.equal(result.featuredDecisionLevel, "Monitor");
assert.match(result.stormChecked, /NHC feed checked/);
assert.match(result.alertsChecked, /NWS feed checked/);

for (const invalid of [
  null, new Error("Timeout"), {}, { ...nhc, storms: {} }, { ...nhc, storms: [null] },
  { ...nhc, storms: [{ name: "Missing identity" }] },
  { ...nhc, fetchedAt: undefined }, { ...nhc, fetchedAt: "invalid" },
  { ...nhc, fetchedAt: new Date(now - 16 * 60_000).toISOString() },
  { ...nhc, fetchedAt: new Date(now + 16 * 60_000).toISOString() }
]) {
  result = await home(invalid);
  assert.equal(result.stormFeedAvailable, false);
  assert.equal(result.alertFeedAvailable, true, "A NHC failure must not hide valid NWS data");
  assert.match(result.stormStatus, /temporarily unavailable/);
  assert.doesNotMatch(result.stormStatus, /no active/);
  assert.doesNotMatch(result.stormHeading, /No active/);
  assert.doesNotMatch(result.stormChecked, /feed checked/);
}

for (const invalid of [
  null, new Error("Timeout"), {}, { ...nws, alerts: [null] },
  { ...nws, alerts: [{}] }, { ...nws, decisionLevel: "Unexpected" },
  { ...nws, fetchedAt: undefined }, { ...nws, fetchedAt: "invalid" },
  { ...nws, fetchedAt: new Date(now - 11 * 60_000).toISOString() },
  { ...nws, fetchedAt: new Date(now + 16 * 60_000).toISOString() }
]) {
  result = await home(nhc, invalid);
  assert.equal(result.stormFeedAvailable, true);
  assert.equal(result.alertFeedAvailable, false);
  assert.equal(result.featuredDecisionLevel, "Status unavailable");
  assert.match(result.nextAction, /official local NWS alerts/);
  assert.doesNotMatch(result.alertsChecked, /feed checked/);
}

result = await home(null, null);
assert.equal(result.stormFeedAvailable, false);
assert.equal(result.alertFeedAvailable, false);
assert.equal(result.lastModified, "2026-10-17T00:00:00.000Z");

result = await home({ ...nhc, storms: [
  { id: "al012026", name: "Test Atlantic", classification: "TS" },
  { id: "ep012026", name: "Test Pacific", classification: "TS" }
] }, { ...nws, alerts: [{ event: "Hurricane Warning" }], decisionLevel: "Act" });
assert.equal(result.atlanticStorms.length, 1);
assert.equal(result.pacificStorms.length, 1);
assert.equal(result.floridaAlerts.length, 1);
assert.equal(result.featuredDecisionLevel, "Act");
assert.match(result.stormStatus, /Test Atlantic/);
assert.match(result.nextAction, /protective actions/);
assert.match(page, /stormFeedAvailable \? atlanticStorms.length : "Unavailable"/);
assert.match(page, /alertFeedAvailable \? floridaAlerts.length : "Unavailable"/);

const dashboardPage = read("../src/components/LiveDashboard.astro");
const nodes = Object.fromEntries([
  "feed-status", "storm-count", "alert-count", "decision-level", "storm-list", "alert-list"
].map((id) => [id, { textContent: "", innerHTML: "", className: "" }]));
let dashboardStorms = nhc;
let dashboardAlerts = nws;
const dashboardContext = {
  Date: TestDate, AbortSignal, exports: {},
  document: { querySelector: (selector) => nodes[selector.slice(1)] ?? null },
  require: () => statusContext.exports,
  async fetch(path) {
    const data = path.includes("/nhc/") ? dashboardStorms : dashboardAlerts;
    if (data instanceof Error) throw data;
    return { ok: data !== null, json: async () => data };
  }
};
const dashboardScript = dashboardPage.match(/<script>([\s\S]*?)<\/script>/)[1]
  .replace("loadFeeds().catch", "const initialLoad = loadFeeds().catch");
await vm.runInNewContext(`${transpile(dashboardScript)}\ninitialLoad;`, dashboardContext);
assert.equal(nodes["storm-count"].textContent, "0");
assert.equal(nodes["alert-count"].textContent, "0");
for (const failure of [null, new Error("Timeout"), { ...nhc, fetchedAt: "invalid" }]) {
  dashboardStorms = failure;
  await dashboardContext.loadFeeds();
  assert.equal(nodes["storm-count"].textContent, "N/A");
  assert.equal(nodes["alert-count"].textContent, "0");
  assert.match(nodes["storm-list"].innerHTML, /unavailable/);
  assert.doesNotMatch(nodes["storm-list"].innerHTML, /No active/);
}
dashboardStorms = nhc;
dashboardAlerts = null;
await dashboardContext.loadFeeds("TX");
assert.equal(nodes["storm-count"].textContent, "0");
assert.equal(nodes["alert-count"].textContent, "N/A");
assert.equal(nodes["decision-level"].textContent, "Unavailable");
assert.match(nodes["feed-status"].textContent, /TX NWS feed unavailable/);
assert.match(nodes["alert-list"].innerHTML, /unavailable/);
dashboardAlerts = nws;
await dashboardContext.loadFeeds();
assert.equal(nodes["decision-level"].textContent, "Monitor");
assert.equal(nodes["alert-count"].textContent, "0");

const blogContext = { exports: {} };
vm.runInNewContext(transpile(read("../src/data/blog.ts")), blogContext);
const posts = blogContext.exports.blogPosts;
const ri = posts.find((post) => post.slug === "hurricane-rapid-intensification");
assert.equal(ri.dateModified, "2026-10-17");
assert.ok(ri.sections.map((section) => section.body).join(" ").split(/\s+/).length >= 800);
assert.ok(ri.sections.some((section) => /not an official NHC warning or a forecast/.test(section.body)));
assert.ok(ri.sections.flatMap((section) => section.links ?? []).some((link) => link.href === "/tracker/florida/"));
for (const slug of ["how-to-prepare-your-home-for-a-hurricane", "hurricane-insurance-deductibles-guide"]) {
  const post = posts.find((item) => item.slug === slug);
  assert.equal(post.dateModified, "2026-10-17");
  assert.ok(post.sections.flatMap((section) => section.links ?? []).some((link) => link.href === "/tools/wind-mitigation-calculator/"));
}
assert.match(read("../src/pages/blog/[slug].astro"), /section.links.map/);
console.log("PASS independent home/dashboard feed failures and recovery, stale/malformed data, valid empty/active feeds, RI content, and contextual tool links");
