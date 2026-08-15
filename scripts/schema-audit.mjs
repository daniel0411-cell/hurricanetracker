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
  if (!segments.length) {
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
  if (segments[0] === "blog" && segments[1] === "category" && segments.length === 3) {
    candidates.push(path.join(pagesDir, "blog", "category", "[category].astro"));
  }
  return [...new Set(candidates)].filter((file) => fs.existsSync(file));
}

function collectTypes(node, types = new Set()) {
  if (!node || typeof node !== "object") return types;
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, types);
    return types;
  }
  const type = node["@type"];
  if (Array.isArray(type)) type.forEach((item) => types.add(item));
  else if (type) types.add(type);
  for (const value of Object.values(node)) collectTypes(value, types);
  return types;
}

function parseJsonLd(html, pathname) {
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const parsed = [];
  for (const script of scripts) {
    try {
      parsed.push(JSON.parse(script[1]));
    } catch {
      throw new Error(`${pathname} has invalid JSON-LD`);
    }
  }
  return parsed;
}

function expectedPageTypes(pathname) {
  if (pathname.startsWith("/blog/category/")) return ["Article", "ItemList"];
  if (pathname.startsWith("/blog/") && pathname !== "/blog/") return ["BlogPosting"];
  if (pathname.startsWith("/tools/") && pathname !== "/tools/") return ["WebApplication"];
  if (pathname === "/tools/" || pathname === "/hurricane-tracker/city/" || pathname === "/hurricane-tracker/storm/") {
    return ["Article", "ItemList"];
  }
  return ["Article"];
}

const sitemapXml = readText(sitemapFile);
if (!sitemapXml) {
  console.error("[schema-audit] Missing dist/client/sitemap.xml. Run npm run build first.");
  process.exit(1);
}

const findings = [];
const paths = extractSitemapPaths(sitemapXml);
const staticPages = [];
const dynamicPages = [];

for (const pathname of paths) {
  const htmlFile = htmlFileFor(pathname);
  if (fs.existsSync(htmlFile)) staticPages.push({ pathname, htmlFile });
  else dynamicPages.push({ pathname, sourceFiles: sourceCandidatesFor(pathname) });
}

for (const page of staticPages) {
  const html = readText(page.htmlFile);
  let schemas;
  try {
    schemas = parseJsonLd(html, page.pathname);
  } catch (error) {
    findings.push(error.message);
    continue;
  }
  if (!schemas.length) {
    findings.push(`${page.pathname} missing JSON-LD script`);
    continue;
  }
  const types = collectTypes(schemas);
  for (const required of ["WebSite", "BreadcrumbList"]) {
    if (!types.has(required)) findings.push(`${page.pathname} missing ${required} schema`);
  }
  if (!expectedPageTypes(page.pathname).some((type) => types.has(type))) {
    findings.push(`${page.pathname} missing expected page schema (${expectedPageTypes(page.pathname).join(" or ")})`);
  }
}

for (const page of dynamicPages) {
  const relFiles = page.sourceFiles.map((file) => path.relative(root, file)).join(", ");
  if (!page.sourceFiles.length) {
    findings.push(`${page.pathname} has no source candidate for schema audit`);
    continue;
  }
  const source = page.sourceFiles.map((file) => readText(file)).join("\n");
  if (!/jsonLd\s*=/.test(source)) findings.push(`${page.pathname} source missing jsonLd prop (${relFiles})`);
  if (!/websiteSchema\(/.test(source)) findings.push(`${page.pathname} source missing websiteSchema (${relFiles})`);
  if (!/blogPostingSchema|articleSchema|webApplicationSchema|itemListSchema|governmentServiceSchema|howToSchema/.test(source)) {
    findings.push(`${page.pathname} source missing page schema helper (${relFiles})`);
  }
}

for (const finding of findings) console.log(`[schema-audit] FAIL ${finding}`);

if (findings.length) {
  console.error(`[schema-audit] ${findings.length} schema issue(s) found.`);
  process.exit(1);
}

console.log(`[schema-audit] OK — checked ${staticPages.length} static page(s) and ${dynamicPages.length} dynamic page source group(s).`);
