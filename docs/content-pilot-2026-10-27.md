# Task-focused content pilot

Baseline: `ff198a77e48b8f9ca1e87467b1cd1a58b7ae8621`, fetched October 27, 2026.
Scope: six existing blogs and three existing city tracker pages. No new routes,
redirects, canonical changes, sitemap changes, dependencies or publication.

## Page Ownership

| Existing page | Task owned by this page | Pilot change |
| --- | --- | --- |
| `/blog/what-hurricane-watch-warning-means/` | Understand a warning's meaning and timing | Worked timing example; distinguish an order from a warning; route readers to actions |
| `/blog/what-to-do-during-a-hurricane-warning/` | Coordinate immediate household action | Assign responsibilities; handle unavailable transport or destinations without delaying an order |
| `/blog/storm-surge-warning-vs-hurricane-warning/` | Distinguish water, wind and evacuation decisions | Coastal and inland scenarios; separate questions and sources |
| `/blog/hurricane-radar-vs-satellite/` | Interpret two observation products | Matching-time reading procedure, product legends, missing-data and interpretation limits |
| `/blog/how-to-read-the-hurricane-cone-of-uncertainty/` | Read the official track graphic | Historical NHC figure with label-to-legend walkthrough; remove cone-entry as an action trigger |
| `/blog/hurricane-family-communication-plan/` | Produce and rehearse a contact plan | Link the existing printable tool; practice a failed-contact scenario |
| `/hurricane-tracker/city/miami/` | Find Miami-Dade instructions for an address | County-linked planning-zone map, assistance-program entry and high-rise planning distinctions |
| `/hurricane-tracker/city/tampa/` | Use the correct Tampa Bay jurisdiction | Hillsborough HEAT lookup, map version, HART and shelter activation checks; distinguish Pinellas |
| `/hurricane-tracker/city/houston/` | Separate coastal surge and inland flooding decisions | City/county responsibility, NWS guidance and timestamped flood-gauge observations |

These roles are not a finding of search cannibalization. Query/page performance
has not been retrieved. No consolidation is justified by this pilot alone.

## Evidence Checked

Public pages retrieved October 27, 2026; the scope is the additions and the
specific cone-decision correction, not every pre-existing sentence on nine pages.

- NHC cone definition and example: https://www.nhc.noaa.gov/aboutcone.shtml
  - Describes historical-error circles, center-track uncertainty and annual radii.
  - Downloaded the example from https://www.nhc.noaa.gov/images/cone_5day_with_ww.png
    and visually checked its label: Helene advisory 9, September 25, 2024,
    10 AM CDT. Stored an unchanged local copy, not a current forecast.
- NWS wind/surge warning timing: https://www.weather.gov/safety/hurricane-ww
  - Used the watch/warning and evacuation instructions. The same page's older
    outlook wording is not used as evidence for current formation windows.
- NWS radar display: https://www.weather.gov/radarfaq
- NOAA channel/product directory: https://www.star.nesdis.noaa.gov/GOES/
- Household planning and official forms: https://www.ready.gov/plan
- Miami-Dade hurricane hub:
  https://www.miamidade.gov/initiative/weather-ready/hurricanes/home.page
  - Links the Storm Surge Planning Zone map and specialized evacuation-assistance
    program. Updated the old redirecting hub link to its current destination.
  - The linked ArcGIS app returned 200. This check did not submit an address or
    certify a zone result, eligibility, active order or transport availability.
- Hillsborough lookup:
  https://hcfl.gov/residents/public-safety/emergency-management/find-evacuation-information
  - HEAT address lookup, 2025/2026 maps, HART and shelter/alert links were visible.
- Houston OEM: https://houstonoem.org/ and https://houstonoem.org/prepare/
  - An exploratory `/pages/hurricanes` address returned 404 and is not used.
- Harris County Flood Warning System: https://www.harriscountyfws.org/
  - Returned 200 and identified the county flood-warning system. The additions
    do not claim live gauge values, safe roads or address-specific forecasts.

Blog modification dates change only for the six edited posts; publication dates
are preserved. City additions explicitly date the source-navigation check;
the shared city page's existing site-wide metadata date is unchanged. Per-city
metadata dates and placing a figure alongside its reading steps remain potential
template follow-ups, not changes made in this data-only pilot.

## Verification

Run `node scripts/content-pilot-regression.mjs` for source-data and image checks.
Set `CONTENT_AUDIT_BASE_URL` to a local built Worker to also verify the nine
rendered URLs, canonical URLs, structured data and new content. Run the existing
build, content, media and internal-link checks as well. These checks do not
replace editorial review or demonstrate ranking or AdSense outcomes.

Completed locally on October 27, 2026:

- `npm run build`: passed after the final content edits.
- `npm run check`: 0 errors, 0 warnings, 4 hints in unchanged files.
- `npm run links:audit`: passed, 64 HTML files.
- `npm run media:audit`: passed, 46 blog media records and 62 static pages.
- Pilot regression against the built local Worker: all nine rendered pages and
  the unchanged official PNG passed.
- `npm run content:audit` against the same Worker: 94/94 required pages and
  46 article source/asset records passed structural checks.
- Headless Chrome at 1440x1000 and 390x844: cone article and Miami city page
  had no horizontal overflow. Inspected screenshots of the historical figure
  and city page; the lazy-loaded figure decoded at 897x736 and displayed at
  604x496 (desktop) and 354x290 (mobile), preserving its aspect ratio.
- `git diff --check`: passed.

Initial loopback checks were blocked by the local sandbox and were rerun with
approved local access. Image verification waited for lazy loading to complete.
At the pilot verification stage, no production deployment version was checked:
these were local implementation results, not observations of the live release.
No commit, push, deploy or search engine submission had been performed then.

## Release Scope Review

The user subsequently authorized commit and deployment. The release contains
only `src/data/blog.ts`, `src/data/cities.ts`, the official historical PNG,
`scripts/content-pilot-regression.mjs` and this record. Original blog drafts,
keyword/task lists, seven checklist/research documents and the session file
remain untouched and excluded.

The pre-existing untracked `scripts/state-tools-regression.mjs` failed because
its import stub does not handle the current `./riDetection` dependency. It is
excluded without modification; this is not a production-code failure. Build,
type checks, links and media were rerun successfully. A fresh local Worker
passed the nine-page pilot regression after rebuilding the asset manifest.
Deployment will use the existing Worker configuration directly, with the Git
commit recorded in the version message, without the search-submission side
effects of `npm run deploy`.
