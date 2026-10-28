import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import "./home-preview-regression.mjs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const transpile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const now = Date.parse("2026-10-28T12:00:00Z");
class TestDate extends Date { static now() { return now; } }
const fetchedAt = new Date(now).toISOString();
const nhc = { storms: [], fetchedAt };
const nws = { alerts: [], decisionLevel: "Monitor", fetchedAt };
const statusContext = { exports: {}, Date: TestDate };
vm.runInNewContext(transpile(read("../src/lib/weatherFeedStatus.ts")), statusContext);

assert.match(read("../src/pages/index.astro"), /<Homepage\s*\/>/);
assert.match(read("../src/pages/design-preview/homepage-v2.astro"), /<Homepage preview\s*\/>/);

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
const dashboardScript = read("../src/components/LiveDashboard.astro").match(/<script>([\s\S]*?)<\/script>/)[1]
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
// Later editorial revisions must not invalidate these content checks.
assert.ok(ri.dateModified >= "2026-10-17");
assert.ok(ri.sections.map((section) => section.body).join(" ").split(/\s+/).length >= 800);
assert.ok(ri.sections.some((section) => /not an official NHC warning or a forecast/.test(section.body)));
assert.ok(ri.sections.flatMap((section) => section.links ?? []).some((link) => link.href === "/tracker/florida/"));
for (const slug of ["how-to-prepare-your-home-for-a-hurricane", "hurricane-insurance-deductibles-guide"]) {
  const post = posts.find((item) => item.slug === slug);
  assert.ok(post.dateModified >= "2026-10-17");
  assert.ok(post.sections.flatMap((section) => section.links ?? []).some((link) => link.href === "/tools/wind-mitigation-calculator/"));
}
assert.match(read("../src/pages/blog/[slug].astro"), /section.links.map/);
console.log("PASS shared homepage routes, independent dashboard failures and recovery, RI content, and contextual tool links");
