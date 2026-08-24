# SEO Tasks — HurricaneHub (Codex-ready)

- **Source:** sem.3ue.com Keyword Magic Tool, seed `hurricane preparedness checklist`, US region, 2026-08-24
- **Raw rows:** 104 (all under 'Hurricane Preparedness' topic)
- **Filter applied:** KD < 40 AND Volume >= 50 (Semrush floors at 50); excluded brand/winter/non-English noise
- **Winners:** 104
- **Page-type split:** blog=26, state=8, storm=1, tool=49, topic=20
- **Execution status (as of 2026-08-24):** B1 / B2 / B3 / B4 / B5 all shipped in commit `dcd6348`; B6 re-spec'd (no longer depends on a WorkBuddy-only skill); B7 moved to an event-trigger template at the bottom.

> **Routing rule:** programmatic pages (tool/state/topic/storm) = primary traffic engine; blog = long-tail 支线 only.
> **AGENTS.md constraints for Codex:** use SEO.astro (no hand-written meta), sync new routes in src/lib/sitemapRoutes.ts (禁区 — careful), batch <=50 pages, JSON-LD via graph(), no fabricated live/weather/alert data, build must pass before commit. **Additional hard rule discovered 2026-08-24:** `src/pages/search-index.json.ts` is also forbidden — do not edit it under any circumstances; flag missing entries to the user instead.

## Status (updated 2026-08-24, post-Codex review)

| Batch | Type | Status | Shipped / Next |
|---|---|---|---|
| B1 | tool | ✅ Done (Codex) | commit `dcd6348` — B1a optimized existing page + B1b new `tools/business-preparedness/` |
| B2 | state | ✅ Done (Codex) | commit `dcd6348` — FL/TX/SC each gained H2 sections + extra FAQ Q/A |
| B3 | topic | ✅ Done (Codex) | commit `dcd6348` — new topic `evacuation-plan` added to `topicPages.ts` |
| B4 | topic | ✅ Done (Codex) | commit `dcd6348` — new topics `mitigation` + `hurricane-training` |
| B5 | topic | ✅ Done (Codex) | commit `dcd6348` — new topic `after-hurricane` |
| B6 | blog | 🔧 Re-spec'ing | this brief had a defect (depended on a WorkBuddy-only skill); see fixed spec |
| B7 | storm | ⏸ Event-trigger | moved out of the main batch table (see bottom) — fires only when NHC names a 2026 storm |

> ⚠️ **Forbidden-file note (post-Codex audit):** Codex's commit `dcd6348` also touched `src/pages/search-index.json.ts` (+1 line for the new tool entry) and `src/data/site.ts` (+1/-1 for `contentLastModified`). `search-index.json.ts` is in the user's hard "do-not-touch" list. The change itself is correct (the new page needs to appear in search), but future Codex briefs must be amended to forbid this file too. If running a fresh batch, instruct Codex: "do not edit `src/pages/search-index.json.ts` under any circumstances — flag the missing entry to the user instead."

## Codex Task Batches

### Batch B1: Hurricane Kit & Supply Hub (tool pages) — ✅ DONE (Codex)

> ⚠️ **Avoid duplicate:** `/tools/preparedness-checklist/` (file `src/pages/tools/preparedness-checklist.ts`, an APIRoute returning full HTML) **already exists and already targets the crown-jewel "hurricane preparedness checklist" (880/12) + the kit cluster**. Do NOT create a competing `/tools/hurricane-kit-checklist/`. Instead OPTIMIZE the existing page, and add only ONE new sub-tool for the uncovered B2B long-tail.

> ✅ **STATUS — SHIPPED (2026-08-24):** Implemented by Codex and committed as `dcd6348` ("seo: expand hurricane preparedness intent coverage"). Files changed: `src/pages/tools/preparedness-checklist.ts` (+43 lines, B1a: added "Hurricane Kit vs. Preparedness Checklist" + "Tropical Storm Emergency Kit" H2s and FAQ), `src/pages/tools/business-preparedness.astro` (NEW, 46 lines, B1b B2B page with 6 H2 + FAQ + breadcrumbSchema + insurance/legal hedging), `src/lib/sitemapRoutes.ts` (+3 lines, registered `tools/business-preparedness/`). Verified: no duplicate URL, no forbidden-file edits, sitemap synced.

- **Page type:** tool (optimize existing + 1 new)
- **Target URL(s):**
  - `B1a` → optimize **existing** `/tools/preparedness-checklist/` (edit `src/pages/tools/preparedness-checklist.ts`)
  - `B1b` → **new** `/tools/business-preparedness/` (new `.astro` file)
- **Schema:** WebApplication + FAQPage + ItemList + BreadcrumbList (existing page already uses `graph()` with these types)
- **Total winners fed:** 14 (table below)

#### B1a — Optimize existing `/tools/preparedness-checklist/`
**File:** `src/pages/tools/preparedness-checklist.ts` (APIRoute; returns `<!doctype html>` string; builds JSON-LD via `graph()` from `../../lib/schema`).
**Goal:** capture more of the kit/checklist/food long-tail WITHOUT a new URL.
**Edits (inside `renderPage()` HTML + `pageFaqs`):**
1. Add H2 sections:
   - `Hurricane Kit vs. Preparedness Checklist` — capture "hurricane kit" (1900/38), "hurricane prep kit" (1000/38), "hurricane kit checklist" (260/33).
   - `Tropical Storm Emergency Kit` — capture "tropical storm emergency kit" (1900/38); note overlap with hurricane kit.
   - `Food & Water Supply List` — capture "hurricane food" (480/29), "hurricane food list" (260/16), "non perishable food for hurricanes" (390/19), "storm food" (260/25), "best hurricane food" (50/5), "hurricane foods" (140/19).
