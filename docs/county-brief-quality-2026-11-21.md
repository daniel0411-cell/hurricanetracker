# County resources and independently verifiable briefs — November 21, 2026

## Version and scope

Fresh origin default-branch discovery and fetch: origin/main and detached HEAD both aab4c6b99d5e0195ce26c38ba177e474a3934080, 0 ahead / 0 behind, no upstream. Existing untracked audit notes preserved. User accepted the specific county-tool and brief improvements. This batch changes existing pages and introduces a presentation helper and regression checks; no routes, sitemap, dependencies, account settings or advertising publisher were changed. No fresh production deployment was performed for this batch.

## Implemented

- County tool's visible title and metadata describe point alerts and county planning resources. Replace generic Google search with a direct on-page directory of six named official authorities. Readers explicitly choose the applicable county/parish; no county is inferred from a ZIP centroid.
- Each authority has a task-specific explanation and scope limitation. Street-address zone, current order, shelter opening and assistance confirmation remain separate checks. Existing abort, freshness and request-order safeguards retained.
- Brief shows separate generation, NWS retrieval, NHC retrieval and available alert issue/effective/expiry or storm record times, all UTC. Missing times remain unavailable. Retrieval is never labeled advisory issue time.
- Five-item cap now states total, shown and omitted counts with complete official source links. Validate item URL scheme, credentials and exact official hostname; escape feed text. Printed source URLs remain readable.
- Input changes invalidate prior results; late responses cannot overwrite a newer request. Explicit stale-cache headers, malformed feeds and failures do not produce an all-clear. Existing feed validators retained.
- Explain paper handoff, state geographic scope and how a five-of-eight result differs from a complete warning list. Fix styles for dynamically injected content and print controls; use one column for long source records.

## Public-source review (IAB, 2026-11-21)

Search engine used for discovery, followed by direct reading of official pages below. No visible revision date recorded; observation date is not a map edition or operational-status timestamp. No household address submitted; linked maps, PDFs, eligibility forms and shelter placements were not executed or independently verified.

- Miami-Dade: https://www.miamidade.gov/initiative/weather-ready/hurricanes/home.page — read hub entries for Storm Surge Planning Zone, Emergency Evacuations and EEAP. Hub links to https://experience.arcgis.com/experience/2ec553211f1e499f859618eee356f879 ; this review verifies the official link, not an address result.
- Broward: https://www.broward.org/Hurricane/ — official dashboard loaded, unlike earlier 403 observations. Read evacuation, special-needs, registration and shelter-status entries. Evacuations link observed: https://www.broward.org/hurricane/EvacuationInformation . No current status is copied into evergreen content.
- Lee: old https://www.leegov.com/publicsafety/emergencymanagement redirected to https://www.leefl.gov/919/Hurricane-Preparation-Guide . Read zone/shelter/special-needs entries. Two zone links observed (rit.leegov.com and map.leefl.gov/evacuationzones); retain the maintained county guide rather than choosing between untested map clients.
- Harris: https://www.readyharris.org/ — read evacuation ZIP-zone map, STEAR, traffic and flood observation entries. Those products answer distinct questions; no live route or transport was confirmed.
- Orleans: https://ready.nola.gov/plan/hurricane/#cae — read mandatory evacuation and city-assisted evacuation conditions. Do not replicate standing hub/pickup timing as a current service activation.
- New Hanover: https://www.nhcgov.com/203/Evacuation-Shelters — read explanation of event-specific openings and county announcements, plus Know Your Zone entry. Do not hardcode the observed current shelter status.

## Continued exploration: next useful content work

1. **Tool selection guide**: tools/index.astro calls the household recorder “Local Risk and Action Plan” while its actual page title is “State Hurricane Alerts and Household Action Plan”; dashboard directory description says state alerts despite point-based screening. Align labels and add a compact task/scope/output choice matrix for point screening, state overview, household record, saved locations and printed handoff. This is the strongest next navigation improvement; avoid another overlapping new page.
2. **Editorial-history clarity**: blog/[slug].astro places the cover and expanded `Correction check` paragraph before the article. Distinguish routine revisions from material factual corrections; keep safety corrections visible. Pilot school, contractor and business articles. Do not hide genuine corrections or claim that the source-check disclosure is absent (it already exists).
3. **Concrete reader output**: add a small worked example to those three articles showing an actual pickup decision record, bid comparison or business reopening dependency. Use fictional scenarios explicitly labeled illustrative, with blank private fields and authoritative sources. Avoid padding all articles with the same checklist.
4. **Measure rather than assume**: compare GSC query/page CTR by similar position and country, including affected pages after recrawl. This turn did not access fresh GSC/Bing data or establish an AdSense rejection cause. No article count or these fixes guarantees approval.

## Additional source inventory

The current production-source BlogPost array contains 46 posts: 31 have a review object and 40 have sourceCheck. This metadata inventory is not proof that the remaining six are inaccurate or that the 40 are fully verified. The six requiring scoped source-review triage are:

- how-el-nino-affects-hurricanes
- 2025-atlantic-hurricane-season-outlook (archival article: retain historical dating)
- how-to-prepare-your-home-for-a-hurricane
- hurricane-documents-insurance-checklist
- how-far-is-a-hurricane-from-me
- hurricane-vs-typhoon-vs-cyclone

Prioritize the documents/insurance and distance articles for the consequences of misunderstanding, then home preparation and climate/terminology. Read primary sources and substantively check the claims before adding metadata; do not bulk stamp dates. School and contractor already contain the recently added task tables, so preserve those improvements rather than propose them again. Small-business content has 12 sections and no section table; check whether its existing printable record already solves a proposed exercise before adding another.

## Verification

`node scripts/verify-brief-presentation.mjs` passed: zero/one/seven records, cap counts, missing/invalid/offset timestamps, official-domain allowlist and escaping, empty/stale/malformed/failed feeds, input invalidation and late-response race. Build, type check and browser checks recorded below after completion.

Completed verification:

- `npm run build` passed (19 SVG OG cards and 46 blog OG images verified); existing duplicate public/route robots.txt warning remains.
- `npm run check`: 0 errors, 0 warnings, 4 existing hints across 235 files.
- Local IAB rendering at port 4337 confirmed all six official resource cards and the accurate page title. Brief generated successfully for the generic test ZIP 33139: displayed five of 23 state alerts and 18 omitted, separate NWS/NHC UTC retrieval times, affected areas, alert timing and original source URLs. This is a local UI/API observation, not a fresh independent verification of all weather records.
- Actual native print preview, mobile viewport and paper pagination were not exercised. Print rules and source-text retention were reviewed in source; do not describe those as a rendered print pass.
- New regression script passed; `git diff --check` passed. No commit, push or deployment executed for this batch. Earlier production receipt in content-next-value-audit remains the previous release, not this working tree.
