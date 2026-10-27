import assert from "node:assert/strict";
import fs from "node:fs/promises";
import ts from "typescript";

async function loadData(path) {
  const source = await fs.readFile(path, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { blogPosts } = await loadData("src/data/blog.ts");
const { hurricaneCities } = await loadData("src/data/cities.ts");
const articles = new Map([
  ["what-hurricane-watch-warning-means", "Work Through a Warning Without Inventing a Deadline"],
  ["what-to-do-during-a-hurricane-warning", "If Your Original Plan Stops Working"],
  ["storm-surge-warning-vs-hurricane-warning", "Two Situations That Need Different Answers"],
  ["hurricane-family-communication-plan", "Rehearse One Failed-Contact Scenario"],
  ["hurricane-radar-vs-satellite", "Read Two Views of the Same Period"],
  ["how-to-read-the-hurricane-cone-of-uncertainty", "Read the Historical Example From Label to Legend"]
]);
const cities = new Map([
  ["miami", "Look Up the Miami-Dade Planning Zone"],
  ["tampa", "Start With the Correct County's Address Map"],
  ["houston", "Separate Coastal Evacuation From Inland Flood Decisions"]
]);
const routes = new Map();
for (const post of blogPosts) {
  for (const figure of post.figures ?? []) {
    if (!figure.afterSection) continue;
    assert.equal(post.sections.filter((section) => section.heading === figure.afterSection).length, 1,
      `${post.slug}: an inline figure must belong to exactly one section`);
    assert(figure.width > 0 && figure.height > 0, "Inline figures reserve their intrinsic aspect ratio");
    assert(figure.sourceUrl?.startsWith("https://"), "Inline official examples need an original source");
    await fs.access(`public${figure.src}`);
  }
}
for (const slug of ["official-hurricane-information-sources-rumor-verification", "hurricane-storm-surge-forecasting", "how-to-read-the-hurricane-cone-of-uncertainty"]) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert.equal(post.sourceCheck?.date, "2026-10-27");
  assert(post.sourceCheck.scope.length > 30, "Disclose what the check covered");
  assert(post.figures.some((figure) => figure.afterSection));
  routes.set(`/blog/${slug}/`, post.figures[0].afterSection);
}
for (const slug of ["miami", "tampa", "houston"]) {
  const city = hurricaneCities.find((city) => city.slug === slug);
  assert.equal(city.dateModified, "2026-10-27");
  assert.equal(city.sourceCheck?.date, "2026-10-27");
}
for (const [slug, heading] of articles) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert(post, `Missing existing article ${slug}`);
  assert(post.sections.some((section) => section.heading === heading));
  assert.equal(post.dateModified, "2026-10-27");
  assert(post.datePublished < post.dateModified, "Preserve original publication date");
  routes.set(`/blog/${slug}/`, heading);
}
for (const [slug, heading] of cities) {
  const city = hurricaneCities.find((city) => city.slug === slug);
  assert(city.localHazards.some((hazard) => hazard.heading === heading));
  assert(city.officialResources.every((source) => source.url.startsWith("https://")));
  routes.set(`/hurricane-tracker/city/${slug}/`, heading);
}
const cone = blogPosts.find((post) => post.slug === "how-to-read-the-hurricane-cone-of-uncertainty");
const figure = cone.figures.find((figure) => figure.src.includes("nhc-cone-helene-2024-example"));
assert.match(figure.caption, /September 25, 2024/);
assert.match(figure.caption, /Not a current forecast/);
const png = await fs.readFile(`public${figure.src}`);
assert.equal(png.subarray(1, 4).toString(), "PNG");
assert(png.readUInt32BE(16) > 0 && png.readUInt32BE(20) > 0);
assert(cone.sections.some((section) => section.links?.some((link) => link.href.endsWith("/images/cone_5day_with_ww.png"))));

const base = process.env.CONTENT_AUDIT_BASE_URL;
if (base) {
  for (const [route, heading] of routes) {
    const response = await fetch(new URL(route, base), { redirect: "manual", signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert(html.includes(heading.replaceAll("'", "&#39;")) || html.includes(heading), `${route}: new content missing`);
    assert(html.includes(`https://www.hurricanetracker.cc${route}`), `${route}: canonical missing`);
    assert.match(html, /application\/ld\+json/);
    if (route.startsWith("/blog/")) {
      assert(html.includes('aria-label="Article contents"'), `${route}: contents navigation missing`);
      assert(html.includes('href="#section-0"'), `${route}: section navigation missing`);
    }
  }
  const response = await fetch(new URL(figure.src, base));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /image\/png/);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), png, "Serve the unchanged official image");
}
console.log(`Content and editorial media checks passed: ${routes.size} routes, inline figure ownership, source scopes, city dates and official image${base ? " (including rendered pages)" : " (data only; set CONTENT_AUDIT_BASE_URL for rendered checks)"}.`);
