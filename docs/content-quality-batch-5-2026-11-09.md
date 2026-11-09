# Content quality batch 5 - New Orleans assisted evacuation

## Baseline and scope

Fresh version check: main tracks origin/main; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git, remote default main confirmed with ls-remote. After fetch HEAD and origin/main equal fec86e30c5ebbbf9cbf4def043a92a88f1d883ed, ahead/behind 0/0, clean worktree. Continued implementation, commit/push and deployment are authorized by the ongoing phased project request.

One substantive page: `/city/new-orleans/hurricane-tracker/` in `src/data/localPreparednessPages.ts`. The separate city tracker already has useful October 27 assistance and parish guidance; inspected it for overlap and retained it unchanged. No route, sitemap, dependency, shared template or deployment configuration change.

## Official sources

Searched in the background in-app browser for official NOLA Ready assisted evacuation guidance, then read the existing official hurricane entry and followed its topic links. Observation date: November 9, 2026. No article publication/revision dates displayed on these HTML pages. Linked brochures, Smart911 forms, interactive maps and current incident services were not tested.

| URL | Checked scope |
| --- | --- |
| https://ready.nola.gov/plan/hurricane/ | Mandatory evacuation applies to residents and visitors; without one, household decision to leave or stay. CAE information text EVACNOLA to 77295; standing Smoothie King Center hub, onsite registration and onward state/federal shelter transport. Modified RTA routes, 311 mobility help, estimated timeline. One carry-on per person, exceptions for medical devices, diaper bags and necessary personal items. Small pets <=20 lb in carriers on regular buses; 311 for larger-pet dedicated transport. Business reentry tiers separate from resident return. |
| https://ready.nola.gov/plan/seniors/ | Power/heat/pharmacy interruption planning, medical section of Smart911, 311 help and potential home pickup when resources available. A profile does not establish individual eligibility, a booked ride or compatible receiving care. Did not adopt unrelated clinical advice. |
| https://ready.nola.gov/plan/pet-owners/ | ID collar, leash, medications, carrier; small/large-pet distinction, onsite animal registration, nearby animal shelter with owner care. This page names LSPCA for larger animals; the hurricane page instead describes dedicated buses and overflow SPCA support. Do not promise an operator; ask the city to confirm event arrangements. |
| https://ready.nola.gov/plan/flooding/ | Streetwise reports, floodwater avoidance and official permission before return. No street report, road condition, active parking suspension or effective flood map checked. Did not generalize insurance waiting periods or unrelated weather definitions. |

The hurricane page's contraflow wording is broader than the existing guide's event-specific warning. Retained the conservative existing text: do not assume contraflow or enter reversed lanes without official instructions. Did not turn estimated hours before landfall into a fixed personal transport deadline. The standing hub name is clearly conditional on event activation, not an instruction to travel there today.

## Substantive improvements

- Correct a vague statement that the assistance plans require early registration: alert subscription, medical profile and onsite registration have different purposes.
- Explain both stages of assisted evacuation, home-to-hub and onward travel, with activation and access checks.
- Apply local luggage exceptions and pet rules, rather than importing Jacksonville's pet transport restrictions.
- Add an explicitly invented two-adult/walker/35-pound-dog packing and journey exercise. It shows which checks remain open; it does not establish eligibility, an approved load, available pickup or pet admission.
- Separate general resident reentry from business placards, and reports of flooding from proof of a clear route.
- Add precise official topic links, eight practical FAQs and the guide's substantive revision/source observation date. The existing template renders six planning steps with matching HowTo and FAQ schema in place of generic history/kit blocks. Historical data remains unchanged and was not newly verified.
- No fictional team, experts, current orders or active service promises. This is not a prediction of AdSense approval.

## Validation and release

Build passed, including verification of 33 cities and 46 article OG assets. Astro check passed across 225 files with zero errors/warnings and four existing hints. FAQ, internal link and metadata audits passed; these structural checks do not establish factual correctness.

Inspected the built Worker locally at 1440x900 and 390x844: no horizontal overflow, readable planning steps and resource links. Confirmed November 9 revision date, www canonical with trailing slash, six visible steps matching HowTo, and eight FAQs matching visible text. Local preview stopped after inspection. Commit/push, deployment and production inspection remain pending.
