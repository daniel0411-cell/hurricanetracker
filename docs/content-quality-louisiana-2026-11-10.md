# Louisiana preparedness revision - 2026-11-10

## Baseline and scope

Fresh fetch and remote-default lookup confirmed clean main tracking origin/main at 27d7a5f214761e36d4f348159293d690f8ba5e7d, ahead/behind 0/0. Origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git and its default branch is main. This is a focused local content revision, not a sitewide or current-weather audit.

The previous Louisiana standing guide mainly described hazards and listed highways. Added six household planning steps, a clearly hypothetical wheelchair/treatment exercise, practical FAQs, official contact links and a substantive revision date. The steps distinguish parish medical-needs registration, suitable transport and receiving care, and separate 211 shelter information from 511 road information and LDH assistance. New Orleans city-specific services are not generalized statewide. The existing New Orleans guide and tracker remain unchanged. Retained history data is hidden by the existing planning-record template and is not new historical research.

## Primary sources

Located official sources through Google in the background in-app browser and read on November 10, 2026. No visible publication/revision dates on the cited guidance.

- LDH Emergency Preparedness & Response: https://ldh.la.gov/emergency-preparedness-response . Read main text and expanded vulnerable-loved-one FAQ. Verified 211 / text LASHELTER to 898211, 511, original medication bottles, medical/contact information, and 866-783-5553 for preparation, evacuation or relocation assistance with listed hours 8 a.m. to 4:30 p.m. Source does not specify weekdays or timezone; neither is added. This is not described as 24-hour dispatch.
- LDH ESF6 & ESF8: https://ldh.la.gov/emergency-preparedness-esf6-esf8 . Parish contact for evacuation assistance and medical-needs registry; changing shelter occupancy and route information points; pet care is personal responsibility. Do not infer uniform registry eligibility, services or guaranteed placement.
- GOHSEP Individuals With Disabilities: https://gohsep.la.gov/get-a-game-plan/make-a-plan/individuals-with-disabilities/ . Two routes, support network, private equipment/medication/contact record, more than one treatment facility and wheelchair size/operation. The page also contains dated TDD/911 technology instructions; those were not adopted or independently verified.
- GOHSEP parish directory: https://gohsep.la.gov/about/contact-us/parish-ohsep-contacts/ . Inspected directory entries; linked as a discovery point instead of copying changing personnel and phone lists. No individual office contacted.
- GOHSEP hurricane background: https://gohsep.la.gov/get-a-game-plan/disasters-and-emergencies/hurricanes/ . Read season and inland-risk context; did not adopt quantitative historical claims or use this as a current bulletin.

An old getagameplan.org evacuation-information path redirected to GOHSEP's homepage. Used the verified current topic URLs instead. Louisiana 511 is linked by the official agencies; no current route status was checked. No current order, address lookup, pickup, shelter opening/occupancy, individual medical eligibility or accepted placement was verified. Linked PDFs/apps were not examined. Retained hazard/history background was not fully reverified.

## Validation and release

Passed npm run build, metadata:audit (62 static / 127 dynamic source groups), schema:audit, links:audit (64 built HTML files), verify-content-dates (55 local records) and git diff --check. These are structural checks, not a factual audit of all covered routes.

Background localhost browser review confirmed the new content, November 10 visible revision, production canonical, six visible/schema planning steps and seven schema FAQs. Desktop and 390x844 mobile screenshots of the planning section showed readable wrapping; document client/scroll widths were equal at 1265px and 375px respectively. Viewport reset after review. The initial sandboxed dev-server start could not bind a local port; authorized escalation allowed the localhost-only review. No shared component, protected configuration, route or sitemap changes. Authorized release pending.
