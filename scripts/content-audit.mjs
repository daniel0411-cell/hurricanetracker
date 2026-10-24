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
const findings = [];
const routes = [...new Set([
  "/hurricane-tracker/live/", "/learn/", "/blog/", "/radar/", "/compare/",
  "/tools/preparedness-checklist/", "/tools/storm-surge-checker/",
  "/about/", "/storm/2026-bertha/", "/storm/2026-cristobal/",
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
    if (pattern.test(JSON.stringify(post.sections))) findings.push(`${post.slug}: corrected misleading claim reintroduced (${pattern})`);
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
