// Generate 1200x630 PNG social cards (og:image) from blog cover SVGs.
// Social platforms (Facebook, X/Twitter, LinkedIn, Slack, iMessage) do NOT render
// SVG in og:image, so we rasterize each flat-vector SVG into a branded PNG card.
import { Resvg } from "@resvg/resvg-js";
import { existsSync, readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";
import ts from "typescript";

const SRC_DIR = "public/images/blog";
const OUT_DIR = "public/images/blog/og";
const W = 1200;
const H = 630;
const PAD = 48;

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith(".svg"));
let count = 0;

for (const file of files) {
  const svg = readFileSync(join(SRC_DIR, file), "utf8");

  // Extract original viewBox.
  const vbMatch = svg.match(/viewBox\s*=\s*"([\d.\s-]+)"/);
  const vb = vbMatch ? vbMatch[1].trim().split(/\s+/).map(Number) : [0, 0, 1600, 900];
  const [, , vbW, vbH] = vb;
  if (!vbW || !vbH) continue;

  // Extract inner content between <svg ...> and </svg>.
  const innerMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  const inner = innerMatch ? innerMatch[1] : svg;

  // Scale to fit inside the card with padding, centered.
  const scale = Math.min((W - PAD * 2) / vbW, (H - PAD * 2) / vbH);
  const tx = (W - vbW * scale) / 2;
  const ty = (H - vbH * scale) / 2;

  const wrapper = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Arial, Helvetica, sans-serif">
  <defs>
    <linearGradient id="ogbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e1922"/>
      <stop offset="1" stop-color="#0e6f8f"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#ogbg)"/>
  <g transform="translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${scale.toFixed(4)})">${inner}</g>
  <text x="48" y="${H - 34}" font-size="34" font-weight="800" fill="#ffffff" opacity="0.92">HurricaneHub</text>
</svg>`;

  const resvg = new Resvg(wrapper, {
    fitTo: { mode: "width", value: W },
    font: { loadSystemFonts: true, defaultFontFamily: "Arial" },
  });
  const png = resvg.render().asPng();
  const outName = basename(file, ".svg") + ".png";
  const outPath = join(OUT_DIR, outName);
  if (!existsSync(outPath) || !readFileSync(outPath).equals(png)) {
    writeFileSync(outPath, png);
  }
  count++;
  console.log(`  ${file} -> og/${outName} (${png.length} bytes)`);
}

const moduleText = ts.transpileModule(readFileSync("src/data/blog.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
}).outputText;
const { blogPosts, getBlogOgImage } = await import(`data:text/javascript;base64,${Buffer.from(moduleText).toString("base64")}`);
const escapeXml = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);

for (const post of blogPosts) {
  const outPath = join("public", getBlogOgImage(post));
  // Existing SVG covers are rendered above; missing covers get a title card,
  // never a guessed JPEG path or an unrelated photograph.
  if (existsSync(join(SRC_DIR, `${post.slug}.svg`))) continue;
  if (existsSync(outPath)) {
    const existing = readFileSync(outPath);
    if (existing.toString("hex", 0, 8) === "89504e470d0a1a0a" && existing.readUInt32BE(16) === W && existing.readUInt32BE(20) === H) continue;
  }
  const lines = [];
  for (const word of post.title.split(/\s+/)) {
    if (!lines.length || `${lines.at(-1)} ${word}`.length > 36) lines.push(word);
    else lines[lines.length - 1] += ` ${word}`;
  }
  if (lines.length > 6) throw new Error(`OG title exceeds card capacity: ${post.slug}`);
  const titleLines = lines.map((line, index) => `<text x="64" y="${174 + index * 64}" font-size="48" font-weight="700">${escapeXml(line)}</text>`).join("");
  const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#123644"/><rect x="64" y="64" width="84" height="8" fill="#55cfba"/><g fill="#ffffff" font-family="Arial, Helvetica, sans-serif">${titleLines}<text x="64" y="574" font-size="30">HurricaneHub | Weather and preparedness</text></g></svg>`;
  const png = new Resvg(card, { font: { loadSystemFonts: true, defaultFontFamily: "Arial" } }).render().asPng();
  if (!existsSync(outPath) || !readFileSync(outPath).equals(png)) writeFileSync(outPath, png);
}

console.log(`\nGenerated ${count} SVG cards and verified ${blogPosts.length} article OG images in ${OUT_DIR}`);
