# Content quality: evidence and reader tasks, round 2

## Scope and version

- Local baseline: `c0c3c4b5171f504bcaeb0f8317e103517f93c64c`, main tracking origin/main, freshly fetched and equal (0 ahead / 0 behind) at the start of this round.
- Ten existing pages revised; no articles, routes, dependencies or sitemap entries added.
- This round is local only: not committed, pushed or deployed. Production was not audited in this round.
- Existing ReminderSignup and push/send edits, untracked drafts and other work are outside this round.

## Editorial changes

| Existing page | Evidence and reader task |
| --- | --- |
| Pet safety blog | Ready.gov pets and DOJ ADA FAQ. Separate ordinary pets from service animals; confirm destination and transport. Remove unsupported reunion and rescue claims. |
| School/daycare blog | DOJ FAQ, especially hotel access and documentation. Household backup, school authorization and caregiver availability require separate confirmation. |
| 2026 below-normal outlook blog | Archived CPC August 6, 2026 outlook. Separate 75% seasonal-category probability from 70% range probabilities; do not add nested storm-count ranges or double-count the two storms already included. |
| Recovery blog | Ready.gov and FEMA after-applying guidance. Keep evidence, contacts and pending tasks; a claim acknowledgement does not decide coverage, building safety or repair permission. |
| Landfall forecast topic | Ian advisory 32, September 30, 2022, 1500 UTC, plus NHC wind-arrival definitions. Center landfall, wind onset and local departure instructions are different clocks. |
| Tropical storm vs hurricane topic | Ian advisories 28 and 32. Advisory 28 lists a 70 mph tropical storm while issuing a hurricane warning; present classification and expected warning-area conditions answer different questions. |
| Hurricane categories topic | Irma forecast/advisory 26, September 5, 2017, 1500 UTC. September 9 outlook row: sustained 130 kt is Category 4; gust 160 kt does not set the category. Forecast is not observed outcome. |
| After-hurricane topic | Ready.gov. Distinguish area reentry, route, building and utility checks; reentry does not clear a wet electrical panel. |
| Orlando city | Orange County shelter guidance and May 9, 2024 Special Needs Program article. Registration/request does not confirm assessment, care destination or pickup. |
| Fort Myers city | City April 30, 2026 debris-removal ROE notice. Permission for work crews to enter private roads does not establish resident reentry, road/building safety or collection scheduling. |

Historical products are labeled as historical. Illustrative household exercises are labeled as illustrative; no current address, opening, transport, insurance coverage or medical assessment is claimed verified. Existing background outside the source checks is identified as not rechecked.

## Source record and limitations

Original responses and extracted text are saved under `scratch/content-quality-round2-2026-11-06/sources/`.

- CPC stable archive: https://www.cpc.ncep.noaa.gov/products/outlooks/hurricane2026/August/hurricane.shtml
- NHC Ian 28: https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.028.shtml
- NHC Ian 32: https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.032.shtml
- NHC Irma 26: https://www.nhc.noaa.gov/archive/2017/al11/al112017.fstadv.026.shtml
- NHC scale: https://www.nhc.noaa.gov/aboutsshws.php
- NHC arrival definitions: https://www.nhc.noaa.gov/aboutnhcgraphics.shtml#TOA
- DOJ: https://www.ada.gov/resources/service-animals-faqs/
- Ready.gov: https://www.ready.gov/pets and https://www.ready.gov/hurricanes
- FEMA: https://www.fema.gov/assistance/individual/after-applying
- Orange County: https://www.ocfl.net/EmergencySafety/shelters.aspx
- Orange County historical program article: https://newsroom.ocfl.net/2024/05/extra-special-preparation-required-for-extra-special-community-during-emergency-situations/
- Fort Myers notice: https://fortmyers.gov/CivicAlerts.aspx?AID=1841

Lee County emergency, evacuation and shelter candidate links redirected from leegov.com to leefl.gov and returned HTTP 403. County rules/current status were not treated as verified; the Fort Myers source-check note discloses this. The city notice and linked ROE explanation returned 200; no form was completed. A NOAA press-release candidate returned 403; the CPC archived forecast was used instead. The CPC archive index initially timed out and succeeded on retry. A weather.gov Ian candidate returned 404 and was not cited.

## Verification

- `npm run build`: passed, including city-data verification and 46 OG checks.
- `npm run check`: 0 errors, 0 warnings, 6 hints, 249 files.
- Content audit against the built local Worker: 112/112 required pages, 46 article records, passed.
- Internal-link audit: passed, 64 static HTML files.
- Media audit: passed, 46 blog items and 62 static sitemap HTML files.
- Browser verification: all ten revised pages at 1440px and 360px (20 page checks); HTTP 200, one H1, canonical, revision date, expected evidence text, image decoding, FAQ interaction and no horizontal overflow.
- Screenshots and machine-readable browser results: `scratch/content-quality-round2-2026-11-06/browser/`.
- `git diff --check`: passed.

These checks do not predict AdSense approval or establish current local emergency conditions.
