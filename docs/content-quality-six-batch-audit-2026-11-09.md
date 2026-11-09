# Six-batch follow-up content audit - November 9, 2026

## Baseline and method

Read AGENTS.md. Main tracks origin/main; origin fetch/push is https://github.com/daniel0411-cell/hurricanetracker.git. Queried remote HEAD confirmed main. Fresh fetch found HEAD and origin/main equal at `514792a8ce8c4c2d284074036d75a026973b82fb`, ahead/behind 0/0; clean starting worktree. Audited the six content batches from `93da2f2` through `c17885a`, their research/release records, full revised records and relevant shared rendering/tool code. This is a follow-up audit, not a new content release.

Cloudflare deployment history independently confirmed the latest production deployment at `2026-11-09T06:48:23.956Z`, Worker version `36190978-1452-4f6f-922d-2809c374a500` at 100%, serving https://www.hurricanetracker.cc/. Cloudflare supplies no commit tag/message for this version. Its relationship to content commit c17885a is documented by the previous clean build/deploy sequence and current production observations; local HEAD adds documentation only.

Read all seven revised blog records, the four revised standing local guides and focused Orlando tracker change, three worksheets, and adjacent tool/template code. Compared the local sources with production rendering. Re-read selected primary HTML sources below for higher-consequence or potentially confusing claims. Prior batch research notes were retained as prior evidence, not presented as a new independent check of every linked source.

## Findings

### P2 - Recommended checklist still gives a universal medication quantity

Location: `src/pages/tools/preparedness-checklist.ts:458`, linked from the revised kit/renter articles and local guides. Existing tool behavior, not introduced by these six content commits, but the revised user journey continues to recommend it.

Production default output still says `Medicine: 7-day medication supply, prescriptions list, first-aid kit`; its water calculation is fixed at three days and labeled a minimum. The revised kit article explicitly declines a universal prescription duration and asks readers to confirm quantity, refills and storage with their pharmacist or clinician. A reader following the article's next action receives the old, unqualified quantity.

Fix: replace the fixed medication duration with provider-confirmed quantity/refill/storage/transport prompts. Label water as a three-day base calculation for drinking and sanitation, with local duration and extra needs assessed separately. A three-day example is not intrinsically wrong, nor are locally attributed medication packing lists; the problem is the tool's universal presentation. Verify default and changed household/pet output and copied Markdown. The tool is an existing core route; request concrete AGENTS.md authorization before editing its logic.

### P2 - Apartment FAQ does not preserve the hierarchy of instructions

Location: `src/data/blog.ts:3419` and `src/data/blog.ts:3424` in the revised apartment article. Residual wording retained in today's revised page, not a newly added rule.

The body correctly says management cannot cancel an official evacuation order. One FAQ says to follow official orders and building guidance without stating precedence; another includes property-manager instructions among sources for `official decisions`. A reader consuming just the FAQ can confuse a manager's building-access procedure with the authority to issue or override a community evacuation/reentry instruction.

Fix: make both answers explicit: local emergency authorities govern evacuation/reentry restrictions; management supplies building-specific notices, access and procedures, and cannot override an official order. Preserve the property's ability to impose building-specific safety restrictions. Update the single FAQ data source so visible and structured answers remain aligned.

### P3 - Long local records lack a quick route to official resources

Locations: `src/components/LocalPreparednessPage.astro:28` and `:34`, especially the new Charleston record in `src/data/localPreparednessPages.ts`.

At 390x844, Charleston's official-resources heading is approximately 8,090 CSS pixels from the page top. There are no internal fragment links on that page. Its six step paragraphs are 99-116 words and roughly 422-502 pixels tall at that viewport; the worked example is 145 words. Text wraps correctly, but readers seeking the county contact or primary source must scroll through substantial planning text. New Orleans and Jacksonville use the same rendering pattern. Blog articles already have a contents control; this finding concerns local guides.

Fix: add a compact, accessible section navigation near the start, including planning record, evacuation guidance, official resources and FAQs. Link directly to the matching official resource from the relevant route/medical/pet step, and consider shorter subparagraphs or action/evidence/unfinished-check lists while retaining full safety qualifications. Do not duplicate the guides into new routes or remove source limitations. If record rendering changes, preserve text parity with HowTo. Recheck mobile, keyboard focus and anchor positioning.

