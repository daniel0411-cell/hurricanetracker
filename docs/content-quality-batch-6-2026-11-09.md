# Content quality batch 6 - Charleston routes and receiving needs

## Baseline and scope

Read AGENTS.md and checked status, remotes, branch upstream configuration and remote HEAD. Main tracks origin/main; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git, default main. Fresh fetch confirmed HEAD and origin/main both `3bb2db57ba904da03c455c57578e95638c597a71`, ahead/behind 0/0, clean worktree. Continuing content improvements, selective commits/push and deployment are authorized by the ongoing project request.

One substantive page: `/city/charleston/hurricane-tracker/`, data in `src/data/localPreparednessPages.ts`. Inspected Houston's November 2 guide and preserved its useful separation of orders, observations and care. Inspected Charleston's November 6 tracker, whose zone/map explanation remains unchanged. Do not count either as another rewritten URL. No shared template, route, sitemap, dependency or deployment configuration change.

## Official research

Observation date November 9, 2026; no article publication/revision dates displayed on the checked guidance pages. Searched Google in the background in-app browser for county hurricane evacuation/transport guidance. Results included old PDFs and social posts; did not rely on their snippets as current instructions. Opened the existing county emergency-management entry, which resolved to the .gov site; followed its visible Hurricane News, Evacuation Information, Shelters and state route links. Read the existing SCEMD Know Your Zone entry and the traffic FAQ linked from the state guide.

| URL | Verified scope |
| --- | --- |
| https://www.charlestoncounty.gov/departments/emergency-management/ | County office number 843-746-3800, office hours, official information and alert entry. Not a verified 24-hour dispatch or ride-booking service. |
| https://www.charlestoncounty.gov/hurricaneinfo.php | Navigation to county hurricane evacuation/shelter guidance; news list displayed dated releases, but the releases were not opened or used as current instructions. |
| https://www.charlestoncounty.gov/departments/emergency-management/hurricane.php#evacuation_info | Follow local instructions and designated routes, possible route-choice restrictions once ordered, inland hosts/hotels can lose power, link to state area-specific route guide. Did not adopt unrelated weather definitions or utility advice. |
| https://www.charlestoncounty.gov/departments/emergency-management/hurricane.php#shelters | Read the visible Shelters tab: portable supplies, medications and equipment, pet-friendly versus general public shelter distinction, service animals, carrier/medical records/food/water/medication/ID. Did not guarantee a same-room animal arrangement or pet transport. |
| https://www.charlestoncounty.gov/departments/emergency-management/shelters.php | Page displayed "No shelters available at this time." This is only an observation of the page on the research date, not a countywide independent availability check or an evergreen claim. Linked status page without copying its transient status into the guide. |
| https://www.scemd.org/prepare/know-your-zone/ | Official address/map entry, state/local announcements by predesignated zones, distinction between a lookup and a current instruction. No address was entered and no map result was checked. |
| https://hurricane.sc/evacuate | Charleston Area standing routes differ: downtown normal I-26 lanes, West Ashley SC 61/US 78 corridor, Johns/Kiawah/Seabrook SC 700/Main Road/US 17 south/SC 64 corridor. Conditional I-26 reversal; follow law enforcement and controls, GPS may misdirect. Seeking Safety section describes DPH Medical Equipment Power Shelters (MEPS), generator power/space, 833-351-9990 access and possible transport, generally required caregiver, CPR while calling 911 but no other medical care and staff may not be licensed. Return permission separate from actual access after order rescission. No personal route, admission, eligibility or care decision checked. |
| https://scemd.org/prepare/know-your-zone/hurricane-traffic-management/ | Official route signage over GPS, no moving barricades, conditional reversal and closed entry points during setup, operations stop before tropical-storm-force winds, possible flooded roads/closed bridges/unavailable help. Did not reproduce detailed lane assignments, exit lists or fixed departure deadlines. |

Linked PDFs, forms, maps, medical intake, alert signup and live traffic tools were not reviewed or submitted. No private address/health information entered, phone calls made or transport arrangements obtained. Existing historical records were not reverified; planningRecord replaces their generic visible block using the existing component.

## Changes and editorial decisions

- Replace the generic I-26-centered paragraph with source-based distinctions between starting areas and current traffic controls. Route examples identify standing corridors, not turn-by-turn current travel instructions.
- Add six planning steps: exact-address instruction; area-specific route; usable ride and destination; equipment power versus care; pet-friendly journey; activation and later return.
- Explicitly distinguish MEPS power/space from nursing care and individual admission, using the state guide's program contact. No home-care prescription or individual eligibility decision.
- Use the county's office contact for advance process questions without promising a bus, pickup, response time or 24-hour dispatch.
- Add an invented Johns Island/car/relative/powered equipment/caregiver/cat exercise with unresolved checks, not a fabricated case study or completed arrangement.
- Replace an absolute surge-versus-tidal-flooding comparison with a practical access warning. Keep useful local risk context, improve official topic links and eight practical FAQs, and add the bounded source observation date.
- Do not infer defects from a missing sourceCheck or short text alone. The changes address actual route and receiving-place gaps. No invented team, reviewer, current order, active shelter or approval guarantee.

## Validation and release

Build passed, including 33-city data verification and generation/verification of article OG assets. Astro check passed across 225 files with zero errors/warnings and four existing hints. FAQ, internal-link and metadata audits passed; these are structural checks, not independent fact-checks of every page. Diff whitespace check passed.

Inspected the built Worker locally at 1440x900 and 390x844. No horizontal overflow; planning heading, paragraphs and longer official-resource links fit. Confirmed November 9 revision date, www canonical with trailing slash, six visible steps matching HowTo and eight FAQs matching visible text. Local preview was stopped after inspection. Commit/push, deployment and production inspection remain pending.
