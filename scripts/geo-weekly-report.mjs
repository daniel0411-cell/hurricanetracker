import fs from "node:fs";

const [queryFile, pageFile] = process.argv.slice(2);
if (!queryFile || !pageFile) {
  console.error("Usage: node scripts/geo-weekly-report.mjs <AI queries CSV> <AI pages CSV>");
  process.exit(1);
}

function parseCsv(file) {
  const text = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"' && quoted && text[i + 1] === '"') { field += '"'; i++; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(field); field = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(Boolean)) rows.push(row);
      row = [];
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const headers = rows.shift();
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

const queries = parseCsv(queryFile).map((row) => ({ query: row["Grounding Query"], citations: Number(row.Citations) || 0, share: Number(row["Citation Share"]?.replace("%", "")) || 0 }));
const pages = parseCsv(pageFile).map((row) => ({ url: row["页面"] ?? row.Page, citations: Number(row.Citations) || 0 }));
const queryTotal = queries.reduce((sum, row) => sum + row.citations, 0);
const pageTotal = pages.reduce((sum, row) => sum + row.citations, 0);
const pct = (value, total) => total ? `${(value / total * 100).toFixed(1)}%` : "0.0%";
const topShare = (rows, count, total) => pct(rows.slice(0, count).reduce((sum, row) => sum + row.citations, 0), total);
const clusters = {
  "Named storms": /lowell|karina|marie|bertha|norbert|kiko|lorena|mario|juliette|erin|gabrielle|humberto|imelda|jerry|narda/i,
  "Current activity": /right now|current|active|today|coming|forming|development|tropical storm|tropical disturbance/i,
  "Local risk": /florida|texas|south carolina|north carolina|gulf|miami|tampa|houston|charleston|myrtle beach/i,
  "Evergreen education": /spaghetti|category|typhoon|cyclone|prepare|warning|watch|surge|evacuat|insurance|flood/i
};

console.log(`# HurricaneHub GEO weekly report\n\nGenerated: ${new Date().toISOString()}\n`);
console.log(`## Summary\n\n- Queries: ${queries.length}; query citations: ${queryTotal}\n- Cited pages: ${pages.length}; page citations: ${pageTotal}\n- Top 10 query concentration: ${topShare(queries, 10, queryTotal)}\n- Top 10 page concentration: ${topShare(pages, 10, pageTotal)}\n`);
console.log("## Query clusters\n");
for (const [name, pattern] of Object.entries(clusters)) {
  const matched = queries.filter((row) => pattern.test(row.query));
  const citations = matched.reduce((sum, row) => sum + row.citations, 0);
  console.log(`- ${name}: ${matched.length} queries, ${citations} citations (${pct(citations, queryTotal)})`);
}
console.log("\n## Top queries\n");
for (const row of queries.slice(0, 20)) console.log(`- ${row.query}: ${row.citations} citations, ${row.share.toFixed(2)}% citation share`);
console.log("\n## Top pages\n");
for (const row of pages.slice(0, 20)) console.log(`- ${row.url}: ${row.citations} citations`);
console.log("\n## Review rules\n\n- Add depth to an existing URL before creating a new page.\n- Treat named-storm spikes as temporary unless demand persists across reports.\n- Prioritize queries with at least 50 citations or 15% citation share.\n- Create a URL only when the intent is distinct and no current page answers it.\n- Verify all live-storm claims against current NHC data before publishing.\n");
