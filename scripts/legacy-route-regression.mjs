import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const module = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync("src/middleware.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText, {
  module, exports: module.exports, URL, Response, console,
  require: (name) => name === "astro:middleware"
    ? { defineMiddleware: (handler) => handler }
    : { TRACKER_SLUG_SET: new Set(["florida", "texas"]) }
});
const handler = module.exports.onRequest;
const aliases = {
  "/hurricane-tracker/": "/tracker/",
  "/city/": "/hurricane-tracker/city/",
  "/state/": "/tracker/",
  "/storm/": "/hurricane-tracker/storm/",
  "/city/tampa/": "/city/tampa/hurricane-tracker/",
  "/city/charleston/": "/city/charleston/hurricane-tracker/",
  "/city/virginia-beach/": "/city/virginia-beach/hurricane-tracker/",
  "/state/texas/": "/state/texas/preparedness/",
  "/state/north-carolina/": "/state/north-carolina/preparedness/",
  "/state/virginia/": "/state/virginia/preparedness/",
  "/state/massachusetts/": "/state/massachusetts/preparedness/",
  "/hurricane-tracker/florida/": "/tracker/florida/"
};
for (const [from, to] of Object.entries(aliases)) {
  for (const method of ["GET", "HEAD"]) {
    for (const origin of ["http://hurricanetracker.cc", "https://www.hurricanetracker.cc"]) {
      const response = await handler({ request: new Request(`${origin}${from}?ref=old`, { method }) }, () => {
        throw new Error("Redirect must not render a page");
      });
      assert.equal(response.status, 301);
      assert.equal(response.headers.get("location"), `https://www.hurricanetracker.cc${to}?ref=old`);
    }
  }
}
for (const path of ["/city/unknown/", "/state/unknown/", "/blog/missing/", "/tracker/"]) {
  const response = await handler({ request: new Request(`https://www.hurricanetracker.cc${path}`) }, () => new Response("next", { status: path === "/tracker/" ? 200 : 404 }));
  assert.equal(response.status, path === "/tracker/" ? 200 : 404);
}
const local = await handler({ request: new Request("http://localhost:4321/preparedness/") }, () => new Response("local"));
assert.equal(local.status, 200);
console.log("Legacy routes: GET/HEAD, canonical host, query preservation and unknown-route checks passed.");
