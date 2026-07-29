export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-atlantic-hurricane-season-outlook",
    title: "2025 Atlantic Hurricane Season Outlook",
    description: "A practical overview of seasonal hurricane risk signals and how households should interpret outlooks before storms form.",
    datePublished: "2025-05-20",
    dateModified: "2026-07-28",
    sections: [
      {
        heading: "What the Outlook Means",
        body:
          "A seasonal outlook is a planning signal, not a landfall forecast. Use it to prepare supplies, insurance records, evacuation routes, and family communication before a named storm targets your area."
      },
      {
        heading: "Household Actions",
        body: "The most useful response is to finish low-regret actions before peak season.",
        bullets: ["Check insurance documents.", "Photograph property and important papers.", "Test flashlights, chargers, and weather radios.", "Review evacuation zones and shelter rules."]
      }
    ]
  },
  {
    slug: "how-to-prepare-your-home-for-a-hurricane",
    title: "How to Prepare Your Home for a Hurricane",
    description: "A homeowner checklist for shutters, drainage, documents, supplies, and evacuation timing before hurricane watches become warnings.",
    datePublished: "2025-06-03",
    dateModified: "2026-07-28",
    sections: [
      {
        heading: "Start Outside",
        body:
          "Secure outdoor items, clean drains, trim weak branches when conditions are calm, and protect windows before wind makes work unsafe."
      },
      {
        heading: "Protect Records and Utilities",
        body: "Prepare for power, water, and communication disruption.",
        bullets: ["Store documents in waterproof bags.", "Move vehicles away from trees and flood-prone streets.", "Know how to shut off utilities if local officials advise it.", "Charge backup batteries and medical devices."]
      }
    ]
  },
  {
    slug: "what-hurricane-watch-warning-means",
    title: "What a Hurricane Watch or Warning Means",
    description: "A plain-language guide to hurricane watches, warnings, storm surge alerts, and when to shift from monitoring to action.",
    datePublished: "2025-06-18",
    dateModified: "2026-07-28",
    sections: [
      {
        heading: "Watch vs Warning",
        body:
          "A hurricane watch means hurricane conditions are possible; a hurricane warning means they are expected. The safe planning move is to finish preparations during the watch, not after roads and stores are already stressed."
      },
      {
        heading: "When to Escalate",
        body: "Escalate from monitoring to action when official alerts mention warning-level wind, storm surge, flash flooding, tornadoes, or evacuation instructions.",
        bullets: ["Prepare during a watch.", "Act during a warning.", "Leave when ordered by local officials or when your household needs extra travel time."]
      }
    ]
  },
  {
    slug: "hurricane-emergency-kit-checklist",
    title: "Hurricane Emergency Kit Checklist",
    description: "A decision-focused hurricane emergency kit checklist covering water, food, medicine, documents, power, pets, and evacuation bags.",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    sections: [
      {
        heading: "Direct Answer",
        body:
          "A hurricane emergency kit should include at least 3 days of water, shelf-stable food, medication, first aid, flashlights, batteries, chargers, documents, cash, sanitation supplies, and pet or infant items."
      },
      {
        heading: "Core Supplies",
        body: "Build the kit around people first, then power, documents, and cleanup.",
        bullets: ["One gallon of water per person per day.", "Ready-to-eat food and a manual can opener.", "Seven days of critical medicine when possible.", "IDs, insurance, prescriptions, and emergency contacts.", "Flashlights, battery packs, radio, and spare batteries."]
      },
      {
        heading: "Decision Note",
        body:
          "Pack a smaller go-bag if your home is in a surge zone, mobile home, barrier island, or evacuation area. A home kit and evacuation bag solve different problems."
      }
    ]
  },
  {
    slug: "hurricane-evacuation-checklist",
    title: "Hurricane Evacuation Checklist",
    description: "A practical hurricane evacuation checklist for when to leave, what to pack, how to choose routes, and how to protect vulnerable household members.",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    sections: [
      {
        heading: "Direct Answer",
        body:
          "Evacuate when local officials order it, when you are in a storm surge or flood zone, or when your household needs extra time because of medical, mobility, pet, vehicle, or long-distance travel needs."
      },
      {
        heading: "Before You Leave",
        body: "Do the fast, high-value tasks before roads become crowded.",
        bullets: ["Pack IDs, medicine, documents, chargers, water, food, and pet supplies.", "Fuel the vehicle and choose two routes.", "Tell a contact your destination.", "Unplug nonessential electronics if time allows.", "Never drive through flooded roads."]
      },
      {
        heading: "Who Should Leave Early",
        body:
          "People in mobile homes, RVs, barrier islands, low-lying neighborhoods, medically dependent households, and homes far from shelters should make decisions earlier than households with safer inland shelter options."
      }
    ]
  }
];