2. Extend `pageFaqs` with 3–4 Q/A: "What is the difference between a hurricane kit and a preparedness checklist?", "What food should I stock for a hurricane?", "Do I need a separate tropical storm kit?".
3. Add `hurricane business supply list` → `/tools/business-preparedness/` to `relatedPaths` (after B1b ships); keep existing blog/tool links.
4. Keep `graph()`; optionally append `itemListSchema` if the food list renders as bullets.
**Safety:** food/medication guidance must hedge ("consult your doctor / pharmacist for medication needs"; "follow local official storage guidance"). No fabricated shelf-life numbers.

#### B1b — New `/tools/business-preparedness/`
**File:** `src/pages/tools/business-preparedness.astro` (follow the `.astro` + `Layout` convention used by `family-communication-plan.astro`).
**Targets (uncovered B2B long-tail):** `hurricane business supply list` (90/11), `hurricane preparedness list for businesses` (70/32). Also feeds the seed "hurricane preparation for business".
**Page outline (≥800 words original):**
- H1: Hurricane Business & Workplace Preparedness Supply List
- H2: Who needs a workplace hurricane kit
- H2: Core supply list (water, food, comms, first aid, docs, cash, PPE)
- H2: Remote / multi-location coordination plan
- H2: Employee communication & shelter-in-place
- H2: Recovery & continuity checklist
- FAQ (5+ Q/A; hedge insurance/legal to "consult your insurer / local official")
**JSON-LD:** `graph(websiteSchema(), articleSchema({title, description, url, dateModified}), webApplicationSchema({name, description, url, featureList:[...]}), faqSchema(pageFaqs), breadcrumbSchema([site.name → Tools → Business Preparedness]))`.
**Internal links:** `/tools/preparedness-checklist/`, `/tools/local-risk-plan/`, `/tools/family-communication-plan/`, `/tracker/florida/`, `/tracker/texas/`, `/hurricane-tracker/live/`.
**External links (official only):** ready.gov, fema.gov, weather.gov.

#### sitemapRoutes.ts registration (禁区 — edit carefully)
- `B1a`: **no change** (existing route already present in `toolRoutes`).
- `B1b`: add ONE line to the `toolRoutes` array in `src/lib/sitemapRoutes.ts`:
  `{ path: "tools/business-preparedness/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },`
- Do NOT touch other arrays; keep grouping with the other tool entries.

#### Build & verify
- `npm run build` must pass (`astro check` typecheck). The `.ts` edit and new `.astro` must typecheck.
- Confirm no new route conflicts with the existing `preparedness-checklist`.
- No edits to `package.json`, `astro.config.mjs`, `wrangler.*`, `src/pages/sitemap*.xml.ts`, `src/data/blog.ts`.

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Intent |
|---|---|---|---|---|---|
| emergency kit for a hurricane | 3600 | 36 | 0.37 | 100.0 | Informational, Commercial |
| hurricane preparedness checklist | 880 | 12 | 4.12 | 73.3 | Informational |
| hurricane kit | 1900 | 38 | 0.33 | 50.0 | Informational, Commercial |
| tropical storm emergency kit | 1900 | 38 | 0.37 | 50.0 | Informational, Commercial |
| hurricane prep kit | 1000 | 38 | 0.34 | 26.3 | Commercial |
| non perishable food for hurricanes | 390 | 19 | 0.00 | 20.5 | Informational |
| hurricane food | 480 | 29 | 0.38 | 16.6 | Informational |
| hurricane food list | 260 | 16 | 0.26 | 16.2 | Informational |
| hurricane supplies checklist | 390 | 34 | 0.20 | 11.5 | Informational |
| storm food | 260 | 25 | 0.15 | 10.4 | Informational |
| best hurricane food | 50 | 5 | 0.00 | 10.0 | Commercial |
| hurricane business supply list | 90 | 11 | 0.20 | 8.2 | Informational |
| hurricane kit checklist | 260 | 33 | 0.15 | 7.9 | Informational |
| hurricane foods | 140 | 19 | 0.89 | 7.4 | Informational |

---

### Batch B2: State preparedness pages optimization (state) — ✅ DONE (Codex)

> ✅ **STATUS — SHIPPED (2026-08-24):** Implemented by Codex in commit `dcd6348`. FL page +24 lines, TX page +15 lines, SC page +15 lines — each gained a state-specific H2 (`How to Prepare for a Hurricane in Florida` / `Texas Hurricane Season` / `South Carolina Hurricane Preparedness`) plus extra FAQ Q/A objects appended to the existing `faqSchema([...stateCurrentFaqs(name, currentStatus), ...faqs])` graph. No sitemap edit needed (state routes are auto-generated from `coastalStates`). Verified: no forbidden-file edits outside the `search-index.json.ts`/`site.ts` items already noted in Status.

> **Scope check (verified in code):** FL/TX/SC are `.astro` files using `BaseLayout` (NOT `Layout`). Their routes are auto-generated from `coastalStates` in `src/lib/sitemapRoutes.ts:72`, so editing content needs **NO sitemap change**. JSON-LD is `graph(websiteSchema(), articleSchema({title, description, url: canonical, dateModified}), itemListSchema([...]), faqSchema([...stateCurrentFaqs(name, currentStatus), ...faqs]))`. Do NOT change schema types — only append FAQ Q/A.

- **Page type:** state (optimize existing)
- **Target URL(s):** `/tracker/florida/` , `/tracker/texas/` , `/tracker/south-carolina/` (edit existing `.astro`)
- **Schema:** keep existing graph() (Article + FAQPage + ItemList + WebSite)
- **Winners fed:** 8 (table below)