### P3 - Communication generator does not capture the article's new fallback protocol

Locations: `src/data/blog.ts:808` and `src/pages/tools/family-communication-plan.astro:46`.

The revised article teaches human acknowledgement, relay status, missed-contact fallback and explicit date/time zone. Its new downloadable TXT record captures these. The linked pre-existing generator has eight fields, including a generic check-in-times field, but no explicit acknowledgement, fallback/retry, or time-zone fields; its generated check-in rules also omit these. This is an incomplete handoff between article and tool, not proof that the current generator is broken or that users cannot write notes manually.

Fix: extend the generated private plan with those prompts, or explicitly send readers to the existing TXT record for the full check-in protocol. Keep all entry local and do not imply messages are transmitted or acknowledgements monitored. Editing existing tool logic requires concrete authorization under AGENTS.md.

## Production verification

All 12 updated URLs were opened in the background in-app browser. Seven blogs each have one H1, correct www trailing-slash canonical, November 9 Article/BlogPosting modification date, loaded figure images, no horizontal overflow at the normal viewport, and FAQ JSON-LD questions/answers matching visible text. FAQ counts respectively:

| Blog slug | FAQs |
| --- | ---: |
| hurricane-emergency-kit-checklist | 4 |
| hurricane-evacuation-checklist | 4 |
| hurricane-family-communication-plan | 6 |
| hurricane-preparation-timeline-72-48-24-hours | 4 |
| apartment-hurricane-preparedness-renters-checklist | 7 |
| hurricane-school-daycare-emergency-plan | 7 |
| hurricane-contractor-scams-insurance-claim | 6 |

All five local URLs have correct canonicals, matching visible FAQ text and no normal-viewport horizontal overflow. Orlando standing guide has five exact visible/HowTo steps and five FAQs; Jacksonville six/seven; New Orleans six/eight; Charleston six/eight. The focused Orlando tracker has four matching FAQs and no HowTo, as expected. Four standing guides show the November 9 revision. Production worksheets all display the expected heading and November 9 revision. Confirmed the checklist's old medication output and communication generator's field inventory in production.

Charleston additionally inspected at 390x844, including a screenshot of its record: viewport width 390, document scroll width 375, no horizontal overflow; long-text scanning issue described above. Reset viewport afterward. This is not a fresh mobile screenshot pass of all 12 pages; earlier batch responsive checks remain separate evidence.

## Primary sources re-read

Observation date November 9, 2026. Started with Google search `site.jaxready.com pet friendly shelter public transportation`, opened the official result, then revisited exact primary URLs already recorded in the batch notes. Read relevant visible HTML sections; no private information entered, forms submitted, programs contacted or current emergency services tested.

| URL | Date displayed and checked scope |
| --- | --- |
| https://www.jaxready.com/preparedness/shelter-information/pet-friendly-shelter-information | No article date displayed; designated pet shelters, owner records/cage/care, possible separate room, only service animals on public transportation according to this standing city page. Existing guide attributes and qualifies that rule correctly. No separate operator policy verified. |
| https://hurricane.sc/evacuate | No article date displayed; Charleston area-specific routes, conditional I-26 reversal, MEPS power/space versus care, 833-351-9990, generally required caregiver, return access after order rescission. Existing guide's distinctions match checked sections. |
| https://ready.nola.gov/plan/hurricane/ | No article date displayed; conditional assisted evacuation, hub, 311, EVACNOLA, one carry-on and necessary-item exceptions, 20-pound pet threshold and dedicated transport, estimated timeline, separate business reentry. Existing text retains these conditions. |
| https://www.nhc.noaa.gov/arrivaltimes/ | Updated June 5, 2019; earliest reasonable arrival's <=10% earlier-onset chance, most-likely definition, full-advisory updates and cyclone-associated printed time zone. Timeline text matches these distinctions and labels its schedule fictional. |
| https://www.ready.gov/kit | Updated July 1, 2026; several-day supplies, one gallon/person/day for drinking and sanitation, individual needs, prescription organization, maintenance and storage. No universal seven-day prescription quantity in the checked guidance. |
| https://www.tdi.texas.gov/tips/renters-insurance.html | Updated December 10, 2025; landlord/belongings distinction, additional living expenses after a covered loss, flood exclusion, limits. Revised insurance section keeps Texas source scope and does not promise hotel coverage. |
| https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam | July 2022; license/insurance checks, written bids, contract/payment/financing checks, dispute documentation and outside assistance. Revised article labels bid amounts hypothetical and avoids a national deposit percentage. |
| https://www.orangecountyfl.net/EmergencySafety/EmergencyMedicalServices/SpecialNeedsProgram.aspx | No article date displayed; residents/visitors subject to eligibility, registration contacts, county selection of activated sites, caregiver/equipment supplies and hospitals not public shelters. The page also explicitly welcomes ordinary domestic pets at special-needs shelters, excluding reptiles. Current guide's general pet-site confirmation advice is cautious, not a contradiction; this local detail could be added later with clear program scope. |
| https://www.ccsdschools.com/departments2/operations/security-and-emergency-management-b6/emergency-preparedness-and-response-procedures/family-reunification | No article date displayed; school-bus relocation, official notifications, photo ID and adult listed in student file. Article correctly treats this as a named district example, not a universal pickup authorization. |

