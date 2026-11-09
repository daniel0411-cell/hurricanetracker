import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
// Load the production data modules together so cross-module contracts are checked.
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText, filename);
};

const { contentModifiedFor } = require("../src/data/contentDates.ts");
const { hurricaneCities } = require("../src/data/cities.ts");
const { localPreparednessPages } = require("../src/data/localPreparednessPages.ts");
const { site } = require("../src/data/site.ts");
const { sitemapRoutes } = require("../src/lib/sitemapRoutes.ts");
const { articleSchema } = require("../src/lib/schema.ts");
const routes = new Map(sitemapRoutes.map((route) => [route.path, route]));

assert.equal(contentModifiedFor("hurricane-tracker/city/orlando/", "2026-11-09"), "2026-11-09T00:00:00.000Z");
assert.equal(contentModifiedFor("hurricane-tracker/city/miami/", "2026-11-02"), "2026-11-04T00:00:00.000Z");
assert.equal(contentModifiedFor("hurricane-tracker/city/brunswick/", "2026-11-06"), "2026-11-06T00:00:00.000Z");
assert.equal(contentModifiedFor("hurricane-tracker/path/", site.contentLastModified), "2026-11-06T00:00:00.000Z");
assert.equal(contentModifiedFor("hurricane-tracker/tropical-disturbances/", "2026-11-10"), "2026-11-09T00:00:00.000Z");

const pages = [
  ...hurricaneCities.map((page) => ({ path: `hurricane-tracker/city/${page.slug}/`, date: page.dateModified })),
  ...localPreparednessPages.map((page) => ({
    path: page.kind === "state" ? `state/${page.slug}/preparedness/` : `city/${page.slug}/hurricane-tracker/`,
    date: page.dateModified
  }))
];

for (const page of pages) {
  const url = `${site.url}/${page.path}`;
  const dateModified = page.date ?? site.contentLastModified;
  const schema = articleSchema({ title: "Date contract", description: "Editorial date consistency", url, dateModified });
  const sitemapDate = routes.get(page.path)?.lastmod;
  assert.ok(sitemapDate, `Missing sitemap route: ${page.path}`);
  assert.equal(Date.parse(sitemapDate), Date.parse(schema.dateModified), `Sitemap/schema mismatch: ${page.path}`);
  assert.equal(Date.parse(schema.dateModified), Date.parse(contentModifiedFor(url, dateModified)), `Metadata/schema mismatch: ${page.path}`);
}

console.log(`[content-dates] OK: ${pages.length} local pages agree across sitemap, article schema and metadata resolver; revision regressions passed.`);