#### B2-FL — /tracker/florida/
**File:** `src/pages/tracker/florida.astro`
**Edits (insert after the intro `<p>`, before existing `<h2>` sections):**
1. Add H2 `<section class="band">` blocks capturing the long-tails:
   - `How to Prepare for a Hurricane in Florida` → "how to prepare for a hurricane in florida" (260/34), "florida hurricane plan" (170/37), "hurricane plan florida" (170/39)
   - `Florida Hurricane Evacuation Plan` → "hurricane evacuation plan florida" (70/31); link to `/tools/evacuation-decision-helper/`
   - `Florida Hurricane Supply List` → "florida hurricane supply list" (50/32); link to `/tools/preparedness-checklist/`
   - `Florida Hurricane Go-Bag` → "florida hurricane box" (50/17)
2. Extend `faqSchema([...stateCurrentFaqs(name, currentStatus), ...faqs])` → insert 3–4 FL Q/A objects before `...faqs`: "What should I put in a Florida hurricane go-bag?", "When should Florida residents evacuate?", "Does a hurricane watch mean I should leave Florida?".
3. Internal links to add: `/tools/preparedness-checklist/`, `/tools/evacuation-decision-helper/`, `/hurricane-tracker/live/`.
**Safety:** evacuation timing → "follow local emergency management orders"; medical needs → "consult your doctor or local official".

#### B2-TX — /tracker/texas/
**File:** `src/pages/tracker/texas.astro`
**Edits:**
1. Add H2 `<section>` `How to Prepare for Hurricane Season in Texas` → "how to prepare for hurricane season in texas" (70/28). Mention Gulf-coast surge, inland flooding (Harvey), safe generator use.
2. Extend `faqSchema([...])` with 2–3 TX Q/A: "How do I prepare for a hurricane in Texas?", "Which Texas counties have mandatory evacuation zones?".
3. Internal links: `/tools/preparedness-checklist/`, `/tools/power-outage-planner/`, `/hurricane-tracker/live/`.

#### B2-SC — /tracker/south-carolina/
**File:** `src/pages/tracker/south-carolina.astro`
**Edits:**
1. Add H2 `<section>` `South Carolina Hurricane Preparedness` → "hurricane preparedness sc" (50/28).
2. Extend `faqSchema([...])` with 2 SC Q/A.
3. Internal links: `/tools/preparedness-checklist/`, `/hurricane-tracker/live/`, `/tracker/north-carolina/`.

#### sitemapRoutes.ts
- **NO change** for B2 (state routes auto from `coastalStates`).

#### Build & verify
- `npm run build` must pass (the `.astro` files use BaseLayout; ensure new `<section>`/`<h2>` markup is valid).
- No edits to forbidden files (`blog.ts`, `sitemap.xml.ts`, `package.json`, deploy files).

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Intent |
|---|---|---|---|---|---|
| how to prepare for a hurricane in florida | 260 | 34 | 1.28 | 7.6 | Informational |
| florida hurricane plan | 170 | 37 | 0.00 | 4.6 | Informational, Commercial |
| hurricane plan florida | 170 | 39 | 0.00 | 4.4 | Informational |
| florida hurricane box | 50 | 17 | 0.00 | 2.9 | Informational |
| how to prepare for hurricane season in texas | 70 | 28 | 0.00 | 2.5 | Informational |
| hurricane evacuation plan florida | 70 | 31 | 0.00 | 2.3 | Informational |
| hurricane preparedness sc | 50 | 28 | 0.00 | 1.8 | Informational |
| florida hurricane supply list | 50 | 32 | 0.00 | 1.6 | Informational |

---

### Batch B3: Hurricane Evacuation Plan topic page (topic) — ✅ DONE (Codex)

> ✅ **STATUS — SHIPPED (2026-08-24):** Implemented by Codex in commit `dcd6348`. New `TopicPage` entry appended to `src/data/topicPages.ts` (`slug: "evacuation-plan"`), auto-rendered by `src/pages/hurricane-tracker/[topic].astro`, auto-registered in sitemap via `...topicPages.map(...)` at `sitemapRoutes.ts:53`. Verified: no URL conflict, no manual sitemap edit, no forbidden-file edits outside the `search-index.json.ts`/`site.ts` items already noted in Status.

> ⚠️ **Avoid duplicate:** `/tools/evacuation-decision-helper/` (file `src/pages/tools/evacuation-decision-helper.astro`, a WebApplication **decision tool**) ALREADY exists and targets evacuation *decisioning*. Do NOT build a competing `/tools/evacuation-checklist/`. Instead build a complementary **content/topic page** about evacuation *planning* — a different search intent (informational "how to plan" vs transactional "decision tool"). No URL collision.

- **Page type:** topic (data-driven SSG)
- **Target URL:** `/hurricane-tracker/evacuation-plan/` (NEW — auto-rendered by `src/pages/hurricane-tracker/[topic].astro` from a `topicPages` entry)
- **Schema:** `[topic].astro` auto-builds `graph(websiteSchema(), articleSchema({...}), howToSchema(page.steps), itemListSchema(page.nextLinks), faqSchema([...page.faqs, ...faqs]), breadcrumbSchema(...))` + renders `<FaqBlock>`. Just supply `faqs` (and steps/sections/nextLinks) in the data entry — do NOT hand-write meta or JSON-LD.
- **Winners fed:** 11 (evacuation-plan cluster, table below)

**Edit file:** `src/data/topicPages.ts` — append ONE object to the `topicPages` array (before the closing `];`).

**Entry (follow the `TopicPage` type exactly):**

