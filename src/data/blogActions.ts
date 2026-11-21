// Editorial choices describe the reader's next task, rather than incidental words
// appearing anywhere in an article. Existing posts are mapped explicitly below.
const actions = {
  kit: { name: "Build your household checklist", href: "/tools/preparedness-checklist/", description: "Check supplies, documents and household needs before a storm threatens." },
  alerts: { name: "Read an official alert's action language", href: "/tools/alert-action-decoder/", description: "Match watch, warning and evacuation wording with its issuer, area and required action." },
  live: { name: "Check current NHC storm information", href: "/hurricane-tracker/live/", description: "Open current storm positions and official advisory links; check the feed's own time." },
  radar: { name: "Compare radar and satellite views", href: "/radar/", description: "Compare the product, coverage and image time before interpreting cloud or rain patterns." },
  outage: { name: "Make a printable outage plan", href: "/tools/power-outage-planner/", description: "Organize water, food, equipment and care-provider instructions for a power interruption." },
  distance: { name: "Estimate distance to a current storm", href: "/tools/storm-distance-calculator/", description: "Compare a ZIP representative point with current storm centers, without treating distance as a safety boundary." },
  claim: { name: "Organize your insurance claim evidence", href: "/blog/hurricane-insurance-claim-guide-documentation/", description: "Separate loss notice, damage records, proof requirements and insurer responses." },
  flood: { name: "Check flood coverage separately", href: "/blog/hurricane-flood-insurance-guide-nfip/", description: "Review building and contents coverage, policy terms and flood-claim evidence." },
  ale: { name: "Track additional living expenses", href: "/blog/hurricane-additional-living-expenses-ale-coverage/", description: "Separate extra costs from normal spending and record receipts, limits and unanswered coverage questions." },
  documents: { name: "Prepare an offline document index", href: "/blog/hurricane-documents-insurance-checklist/", description: "Locate policies, identity records and essential contacts without putting passwords on a shared list." },
  evacuation: { name: "Record evacuation instructions and arrangements", href: "/tools/evacuation-decision-helper/", description: "Keep the official instruction separate from transport, destination and care confirmations." },
  communication: { name: "Set up household contacts and check-ins", href: "/blog/hurricane-family-communication-plan/", description: "Agree on contacts, backup communication and who will check on separated household members." },
  medical: { name: "Plan medicine, equipment and care", href: "/blog/hurricane-medical-needs-registry-preparedness/", description: "Prepare product-specific provider questions and confirm assistance and transport separately." },
  generator: { name: "Check generator and carbon monoxide safety", href: "/blog/hurricane-generator-safety-carbon-monoxide/", description: "Review outdoor placement, exhaust direction and CO alarm instructions before using backup power." },
  hardening: { name: "Review roof, door and window protection", href: "/blog/hurricane-home-hardening-checklist/", description: "Separate building improvements that need qualified assessment from last-minute preparation." },
  cone: { name: "Read the forecast cone's limits", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", description: "Distinguish uncertainty in the center track from the much wider area of weather hazards." },
  surge: { name: "Read storm surge maps and reference levels", href: "/blog/hurricane-storm-surge-forecasting/", description: "Separate inundation, gauge water levels and official surge alerts before comparing numbers." },
  zone: { name: "Find the official evacuation-zone lookup", href: "/blog/how-to-check-your-hurricane-evacuation-zone/", description: "Use the responsible local agency's address lookup and keep its planning zone separate from current orders." },
  water: { name: "Plan safe emergency water", href: "/blog/hurricane-water-storage-purification-emergency/", description: "Check storage needs and distinguish boil-water, do-not-drink and do-not-use notices." }
} as const;
type ActionKey = keyof typeof actions;

export const blogActionChoices: Record<string, readonly [ActionKey, ActionKey]> = {
  "hurricane-eyewall-replacement-cycle-explained": ["live", "cone"],
  "official-hurricane-information-sources-rumor-verification": ["live", "alerts"],
  "how-el-nino-affects-hurricanes": ["live", "kit"],
  "2025-atlantic-hurricane-season-outlook": ["live", "cone"],
  "how-to-prepare-your-home-for-a-hurricane": ["kit", "hardening"],
  "what-hurricane-watch-warning-means": ["alerts", "evacuation"],
  "hurricane-emergency-kit-checklist": ["kit", "water"],
  "hurricane-evacuation-checklist": ["evacuation", "documents"],
  "what-to-do-during-a-hurricane-warning": ["alerts", "evacuation"],
  "hurricane-power-outage-food-medicine-plan": ["outage", "generator"],
  "hurricane-documents-insurance-checklist": ["claim", "communication"],
  "hurricane-preparation-timeline-72-48-24-hours": ["kit", "evacuation"],
  "how-far-is-a-hurricane-from-me": ["distance", "cone"],
  "storm-surge-warning-vs-hurricane-warning": ["alerts", "surge"],
  "hurricane-family-communication-plan": ["evacuation", "outage"],
  "how-to-check-your-hurricane-evacuation-zone": ["evacuation", "alerts"],
  "hurricane-radar-vs-satellite": ["radar", "live"],
  "nws-hurricane-alert-meanings": ["alerts", "evacuation"],
  "real-time-hurricane-tracking-2026": ["live", "radar"],
  "how-to-read-the-hurricane-cone-of-uncertainty": ["live", "surge"],
  "hurricane-insurance-deductibles-guide": ["claim", "flood"],
  "hurricane-tracking-after-landfall-inland-flooding-tornadoes": ["alerts", "outage"],
  "hurricane-rapid-intensification": ["live", "cone"],
  "saffir-simpson-hurricane-wind-scale-explained": ["surge", "alerts"],
  "how-to-read-hurricane-spaghetti-models": ["cone", "live"],
  "hurricane-vs-typhoon-vs-cyclone": ["live", "cone"],
  "hurricane-storm-surge-forecasting": ["zone", "alerts"],
  "below-normal-hurricane-season-2026-real-time-tracker": ["live", "kit"],
  "what-to-do-after-a-hurricane": ["claim", "ale"],
  "hurricane-pet-safety": ["evacuation", "kit"],
  "hurricane-home-preparedness-room-by-room-checklist": ["kit", "hardening"],
  "hurricane-safety-seniors-children-disability": ["medical", "evacuation"],
  "hurricane-insurance-claim-guide-documentation": ["flood", "ale"],
  "hurricane-home-hardening-checklist": ["kit", "documents"],
  "hurricane-medical-needs-registry-preparedness": ["outage", "evacuation"],
  "hurricane-flood-insurance-guide-nfip": ["claim", "ale"],
  "hurricane-generator-safety-carbon-monoxide": ["outage", "medical"],
  "hurricane-additional-living-expenses-ale-coverage": ["claim", "flood"],
  "how-to-use-hurricane-tracker-live-tools": ["communication", "evacuation"],
  "hurricane-mold-prevention-after-flood": ["claim", "flood"],
  "hurricane-flood-zone-map-fema-understanding": ["zone", "flood"],
  "hurricane-small-business-preparedness-plan": ["outage", "claim"],
  "apartment-hurricane-preparedness-renters-checklist": ["evacuation", "ale"],
  "hurricane-school-daycare-emergency-plan": ["communication", "evacuation"],
  "hurricane-contractor-scams-insurance-claim": ["claim", "documents"],
  "hurricane-water-storage-purification-emergency": ["outage", "kit"]
};

export function getBlogActions(slug: string) {
  const selected = blogActionChoices[slug] ?? ["live", "kit"];
  return selected.map((key) => actions[key]).filter((action, index, list) =>
    action.href !== `/blog/${slug}/` && list.findIndex((item) => item.href === action.href) === index);
}
