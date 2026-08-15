import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist/client");
const sitemapFile = path.join(distDir, "sitemap.xml");

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(abs));
    else if (entry.name.endsWith(".html")) files.push(abs);
  }
  return files;
}

function normalizePath(href) {
  const url = new URL(href, "https://www.hurricanetracker.cc");
  if (url.origin !== "https://www.hurricanetracker.cc") return null;
  let pathname = url.pathname;
  if (!path.extname(pathname) && !pathname.endsWith("/")) pathname += "/";
  return pathname;
}

function routeExists(pathname, sitemapPaths) {
  if (sitemapPaths.has(pathname)) return true;
  if (pathname === "/embed/radar") return true;
  if (pathname.startsWith("/api/")) return true;
  if (pathname === "/manifest.webmanifest" || pathname === "/rss.xml" || pathname === "/robots.txt") return true;
  if (/\.(png|jpg|jpeg|webp|svg|ico|json|xml|txt|webmanifest)$/i.test(pathname)) {
    return fs.existsSync(path.join(distDir, pathname));
  }
  if (pathname === "/") return fs.existsSync(path.join(distDir, "index.html"));
  return fs.existsSync(path.join(distDir, pathname, "index.html"));
}

const sitemapXml = readText(sitemapFile);
if (!sitemapXml) {
  console.error("[internal-link-audit] Missing dist/client/sitemap.xml. Run npm run build first.");
  process.exit(1);
}

const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
);
const htmlFiles = walk(distDir);
const findings = [];

for (const file of htmlFiles) {
  const html = readText(file);
  const rel = path.relative(distDir, file);
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1].trim();
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      continue;
    }

    let pathname;
    try {
      pathname = normalizePath(href);
    } catch {
      findings.push(`${rel} has invalid href: ${href}`);
      continue;
    }

    if (!pathname) continue;
    if (!routeExists(pathname, sitemapPaths)) {
      findings.push(`${rel} links to missing internal path: ${href}`);
    }
  }
}

for (const finding of findings) {
  console.log(`[internal-link-audit] FAIL ${finding}`);
}

if (findings.length) {
  console.error(`[internal-link-audit] ${findings.length} internal link issue(s) found across ${htmlFiles.length} HTML file(s).`);
  process.exit(1);
}

console.log(`[internal-link-audit] OK — checked internal links across ${htmlFiles.length} HTML file(s).`);
