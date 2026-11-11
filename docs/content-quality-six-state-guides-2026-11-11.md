# Six standing state preparedness guides - November 11, 2026

## Baseline and scope

`main` tracks `origin/main`; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git . Fresh fetch and remote HEAD lookup before commit confirmed default branch main, local and remote both `45086201d807659fa6ba9b4719e9c95042165ee0`, 0 ahead / 0 behind. Content baseline is that commit plus this six-record revision. Existing ReminderSignup and push/send changes and untracked work are excluded from this release.

Only six state records in `src/data/localPreparednessPages.ts` changed: North Carolina, South Carolina, Alabama, Mississippi, New Jersey and Massachusetts. Each uses the established planningRecord rendering with six distinct local tasks and a clearly fictional exercise. Existing historical arrays are preserved, not reverified; the established rendering displays the planning record in place of historical cards and the generic supply list. No route, template, schema factory, dependency, sitemap source or deployment configuration changed.

## Editorial changes and sources actually read

All sources below returned substantive HTML that was parsed and read on November 11. No visible article revision dates were established. These are source observation dates, not publication dates or confirmation of current emergency operations.

| Guide | Local task and source scope |
| --- | --- |
| North Carolina | Keep county and address with the actual zone; resolve unavailable maps with local emergency management; connect transport and receiving acceptance; separate reentry permission from rental availability. Read NCEM's Know Your Zone FAQ, including differing county zone sets and emergency instructions for unzoned locations. https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone |
| South Carolina | Follow official signs and officers over GPS; distinguish reversal setup and closed entry points from an operating lane; connect the controlled route with an accepted destination and local return instructions. Read SCEMD Know Your Zone and Hurricane Traffic Management HTML. https://www.scemd.org/prepare/know-your-zone/ and https://scemd.org/prepare/know-your-zone/hurricane-traffic-management/ |
| Alabama | Keep Baldwin County planning scenarios separate from current orders; distinguish local BRATS shelter transport, staged out-of-county transport and separately arranged medical transport. Do not apply county services statewide. Read Baldwin evacuation zones and transportation pages. https://baldwincountyal.gov/services/ema/evacuation-information/evacuation-zones and https://baldwincountyal.gov/services/ema/shelters/transportation-to-shelters |
| Mississippi | Replace a 404 hurricane URL; separate county evacuation maps, surge scenarios, county contact and actual shelter opening. Read MEMA hurricane, county contact and shelters HTML. https://www.msema.org/prepare/types-disasters/hurricanes , https://www.msema.org/get-assistance/county-emergency-management-contacts and https://www.msema.org/get-assistance/disaster-resources/shelters-and-safe-rooms |
| New Jersey | Connect municipality and county alerts with the departure and receiving locations; an inland host can have separate flood hazards. Use current county contact entries rather than old social-platform promises. Read NJOEM hurricanes and county coordinator HTML. https://ready.nj.gov/plan-prepare/hurricanes.shtml and https://ready.nj.gov/about-us/county-coordinators.shtml |
| Massachusetts | Correct old FAQ implying no statewide letter scheme: MEMA lists A/B and C in Boston/Cambridge, distinct from categories and insurance maps. Connect the actual local instruction with island transport, care continuity and receiving acceptance; 211 information is not a booking. Read MEMA zones, hurricane safety and evacuation HTML. https://www.mass.gov/info-details/hurricane-evacuation-zones , https://www.mass.gov/info-details/hurricane-safety-tips and https://www.mass.gov/info-details/safety-tips-for-evacuations |

No address lookup, map interaction, linked PDF, present order, road, ferry, flight, shelter opening, assistance activation, pickup, care placement or accommodation was confirmed. Mississippi shelter status was not adopted as a current operational assertion. Alabama's detailed activation/fee/medical instructions were not generalized. Massachusetts' older warning timing, pandemic instructions and broad water-treatment wording were not adopted. New Jersey's older social-platform and utility/structural DIY advice was not adopted.

Research failures were not treated as source verification: the Massachusetts candidate `/info-details/know-your-zone` and Mississippi's old `/preparedness-2/hurricanes/` returned 404; the actual successful URLs above were discovered from official pages. A New York City candidate returned 403; two Virginia zone candidates returned empty bodies despite HTTP success. New York and Virginia were excluded from this batch. These editorial source failures do not establish the current health of those states' emergency services.

## Validation checkpoint

- Build passed; Astro check: 0 errors, 0 warnings, six existing hints.
- Metadata, schema, static-link and media audits passed. Content-date check: 55 local pages agree across sitemap, schema and metadata.
- Existing Worker content regression passed 112/112 required routes and 46 article source/asset records. That subset excludes these standing state guides, so they were checked separately.
- Focused Playwright verification: six actual state routes at 1440px and 360px, all 200, one H1, canonical host/slash, new source scope, date, six planning steps and fictional exercise present. FAQ and HowTo schema matched the data. FAQ interaction worked, no horizontal overflow or browser script errors; 12 internal destinations returned 200.
- Representative North Carolina desktop and Massachusetts mobile screenshots visually inspected; text wraps without overlap. This is not a manual inspection of every pixel. Local script and proof under `scratch/six-state-guides-2026-11-11/`.
- Exactly six records changed; other records and all historical arrays preserved. `git diff --check` passed. Record body lengths roughly 970-1,035 words; length is not a quality score.

At this checkpoint the second batch awaits commit and clean-archive release under the owner's explicit authorization. No search submissions. These checks do not predict AdSense approval. No new illustration is required for the local planning exercises; actual interactive maps should remain with the responsible agencies.
