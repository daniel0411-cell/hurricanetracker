import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist/client");
const searchFile = path.join(distDir, "search-index.json");
const sitemapFile = path.join(distDir, "sitemap.xml");

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function normalizePath(urlOrPath) {
  try {
    return new URL(urlOrPath, "https://www.hurricanetracker.cc").pathname;
  } catch {
    return urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  }
}

const searchRaw = readText(searchFile);
const sitemapXml = readText(sitemapFile);
if (!searchRaw || !sitemapXml) {
  console.error("[search-audit] Missing dist/client search-index.json or sitemap.xml. Run npm run build first.");
  process.exit(1);
}

const entries = JSON.parse(searchRaw).entries ?? [];
const sitemapPaths = new Set([...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname));
const findings = [];
const seen = new Map();

for (const entry of entries) {
  const pathname = normalizePath(entry.url ?? "");
  if (!entry.url || !entry.url.startsWith("/")) findings.push(`entry has non-relative URL: ${entry.url || "missing"}`);
  if (!sitemapPaths.has(pathname) && !pathname.startsWith("/embed/")) findings.push(`${pathname} search entry not in sitemap`);
  if (seen.has(pathname)) findings.push(`${pathname} duplicate search entry also used by ${seen.get(pathname)}`);
  seen.set(pathname, entry.title ?? "untitled");

  if (!entry.title || entry.title.length < 8 || entry.title.length > 90) {
    findings.push(`${pathname} title length invalid (${entry.title?.length ?? 0})`);
  }
  if (!entry.description || entry.description.length < 40 || entry.description.length > 220) {
    findings.push(`${pathname} description length invalid (${entry.description?.length ?? 0})`);
  }
  if (!entry.category || entry.category.length < 3) findings.push(`${pathname} missing category`);
  if (!entry.body || entry.body.length < 25) findings.push(`${pathname} body search text too short`);
}

const categoryCounts = entries.reduce((counts, entry) => {
  counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  return counts;
}, new Map());
for (const required of ["Tracker", "City Tracker", "Storm Tracker", "Tools", "Blog"]) {
  if (!categoryCounts.has(required)) findings.push(`missing search category: ${required}`);
}

for (const finding of findings) console.log(`[search-audit] FAIL ${finding}`);

if (findings.length) {
  console.error(`[search-audit] ${findings.length} search index issue(s) found across ${entries.length} entries.`);
  process.exit(1);
}

console.log(`[search-audit] OK — checked ${entries.length} search entries across ${categoryCounts.size} categories.`);
