import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const distDir = path.join(root, "dist/client");

const sourceRoots = [
  "src/pages",
  "src/components",
  "src/data"
];

const ignoredFiles = new Set([
  "src/pages/api/nws/surge.ts",
  "src/pages/sitemap.xml.ts"
]);

const blockedTerms = [
  /\bMVP\b/i,
  /\bSEO\b/,
  /\bGEO\b/,
  /generative-answer/i,
  /Cloudflare KV/i,
  /Worker-side/i,
  /implementation note/i
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

const [
  { BLOG_CATEGORY_PAGES, blogPosts },
  { hurricaneCities },
  { stormTrackerPages }
] = await Promise.all([
  loadTsModule(path.join(root, "src/data/blog.ts")),
  loadTsModule(path.join(root, "src/data/cities.ts")),
  loadTsModule(path.join(root, "src/data/stormPages.ts"))
]);

const requiredStaticHtml = [
  "learn/index.html",
  "hurricane-tracker/city/miami/index.html",
  "hurricane-tracker/city/houston/index.html",
  ...hurricaneCities.slice(0, 8).map((city) => `hurricane-tracker/city/${city.slug}/index.html`),
  ...stormTrackerPages.map((storm) => `hurricane-tracker/storm/${storm.slug}/index.html`),
  ...BLOG_CATEGORY_PAGES.map((category) => `blog/category/${category.slug}/index.html`)
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(abs));
    } else if (/\.(astro|ts|tsx|js|mjs)$/.test(entry.name)) {
      files.push(abs);
    }
  }
  return files;
}

function relative(file) {
  return path.relative(root, file);
}

function readDistHtml(file) {
  const abs = path.join(distDir, file);
  return fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : "";
}

function visibleTextLength(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim().length;
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

const findings = [];
for (const sourceRoot of sourceRoots) {
  for (const file of walk(path.join(root, sourceRoot))) {
    const rel = relative(file);
    if (ignoredFiles.has(rel) || rel.startsWith("src/pages/api/")) continue;
    const text = fs.readFileSync(file, "utf8");
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (/^\s*(\/\/|\/\*|\*)/.test(line)) return;
      if (/\bplaceholder=/.test(line)) return;
      for (const pattern of blockedTerms) {
        if (pattern.test(line)) {
          findings.push({ file: rel, line: index + 1, text: line.trim() });
          break;
        }
      }
    });
  }
}

for (const finding of findings) {
  console.log(`[content-audit] FAIL ${finding.file}:${finding.line} — ${finding.text}`);
}

const missingStatic = requiredStaticHtml.filter((file) => !fs.existsSync(path.join(root, "dist/client", file)));
for (const file of missingStatic) {
  console.log(`[content-audit] FAIL missing dist/client/${file}`);
}

const htmlChecks = [
  {
    file: "hurricane-tracker/live/index.html",
    minTextLength: 3200,
    requiredSnippets: ["What To Open After the Live Hurricane Tracker", "Search intent paths", "Decode warning language"]
  },
  {
    file: "radar/index.html",
    minTextLength: 3600,
    requiredSnippets: ["Hurricane Radar vs Satellite: What To Check First", "Best next page by intent", "Decode a hurricane watch"]
  },
  ...BLOG_CATEGORY_PAGES.map((category) => ({
    file: `blog/category/${category.slug}/index.html`,
    minTextLength: 1800,
    requiredSnippets: [category.title, `Articles in ${category.name}`, "Related category hubs"]
  }))
];

const htmlFindings = [];
for (const check of htmlChecks) {
  const html = readDistHtml(check.file);
  if (!html) continue;
  const decodedHtml = decodeHtml(html);
  const length = visibleTextLength(html);
  if (length < check.minTextLength) {
    htmlFindings.push(`${check.file} visible text too thin (${length} < ${check.minTextLength})`);
  }
  for (const snippet of check.requiredSnippets) {
    if (!decodedHtml.includes(snippet)) htmlFindings.push(`${check.file} missing content snippet: ${snippet}`);
  }
}

const categoryCardFindings = [];
for (const category of BLOG_CATEGORY_PAGES) {
  const html = readDistHtml(`blog/category/${category.slug}/index.html`);
  if (!html) continue;
  const expectedPosts = blogPosts.filter((post) => post.slug && html.includes(`/blog/${post.slug}/`)).length;
  if (expectedPosts < 2) {
    categoryCardFindings.push(`blog/category/${category.slug}/index.html has too few linked posts (${expectedPosts})`);
  }
}

for (const finding of htmlFindings) console.log(`[content-audit] FAIL ${finding}`);
for (const finding of categoryCardFindings) console.log(`[content-audit] FAIL ${finding}`);

if (findings.length || missingStatic.length || htmlFindings.length || categoryCardFindings.length) {
  console.error(`[content-audit] ${findings.length + missingStatic.length + htmlFindings.length + categoryCardFindings.length} content quality issue(s) found.`);
  process.exit(1);
}

console.log(`[content-audit] OK — checked visible content terms, ${requiredStaticHtml.length} static SEO outputs, and ${htmlChecks.length} content-depth pages.`);