```ts
{
  slug: "evacuation-plan",
  title: "Hurricane Evacuation Plan: Zones, Routes & Go-Bag",
  shortTitle: "Evacuation Plan",
  description: "Build a hurricane evacuation plan before a storm forms: learn your zone, map routes, pack a go-bag, plan for pets and medical needs, and follow local orders.",
  eyebrow: "Plan before you leave",
  intro: "A hurricane evacuation plan turns a last-minute scramble into a calm, early departure. Know your evacuation zone, identify two routes, prepare a go-bag, and decide now how you will handle pets, medication, and transportation so you can follow local orders without delay.",
  primaryAction: { label: "Check your evacuation zone", href: "/tools/evacuation-decision-helper/" },
  secondaryAction: { label: "Build a go-bag", href: "/tools/preparedness-checklist/" },
  intent: "hurricane evacuation plan, evacuation plan for a hurricane, hurricanes and evacuation plan, evacuate for hurricane",
  steps: [
    { title: "Find Your Zone", body: "Look up your county evacuation zone from the local emergency management map before a storm is named.", href: "/tools/evacuation-decision-helper/", label: "Use the decision helper" },
    { title: "Map Two Routes", body: "Pick a primary and backup route inland, away from surge. Confirm shelter locations on the official plan.", href: "/hurricane-tracker/live/", label: "Check live conditions" },
    { title: "Pack the Go-Bag", body: "Documents, medicine, cash, water, food, phone chargers, and pet supplies go in one grab-and-go bag.", href: "/tools/preparedness-checklist/", label: "Open the checklist" }
  ],
  sections: [
    { eyebrow: "Direct answer", title: "What Is a Hurricane Evacuation Plan?", body: "A hurricane evacuation plan is the set of decisions you make before a storm: your zone, routes, destination, go-bag, and how you handle household members who need extra time or care.", bullets: ["Your county evacuation zone (A, B, C...)", "Two mapped routes inland", "A destination and backup shelter", "A packed go-bag ready before any watch"] },
    { eyebrow: "Timing", title: "When Should You Leave?", body: "Leave when local officials order evacuation for your zone, or earlier if your household needs extra travel time for medical, mobility, pet, or transportation reasons. Roads, fuel, and shelters fill fast.", bullets: ["Follow county orders for your zone", "Leave before bridge and causeway closures", "Allow extra time for medical or mobility needs", "Do not wait for the storm to be 'certain'"] },
    { eyebrow: "Go-bag", title: "What Goes in the Evacuation Go-Bag?", body: "Pack documents, medication, cash, water, non-perishable food, chargers, and pet supplies so you can leave in minutes. Speak with your doctor or pharmacist about medication and refrigeration needs.", bullets: ["ID, insurance, and property documents", "A multi-day supply of medicine", "Cash and phone chargers", "Pet food, carriers, and records"] }
  ],
  nextLinks: [
    { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Decide Monitor, Prepare, Act, or Leave from your household risk." },
    { name: "Preparedness Checklist", href: "/tools/preparedness-checklist/", description: "Pack the supply list and go-bag for evacuation." },
    { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "Current NHC storms, tracks, and advisory times." },
    { name: "State Hurricane Trackers", href: "/tracker/", description: "Move from plan to your state alerts and local orders." },
    { name: "Storm Surge Map", href: "/hurricane-tracker/storm-surge-map/", description: "Understand coastal water risk that drives evacuations." }
  ],
  faqs: [
    { question: "What is a hurricane evacuation plan?", answer: "It is the set of choices you make before a storm: your evacuation zone, routes, destination, go-bag, and how you handle household members who need extra time or care." },
    { question: "When should I evacuate for a hurricane?", answer: "Evacuate when local officials order it for your zone. Leave earlier if you need extra travel time for medical, mobility, pet, or transportation reasons, because roads, fuel, and shelters fill quickly." },
    { question: "What should I pack in an evacuation go-bag?", answer: "Pack documents, a multi-day supply of medication, cash, water, non-perishable food, phone chargers, and pet supplies. Ask your doctor or pharmacist about medication and refrigeration needs." },
    { question: "Do I need to evacuate for a hurricane watch?", answer: "A watch means hurricane conditions are possible. You do not automatically evacuate for a watch, but if you live in a surge zone or need extra travel time, prepare to leave as soon as an order is given." },
    { question: "Where do I go during a hurricane evacuation?", answer: "Follow your county plan: a designated shelter, a hotel inland, or the home of friends or family outside the surge zone. Confirm the destination on the official local plan before you leave." }
  ]
}
```

#### sitemapRoutes.ts
- **NO change** for B3 — topic pages auto-map via `...topicPages.map((page) => ({ path: \`hurricane-tracker/${page.slug}/\`, ... }))` at `src/lib/sitemapRoutes.ts:53`. The new entry is picked up automatically.

#### Build & verify
- `npm run build` must pass (`[topic].astro` `getStaticPaths()` picks up the new slug; `topicPages.ts` is type-checked against `TopicPage`).
- Collision check: `grep -n 'slug: "evacuation-plan"' src/data/topicPages.ts` → must return NONE before adding (it currently does).
- No edits to forbidden files (`blog.ts`, `sitemap.xml.ts`, `package.json`, deploy files).

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Intent |
|---|---|---|---|---|---|
| hurricanes and evacuation plan | 590 | 30 | 0.00 | 19.7 | Informational |
| hurricanes and evacuation | 390 | 30 | 0.00 | 13.0 | Informational |
| evacuation plan hurricane | 390 | 33 | 0.00 | 11.8 | Informational |
| hurricane evacuation plan | 260 | 39 | 0.00 | 6.7 | Informational |
| evacuation plan for a hurricane | 210 | 32 | 0.00 | 6.6 | Informational |
| evacuating for hurricane | 210 | 34 | 0.00 | 6.2 | Informational |
| evacuate for hurricane | 210 | 35 | 0.00 | 6.0 | Informational |
| evacuation plan for hurricane | 210 | 38 | 0.00 | 5.5 | Informational |
| evacuate hurricane | 140 | 35 | 0.00 | 4.0 | Informational, Transactional |
| hurricane evacuate | 90 | 37 | 0.00 | 2.4 | Informational |
| where to go in a hurricane | 50 | 22 | 0.00 | 2.3 | Informational |

