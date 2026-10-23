# Blog publication review: 2026-10-23

Baseline: `28534123240f48a6ace5341f926660ff0146f767` plus the existing changes to two posts in `src/data/blog.ts`.

## Scope and conclusion

- `real-time-hurricane-tracking-2026`: replace the August seasonal claims with a late-season tracking guide; distinguish formation probability from coastal impacts and correct advisory timing and imagery descriptions.
- `hurricane-storm-surge-forecasting`: explain water reference levels, the NHC inundation map, warning timing, and jurisdiction-specific evacuation instructions; remove unsupported claims about site surge overlays.
- Suitable for publication after the build and rendered-page checks. Original publication dates and article URLs are retained; revision dates are October 23, 2026.
- The October 18 outlook is a historical example, explicitly labeled as such, with a direct archive link. It is not presented as current conditions.
- Added levee limitations and removed editorial references to the previous article's unsupported claims.
- Switched the surge article's image reference to its existing PNG version: the shared blog layout derives a missing JPG social image from the old reference, whereas the corresponding PNG social image exists.

## Verified primary sources

Observed through the in-app browser on October 23, 2026:

1. NHC Atlantic Tropical Weather Outlook, issued October 18, 2026 at 06:00 UTC (2 a.m. EDT): https://www.nhc.noaa.gov/archive/xgtwo/gtwo_archive.php?basin=atl&fdays=7&current_issuance=202610180600
   - Non-tropical storm-force low off the southeastern U.S.; near 0% formation chance over 48 hours and 30% over seven days; East Coast wind, coastal flooding, and surf hazards regardless of development.
2. NHC Potential Storm Surge Flooding Map explanation, marked updated May 25, 2016: https://www.nhc.noaa.gov/surge/inundation/
   - Above-ground depth, approximately 10% exceedance depiction, tides and terrain included; waves, rainfall flooding, river discharge, and levee failures excluded; special limitations inside leveed areas.
3. NHC product descriptions (no publication date observed): https://www.nhc.noaa.gov/aboutnhcprod.shtml
   - Regular public advisories every six hours; outlook probability windows cover 48 hours and seven days.
4. NWS hurricane watches and warnings guidance (no publication date observed): https://www.weather.gov/safety/hurricane-ww
   - Intermediate public advisories every three hours during coastal tropical storm or hurricane watches/warnings; hurricane warnings precede tropical-storm-force winds by 36 hours; storm surge warnings generally cover a 36-hour window.

Site radar capabilities were checked against `src/pages/radar.astro`. No new routes, dependencies, sitemap sources, deployment configuration, or AdSense publisher settings are changed.

## Validation

- `npm run build`: passed.
- `npm run check`: 0 errors, 0 warnings, 5 existing hints.
- `npm run links:audit`: passed across 64 static HTML files; the two SSR posts' explicit blog links were additionally checked against the production data array.
- Built Worker served locally with Wrangler: both article titles, original publication dates, October 23 revision dates, canonical URLs, loaded hero images, and the fixed historical archive link checked in the browser. Surge BlogPosting schema and PNG social image URL matched the revised content. No horizontal overflow observed at the browser's normal desktop viewport.
- Both hero and derived social image assets exist in the build. `git diff --check` passed.
