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

function localPublicFile(src) {
  const pathname = src.startsWith("http") ? new URL(src).pathname : src;
  if (!pathname.startsWith("/")) return null;
  return path.join(root, "public", pathname);
}

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/\s([:\w-]+)=["']([^"']*)["']/g)].map((match) => [match[1], match[2]]));
}

function extractSitemapPaths(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

function htmlFileFor(pathname) {
  if (pathname === "/") return path.join(distDir, "index.html");
  return path.join(distDir, pathname, "index.html");
}

const findings = [];
const { blogPosts } = await loadTsModule(path.join(root, "src/data/blog.ts"));
const sitemapXml = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf8");
const sitemapHtmlFiles = extractSitemapPaths(sitemapXml)
  .map(htmlFileFor)
  .filter((file) => fs.existsSync(file));

for (const post of blogPosts) {
  if (!post.image) findings.push(`blog ${post.slug} missing image`);
  if (!post.imageAlt || post.imageAlt.length < 35) findings.push(`blog ${post.slug} imageAlt too short or missing`);
  const imageFile = localPublicFile(post.image);
  if (!imageFile || !fs.existsSync(imageFile)) findings.push(`blog ${post.slug} missing public image: ${post.image}`);
}

for (const file of sitemapHtmlFiles) {
  const rel = path.relative(distDir, file);
  const html = fs.readFileSync(file, "utf8");
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)?.[1];
  if (!ogImage) {
    findings.push(`${rel} missing og:image`);
  } else {
    const imageFile = localPublicFile(ogImage);
    if (imageFile && !fs.existsSync(imageFile)) findings.push(`${rel} og:image points to missing public file: ${ogImage}`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tagAttrs = attrs(match[0]);
    const src = tagAttrs.src ?? "";
    const alt = tagAttrs.alt;
    if (alt === undefined) findings.push(`${rel} img missing alt: ${src || match[0]}`);
    if (alt !== undefined && !alt.trim()) findings.push(`${rel} img has empty alt: ${src || match[0]}`);
    if (src.startsWith("/") && !src.startsWith("/_astro/")) {
      const imageFile = localPublicFile(src);
      if (!imageFile || !fs.existsSync(imageFile)) findings.push(`${rel} img points to missing public file: ${src}`);
    }
  }
}

for (const finding of findings) console.log(`[media-audit] FAIL ${finding}`);

if (findings.length) {
  console.error(`[media-audit] ${findings.length} media SEO issue(s) found.`);
  process.exit(1);
}

console.log(`[media-audit] OK — checked ${blogPosts.length} blog media item(s) and ${sitemapHtmlFiles.length} static sitemap HTML file(s).`);
