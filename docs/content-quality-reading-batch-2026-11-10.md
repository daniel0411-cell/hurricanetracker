# Six-article reading exercises: November 10, 2026

## Baseline and scope

- The owner requested another six to eight content improvements while away, continuing the authorized validation and deployment workflow.
- Fresh fetch and remote HEAD query confirmed `main` tracks `origin/main`, default branch `main`, both at `cbff9bf919c87084d81657bcfc764699617278f3`, 0 ahead / 0 behind. Initial working tree clean. Origin fetch/push: https://github.com/daniel0411-cell/hurricanetracker.git .
- Six existing article records changed in `src/data/blog.ts`. No route, shared layout, sitemap source, dependency or deployment configuration change. Original publications, references, source-check records and teaching figures retained exactly. Only the six substantive revisions receive November 10 modification/review dates.
- Browser research tools were unavailable. This is an editorial and arithmetic batch using existing source records, not six new external fact checks. Reviews explicitly state that sources were not newly read. No current storm, warning, model run, property, equipment or insurance determination is supplied.

## Changes and evidence

| Article | Specific improvement |
| --- | --- |
| `real-time-hurricane-tracking-2026` | Distinguishes retrieval, observation, issuance and validity. Fictional 12:07/11:40 UTC exercise has a 27-minute difference; no inferred outage or current weather. Adds basin/identifier/year handoff and preserves the dated November 8 AL94 example as historical context. |
| `hurricane-rapid-intensification` | Replaces raw-measurement wording with observed/analyzed estimates; requires the actual interval for historical subtraction. Fictional 90-to-100 kt change over 24 hours crosses a category boundary but does not meet RI. Retained Michael 90-to-125 kt interval does. Explains why neither hourly linear growth nor next-day growth follows. |
| `saffir-simpson-hurricane-wind-scale-explained` | Fictional 95/96 kt boundary exercise distinguishes classification from a damage multiplier. A downgrade does not cancel separate water or evacuation messages. Keeps real Irma and Michael timestamps and sustained-wind definitions. |
| `how-to-read-hurricane-spaghetti-models` | Fictional cycle arithmetic aligns 00 UTC +72 h with 12 UTC +60 h. No unlabeled historical point invented. Eight of ten displayed tracks does not establish an 80 percent landfall probability. Keeps Danny/Joaquin attribution and chart limitations. |
| `hurricane-storm-surge-forecasting` | Removes deterministic coast/speed comparisons and replaces gauge/map shortcuts with product-specific checks. Fictional 7 minus 4 feet requires the same datum/location and is not an indoor-depth forecast. Color changes are threshold changes, not measured three-foot rises. Preserves Hurricane X teaching map and legend. |
| `hurricane-flood-zone-map-fema-understanding` | Adds annual-probability explanation: about 26 percent in 30 years only under explicitly constant, independent 1-percent assumptions. Fictional BFE 12 minus floor 10 feet is a reference comparison, not a storm-depth or code determination. Adds structure/boundary clarification without pin manipulation or a parcel-level claim. |

Retained evidence and prior observation dates:

- November 6 wind scale, Michael best-track and Irma evidence: `content-quality-comparison-audit-2026-11-06.md`, plus the articles' scoped source checks. https://www.nhc.noaa.gov/aboutsshws.php ; https://www.nhc.noaa.gov/aboutgloss.shtml ; https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2025-092326.txt ; https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml . `src/lib/riDetection.ts` was read locally to check the retained site-signal description; no implementation changed.
- October 27 model teaching record: https://www.nhc.noaa.gov/modelsummary.shtml ; NWS Tampa Bay February 9, 2021 presentation, slide 7: https://www.weather.gov/media/tbw/workouts/2021feb09_ww_models.pdf#page=7 . Existing article disclosure remains the source-scope record. The new cycle arithmetic is fictional, not extracted from that chart.
- October 27 surge evidence in `editorial-quality-2026-10-27.md`: https://www.nhc.noaa.gov/surge/inundation/ . Original teaching-map publication date is not printed; observation date is not publication date.
- October 27 FEMA evidence in `map-reading-examples-2026-10-27.md`: January 2022 tutorial, https://www.fema.gov/sites/default/files/documents/how-to-read-flood-insurance-rate-map-tutorial.pdf . The probability calculation is explicitly conditional mathematics, not a newly retrieved FEMA property estimate.
- November 8 outlook evidence in `november-content-update-2026-11-08.md`: https://www.nhc.noaa.gov/archive/xgtwo/gtwo_archive.php?basin=atlc&fdays=7&current_issuance=202611080000 . No new current conditions inferred.

## Verification checkpoint

Source comparison confirms exactly six article changes and all other blog records identical to the baseline. Original references, source-check records, publication dates and figures are unchanged. Arithmetic for cycle alignment, 27-minute age and conditional 30-year probability was independently evaluated. Each article retains at least 800 body words; word counts are scope checks, not evidence of quality.

- `npm run build`: passed, including 33-city data verification and 46 article OG checks.
- `npm run check`: 0 errors, 0 warnings, four existing hints.
- Content-date consistency check passed for 55 local pages.
- Metadata/schema audits passed for 62 static and 127 dynamic pages/source groups; internal-link audit passed for 64 built HTML files; media audit passed for 46 blog records and 62 static pages.
- Built local Worker content audit: 112/112 required pages and 46 article source/asset records passed, without skipped pages.
- Focused rendered checks: six HTTP 200 articles, single H1, expected new sections, review disclosure, canonical, date, retained figures and parseable JSON-LD. Visible FAQ text matches FAQPage answers and counts (7/5/3/4/5/5). All 26 unique article-section internal destinations returned 200.
- `git diff --check`: passed.

No new browser screenshots or mobile visual review are claimed. Existing images and shared layout are unchanged. This is a pre-release checkpoint; actual production checks and release identifiers will be reported after deployment. Release metadata must identify the actual Worker version and commit; the Git branch alone does not prove production deployment. Structural tests do not establish factual verification of the entire site or AdSense approval.
