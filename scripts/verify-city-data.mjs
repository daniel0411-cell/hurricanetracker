import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const cityFile = path.join(root, "src/data/cities.ts");
const stateFile = path.join(root, "src/data/states.ts");

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

function fail(message) {
  console.error(`[city-data] ${message}`);
  process.exitCode = 1;
}

const [{ hurricaneCities }, { coastalStates }] = await Promise.all([
  loadTsModule(cityFile),
  loadTsModule(stateFile)
]);

const statesByCode = new Map(coastalStates.map((state) => [state.code, state]));
const seenSlugs = new Set();
const seenCoordinates = new Set();

if (!Array.isArray(hurricaneCities) || hurricaneCities.length === 0) {
  fail("hurricaneCities must be a non-empty array.");
}

for (const city of hurricaneCities) {
  const label = city?.slug || city?.name || "<unknown city>";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(city.slug || "")) {
    fail(`${label}: slug must be lowercase kebab-case.`);
  }
  if (seenSlugs.has(city.slug)) fail(`${label}: duplicate city slug.`);
  seenSlugs.add(city.slug);

  const state = statesByCode.get(city.stateCode);
  if (!state) {
    fail(`${label}: stateCode ${city.stateCode} is not in coastalStates.`);
  } else if (city.stateName !== state.name) {
    fail(`${label}: stateName "${city.stateName}" does not match ${state.code} (${state.name}).`);
  }

  if (typeof city.name !== "string" || city.name.trim().length < 2) {
    fail(`${label}: name is missing.`);
  }

  const requiredTextFields = ["region", "planningNote", "overview"];
  for (const field of requiredTextFields) {
    if (typeof city[field] !== "string" || city[field].trim().length < 20) {
      fail(`${label}: ${field} is missing or too short.`);
    }
  }

  const requiredArrays = [
    ["risks", 3],
    ["nearbyCounties", 2],
    ["localHazards", 3],
    ["evacuationFocus", 4],
    ["localSearches", 4],
    ["faqs", 3],
    ["officialResources", 3]
  ];
  for (const [field, min] of requiredArrays) {
    if (!Array.isArray(city[field]) || city[field].length < min) {
      fail(`${label}: ${field} must contain at least ${min} items.`);
    }
  }

  for (const hazard of city.localHazards || []) {
    if (!hazard.heading || !hazard.body || hazard.body.length < 40) {
      fail(`${label}: every localHazards item needs heading and useful body text.`);
    }
  }

  for (const faq of city.faqs || []) {
    if (!faq.question?.endsWith("?") || !faq.answer || faq.answer.length < 40) {
      fail(`${label}: every FAQ needs a question ending in ? and useful answer text.`);
    }
  }

  const resources = city.officialResources || [];
  const hasNws = resources.some((resource) => /^https:\/\/www\.weather\.gov\//.test(resource.url || ""));
  const hasNhc = resources.some((resource) => resource.url === "https://www.nhc.noaa.gov/");
  if (!hasNws) fail(`${label}: officialResources must include a weather.gov NWS office link.`);
  if (!hasNhc) fail(`${label}: officialResources must include the National Hurricane Center link.`);
  for (const resource of resources) {
    if (!resource.name || !resource.description || !resource.url) {
      fail(`${label}: every official resource needs name, description, and url.`);
      continue;
    }
    if (!/^https:\/\//.test(resource.url)) fail(`${label}: official resource must use https (${resource.url}).`);
    if (resource.description.length < 40) fail(`${label}: official resource "${resource.name}" description is too short.`);
  }

  if (typeof city.lat !== "number" || typeof city.lon !== "number") {
    fail(`${label}: lat/lon must be numbers.`);
  } else {
    if (city.lat < 24 || city.lat > 39.5 || city.lon < -98.5 || city.lon > -75) {
      fail(`${label}: lat/lon appears outside the current US hurricane city coverage area.`);
    }
    const coordKey = `${city.lat.toFixed(3)},${city.lon.toFixed(3)}`;
    if (seenCoordinates.has(coordKey)) fail(`${label}: duplicate coordinates ${coordKey}.`);
    seenCoordinates.add(coordKey);
  }
}

if (process.exitCode) {
  process.exit();
}

console.log(`[city-data] OK — ${hurricaneCities.length} cities across ${statesByCode.size} coastal states.`);