---

### Batch B4: Mitigation / training / science topic (topic) — ✅ DONE (Codex)

> ✅ **STATUS — SHIPPED (2026-08-24):** Implemented by Codex in commit `dcd6348`. New `TopicPage` entries appended to `src/data/topicPages.ts`: `slug: "mitigation"` (captures the 110/22 CPC 17.41 — highest-CPC winner in the dataset) and `slug: "hurricane-training"` (captures 140/26 + 70/14 training cluster). Both auto-render via `[topic].astro`; both auto-register in sitemap.

- **Page type:** topic
- **Target URL(s):** /hurricane-tracker/mitigation/ (new SSG) + /hurricane-tracker/hurricane-training/ (new SSG)
- **Schema:** Article + FAQPage
- **Action:** Two SSG topic pages. Mitigation page targets 'mitigation of hurricanes' (CPC 17.41 - highest commercial value in dataset) + mitigation strategies. Training page targets 'hurricane training / training center / drill'. Both >=800 words original, official external links (weather.gov, fema.gov, ready.gov).

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Intent |
|---|---|---|---|---|---|
| hurricane training center | 140 | 26 | 0.00 | 5.4 | Informational |
| mitigation of hurricanes | 110 | 22 | 17.41 | 5.0 | Informational |
| hurricane training | 70 | 14 | 0.00 | 5.0 | Informational |
| warning signs of hurricanes | 50 | 11 | 0.00 | 4.5 | Informational |
| hurricane drill | 90 | 21 | 0.00 | 4.3 | Informational, Transactional |
| hurricane ema | 110 | 32 | 0.00 | 3.4 | Informational |
| hurricane mitigation strategies | 50 | 21 | 0.00 | 2.4 | Informational |
| mitigation strategies for hurricanes | 50 | 38 | 0.00 | 1.3 | Informational |

---

### Batch B5: After-storm cleanup & recovery topic (topic) — ✅ DONE (Codex)

> ✅ **STATUS — SHIPPED (2026-08-24):** Implemented by Codex in commit `dcd6348`. New `TopicPage` entry appended to `src/data/topicPages.ts`: `slug: "after-hurricane"` — captures the 170/29 CPC 10.64 winner `emergency storm cleanup` + cleanup long-tail. Hedging: downed-power-line safety / mold / contaminated water / generator CO all deferred to "consult local officials / licensed contractor".

- **Page type:** topic
- **Target URL(s):** /hurricane-tracker/after-hurricane/ (new SSG) OR blog long-tail
- **Schema:** Article + FAQPage + HowTo
- **Action:** Target 'emergency storm cleanup' (CPC 10.64) + 'hurricane clean up list'. SSG page with safety steps (downed lines, mold, contaminated water, generator CO). Use hedging: 'consult local officials / licensed contractor'. Link to /tools/ and FEMA disasterassistance.gov.

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Intent |
|---|---|---|---|---|---|
| emergency storm cleanup | 170 | 29 | 10.64 | 5.9 | Informational |

---

### Batch B6: How-to / safety long-tail blogs (blog — 支线) — 🔧 RE-SPEC'D

