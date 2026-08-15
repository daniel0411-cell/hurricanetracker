import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist/client");
const pagesDir = path.join(root, "src/pages");
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

function sourceCandidatesFor(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const candidates = [];

  if (segments.length === 0) {
    candidates.push(path.join(pagesDir, "index.astro"));
  } else {
    candidates.push(path.join(pagesDir, ...segments) + ".astro");
    candidates.push(path.join(pagesDir, ...segments) + ".ts");
    candidates.push(path.join(pagesDir, ...segments, "index.astro"));
    candidates.push(path.join(pagesDir, ...segments, "index.ts"));
  }

  if (segments[0] === "tracker" && segments.length === 2) {
    candidates.push(path.join(pagesDir, "tracker", "[id].astro"));
  }

  if (segments[0] === "hurricane-tracker" && segments[1] === "city" && segments.length === 3) {
    candidates.push(path.join(pagesDir, "hurricane-tracker", "city", "[city].astro"));
  }

  if (segments[0] === "hurricane-tracker" && segments[1] === "storm" && segments.length === 3) {
    candidates.push(path.join(pagesDir, "hurricane-tracker", "storm", "[storm].astro"));
  }

  if (segments[0] === "blog" && segments.length === 2) {
    candidates.push(path.join(pagesDir, "blog", "[slug].astro"));
  }

  return [...new Set(candidates)].filter((file) => fs.existsSync(file));
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
const dynamicPages = paths
  .map((pathname) => ({
    pathname,
    staticFile: htmlFileFor(pathname),
    sourceFiles: sourceCandidatesFor(pathname)
  }))
  .filter((page) => !fs.existsSync(page.staticFile));

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

for (const page of dynamicPages) {
  if (!page.sourceFiles.length) {
    findings.push(`${page.pathname} has no matching src/pages source file`);
    continue;
  }

  const source = page.sourceFiles.map((file) => readText(file)).join("\n");
  const relFiles = page.sourceFiles.map((file) => path.relative(root, file)).join(", ");

  const usesAstroLayout = /<(?:Layout|BaseLayout)\b/.test(source);
  const rendersHtmlEndpoint = /<!doctype html>|<html\s+lang=/.test(source);

  if (!usesAstroLayout && !rendersHtmlEndpoint) {
    findings.push(`${page.pathname} source missing Layout/BaseLayout or HTML endpoint render (${relFiles})`);
  }
  if (!/\btitle\s*=/.test(source)) findings.push(`${page.pathname} source missing title prop (${relFiles})`);
  if (!/\bdescription\s*=/.test(source)) findings.push(`${page.pathname} source missing description prop (${relFiles})`);
  if (!/\bcanonical\s*=/.test(source)) {
    findings.push(`${page.pathname} source missing canonical prop/value (${relFiles})`);
  }
  if (!/\bjsonLd\s*=/.test(source)) findings.push(`${page.pathname} source missing jsonLd prop (${relFiles})`);
  if (!/articleSchema|blogPostingSchema|webApplicationSchema|itemListSchema|governmentServiceSchema|howToSchema/.test(source)) {
    findings.push(`${page.pathname} source missing page-level structured data helper (${relFiles})`);
  }
}

for (const finding of findings) {
  console.log(`[metadata-audit] FAIL ${finding}`);
}

if (findings.length) {
  console.error(`[metadata-audit] ${findings.length} metadata issue(s) found across ${staticPages.length} static sitemap page(s).`);
  process.exit(1);
}

console.log(
  `[metadata-audit] OK — checked ${staticPages.length} static sitemap page(s) and ${dynamicPages.length} dynamic sitemap page(s) for SEO metadata coverage.`
);
