export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-atlantic-hurricane-season-outlook",
    title: "2025 Atlantic Hurricane Season Outlook",
    description: "A practical overview of seasonal hurricane risk signals and how households should interpret outlooks before storms form.",
    datePublished: "2025-05-20",
    dateModified: "2026-07-28",
    image: "/images/blog/2025-atlantic-hurricane-season-outlook.svg",
    imageAlt: "Forecast operations desk with Atlantic hurricane outlook monitors and emergency planning notes.",
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
      },
      {
        heading: "How to Use the Forecast",
        body:
          "Do not use a seasonal forecast to decide whether one specific city will be hit. Use it to decide how early your household should finish kit building, tree trimming, insurance review, and evacuation planning."
      },
      {
        heading: "Decision Threshold",
        body:
          "If an active storm forms near your basin, move from seasonal planning to daily NHC advisory checks and local NWS alert monitoring. Households with medical or transportation constraints should shift earlier."
      }
    ]
  },
  {
    slug: "how-to-prepare-your-home-for-a-hurricane",
    title: "How to Prepare Your Home for a Hurricane",
    description: "A homeowner checklist for shutters, drainage, documents, supplies, and evacuation timing before hurricane watches become warnings.",
    datePublished: "2025-06-03",
    dateModified: "2026-07-28",
    image: "/images/blog/how-to-prepare-your-home-for-a-hurricane.svg",
    imageAlt: "Coastal home prepared with storm shutters, secured outdoor items, and sandbags.",
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
      },
      {
        heading: "Inside the Home",
        body:
          "Move valuables away from windows and low floors, freeze water containers to help preserve food, and keep shoes, flashlights, and a battery radio where you can reach them in darkness."
      },
      {
        heading: "When to Stop Preparing",
        body:
          "Stop outdoor work when winds increase, watches turn into warnings, or local officials tell residents to shelter or leave. No object outside is worth working around flying debris."
      }
    ]
  },
  {
    slug: "what-hurricane-watch-warning-means",
    title: "What a Hurricane Watch or Warning Means",
    description: "A plain-language guide to hurricane watches, warnings, storm surge alerts, and when to shift from monitoring to action.",
    datePublished: "2025-06-18",
    dateModified: "2026-07-28",
    image: "/images/blog/what-hurricane-watch-warning-means.svg",
    imageAlt: "Emergency weather alert setup with phone, radio, flashlight, batteries, and evacuation map.",
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
      },
      {
        heading: "Storm Surge Alerts",
        body:
          "Storm surge alerts deserve separate attention from wind alerts because water can make roads unusable before peak wind arrives. If your zone floods easily, plan around the water hazard first."
      },
      {
        heading: "Common Mistake",
        body:
          "Many households wait for the word hurricane and miss other dangerous alerts. Tropical storm warnings, flash flood warnings, tornado warnings, and storm surge warnings can all require immediate action."
      }
    ]
  },
  {
    slug: "hurricane-emergency-kit-checklist",
    title: "Hurricane Emergency Kit Checklist",
    description: "A decision-focused hurricane emergency kit checklist covering water, food, medicine, documents, power, pets, and evacuation bags.",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    image: "/images/blog/hurricane-emergency-kit-checklist.svg",
    imageAlt: "Organized hurricane emergency kit with water, food, first aid, batteries, documents, and pet supplies.",
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
      },
      {
        heading: "Pet and Infant Add-Ons",
        body: "Special household needs should be packed before a storm is close because stores may run out of specific supplies.",
        bullets: ["Pet food, leash, carrier, vaccine records, and waste bags.", "Formula, diapers, wipes, and infant medication.", "Comfort items for children or older adults.", "Copies of prescriptions and medical device instructions."]
      },
      {
        heading: "Where to Store It",
        body:
          "Keep home supplies in a dry, reachable place and keep evacuation supplies in bags that can leave quickly. Do not bury critical medication, IDs, or keys at the bottom of a large storage bin."
      }
    ]
  },
  {
    slug: "hurricane-evacuation-checklist",
    title: "Hurricane Evacuation Checklist",
    description: "A practical hurricane evacuation checklist for when to leave, what to pack, how to choose routes, and how to protect vulnerable household members.",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    image: "/images/blog/hurricane-evacuation-checklist.svg",
    imageAlt: "Evacuation preparation scene with go-bags, pet carrier, car, map, water, medicine pouch, and keys.",
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
      },
      {
        heading: "Route Planning",
        body:
          "Choose a primary route and a backup route before local traffic builds. Avoid routes that cross low bridges, flood-prone roads, or areas that frequently lose power at intersections."
      },
      {
        heading: "After You Arrive",
        body: "Your evacuation plan should include communication and return rules.",
        bullets: ["Text a contact when you leave and when you arrive.", "Keep receipts for possible insurance or assistance records.", "Do not return until local officials say roads and utilities are safe.", "Avoid floodwater, downed lines, and generator exhaust."]
      }
    ]
  },
  {
    slug: "what-to-do-during-a-hurricane-warning",
    title: "What to Do During a Hurricane Warning: 24-Hour Checklist",
    description: "A 24-hour hurricane warning checklist for protecting people, medication, documents, vehicles, pets, and evacuation options before conditions deteriorate.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/what-hurricane-watch-warning-means.svg",
    imageAlt: "Emergency alert setup with phone, radio, flashlight, batteries, and evacuation map.",
    sections: [
      {
        heading: "Direct Answer",
        body: "During a hurricane warning, finish the actions that become unsafe or impossible later: follow local orders, prepare to leave if directed, charge devices, pack medication and documents, secure the home, and stop outdoor work when conditions worsen."
      },
      {
        heading: "First Hour Priorities",
        body: "Start with people, transport, and official instructions rather than errands.",
        bullets: ["Read the full NWS alert and county emergency guidance.", "Contact anyone who needs help with transport, mobility, medication, or pets.", "Fuel the vehicle and choose a safe destination or shelter option.", "Pack IDs, prescriptions, insurance records, chargers, water, and pet supplies."]
      },
      {
        heading: "Before Winds Increase",
        body: "Complete outside work early and do not take risks to finish low-value tasks.",
        bullets: ["Bring in loose furniture, trash bins, tools, and decorations.", "Move vehicles away from trees and flood-prone streets when possible.", "Charge phones, battery packs, and essential devices.", "Set a family communication check-in time and an out-of-area contact."]
      },
      {
        heading: "When To Leave",
        body: "Leave when officials order evacuation, when your evacuation zone is told to go, or earlier if your household needs extra travel time. A warning does not mean every area has the same risk, so use county instructions and evacuation-zone information."
      }
    ],
    faqs: [
      {
        question: "Can I wait until the hurricane reaches my area before leaving?",
        answer: "Do not wait for visible severe weather if local officials tell your zone to evacuate. Roads, fuel, bridges, shelters, and medical support can become limited before peak conditions arrive."
      },
      {
        question: "What should I do if I am not in an evacuation zone?",
        answer: "Follow local instructions, finish preparations, and plan to shelter away from windows and flood-prone rooms. Inland flooding, tornadoes, and power outages can still be dangerous."
      }
    ]
  },
  {
    slug: "hurricane-power-outage-food-medicine-plan",
    title: "Hurricane Power Outage Plan for Food, Medicine, and Devices",
    description: "Prepare for a hurricane power outage with a practical plan for food safety, refrigerated medicine, medical equipment, charging, water, generators, and communication.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/hurricane-emergency-kit-checklist.svg",
    imageAlt: "Organized hurricane emergency kit with water, food, first aid, batteries, documents, and pet supplies.",
    sections: [
      {
        heading: "Direct Answer",
        body: "Prepare for a hurricane power outage by separating your plan into health needs, drinking water, food safety, charging, communication, and safe backup power. If anyone uses medical equipment or refrigerated medicine, contact the provider before the storm is close."
      },
      {
        heading: "Protect Health Needs First",
        body: "A power outage can become a medical or mobility problem before it becomes an inconvenience.",
        bullets: ["Ask the clinician, pharmacy, or equipment provider about backup power and medicine storage.", "Keep prescriptions, device instructions, and contact numbers in a waterproof bag.", "Identify a safe destination with reliable power if your household cannot remain safely at home.", "Charge essential devices before watches become warnings."]
      },
      {
        heading: "Food and Water Plan",
        body: "Keep water ready for drinking and sanitation, and make a food-safety plan before a storm.",
        bullets: ["Use coolers and ice to protect essential food if the outage lasts.", "Keep a food thermometer if available and discard food that is unsafe rather than tasting it.", "Store shelf-stable food that does not require cooking.", "Open refrigerator and freezer doors as little as possible."]
      },
      {
        heading: "Generator and Charging Safety",
        body: "Fuel-burning generators can create deadly carbon monoxide and electrical hazards. Use them only according to the manual and official safety guidance, outdoors and away from enclosed spaces. Never improvise a connection to home wiring."
      }
    ],
    faqs: [
      {
        question: "Should I buy a generator for hurricane season?",
        answer: "A generator can help some households, but it also creates fuel, carbon-monoxide, and electrical risks. Decide based on your household needs, learn the manual early, and follow local safety guidance."
      },
      {
        question: "How should I plan for refrigerated medicine during an outage?",
        answer: "Ask the prescribing clinician or pharmacist for the medicine-specific storage plan before the storm. Keep written instructions and provider numbers with your emergency documents."
      }
    ]
  },
  {
    slug: "hurricane-documents-insurance-checklist",
    title: "Hurricane Documents and Insurance Checklist",
    description: "Prepare a hurricane documents checklist with IDs, insurance details, property photos, prescriptions, contacts, and records needed before evacuation or damage.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/how-to-prepare-your-home-for-a-hurricane.svg",
    imageAlt: "Coastal home prepared with storm shutters, secured outdoor items, and sandbags.",
    sections: [
      {
        heading: "Direct Answer",
        body: "Before a hurricane, gather identification, insurance information, property photos, prescriptions, emergency contacts, banking access details, and copies of key records in a waterproof, portable folder."
      },
      {
        heading: "What To Photograph",
        body: "Create a dated visual record before conditions change.",
        bullets: ["Exterior walls, roof, windows, doors, and outdoor equipment.", "Each room, major appliances, electronics, and valuable items.", "Vehicle condition and serial numbers when practical.", "Receipts, inventory lists, and repairs that are already in progress."]
      },
      {
        heading: "What To Take If You Evacuate",
        body: "Keep the documents you may need while away from home in your go-bag instead of a storage bin.",
        bullets: ["Photo IDs, insurance cards, policy contacts, and property address.", "Prescriptions, medical summaries, and device information.", "Emergency contacts, family meeting locations, and school or workplace details.", "Cash, cards, keys, and copies of important legal records."]
      },
      {
        heading: "After the Storm",
        body: "Use official re-entry instructions, document conditions safely, and keep a log of major actions and expenses. Do not enter damaged buildings, approach downed lines, or make unsafe repairs for the sake of documentation."
      }
    ],
    faqs: [
      {
        question: "Should I store hurricane documents digitally or on paper?",
        answer: "Use both when possible: a protected paper folder for evacuation and secure digital copies you can access if you cannot return home."
      },
      {
        question: "When should I photograph my home for hurricane records?",
        answer: "Photograph it before a storm threat is imminent, when you can safely capture clear images. Update the record after major purchases or repairs."
      }
    ]
  },
  {
    slug: "hurricane-preparation-timeline-72-48-24-hours",
    title: "Hurricane Preparation Timeline: 72, 48, and 24 Hours",
    description: "Use a 72-, 48-, and 24-hour hurricane preparation timeline for supplies, evacuation routes, pets, documents, home protection, and final safety decisions.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/hurricane-evacuation-checklist.svg",
    imageAlt: "Evacuation preparation scene with go-bags, pet carrier, car, map, water, medicine pouch, and keys.",
    sections: [
      {
        heading: "Direct Answer",
        body: "Use the 72-hour window for planning and supplies, the 48-hour window for fuel, routes, documents, pets, and home protection, and the 24-hour window for final safety actions and official evacuation decisions."
      },
      {
        heading: "72 Hours: Remove Friction",
        body: "This is the best window to complete low-regret actions before stores and roads become stressed.",
        bullets: ["Review your evacuation zone, destination, and communication plan.", "Refill critical medicine and check medical or pet needs.", "Build water, food, sanitation, battery, and document supplies.", "Photograph property and read insurance contacts."]
      },
      {
        heading: "48 Hours: Prepare to Move",
        body: "Shift from general readiness to the actions that protect your household if a warning arrives.",
        bullets: ["Fuel the vehicle and choose a primary and backup route.", "Pack go-bags, including medication, IDs, chargers, cash, and pet supplies.", "Secure windows and outdoor items while conditions are safe.", "Confirm school, work, shelter, and care plans."]
      },
      {
        heading: "24 Hours: Follow Official Decisions",
        body: "At this point, focus on official warnings, evacuation-zone instructions, local flood and surge risk, and whether your household needs to leave earlier. Stop outdoor work when wind or conditions make it unsafe."
      }
    ],
    faqs: [
      {
        question: "Should I wait until 24 hours before a hurricane to prepare?",
        answer: "No. Use the earliest safe window for supplies, medication, routes, and household coordination. The final 24 hours should be reserved for official instructions and safety-critical actions."
      },
      {
        question: "What changes the hurricane timeline for my household?",
        answer: "Medical needs, limited mobility, pets, long travel routes, flood exposure, mobile homes, and evacuation-zone instructions can all require an earlier timeline."
      }
    ]
  },
  {
    slug: "how-far-is-a-hurricane-from-me",
    title: "How Far Is a Hurricane From Me?",
    description: "Learn what a hurricane's current distance from your location can tell you, what it cannot predict, and how to pair distance with official alerts.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/2025-atlantic-hurricane-season-outlook.svg",
    imageAlt: "Atlantic hurricane monitoring desk with map displays and emergency planning notes.",
    sections: [
      {
        heading: "Direct Answer",
        body: "A hurricane's distance from you shows only how far the current storm center is from your approximate location. It does not predict whether you will experience wind, surge, flooding, tornadoes, or evacuation conditions."
      },
      {
        heading: "What Distance Can Help With",
        body: "Distance is helpful for basic geographic context, especially when an active storm is offshore or moving between basins.",
        bullets: ["Understand whether the storm is generally near your region.", "Compare multiple active systems at a glance.", "Pair the current position with the official NHC forecast discussion.", "Use local NWS alerts to determine whether your state has current hazards."]
      },
      {
        heading: "Why Distance Is Not Enough",
        body: "Hurricanes are large, moving systems. Their strongest impacts may occur far from the center, and water hazards can be dangerous well ahead of landfall. A current position cannot replace forecast cones, local flood guidance, or evacuation-zone instructions."
      },
      {
        heading: "Best Next Step",
        body: "Use the HurricaneHub distance calculator for context, then open your state tracker and local risk plan. The official alert for your county is more important than a distance number."
      }
    ],
    faqs: [
      {
        question: "Is the closest hurricane always the most dangerous one?",
        answer: "No. A more distant storm can still produce dangerous surf, surge, rainfall, or tornadoes depending on its size, track, and local geography."
      },
      {
        question: "Where can I calculate current hurricane distance from my ZIP code?",
        answer: "Use HurricaneHub's Storm Distance Calculator, then verify the official NHC advisory and your local NWS alerts."
      }
    ]
  },
  {
    slug: "storm-surge-warning-vs-hurricane-warning",
    title: "Storm Surge Warning vs. Hurricane Warning",
    description: "Understand the difference between storm surge and hurricane warnings, why water hazards can arrive before peak wind, and when to leave.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/what-hurricane-watch-warning-means.svg",
    imageAlt: "Weather warning alert setup with a phone, radio, flashlight, batteries, and evacuation map.",
    sections: [
      {
        heading: "Direct Answer",
        body: "A hurricane warning addresses expected hurricane conditions, while a storm surge warning focuses on life-threatening water rising inland from the coast. Both require attention, but surge can make evacuation routes unsafe before peak winds arrive."
      },
      {
        heading: "Why Storm Surge Needs Its Own Decision",
        body: "Water changes travel and shelter decisions differently from wind.",
        bullets: ["Flooded roads can become impassable before the storm center arrives.", "Barrier islands, bays, rivers, and low-lying neighborhoods may need earlier decisions.", "Storm surge risk can vary sharply by evacuation zone.", "A wind-safe building may still be inaccessible after water rises."]
      },
      {
        heading: "What To Do",
        body: "Read the full local alert, check your evacuation zone, and leave when your zone is directed to evacuate. Do not drive through floodwater or wait to see visible water on your street before acting."
      },
      {
        heading: "Use More Than One Alert",
        body: "Storm surge warnings can occur alongside hurricane, flash flood, tornado, or evacuation alerts. The HurricaneHub Alert Action Decoder can help turn the alert type into a household action list, but official local instructions control."
      }
    ],
    faqs: [
      {
        question: "Should I evacuate for a storm surge warning?",
        answer: "Follow evacuation-zone instructions from local officials. A surge warning can require leaving even when wind conditions do not yet seem severe."
      },
      {
        question: "Can storm surge happen without a direct hurricane landfall?",
        answer: "Yes. Coastal water impacts can occur when a storm passes nearby. Check the official local forecast and alerts for your area."
      }
    ]
  },
  {
    slug: "hurricane-family-communication-plan",
    title: "Hurricane Family Communication Plan",
    description: "Build a hurricane family communication plan with contacts, meeting places, evacuation destinations, medication notes, pets, and check-in times.",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    image: "/images/blog/hurricane-evacuation-checklist.svg",
    imageAlt: "Hurricane evacuation preparation with go-bags, pet carrier, car, map, water, medicine pouch, and keys.",
    sections: [
      {
        heading: "Direct Answer",
        body: "A hurricane family communication plan should name an out-of-area contact, local contact, meeting place, evacuation destination, pet and medical needs, and clear check-in times for before and after travel."
      },
      {
        heading: "Choose Two Contacts",
        body: "Use one person nearby and one person outside the immediate risk area.",
        bullets: ["Keep their names and numbers on paper as well as on phones.", "Agree that short texts are often more reliable than long calls during disruptions.", "Tell children, older relatives, and caregivers who will communicate updates.", "Confirm who can make decisions if the household becomes separated."]
      },
      {
        heading: "Write Down the Plan",
        body: "Write down the meeting place and destination instead of relying on memory. Include school pickup, work departure, pet transport, medication, mobility, and vehicle needs."
      },
      {
        heading: "Practice Before the Storm",
        body: "Review the plan at the start of hurricane season and whenever the household changes. The goal is not a perfect plan; it is fewer decisions when official warnings arrive."
      }
    ],
    faqs: [
      {
        question: "What if my family has no local meeting place?",
        answer: "Choose an approved shelter, a trusted relative, or another safe location outside the evacuation zone, then confirm it is available before relying on it."
      },
      {
        question: "Should hurricane communication plans include pets?",
        answer: "Yes. Include carriers, food, records, transport, and a pet-friendly destination so pets do not delay a safety decision."
      }
    ]
  },
  {
    slug: "how-to-check-your-hurricane-evacuation-zone",
    title: "How to Check Your Hurricane Evacuation Zone",
    description: "Learn how to check your hurricane evacuation zone, why ZIP codes are not enough, and what to do when local officials issue evacuation instructions.",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    image: "/images/blog/hurricane-evacuation-checklist.svg",
    imageAlt: "Evacuation preparation scene with go-bags, pet carrier, car, map, water, medicine pouch, and keys.",
    sections: [
      {
        heading: "Direct Answer",
        body: "Check your hurricane evacuation zone through your county, city, parish, or state emergency management website. A ZIP code can identify your general area, but evacuation zones often follow flood, surge, road, and neighborhood boundaries."
      },
      {
        heading: "Why ZIP Codes Are Not Enough",
        body: "Two homes in the same ZIP code can have different storm surge, flood, road, and shelter instructions.",
        bullets: ["Use your exact address when the official local map allows it.", "Check whether your zone is based on storm surge, river flooding, or another hazard.", "Write down the zone name before a storm is close.", "Recheck local instructions when watches or warnings are issued."]
      },
      {
        heading: "When To Act",
        body: "Leave when officials order your zone to evacuate, or earlier if your household needs extra time because of medical needs, limited mobility, pets, transportation, or long-distance travel."
      },
      {
        heading: "Use HurricaneHub With Official Maps",
        body: "Use HurricaneHub's local risk plan and alert decoder to understand current warning language, then verify your exact zone with local emergency management before deciding whether to leave."
      }
    ],
    faqs: [
      {
        question: "Can HurricaneHub tell me my exact evacuation zone?",
        answer: "No. HurricaneHub can screen by ZIP or state, but exact evacuation zones come from local emergency management maps and official orders."
      },
      {
        question: "Should I evacuate before my zone is ordered?",
        answer: "Consider leaving earlier if you have medical, mobility, pet, transportation, mobile-home, or long-route constraints. Follow local instructions and do not wait until roads are unsafe."
      }
    ]
  },
  {
    slug: "hurricane-radar-vs-satellite",
    title: "Hurricane Radar vs. Satellite: What Each View Shows",
    description: "Understand the difference between hurricane radar and satellite views, when each is useful, and why neither replaces official NOAA/NWS alerts.",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    image: "/images/blog/2025-atlantic-hurricane-season-outlook.svg",
    imageAlt: "Atlantic hurricane monitoring desk with map displays and emergency planning notes.",
    sections: [
      {
        heading: "Direct Answer",
        body: "Radar is best for recent precipitation and rain bands where radar coverage exists. Satellite is best for cloud structure, cold cloud tops, and tropical organization over open water. Both are context tools, not official evacuation guidance."
      },
      {
        heading: "When Radar Helps",
        body: "Radar is useful when precipitation is near land or within ground radar coverage.",
        bullets: ["Watch rain bands and squall lines.", "See where stronger precipitation is moving.", "Pair radar with tornado, flood, and wind warnings.", "Expect weaker coverage over parts of open ocean."]
      },
      {
        heading: "When Satellite Helps",
        body: "Satellite imagery is useful for open-water tropical systems and broad cloud organization.",
        bullets: ["View storms before they reach radar range.", "Compare cloud-top cooling and organization.", "Watch the Gulf, Caribbean, Bahamas, and Atlantic at a basin scale.", "Use official NHC advisories for intensity, forecast track, and warnings."]
      },
      {
        heading: "Best Use on HurricaneHub",
        body: "Open the radar page, switch between RainViewer radar and GOES-East infrared satellite, then use the NWS alert panel and NHC storm markers to decide what official source to read next."
      }
    ],
    faqs: [
      {
        question: "Is radar or satellite better for hurricane tracking?",
        answer: "Neither is always better. Satellite is often better over open ocean; radar is better for nearby rain bands and precipitation details where radar coverage exists."
      },
      {
        question: "Can I use radar to decide whether to evacuate?",
        answer: "No. Use radar for context, but evacuation decisions come from official local instructions, evacuation zones, and weather.gov alerts."
      }
    ]
  },
  {
    slug: "nws-hurricane-alert-meanings",
    title: "NWS Hurricane Alert Meanings: Watch, Warning, Surge, Flood, Tornado",
    description: "Decode common NWS hurricane-related alerts and learn which ones should trigger monitoring, preparation, action, or evacuation review.",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    image: "/images/blog/what-hurricane-watch-warning-means.svg",
    imageAlt: "Emergency weather alert setup with phone, radio, flashlight, batteries, and evacuation map.",
    sections: [
      {
        heading: "Direct Answer",
        body: "A hurricane watch means conditions are possible, a hurricane warning means conditions are expected, storm surge alerts focus on life-threatening coastal water, flood warnings focus on rising water, tornado warnings require immediate shelter, and evacuation orders come from local officials."
      },
      {
        heading: "Common Alert Types",
        body: "Read the full alert text, not only the headline.",
        bullets: ["Watch: finish supplies, routes, documents, and fuel.", "Warning: complete protective action and follow local instructions.", "Storm surge: check your evacuation zone and leave if ordered.", "Flash flood: avoid flooded roads and move to safer ground if instructed.", "Tornado warning: shelter immediately in an interior room."]
      },
      {
        heading: "What Changes the Action Level",
        body: "A household with medical equipment, mobility limits, pets, no vehicle, mobile-home exposure, or a long route may need to act earlier than a standard household."
      },
      {
        heading: "Use the Alert Decoder",
        body: "HurricaneHub's Alert Action Decoder turns the alert type and household risk into a practical action list, while still pointing users back to official weather.gov and local emergency management instructions."
      }
    ],
    faqs: [
      {
        question: "Which NWS hurricane alert is most urgent?",
        answer: "Evacuation orders, tornado warnings, storm surge warnings for your zone, flash flood warnings, and hurricane warnings can all be urgent depending on your location and household risk."
      },
      {
        question: "Should I only pay attention to hurricane warnings?",
        answer: "No. Storm surge, flood, tornado, tropical storm, and evacuation messages can all require immediate action even when the headline is not simply hurricane warning."
      }
    ]
  }
];