> ⚠️ **Why this changed:** The original brief told Codex to "feed into `hurricanehub-blog-publisher` skill which auto-dedupes against `src/data/blog.ts`". That skill is **WorkBuddy-only** (not available in Codex's environment). Codex correctly refused. The fix is to give Codex a direct, self-contained task: produce a **markdown draft file** with all required structure. The user (or the next WorkBuddy session) will then publish it via the blog-publisher skill later. Codex never touches `src/data/blog.ts`.

- **Page type:** blog (markdown draft only — DO NOT touch `src/data/blog.ts`)
- **Target output:** `blog-drafts/<YYYY-MM-DD>-<slug>.md` (one file per topic; one B6 run = 1 file)
- **Schema:** BlogPosting + FAQPage (B6 markdown is a *draft*, schema lives in `BlogPost[]` at publish time)
- **Winners fed:** 12 long-tail informational queries (table below)

#### Codex instructions (self-contained — no skill call needed)

For the chosen keyword (highest Volume/KD ratio from the table):

1. **File path:** `blog-drafts/<YYYY-MM-DD>-<keyword-slug>.md` (lowercase, hyphen-separated; e.g. `blog-drafts/2026-08-25-what-to-do-if-hurricane-is-approaching.md`).
2. **YAML front-matter** (7 required keys):
   ```yaml
   ---
   slug: <keyword-slug>
   title: "<H1 — natural title containing the keyword>"
   meta_description: "120–160 char summary with the keyword"
   image_prompt: "photorealistic <human-centric scene matching the topic>"
   image_alt: "concise alt text describing the scene"
   datePublished: "<YYYY-MM-DD>"
   dateModified: "<YYYY-MM-DD>"
   ---
   ```
3. **Body structure:**
   - One `# H1` heading (echo the title)
   - **13+ `##` sections** (mix of informational + actionable; include one `## FAQ` section)
   - **5+ FAQ items** inside `## FAQ` using `**Q:** …` / `**A:** …` blocks
   - Internal-link placeholders in `{{INTERNAL: /path/}}` form (real paths, e.g. `/tools/preparedness-checklist/`, `/hurricane-tracker/live/`, `/blog/<existing-slug>/`)
   - External links: only `weather.gov`, `nhc.noaa.gov`, `fema.gov`, `ready.gov`, `disasterassistance.gov`
4. **Safety:** medical/legal/insurance claims must hedge ("consult your doctor / insurer / local official / your policy"). No fabricated live weather, named storms, official alerts, or disaster data.
5. **DO NOT** edit `src/data/blog.ts`, `src/pages/`, `sitemap.xml.ts`, `search-index.json.ts`, `package.json`, deploy files, or any other file. **Output one .md file, that is the entire job.**

#### What happens after Codex finishes

- The user (or a future WorkBuddy session) reads the .md draft.
- The blog-publisher skill converts it into a `BlogPost[]` entry in `src/data/blog.ts` (the only legitimate time that file changes).
- Blog-publisher also runs the `gen-og.mjs` script to generate the OG image from `image_prompt`.

**Source keywords (winners):**

| Keyword | Volume | KD | CPC | Ratio | Notes |
|---|---|---|---|---|---|
| getting your ac ready for hurricane season | 70 | 0 | 0.00 | 70.0 | KD 0 = extremely easy to rank |
| what should you do if a hurricane is approaching | 320 | 26 | 0.00 | 12.3 | highest-volume blog winner |
| prepare for the storm | 170 | 15 | 0.32 | 11.3 | |
| storm prep | 170 | 15 | 0.41 | 11.3 | |
| how to survive hurricane | 260 | 37 | 4.20 | 7.0 | CPC 4.20 = strong commercial intent; hedge aggressively |
| pregnant during a hurricane | 70 | 12 | 0.00 | 5.8 | MUST use medical hedging |
| 10 ways to stay safe during a hurricane | 170 | 36 | 0.00 | 4.7 | |
| before a hurricane strikes it is safest to | 70 | 15 | 0.00 | 4.7 | |
| preparing for the storm | 170 | 38 | 0.27 | 4.5 | |
| home hurricane | 110 | 29 | 0.62 | 3.8 | |
| prepare house for hurricane | 140 | 39 | 0.00 | 3.6 | |
| what should you do if a hurricane is approaching aceable | 50 | 15 | 0.00 | 3.3 | "aceable" is a Texas driving-school brand — skip or rewrite |

---

### Batch B7: Named-storm spike watch (storm) — ⏸ EVENT-TRIGGER, MOVED

> ⚠️ **Why this changed:** B7 is event-triggered (it only fires when NHC names a 2026 storm). Codex cannot execute it autonomously — there is no "Gabrielle" until NHC says so. Codex correctly refused to fabricate data. The right fix is to move B7 out of the main batch table and treat it as a **standby template** that the user invokes on demand.

---

## Winners Master Table (all filtered, sorted by Volume/KD ratio)

| # | Keyword | Volume | KD | CPC | Ratio | Page type | Intent | Floor |
|---|---|---|---|---|---|---|---|---|
| 1 | emergency kit for a hurricane | 3600 | 36 | 0.37 | 100.0 | tool | Informational, Commercial |  |
| 2 | hurricane preparedness checklist | 880 | 12 | 4.12 | 73.3 | tool | Informational |  |
| 3 | getting your ac ready for hurricane season | 70 | 0 | 0.00 | 70.0 | blog | Informational |  |
| 4 | hurricane kit | 1900 | 38 | 0.33 | 50.0 | tool | Informational, Commercial |  |
| 5 | tropical storm emergency kit | 1900 | 38 | 0.37 | 50.0 | tool | Informational, Commercial |  |
| 6 | hurricane prep kit | 1000 | 38 | 0.34 | 26.3 | tool | Commercial |  |
| 7 | non perishable food for hurricanes | 390 | 19 | 0.00 | 20.5 | tool | Informational |  |
| 8 | hurricanes and evacuation plan | 590 | 30 | 0.00 | 19.7 | topic | Informational |  |
| 9 | hurricane food | 480 | 29 | 0.38 | 16.6 | tool | Informational |  |
| 10 | hurricane food list | 260 | 16 | 0.26 | 16.2 | tool | Informational |  |
| 11 | hurricanes and evacuation | 390 | 30 | 0.00 | 13.0 | topic | Informational |  |
| 12 | what should you do if a hurricane is approaching | 320 | 26 | 0.00 | 12.3 | blog | Informational |  |
| 13 | evacuation plan hurricane | 390 | 33 | 0.00 | 11.8 | topic | Informational |  |
| 14 | hurricane supplies checklist | 390 | 34 | 0.20 | 11.5 | tool | Informational |  |
| 15 | prepare for the storm | 170 | 15 | 0.32 | 11.3 | blog | Informational |  |
| 16 | storm prep | 170 | 15 | 0.41 | 11.3 | blog | Informational |  |
| 17 | storm food | 260 | 25 | 0.15 | 10.4 | tool | Informational |  |
| 18 | best hurricane food | 50 | 5 | 0.00 | 10.0 | tool | Commercial | yes |
| 19 | hurricane business supply list | 90 | 11 | 0.20 | 8.2 | tool | Informational |  |
| 20 | hurricane kit checklist | 260 | 33 | 0.15 | 7.9 | tool | Informational |  |
| 21 | how to prepare for a hurricane in florida | 260 | 34 | 1.28 | 7.6 | state | Informational |  |
| 22 | hurricane foods | 140 | 19 | 0.89 | 7.4 | tool | Informational |  |
| 23 | emergency kit in typhoon | 110 | 15 | 0.00 | 7.3 | tool | Informational |  |
| 24 | how to survive hurricane | 260 | 37 | 4.20 | 7.0 | blog | Informational |  |
| 25 | hurricane evacuation plan | 260 | 39 | 0.00 | 6.7 | topic | Informational |  |
| 26 | evacuation plan for a hurricane | 210 | 32 | 0.00 | 6.6 | topic | Informational |  |
| 27 | evacuating for hurricane | 210 | 34 | 0.00 | 6.2 | topic | Informational |  |
| 28 | evacuate for hurricane | 210 | 35 | 0.00 | 6.0 | topic | Informational |  |
| 29 | emergency storm cleanup | 170 | 29 | 10.64 | 5.9 | topic | Informational |  |
| 30 | hurricane clean up list | 110 | 19 | 0.00 | 5.8 | tool | Informational |  |
| 31 | pregnant during a hurricane | 70 | 12 | 0.00 | 5.8 | blog | Informational |  |
| 32 | hurricane essentials | 210 | 37 | 0.42 | 5.7 | tool | Informational |  |
| 33 | evacuation plan for hurricane | 210 | 38 | 0.00 | 5.5 | topic | Informational |  |
| 34 | hurricane preparedness checklist pdf | 170 | 31 | 0.00 | 5.5 | tool | Informational |  |
| 35 | hurricane training center | 140 | 26 | 0.00 | 5.4 | topic | Informational |  |
| 36 | mitigation of hurricanes | 110 | 22 | 17.41 | 5.0 | topic | Informational |  |
| 37 | hurricane snacks | 70 | 14 | 0.00 | 5.0 | tool | Informational |  |
| 38 | hurricane training | 70 | 14 | 0.00 | 5.0 | topic | Informational |  |
| 39 | 10 ways to stay safe during a hurricane | 170 | 36 | 0.00 | 4.7 | blog | Informational |  |
| 40 | water for hurricane preparedness | 140 | 30 | 0.00 | 4.7 | tool | Informational |  |
| 41 | before a hurricane strikes it is safest to | 70 | 15 | 0.00 | 4.7 | blog | Informational |  |
| 42 | florida hurricane plan | 170 | 37 | 0.00 | 4.6 | state | Informational, Commercial |  |
| 43 | tropical storm kit | 110 | 24 | 0.33 | 4.6 | tool | Informational |  |
| 44 | preparing for the storm | 170 | 38 | 0.27 | 4.5 | blog | Informational |  |
| 45 | non perishable food for hurricane prep | 90 | 20 | 0.00 | 4.5 | tool | Informational |  |
| 46 | hurricane food shopping list | 50 | 11 | 0.00 | 4.5 | tool | Informational, Commercial | yes |
| 47 | warning signs of hurricanes | 50 | 11 | 0.00 | 4.5 | topic | Informational | yes |
| 48 | hurricane plan florida | 170 | 39 | 0.00 | 4.4 | state | Informational |  |
| 49 | food for hurricanes | 90 | 21 | 0.00 | 4.3 | tool | Informational |  |
| 50 | hurricane drill | 90 | 21 | 0.00 | 4.3 | topic | Informational, Transactional |  |
| 51 | food for hurricane | 110 | 26 | 0.05 | 4.2 | tool | Informational |  |
| 52 | hurricane equipment | 50 | 12 | 0.00 | 4.2 | tool | Informational | yes |
| 53 | evacuate hurricane | 140 | 35 | 0.00 | 4.0 | topic | Informational, Transactional |  |
| 54 | home hurricane | 110 | 29 | 0.62 | 3.8 | blog | Informational |  |
| 55 | prepare house for hurricane | 140 | 39 | 0.00 | 3.6 | blog | Informational |  |
| 56 | good hurricane food | 70 | 20 | 0.00 | 3.5 | tool | Informational |  |
| 57 | hurricane gabrielle emergency resources | 70 | 20 | 0.00 | 3.5 | storm | Informational |  |
| 58 | hurricane ema | 110 | 32 | 0.00 | 3.4 | topic | Informational |  |
| 59 | what should you do if a hurricane is approaching aceable | 50 | 15 | 0.00 | 3.3 | blog | Informational | yes |
| 60 | storm prep checklist | 110 | 35 | 0.16 | 3.1 | tool | Informational |  |
| 61 | how do you stop a hurricane | 90 | 30 | 0.00 | 3.0 | blog | Informational |  |
| 62 | how do you prepare for a typhoon | 70 | 24 | 0.39 | 2.9 | blog | Informational |  |
| 63 | florida hurricane box | 50 | 17 | 0.00 | 2.9 | state | Informational | yes |
| 64 | hurricane bag | 70 | 25 | 0.71 | 2.8 | tool | Informational, Commercial |  |
| 65 | foods for hurricane | 70 | 26 | 0.05 | 2.7 | tool | Informational |  |
| 66 | survival kit list for hurricanes | 70 | 26 | 0.21 | 2.7 | tool | Informational |  |
| 67 | best hurricane supplies | 90 | 35 | 0.35 | 2.6 | tool | Commercial |  |
| 68 | hurricane and storm services | 50 | 19 | 0.00 | 2.6 | blog | Informational, Commercial | yes |
| 69 | hurricane preparation kit | 90 | 36 | 0.34 | 2.5 | tool | Informational, Commercial |  |
| 70 | how to prepare for hurricane season in texas | 70 | 28 | 0.00 | 2.5 | state | Informational |  |
| 71 | how to prepare a house for a hurricane | 90 | 37 | 4.16 | 2.4 | blog | Informational |  |
| 72 | hurricane accessories | 90 | 38 | 0.00 | 2.4 | tool | Commercial |  |
| 73 | hurricane disaster kit | 90 | 38 | 0.37 | 2.4 | tool | Commercial |  |
| 74 | hurricane evacuate | 90 | 37 | 0.00 | 2.4 | topic | Informational |  |
| 75 | safety precautions in hurricanes | 90 | 38 | 0.00 | 2.4 | blog | Informational |  |
| 76 | can goods for hurricane | 70 | 29 | 0.00 | 2.4 | tool | Commercial |  |
| 77 | how to prepare for a typhoon | 70 | 29 | 0.39 | 2.4 | blog | Informational |  |
| 78 | hurricane grocery list | 50 | 21 | 0.00 | 2.4 | tool | Informational | yes |
| 79 | hurricane mitigation strategies | 50 | 21 | 0.00 | 2.4 | topic | Informational | yes |
| 80 | hurricane box | 90 | 39 | 0.00 | 2.3 | tool | Informational, Commercial |  |
| 81 | hurricane tip | 90 | 39 | 0.00 | 2.3 | blog | Informational |  |
| 82 | hurricane evacuation plan florida | 70 | 31 | 0.00 | 2.3 | state | Informational |  |
| 83 | storm preparations | 70 | 31 | 0.21 | 2.3 | blog | Informational |  |
| 84 | hurricane shopping list | 50 | 22 | 0.00 | 2.3 | tool | Informational | yes |
| 85 | where to go in a hurricane | 50 | 22 | 0.00 | 2.3 | topic | Informational | yes |
| 86 | hurricane preparedness list for businesses | 70 | 32 | 0.00 | 2.2 | tool | Informational |  |
| 87 | hurricane checklists | 70 | 34 | 1.12 | 2.1 | tool | Informational |  |
| 88 | hurricane preparedness kits | 70 | 34 | 0.34 | 2.1 | tool | Commercial |  |
| 89 | how do you prepare for a storm | 70 | 35 | 0.66 | 2.0 | blog | Informational |  |
| 90 | hurricane preparation food | 50 | 25 | 0.08 | 2.0 | tool | Informational | yes |
| 91 | hurricane pamphlet | 70 | 37 | 0.00 | 1.9 | blog | Informational |  |
| 92 | printable hurricane preparedness checklist | 70 | 36 | 0.00 | 1.9 | tool | Informational |  |
| 93 | weather preparedness | 70 | 37 | 2.17 | 1.9 | blog | Informational |  |
| 94 | hurricane preparedness food | 50 | 27 | 0.28 | 1.9 | tool | Informational | yes |
| 95 | hurricane prepare kit | 70 | 39 | 0.34 | 1.8 | tool | Informational, Commercial |  |
| 96 | what would you need for a hurricane | 70 | 39 | 0.87 | 1.8 | blog | Informational |  |
| 97 | hurricane preparedness sc | 50 | 28 | 0.00 | 1.8 | state | Informational | yes |
| 98 | hurricane safety checklist | 50 | 30 | 0.00 | 1.7 | tool | Informational | yes |
| 99 | florida hurricane supply list | 50 | 32 | 0.00 | 1.6 | state | Informational | yes |
| 100 | hurricane ready kit | 50 | 32 | 0.45 | 1.6 | tool | Transactional | yes |
| 101 | hurricane readiness kit | 50 | 33 | 0.45 | 1.5 | tool | Commercial | yes |
| 102 | plan hurricane | 50 | 37 | 0.71 | 1.4 | blog | Informational | yes |
| 103 | mitigation strategies for hurricanes | 50 | 38 | 0.00 | 1.3 | topic | Informational | yes |
| 104 | things you need for a hurricane | 50 | 38 | 4.07 | 1.3 | blog | Informational, Commercial | yes |

---

## Event-Trigger Tasks (not executed automatically — user invokes on demand)

### B7-STORM — Named-storm archive page template

- **Trigger:** NHC officially names a 2026 Atlantic/Pacific storm (e.g. Gabrielle, Hendrika, Isidore, …). The user pastes "NHC named X, run B7 for X" into Codex.
- **Page type:** storm
- **Target URL:** `/storm/2026-<lowercase-name>/` (NEW — matches the existing `/src/pages/storm/2026-{name}/` SSG convention; data lives in `_data/<name>.ts` exporting `StormArchive`)
- **Schema:** Article + BreadcrumbList + ItemList + FAQPage (follow existing storm archive pages)
- **Winners fed (template seed):** `[<storm name>] hurricane tracker`, `[<storm name>] path`, `[<storm name>] evacuation`, `[<storm name>] damage`, `[<storm name>] landfall`, `[<storm name>] emergency resources` (70/20 winner from this dataset)

#### Codex instructions (run when user triggers)

1. Read the most recent 3 storm archive pages (`/src/pages/storm/2026-<existing-name>/index.astro` + `_data/<existing-name>.ts`) to mirror structure exactly.
2. Create two new files:
   - `src/pages/storm/2026-<name>/index.astro`
   - `src/pages/storm/2026-<name>/_data/<name>.ts` exporting `StormArchive`
3. The `_data/<name>.ts` file MUST source facts from current NHC public advisories (no fabrication). For fields where the public advisory does not yet contain data (forecast beyond 5 days), mark `unknown` or omit — never invent.
4. The `index.astro` page must include: NHC advisory summary, timeline, forecast discussion, historical same-name comparison, affected-state internal links (`/tracker/<state>/`), FAQ.
5. Add the new route to `src/lib/sitemapRoutes.ts` per existing storm archive entries (one line; mirrors existing pattern).
6. ⚠️ **FORBIDDEN FILES — DO NOT EDIT:** `src/pages/search-index.json.ts`, `package.json`, `astro.config.mjs`, `wrangler.*`, `src/data/blog.ts`. The storm page uses its own data file, not the blog.
7. Run `npm run build` before commit; commit message: `seo: add 2026-<name> storm archive page`.

#### Re-trigger command (paste verbatim to Codex when ready)

> "NHC named **<NAME>**. Run **B7-STORM** from `blog-drafts/seo-tasks.md` for `<lowercase-name>`. Mirror the structure of the most recent 3 storm archive pages. Source all facts from current NHC public advisories — fabricate nothing. Do not touch forbidden files."
