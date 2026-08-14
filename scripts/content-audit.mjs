import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

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

const requiredStaticHtml = [
  "learn/index.html",
  "hurricane-tracker/city/miami/index.html",
  "hurricane-tracker/storm/erin/index.html",
  "hurricane-tracker/storm/melissa/index.html"
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

if (findings.length || missingStatic.length) {
  console.error(`[content-audit] ${findings.length + missingStatic.length} content quality issue(s) found.`);
  process.exit(1);
}

console.log(`[content-audit] OK — checked visible content terms and ${requiredStaticHtml.length} static SEO outputs.`);
