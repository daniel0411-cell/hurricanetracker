import assert from "node:assert/strict";
import fs from "node:fs/promises";
import ts from "typescript";

async function loadData(path) {
  const source = await fs.readFile(path, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 }
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { blogPosts } = await loadData("src/data/blog.ts");
const { hurricaneCities } = await loadData("src/data/cities.ts");
const { stormTrackerPages } = await loadData("src/data/stormPages.ts");
const { localPreparednessPages } = await loadData("src/data/localPreparednessPages.ts");
const { coastalStates } = await loadData("src/data/states.ts");
const articles = new Map([
  ["what-hurricane-watch-warning-means", "Work Through a Warning Without Inventing a Deadline"],
  ["what-to-do-during-a-hurricane-warning", "If Your Original Plan Stops Working"],
  ["storm-surge-warning-vs-hurricane-warning", "Two Situations That Need Different Answers"],
  ["hurricane-family-communication-plan", "Rehearse One Failed-Contact Scenario"],
  ["hurricane-radar-vs-satellite", "Read Two Views of the Same Period"],
  ["how-to-read-the-hurricane-cone-of-uncertainty", "Read the Historical Example From Label to Legend"]
]);
const cities = new Map([
  ["miami", "Look Up the Miami-Dade Planning Zone"],
  ["tampa", "Start With the Correct County's Address Map"],
  ["houston", "Separate Coastal Evacuation From Inland Flood Decisions"]
]);
const routes = new Map();
const warningSource = await fs.readFile("src/pages/blog/hurricane-watch-vs-warning.astro", "utf8");
assert.match(warningSource, /anticipated arrival of <strong>tropical-storm-force winds/);
assert.match(warningSource, /scope="col"/);
assert.match(warningSource, /A Wind Warning Is Not a Surge Warning or Evacuation Order/);
assert.doesNotMatch(warningSource, /Warnings are not guesses|warning for your county may be issued for surge/);
routes.set("/blog/hurricane-watch-vs-warning/", "Compare the Two Wind Alerts");
const warningReader = blogPosts.find((post) => post.slug === "what-hurricane-watch-warning-means");
assert(warningReader.sections.some((section) => section.heading === "Record Six Fields Before Sharing the Alert"));
assert(warningReader.sections.some((section) => section.links?.some((link) => link.href === "/blog/hurricane-watch-vs-warning/")));
assert.match(warningReader.sourceCheck.scope, /timed out/);
const evacuation = blogPosts.find((post) => post.slug === "how-to-check-your-hurricane-evacuation-zone");
assert.equal(evacuation.dateModified, "2026-11-02");
assert(evacuation.sources.some((source) => source.href.startsWith("https://www.miamidade.gov/")));
assert(evacuation.sections.some((section) => section.body.includes("Illustrative example, not a current order")));
assert(evacuation.sections.some((section) => section.body.includes("failed lookup, not a no-risk result")));
assert.match(evacuation.sourceCheck.scope, /No address entered/);
routes.set(`/blog/${evacuation.slug}/`, "Worked Example: Miami-Dade's Planning Zones");
const miamiPreparedness = localPreparednessPages.find((page) => page.kind === "city" && page.slug === "miami");
assert.equal(miamiPreparedness.dateModified, "2026-11-02");
assert.match(miamiPreparedness.sourceCheck.scope, /no address/i);
assert.match(miamiPreparedness.evacuation.join(" "), /five.*A through E/);
assert.match(miamiPreparedness.faqs.find((faq) => faq.question.includes("evacuation zone")).answer, /A through E/);
assert.doesNotMatch(JSON.stringify(miamiPreparedness), /A through F/);
const duval = localPreparednessPages.find((page) => page.kind === "city" && page.slug === "jacksonville");
assert.match(duval.evacuation.join(" "), /A through F/, "Miami's zone correction must not change Duval's different system");
routes.set("/city/miami/hurricane-tracker/", "five storm-surge Planning Zones, A through E");
const rooms = blogPosts.find((post) => post.slug === "hurricane-home-preparedness-room-by-room-checklist");
const hardening = blogPosts.find((post) => post.slug === "hurricane-home-hardening-checklist");
const roomText = JSON.stringify(rooms);
assert.match(roomText, /not to actually turn off natural gas when practicing/);
assert.match(roomText, /only a qualified professional should restore it/);
assert(rooms.sources.some((source) => source.href === "https://www.ready.gov/safety-skills"));
const hardeningText = JSON.stringify(hardening);
assert.match(hardeningText, /edge is not the boundary of damaging weather or an arrival-time line/);
assert.match(hardeningText, /positive and negative design pressures/);
assert(hardening.sources.some((source) => source.href === "https://ibhs.org/hurricanereadyhomeupgrades/"));
for (const [post, other, published, heading] of [
  [rooms, hardening, "2026-08-13", "Worked Record: A Missing Item Is an Unfinished Task"],
  [hardening, rooms, "2026-08-14", "Worked Example: A Product Label Is Only One Part of the Record"]
]) {
  assert.equal(post.datePublished, published);
  assert.equal(post.dateModified, "2026-11-02");
  assert.equal(post.sourceCheck.date, "2026-11-02");
  assert(post.sections.some((section) => section.links?.some((link) => link.href === `/blog/${other.slug}/`)));
  assert.doesNotMatch(JSON.stringify(post), /practice shutting off gas|outer edge, not the center|12 hours out: Shut off propane|At the warning: stop outdoor work, shelter|first 48 hours on permanent/);
  routes.set(`/blog/${post.slug}/`, heading);
}
const dolly = stormTrackerPages.find((storm) => storm.slug === "dolly");
assert(dolly.trackerFocus.some((item) => item.includes("85 kt (Category 2)") && item.includes("75 kt (Category 1)")));
assert.doesNotMatch(JSON.stringify(dolly), /if it forms/);
for (const [slug, stormId, year] of [["erin", "AL052025", 2025], ["dolly", "AL042008", 2008]]) {
  const report = stormTrackerPages.find((storm) => storm.slug === slug).historicalReport;
  assert.equal(report.stormId, stormId);
  assert.equal(report.year, year);
  assert.equal(report.url, `https://www.nhc.noaa.gov/data/tcr/${stormId}_${slug[0].toUpperCase() + slug.slice(1)}.pdf`);
  assert(report.reportDate <= report.checkedOn);
  assert(report.timeline.length >= 4);
  assert(report.lessons.some((lesson) => /not|different/i.test(lesson.body)));
  routes.set(`/hurricane-tracker/storm/${slug}/`, `${year}: What the Official Report Establishes`);
}
assert.equal(stormTrackerPages.find((storm) => storm.slug === "melissa").historicalReport, undefined,
  "An incomplete report download must not become verified historical content");
assert(dolly.historicalReport.lessons.some((lesson) => lesson.body.includes("Port of Brownsville")));
for (const [slug, heading] of [
  ["hurricane-power-outage-food-medicine-plan", "Calculate the Household Base, Then Record the Exceptions"],
  ["hurricane-generator-safety-carbon-monoxide", "Read the Official Placement Diagram"]
]) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert.equal(post.dateModified, "2026-10-27");
  assert.equal(post.sourceCheck.date, "2026-10-27");
  assert(post.sections.some((section) => section.heading === heading));
  routes.set(`/blog/${slug}/`, heading);
}
const outage = blogPosts.find((post) => post.slug === "hurricane-power-outage-food-medicine-plan");
assert.match(outage.sourceCheck.scope, /HTTP 403/);
assert(outage.sections.some((section) => section.body.includes("56 gallons")));
const generator = blogPosts.find((post) => post.slug === "hurricane-generator-safety-carbon-monoxide");
assert.match(generator.figures[0].sourceUrl, /^https:\/\/www\.cdc\.gov\//);
assert.match(generator.figures[0].caption, /not to scale/);
assert(generator.sections.some((section) => section.body.includes("fresh air immediately, then call 911")));
const water = blogPosts.find((post) => post.slug === "hurricane-water-storage-purification-emergency");
const medical = blogPosts.find((post) => post.slug === "hurricane-medical-needs-registry-preparedness");
const assistance = blogPosts.find((post) => post.slug === "hurricane-safety-seniors-children-disability");
const revisedCarePosts = [water, medical, assistance];
for (const [post, published, heading] of [
  [water, "2026-08-18", "Boiling Questionable Water"],
  [medical, "2026-08-14", "Worked Record: A Charged Battery Is Not a Confirmed Plan"],
  [assistance, "2026-08-13", "Worked Handoff: The Usual Helper Cannot Arrive"]
]) {
  assert.equal(post.datePublished, published);
  assert.equal(post.dateModified, "2026-11-02");
  assert.equal(post.sourceCheck.date, "2026-11-02");
  routes.set(`/blog/${post.slug}/`, heading);
}
const filterFaq = water.faqs.find((faq) => faq.question === "Can a household water filter replace boiling?");
assert.match(filterFaq.answer, /During a boil-water advisory, no/);
assert.match(filterFaq.answer, /even after it passes through a home filter/);
assert(water.sections.some((section) => section.body.includes("boil even water that has passed through a home filter")));
assert.match(water.sourceCheck.scope, /October 27, not rechecked today/);
assert.match(JSON.stringify(medical), /transfer switch routes electricity.*does not generate or store power/);
assert.match(JSON.stringify(medical), /runtime under prescribed use is 'not confirmed\.'/);
assert.match(JSON.stringify(medical), /not to use insulin that has been frozen/);
assert(medical.sources.some((source) => source.href.startsWith("https://www.fda.gov/")));
for (const [post, other] of [[medical, assistance], [assistance, medical]]) {
  const text = JSON.stringify(post);
  assert(post.sources.some((source) => source.href === "https://www.ada.gov/resources/service-animals-faqs/"));
  assert(post.sections.some((section) => section.links?.some((link) => link.href === `/blog/${other.slug}/`)));
  assert.match(text, /vaccination and dog-licensing rules/);
  assert.doesNotMatch(text, /ADA documentation|food, vest|6 hours out: Stop travel|Leave one to two days earlier|minimum 14-day supply|A 7-day supply of every medication|charged from your car or generator|Rotate equipment to generator or vehicle/);
}
for (const [slug, heading, source] of [
  ["jacksonville", "Renew Special Medical Needs Registration Each Year", "https://maps.coj.net/evsearch/"],
  ["new-orleans", "Plan City-Assisted Evacuation Before Activation", "https://ready.nola.gov/plan/hurricane/#cae"]
]) {
  const city = hurricaneCities.find((city) => city.slug === slug);
  assert.equal(city.dateModified, "2026-10-27");
  assert.equal(city.sourceCheck.date, "2026-10-27");
  assert(city.localHazards.some((hazard) => hazard.heading === heading));
  assert(city.officialResources.some((resource) => resource.url === source));
  routes.set(`/hurricane-tracker/city/${slug}/`, heading);
}
for (const [slug, heading, expectedFigures] of [
  ["hurricane-radar-vs-satellite", "Read the Ian Example: Clouds and Echoes Are Different Layers", 2],
  ["hurricane-flood-zone-map-fema-understanding", "Read FEMA's Zone AE Teaching Example", 1]
]) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert.equal(post.figures.length, expectedFigures);
  assert.equal(post.sourceCheck.date, "2026-10-27");
  assert.match(post.sourceCheck.scope, /No current/);
  assert(post.sections.some((section) => section.heading === heading));
  for (const image of post.figures) assert.match(image.caption, /Historical|historical/);
  routes.set(`/blog/${slug}/`, heading);
}
const radar = blogPosts.find((post) => post.slug === "hurricane-radar-vs-satellite");
assert.match(radar.figures[0].caption, /13:01Z/);
assert.match(radar.figures[1].caption, /17:11Z/);
assert(radar.sections.some((section) => section.body.includes("exact scan synchronization")));
const floodMap = blogPosts.find((post) => post.slug === "hurricane-flood-zone-map-fema-understanding");
assert.match(floodMap.figures[0].sourceUrl, /#page=12$/);
assert(floodMap.sections.some((section) => section.body.includes("not the water depth above your floor")));
assert(floodMap.sections.some((section) => section.heading === "Make a Record You Can Actually Recheck"));
for (const post of blogPosts) {
  for (const figure of post.figures ?? []) {
    if (!figure.afterSection) continue;
    assert.equal(post.sections.filter((section) => section.heading === figure.afterSection).length, 1,
      `${post.slug}: an inline figure must belong to exactly one section`);
    assert(figure.width > 0 && figure.height > 0, "Inline figures reserve their intrinsic aspect ratio");
    assert(figure.sourceUrl?.startsWith("https://"), "Inline official examples need an original source");
    await fs.access(`public${figure.src}`);
  }
}
for (const slug of ["official-hurricane-information-sources-rumor-verification", "hurricane-storm-surge-forecasting", "how-to-read-the-hurricane-cone-of-uncertainty"]) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert.equal(post.sourceCheck?.date, "2026-10-27");
  assert(post.sourceCheck.scope.length > 30, "Disclose what the check covered");
  assert(post.figures.some((figure) => figure.afterSection));
  routes.set(`/blog/${slug}/`, post.figures[0].afterSection);
}
for (const slug of ["miami", "tampa", "houston"]) {
  const city = hurricaneCities.find((city) => city.slug === slug);
  assert.equal(city.dateModified, "2026-11-02");
  assert.equal(city.sourceCheck?.date, "2026-11-02");
  const guide = localPreparednessPages.find((page) => page.kind === "city" && page.slug === slug);
  assert.equal(guide.dateModified, "2026-11-02");
  assert.equal(guide.planningRecord.steps.length, 6);
  assert.match(guide.planningRecord.example, /Hypothetical/);
  assert.match(guide.sourceCheck.scope, /no (address|live)|No address/i);
  routes.set(`/city/${slug}/hurricane-tracker/`, guide.planningRecord.title);
}
assert.equal(new Set(localPreparednessPages.filter((page) => page.planningRecord).map((page) => page.planningRecord.title)).size, 3);
routes.set("/city/orlando/hurricane-tracker/", "Orlando Hurricane Emergency Kit Checklist");
routes.set("/about/", "Who Publishes and Maintains HurricaneHub");
for (const [slug, heading] of articles) {
  const post = blogPosts.find((post) => post.slug === slug);
  assert(post, `Missing existing article ${slug}`);
  assert(post.sections.some((section) => section.heading === heading));
  assert.equal(post.dateModified, slug === "what-hurricane-watch-warning-means" ? "2026-11-02" : "2026-10-27");
  assert(post.datePublished < post.dateModified, "Preserve original publication date");
  routes.set(`/blog/${slug}/`, heading);
}
for (const [slug, heading] of cities) {
  const city = hurricaneCities.find((city) => city.slug === slug);
  assert(city.localHazards.some((hazard) => hazard.heading === heading));
  assert(city.officialResources.every((source) => source.url.startsWith("https://")));
  routes.set(`/hurricane-tracker/city/${slug}/`, heading);
}
const cone = blogPosts.find((post) => post.slug === "how-to-read-the-hurricane-cone-of-uncertainty");
const figure = cone.figures.find((figure) => figure.src.includes("nhc-cone-helene-2024-example"));
assert.match(figure.caption, /September 25, 2024/);
assert.match(figure.caption, /Not a current forecast/);
const png = await fs.readFile(`public${figure.src}`);
assert.equal(png.subarray(1, 4).toString(), "PNG");
assert(png.readUInt32BE(16) > 0 && png.readUInt32BE(20) > 0);
assert(cone.sections.some((section) => section.links?.some((link) => link.href.endsWith("/images/cone_5day_with_ww.png"))));
const floridaSource = await fs.readFile("src/pages/tracker/florida.astro", "utf8");
assert.match(floridaSource, /AL092022_Ian\.pdf/);
assert.match(floridaSource, /10-15 feet above ground level/);
assert.match(floridaSource, /10-20 inches of rain/);
assert.match(floridaSource, /<caption>/);
assert.match(floridaSource, /scope="row"/);
assert.doesNotMatch(floridaSource, /Florida Gulf searches overlap|For local searches such as/);
const sharedStateSource = await fs.readFile("src/components/StateTrackerSeoLinks.astro", "utf8");
assert.doesNotMatch(sharedStateSource, /Common searches this page answers|Local searches covered|High-Intent|searchQueries|cityRiskQueries/);
routes.set("/", "Understand the Maps Behind the Forecast");
const stateCaseHeadings = {
  florida: "Ian: Three Measurements, Three Different Questions",
  texas: "Harvey: A Landfall, a Rain Gauge and a Water Level",
  "north-carolina": "Florence: Weaker Landfall Winds, Different Water Hazards"
};
for (const state of coastalStates) {
  routes.set(`/tracker/${state.slug}/`, stateCaseHeadings[state.slug] ?? `Local Guides in ${state.name}`);
}