No fabricated team/expert, unlabeled real-event claim in the new fictional exercises, or guarantee that registration supplies an active ride/shelter was found in the reviewed six-batch content. This does not certify every sentence on the site, every retained historic claim or every official source's current accuracy. Registration forms, linked PDFs/videos, live orders, road tools, personal eligibility, insurance decisions and current service operation were not independently checked.

## Status

Audit only. Saved this report; no product code/content changed, committed, pushed or deployed in this audit turn. Existing build success is not used as factual evidence. A new build was not needed for this documentation-only change. Prioritize the checklist wording and apartment FAQs, then improve navigation and the communication handoff. Do not infer an AdSense outcome from these findings.

## Authorized remediation - November 9, 2026

The user subsequently authorized correcting the findings, committing and deploying. Fresh fetch confirmed main/origin/main equal at `514792a8ce8c4c2d284074036d75a026973b82fb`; this audit report was the only initial untracked file. Authorization includes the two tool changes described above.

- Checklist: replaced universal medication duration with pharmacist/clinician confirmation of quantity, refills, storage and transport. Water is explicitly a three-day drinking/sanitation base, with local duration and additional needs assessed separately. Checked one-person default and four-person/pet output, including real Markdown line breaks and matching medication text.
- Apartment FAQs: local authorities govern evacuation and reentry; property management cannot override those restrictions and can still impose building-specific safety/access restrictions.
- Local guides: added accessible section navigation, prioritizing official resources and evacuation guidance. Added heading scroll clearance. Retained all step text and schema. No source claims or hypothetical exercises were rewritten.
- Communication generator: added plan date, time zone, receipt/relay agreement and missed-check-in/backup fields to both input and generated plan. Empty fields remain explicitly unconfirmed; generated rules distinguish sent/received/relayed. Added existing TXT worksheet and article links, plus a local-entry/no-message-monitoring notice. Multiline entries remain plain text and HTML is escaped. Adjusted generated table labels and wrapping for mobile.
- Mobile verification additionally exposed overflowing footer links; added scoped wrapping in Footer.astro. A fresh dev origin was used after the first origin continued serving stale styles to the browser.

Validation: `npm run check` passed with zero errors/warnings and four existing hints; final `npm run build` passed after the CSS corrections. Browser-tested communication defaults, entered date/time zone, multiline acknowledgement and fallback text, and escaped HTML. At 390x844 the final communication page, Charleston, Orlando, Jacksonville, New Orleans and Florida guides had document width 375 <= viewport 390. Charleston keyboard navigation and Enter activation reached official resources with 88px heading clearance. All sampled guide anchors resolved; HowTo text remained visible. Apartment FAQ JSON-LD matched rendered answers. Desktop Charleston navigation was also checked. These checks verify implementation, not emergency-service availability or an AdSense decision.

Release status: validation complete; commit, push and deployment pending at the time of this entry. The following release record will capture the actual result.
