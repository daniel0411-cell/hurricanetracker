// Generate 1200x630 PNG social cards (og:image) from blog cover SVGs.
// Social platforms (Facebook, X/Twitter, LinkedIn, Slack, iMessage) do NOT render
// SVG in og:image, so we rasterize each flat-vector SVG into a branded PNG card.
import { Resvg } from "@resvg/resvg-js";
import { existsSync, readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";

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

console.log(`\nGenerated ${count} OG images into ${OUT_DIR}`);
