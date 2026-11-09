# Preparation timing and Orlando content batch 3 - November 9, 2026

## Baseline and scope

Main tracks origin/main; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git. Remote HEAD query confirmed main; fresh fetch found HEAD/origin/main equal at 64373a73432190b46aa5201f4f1accb0d2d1e7c9, ahead/behind 0/0, clean worktree. Owner authorized continued phased improvements and committing/deploying verified work.

Three existing URLs: blog/hurricane-preparation-timeline-72-48-24-hours/, city/orlando/hurricane-tracker/ and hurricane-tracker/city/orlando/. Data changes only; no new route, sitemap source, dependency, shared component or deployment configuration changes. The tracker received a focused resource/context update, not a full independent rewrite.

## Primary sources

Discovered through Google and read on the official sites in the background browser on November 9, 2026:

- https://www.nhc.noaa.gov/arrivaltimes/ - visible update June 5, 2019. Earliest reasonable onset still has up to a 10 percent chance of earlier tropical-storm-force wind; most likely is equally likely before/after; preparations become difficult/dangerous at onset. Track, size and speed uncertainty; full-advisory updates and cyclone-associated printed time zone, which can differ from the reader's. Read HTML explanation, not linked PDFs or individual current graphics.
- https://www.orangecountyfl.net/EmergencySafety/EmergencyMedicalServices/SpecialNeedsProgram.aspx - no visible revision date. Eligible residents/visitors, caregiver/home-health support, registration channels and current details, county selection of active sites, bring caregiver/medical information/equipment and supplies, hospitals not general storm shelters.
- https://www.orangecountyfl.net/EmergencySafety/shelters.aspx - no visible revision date. 311 / 407-836-3111, assistance resources and transport contact, three-day food/water and two-week medicine packing list, caregivers, pet-friendly versus general-public shelters, carriers/records/supplies. Clinical requirements and current facility admission must be confirmed individually.

Did not read or submit registry forms, linked PDFs or private medical information. No individual eligibility, registration response, open shelter, ride, route, current order, address risk or live weather was verified. Did not adopt a third-party search snippet claiming a specific transport-booking procedure. Registration, activation and transport are presented as separate things to confirm, not as a newly verified county guarantee. Retained Ready.gov, NWS, risk and historical background are not represented as newly checked.

## Changes

- Timeline: NHC product distinctions and time zone, local instructions and earlier hazards, task dependencies, hypothetical noon/10 a.m. arithmetic exercise with explicit limits, rapidly developing systems and links to existing kit/communication/evacuation records. Removed an invented 48-hour observation from the image alt. Existing illustration was visually checked; no new image needed.
- Orlando standing guide: five-step housing/shelter/assistance record and fictional powered-equipment/pet household; county contacts; caregiver, equipment and journey confirmations; event-specific site and pet requirements; county packing guidance with clinician/pharmacist caveat. Replaced an unsupported most-damaging ranking FAQ. Existing component displays the planning record instead of its generic history/kit blocks; retained history data was not newly verified or rendered as part of this record.
- Orlando tracker: concise shelter-activation context and precise county links, with limited source-check scope. Long household instructions remain in the standing guide. No live-feed or routing changes.
- Three substantive revision dates and limited source-check dates are November 9, 2026. No invented reviewers or current conditions.

## Validation and release

- Build passed, including city-data verification and OG generation; no tracked generated-asset changes. Astro check: 225 files, zero errors/warnings and four existing hints. FAQ, internal-link, metadata and media audits passed; diff whitespace check passed.
- Built Worker preview at localhost:8840: all three pages checked at 1440x900 and 390x844 without horizontal overflow. Article hero loaded with accurate illustration alt; desktop/mobile screenshots visually inspected. Correct www trailing-slash canonicals and revised source notes. FAQ schema counts 4/5/4 (timeline/standing guide/tracker); the guide's HowTo uses the same five steps shown in its household record. Mobile guide-record screenshot and desktop guide-record screenshot checked for readable wrapping.
- Release pending. Record content commit, fresh remote comparison, actual Worker identity and production observations after deployment.

## Remaining work

Three batches now address seven blog articles and two Orlando URLs (one focused tracker update). The 60-85-page / 25-35-batch allowance remains provisional, not a confirmed defect count. Next inspect high-use local pages and overlapping topic guidance for decision gaps and useful local evidence; do not infer full factual review from a source-check field or a successful build.
