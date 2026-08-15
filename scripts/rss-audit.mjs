import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const rssFile = path.join(root, "dist/client/rss.xml");

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

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function extractLinks(xml) {
  return [...xml.matchAll(/<link>(.*?)<\/link>/g)].map((match) => match[1]);
}

const [{ blogPosts }, { hurricaneCities }, { stormTrackerPages }, { site }] = await Promise.all([
  loadTsModule(path.join(root, "src/data/blog.ts")),
  loadTsModule(path.join(root, "src/data/cities.ts")),
  loadTsModule(path.join(root, "src/data/stormPages.ts")),
  loadTsModule(path.join(root, "src/data/site.ts"))
]);

const rssXml = readText(rssFile);
if (!rssXml) {
  console.error("[rss-audit] Missing dist/client/rss.xml. Run npm run build first.");
  process.exit(1);
}

const links = extractLinks(rssXml);
const itemLinks = links.filter((link) => link !== `${site.url}/`);
const expectedLinks = [
  `${site.url}/hurricane-tracker/live/`,
  `${site.url}/hurricane-tracker/city/`,
  `${site.url}/tools/`,
  `${site.url}/radar/`,
  `${site.url}/alerts/`,
  `${site.url}/learn/`,
  ...hurricaneCities.map((city) => `${site.url}/hurricane-tracker/city/${city.slug}/`),
  ...stormTrackerPages.map((storm) => `${site.url}/hurricane-tracker/storm/${storm.slug}/`),
  ...blogPosts.map((post) => `${site.url}/blog/${post.slug}/`)
];

const missing = expectedLinks.filter((url) => !itemLinks.includes(url));
const duplicates = itemLinks.filter((url, index) => itemLinks.indexOf(url) !== index);

if (!rssXml.includes("<title>HurricaneHub Updates</title>")) {
  console.error("[rss-audit] Feed title should describe site-wide updates.");
  process.exit(1);
}

if (missing.length || duplicates.length) {
  for (const url of missing) console.log(`[rss-audit] FAIL missing feed item: ${url}`);
  for (const url of [...new Set(duplicates)]) console.log(`[rss-audit] FAIL duplicate feed item: ${url}`);
  console.error(`[rss-audit] ${missing.length} missing and ${duplicates.length} duplicate RSS issue(s) found.`);
  process.exit(1);
}

console.log(`[rss-audit] OK — checked ${itemLinks.length} RSS item link(s).`);
