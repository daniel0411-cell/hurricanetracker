import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const pages = [
  "src/pages/index.astro",
  "src/pages/tracker/index.astro",
  "src/pages/hurricane-tracker/live.astro",
  "src/pages/hurricane-tracker/city/index.astro",
  "src/pages/hurricane-tracker/storm/index.astro",
  "src/pages/alerts.astro",
  "src/pages/radar.astro",
  "src/pages/preparedness.astro",
  "src/pages/tools/index.astro",
  "src/pages/blog/[slug].astro"
];

const results = pages.map((page) => {
  const abs = path.join(root, page);
  const source = fs.readFileSync(abs, "utf8");
  return {
    page,
    hasFaqBlock: source.includes("<FaqBlock"),
    hasFaqSchema: source.includes("faqSchema("),
    questionCount: (source.match(/question:\s*"/g) ?? []).length
  };
});

const failures = results.filter((item) => !item.hasFaqBlock || !item.hasFaqSchema);

for (const result of results) {
  const level = result.hasFaqBlock && result.hasFaqSchema ? "OK" : "FAIL";
  console.log(
    `[faq-audit] ${level} ${result.page} — visible=${result.hasFaqBlock} schema=${result.hasFaqSchema} inlineQuestions=${result.questionCount}`
  );
}

if (failures.length) {
  console.error(`[faq-audit] ${failures.length} priority SEO page(s) missing visible FAQ or FAQ schema.`);
  process.exit(1);
}

console.log(`[faq-audit] OK — ${results.length} priority SEO pages checked.`);
