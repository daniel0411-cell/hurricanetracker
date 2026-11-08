# November content update: 2026-11-08

Baseline: main and freshly fetched origin/main at c0c3c4b5171f504bcaeb0f8317e103517f93c64c; clean workspace before edits.

## Verified sources

Browser observations on November 8, 2026:

- https://www.nhc.noaa.gov/ displayed no active Atlantic tropical cyclones. Its Atlantic outlook was issued at 7 p.m. EST November 7, equivalent to 00:00 UTC November 8.
- https://www.nhc.noaa.gov/text/refresh/MIATWOAT+shtml/072321_MIATWOAT.shtml described non-tropical AL94 south-southeast of Bermuda, near-zero formation chances through 48 hours and seven days, expected frontal merger, and a reference to High Seas Forecasts including Gale Warnings.
- Verified the matching archive through its Earlier/Later navigation: https://www.nhc.noaa.gov/archive/xgtwo/gtwo_archive.php?basin=atlc&fdays=7&current_issuance=202611080000 . The page may normalize its address, but its Later link and selected text identify this issuance.
- https://www.nhc.noaa.gov/climo/ was verified during the preceding research: official Atlantic season June 1-November 30; historical peak September 10; most activity mid-August to mid-October; activity can occur outside official dates.

## Scope

- Update the existing late-season blog guide, replacing its October outlook example with the dated November AL94 example and an archive citation.
- Add November timing guidance, official climatology sources, and matching FAQs.
- Add evergreen November context to the season hub. Keep live feed behavior intact and keep the dated example in the guide rather than presenting static probabilities as current tracker data.
- No new indexable route, sitemap change, season-final total, or Pacific system counted as Atlantic activity.
- The user subsequently authorized committing, pushing, and deploying this update. Release through Wrangler directly, without automatic search-engine submissions.

## Validation

- `npm run build`: passed, including city-data verification (33 cities across nine states) and OG generation.
- `npm run check`: passed; 225 files, zero errors, zero warnings, four existing hints in unrelated files.
- `git diff --check`: passed. Generated assets left no tracked changes.
