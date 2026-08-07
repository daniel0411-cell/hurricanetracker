// Generate title-based branded OG social cards for the 3 standalone blog posts
// that were added outside of src/data/blog.ts (so they had no cover SVG/PNG).
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, mkdirSync } from "node:fs";

const OUT_DIR = "public/images/blog/og";
const W = 1200;
const H = 630;
mkdirSync(OUT_DIR, { recursive: true });

const cards = [
  { slug: "hurricane-watch-vs-warning", kicker: "ALERTS EXPLAINED", title: "Hurricane Watch vs Warning" },
  { slug: "flood-advisory-vs-watch-vs-warning", kicker: "FLOOD SAFETY", title: "Flood Advisory vs Watch vs Warning" },
  { slug: "rip-current-statement-gulf-coast", kicker: "GULF COAST SAFETY", title: "Rip Current Statement" },
];

function wrapTitle(title, maxChars = 20) {
  const words = title.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines.slice(0, 3);
}

let count = 0;
for (const { slug, kicker, title } of cards) {
  const lines = wrapTitle(title);
  const lineHeight = 76;
  const startY = H / 2 - ((lines.length - 1) * lineHeight) / 2 - 10;
  const titleSpans = lines
    .map(
      (ln, i) =>
        `<text x="80" y="${startY + i * lineHeight}" font-size="66" font-weight="800" fill="#ffffff">${ln}</text>`
    )
    .join("\n  ");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Arial, Helvetica, sans-serif">
  <defs>
    <linearGradient id="ogbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e1922"/>
      <stop offset="1" stop-color="#0e6f8f"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#ogbg)"/>
  <rect x="80" y="${startY - 58}" width="64" height="6" rx="3" fill="#37c2e0"/>
  <text x="80" y="${startY - 26}" font-size="26" font-weight="700" letter-spacing="3" fill="#9fd9ec">${kicker}</text>
  ${titleSpans}
  <text x="80" y="${H - 44}" font-size="30" font-weight="800" fill="#ffffff" opacity="0.9">HurricaneHub</text>
  <text x="${W - 80}" y="${H - 44}" text-anchor="end" font-size="22" font-weight="600" fill="#9fd9ec" opacity="0.85">hurricanetracker.cc</text>
</svg>`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: W },
    font: { loadSystemFonts: true, defaultFontFamily: "Arial" },
  });
  const png = resvg.render().asPng();
  const out = `${OUT_DIR}/${slug}.png`;
  writeFileSync(out, png);
  count++;
  console.log(`  ${slug}.png (${png.length} bytes)`);
}
console.log(`\nGenerated ${count} title-based OG images.`);
