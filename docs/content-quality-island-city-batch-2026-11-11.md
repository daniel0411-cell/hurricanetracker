# Island and coastal city content revision

## Baseline and scope

2026-11-11: main tracks origin/main; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git; queried remote default is main. Fresh fetch and commit-graph comparison confirmed both at 8b486f0c4efad4f392b045dedfd91cc46f4ed84f (0/0). Read AGENTS.md. Existing ReminderSignup/push-send edits and untracked material are outside this release. This is a local content review, not new analytics or an AdSense approval prediction.

Six existing city records revised, with four specific sections including an explicitly fictional exercise and answer, five matching FAQs, a scoped source-check record and local revision date. Existing renderer, routes, sitemap, dependencies and configuration preserved.

| City | Reader task |
| --- | --- |
| Key West | Separate five evacuation zones from county reentry regions and the distinct city sticker; confirm receiving and reviewed care arrangements. |
| Outer Banks | Identify county and visitor/resident scope, road/ferry legs and accommodation acceptance; check Currituck's notification account transition. |
| Lake Charles | Apply the instruction for the actual parish; separate city-service subscriptions from emergency messages and define receiving care requirements. |
| Brownsville | Distinguish the 911 contact directory from maps; separate STEAR needs information from confirmed assistance. |
| Clearwater | Keep evacuation and FEMA flood zones distinct; follow up medical/transport assignment and independently verify barrier-island return credentials. |
| Morehead City | Identify different town/county assistance entry points without inventing form eligibility; connect alerts, shelter opening and travel. |

## Sources actually read

Substantive HTML was downloaded and parsed. Read dates are not official publication dates. Retained broad hazard background was not completely reverified. No live order, household address lookup, road, vehicle, application, shelter opening, care placement or permission was tested.

- Monroe: https://www.monroecounty-fl.gov/897/Evacuation-Information ; https://www.monroecounty-fl.gov/148/Special-Needs-Registry ; https://www.monroecounty-fl.gov/916/Resident-Reentry-Vehicle-Windshield-Stic ; https://www.monroecounty-fl.gov/992/Shelters . Checked departure versus return systems and city sticker, reviewed registry and conditional receiving descriptions. Did not adopt the reentry page's incorrect season-end wording, specific facilities as open, or category as an automatic household instruction. No visible article revision dates.
- NC Emergency Management: https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone . Read participating counties, varying local zone sets, orders, ReadyNC/DriveNC and staged return FAQ. No address/map interaction performed.
- Currituck: https://currituckcountync.gov/emergency-management/ . Read explicit transition notice requiring new accounts for existing alert users. No article revision date or actual delivery verified; this is not a claim about Dare/Hyde systems.
- Lake Charles: https://www.cityoflakecharles.com/ . Read separate emergency/website/city-service alert navigation. Linked /346/Emergency-and-Other-Alerts returned only a JavaScript portal shell. No portal contents or parish procedures claimed verified. Calcasieu preparedness entry returned HTTP 403; retained as the official contact entry with this limitation disclosed.
- Cameron: https://www.cameroncountytx.gov/emergency-management/ and https://www.cameroncounty911.com/emergency-resources/ . Read actual directory scope and county registry/map entries. County HTML mixes a 2026 mitigation notice, older links, inconsistent season language and a fixed cutoff; did not adopt those as current rules. Explained registry no-service guarantee despite 'reserve your ride' wording. No linked forms, maps or videos reviewed. Brownsville city EM returned 403.
- Pinellas: https://pinellas.gov/emergency-information/ (displayed September 25, 2026 update), https://pinellas.gov/special-needs/ and https://www.pinellassheriff.gov/EmergencyAccessPermit . Read zone distinction, follow-up/response and shelter-type process, barrier-island permit eligibility and issuance/entry separation. Did not use old recovery banners as current alerts. No article revision dates identified on latter two.
- Morehead: https://www.moreheadcitync.gov/275/Resources and https://www.carteretcountync.gov/138/Emergency-Services . Read companion/special-needs form labels and county medically fragile registry, CodeRED and shelter entries. Linked PDFs and signup systems not reviewed; no claim about acceptance or equivalent eligibility. Town's several hurricane-preparation labels share the same Ready.gov target and are not counted as independent sources. No visible article revision dates.

Other failures: Dare and Hyde county entries returned 403. NCDOT ferry HTML exposed limited navigation/notification entry, insufficient for service verification; not used as operating evidence. Guessed Pinellas permit paths returned 404; discovered and read Sheriff's actual linked page. Source failures are not treated as an all-clear.

## Validation and release

Build passed; Astro check returned 0 errors, 0 warnings and six existing hints. Metadata, schema, static internal-link and media audits passed. All 55 local dates agree across sitemap, schema and resolver. Built local Worker content regression passed 112/112 routes with 46 article source/asset records and no skipped pages.

Playwright passed all six pages at 1440px and 360px: HTTP 200, single H1, canonical, actual source scope/body text, Article revision date, five FAQ answers matching JSON-LD, expandable FAQ, official resource targets, no horizontal overflow or page errors. All 29 unique internal destinations returned 200. Visually inspected the Key West mobile and Clearwater desktop exercise screenshots; text wraps without clipping. Browser evidence is saved under scratch/island-city-2026-11-11/. These structural checks are not an AdSense quality ruling.

Release will use only committed content/doc files via a clean archive, excluding the unrelated dirty code. Actual deployment metadata and production checks will be recorded separately under docs/deployments/. No indexing submission is included.

Next inspect the remaining South Florida city sources and actual reader gaps; do not transplant Miami-Dade services into Broward/Palm Beach. Historical archives require separate primary-document checks. No new illustrations needed for these text-based jurisdiction tasks.
