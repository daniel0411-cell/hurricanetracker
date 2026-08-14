import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist/client");
const sitemapFile = path.join(distDir, "sitemap.xml");

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function extractSitemapPaths(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

function htmlFileFor(pathname) {
  if (pathname === "/") return path.join(distDir, "index.html");
  return path.join(distDir, pathname, "index.html");
}

function firstMatch(text, regex) {
  return regex.exec(text)?.[1] ?? "";
}

const sitemapXml = readText(sitemapFile);
if (!sitemapXml) {
  console.error("[metadata-audit] Missing dist/client/sitemap.xml. Run npm run build first.");
  process.exit(1);
}

const paths = extractSitemapPaths(sitemapXml);
const staticPages = paths
  .map((pathname) => ({ pathname, file: htmlFileFor(pathname) }))
  .filter((page) => fs.existsSync(page.file));

const findings = [];
for (const page of staticPages) {
  const html = readText(page.file);
  const title = firstMatch(html, /<title>(.*?)<\/title>/is).trim();
  const description = firstMatch(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i).trim();
  const canonical = firstMatch(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i).trim();
  const robots = firstMatch(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i).trim();
  const jsonLdCount = (html.match(/type=["']application\/ld\+json["']/gi) ?? []).length;
  const expectedCanonical = `https://www.hurricanetracker.cc${page.pathname}`;

  if (!title) findings.push(`${page.pathname} missing <title>`);
  if (title.length > 70) findings.push(`${page.pathname} title too long (${title.length})`);
  if (!description) findings.push(`${page.pathname} missing meta description`);
  if (description && (description.length < 50 || description.length > 180)) findings.push(`${page.pathname} description length ${description.length}`);
  if (canonical !== expectedCanonical) findings.push(`${page.pathname} canonical mismatch: ${canonical || "missing"}`);
  if (!/index,follow/.test(robots)) findings.push(`${page.pathname} robots missing index,follow`);
  if (!jsonLdCount) findings.push(`${page.pathname} missing JSON-LD`);
}

for (const finding of findings) {
  console.log(`[metadata-audit] FAIL ${finding}`);
}

if (findings.length) {
  console.error(`[metadata-audit] ${findings.length} metadata issue(s) found across ${staticPages.length} static sitemap page(s).`);
  process.exit(1);
}

console.log(`[metadata-audit] OK — checked ${staticPages.length} static sitemap page(s) for title, description, canonical, robots, and JSON-LD.`);
