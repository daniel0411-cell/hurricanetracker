import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const distDir = path.join(root, "dist/client");
const baseUrl = process.env.CONTENT_AUDIT_BASE_URL;
async function loadTsModule(file) {
  const output = ts.transpileModule(fs.readFileSync(path.join(root, file), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
}
const { BLOG_CATEGORY_PAGES, blogPosts, getBlogOgImage } = await loadTsModule("src/data/blog.ts");
const { hurricaneCities } = await loadTsModule("src/data/cities.ts");
const { stormTrackerPages } = await loadTsModule("src/data/stormPages.ts");
const findings = [];
const standaloneBlogRoutes = fs.readdirSync(path.join(root, "src/pages/blog"))
  .filter((file) => file.endsWith(".astro") && file !== "index.astro" && !file.startsWith("["))
  .map((file) => `/blog/${file.slice(0, -6)}/`);
const correctedArticles = {
  "/blog/flood-advisory-vs-watch-vs-warning/": {
    source: "https://www.weather.gov/safety/flood-watch-warning",
    exercise: "flood-reading-answer",
    forbidden: /three-step scale|Each step up the scale|Flooding is not happening yet|No immediate threat to life is expected|warning is (?:&quot;|")go/i
  },
  "/blog/rip-current-statement-gulf-coast/": {
    source: "https://www.weather.gov/safety/ripcurrent-surviving",
    exercise: "rip-reading-answer",
    forbidden: /narrow continental shelf|#1\s+(?:hurricane-season|killer)|why Alabama and Georgia beaches are vulnerable/i
  }
};
const revisedTopicChecks = {
  "/hurricane-tracker/path/": ["Transcribe Three Rows", "21 hours", "al112017.discus.026.shtml"],
  "/hurricane-tracker/radar/": ["DBZ and KTS", "KEOX", "michael-2018-reflectivity-detail.png", "michael-2018-velocity-detail.png"],
  "/hurricane-tracker/live-tracker/": ["Empty Active-Storm List", "060509", "current-storms-20261106-094422Z.json", "twoat-20261106-saved-094422Z.txt"]
};
const routes = [...new Set([
  "/hurricane-tracker/live/", "/learn/", "/blog/", "/radar/", "/compare/", "/tools/",
  "/tools/preparedness-checklist/", "/tools/storm-surge-checker/", "/tools/evacuation-decision-helper/",
  "/about/", "/storm/2026-bertha/", "/storm/2026-cristobal/",
  ...standaloneBlogRoutes,
  ...Object.keys(revisedTopicChecks),
  ...stormTrackerPages.map((storm) => `/hurricane-tracker/storm/${storm.slug}/`),
  ...hurricaneCities.map((city) => `/hurricane-tracker/city/${city.slug}/`),
  ...BLOG_CATEGORY_PAGES.map((category) => `/blog/category/${category.slug}/`),
  ...blogPosts.map((post) => `/blog/${post.slug}/`)
])];
for (const post of blogPosts) {
  if (!post.sections.length || !post.sections.some((section) => section.body?.trim())) findings.push(`${post.slug}: missing article body`);
  if (!post.sources?.length) findings.push(`${post.slug}: missing references`);
  for (const source of post.sources ?? []) {
    try {
      if (new URL(source.href).protocol !== "https:" || !source.label.trim()) throw new Error();
    } catch { findings.push(`${post.slug}: invalid reference ${source.href}`); }
  }
  if (!fs.existsSync(path.join(root, "public", getBlogOgImage(post)))) findings.push(`${post.slug}: missing OG asset`);
  if (post.review && post.review.date > post.dateModified) findings.push(`${post.slug}: correction newer than modification date`);
  for (const pattern of [/without further proof/i, /evacuation overlays/i, /single most common reason/i, /uses this ensemble information to build the official forecast cone/i]) {
    if (pattern.test(JSON.stringify([post.sections, post.faqs]))) findings.push(`${post.slug}: corrected misleading claim reintroduced (${pattern})`);
  }
  if (post.slug === "hurricane-insurance-claim-guide-documentation") {
    const article = JSON.stringify([post.sections, post.faqs]);
    if (/within days to a few weeks|many are one year|within the first 24-48 hours|Standard homeowners policies cover wind damage/i.test(article)) findings.push(`${post.slug}: unsupported general claim deadline or coverage reintroduced`);
    if (!post.sections.some((section) => section.heading === "Keep Three Deadline Types Separate")) findings.push(`${post.slug}: missing separate deadline record`);
  }
}
let checked = 0;
for (const route of routes) {
  const file = path.join(distDir, route, "index.html");
  let html;
  try {
    if (fs.existsSync(file)) html = fs.readFileSync(file, "utf8");
    else if (baseUrl) {
      const response = await fetch(new URL(route, baseUrl), { redirect: "manual", signal: AbortSignal.timeout(20000) });
      if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
      html = await response.text();
    } else throw new Error("SSR output requires CONTENT_AUDIT_BASE_URL pointing to the built local worker");
    checked++;
    for (const [name, pattern] of [
      ["title", /<title>[^<]+<\/title>/i], ["canonical", /<link\b[^>]*rel="canonical"/i],
      ["main content", /<main\b/i], ["heading", /<h1\b/i]
    ]) if (!pattern.test(html)) findings.push(`${route}: missing ${name}`);
    if (route === "/storm/2026-cristobal/" && /forecast correctly called dissipation|reshuffled the naming order|dissipated over cooler water|dissipated even faster/i.test(html)) {
      findings.push(`${route}: unsupported outcome or naming claim reintroduced`);
    }
    if (route === "/storm/2026-bertha/" && /a forecast verified as the storm/i.test(html)) {
      findings.push(`${route}: unsupported forecast verification reintroduced`);
    }
    const correction = correctedArticles[route];
    for (const required of revisedTopicChecks[route] ?? []) {
      if (!html.includes(required)) findings.push(`${route}: missing product-reading evidence: ${required}`);
    }
    if (route === "/blog/how-to-use-hurricane-tracker-live-tools/" && !html.includes("Hand Off Sources, Changes and Unfinished Work")) findings.push(`${route}: missing independent household handoff task`);
    if (/Search intent|People search live tracker|gives searchers a local|Radar search hub|Preparedness search hub/.test(html)) findings.push(`${route}: internal content-planning language exposed to readers`);
    for (const [city, required] of [
      ["charleston", ["Charleston Reading Task", "Charleston-County-Evac-Zones.pdf", "edition date not stated"]],
      ["wilmington", ["Wilmington Reading Task", "25.58", "BGWN7", "HurricaneFlorence"]]
    ]) {
      if (route === `/hurricane-tracker/city/${city}/`) for (const marker of required) {
        if (!html.includes(marker)) findings.push(`${route}: missing local reading task or source: ${marker}`);
      }
    }
    if (correction) {
      for (const required of ['id="article-sources"', `id="${correction.exercise}"`, correction.source]) {
        if (!html.includes(required)) findings.push(`${route}: missing corrected source or reading exercise: ${required}`);
      }
      if (correction.forbidden.test(html)) findings.push(`${route}: corrected safety claim reintroduced`);
    }
    if (route === "/tools/evacuation-decision-helper/") {
      for (const required of ['value="unknown"', 'id="pending-arrangements"', 'Official status has not been confirmed']) {
        if (!html.includes(required)) findings.push(`${route}: missing unconfirmed-status or arrangement record: ${required}`);
      }
      if (/name="(?:locationRisk|housingRisk)"|household score [024]|Recommended Planning Level|Calculate Decision/i.test(html)) findings.push(`${route}: unsupported household scoring reintroduced`);
    }
    const storm = stormTrackerPages.find((item) => route === `/hurricane-tracker/storm/${item.slug}/`);
    if (storm?.historicalReport) {
      const report = storm.historicalReport;
      for (const source of [report.url, ...(report.relatedSources ?? []).map((item) => item.href)]) {
        if (!html.includes(source.replaceAll("&", "&amp;"))) findings.push(`${route}: historical original source not rendered: ${source}`);
      }
      if (report.kind === "advisory" && /Selected Events From the Post-Season Analysis|\(original PDF\)/i.test(html)) findings.push(`${route}: operational bulletin mislabeled as a post-season PDF`);
    }
    const post = blogPosts.find((item) => route === `/blog/${item.slug}/`);
    if (post) {
      if (!html.includes('id="article-sources"')) findings.push(`${route}: references not rendered`);
      if (!html.includes(getBlogOgImage(post))) findings.push(`${route}: expected OG image not rendered`);
      for (const source of post.sources) {
        if (!html.includes(source.href.replaceAll("&", "&amp;"))) findings.push(`${route}: reference not rendered: ${source.href}`);
      }
    }
  } catch (error) { findings.push(`${route}: ${error.message}`); }
}
for (const finding of findings) console.error(`[content-audit] FAIL ${finding}`);
console.log(`[content-audit] Coverage: ${checked}/${routes.length} required pages, ${blogPosts.length} article source/asset records; no pages silently skipped.`);
if (findings.length) process.exit(1);
console.log("[content-audit] OK. Structural checks do not replace editorial fact review or establish AdSense approval.");
