# Content quality batch 4 - Jacksonville household guide

## Baseline and scope

- Baseline: acd03b81e416f983e0a2ea80d9d18d39a270ebc7, main tracking origin/main, clean worktree, fresh fetch and 0/0 comparison before editing. Remote default main confirmed with ls-remote.
- Substantive update: `/city/jacksonville/hurricane-tracker/`, the standing preparedness guide in `src/data/localPreparednessPages.ts`.
- The separate `/hurricane-tracker/city/jacksonville/` tracker already contains useful October 27 local research. Inspected it for overlap; did not rewrite it or count it as another improved page.
- Existing planningRecord rendering supplies the ordered record, hypothetical example and matching HowTo schema. No shared component, route, sitemap, dependency or deployment configuration changes.

## Primary source observations

Located through a background in-app browser Google search and followed official JaxReady links. Read November 9, 2026. The HTML pages below did not display article publication or revision dates; the observation date is not an official update date. Forms, PDFs and actual address results were not reviewed.

| Source | Verified standing guidance and limits |
| --- | --- |
| https://www.jaxready.com/alerts/evacuation-zones | Lettered A-F zones; F covers areas likely to flood from rainfall or other hazards. Address lookup is linked; no private address entered and no result obtained. |
| https://www.jaxready.com/preparedness/evacuation-information/evacuation-routes | Geographic evacuation corridors, plus 904-255-3110 for routes, zones and special needs help. No current route or bridge clearance established. |
| https://www.jaxready.com/preparedness/evacuation-information/jta-evacuation-information | Free transport to open public shelters only, marked evacuation shuttles, pickup locations and announced cutoff. No event activation, timetable or capacity established. Linked PDFs not opened. |
| https://www.jaxready.com/preparedness/special-medical-needs-registration | Annual renewal, professional review and acceptance notification; callback and unit details; contact during evacuation to confirm intent and transport needs. Registration page asks caregiver/family accompaniment; help at 904-255-3172. Return by same mode after program verifies home safe/habitable. No application or individual acceptance verified. |
| https://www.jaxready.com/preparedness/shelter-information | Event-specific opening announcements and shelter types. A standing list does not prove an open site or reserved place. |
| https://www.jaxready.com/preparedness/shelter-information/special-medical-needs-shelter-information | Basic medical support, backup power, annual preregistration, required personal supplies and announced opening/location. No pet transport; service animals accepted. No individual device support or advanced care confirmed. |
| https://www.jaxready.com/preparedness/shelter-information/pet-friendly-shelter-information | Designated sites, records, carrier and owner care; possible separate animal room. Standing page says only service animals on public transport. Attribute this to the city's guidance and ask readers to confirm operator requirements; do not generalize to nationwide transit rules. |
| https://www.jaxready.com/preparedness/information-for/seniors-those-with-special-medical-needs | Background on power, heat and pharmacy needs, transport and potential home pickup eligibility. No individual entitlement or arrangement verified. |

## Changes and editorial checks

- Connect address, current instruction, receiving destination, JTA journey, medical acceptance/pickup, pet journey and return checks in six concrete steps.
- Explain F without presenting it as the safest or final alphabetical evacuation tier.
- Add an explicitly hypothetical household example. No fixed departure time, real address, successful application, available vehicle or safety outcome is invented.
- Replace an unsupported comparative landfall-frequency answer and a vague worst-flooding ranking with practical FAQs. Retain existing geographic context; historical data was not newly verified. Existing template displays the planning record instead of historical cards when a record is supplied.
- Replace the old zone resource path with the observed official alerts path and add direct topic-specific sources. Date only this substantive guide revision.
- Caregiver wording follows the registration page and asks the program to confirm individual requirements; backup power is not a promise of suitable support for all devices.
- This is a standing household guide, not a current evacuation bulletin or verification of active services. It is not a prediction of AdSense approval.

## Validation and release

- `npm run build` passed, including 33-city verification and 19 OG cards / 46 article image checks. No tracked generated-asset changes.
- Astro check: 225 files, zero errors, zero warnings, four existing hints. FAQ, internal-link and metadata audits passed; whitespace diff check passed. Generic audits do not by themselves establish the guide's factual accuracy.
- Built Worker preview at localhost:8840: canonical is the www production URL with trailing slash; substantive date November 9; six visible steps exactly match HowTo names/text; all seven FAQ schema questions/answers appear in the page.
- Desktop 1440x900 and mobile 390x844: no horizontal overflow; screenshots of the household record and mobile official resources inspected for readable wrapping. Local preview stopped after checking.
- Commit, push, deployment identity and production verification pending at this checkpoint.
