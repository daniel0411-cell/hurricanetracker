import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const distDir = path.join(root, "dist/client");

function loadTsModule(file) {
  const source = fs.readFileSync(file, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022
    }
  }).outputText;
  const dataUrl = `data:text/javascript;base64,${Buffer.from(output).toString("base64")}`;
  return import(dataUrl);
}

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function unique(values) {
  return [...new Set(values)].sort();
}

function normalizePath(urlOrPath) {
  try {
    const parsed = new URL(urlOrPath);
    return parsed.pathname;
  } catch {
    return urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  }
}

function extractSitemapUrls(xml) {
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml))) {
    urls.push(match[1]);
  }
  return urls;
}

function countBySection(paths) {
  const hubPaths = ["/tracker/", "/hurricane-tracker/live/", "/hurricane-tracker/city/", "/hurricane-tracker/storm/", "/learn/"];
  return {
    home: paths.filter((item) => item === "/").length,
    stateTrackers: paths.filter((item) => /^\/tracker\/[^/]+\/$/.test(item)).length,
    cityTrackers: paths.filter((item) => /^\/hurricane-tracker\/city\/[^/]+\/$/.test(item)).length,
    stormTrackers: paths.filter((item) => /^\/hurricane-tracker\/storm\/[^/]+\/$/.test(item)).length,
    tools: paths.filter((item) => /^\/tools\/.+\/$/.test(item)).length,
    blog: paths.filter((item) => /^\/blog\/.+\/$/.test(item)).length,
    hubs: paths.filter((item) => hubPaths.includes(item)).length,
    other: paths.filter((item) => {
      return ![
        item === "/",
        /^\/tracker\/[^/]+\/$/.test(item),
        /^\/hurricane-tracker\/city\/[^/]+\/$/.test(item),
        /^\/hurricane-tracker\/storm\/[^/]+\/$/.test(item),
        /^\/tools\/.+\/$/.test(item),
        /^\/blog\/.+\/$/.test(item),
        hubPaths.includes(item)
      ].some(Boolean);
    }).length
  };
}

const [
  { BLOG_CATEGORY_PAGES, blogPosts },
  { hurricaneCities },
  { coastalStates },
  { stormTrackerPages },
  { topicPages }
] = await Promise.all([
  loadTsModule(path.join(root, "src/data/blog.ts")),
  loadTsModule(path.join(root, "src/data/cities.ts")),
  loadTsModule(path.join(root, "src/data/states.ts")),
  loadTsModule(path.join(root, "src/data/stormPages.ts")),
  loadTsModule(path.join(root, "src/data/topicPages.ts"))
]);

const sitemapXml = readText(path.join(distDir, "sitemap.xml"));
const searchIndexRaw = readText(path.join(distDir, "search-index.json"));

if (!sitemapXml) {
  console.error("[seo-audit] Missing dist/client/sitemap.xml. Run npm run build first.");
  process.exit(1);
}

if (!searchIndexRaw) {
  console.error("[seo-audit] Missing dist/client/search-index.json. Run npm run build first.");
  process.exit(1);
}

const sitemapUrls = extractSitemapUrls(sitemapXml);
const sitemapPaths = unique(sitemapUrls.map(normalizePath));
const searchIndex = JSON.parse(searchIndexRaw);
const searchPaths = unique((searchIndex.entries ?? []).map((entry) => normalizePath(entry.url)));

const expectedPaths = unique([
  "/",
  "/tracker/",
  "/hurricane-tracker/live/",
  "/hurricane-tracker/city/",
  "/hurricane-tracker/storm/",
  "/radar/",
  "/alerts/",
  "/learn/",
  "/topics/",
  "/preparedness/",
  "/tools/",
  "/tools/my-hurricane-dashboard/",
  "/tools/impact-window-estimator/",
  "/tools/local-risk-plan/",
  "/tools/preparedness-checklist/",
  "/tools/evacuation-decision-helper/",
  "/tools/hurricane-brief/",
  "/tools/power-outage-planner/",
  "/tools/storm-distance-calculator/",
  "/tools/alert-action-decoder/",
  "/tools/storm-surge-checker/",
  "/tools/family-communication-plan/",
  "/compare/",
  "/newsletter/",
  "/site-map/",
  "/updates/",
  "/storm-archive/",
  "/blog/",
  "/blog/hurricane-watch-vs-warning/",
  "/blog/flood-advisory-vs-watch-vs-warning/",
  "/blog/rip-current-statement-gulf-coast/",
  "/decision-guide/",
  "/about/",
  ...coastalStates.map((state) => `/tracker/${state.slug}/`),
  ...topicPages.map((page) => `/hurricane-tracker/${page.slug}/`),
  ...hurricaneCities.map((city) => `/hurricane-tracker/city/${city.slug}/`),
  ...stormTrackerPages.map((storm) => `/hurricane-tracker/storm/${storm.slug}/`),
  ...BLOG_CATEGORY_PAGES.map((category) => `/blog/category/${category.slug}/`),
  ...blogPosts.map((post) => `/blog/${post.slug}/`)
]);

const missingFromSitemap = expectedPaths.filter((item) => !sitemapPaths.includes(item));
const missingFromSearchIndex = expectedPaths.filter((item) => !searchPaths.includes(item));
const orphanSearchEntries = searchPaths.filter((item) => !sitemapPaths.includes(item) && !item.startsWith("/embed/"));
const duplicateSitemapUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);

const report = {
  generatedAt: new Date().toISOString(),
  sitemap: {
    totalUrls: sitemapPaths.length,
    duplicateUrls: unique(duplicateSitemapUrls),
    bySection: countBySection(sitemapPaths)
  },
  contentSources: {
    states: coastalStates.length,
    topicHubs: topicPages.length,
    cities: hurricaneCities.length,
    stormNamePages: stormTrackerPages.length,
    blogPosts: blogPosts.length
  },
  searchIndex: {
    totalEntries: searchPaths.length,
    missingExpectedPaths: missingFromSearchIndex,
    entriesNotInSitemap: orphanSearchEntries
  },
  coverage: {
    expectedIndexablePaths: expectedPaths.length,
    missingFromSitemap
  }
};

console.log(JSON.stringify(report, null, 2));

if (missingFromSitemap.length || duplicateSitemapUrls.length || missingFromSearchIndex.length || orphanSearchEntries.length) {
  process.exit(1);
}
