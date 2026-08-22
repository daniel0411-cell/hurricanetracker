export type LocalPreparednessPage = {
  kind: "state" | "city";
  slug: string;
  name: string;
  stateName: string;
  stateSlug: string;
  title: string;
  description: string;
  risk: string[];
  history: Array<{ storm: string; detail: string }>;
  evacuation: string[];
  resources: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const preparednessSteps = [
  { name: "Store water and food", text: "Build a seven-day home supply of water and shelf-stable food, plus a smaller evacuation supply that can travel with the household." },
  { name: "Protect medications and documents", text: "Refill essential prescriptions when allowed and keep identification, insurance, medical, property, and contact records in a waterproof portable container." },
  { name: "Plan for power loss", text: "Charge batteries, test flashlights, protect refrigerated medicine, and operate generators outdoors at least 20 feet from doors, windows, and vents." },
  { name: "Prepare pets and service animals", text: "Pack food, water, medication, carriers, leashes, vaccination records, identification, and a destination that accepts animals." },
  { name: "Know the evacuation trigger", text: "Confirm the local evacuation zone, transportation plan, two destinations, and the official channels that announce orders and shelter openings." },
  { name: "Secure the home safely", text: "Clear drains, bring loose items indoors, use approved window protection, document property, and stop outdoor work before winds make it unsafe." },
  { name: "Save official alerts", text: "Enable local emergency alerts, Wireless Emergency Alerts, NWS notifications, and NHC advisories before mobile service or power becomes unreliable." }
];

export const localPreparednessPages: LocalPreparednessPage[] = [
  {
    kind: "state", slug: "florida", name: "Florida", stateName: "Florida", stateSlug: "florida",
    title: "Florida Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Florida hurricane preparedness guide for 2026: evacuation zones, emergency kits, shelter planning, official alerts, storm surge, and local safety resources.",
    risk: [
      "Florida is exposed on both the Atlantic and Gulf coasts, and the peninsula places millions of residents within reach of storm surge, hurricane wind, freshwater flooding, tornadoes, and long power outages. South Florida and the Keys can face limited northbound routes, while the Panhandle, Big Bend, Tampa Bay, and northeast coast each have different surge geometry and warning timelines.",
      "Evacuation zones are based mainly on storm-surge vulnerability and local infrastructure, not simply distance from the shoreline. Mobile and manufactured homes may receive evacuation guidance even outside a mapped surge zone because wind vulnerability is different from flood vulnerability. Visitors should learn the county and address of their lodging before alerts begin.",
      "Florida residents should make separate plans for coastal evacuation and sheltering from inland wind or tornado risk. A county may order Zone A while residents farther inland remain home, and bridge, causeway, airport, fuel, or traffic conditions can change before tropical-storm-force winds arrive."
    ],
    history: [
      { storm: "Labor Day hurricane (1935)", detail: "A Category 5 Florida Keys landfall that remains a benchmark for extreme wind and surge." },
      { storm: "Donna (1960)", detail: "Crossed the Keys and southwest Florida, then tracked through the peninsula with widespread impacts." },
      { storm: "Betsy (1965)", detail: "Crossed South Florida before entering the Gulf, bringing destructive wind and water impacts." },
      { storm: "Andrew (1992)", detail: "A Category 5 South Miami-Dade landfall that transformed Florida building codes and preparedness." },
      { storm: "Opal (1995)", detail: "A major hurricane at peak intensity before a damaging Florida Panhandle landfall." },
      { storm: "Charley (2004)", detail: "Rapidly intensified and made a Category 4 southwest Florida landfall with a narrow destructive wind core." },
      { storm: "Frances (2004)", detail: "A large, slow storm that crossed Florida and prolonged wind, rain, and outage impacts." },
      { storm: "Jeanne (2004)", detail: "Made landfall near the same Treasure Coast area affected by Frances only weeks earlier." },
      { storm: "Irma (2017)", detail: "Struck the Keys as a Category 4 and affected much of the peninsula with wind, surge, and outages." },
      { storm: "Ian (2022)", detail: "Made a Category 4 southwest Florida landfall and produced catastrophic surge and inland flooding." }
    ],
    evacuation: [
      "Find the address in the county evacuation-zone map; Florida does not use one statewide lettering system for every county. A flood zone used for insurance is not the same as a hurricane evacuation zone.",
      "Choose an inland destination and a shorter local shelter option. Major corridors can include I-75, I-95, Florida's Turnpike, I-4, US routes, and county roads, but officials select routes according to the threatened coast and current traffic.",
      "Leave when local officials direct your zone. Do not wait for a statewide announcement, assume a highway will use contraflow, or drive toward the forecast cone without checking road, bridge, toll, fuel, and destination conditions."
    ],
    resources: [
      { label: "Florida Division of Emergency Management", href: "https://www.floridadisaster.org/" },
      { label: "Florida evacuation zones", href: "https://www.floridadisaster.org/knowyourzone/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Florida", href: "https://www.redcross.org/local/florida.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Florida?", answer: "The Atlantic season runs June 1 through November 30, with the busiest period usually from mid-August through October. Florida can still experience tropical impacts outside those dates." },
      { question: "How do I find my Florida evacuation zone?", answer: "Use Florida's Know Your Zone resource and confirm the result with your county emergency management office. Do not substitute a FEMA insurance flood zone for a local evacuation zone." },
      { question: "Can Florida order a mandatory evacuation?", answer: "Yes. County and local officials can issue evacuation orders for specific zones, islands, mobile homes, or vulnerable facilities. Follow the order that applies to your address." },
      { question: "What was Florida's most destructive hurricane?", answer: "There is no single answer for every measure. Andrew is a defining wind disaster, Ian caused catastrophic surge and flooding, and the 1935 Labor Day hurricane set an extreme intensity benchmark." },
      { question: "What belongs in a Florida hurricane kit?", answer: "Plan for seven days of water and food, medication, documents, batteries, weather alerts, pet supplies, heat protection, cleanup safety, and a portable evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "texas", name: "Texas", stateName: "Texas", stateSlug: "texas",
    title: "Texas Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Texas hurricane preparedness guide for 2026: coastal evacuation, emergency kits, local alerts, storm surge, inland flooding, shelters, and safety resources.",
    risk: [
      "The Texas coast extends from the lower Rio Grande Valley through Corpus Christi, Matagorda Bay, Galveston Bay, and the Louisiana border. Barrier islands, bays, ship channels, refineries, low coastal roads, and fast-growing metropolitan areas create very different surge and evacuation problems along the coast.",
      "Hurricane risk does not stop at the shoreline. Houston and southeast Texas can receive extreme rainfall and bayou flooding far from the landfall point, while inland counties may experience tornadoes, river flooding, fallen trees, heat, and prolonged power loss. Residents should track the storm's size and rainfall forecast, not only its category.",
      "Texas evacuations are locally ordered and often organized with coastal evacuation zones and designated routes. Long distances, limited bridge crossings, livestock, industrial facilities, medical needs, and heavy traffic mean a household may need to prepare its departure well before conditions deteriorate."
    ],
    history: [
      { storm: "Galveston hurricane (1900)", detail: "The deadliest U.S. natural disaster, producing catastrophic Galveston surge and loss of life." },
      { storm: "Freeport hurricane (1932)", detail: "A major hurricane that struck the upper Texas coast and caused severe wind and surge damage." },
      { storm: "Audrey (1957)", detail: "Made landfall near the Texas-Louisiana border with catastrophic surge across the region." },
      { storm: "Carla (1961)", detail: "A large Category 4 landfall near Matagorda Island with major surge and tornado impacts." },
      { storm: "Beulah (1967)", detail: "Struck south Texas and generated exceptional rainfall, river flooding, and numerous tornadoes." },
      { storm: "Celia (1970)", detail: "A compact major hurricane that caused intense wind damage around Corpus Christi." },
      { storm: "Alicia (1983)", detail: "A Category 3 landfall near Galveston that brought damaging wind into the Houston area." },
      { storm: "Bret (1999)", detail: "A small Category 3 hurricane that struck a sparsely populated section of the south Texas coast." },
      { storm: "Ike (2008)", detail: "A large hurricane whose surge devastated Bolivar Peninsula and affected Galveston Bay." },
      { storm: "Harvey (2017)", detail: "A Category 4 coastal landfall followed by catastrophic, long-duration rainfall flooding in southeast Texas." }
    ],
    evacuation: [
      "Use the coastal county or regional evacuation map for the address. Texas plans may identify ZIP-code evacuation zones, storm-surge areas, or local zones; an order can differ across neighboring counties.",
      "Common inland corridors include I-45 from Galveston and Houston, I-10 from the upper coast, US 59/I-69, US 77/I-69E, US 281/I-69C, and routes from Corpus Christi. TxDOT and local officials publish the usable route for the actual event.",
      "Know fuel range, alternate roads, destination, medical stops, and how livestock or trailers change travel time. Do not assume lane reversal will occur; contraflow is an incident-specific government decision."
    ],
    resources: [
      { label: "Texas Division of Emergency Management", href: "https://www.tdem.texas.gov/prepare" },
      { label: "DriveTexas road conditions", href: "https://drivetexas.org/" },
      { label: "FEMA Region 6", href: "https://www.fema.gov/about/organization/region-6" },
      { label: "American Red Cross Texas Gulf Coast", href: "https://www.redcross.org/local/texas/gulf-coast.html" }
    ],
    faqs: [
      { question: "When is hurricane season for Texas?", answer: "Atlantic hurricane season is June 1 through November 30. Texas risk often becomes most prominent from August into September, but storms can occur earlier or later." },
      { question: "Where are Texas hurricane evacuation zones?", answer: "Zones are issued by coastal counties and regional authorities, sometimes using ZIP codes. Check the local emergency management map for your exact address." },
      { question: "Who can order a Texas hurricane evacuation?", answer: "Local authorities can issue mandatory orders for threatened jurisdictions. State agencies support traffic and response, but residents should follow the order for their county or city." },
      { question: "Which hurricane had the greatest Texas impact?", answer: "The 1900 Galveston hurricane was the deadliest U.S. natural disaster. Carla, Ike, and Harvey illustrate the state's distinct surge, wind, and rainfall threats." },
      { question: "What should a Texas hurricane kit include?", answer: "Store seven days of water and food, prescriptions, documents, backup power used safely, heat supplies, pet or livestock needs, flood cleanup protection, and a portable evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "louisiana", name: "Louisiana", stateName: "Louisiana", stateSlug: "louisiana",
    title: "Louisiana Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Louisiana hurricane preparedness guide for 2026: evacuation routes, emergency kits, official alerts, levee and surge risk, shelters, pets, and safety.",
    risk: [
      "Louisiana combines a low, subsiding coast with wetlands, river levees, navigation channels, lakes, bayous, and communities outside major hurricane protection systems. Storm surge can travel through connected water bodies while rainfall and river drainage remain serious concerns inland.",
      "New Orleans has engineered risk-reduction systems, but no levee or pump system removes all risk. Terrebonne, Lafourche, Plaquemines, Grand Isle, Cameron, Calcasieu, St. Bernard, and other coastal areas face different surge depths, road elevations, and evacuation timing. Residents must use parish information rather than a statewide assumption.",
      "Rapid intensification in the Gulf can shorten the preparation window. Louisiana households should decide early how medical needs, pets, transportation, generators, heat, and long outages affect the choice between leaving and sheltering."
    ],
    history: [
      { storm: "Chenier Caminada hurricane (1893)", detail: "A catastrophic Louisiana surge disaster that devastated the coastal settlement." },
      { storm: "New Orleans hurricane (1915)", detail: "A major hurricane that caused severe wind and water impacts across southeast Louisiana." },
      { storm: "Audrey (1957)", detail: "Produced devastating surge in Cameron Parish and southwest Louisiana with major loss of life." },
      { storm: "Betsy (1965)", detail: "A Category 3 Louisiana landfall associated with destructive wind, surge, and New Orleans flooding." },
      { storm: "Camille (1969)", detail: "Passed near southeast Louisiana before a Category 5 Mississippi landfall, bringing extreme regional impacts." },
      { storm: "Andrew (1992)", detail: "Made a major-hurricane landfall in south-central Louisiana after crossing Florida." },
      { storm: "Katrina (2005)", detail: "A southeast Louisiana landfall and regional surge disaster followed by catastrophic New Orleans levee failures." },
      { storm: "Rita (2005)", detail: "A Category 3 landfall near the Louisiana-Texas border with devastating southwest Louisiana surge." },
      { storm: "Laura (2020)", detail: "A Category 4 southwest Louisiana landfall that caused extreme wind damage around Cameron and Lake Charles." },
      { storm: "Ida (2021)", detail: "A Category 4 southeast Louisiana landfall with destructive wind, surge, and widespread prolonged outages." }
    ],
    evacuation: [
      "Louisiana uses parish and regional plans. Identify whether the home lies in a locally defined risk or evacuation area, then confirm the order with parish emergency management; a hurricane evacuation decision is not the same as an insurance flood-zone designation.",
      "Routes may include I-10, I-12, I-49, I-55, I-59, US 61, US 90, and parish roads. Southeast Louisiana phased evacuation planning prioritizes the most exposed areas, but route controls and contraflow are announced for the actual storm.",
      "Leave early enough to clear low roads, bridges, and surge-prone areas before tropical-storm-force winds. Keep multiple destinations because a route or shelter may be unavailable, and never drive into floodwater."
    ],
    resources: [
      { label: "Louisiana GOHSEP", href: "https://gohsep.la.gov/" },
      { label: "Louisiana 511 road conditions", href: "https://www.511la.org/" },
      { label: "FEMA Region 6", href: "https://www.fema.gov/about/organization/region-6" },
      { label: "American Red Cross Louisiana", href: "https://www.redcross.org/local/louisiana.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Louisiana?", answer: "The Atlantic season runs June 1 through November 30. Louisiana's greatest historical activity is concentrated in late summer and early fall, but residents should remain ready throughout the season." },
      { question: "How do Louisiana evacuation zones work?", answer: "Parishes and regional plans identify exposed areas and phases. Check parish emergency management for your address and do not use an insurance flood zone as the only evacuation trigger." },
      { question: "Can Louisiana require a mandatory evacuation?", answer: "Yes. Parish and local authorities may order threatened areas to leave. Follow the order, timing, and route instructions for your jurisdiction." },
      { question: "What was Louisiana's worst hurricane?", answer: "Katrina is the defining modern catastrophe because of surge and levee failures, while Audrey, Betsy, Laura, and Ida demonstrate the state's varied regional risks." },
      { question: "What belongs in a Louisiana hurricane kit?", answer: "Prepare seven days of food and water, prescriptions, documents, pet supplies, safe backup power, heat protection, cleanup equipment, and a portable bag for early parish evacuation." }
    ]
  },
  {
    kind: "state", slug: "north-carolina", name: "North Carolina", stateName: "North Carolina", stateSlug: "north-carolina",
    title: "North Carolina Hurricane Preparedness 2026: Zones & Safety",
    description: "North Carolina hurricane preparedness for 2026: Know Your Zone, Outer Banks evacuation, emergency kits, NWS alerts, shelters, flooding, and safety.",
    risk: [
      "North Carolina projects far into the Atlantic at Cape Hatteras, while the Outer Banks form a narrow barrier-island chain exposed to ocean surge, sound-side flooding, waves, overwash, and road cuts. A storm that misses direct landfall can still isolate communities along NC 12 or damage dunes and bridges.",
      "The risk extends inland through the Coastal Plain and river basins. Slow tropical systems have produced severe flooding around the Cape Fear, Neuse, Lumber, Tar, and other rivers days after the wind weakened. Piedmont and mountain communities can also receive flash flooding, landslides, tornadoes, and tree damage from tropical remnants.",
      "Visitors may not know their county, evacuation zone, or safe route from a rental property. Permanent residents should plan around ferries, pets, medical equipment, agriculture, and the possibility that reentry to islands takes longer than the initial evacuation."
    ],
    history: [
      { storm: "Hazel (1954)", detail: "A Category 4 landfall near the South Carolina border that devastated the North Carolina coast." },
      { storm: "Connie (1955)", detail: "Brought heavy rain and coastal effects before additional storms compounded flooding that season." },
      { storm: "Diane (1955)", detail: "Added exceptional rainfall and flooding shortly after Connie affected the state." },
      { storm: "Donna (1960)", detail: "Tracked along the coast and affected the Outer Banks during a long U.S. impact sequence." },
      { storm: "Diana (1984)", detail: "Made a major-hurricane landfall near Cape Fear after looping offshore." },
      { storm: "Gloria (1985)", detail: "Passed over the Outer Banks and reinforced the state's evacuation planning needs." },
      { storm: "Bertha (1996)", detail: "Made a Category 2 landfall near Wilmington with coastal wind and surge damage." },
      { storm: "Fran (1996)", detail: "A Category 3 Cape Fear landfall that drove damaging wind well inland through Raleigh." },
      { storm: "Floyd (1999)", detail: "Produced catastrophic eastern North Carolina river flooding after a Category 2 landfall." },
      { storm: "Florence (2018)", detail: "A slow Category 1 landfall that caused extreme rainfall and prolonged inland flooding." }
    ],
    evacuation: [
      "North Carolina's Know Your Zone system uses coastal evacuation zones designated by local officials. Confirm the address and zone before the season; barrier islands and low coastal areas may be ordered out before inland zones.",
      "Routes vary by coast and county. US 158 and US 64 serve Outer Banks departures, while US 70, US 17, I-40, I-95, and other roads move traffic inland. Ferry service, bridge winds, flooding, construction, and crashes can change the viable route.",
      "Do not drive through water or return because the sky clears. Sound-side surge and river crests may arrive after the center passes, and local reentry credentials or checkpoints may remain in effect."
    ],
    resources: [
      { label: "North Carolina Emergency Management", href: "https://www.ncdps.gov/our-organization/emergency-management" },
      { label: "ReadyNC and Know Your Zone", href: "https://www.readync.gov/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Eastern North Carolina", href: "https://www.redcross.org/local/north-carolina/eastern-north-carolina.html" }
    ],
    faqs: [
      { question: "When is North Carolina hurricane season?", answer: "The Atlantic season runs June 1 through November 30. North Carolina's Cape Hatteras exposure makes monitoring important throughout the season, especially from August through October." },
      { question: "What is North Carolina Know Your Zone?", answer: "It is a coastal evacuation-zone system used by participating counties. Look up the property and follow the local order for that zone." },
      { question: "Are Outer Banks evacuations mandatory?", answer: "Local governments can order visitors, residents, or specific zones to leave. Orders may begin early because bridges and NC 12 become unsafe before the storm center arrives." },
      { question: "What hurricane caused North Carolina's worst flooding?", answer: "Floyd and Florence are major modern benchmarks for catastrophic river and rainfall flooding, while Hazel and Fran demonstrate destructive wind and surge." },
      { question: "What should a North Carolina kit cover?", answer: "Include seven days of supplies, prescriptions, documents, pet needs, weather radio, outage and heat planning, flood cleanup protection, and a portable barrier-island evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "south-carolina", name: "South Carolina", stateName: "South Carolina", stateSlug: "south-carolina",
    title: "South Carolina Hurricane Preparedness 2026: Zones & Safety",
    description: "South Carolina hurricane preparedness for 2026: evacuation zones, coastal routes, emergency kits, official alerts, shelters, surge, flooding, and safety.",
    risk: [
      "South Carolina's lowcountry contains barrier islands, tidal creeks, marshes, rivers, and rapidly growing coastal communities from Hilton Head through Charleston to the Grand Strand. Storm surge can move through sounds and estuaries while high tide and rainfall slow drainage.",
      "Charleston's peninsula, the Sea Islands, Georgetown County, and Horry County have different road networks and surge exposure. Inland impacts can include tornadoes, flash flooding, falling pines, prolonged outages, and river flooding well after coastal winds ease.",
      "The state uses hurricane evacuation zones and may manage a large coastal departure toward inland counties. Residents should distinguish a local evacuation zone from a FEMA flood-insurance map and should not assume that every lane reversal plan will be activated."
    ],
    history: [
      { storm: "Sea Islands hurricane (1893)", detail: "A catastrophic surge disaster across the South Carolina and Georgia Sea Islands." },
      { storm: "Charleston hurricane (1911)", detail: "Brought damaging wind and water into Charleston and the surrounding coast." },
      { storm: "Gracie (1959)", detail: "A Category 4 landfall near Beaufort with severe lowcountry wind and surge." },
      { storm: "David (1979)", detail: "Made a Category 1 landfall near Charleston after major Caribbean impacts." },
      { storm: "Hugo (1989)", detail: "A Category 4 landfall near Sullivan's Island with destructive surge and inland wind." },
      { storm: "Bertha (1996)", detail: "Affected the coast before landfalling in North Carolina and produced beach and wind impacts." },
      { storm: "Floyd (1999)", detail: "Prompted a massive evacuation and brought flooding, highlighting traffic-planning challenges." },
      { storm: "Matthew (2016)", detail: "Paralleled the coast and produced surge, rainfall flooding, and widespread outages." },
      { storm: "Florence (2018)", detail: "Its slow movement contributed to major northeast South Carolina river flooding." },
      { storm: "Dorian (2019)", detail: "Passed close to the coast with wind, surge, tornado, and flooding effects." }
    ],
    evacuation: [
      "Use the South Carolina evacuation-zone lookup and county instructions. Zones are tied to surge and local access; residents outside a zone may still need safer shelter if they live in a mobile home or medically vulnerable setting.",
      "I-26 is the principal Charleston-area inland corridor, while US 501, US 378, US 21, US 278, US 17, and connecting state roads serve other coastal areas. Lane reversal on I-26 is activated only by official decision and is not guaranteed for every storm.",
      "Choose a destination outside the threatened area, not simply the nearest inland town. Monitor 511 road conditions and leave before winds restrict bridges or emergency services."
    ],
    resources: [
      { label: "South Carolina Emergency Management", href: "https://www.scemd.org/" },
      { label: "SC hurricane evacuation guide", href: "https://www.scemd.org/prepare/types-of-disasters/hurricanes/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross South Carolina", href: "https://www.redcross.org/local/south-carolina.html" }
    ],
    faqs: [
      { question: "When does hurricane season affect South Carolina?", answer: "Atlantic season runs June 1 through November 30, with the greatest historical activity usually from August through October." },
      { question: "How do South Carolina evacuation zones work?", answer: "State and county maps identify coastal surge zones. Enter the property address and follow the order issued for that zone and county." },
      { question: "Will I-26 always reverse for an evacuation?", answer: "No. I-26 lane reversal is an event-specific state decision. Use current SCEMD and transportation instructions rather than assuming contraflow." },
      { question: "What was South Carolina's benchmark hurricane?", answer: "Hugo in 1989 is the defining modern wind and surge disaster, while Matthew and Florence show the importance of rainfall and river flooding." },
      { question: "What should a lowcountry emergency kit include?", answer: "Prepare seven days of supplies, medicines, documents, pet items, weather alerts, safe backup power, cleanup gear, and a portable kit for early zone evacuation." }
    ]
  },
  {
    kind: "state", slug: "georgia", name: "Georgia", stateName: "Georgia", stateSlug: "georgia",
    title: "Georgia Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Georgia hurricane preparedness for 2026: coastal evacuation zones, routes, emergency kits, official alerts, shelters, surge, inland wind, and flooding.",
    risk: [
      "Georgia has a relatively short Atlantic shoreline but an intricate coast of barrier islands, sounds, marshes, tidal rivers, and low mainland communities. The shape of the coast can amplify surge around Savannah, Brunswick, St. Marys, and the Sea Islands even when the storm center lands elsewhere.",
      "Hurricanes approaching Florida or South Carolina can still bring Georgia dangerous onshore flow, tornadoes, heavy rainfall, and long power outages. Inland counties face tree damage and river flooding, while coastal evacuation depends on bridges and a limited number of westbound corridors.",
      "Chatham County uses evacuation zones, and other coastal counties publish local maps and orders. Residents should know whether they are on an island, in a storm-surge area, or in housing vulnerable to wind, because those conditions create different evacuation triggers."
    ],
    history: [
      { storm: "Sea Islands hurricane (1893)", detail: "Produced catastrophic surge and loss of life across the Georgia and South Carolina Sea Islands." },
      { storm: "Cedar Keys hurricane (1896)", detail: "Crossed Florida and affected Georgia with damaging wind and rain." },
      { storm: "Georgia hurricane (1898)", detail: "A major coastal strike that caused destructive surge and wind near Brunswick." },
      { storm: "Florida Keys hurricane (1919)", detail: "Its large circulation affected the Southeast before the storm entered the Gulf." },
      { storm: "David (1979)", detail: "Moved along the Georgia coast after crossing Florida, producing wind and coastal effects." },
      { storm: "Hugo (1989)", detail: "Passed north into South Carolina but caused coastal Georgia surge and wind concerns." },
      { storm: "Floyd (1999)", detail: "Triggered extensive coastal evacuations despite turning north before a Georgia landfall." },
      { storm: "Matthew (2016)", detail: "Tracked just offshore and caused major coastal flooding, tree damage, and outages." },
      { storm: "Irma (2017)", detail: "Produced record coastal flooding in places despite its center passing inland to the west." },
      { storm: "Idalia (2023)", detail: "Crossed south Georgia after a Florida landfall with damaging wind, rain, and tornado risk." }
    ],
    evacuation: [
      "Look up the county evacuation zone and confirm the order locally. Chatham's zone system and coastal county maps focus on storm-surge and access risks; a flood-insurance zone is a different product.",
      "I-16 is the main Savannah-area inland route, with US 80, US 17, US 341, US 82, I-95, and county roads serving other locations. Contraflow on I-16 is activated only if officials announce it for the event.",
      "Plan around island bridges, port and freight traffic, fuel, pets, and a destination that is not also in the forecast impact area. Do not wait until tropical-storm-force winds reach bridges."
    ],
    resources: [
      { label: "Georgia Emergency Management", href: "https://gema.georgia.gov/" },
      { label: "Georgia hurricane information", href: "https://gema.georgia.gov/hurricanes" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Georgia", href: "https://www.redcross.org/local/georgia.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Georgia?", answer: "The Atlantic season is June 1 through November 30. Georgia can receive direct coastal impacts or inland effects from storms striking nearby states." },
      { question: "Where can I find Georgia evacuation zones?", answer: "Use county emergency management resources for the property address. Chatham and other coastal counties publish their own zone and route information." },
      { question: "Does Georgia reverse I-16 for every hurricane?", answer: "No. Contraflow is an event-specific decision. Follow current GEMA, county, and transportation announcements." },
      { question: "Has a major hurricane hit Georgia?", answer: "The 1898 Georgia hurricane was a major coastal strike. More recent Matthew and Irma showed that offshore or indirect storms can still cause severe coastal flooding." },
      { question: "What belongs in a Georgia hurricane kit?", answer: "Include seven days of supplies, medications, documents, pet needs, outage and heat planning, weather alerts, cleanup safety gear, and an island evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "virginia", name: "Virginia", stateName: "Virginia", stateSlug: "virginia",
    title: "Virginia Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Virginia hurricane preparedness for 2026: Know Your Zone, Hampton Roads evacuation, emergency kits, NWS alerts, tidal flooding, shelters, and safety.",
    risk: [
      "Virginia's hurricane risk combines the Atlantic shore, Chesapeake Bay, tidal rivers, and the dense Hampton Roads region. Water can rise through the bay and tributaries while bridges, tunnels, naval facilities, ports, and low roads constrain movement around Norfolk, Virginia Beach, Hampton, Newport News, Portsmouth, and the Eastern Shore.",
      "Many Virginia impacts come from storms that track inland or up the coast rather than make a direct major-hurricane landfall. Tropical rain can produce river flooding in central and western Virginia, while saturated soil and wind bring trees onto roads and power lines far from the shore.",
      "Know Your Zone applies to designated coastal localities and is built for evacuation decisions. Residents also need a separate plan for recurrent tidal flooding, mobile homes, medical equipment, pets, and high-rise buildings during power loss."
    ],
    history: [
      { storm: "Chesapeake-Potomac hurricane (1933)", detail: "Drove major water impacts into Chesapeake Bay and created the Ocean City inlet nearby." },
      { storm: "Hazel (1954)", detail: "Moved rapidly inland and caused damaging wind and flooding across Virginia." },
      { storm: "Camille remnants (1969)", detail: "Produced catastrophic flash flooding and landslides in Nelson County." },
      { storm: "Agnes (1972)", detail: "Brought widespread Mid-Atlantic river flooding after landfall to the south." },
      { storm: "David (1979)", detail: "Moved through the region with tornado, rain, and wind impacts." },
      { storm: "Gloria (1985)", detail: "Passed offshore and tested coastal preparation across the Mid-Atlantic." },
      { storm: "Fran (1996)", detail: "Moved inland from North Carolina and caused flooding and wind damage in Virginia." },
      { storm: "Floyd (1999)", detail: "Produced significant rainfall and river flooding in southeast Virginia." },
      { storm: "Isabel (2003)", detail: "Brought destructive Chesapeake Bay surge, wind, and extensive power loss." },
      { storm: "Irene (2011)", detail: "Tracked through eastern Virginia with coastal flooding, wind, tornadoes, and outages." }
    ],
    evacuation: [
      "Use Virginia Know Your Zone for participating coastal localities. Zones A through D may be ordered in sequence based on surge, access, and forecast risk; only evacuate under the current local or state instruction.",
      "Hampton Roads routes include I-64, I-664, US 58, US 460, and local approaches to bridges and tunnels. Eastern Shore residents rely heavily on US 13 and the Chesapeake Bay Bridge-Tunnel, which can restrict traffic in high winds.",
      "Choose a destination beyond the coastal evacuation area and monitor 511 Virginia. Tunnel flooding, bridge restrictions, crashes, and traffic can change the best route before the weather reaches the neighborhood."
    ],
    resources: [
      { label: "Virginia Department of Emergency Management", href: "https://www.vaemergency.gov/" },
      { label: "Virginia Know Your Zone", href: "https://www.vaemergency.gov/know-your-zone" },
      { label: "FEMA Region 3", href: "https://www.fema.gov/about/organization/region-3" },
      { label: "American Red Cross Virginia", href: "https://www.redcross.org/local/virginia.html" }
    ],
    faqs: [
      { question: "When is Virginia hurricane season?", answer: "Atlantic season runs June 1 through November 30. Virginia's coastal and inland flood risk is usually greatest from late summer into fall." },
      { question: "What do Virginia zones A through D mean?", answer: "They are Know Your Zone coastal evacuation designations. Check the address and evacuate only according to the current instruction for that zone." },
      { question: "Can Hampton Roads bridges close in a hurricane?", answer: "Yes. Wind, water, crashes, or official controls can restrict bridges and tunnels, which is why exposed zones may receive early orders." },
      { question: "What hurricane is Virginia's planning benchmark?", answer: "Isabel is a key modern Chesapeake surge and outage benchmark, while Camille's remnants demonstrate Virginia's lethal inland flash-flood risk." },
      { question: "What should a Virginia kit include?", answer: "Store seven days of essentials, medication, documents, weather alerts, pet supplies, safe power options, flood and cold-rain gear, and a portable coastal evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "alabama", name: "Alabama", stateName: "Alabama", stateSlug: "alabama",
    title: "Alabama Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Alabama hurricane preparedness for 2026: Mobile Bay evacuation, emergency kits, NWS alerts, shelters, surge, tornadoes, inland flooding, and safety.",
    risk: [
      "Alabama's coastline is compact but includes Mobile Bay, Dauphin Island, Gulf Shores, Orange Beach, coastal rivers, and low communities where surge can travel well beyond the open beach. A landfall west of Mobile Bay can drive water into the bay, while an eastern landfall may still bring severe wind and tornadoes.",
      "Tropical impacts extend north through the state. Fast-moving rain bands can produce tornadoes, flash floods, and falling trees, and weakening storms may retain damaging wind far inland. Mobile homes and households relying on electric medical equipment need shelter decisions before winds begin.",
      "Evacuation instructions are local and depend on surge zones, islands, housing, and forecast track. Residents should coordinate plans across Mobile and Baldwin counties and should not assume that crossing one bay or county line removes all risk."
    ],
    history: [
      { storm: "Mobile hurricane (1906)", detail: "A major Gulf hurricane that caused severe surge and wind damage around Mobile Bay." },
      { storm: "September hurricane (1916)", detail: "Struck the central Gulf Coast and produced significant Alabama wind and water impacts." },
      { storm: "Baker (1950)", detail: "Crossed the Gulf Coast and brought damaging conditions to southern Alabama." },
      { storm: "Frederic (1979)", detail: "A Category 3 landfall on Dauphin Island that devastated Mobile and Baldwin counties." },
      { storm: "Elena (1985)", detail: "Stalled and shifted in the Gulf, causing prolonged coastal preparation and effects." },
      { storm: "Georges (1998)", detail: "Made landfall near the Mississippi-Alabama line with surge, rain, and wind impacts." },
      { storm: "Ivan (2004)", detail: "A Category 3 landfall near Gulf Shores with major coastal and inland wind damage." },
      { storm: "Katrina (2005)", detail: "Landfall to the west still produced destructive Alabama surge and coastal damage." },
      { storm: "Nate (2017)", detail: "Made a fast-moving landfall near the Mississippi-Alabama border." },
      { storm: "Sally (2020)", detail: "A slow Category 2 Gulf Shores landfall with extreme rainfall and prolonged wind." }
    ],
    evacuation: [
      "Use Mobile or Baldwin County emergency management maps and orders for the address. Dauphin Island, Fort Morgan, low surge areas, and vulnerable housing may be prioritized even when other residents shelter locally.",
      "I-65 is the principal route north from Mobile, with I-10, US 45, US 43, US 98, US 31, and state routes connecting coastal communities. Bridge and causeway conditions can affect choices around Mobile Bay.",
      "Leave before wind makes bridges unsafe and never cross flooded roads. Confirm that the destination is outside both the surge area and the inland wind or tornado risk for the current storm."
    ],
    resources: [
      { label: "Alabama Emergency Management Agency", href: "https://ema.alabama.gov/" },
      { label: "Alabama hurricane preparedness", href: "https://ema.alabama.gov/hurricane-preparedness/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Alabama and Mississippi", href: "https://www.redcross.org/local/alabama.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Alabama?", answer: "Atlantic season is June 1 through November 30. Alabama's central Gulf location makes late summer and early fall especially important for monitoring." },
      { question: "Does Alabama use statewide evacuation zones?", answer: "Coastal counties and local officials issue address-specific maps and orders. Check Mobile or Baldwin County guidance rather than relying on one statewide label." },
      { question: "Can Alabama order coastal residents to evacuate?", answer: "Yes. Local authorities may order islands, surge areas, vulnerable housing, or other threatened locations to leave." },
      { question: "What hurricane is Alabama's benchmark?", answer: "Frederic and Ivan are major wind benchmarks, while Sally demonstrates how a slower, lower-category storm can create extreme rainfall and long-duration impacts." },
      { question: "What should an Alabama hurricane kit include?", answer: "Prepare seven days of supplies, medicines, documents, pet needs, weather alerts, safe generator practices, tornado shelter items, and a portable coastal evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "mississippi", name: "Mississippi", stateName: "Mississippi", stateSlug: "mississippi",
    title: "Mississippi Hurricane Preparedness 2026: Zones & Safety",
    description: "Mississippi hurricane preparedness for 2026: Gulf Coast evacuation, emergency kits, alerts, shelters, storm surge, mobile homes, flooding, and safety.",
    risk: [
      "Mississippi's Gulf Coast includes low mainland neighborhoods, beaches, bays, rivers, casinos, ports, and communities connected by bridges. Hancock, Harrison, and Jackson counties can experience life-threatening surge even when the hurricane center crosses Louisiana or Alabama.",
      "The state's risk reaches inland through tornadoes, falling trees, river flooding, extreme heat, and long power outages. Mobile and manufactured homes are especially vulnerable to hurricane winds and tornadoes, so residents need a sturdy shelter or evacuation plan before watches become warnings.",
      "US 90 and other coastal roads can flood early, while I-10 carries local, freight, and regional evacuation traffic. Households should know county instructions, keep several inland routes, and plan for medical, pet, and transportation needs without waiting for visible coastal flooding."
    ],
    history: [
      { storm: "Mississippi hurricane (1906)", detail: "Produced severe wind and storm surge along the central Gulf Coast." },
      { storm: "Grand Isle hurricane (1909)", detail: "Affected the Mississippi coast after a destructive Louisiana strike." },
      { storm: "September hurricane (1915)", detail: "Brought damaging Gulf surge and wind to Mississippi and nearby states." },
      { storm: "Camille (1969)", detail: "A Category 5 landfall near Bay St. Louis with catastrophic surge and wind." },
      { storm: "Elena (1985)", detail: "A Category 3 landfall near Biloxi after an erratic Gulf track and extended preparation period." },
      { storm: "Georges (1998)", detail: "Made landfall near Biloxi with surge, wind, and very heavy rainfall." },
      { storm: "Katrina (2005)", detail: "A Category 3 Mississippi landfall that generated catastrophic Gulf Coast storm surge." },
      { storm: "Gustav (2008)", detail: "Landfall to the west still brought surge, rain, and tornado threats into Mississippi." },
      { storm: "Nate (2017)", detail: "Made landfall at the mouth of the Mississippi River and again near Biloxi." },
      { storm: "Zeta (2020)", detail: "A fast-moving hurricane that crossed the coast with destructive wind and outages." }
    ],
    evacuation: [
      "Use Hancock, Harrison, or Jackson County emergency management guidance for the address. Coastal surge areas, low roads, mobile homes, and medically vulnerable settings may have different evacuation triggers.",
      "I-10, I-59, I-55, US 49, US 45, and state highways lead inland, while US 90 is highly exposed to coastal water. Officials may control routes according to the storm; do not assume contraflow or use a flooded shortcut.",
      "Choose a sturdy inland destination and leave before bridge winds or surge affect access. Keep enough fuel and supplies for traffic delays and verify that the destination is not threatened by inland flooding or tornadoes."
    ],
    resources: [
      { label: "Mississippi Emergency Management Agency", href: "https://www.msema.org/" },
      { label: "Mississippi hurricane preparedness", href: "https://www.msema.org/preparedness-2/hurricanes/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Mississippi", href: "https://www.redcross.org/local/alabama/about-us/locations/mississippi.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Mississippi?", answer: "Atlantic season runs June 1 through November 30, with Gulf Coast risk often highest from August into October." },
      { question: "Where are Mississippi hurricane evacuation zones?", answer: "Coastal counties publish local surge and evacuation information. Confirm the address with county emergency management instead of relying only on an insurance flood map." },
      { question: "Should mobile-home residents evacuate?", answer: "A mobile home is not safe in hurricane or tornado winds. Follow local orders and arrange a sturdy shelter or safer destination before conditions deteriorate." },
      { question: "What was Mississippi's worst hurricane?", answer: "Camille is the extreme wind benchmark and Katrina produced catastrophic regional surge. Both show why category alone does not describe the water threat." },
      { question: "What should a Mississippi kit contain?", answer: "Store seven days of essentials, medicines, documents, weather alerts, pet supplies, safe power options, heat and cleanup gear, and a portable evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "new-york", name: "New York", stateName: "New York", stateSlug: "new-york",
    title: "New York Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "New York hurricane preparedness for 2026: NYC evacuation zones, Long Island surge, emergency kits, alerts, transit, flooding, shelters, and safety.",
    risk: [
      "New York's hurricane exposure includes New York Harbor, the Hudson estuary, Long Island's south shore and forks, the Rockaways, Staten Island, low subway and tunnel entrances, and dense coastal neighborhoods. A large storm can push water into the harbor and bays while disrupting transit, elevators, utilities, and health services.",
      "Tropical impacts also reach the Hudson Valley, Catskills, Adirondacks, and western New York as flash floods, river floods, landslides, falling trees, and long outages. The storm may be weakening or post-tropical while rainfall and water remain life-threatening.",
      "New York City uses numbered hurricane evacuation zones, while Nassau, Suffolk, Westchester, and other counties issue separate coastal and local guidance. Apartment residents should plan for elevator loss, heat, water service, medication refrigeration, and evacuation without a private vehicle."
    ],
    history: [
      { storm: "New York hurricane (1821)", detail: "A fast major hurricane produced a significant rise of water in New York Harbor." },
      { storm: "Great Atlantic hurricane (1944)", detail: "Brought destructive coastal wind, waves, and flooding to Long Island and the region." },
      { storm: "Carol (1954)", detail: "Severely affected southern New England and brought coastal impacts to eastern New York." },
      { storm: "Connie (1955)", detail: "Delivered heavy rainfall before Diane compounded Mid-Atlantic and Northeast flooding." },
      { storm: "Diane (1955)", detail: "Produced severe regional rain and flooding after Connie saturated the area." },
      { storm: "Donna (1960)", detail: "Crossed Long Island during a long series of East Coast impacts." },
      { storm: "Belle (1976)", detail: "Made landfall on Long Island and caused coastal and wind damage." },
      { storm: "Gloria (1985)", detail: "Made landfall on Long Island with widespread tree damage and power loss." },
      { storm: "Irene (2011)", detail: "Brought New York City evacuation actions and devastating inland flooding upstate." },
      { storm: "Sandy (2012)", detail: "A post-tropical cyclone that produced catastrophic harbor surge, fires, transit flooding, and outages." }
    ],
    evacuation: [
      "New York City residents should use the official hurricane evacuation-zone finder, which is different from FEMA flood insurance mapping. Local officials announce which numbered zones must leave and where evacuation centers open.",
      "Long Island and other counties issue their own coastal guidance. Routes may include the Long Island Expressway, parkways, local arterials, bridges, ferries, buses, and rail, but closures and transit shutdown timing are event-specific.",
      "Plan a car-free option, accessible transportation, and a destination outside the ordered zone. Leave before the MTA or local transit suspends service and never enter a flooded subway, underpass, basement, or roadway."
    ],
    resources: [
      { label: "New York State emergency information", href: "https://www.dhses.ny.gov/safety-and-prevention" },
      { label: "NYC hurricane evacuation zones", href: "https://www.nyc.gov/site/em/ready/coastal-storms-hurricanes.page" },
      { label: "FEMA Region 2", href: "https://www.fema.gov/about/organization/region-2" },
      { label: "American Red Cross Greater New York", href: "https://www.redcross.org/local/new-york/greater-new-york.html" }
    ],
    faqs: [
      { question: "When is hurricane season in New York?", answer: "Atlantic season runs June 1 through November 30. New York tropical threats are most common from August into October, including transitioning or post-tropical systems." },
      { question: "How do NYC hurricane evacuation zones work?", answer: "The city maps numbered zones based on coastal storm risk. Officials announce which zones evacuate; the zones are not the same as insurance flood zones." },
      { question: "Can New York evacuate people without cars?", answer: "Emergency plans can use public transit and accessible services, but service may stop before conditions worsen. Identify the official car-free plan and leave during the announced window." },
      { question: "Was Sandy a hurricane in New York?", answer: "Sandy transitioned to post-tropical shortly before landfall, but its classification did not reduce the catastrophic surge and infrastructure impacts." },
      { question: "What should a New York hurricane kit include?", answer: "Prepare seven days of essentials, medicines, documents, batteries, elevator and transit contingencies, pet supplies, flood safety items, and a portable apartment evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "new-jersey", name: "New Jersey", stateName: "New Jersey", stateSlug: "new-jersey",
    title: "New Jersey Hurricane Preparedness 2026: Zones & Safety",
    description: "New Jersey hurricane preparedness for 2026: Shore evacuation routes, emergency kits, county alerts, shelters, surge, barrier islands, flooding, and safety.",
    risk: [
      "New Jersey's Atlantic barrier islands, back bays, tidal rivers, Delaware Bay shore, and densely developed coastline create major surge and access risk. Water can approach communities from the ocean and bay sides, isolating islands and flooding roads before the storm center arrives.",
      "North Jersey faces additional river, urban, and infrastructure flooding around the Hackensack, Passaic, Hudson, and low transportation corridors. Tropical remnants can produce destructive inland rainfall even when Shore wind or surge is limited.",
      "Evacuation is managed through county and local plans rather than one universal statewide zone label. Seasonal visitors should know the municipality, mainland route, bridge plan, and alert system for their rental before a watch is issued."
    ],
    history: [
      { storm: "Gale of 1878", detail: "A powerful hurricane affected the Mid-Atlantic with severe coastal and maritime damage." },
      { storm: "Atlantic City hurricane (1903)", detail: "Made a rare New Jersey landfall and damaged the coast." },
      { storm: "Chesapeake-Potomac hurricane (1933)", detail: "Produced significant Mid-Atlantic coastal water and wind impacts." },
      { storm: "Great Atlantic hurricane (1944)", detail: "Brought destructive waves, wind, and coastal flooding along the Jersey Shore." },
      { storm: "Hazel (1954)", detail: "Moved rapidly inland and caused damaging wind across New Jersey." },
      { storm: "Connie (1955)", detail: "Heavy rain saturated the region before Diane added major flooding." },
      { storm: "Diane (1955)", detail: "Contributed to severe river and flash flooding in the Northeast." },
      { storm: "Gloria (1985)", detail: "Passed east of the state with coastal wind, waves, and outages." },
      { storm: "Irene (2011)", detail: "Produced major inland river flooding despite weakening near the region." },
      { storm: "Sandy (2012)", detail: "A post-tropical landfall near Brigantine with catastrophic Shore surge and widespread outages." }
    ],
    evacuation: [
      "Use county and municipal evacuation maps and alerts for the Shore address. Barrier-island residents and visitors may be ordered out before mainland areas because bridge winds, overwash, and bay flooding can cut access.",
      "The Garden State Parkway, Atlantic City Expressway, New Jersey Turnpike, US routes, and local westbound roads may carry evacuation traffic. Officials determine route controls, toll measures, and transit service for the event.",
      "Move vehicles and supplies before water reaches local roads, and choose a destination beyond both coastal surge and inland river flood risk. Never drive around barriers or into saltwater-covered streets."
    ],
    resources: [
      { label: "New Jersey Office of Emergency Management", href: "https://www.nj.gov/njoem/" },
      { label: "ReadyNJ hurricane safety", href: "https://www.nj.gov/njoem/plan-prepare/hurricanes.shtml" },
      { label: "FEMA Region 2", href: "https://www.fema.gov/about/organization/region-2" },
      { label: "American Red Cross New Jersey", href: "https://www.redcross.org/local/new-jersey.html" }
    ],
    faqs: [
      { question: "When is New Jersey hurricane season?", answer: "Atlantic season is June 1 through November 30, with most New Jersey tropical impacts occurring in late summer or fall." },
      { question: "Does New Jersey have hurricane evacuation zones?", answer: "Counties and municipalities maintain local coastal plans and maps. Confirm the Shore address with local emergency management." },
      { question: "When should barrier-island residents leave?", answer: "Follow the local order and leave early enough to cross the bridge before wind, flooding, or traffic restricts access." },
      { question: "Was Sandy New Jersey's worst storm?", answer: "Sandy is the defining modern Shore surge disaster. Irene demonstrates that inland river flooding can also be severe." },
      { question: "What belongs in a New Jersey hurricane kit?", answer: "Store seven days of supplies, medicine, documents, weather alerts, pet needs, outage and basement-flood plans, and a portable barrier-island evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "massachusetts", name: "Massachusetts", stateName: "Massachusetts", stateSlug: "massachusetts",
    title: "Massachusetts Hurricane Preparedness 2026: Zones & Safety",
    description: "Massachusetts hurricane preparedness for 2026: Cape and Islands evacuation, emergency kits, alerts, shelters, surge, outages, flooding, and safety.",
    risk: [
      "Massachusetts faces Atlantic hurricane risk along the South Coast, Buzzards Bay, Cape Cod, Martha's Vineyard, Nantucket, Boston Harbor, and the North Shore. Bays, inlets, beaches, and low roads can experience surge and waves, while exposed islands depend on ferries and airports that stop before dangerous weather.",
      "New England storms can move quickly, carry strong wind far from the center, and transition into post-tropical systems without ending the hazard. Trees, overhead utilities, older housing, boats, and saturated soil contribute to long outages and blocked roads inland.",
      "Cape Cod has limited highway capacity across the canal, and coastal towns manage local evacuation and shelter guidance. Residents should plan around summer visitors, bridge traffic, accessible transport, heating or cooling needs, and the possibility that ferry service will not resume immediately."
    ],
    history: [
      { storm: "Great Colonial hurricane (1635)", detail: "An early benchmark storm that produced extreme coastal effects in southern New England." },
      { storm: "Great New England hurricane (1938)", detail: "A fast major hurricane that caused catastrophic wind and surge across the region." },
      { storm: "Great Atlantic hurricane (1944)", detail: "Brought destructive wind, waves, and coastal flooding to Massachusetts." },
      { storm: "Carol (1954)", detail: "A major New England hurricane that caused severe surge and wind in Massachusetts." },
      { storm: "Edna (1954)", detail: "Struck soon after Carol and added wind, rain, and coastal damage." },
      { storm: "Diane (1955)", detail: "Its remnants contributed to serious regional rainfall and flooding." },
      { storm: "Donna (1960)", detail: "Passed through New England after affecting much of the East Coast." },
      { storm: "Gloria (1985)", detail: "Crossed southern New England with tree damage and widespread outages." },
      { storm: "Bob (1991)", detail: "A Category 2 New England landfall that heavily affected Cape Cod and the Islands." },
      { storm: "Irene (2011)", detail: "Produced strong wind and destructive inland flooding across western New England." }
    ],
    evacuation: [
      "Use municipal and Massachusetts emergency guidance for the address. Local officials identify surge-prone neighborhoods, shelters, and evacuation areas; Cape and island plans differ from Boston or South Coast plans.",
      "Routes from Cape Cod rely heavily on US 6, Route 28, Route 3, and the Sagamore and Bourne bridges. Ferries and flights to Martha's Vineyard and Nantucket may suspend well before tropical-storm-force winds.",
      "Leave during the official window, not after traffic or bridge restrictions begin. Secure boats early, select a mainland destination outside surge areas, and prepare for blocked roads and extended power loss after the storm."
    ],
    resources: [
      { label: "Massachusetts Emergency Management Agency", href: "https://www.mass.gov/orgs/massachusetts-emergency-management-agency" },
      { label: "Massachusetts hurricane safety", href: "https://www.mass.gov/info-details/hurricane-safety-tips" },
      { label: "FEMA Region 1", href: "https://www.fema.gov/about/organization/region-1" },
      { label: "American Red Cross Massachusetts", href: "https://www.redcross.org/local/massachusetts.html" }
    ],
    faqs: [
      { question: "When is Massachusetts hurricane season?", answer: "Atlantic season runs June 1 through November 30. New England's greatest historical hurricane risk is usually from August through October." },
      { question: "Does Massachusetts have one evacuation-zone map?", answer: "Local municipalities and state agencies provide event and area guidance. Check the exact coastal town rather than expecting one statewide lettering system." },
      { question: "When do Cape Cod and island travelers leave?", answer: "Follow local instructions and move before bridges, ferries, or flights are restricted. Ferry service can stop well before the worst weather." },
      { question: "What hurricane defines Massachusetts risk?", answer: "The 1938 hurricane, Carol, and Bob are key wind and surge benchmarks for southern New England." },
      { question: "What should a Massachusetts hurricane kit include?", answer: "Prepare seven days of food and water, medication, documents, radio and batteries, pet supplies, boat and outage planning, warm rain gear, and a portable evacuation kit." }
    ]
  },
  {
    kind: "city", slug: "miami", name: "Miami", stateName: "Florida", stateSlug: "florida",
    title: "Miami Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Miami hurricane preparedness for 2026: Miami-Dade evacuation zones, official alerts, storm surge, emergency routes, history, and safety.",
    risk: [
      "Miami sits near the warm western Atlantic at the southeast edge of the Florida peninsula. Biscayne Bay, low coastal neighborhoods, canals, barrier islands, high-rise buildings, and porous limestone create distinct storm-surge, rainfall, wind, and drainage problems across Miami-Dade County.",
      "A forecast track east of Miami can still produce dangerous surf, rip currents, tornadoes, and wind, while a track through the Straits or from the southwest can drive water into the bay. Residents should watch the NHC cone, wind field, surge products, and local warnings rather than focus on the center line.",
      "High-rise residents need plans for elevator shutdown, broken glass, pressure changes, water loss, and heat after power failure. Households in older homes, mobile homes, coastal zones, or with medical needs should identify a safer building and transportation before an order."
    ],
    history: [
      { storm: "Miami hurricane (1926)", detail: "A major hurricane crossed the city and produced devastating wind and Biscayne Bay surge." },
      { storm: "Okeechobee hurricane (1928)", detail: "Crossed South Florida and caused catastrophic Lake Okeechobee flooding after coastal impacts." },
      { storm: "Labor Day hurricane (1935)", detail: "Struck the Florida Keys at Category 5 intensity and affected the broader South Florida region." },
      { storm: "Betsy (1965)", detail: "Crossed the Upper Keys and South Florida with damaging wind and flooding before entering the Gulf." },
      { storm: "Inez (1966)", detail: "Passed through the Florida Keys and brought wind, rain, and marine impacts near Miami." },
      { storm: "David (1979)", detail: "Tracked near southeast Florida with coastal wind and rain effects." },
      { storm: "Andrew (1992)", detail: "A Category 5 south Miami-Dade landfall that devastated Homestead and nearby communities." },
      { storm: "Katrina (2005)", detail: "Crossed South Florida as a Category 1 hurricane with flooding and outages before entering the Gulf." },
      { storm: "Wilma (2005)", detail: "Crossed the peninsula and caused major wind damage and widespread power loss in Miami-Dade." },
      { storm: "Irma (2017)", detail: "Passed west after striking the Keys but still produced wind, bay flooding, tornado risk, and outages." }
    ],
    evacuation: [
      "Miami-Dade uses storm-surge Planning Zones A through F. Find the address in the county tool; officials announce which zones evacuate for the storm. The letters are not hurricane categories and are different from FEMA insurance flood zones.",
      "Routes depend on origin and destination and may use I-95, Florida's Turnpike, the Palmetto Expressway, Dolphin Expressway, US 1, and local arterials. Traffic from the Keys and coastal zones can affect all corridors.",
      "Use Miami-Dade alerts and road information, leave during the announced window, and choose a destination outside the ordered zone and forecast risk. Do not shelter in a vehicle, parking garage, or flooded high-rise basement."
    ],
    resources: [
      { label: "Miami-Dade emergency management", href: "https://www.miamidade.gov/global/emergency/home.page" },
      { label: "Miami-Dade storm surge planning zones", href: "https://www.miamidade.gov/global/emergency/hurricane/storm-surge-zones.page" },
      { label: "NWS Miami", href: "https://www.weather.gov/mfl/" },
      { label: "American Red Cross South Florida", href: "https://www.redcross.org/local/florida/south-florida.html" }
    ],
    faqs: [
      { question: "Is a hurricane threatening Miami now?", answer: "Check the HurricaneHub live tracker, the latest NHC advisory, and NWS Miami alerts. This standing page does not itself indicate a current threat." },
      { question: "What Miami-Dade evacuation zone am I in?", answer: "Use the county Storm Surge Planning Zone tool for the exact address. Zones A through F reflect surge planning, not storm category." },
      { question: "Should Miami high-rise residents evacuate?", answer: "Follow the order for the address and building. High-rises outside evacuation zones still need plans for glass, elevators, water, heat, and prolonged outages." },
      { question: "Which hurricane caused Miami's greatest damage?", answer: "The 1926 Miami hurricane devastated the city, while Andrew in 1992 destroyed communities in south Miami-Dade and reshaped building standards." }
    ]
  },
  {
    kind: "city", slug: "tampa", name: "Tampa", stateName: "Florida", stateSlug: "florida",
    title: "Tampa Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Tampa hurricane preparedness for 2026: Hillsborough evacuation zones, official alerts, storm surge, routes, history, and safety.",
    risk: [
      "Tampa lies at the upper end of a shallow bay connected to the Gulf of Mexico. Onshore winds can push water through Tampa Bay toward low neighborhoods, rivers, ports, causeways, and critical infrastructure, making surge a central planning hazard.",
      "The exact track matters for wind direction, but residents should not wait for an exact landfall forecast. A large hurricane passing west or north can produce surge, tornadoes, rainfall flooding, and long outages across Hillsborough, Pinellas, and Pasco counties.",
      "Bridges and causeways connect many evacuation areas and may close in high wind. Dense development, tourists, older mobile homes, and households crossing county lines can create heavy traffic before conditions reach the bay."
    ],
    history: [
      { storm: "Tampa Bay hurricane (1848)", detail: "A major historical hurricane produced severe Tampa Bay storm surge." },
      { storm: "Tampa Bay hurricane (1921)", detail: "Made landfall near Tarpon Springs and caused major bay flooding and regional damage." },
      { storm: "Labor Day hurricane (1935)", detail: "Affected Florida broadly after its catastrophic Keys landfall." },
      { storm: "Easy (1950)", detail: "Moved slowly near the Gulf Coast and produced extreme rainfall in west-central Florida." },
      { storm: "Donna (1960)", detail: "Crossed southwest Florida and affected the Tampa Bay region with wind and rain." },
      { storm: "Elena (1985)", detail: "Stalled offshore and generated prolonged surge, waves, and evacuation pressure." },
      { storm: "Charley (2004)", detail: "Turned into southwest Florida south of Tampa, illustrating track uncertainty near landfall." },
      { storm: "Irma (2017)", detail: "Passed east of Tampa Bay, producing wind and unusual water movement in the bay." },
      { storm: "Ian (2022)", detail: "Shifted south before landfall, again demonstrating the danger of planning around one point." },
      { storm: "Idalia (2023)", detail: "Passed west and north with coastal flooding and surge around west-central Florida." }
    ],
    evacuation: [
      "Hillsborough County uses evacuation zones A through E based on storm-surge risk. Check the address; neighboring Pinellas and Pasco counties maintain their own zone tools and orders.",
      "Routes can include I-275, I-75, I-4, the Veterans Expressway, Selmon Expressway, US 19, US 301, and local roads. Bridges across Tampa Bay may become unsafe or restricted before peak wind.",
      "Evacuate tens of miles to sturdy shelter when possible rather than driving hundreds of miles through congestion. Follow the county order and verify the destination's zone, flood, and outage risk."
    ],
    resources: [
      { label: "Hillsborough County emergency management", href: "https://hcfl.gov/residents/public-safety/emergency-management" },
      { label: "Hillsborough evacuation zones", href: "https://hcfl.gov/residents/public-safety/emergency-management/find-evacuation-information" },
      { label: "NWS Tampa Bay", href: "https://www.weather.gov/tbw/" },
      { label: "American Red Cross Central Florida", href: "https://www.redcross.org/local/florida/central-florida.html" }
    ],
    faqs: [
      { question: "Is Tampa Bay under a hurricane threat?", answer: "Use the current NHC feed, NWS Tampa Bay alerts, and county notices. A permanent tracker page does not mean a storm is approaching." },
      { question: "What Tampa evacuation zone is my home in?", answer: "Enter the address in Hillsborough County's zone tool. Zone letters describe surge planning and do not match hurricane categories." },
      { question: "Do Tampa Bay bridges close in hurricanes?", answer: "High wind, water, crashes, or official controls can restrict bridges, so residents in ordered zones should leave during the announced window." },
      { question: "Has Tampa had a direct hurricane hit?", answer: "The 1921 Tampa Bay hurricane is the main modern historical direct-strike benchmark; nearby storms have repeatedly produced regional surge and wind." }
    ]
  },
  {
    kind: "city", slug: "orlando", name: "Orlando", stateName: "Florida", stateSlug: "florida",
    title: "Orlando Hurricane Preparedness 2026: Flood & Safety Guide",
    description: "Orlando hurricane preparedness for 2026: official alerts, inland wind, tornadoes, flooding, shelters, emergency kits, and local safety.",
    risk: [
      "Orlando is inland and outside coastal storm-surge zones, but that does not make it hurricane-proof. Tropical cyclones crossing the peninsula can retain hurricane or tropical-storm wind, produce tornadoes in rain bands, overwhelm drainage, and knock trees onto homes and power lines.",
      "Central Florida often receives evacuees from both coasts, so hotels, roads, fuel, shelters, and medical services may be busy before local conditions deteriorate. Residents should protect their own household while avoiding travel that interferes with coastal evacuation flows.",
      "Lakes, low roads, construction, saturated soil, mobile homes, and extended heat after power loss are important Orlando risks. Theme parks and airports make their own operational decisions, while Orange County and local officials control public shelter information."
    ],
    history: [
      { storm: "Donna (1960)", detail: "Crossed central Florida and brought hurricane conditions into the peninsula." },
      { storm: "David (1979)", detail: "Affected central Florida after tracking along the Atlantic side of the state." },
      { storm: "Floyd (1999)", detail: "Prompted major preparation and coastal evacuation traffic despite turning offshore." },
      { storm: "Charley (2004)", detail: "Crossed Orlando with destructive hurricane-force wind after a southwest Florida landfall." },
      { storm: "Frances (2004)", detail: "Moved slowly through central Florida with prolonged wind, rain, and outages." },
      { storm: "Jeanne (2004)", detail: "Crossed central Florida weeks after Frances, compounding property and power impacts." },
      { storm: "Fay (2008)", detail: "Produced prolonged central Florida rainfall and flooding during an unusual multi-landfall track." },
      { storm: "Matthew (2016)", detail: "Stayed near the east coast but affected Orlando with wind, rain, closures, and evacuees." },
      { storm: "Irma (2017)", detail: "Crossed the peninsula and caused widespread central Florida wind damage and outages." },
      { storm: "Ian (2022)", detail: "Produced severe inland flooding across central Florida after its southwest coast landfall." }
    ],
    evacuation: [
      "Orlando residents generally do not evacuate for coastal surge, but mobile-home residents, people in flood-prone housing, and those with medical or power needs may need a sturdy shelter or planned destination.",
      "I-4, Florida's Turnpike, SR 408, SR 417, SR 528, US 17-92, US 441, and local roads carry both local and coastal traffic. Do not make unnecessary long-distance trips across evacuation routes.",
      "Orange County announces shelters and any local protective actions for the event. Confirm pet, accessibility, identification, bedding, and medication requirements before traveling to a shelter."
    ],
    resources: [
      { label: "Orange County emergency management", href: "https://www.orangecountyfl.net/EmergencySafety/EmergencyManagement.aspx" },
      { label: "Orange County hurricane safety", href: "https://www.orangecountyfl.net/EmergencySafety/HurricaneSafetyGuide.aspx" },
      { label: "NWS Melbourne", href: "https://www.weather.gov/mlb/" },
      { label: "American Red Cross Central Florida", href: "https://www.redcross.org/local/florida/central-florida.html" }
    ],
    faqs: [
      { question: "Can a hurricane reach Orlando?", answer: "Yes. Orlando is inland, but hurricanes and tropical storms can retain damaging wind and produce tornadoes, flooding, and extended outages." },
      { question: "Is Orlando in a hurricane evacuation zone?", answer: "Orlando is not in a coastal surge zone. Local shelter or evacuation guidance may still apply to mobile homes, flood-prone housing, or medical needs." },
      { question: "Which NWS office covers Orlando?", answer: "NWS Melbourne provides forecasts and warnings for Orange County and much of east-central Florida." },
      { question: "What was Orlando's most damaging recent hurricane?", answer: "Charley in 2004 brought destructive wind through the city, while Ian in 2022 demonstrated severe inland flood risk." }
    ]
  },
  {
    kind: "city", slug: "jacksonville", name: "Jacksonville", stateName: "Florida", stateSlug: "florida",
    title: "Jacksonville Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Jacksonville hurricane preparedness for 2026: Duval evacuation zones, official alerts, river and coastal flooding, routes, and safety.",
    risk: [
      "Jacksonville spans the Atlantic coast, St. Johns River, Intracoastal Waterway, tributaries, wetlands, and a large inland area. Ocean surge, river rise, rainfall, and tide can combine differently across Jacksonville Beach, Mayport, downtown, and river neighborhoods.",
      "The city can receive major impacts from storms passing offshore, crossing Florida, or moving north through Georgia. Nor'easter-like onshore flow after a tropical system can prolong beach erosion and water levels after the center moves away.",
      "Duval County's size means one forecast does not create the same risk everywhere. Residents need the address-specific evacuation zone, housing assessment, bridge plan, and local flood information rather than assuming all of Jacksonville evacuates."
    ],
    history: [
      { storm: "Cedar Keys hurricane (1896)", detail: "Crossed Florida and brought damaging conditions to northeast Florida." },
      { storm: "Georgia hurricane (1898)", detail: "Affected the northeast Florida and Georgia coastal region with wind and water." },
      { storm: "Dora (1964)", detail: "Made a rare direct northeast Florida hurricane landfall near St. Augustine." },
      { storm: "David (1979)", detail: "Tracked along Florida's Atlantic side with northeast Florida coastal effects." },
      { storm: "Floyd (1999)", detail: "Prompted extensive evacuation before turning north, stressing regional routes." },
      { storm: "Frances (2004)", detail: "Crossed Florida and brought rain, wind, and tornado risk to Jacksonville." },
      { storm: "Jeanne (2004)", detail: "Added wind and rain impacts during Florida's exceptionally active season." },
      { storm: "Matthew (2016)", detail: "Passed just offshore with destructive beach erosion, surge, flooding, and wind." },
      { storm: "Irma (2017)", detail: "Produced record St. Johns River flooding despite tracking west of the city." },
      { storm: "Nicole (2022)", detail: "Brought coastal erosion, high water, wind, and rain to northeast Florida." }
    ],
    evacuation: [
      "Duval County uses evacuation zones A through F. Check the exact address; officials may order coastal, river, mobile-home, or other vulnerable areas while residents elsewhere shelter safely.",
      "I-10 is the main westbound corridor, with I-95, I-295, US 1, US 17, US 90, and local roads serving different areas. Bridges over the St. Johns and Intracoastal can face wind or traffic restrictions.",
      "Leave during the local order and choose a destination away from river, coastal, and inland flood risk. Do not cross water-covered roads or return before city reentry guidance."
    ],
    resources: [
      { label: "JaxReady emergency management", href: "https://www.jaxready.com/" },
      { label: "Duval evacuation zones", href: "https://www.jaxready.com/evacuation-zones" },
      { label: "NWS Jacksonville", href: "https://www.weather.gov/jax/" },
      { label: "American Red Cross North Florida", href: "https://www.redcross.org/local/florida/north-florida.html" }
    ],
    faqs: [
      { question: "Is Jacksonville at risk from hurricanes?", answer: "Yes. Direct landfalls are less frequent than in south Florida, but offshore and indirect storms can produce dangerous coastal and St. Johns River flooding." },
      { question: "What Duval evacuation zone am I in?", answer: "Use JaxReady's address lookup for zones A through F and follow the current order for the property." },
      { question: "Can Jacksonville bridges close during a storm?", answer: "Wind, water, crashes, or official traffic controls can restrict bridges, so ordered zones should leave during the announced window." },
      { question: "Which storms caused Jacksonville's worst recent flooding?", answer: "Matthew caused major coastal effects in 2016, and Irma produced record St. Johns River flooding in 2017." }
    ]
  },
  {
    kind: "city", slug: "houston", name: "Houston", stateName: "Texas", stateSlug: "texas",
    title: "Houston Hurricane Preparedness 2026: Flood & Evacuation",
    description: "Houston hurricane preparedness for 2026: official alerts, ZIP evacuation zones, bayou flooding, surge, routes, history, and safety.",
    risk: [
      "Houston is inland from the open Gulf but connected to Galveston Bay through the Ship Channel and surrounded by bayous, reservoirs, flat terrain, and extensive development. The metro can face coastal surge in eastern areas, extreme rainfall, flash flooding, tornadoes, wind, heat, and prolonged power loss.",
      "A hurricane does not need to make landfall at Galveston to threaten Houston. Large or slow storms can place the region in persistent rain bands or onshore flow, while trees and infrastructure fail across a broad area beyond mapped floodplains.",
      "The evacuation decision differs between coastal ZIP zones, surge-exposed communities, mobile homes, flood-prone housing, and inland residents in sturdy structures. Unnecessary evacuation from low-risk areas can block routes used by the most exposed coast."
    ],
    history: [
      { storm: "Galveston hurricane (1900)", detail: "The deadliest U.S. natural disaster devastated Galveston and affected the developing region." },
      { storm: "Freeport hurricane (1932)", detail: "A major upper-coast strike that brought destructive wind and water near the region." },
      { storm: "Carla (1961)", detail: "A huge Category 4 Texas hurricane with broad surge, wind, and tornado impacts." },
      { storm: "Celia (1970)", detail: "Landfall occurred farther south but reinforced Texas wind preparedness." },
      { storm: "Alicia (1983)", detail: "A Category 3 Galveston-area landfall that caused major Houston wind damage." },
      { storm: "Jerry (1989)", detail: "Made an upper Texas coast landfall with local wind, rain, and surge." },
      { storm: "Tropical Storm Allison (2001)", detail: "Produced catastrophic Houston flooding despite never becoming a hurricane." },
      { storm: "Rita (2005)", detail: "Threatened Houston and triggered a deadly, congested regional evacuation before landfall to the east." },
      { storm: "Ike (2008)", detail: "Brought Galveston Bay surge, destructive metro wind, and widespread long outages." },
      { storm: "Harvey (2017)", detail: "Stalled over southeast Texas and caused catastrophic rainfall flooding across the metro." }
    ],
    evacuation: [
      "The Houston-Galveston region uses coastal ZIP evacuation zones for surge-threatened areas. Follow county and city instructions; many inland Houston residents are safer sheltering than joining coastal traffic unless local risks require leaving.",
      "Routes can include I-45, I-10, US 59/I-69, US 290, SH 225, SH 288, and beltways. TxDOT and officials decide any traffic controls or contraflow based on the event.",
      "Plan around bayou and underpass flooding, fuel, heat, pets, medical needs, and a destination outside the storm's inland path. Never drive into floodwater, even after wind subsides."
    ],
    resources: [
      { label: "Houston Office of Emergency Management", href: "https://www.houstonoem.org/" },
      { label: "Harris County emergency management", href: "https://www.readyharris.org/" },
      { label: "NWS Houston/Galveston", href: "https://www.weather.gov/hgx/" },
      { label: "American Red Cross Texas Gulf Coast", href: "https://www.redcross.org/local/texas/gulf-coast.html" }
    ],
    faqs: [
      { question: "Is Houston in a hurricane evacuation zone?", answer: "Some coastal and eastern Houston-region ZIP codes are in surge evacuation zones. Many inland residents are not; check the official ZIP-zone map and local order." },
      { question: "Should all Houston residents evacuate?", answer: "No. Mass unnecessary evacuation can obstruct coastal zones. Leave for an applicable order, unsafe housing, medical need, or credible local flood risk." },
      { question: "Which NWS office covers Houston?", answer: "NWS Houston/Galveston issues local forecasts, watches, warnings, and storm information for the region." },
      { question: "What storm best explains Houston risk?", answer: "Ike is a wind and surge benchmark; Harvey and Allison show that rainfall flooding can be catastrophic without a direct major-hurricane strike." }
    ]
  },
  {
    kind: "city", slug: "new-orleans", name: "New Orleans", stateName: "Louisiana", stateSlug: "louisiana",
    title: "New Orleans Hurricane Preparedness 2026: Evacuation & Surge",
    description: "New Orleans hurricane preparedness for 2026: official alerts, city evacuation guidance, levee and surge risk, routes, and safety.",
    risk: [
      "New Orleans lies between the Mississippi River, Lake Pontchartrain, surrounding wetlands, navigation channels, and low terrain. Hurricane risk includes regional storm surge, intense rainfall, wind, tornadoes, pump and power failure, and loss of access even where levees reduce some water risk.",
      "The Hurricane and Storm Damage Risk Reduction System and local drainage infrastructure reduce risk but cannot eliminate it. Residents should not use the presence of levees as a reason to ignore an evacuation order, and should not assume every neighborhood experiences the same source or depth of flooding.",
      "Many residents depend on public transportation, medical equipment, elevators, pets, and family support. City-assisted evacuation and shelter plans require early registration or clear pickup instructions, so transportation planning cannot wait until tropical-storm-force winds begin."
    ],
    history: [
      { storm: "Cheniere Caminada hurricane (1893)", detail: "A catastrophic southeast Louisiana surge disaster that shaped regional hurricane history." },
      { storm: "New Orleans hurricane (1915)", detail: "A major hurricane brought destructive wind and water to the city and surrounding parishes." },
      { storm: "Fort Lauderdale hurricane (1947)", detail: "Crossed Florida and made another landfall near New Orleans with flooding impacts." },
      { storm: "Flossy (1956)", detail: "Affected southeast Louisiana with wind, rain, and tornadoes." },
      { storm: "Betsy (1965)", detail: "Produced severe wind and flooding after levee failures in parts of New Orleans." },
      { storm: "Camille (1969)", detail: "Passed east of the city before its Category 5 Mississippi landfall." },
      { storm: "Andrew (1992)", detail: "Landfall occurred west of New Orleans but brought regional wind and tornado effects." },
      { storm: "Katrina (2005)", detail: "Regional surge contributed to catastrophic levee and floodwall failures and prolonged displacement." },
      { storm: "Gustav (2008)", detail: "Prompted a large evacuation and caused wind and outage impacts across southeast Louisiana." },
      { storm: "Ida (2021)", detail: "A Category 4 southeast Louisiana landfall caused destructive wind and extended metro power failure." }
    ],
    evacuation: [
      "New Orleans officials issue evacuation guidance for the city, while neighboring parishes issue their own orders. Know whether the household can self-evacuate or needs the city's assisted transportation plan.",
      "I-10, I-55, I-59, US 61, and connecting routes carry regional traffic. Contraflow is an official incident-specific action; never assume it will operate or enter a reversed route without instructions.",
      "Leave early with medication, identification, pet supplies, and a destination outside the regional risk. If using city assistance, follow current pickup, luggage, pet, and timing rules exactly."
    ],
    resources: [
      { label: "NOLA Ready", href: "https://ready.nola.gov/" },
      { label: "New Orleans evacuation information", href: "https://ready.nola.gov/plan/hurricane/" },
      { label: "NWS New Orleans/Baton Rouge", href: "https://www.weather.gov/lix/" },
      { label: "American Red Cross Louisiana", href: "https://www.redcross.org/local/louisiana.html" }
    ],
    faqs: [
      { question: "Is New Orleans under a hurricane threat now?", answer: "Check the current NHC advisory, NWS New Orleans/Baton Rouge alerts, and NOLA Ready. This permanent page does not itself indicate a threat." },
      { question: "Does New Orleans have evacuation zones?", answer: "The city issues event-specific guidance and assisted evacuation information, while surrounding parishes use their own plans. Follow the current instruction for the address." },
      { question: "What if I do not have a car in New Orleans?", answer: "Review NOLA Ready's city-assisted evacuation plan before a storm, including pickup, registration, pet, luggage, and timing requirements." },
      { question: "Do New Orleans levees make evacuation unnecessary?", answer: "No. Risk-reduction systems do not remove all surge, rain, wind, outage, or access hazards. Follow official evacuation guidance." }
    ]
  },
  {
    kind: "city", slug: "charleston", name: "Charleston", stateName: "South Carolina", stateSlug: "south-carolina",
    title: "Charleston Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Charleston hurricane preparedness for 2026: official alerts, evacuation zones, I-26 routes, storm surge, flooding, and safety.",
    risk: [
      "Charleston occupies a low peninsula between tidal rivers and a harbor connected to the Atlantic. Barrier islands, marshes, creeks, old drainage systems, high tide, and sea-level rise can combine with tropical rainfall and surge to flood roads well before the eye approaches.",
      "Risk varies across downtown, West Ashley, James Island, Johns Island, Mount Pleasant, North Charleston, and nearby barrier islands. A storm can pass offshore and still produce dangerous onshore water, tornadoes, tree damage, and long outages across the tri-county area.",
      "Frequent nuisance flooding can make residents underestimate hurricane water. Storm surge is deeper, faster, and more destructive than ordinary tidal flooding, and it can cut access to islands, hospitals, and evacuation corridors."
    ],
    history: [
      { storm: "Charleston hurricane (1752)", detail: "An early severe storm caused destructive coastal flooding in colonial Charleston." },
      { storm: "Sea Islands hurricane (1893)", detail: "Devastated coastal communities and Sea Islands south of Charleston." },
      { storm: "Charleston hurricane (1911)", detail: "Brought severe wind and water damage to the city and harbor." },
      { storm: "Gracie (1959)", detail: "Made a Category 4 landfall near Beaufort with major lowcountry impacts." },
      { storm: "David (1979)", detail: "Made landfall near Charleston as a Category 1 hurricane." },
      { storm: "Hugo (1989)", detail: "A Category 4 landfall near Sullivan's Island produced catastrophic surge and wind." },
      { storm: "Floyd (1999)", detail: "Triggered a huge evacuation and highlighted I-26 traffic challenges." },
      { storm: "Matthew (2016)", detail: "Produced surge, rainfall flooding, wind, and prolonged outages around Charleston." },
      { storm: "Irma (2017)", detail: "Generated significant harbor flooding despite passing far to the west." },
      { storm: "Dorian (2019)", detail: "Passed close to the coast with tornadoes, wind, surge, and flooding." }
    ],
    evacuation: [
      "Use South Carolina and Charleston County evacuation-zone tools for the address. Barrier islands and low surge zones may receive earlier orders than inland neighborhoods.",
      "I-26 is the primary inland corridor, supported by US 17, US 52, US 78, and local roads. State officials decide whether and when I-26 lane reversal begins.",
      "Leave before bridges or island roads become unsafe, and choose a destination beyond both surge and river flood risk. Do not park or shelter in a flood-prone garage."
    ],
    resources: [
      { label: "Charleston County emergency management", href: "https://www.charlestoncounty.org/departments/emergency-management/" },
      { label: "South Carolina evacuation zones", href: "https://www.scemd.org/prepare/know-your-zone/" },
      { label: "NWS Charleston", href: "https://www.weather.gov/chs/" },
      { label: "American Red Cross South Carolina", href: "https://www.redcross.org/local/south-carolina.html" }
    ],
    faqs: [
      { question: "Is Charleston threatened by a hurricane now?", answer: "Check the live NHC feed, NWS Charleston alerts, and county notices. A standing tracker is not a current warning." },
      { question: "What Charleston evacuation zone am I in?", answer: "Use the official address lookup and follow the current order for that zone. Do not substitute a FEMA insurance map." },
      { question: "Will I-26 reverse for every hurricane?", answer: "No. Lane reversal is activated only by official state decision for a specific event." },
      { question: "What was Charleston's worst modern hurricane?", answer: "Hugo in 1989 is the modern benchmark for catastrophic surge and wind in the Charleston area." }
    ]
  },
  {
    kind: "city", slug: "savannah", name: "Savannah", stateName: "Georgia", stateSlug: "georgia",
    title: "Savannah Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Savannah hurricane preparedness for 2026: official alerts, Chatham evacuation zones, I-16 routes, surge, flooding, and safety.",
    risk: [
      "Savannah sits along the tidal Savannah River near marshes, creeks, barrier islands, and low coastal communities. Storm surge can enter from the Atlantic through sounds and waterways, while heavy rainfall and high tide slow drainage across Chatham County.",
      "Tybee Island, eastern islands, riverfront areas, and low roads face different access and water risks from inland neighborhoods. Tropical storms passing offshore or striking Florida and South Carolina can still produce serious coastal flooding, tornadoes, wind, and outages.",
      "Historic trees and overhead utilities add wind vulnerability, while ports, tourism, and limited island bridges complicate evacuation. Residents and visitors should know their zone and county alert source before a storm appears in the short-range forecast."
    ],
    history: [
      { storm: "Sea Islands hurricane (1893)", detail: "Produced catastrophic surge and loss of life across coastal Georgia and South Carolina." },
      { storm: "Georgia hurricane (1898)", detail: "A major coastal hurricane caused severe regional wind and water damage." },
      { storm: "Cedar Keys hurricane (1896)", detail: "Crossed Florida and brought damaging wind and rain into Georgia." },
      { storm: "David (1979)", detail: "Moved along the Georgia coast after crossing Florida." },
      { storm: "Hugo (1989)", detail: "Made landfall north of Savannah but brought regional wind and surge effects." },
      { storm: "Floyd (1999)", detail: "Prompted a large Chatham County evacuation before turning north." },
      { storm: "Charley (2004)", detail: "Crossed the Southeast and produced tropical effects in coastal Georgia." },
      { storm: "Matthew (2016)", detail: "Passed offshore with damaging wind, surge, flooding, and extensive tree loss." },
      { storm: "Irma (2017)", detail: "Produced exceptional Savannah River and coastal flooding despite an inland track." },
      { storm: "Dorian (2019)", detail: "Passed offshore with coastal flooding, wind, and tornado concerns." }
    ],
    evacuation: [
      "Chatham County uses evacuation zones that officials may call in sequence. Check the address and give extra time for Tybee Island and other bridge-dependent communities.",
      "I-16 is the principal westbound evacuation route, with I-95, US 80, US 17, US 204, and local roads feeding it. Contraflow occurs only when the state activates the plan.",
      "Leave during the assigned window, take identification and medicine, and choose an inland destination outside the forecast rain and wind threat. Never wait on an island for water to cover the approach road."
    ],
    resources: [
      { label: "Chatham Emergency Management Agency", href: "https://chathamemergency.org/" },
      { label: "Chatham evacuation zones", href: "https://chathamemergency.org/prepare-now/evacuation-zones/" },
      { label: "NWS Charleston", href: "https://www.weather.gov/chs/" },
      { label: "American Red Cross Georgia", href: "https://www.redcross.org/local/georgia.html" }
    ],
    faqs: [
      { question: "Is Savannah at risk from the current storm?", answer: "Compare the live NHC advisory with NWS Charleston and Chatham County alerts. This page alone does not indicate a current threat." },
      { question: "What Chatham County evacuation zone am I in?", answer: "Use CEMA's address-based zone map and follow the current order for that zone." },
      { question: "Does I-16 always use contraflow?", answer: "No. Georgia activates I-16 contraflow only for specific evacuations and announces the timing and access rules." },
      { question: "Can Savannah flood without a direct landfall?", answer: "Yes. Matthew and Irma showed that offshore or indirect storms can still produce damaging coastal and river flooding." }
    ]
  },
  {
    kind: "city", slug: "wilmington", name: "Wilmington", stateName: "North Carolina", stateSlug: "north-carolina",
    title: "Wilmington Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Wilmington hurricane preparedness for 2026: official alerts, Know Your Zone, Cape Fear flooding, evacuation routes, and safety.",
    risk: [
      "Wilmington lies near the Cape Fear River, Intracoastal Waterway, beaches, barrier islands, tidal creeks, and low roads. Surge can affect coastal and river communities while heavy rainfall causes freshwater flooding across New Hanover and neighboring counties.",
      "Cape Fear's position exposes the area to storms approaching from the south, southeast, or along the coast. A slow storm can isolate Wilmington through flooded roads even after weakening, while tornadoes and falling pines create additional inland danger.",
      "Beach communities rely on bridges and limited routes, and the metro may lose power, water, fuel, and road access for days. Residents should plan for both evacuation before landfall and delayed reentry after river flooding."
    ],
    history: [
      { storm: "Hazel (1954)", detail: "A Category 4 landfall near the state line devastated beaches across the Cape Fear region." },
      { storm: "Connie (1955)", detail: "Brought heavy rain and coastal impacts during an exceptionally active period." },
      { storm: "Diane (1955)", detail: "Added rainfall and flooding shortly after Connie." },
      { storm: "Diana (1984)", detail: "Looped offshore before a major-hurricane landfall near Cape Fear." },
      { storm: "Bertha (1996)", detail: "Made a Category 2 landfall near Wilmington with wind and surge." },
      { storm: "Fran (1996)", detail: "Made a Category 3 Cape Fear landfall weeks after Bertha." },
      { storm: "Bonnie (1998)", detail: "A large Category 2 landfall near Wilmington caused wind and coastal damage." },
      { storm: "Floyd (1999)", detail: "Produced devastating eastern North Carolina rainfall and river flooding." },
      { storm: "Isabel (2003)", detail: "Landfall was farther north, but coastal waves and wind affected the region." },
      { storm: "Florence (2018)", detail: "A slow landfall near Wrightsville Beach caused extreme rain, flooding, and isolation." }
    ],
    evacuation: [
      "Use North Carolina Know Your Zone and New Hanover County instructions for the address. Beach towns and surge zones may be ordered out before inland neighborhoods.",
      "I-40 is the main inland route, with US 17, US 74/76, US 421, NC 133, and local roads serving different areas. Flooding can cut these routes during and after the storm.",
      "Leave islands before bridge winds or traffic worsen. Carry enough supplies for delayed return and do not attempt to cross flooded roads after the eye or center passes."
    ],
    resources: [
      { label: "New Hanover County emergency management", href: "https://www.nhcgov.com/230/Emergency-Management" },
      { label: "North Carolina Know Your Zone", href: "https://www.readync.gov/know-your-zone" },
      { label: "NWS Wilmington", href: "https://www.weather.gov/ilm/" },
      { label: "American Red Cross Eastern North Carolina", href: "https://www.redcross.org/local/north-carolina/eastern-north-carolina.html" }
    ],
    faqs: [
      { question: "Is Wilmington in the hurricane forecast?", answer: "Use the latest NHC cone and NWS Wilmington alerts. A permanent tracker page is not evidence that Wilmington is currently threatened." },
      { question: "What Wilmington evacuation zone am I in?", answer: "Use Know Your Zone and New Hanover County resources for the address, then follow the current local order." },
      { question: "Can Wilmington become isolated after a hurricane?", answer: "Yes. Florence showed how river and road flooding can restrict access after coastal wind decreases." },
      { question: "What is Wilmington's benchmark hurricane?", answer: "Hazel and Fran are major wind and surge benchmarks; Florence is the modern extreme-rainfall and isolation benchmark." }
    ]
  },
  {
    kind: "city", slug: "virginia-beach", name: "Virginia Beach", stateName: "Virginia", stateSlug: "virginia",
    title: "Virginia Beach Hurricane Preparedness 2026: Zone Safety",
    description: "Virginia Beach hurricane preparedness for 2026: official alerts, Know Your Zone, coastal flooding, bridge routes, and local safety.",
    risk: [
      "Virginia Beach faces the Atlantic, Chesapeake Bay, tidal inlets, Back Bay, low neighborhoods, beaches, and a large system of roads and drainage. Ocean surge, bay water, heavy rainfall, and high tide can affect different parts of the city at different times.",
      "The city is part of the interconnected Hampton Roads region, where bridges, tunnels, military facilities, ports, and regional traffic shape evacuation. A storm passing offshore can still generate dangerous surf, rip currents, tornadoes, wind, and power loss.",
      "Residents should know both the Virginia evacuation zone and local flood history for the address. Tourists, military households, high-rise residents, and people in Sandbridge or other access-limited areas need destination and communication plans before a watch."
    ],
    history: [
      { storm: "Chesapeake-Potomac hurricane (1933)", detail: "Drove major water into Chesapeake Bay and affected the Virginia coast." },
      { storm: "Great Atlantic hurricane (1944)", detail: "Brought destructive coastal wind, waves, and flooding to the Mid-Atlantic." },
      { storm: "Hazel (1954)", detail: "Moved rapidly inland with damaging Virginia wind and coastal effects." },
      { storm: "Connie (1955)", detail: "Contributed heavy rain and coastal weather before Diane followed." },
      { storm: "Donna (1960)", detail: "Tracked along the East Coast and affected the Virginia shoreline." },
      { storm: "Gloria (1985)", detail: "Passed offshore with waves, wind, and coastal preparation impacts." },
      { storm: "Fran (1996)", detail: "Moved inland from North Carolina and brought Virginia rain and wind." },
      { storm: "Floyd (1999)", detail: "Produced serious southeast Virginia rain and river flooding." },
      { storm: "Isabel (2003)", detail: "Generated destructive Chesapeake Bay surge, wind, and regional outages." },
      { storm: "Irene (2011)", detail: "Brought coastal flooding, wind, tornadoes, and power loss to Hampton Roads." }
    ],
    evacuation: [
      "Virginia Beach participates in Know Your Zone, with zones A through D used for coastal evacuation. Find the address and follow the current order; the zone is different from a FEMA flood map.",
      "I-264, I-64, US 58, US 60, Shore Drive, and local roads connect the city to the region. Bridge-tunnel and road restrictions can change quickly as wind and water increase.",
      "Leave during the official window with medicine, documents, pets, and multiple destinations. Avoid low roads and never wait for water to rise in Sandbridge, bayfront, or other exposed areas."
    ],
    resources: [
      { label: "Virginia Beach emergency management", href: "https://www.vbgov.com/government/departments/emergency-management" },
      { label: "Virginia Know Your Zone", href: "https://www.vaemergency.gov/know-your-zone" },
      { label: "NWS Wakefield", href: "https://www.weather.gov/akq/" },
      { label: "American Red Cross Coastal Virginia", href: "https://www.redcross.org/local/virginia/about-us/locations/coastal-virginia.html" }
    ],
    faqs: [
      { question: "Is Virginia Beach under a hurricane warning?", answer: "Check NWS Wakefield, the NHC advisory, and city alerts. This standing tracker does not indicate a current warning." },
      { question: "What Virginia Beach evacuation zone am I in?", answer: "Use Virginia Know Your Zone for the address and follow the current instruction for zones A through D." },
      { question: "Can Hampton Roads bridges and tunnels close?", answer: "Yes. Wind, flooding, crashes, and official controls can restrict crossings, so ordered zones should leave early." },
      { question: "Which hurricane is the main Virginia Beach benchmark?", answer: "Isabel is a key modern surge and outage benchmark for Hampton Roads, while the 1933 hurricane demonstrates Chesapeake Bay water risk." }
    ]
  }
];

export function getLocalPreparednessPage(kind: LocalPreparednessPage["kind"], slug: string) {
  return localPreparednessPages.find((page) => page.kind === kind && page.slug === slug);
}