const base = process.env.CONTENT_AUDIT_BASE_URL;
if (base) {
  for (const [route, heading] of routes) {
    const response = await fetch(new URL(route, base), { redirect: "manual", signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert(html.includes(heading.replaceAll("'", "&#39;")) || html.includes(heading), `${route}: new content missing`);
    assert(html.includes(`https://www.hurricanetracker.cc${route}`), `${route}: canonical missing`);
    assert.match(html, /application\/ld\+json/);
    if (["miami", "tampa", "houston"].some((slug) => route === `/city/${slug}/hurricane-tracker/`)) {
      const guide = localPreparednessPages.find((page) => page.kind === "city" && route === `/city/${page.slug}/hurricane-tracker/`);
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const nodes = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
      const howTo = nodes.find((node) => node["@type"] === "HowTo");
      assert.equal(howTo.name, guide.planningRecord.title);
      assert.equal(howTo.step.length, 6);
      assert.equal(howTo.step[0].text, guide.planningRecord.steps[0].text);
      assert(html.includes(`href="/hurricane-tracker/city/${guide.slug}/"`));
      assert.doesNotMatch(html, /id="storm-history"|id="kit-checklist"/);
      assert(html.includes("Hypothetical record:"));
      assert(html.includes("Source check 2026-11-02"));
    }
    if (["miami", "tampa", "houston"].some((slug) => route === `/hurricane-tracker/city/${slug}/`)) {
      const slug = route.split("/")[3];
      assert(html.includes(`href="/city/${slug}/hurricane-tracker/"`));
      assert(html.includes("Apply the Current Local Instruction"));
      assert.doesNotMatch(html, /Evacuation and Action Checklist|72\/48\/24-hour/);
    }
    if (route === "/tracker/texas/" || route === "/tracker/north-carolina/") {
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const nodes = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
      assert(nodes.some((node) => String(node.dateModified).startsWith("2026-11-02")));
      const faq = nodes.find((node) => node["@type"] === "FAQPage");
      const question = faq.mainEntity.find((item) => item.name.includes(route.includes("texas") ? "60.58 inches" : "Category 4"));
      assert(question);
      assert.match(question.acceptedAnswer.text, route.includes("texas") ? /Nederland/ : /1115 UTC/);
      assert(html.includes("scope=\"row\""));
      assert(html.includes("Source check 2026-11-02"));
      assert.match(html, route.includes("texas") ? /AL092017_Harvey\.pdf/ : /AL062018_Florence\.pdf/);
    }
    if (route.startsWith("/tracker/")) {
      assert.doesNotMatch(html, /Common searches this page answers|Local searches covered|High-Intent|For local searches such as/);
      assert(html.includes('href="/tools/evacuation-decision-helper/"'));
    }
    if (route === "/" || route === "/tracker/florida/") {
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const nodes = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
      assert(nodes.some((node) => String(node.dateModified).startsWith("2026-11-02")));
      if (route === "/") {
        assert.doesNotMatch(html, /aria-label="Hurricane topic trackers"/);
        for (const post of [cone, radar, floodMap]) {
          assert(html.includes(`href="/blog/${post.slug}/"`));
          assert(html.includes(post.figures[0].src));
          assert(html.includes(`datetime="${post.dateModified}"`));
        }
      } else {
        const faq = nodes.find((node) => node["@type"] === "FAQPage");
        assert.match(faq.mainEntity.find((item) => item.name.includes("Was Ian a Category 5")).acceptedAnswer.text, /130 kt, Category 4/);
        assert(html.includes("Source check 2026-11-02"));
      }
    }
    if (route === "/city/miami/hurricane-tracker/" || route === `/blog/${rooms.slug}/` || route === `/blog/${hardening.slug}/` || revisedCarePosts.some((post) => route === `/blog/${post.slug}/`)) {
      const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
        .map((match) => JSON.parse(match[1]));
      const nodes = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
      assert(nodes.some((node) => String(node.dateModified).startsWith("2026-11-02")), `${route}: actual revision date missing from schema`);
      assert(html.includes("Source check 2026-11-02"), `${route}: source-check scope missing`);
      assert.doesNotMatch(html, /practice shutting off gas|outer edge, not the center|12 hours out: Shut off propane/);
      if (route === `/blog/${water.slug}/`) {
        const faq = nodes.find((node) => node["@type"] === "FAQPage");
        assert(faq, "Water FAQ schema missing");
        const filterQuestion = faq.mainEntity.find((question) => question.name === filterFaq.question);
        assert.equal(filterQuestion?.acceptedAnswer?.text, filterFaq.answer, "Rendered FAQ schema must carry the corrected water instruction");
        assert(html.includes(filterFaq.answer.replaceAll("'", "&#39;")) || html.includes(filterFaq.answer), "Visible FAQ must match its schema");
      }
    }
    if (route.startsWith("/blog/") && route !== "/blog/hurricane-watch-vs-warning/") {
      assert(html.includes('aria-label="Article contents"'), `${route}: contents navigation missing`);
      assert(html.includes('href="#section-0"'), `${route}: section navigation missing`);
    }
  }
  const response = await fetch(new URL(figure.src, base));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /image\/png/);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), png, "Serve the unchanged official image");
}
console.log(`Content and editorial media checks passed: ${routes.size} routes, inline figure ownership, source scopes, city dates and official image${base ? " (including rendered pages)" : " (data only; set CONTENT_AUDIT_BASE_URL for rendered checks)"}.`);
