import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist/client");
const sitemap = path.join(dist, "sitemap.xml");
const plan = path.join(root, "docs/seo-keyword-plan-2026-08-18.md");
const pagesDir = path.join(root, "src/pages");

function read(file) { return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : ""; }
function htmlFor(pathname) {
  const candidates = pathname === "/"
    ? [path.join(dist, "index.html")]
    : [path.join(dist, pathname, "index.html"), path.join(dist, `${pathname}.html`), path.join(dist, pathname, "index.htm")];
  return candidates.find((file) => fs.existsSync(file)) ?? candidates[0];
}
function match(text, regex) { return regex.exec(text)?.[1]?.trim() ?? ""; }
function sourceCandidatesFor(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const candidates = [];
  if (!segments.length) candidates.push(path.join(pagesDir, "index.astro"));
  else {
    candidates.push(path.join(pagesDir, ...segments) + ".astro");
    candidates.push(path.join(pagesDir, ...segments, "index.astro"));
  }
  if (segments[0] === "tracker" && segments.length === 2) candidates.push(path.join(pagesDir, "tracker", "[id].astro"));
  if (segments[0] === "hurricane-tracker" && segments[1] === "city" && segments.length === 3) candidates.push(path.join(pagesDir, "hurricane-tracker", "city", "[city].astro"));
  if (segments[0] === "hurricane-tracker" && segments[1] === "storm" && segments.length === 3) candidates.push(path.join(pagesDir, "hurricane-tracker", "storm", "[storm].astro"));
  if (segments[0] === "blog" && segments.length === 2) candidates.push(path.join(pagesDir, "blog", "[slug].astro"));
  if (segments[0] === "tools" && segments[1] === "preparedness-checklist") candidates.push(path.join(pagesDir, "tools", "preparedness-checklist.ts"));
  return [...new Set(candidates)].filter((file) => fs.existsSync(file));
}

const urls = [...read(sitemap).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const rows = urls.map((pathname) => {
  const staticFile = htmlFor(pathname);
  const html = read(staticFile);
  const sourceFiles = sourceCandidatesFor(pathname);
  const renderMode = html ? "static" : sourceFiles.length ? "server" : "unknown";
  const title = match(html, /<title>(.*?)<\/title>/is);
  const description = match(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)/i);
  const h1 = match(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const canonical = match(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i);
  const issues = [];
  if (renderMode === "static") {
    if (!title) issues.push("missing-title");
    else if (title.length > 70) issues.push(`title-${title.length}-chars`);
    if (!description) issues.push("missing-description");
    else if (description.length < 90) issues.push(`description-${description.length}-chars`);
    if (!h1) issues.push("missing-h1");
    if (!canonical) issues.push("missing-canonical");
  } else if (renderMode === "unknown") issues.push("missing-source-mapping");
  return { pathname, renderMode, title, description, h1, issues };
});

const priority = ["/hurricane-tracker/live/", "/tracker/florida/", "/tracker/georgia/", "/tracker/north-carolina/", "/tracker/south-carolina/", "/tracker/texas/", "/hurricane-tracker/gulf/"];
const report = {
  generatedAt: new Date().toISOString(),
  sitemapUrls: urls.length,
  priorityPages: rows.filter((row) => priority.includes(row.pathname)).map((row) => ({ pathname: row.pathname, renderMode: row.renderMode, title: row.title || "server-rendered", titleLength: row.title.length, descriptionLength: row.description.length, h1: row.h1, issues: row.issues })),
  pagesWithIssues: rows.filter((row) => row.issues.length).map((row) => ({ pathname: row.pathname, renderMode: row.renderMode, title: row.title, descriptionLength: row.description.length, issues: row.issues })),
  keywordPlanPresent: Boolean(read(plan))
};
console.log(JSON.stringify(report, null, 2));
if (!report.keywordPlanPresent || report.sitemapUrls === 0) process.exit(1);
