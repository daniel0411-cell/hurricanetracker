# Content quality comparison and Florida revision - 2026-11-10

## Version and assessment scope

Fresh fetch confirmed clean main tracking origin/main at daeaaec8f50c5d0d6802ff1a694dabd3b1adba9c, ahead/behind 0/0. Remote default main was confirmed with ls-remote. This is a local content assessment, not a fresh sitewide production audit. Compared the local preparedness changes since b1bf574 and inspected the current contractor article and its recorded FTC research. The contractor assessment is of its current usefulness and documented revision, not a new verification of every legal or insurance claim.

The sampled revisions improve quality in ways that matter to a household:

- Texas now distinguishes STEAR enrollment, annual maintenance and consent from an actual ride, and contraflow from an officially activated evacuation shoulder. The earlier guide mainly listed routes and general preparation.
- Wilmington adds the difference between planning shelter lists and event openings, access registration and transport, plus county-specific cat/dog co-location conditions.
- Virginia Beach distinguishes the Chesapeake Bay Bridge-Tunnel from the Monitor-Merrimac route and explains the medically friendly center's care limits. Those details prevent misleading conclusions from a generic route or shelter list.
- The contractor article's explicitly hypothetical $6,000/$8,000 comparison asks readers to match scope and exclusions. It does not represent a real quote, market rate, or proof of fraud. Its separate signing, payment and dispute records are useful additions to a generic warning list.

This supports a qualitative improvement in specificity, actionable decisions and bounded claims. It is not evidence of better rankings, AdSense approval, or completion of a sentence-level audit of all pages. Word count and FAQ count are not quality scores.

Remaining issues: some planning paragraphs are long and repeat confirmation language; several unreviewed state guides still rely on generic advice; historical material has not all been reverified. The current shared preparedness component replaces the history grid and common kit with a planning record when present, so retained history data is not necessarily visible. Its presence must not be counted as newly researched historical coverage. Continue focused revisions and later inspect reading density and historical evidence without automatically rewriting every page.

## Florida primary-source observations

Located official material through a background in-app browser Google search for `site.floridadisaster.org special needs shelter registry know your zone`. Read the following pages on November 10, 2026. No visible article publication/revision dates; sidebar weather dates are not article dates.

1. FDEM, Know Your Zone, Know Your Home: https://www.floridadisaster.org/knowyourzone/ . Full-address map entry, not all zones ordered together, building suitability and flood-prone/mobile/unsafe structures as separate concerns. Did not run an address lookup or inspect map data.
2. FDEM, Important Shelter Information: https://www.floridadisaster.org/planprepare/disability/evacuations-and-shelters/shelter-information/ . General versus special needs shelters, disability alone not establishing eligibility, medically stable needs within staffing/equipment capacity, advance county contact, last-resort role and alternate destinations.
3. FDEM registry entry: https://www.floridadisaster.org/snr/ linked to the Florida Department of Health portal https://snr.flhealthresponse.com/ . Read the public homepage only: periodic verification emails, county questions, no automatic shelter qualification and no guarantee of assistance. Did not create an account, choose a county, submit information or interpret the privacy statute independently.
4. FDEM, What to Expect in a Shelter: https://www.floridadisaster.org/planprepare/disability/evacuations-and-shelters/shelter-information/what-to-expect/ . Basic first aid versus daily assistance, shared conditions and limited privacy. No individual facility was evaluated.

The county directory URL was visibly linked by FDEM's shelter page; its individual county entries were not inspected. No current evacuation order, shelter opening, transport, clinical placement, home condition or route status was verified. Existing hazard/history background was retained, not reverified.

## Implemented scope

Only the Florida record in src/data/localPreparednessPages.ts changes site content. Added six distinct decisions and a hypothetical unresolved-arrangements exercise, precise source links, eligibility and building-safety FAQs, a scoped source note and a substantive revision date. Replaced the generic highway list and historical-ranking FAQ with decisions relevant to this guide. Shorter individual planning steps address reading density within the existing component. No shared template, routes, sitemap, dependencies or deployment configuration changed.

## Validation and release

Passed npm run build, metadata:audit (62 static / 127 dynamic source groups), schema:audit, links:audit (64 built HTML files), verify-content-dates (55 local records) and git diff --check. These broad source/build checks are supplemented by actual rendering of the changed SSR route, not treated as a factual audit.

Background browser review at localhost:4326 confirmed the new text, visible November 10 revision, production canonical, six visible/schema HowTo steps and seven visible/schema FAQs. Desktop screenshot at 1280px and a 390x844 mobile screenshot at the planning section showed readable wrapping; document widths 1265/375px respectively, with no horizontal overflow. Viewport reset after review. Local dev service stopped after QA. No business logic or type shape changed.

Release pending; no new production version is claimed here.
