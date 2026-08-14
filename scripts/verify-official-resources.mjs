import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const cityFile = path.join(root, "src/data/cities.ts");

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

async function checkUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal
    });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal
      });
    }
    if (response.status >= 200 && response.status < 400) {
      return { level: "OK", status: response.status };
    }
    if (response.status === 401 || response.status === 403 || response.status === 405 || response.status === 429) {
      return { level: "WARN", status: response.status };
    }
    return { level: "FAIL", status: response.status };
  } catch (error) {
    return { level: "WARN", status: error?.name === "AbortError" ? "timeout" : "fetch failed" };
  } finally {
    clearTimeout(timeout);
  }
}

const { hurricaneCities } = await loadTsModule(cityFile);
const resources = [];
for (const city of hurricaneCities) {
  for (const resource of city.officialResources || []) {
    resources.push({
      city: city.slug,
      name: resource.name,
      url: resource.url
    });
  }
}

let failures = 0;
let warnings = 0;
for (const resource of resources) {
  const result = await checkUrl(resource.url);
  console.log(`[official-resources] ${result.level} ${result.status} ${resource.city} — ${resource.name} — ${resource.url}`);
  if (result.level === "FAIL") failures += 1;
  if (result.level === "WARN") warnings += 1;
}

if (failures > 0) {
  console.error(`[official-resources] ${failures} official resource URL(s) failed.`);
  process.exit(1);
}

console.log(`[official-resources] OK — ${resources.length} official resource URL(s) checked, ${warnings} warning(s).`);
