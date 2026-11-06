# Topic and city content revision — 2026-11-06

## Scope and baseline

- Local baseline: `main`, tracking `origin/main`; fresh fetch and remote default-branch lookup confirmed both at `3e11cf24ccbe842f74d9d98a191ea9b2373b9173` (0 ahead / 0 behind).
- This revision overlays the existing workspace. Existing reminder/push changes and unrelated untracked files are preserved.
- No new articles, routes, dependencies, sitemap changes, commits, pushes, or deployments. This is a local content revision, not a production-version audit.

## Reader tasks delivered

1. `/hurricane-tracker/live-tracker/`: distinguish an empty current-storm list from a development outlook and a failed check; separate retrieval, issuance, and valid times using a frozen official example.
2. `/hurricane-tracker/path/`: transcribe Irma Discussion 26's INIT, 24H, and 36H rows; identify the actual valid date/time instead of adding the printed horizon to public issuance.
3. `/hurricane-tracker/radar/`: inspect Michael's historical reflectivity and radial-velocity panels, their different units, and the limits of a cursor value. Full image and two lossless detail crops are provided.
4. Charleston: keep FEMA flood zones separate from county evacuation areas; verify an address using official resources rather than assigning an evacuation area from overlapping place names.
5. Wilmington: separate a river gauge reading from a road-opening decision and a shelter planning list from an actual opening announcement.
6. Existing live-tools blog: household roles, confirmation states, update log, and handoff worksheet. The topic teaches product reading; the blog teaches household coordination.
7. Removed exposed search-planning wording from the affected topics, Port Charlotte, and tools directory. Central editorial dates reflect actual revisions.

## Official evidence and limits

Sources accessed November 6, 2026. Access dates do not establish publication dates or certify current emergency conditions.

- Irma: https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml — September 5, 2017, 1500 UTC. INIT: 16.8N 58.4W, 155 kt; 24H: September 6, 1200Z, 18.1N 63.0W, 150 kt; 36H: September 7, 0000Z, 19.1N 65.9W, 145 kt. The printed 24H row is 21 hours after public issuance. These are historical official forecasts, not observed outcomes or individual model runs.
- Michael: https://www.weather.gov/tae/HurricaneMichael2018 — Figure 8. Source caption identifies KEOX, while the image headers identify KEVX. The discrepancy remains explicitly unresolved. Left panel prints `2018/10/10 16:46:41`; right header is clipped. No missing time digits or absent timezone are invented. NOAA/NWS original image remains linked and unchanged.
- Radar definitions: https://forecast.weather.gov/glossary.php?word=reflectivity and https://forecast.weather.gov/glossary.php?word=radial%20velocity . DBZ and KTS measure different quantities; radial velocity is not surface sustained wind.
- NHC saved example: https://www.nhc.noaa.gov/CurrentStorms.json and https://www.nhc.noaa.gov/text/MIATWOAT.shtml , retrieved about 09:44:22 UTC. JSON contains `activeStorms: []` without a source timestamp. TWO prints `100 AM EST Fri Nov 6 2026`, 20% within 48 hours and 30% within seven days for the western/central Atlantic area south of Bermuda. Its `060509` WMO header conflicts with the printed issuance time. The page discloses this and does not certify a precise issue time or current status.
- Charleston: https://www.charlestoncounty.gov/departments/emergency-management/hurricane.php ; https://www.charlestoncounty.gov/departments/emergency-management/files/Charleston-County-Evac-Zones.pdf?v=271 ; https://www.scemd.org/prepare/know-your-zone/ . PDF text and rendered map checked: A red, B yellow, C orange; notice says areas changed using updated NHC surge modeling. No visible publication date. Place descriptions overlap and do not establish a property's area. No current evacuation order, bridge restriction, or shelter opening was verified.
- Wilmington: https://www.weather.gov/ilm/HurricaneFlorence — September 14, 2018 landfall; Northeast Cape Fear near Burgaw reached 25.58 ft early September 19; Pender account describes about 300 ft of US 421 washed out near the New Hanover line. Gauge height is not inundation depth at a Wilmington property.
- Local follow-through: https://water.noaa.gov/gauges/BGWN7 (station identity checked, no live value claimed); https://www.drivenc.gov/ ; https://www.nhcgov.com/196/Emergency-Management/ ; https://www.nhcgov.com/203/Evacuation-Shelters ; https://www.nhcgov.com/213/Flooding . No current road reopening or reentry authorization is asserted.

Failed research candidates were replaced: `/jetstream/reflectivity` redirected to a NOAA 403; `/ama/radarfaq`, `/ilm/HurricaneFlorence2018`, and `water.noaa.gov/about` returned 404. The initial Michael link parser failed on an invalid relative URL despite HTTP 200; parsing was corrected and the source reread. These failures were not treated as verified evidence.

## Asset provenance

Derivation scripts, downloaded source files, PDF text/render, and browser screenshots remain in `scratch/content-quality-next-2026-11-06/`.

| Delivered file | Treatment | SHA-256 |
| --- | --- | --- |
| `public/examples/nhc/current-storms-20261106-094422Z.json` | Exact response bytes | `faea5cf4718512d456018c5081c2b274d7709e4f7f69e4d0bb2556d0d33360d7` |
| `public/examples/nhc/twoat-20261106-saved-094422Z.txt` | Complete PRE text; HTML parsed out, trailing blank lines trimmed | `040da52c255a01ef943c362b148766cc1d9d465c9166713d6257f7e35ada9ddd` |
| `public/images/guides/michael-2018-reflectivity-detail.png` | Lossless crop x0 y0 w490 h564 from existing 975×564 original | `f91c5a04803b1b4974295c31a92313453cb21deb3413e6fbd537dbe83cbc6b59` |
| `public/images/guides/michael-2018-velocity-detail.png` | Lossless crop x490 y0 w485 h564; no overlays or numerical edits | `70e9ae52cc35769af6f36a26da61d7407cbbeec7424cb2b58baa00c142310b67` |

Original radar file: `public/images/blog/external/nws-michael-2018-radar-eye.png`. Captions identify the historical example and crops, link the NWS source, and retain the limitations. Charleston PDF is research-only in scratch, not republished; SHA-256 `251175010e6c6869d74e5077ba76594c6507834e141aa243958e015ed061df86`.

## Verification

- Build passed after the final editorial-date correction.
- Astro check: 0 errors, 0 warnings, 6 existing hints.
- Content audit: 108/108 required pages and 46 article source/asset records. SSR checks use `CONTENT_AUDIT_BASE_URL=http://127.0.0.1:8840`; running without this variable cannot audit SSR output.
- Link audit: 64 HTML pages passed; media audit: 46 blog and 62 static records passed before the final date-only correction.
- Browser checks cover eight pages at 1440 px and 360 px: canonical, revision date, one H1, no horizontal overflow, required text, FAQ interaction, decoded radar images, and accessible saved source files. Results and screenshots: `scratch/content-quality-next-2026-11-06/browser/`.
- These checks support this revision's scope; they do not establish site-wide factual completeness or an AdSense approval probability.
