import fs from "node:fs";

const planFile = "docs/seo-keyword-plan-2026-08-18.md";
const sitemapFile = "dist/client/sitemap.xml";
const plan = fs.readFileSync(planFile, "utf8");
const sitemap = fs.readFileSync(sitemapFile, "utf8");
const sitemapPaths = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname));
const querySection = plan.split("## 100 Target Queries")[1]?.split("## Operating rule")[0] ?? "";
const targetQueries = [...querySection.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
const mappedUrls = [...plan.matchAll(/\| P\d \| `([^`]+)`/g)].map((match) => match[1]);
const missingUrls = [...new Set(mappedUrls)].filter((url) => !sitemapPaths.has(url));

const report = {
  generatedAt: new Date().toISOString(),
  targetQueryCount: targetQueries.length,
  mappedIntentRows: mappedUrls.length,
  uniqueMappedUrls: new Set(mappedUrls).size,
  mappedUrlsMissingFromSitemap: missingUrls
};

console.log(JSON.stringify(report, null, 2));
if (targetQueries.length !== 100 || missingUrls.length) process.exit(1);
