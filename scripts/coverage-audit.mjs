import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const pagesDir = path.join(root, "src/pages");
const distDir = path.join(root, "dist/client");
const siteUrl = "https://www.hurricanetracker.cc";

const excludedSourcePatterns = [
  /^404\.astro$/,
  /^api\//,
  /^embed\//,
  /^robots\.txt\.ts$/,
  /^rss\.xml\.ts$/,
  /^search-index\.json\.ts$/,
  /^sitemap(?:-index)?\.xml\.ts$/,
  /\[[^\]]+\]/
];

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

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(abs));
    else if (/\.(astro|ts)$/.test(entry.name)) files.push(abs);
  }
  return files;
}

function routeFromSource(file) {
  const rel = path.relative(pagesDir, file).replaceAll(path.sep, "/");
  if (excludedSourcePatterns.some((pattern) => pattern.test(rel))) return null;
  const withoutExt = rel.replace(/\.(astro|ts)$/, "");
  if (withoutExt === "index") return "/";
  const route = withoutExt.endsWith("/index") ? withoutExt.slice(0, -"/index".length) : withoutExt;
  return route ? `/${route}/` : "/";
}

function normalizePath(urlOrPath) {
  try {
    return new URL(urlOrPath).pathname;
  } catch {
    return urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  }
}

function unique(values) {
  return [...new Set(values)].sort();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

function extractRssLinks(xml) {
  return [...xml.matchAll(/<link>(.*?)<\/link>/g)]
    .map((match) => match[1])
    .filter((link) => link !== `${siteUrl}/`);
}

const [{ blogPosts }, { hurricaneCities }, { coastalStates }, { stormTrackerPages }] = await Promise.all([
  loadTsModule(path.join(root, "src/data/blog.ts")),
  loadTsModule(path.join(root, "src/data/cities.ts")),
  loadTsModule(path.join(root, "src/data/states.ts")),
  loadTsModule(path.join(root, "src/data/stormPages.ts"))
]);

const sitemapXml = readText(path.join(distDir, "sitemap.xml"));
const searchIndexRaw = readText(path.join(distDir, "search-index.json"));
const rssXml = readText(path.join(distDir, "rss.xml"));

if (!sitemapXml || !searchIndexRaw || !rssXml) {
  console.error("[coverage-audit] Missing dist/client SEO outputs. Run npm run build first.");
  process.exit(1);
}

const sourceRoutes = unique(walk(pagesDir).map(routeFromSource).filter(Boolean));
const dataRoutes = unique([
  ...coastalStates.map((state) => `/tracker/${state.slug}/`),
  ...hurricaneCities.map((city) => `/hurricane-tracker/city/${city.slug}/`),
  ...stormTrackerPages.map((storm) => `/hurricane-tracker/storm/${storm.slug}/`),
  ...blogPosts.map((post) => `/blog/${post.slug}/`)
]);
const expectedIndexableRoutes = unique([...sourceRoutes, ...dataRoutes]);

const sitemapPaths = unique(extractLocs(sitemapXml).map(normalizePath));
const searchIndex = JSON.parse(searchIndexRaw);
const searchPaths = unique((searchIndex.entries ?? []).map((entry) => normalizePath(entry.url)));
const rssPaths = unique(extractRssLinks(rssXml).map(normalizePath));

const missingFromSitemap = expectedIndexableRoutes.filter((route) => !sitemapPaths.includes(route));
const missingFromSearchIndex = expectedIndexableRoutes.filter((route) => !searchPaths.includes(route));

const expectedRssRoutes = unique([
  "/hurricane-tracker/live/",
  "/hurricane-tracker/city/",
  "/tools/",
  "/radar/",
  "/alerts/",
  "/learn/",
  ...hurricaneCities.map((city) => `/hurricane-tracker/city/${city.slug}/`),
  ...stormTrackerPages.map((storm) => `/hurricane-tracker/storm/${storm.slug}/`),
  ...blogPosts.map((post) => `/blog/${post.slug}/`)
]);
const missingFromRss = expectedRssRoutes.filter((route) => !rssPaths.includes(route));

for (const route of missingFromSitemap) console.log(`[coverage-audit] FAIL sitemap missing route: ${route}`);
for (const route of missingFromSearchIndex) console.log(`[coverage-audit] FAIL search index missing route: ${route}`);
for (const route of missingFromRss) console.log(`[coverage-audit] FAIL RSS missing discovery route: ${route}`);

if (missingFromSitemap.length || missingFromSearchIndex.length || missingFromRss.length) {
  console.error(
    `[coverage-audit] ${missingFromSitemap.length} sitemap, ${missingFromSearchIndex.length} search-index, and ${missingFromRss.length} RSS coverage issue(s) found.`
  );
  process.exit(1);
}

console.log(
  `[coverage-audit] OK — checked ${expectedIndexableRoutes.length} indexable route(s) and ${expectedRssRoutes.length} RSS discovery route(s).`
);
