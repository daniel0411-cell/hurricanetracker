export type LocalPreparednessPage = {
  kind: "state" | "city";
  slug: string;
  name: string;
  stateName: string;
  stateSlug: string;
  title: string;
  description: string;
  dateModified?: string;
  sourceCheck?: { date: string; scope: string };
  planningRecord?: {
    title: string;
    intro: string;
    steps: Array<{ name: string; text: string }>;
    example: string;
  };
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
    title: "Florida Hurricane Preparedness: Zones & Shelter Planning",
    description: "Plan Florida hurricane evacuation by address, home safety, special needs registration, shelter eligibility and confirmed transport using official resources.",
    dateModified: "2026-11-10",
    sourceCheck: { date: "2026-11-10", scope: "Read FDEM's Know Your Zone, Important Shelter Information and What to Expect in a Shelter pages, plus the Florida Department of Health registry homepage. No visible article revision dates. Checked standing zone/home guidance, registration and shelter eligibility limits. No address lookup, current order, shelter opening, transport or individual care placement was verified. Retained hazard and historical background was not reverified." },
    planningRecord: {
      title: "Florida Shelter Planning: Six Decisions to Settle Before Departure",
      intro: "A zone result, a registry entry and a shelter destination answer different questions. Use the decisions below to connect them for your household. Keep a private note with the county, home address, destination, transport contact and unresolved arrangements. Use official county channels for instructions and the health department's official registry for personal information; this guide does not collect registrations or reserve assistance.",
      steps: [
        { name: "Find the address, then read the actual order", text: "Open FDEM's Know Your Zone map and enter the full street address. Record the county and result, then follow the local instruction applying to that address. FDEM says not all evacuation zones are ordered at once. A colored map area identifies planning exposure; it is not itself an instruction to leave today. If the map is unavailable or asks for a login, use the county emergency-management office to resolve the result. Save its official alert channel and departure instructions before mobile service becomes unreliable." },
        { name: "Check the home as well as the zone", text: "FDEM separately identifies low-lying and flood-prone areas, mobile homes and unsafe structures as evacuation concerns. An address outside a mapped zone is not proof that the building can withstand wind and heavy rain. If no order applies, assess the home's suitability and the household's ability to manage an outage before considering sheltering in place. Ask the county about instructions for the actual building type; visitors should ask their accommodation provider about its emergency plan. A zone lookup is not a structural inspection." },
        { name: "Choose a suitable destination and an alternate", text: "FDEM recommends a safe structure outside the evacuation area with family or friends when available, and several possible destinations in different directions. Ask the host whether the household can arrive and whether access, sleeping arrangements and essential equipment needs can be met. For a public shelter, use the county's event-specific location and opening instructions. FDEM distinguishes general population and special needs shelters; a general shelter provides basic first aid, not an assumed replacement for daily medical assistance. Keep an alternate if the first destination becomes unsuitable." },
        { name: "Register early, then resolve eligibility with the county", text: "The Florida Department of Health registry gives local officials information for disaster planning. Its homepage explicitly says registration neither automatically qualifies someone for a special needs shelter nor guarantees emergency assistance. The site says it periodically emails registrants to verify or change information; respond through the official process and keep details current. Contact county emergency management about registration, evacuation and shelter options. Record the county's response separately from submission of the form. A login or completed registration does not establish an accepted destination or pickup arrangement." },
        { name: "Match medical needs to actual shelter capacity", text: "FDEM describes special needs shelter eligibility as care beyond general-shelter first aid for a medically stable person whose needs remain within the shelter's staffing and equipment capacity. Disability alone does not establish eligibility, and a special needs shelter is a last-resort option. Discuss daily assistance, oxygen, equipment power, medication storage and caregiver support with the care team and county before relying on a facility. If needs exceed its capacity, ask the care team to arrange an appropriate receiving provider. Write down unresolved needs rather than treating the shelter label as clinical approval." },
        { name: "Finish the ride and arrival arrangements", text: "Ask the transport provider about pickup location and timing, mobility equipment, transfers, accompanying people and animals. Ask the receiving operator separately about those arrangements; a suitable vehicle does not establish shelter acceptance. Pack personal medication, clothing, toiletries and bedding as FDEM advises, and check the operator's supply instructions. Keep contact details and the agreed destination accessible offline, with a backup if the ride changes. Before leaving, check current local route and access instructions. If essential care or transport remains unresolved, contact the county and care provider while there is time to arrange another option." }
      ],
      example: "Hypothetical exercise: a Florida resident who needs daily assistance has completed the registry, and a relative assumes this also books a ride and a special needs shelter place. The record should instead show three separate items: registration submitted; county eligibility and destination response still needed; suitable transport still needed. The household contacts county emergency management and its care team, checks the proposed destination against the person's needs, and records the receiving and transport arrangements separately. If those arrangements cannot be made, the care team and county need to help resolve another suitable plan. This example does not establish anyone's eligibility or a current evacuation order."
    },
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
      "Choose a safe receiving place outside the evacuation area and an alternate in a different direction. Check both destinations' exposure and access rather than assuming any inland address is suitable. Use current county route instructions and verify the receiving arrangement before relying on it.",
      "Leave when local officials direct your zone. Do not wait for a statewide announcement, assume a highway will use contraflow, or drive toward the forecast cone without checking road, bridge, toll, fuel, and destination conditions."
    ],
    resources: [
      { label: "Florida Division of Emergency Management", href: "https://www.floridadisaster.org/" },
      { label: "Florida evacuation zones", href: "https://www.floridadisaster.org/knowyourzone/" },
      { label: "County emergency-management offices: evacuation, shelter and transport questions", href: "https://www.floridadisaster.org/planprepare/counties/" },
      { label: "Florida Department of Health Special Needs Registry and registration limits", href: "https://snr.flhealthresponse.com/" },
      { label: "FDEM general and special needs shelter eligibility", href: "https://www.floridadisaster.org/planprepare/disability/evacuations-and-shelters/shelter-information/" },
      { label: "FDEM: what to expect in a shelter", href: "https://www.floridadisaster.org/planprepare/disability/evacuations-and-shelters/shelter-information/what-to-expect/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Florida", href: "https://www.redcross.org/local/florida.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Florida?", answer: "The Atlantic season runs June 1 through November 30, with the busiest period usually from mid-August through October. Florida can still experience tropical impacts outside those dates." },
      { question: "How do I find my Florida evacuation zone?", answer: "Use Florida's Know Your Zone resource and confirm the result with your county emergency management office. Do not substitute a FEMA insurance flood zone for a local evacuation zone." },
      { question: "Can Florida order a mandatory evacuation?", answer: "Yes. County and local officials can issue evacuation orders for specific zones, islands, mobile homes, or vulnerable facilities. Follow the order that applies to your address." },
      { question: "Does Florida special needs registration reserve a shelter place or ride?", answer: "No. The official registry says registration does not automatically qualify someone for a special needs shelter or guarantee emergency assistance. Contact county emergency management about eligibility and options, and confirm transport and the receiving arrangement separately." },
      { question: "Does every person with a disability need a special needs shelter?", answer: "No. FDEM says some people with disabilities can use general population shelters. Special needs eligibility involves medically stable needs beyond basic first aid that remain within the facility's capacity. Discuss individual care requirements with the county and care team in advance." },
      { question: "Am I safe at home if I am outside the evacuation zone?", answer: "A zone result alone does not establish safety. FDEM also identifies low-lying areas, mobile homes and unsafe structures as concerns. Follow any applicable order and consider the building's ability to withstand wind and rain, flooding and essential care during an outage." },
      { question: "What belongs in a Florida hurricane kit?", answer: "Plan for seven days of water and food, medication, documents, batteries, weather alerts, pet supplies, heat protection, cleanup safety, and a portable evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "texas", name: "Texas", stateName: "Texas", stateSlug: "texas",
    title: "Texas Hurricane Preparedness 2026: Zones, Kits & Safety",
    description: "Texas hurricane preparedness guide for 2026: coastal evacuation, emergency kits, local alerts, storm surge, inland flooding, shelters, and safety resources.",
    dateModified: "2026-11-10",
    sourceCheck: { date: "2026-11-10", scope: "Read TDEM's State of Texas Emergency Assistance Registry public and FAQ sections, and TxDOT's Hurricane preparation HTML page. No visible article revision dates. Checked registration duration, consent and service limits, district route resources, contraflow and shoulder-lane distinctions. No address, current order, transport, shelter, clinical placement, road condition, PDF map or video was verified. Retained hazard and historical background was not reverified." },
    planningRecord: {
      title: "A Texas Evacuation Record From Local Instruction to Confirmed Arrival",
      intro: "A statewide route map and a STEAR registration answer different planning questions. Neither establishes that a particular household has a ride, an open road or a suitable place to stay. Keep this record privately, with the address, local emergency-management contact, receiving contact and time of each confirmation. Use it to identify unfinished arrangements before an evacuation window becomes short.",
      steps: [
        { name: "Record the local instruction before choosing the highway", text: "Save the county or city's official alert channel and the instruction applying to the actual home, facility or vacation rental. Write the issuing authority, affected area and departure timing beside the address. TxDOT groups its coastal route resources by Beaumont, Corpus Christi, Houston, Pharr and Yoakum districts; those are route-planning entries, not a single statewide evacuation zone or an order for every resident. Select the resource for the origin and check the destination's instructions too. A route out of one coastal county can lead into another area with flooding or access restrictions." },
        { name: "Keep STEAR enrollment separate from confirmed assistance", text: "TDEM describes STEAR as a free, voluntary registry that gives local planners and responders information about disability, access, functional, medical and transportation needs. Communities use it differently, and registration does not guarantee any specific service or evacuation. Register through the official entry or call 2-1-1; the state also lists 877-541-7905 and relay options. Ask the local emergency-management coordinator how that community participates and what separate arrangements are needed. Record an actual provider, callback and pickup agreement separately from the date the registry form was submitted." },
        { name: "Maintain the registration and respect the person's consent", text: "The state FAQ says information is kept for one year and the person should re-register after that period. If the address or need changes, contact 2-1-1 about re-registration; the local coordinator can also handle removal. Each person needing help requires an individual registration, while nursing homes and assisted-living facilities use a facility form. A relative or volunteer may register another person with their permission. TDEM says registration consents to sharing information with first responders and other state agencies during a disaster. Use the official process, not a public comment or this website, for personal details. The FAQ says the state does not send registration confirmation; a local representative may contact the registrant. Neither silence nor a callback establishes a booked ride." },
        { name: "Match the vehicle to a receiving place and care plan", text: "Contact the host, lodging provider or officially announced shelter before relying on that destination. Record who accepts the household, when arrival is possible, and an alternate if the arrangement changes. Ask the transport provider about mobility equipment, transfers, caregiver travel, service animals and pets, and ask the receiving operator about its own arrangements. Where power, oxygen, refrigerated medicine or personal care is essential, confirm a plan with the care team and receiving provider. STEAR records needs; it does not certify that a vehicle or general shelter can meet them. Facility residents should review their facility's evacuation and continuity plan rather than treating a household registration as a replacement." },
        { name: "Distinguish contraflow from an evacuation shoulder lane", text: "TxDOT defines contraflow as travel opposite a lane's usual direction. It separately describes a hurricane evacuation lane as an extra-wide shoulder converted into an active through lane. These are controlled traffic measures, not permission to drive against traffic or onto a shoulder when congestion starts. Use the current official instructions, signs and traffic control for the actual event. TxDOT's planning page links district maps and route brochures, but their presence does not mean a measure is active. Check DriveTexas before departure and follow official closures; a saved route or navigation estimate is not evidence that every segment is passable. TxDOT also lists 800-452-9292 for statewide highway conditions." },
        { name: "Close the arrival and return gaps", text: "Before leaving, check that the vehicle's fuel or charging plan, medicine, documents and portable supplies fit the trip and possible delay. Keep the receiving contact available offline and agree how a trusted contact will know the household arrived. If transport or the destination remains unresolved, contact the responsible local office and care provider while there is time to arrange an alternative. Do not enter floodwater or improvise an unauthorized shoulder route. For the return trip, obtain current local access instructions, check road conditions again and confirm that the property and essential care arrangements are usable. An outbound journey or a registry entry does not establish permission or readiness to return." }
      ],
      example: "Hypothetical exercise: a coastal Texas household registered one relative in STEAR last year, saved an I-45 brochure and expects a cousin inland to host everyone. Its record still lacks the current registration status, a suitable ride and confirmation from the cousin. The household checks the one-year renewal rule, contacts its local coordinator about actual support, and records a separate vehicle and receiving arrangement that can accommodate the relative's equipment. It follows the event's official route instructions without assuming contraflow or shoulder use. If the cousin cannot receive them, the alternate destination must be confirmed too. This exercise does not identify a zone, activate a traffic plan, reserve assistance or confirm a current evacuation order."
    },
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
      "Start with TxDOT's district route resources, then check current local instructions and DriveTexas conditions. A planning map is not an open-road report. Contraflow reverses normal lane direction; an evacuation lane uses a converted extra-wide shoulder. Use either only under official traffic control.",
      "Connect the departure instruction with a confirmed ride and suitable receiving place. STEAR enrollment is voluntary planning information, not guaranteed evacuation assistance. Confirm care, animal and equipment arrangements separately, and recheck road and local access information before returning."
    ],
    resources: [
      { label: "Texas Division of Emergency Management", href: "https://www.tdem.texas.gov/prepare" },
      { label: "TDEM STEAR: registration, consent, annual renewal and service limits", href: "https://www.tdem.texas.gov/response/state-of-texas-emergency-assistance-registry" },
      { label: "TxDOT district evacuation routes, contraflow and evacuation lanes", href: "https://www.txdot.gov/safety/severe-weather/hurricane-preparation.html" },
      { label: "DriveTexas road conditions", href: "https://drivetexas.org/" },
      { label: "FEMA Region 6", href: "https://www.fema.gov/about/organization/region-6" },
      { label: "American Red Cross Texas Gulf Coast", href: "https://www.redcross.org/local/texas/gulf-coast.html" }
    ],
    faqs: [
      { question: "When is hurricane season for Texas?", answer: "Atlantic hurricane season is June 1 through November 30. Texas risk often becomes most prominent from August into September, but storms can occur earlier or later." },
      { question: "Where are Texas hurricane evacuation zones?", answer: "Zones are issued by coastal counties and regional authorities, sometimes using ZIP codes. Check the local emergency management map for your exact address." },
      { question: "Who can order a Texas hurricane evacuation?", answer: "Local authorities can issue mandatory orders for threatened jurisdictions. State agencies support traffic and response, but residents should follow the order for their county or city." },
      { question: "Does STEAR registration guarantee a Texas evacuation ride?", answer: "No. TDEM says communities use this voluntary registry differently and no specific service or evacuation is guaranteed. Contact the local emergency-management coordinator about participation, and record confirmed transport and a suitable receiving place separately." },
      { question: "How often should I renew my STEAR registration?", answer: "TDEM's FAQ says information is retained for one year and the person should re-register after that period. Contact 2-1-1 about changes or re-registration. A relative may register someone with that person's permission; facilities use their separate form." },
      { question: "Can I use a shoulder or reversed lane when traffic stops?", answer: "Only follow the officially activated traffic controls. TxDOT distinguishes contraflow, which reverses normal lane direction, from an evacuation lane on a converted extra-wide shoulder. A brochure or traffic jam does not authorize either maneuver." },
      { question: "What should a Texas hurricane kit include?", answer: "Store seven days of water and food, prescriptions, documents, backup power used safely, heat supplies, pet or livestock needs, flood cleanup protection, and a portable evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "louisiana", name: "Louisiana", stateName: "Louisiana", stateSlug: "louisiana",
    title: "Louisiana Hurricane Preparedness: Parish Evacuation Plan",
    description: "Build a Louisiana parish evacuation plan with official contacts, transport arrangements, medical needs, shelter information and a private household record.",
    dateModified: "2026-11-10",
    sourceCheck: { date: "2026-11-10", scope: "Read LDH's Emergency Preparedness & Response and ESF6/ESF8 pages, GOHSEP's Individuals With Disabilities guidance and parish OHSEP directory. No visible article revision dates. Checked parish assistance and medical registry contacts, shelter information, medication and equipment planning. No current order, address result, road condition, pickup, shelter opening or individual medical placement was verified. Retained hazard and historical background was not reverified." },
    planningRecord: {
      title: "A Louisiana Household Record: From Parish Instruction to Arrival",
      intro: "Start with the parish responsible for the home address, then connect its instructions to a usable ride and receiving place. Keep this record privately: address, parish contact, departure instruction, transport provider, destination, care contacts and unfinished arrangements. Enter personal or medical information only through the official process requested by the parish or care provider; this guide does not register residents or book services.",
      steps: [
        { name: "Find the parish office and the instruction for the address", text: "Use GOHSEP's parish OHSEP directory to find the local emergency-management office. Save its official alert channel and ask how to identify the evacuation instruction applying to the home. A statewide guide cannot establish whether a particular address must leave. Record the instruction's area, departure timing and source when an event occurs. Coastal and inland households may receive different directions; a New Orleans city-assisted evacuation arrangement should not be assumed to operate in another parish." },
        { name: "Ask the parish about assistance before a storm", text: "LDH directs residents needing evacuation assistance or a medical-needs registry entry to their parish emergency-preparedness office. Ask how the local process works, what information it needs and how to update changed needs. Write down the office's response and any next action. Keep registration, the transport arrangement and the receiving arrangement as separate entries: submitting information alone does not tell your household where or when to board, or which destination can provide the required support." },
        { name: "Make the ride workable for the person and equipment", text: "Tell the transport provider about transfers, mobility equipment, accompanying caregivers and animals before relying on a ride. GOHSEP advises wheelchair users to know the chair's size and show helpers how it operates. Record the pickup location, timing, provider contact and what can travel with the person. Arrange a backup with the household's support network. If no suitable ride has been arranged, return to the parish assistance contact early; an information call is not a dispatched vehicle." },
        { name: "Arrange continued care at the receiving end", text: "GOHSEP recommends identifying more than one treatment facility for dialysis or other life-sustaining treatment. Ask the care team to help establish where treatment can continue and what the receiving provider needs. Keep a private list of medication names and doses, equipment, doctor and pharmacist contacts, and daily assistance needs. LDH advises taking medications in original bottles, medical information and available paper prescriptions. Discuss refills and equipment or medication storage with the provider before departure; a public shelter address alone does not establish suitable care." },
        { name: "Use the right information channel for the missing answer", text: "For shelter information, LDH lists 2-1-1 or texting LASHELTER to 898211; the parish OHSEP is another shelter contact. For road information, use Louisiana 511. LDH also lists 866-783-5553 for preparation, evacuation or relocation assistance, with published hours of 8 a.m. to 4:30 p.m. Check the agency's current instructions before relying on availability. These channels serve different purposes. Record the answer and its time; do not treat a road report or shelter information message as a transport booking. Use 911 for emergencies." },
        { name: "Check destination access, supplies and the alternate", text: "LDH notes that shelter occupancy changes, so use current parish instructions or shelter information points along evacuation routes for openings and locations. Ask the receiving operator about access, care needs, caregivers and animal arrangements before relying on it. Pet evacuation and care remain the owner's responsibility; pack carriers, records, medication, food and water. Keep a second destination and a route alternative as GOHSEP advises. Check 511 and local directions before departure, carry contact details offline, and never drive through floodwater." }
      ],
      example: "Hypothetical exercise: a Louisiana household includes a wheelchair user who needs regular treatment. The family has contacted the parish registry, but its private record still shows two gaps: no vehicle able to carry the chair has been arranged, and the alternate treatment location has not responded. The family gives the transport provider the chair dimensions, asks the care team to coordinate the receiving treatment, and follows up with the parish about unresolved assistance. A 211 shelter listing helps identify an option to investigate; it does not resolve those two gaps. This exercise describes no real resident, current order, guaranteed service or accepted medical placement."
    },
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
      "Choose the route from current parish instructions and Louisiana 511 conditions, with a second way out if roads are blocked or closed. A familiar highway or a standing evacuation map does not establish that a road is open today; use lane reversals or other traffic controls only when officials activate them.",
      "Leave early enough to clear low roads, bridges, and surge-prone areas before tropical-storm-force winds. Keep multiple destinations because a route or shelter may be unavailable, and never drive into floodwater."
    ],
    resources: [
      { label: "Louisiana GOHSEP", href: "https://gohsep.la.gov/" },
      { label: "Find your parish emergency-management office (OHSEP)", href: "https://gohsep.la.gov/about/contact-us/parish-ohsep-contacts/" },
      { label: "LDH preparation, evacuation assistance and shelter information", href: "https://ldh.la.gov/emergency-preparedness-response" },
      { label: "LDH parish assistance, medical registry and shelter guidance", href: "https://ldh.la.gov/emergency-preparedness-esf6-esf8" },
      { label: "GOHSEP disability, equipment and treatment planning", href: "https://gohsep.la.gov/get-a-game-plan/make-a-plan/individuals-with-disabilities/" },
      { label: "Louisiana 511 road conditions", href: "https://www.511la.org/" },
      { label: "FEMA Region 6", href: "https://www.fema.gov/about/organization/region-6" },
      { label: "American Red Cross Louisiana", href: "https://www.redcross.org/local/louisiana.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Louisiana?", answer: "The Atlantic season runs June 1 through November 30. Louisiana's greatest historical activity is concentrated in late summer and early fall, but residents should remain ready throughout the season." },
      { question: "How do Louisiana evacuation zones work?", answer: "Parishes and regional plans identify exposed areas and phases. Check parish emergency management for your address and do not use an insurance flood zone as the only evacuation trigger." },
      { question: "Can Louisiana require a mandatory evacuation?", answer: "Yes. Parish and local authorities may order threatened areas to leave. Follow the order, timing, and route instructions for your jurisdiction." },
      { question: "Who should I contact if I need help evacuating in Louisiana?", answer: "LDH directs residents to their parish emergency-preparedness office for evacuation assistance or a medical-needs registry entry. Use GOHSEP's parish directory and ask about the local process early. LDH also lists 866-783-5553 for preparation, evacuation or relocation assistance during its published hours. An information call does not establish a pickup or receiving place." },
      { question: "Does a medical registry entry tell me where my ride and shelter are?", answer: "Keep those arrangements separate. Ask the parish how its registry works, then record the actual transport provider, pickup instructions and receiving arrangement. Discuss treatment, equipment and daily assistance with the care team and receiving operator; do not infer that a completed registry entry resolves them." },
      { question: "Should I call 211 or 511 for a Louisiana shelter?", answer: "LDH lists 211, or texting LASHELTER to 898211, for shelter information. Louisiana 511 provides road information. Shelter occupancy and openings change; obtain current instructions from the parish or shelter information points, and check the destination's suitability for the household." },
      { question: "What belongs in a Louisiana hurricane kit?", answer: "Prepare seven days of food and water, prescriptions, documents, pet supplies, safe backup power, heat protection, cleanup equipment, and a portable bag for early parish evacuation." }
    ]
  },
  {
    kind: "state", slug: "north-carolina", name: "North Carolina", stateName: "North Carolina", stateSlug: "north-carolina",
    title: "North Carolina Hurricane Plan: Zones, Travel & Return",
    description: "Build a North Carolina evacuation record: address and county zone, official orders, island travel, a confirmed destination and local reentry instructions.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read NC Emergency Management's Know Your Zone HTML, including county-specific zone sets, unzoned addresses, unavailable maps, transport planning and reentry. No visible article revision date. No address lookup, current order, open shelter, road, ferry, booking or property was verified. Retained hazard and historical background was not reverified; linked maps and PDFs were not reviewed." },
    planningRecord: {
      title: "North Carolina: Connect the County Zone With the Whole Trip",
      intro: "Start with the full address and county of the home, workplace or holiday rental. North Carolina's coastal zone system supports local evacuation decisions; the letter alone is not a statewide order or a route recommendation. Keep a private record that a second household member can read offline: location, issuing county, applicable instruction, transport, receiving contact and return restrictions. Resolve an uncertain map result with the county instead of guessing from the nearest colored area.",
      steps: [
        { name: "Keep the county beside the zone letter", text: "The state says counties can have different sets of zones: some use A and B, while others also have C, D and E. Copy the actual lookup result for the full street address, not a letter found for another rental or county. If there is no predetermined zone, record that result and keep monitoring local instructions; the state explicitly says an unzoned area can still receive emergency directions. A missing map result is a different problem from a confirmed unzoned address." },
        { name: "Save the instruction that applies to residents or visitors", text: "Local officials order evacuations. Record the issuing county, announcement time, affected locations or groups and departure instructions. A visitor order, a resident order and a zone lookup need not have the same scope. If the interactive map fails, the state directs users to their local emergency manager. Keep that contact and the county's alert channel with the address so the household can ask a precise question without relying on a screenshot from another event." },
        { name: "Confirm a receiving place before counting the destination ready", text: "The state recommends planning with family, friends or a hotel and treating a public shelter as a last resort. Ask the receiving person or operator whether the household can arrive and what access, animal and care arrangements are available. ReadyNC links open-shelter information when needed; an old school address or planning map is not evidence that a site is operating. Record an alternate if the first host or accommodation cannot receive everyone." },
        { name: "Resolve transport from the actual island or neighborhood", text: "NC Emergency Management asks people without a car to make evacuation arrangements in advance and drivers to know alternate routes. For an island departure, separately check the applicable road, ferry or operator instructions for that trip. Keep the provider contact, pickup agreement and receiving address together. DriveNC supplies travel information, but a road page or a route saved last year does not confirm ferry operation, an accessible ride or a passable trip during this event." },
        { name: "Pack for a changed location, not only a short drive", text: "Keep medicines, contacts, identification, essential papers and portable supplies accessible during the trip. Confirm help with equipment and continuing care before relying on a host or shelter; do not assume the driver supplies personal assistance after arrival. Agree who tells the out-of-area contact when everyone arrives. If the destination changes, reconfirm the ride and receiving arrangement as well as editing the address on the record." },
        { name: "Check reentry and accommodation separately", text: "The state says local officials determine when travel and return are safe, and reentry may be staged. Keep identification ready and check the actual local access instructions before returning. Visitors should contact their accommodation provider to confirm that the room or property is available. An open road does not establish permission to enter a restricted area, and permission to return does not establish that a particular home, rental, water supply or care arrangement is usable." }
      ],
      example: "Fictional exercise: a family saves a Zone B screenshot from a previous holiday, but this year's rental is in another county and its map will not load. They also have a hotel name without a booking. Which two records are missing? First, the current rental's actual county/address result and applicable local instruction; contact that county about the failed lookup. Second, acceptance at a suitable destination and transport to it. The old Zone B letter and the hotel listing resolve neither. When planning the return, they also need local reentry guidance and confirmation from this year's accommodation provider. No address or current order is verified by this example."
    },
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
      "Use the full address and county in the official Know Your Zone lookup. Zone sets differ between counties; no mapped zone does not exempt an address from other emergency instructions. Ask the local emergency manager if the map is unavailable or the result is unclear.",
      "Use the current local departure instruction and DriveNC travel information, and separately confirm any ferry or transport service required. A saved route identifies a planning option, not a verified open journey. Do not improvise a flooded shortcut or drive around a closure.",
      "Do not drive through water or return because the sky clears. Sound-side surge and river crests may arrive after the center passes, and local reentry credentials or checkpoints may remain in effect."
    ],
    resources: [
      { label: "North Carolina Emergency Management", href: "https://www.ncdps.gov/our-organization/emergency-management" },
      { label: "NC Know Your Zone: lookup, local orders and reentry answers", href: "https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone" },
      { label: "ReadyNC: preparation and open-shelter information", href: "https://www.readync.gov/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Eastern North Carolina", href: "https://www.redcross.org/local/north-carolina/eastern-north-carolina.html" }
    ],
    faqs: [
      { question: "When is North Carolina hurricane season?", answer: "The Atlantic season runs June 1 through November 30. North Carolina's Cape Hatteras exposure makes monitoring important throughout the season, especially from August through October." },
      { question: "Do all North Carolina counties use the same zone letters?", answer: "No. The state says some participating counties use A and B while others also use C, D and E. Keep the county and full address with the lookup result. If the map fails, contact the local emergency manager; an unzoned address can still receive emergency instructions." },
      { question: "Are Outer Banks evacuations mandatory?", answer: "Local governments can order visitors, residents, or specific zones to leave. Orders may begin early because bridges and NC 12 become unsafe before the storm center arrives." },
      { question: "Can visitors return as soon as the road reopens?", answer: "Check local reentry instructions and any identification requirements, then ask the accommodation provider whether the property is available. A reopened road alone does not establish access permission, a usable rental or continuing care." },
      { question: "What should a North Carolina kit cover?", answer: "Include seven days of supplies, prescriptions, documents, pet needs, weather radio, outage and heat planning, flood cleanup protection, and a portable barrier-island evacuation bag." }
    ]
  },
  {
    kind: "state", slug: "south-carolina", name: "South Carolina", stateName: "South Carolina", stateSlug: "south-carolina",
    title: "South Carolina Hurricane Plan: Zones & Traffic Rules",
    description: "Connect a South Carolina zone and evacuation order with signed routes, conditional lane reversal, a confirmed destination and local return instructions.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read SCEMD's Know Your Zone and Hurricane Traffic Management HTML: county map entries, official route signs over GPS, conditional reversals, closed entries during setup and locally managed return. No visible revision dates. No address result, live order, lane operation, road, shelter or transport was verified. Retained historical background, linked maps, PDFs and videos were not reviewed." },
    planningRecord: {
      title: "South Carolina: Read the Zone, Then Follow the Traffic Plan",
      intro: "A useful departure record connects two different official records: the instruction for the household's coastal zone and the traffic controls in force for the journey. Save the county, full address, actual zone result, announcement, destination and receiving contact. SCEMD's zone page links coastal county emergency offices; its traffic guidance explains why familiar GPS shortcuts and assumed reversal lanes can fail during an evacuation. The steps below are standing planning tasks, not a report that any lane or shelter is open.",
      steps: [
        { name: "Match the address with its county announcement", text: "Enter the full address in the official zone finder and keep the county beside the result. SCEMD says state and local authorities announce evacuations by predesignated zones. A map identifies the planning zone; the actual announcement supplies who must leave and when. Use the county resource linked from SCEMD if the result or instruction is unclear. Do not transfer a zone result from a nearby hotel, another county or a past holiday." },
        { name: "Follow the signed evacuation route over a GPS shortcut", text: "SCEMD's traffic FAQ tells motorists to follow designated routes and blue hurricane evacuation signs rather than a GPS device that may route differently. Review the official route for the departure location in advance, but use event instructions and traffic controls on the day. If a navigation app suggests a ramp behind a barricade, keep following official directions. Do not move cones, cross a closure or treat an app's estimated arrival as evidence a route is authorized." },
        { name: "Treat reversal setup as a controlled operation", text: "The traffic FAQ describes lane reversal as a multistep process and says entry points to reversed lanes close during setup and initiation. A planning map or news that reversal is being prepared does not authorize entering against normal traffic. Follow officers, signs and current state instructions. This record does not reproduce lane assignments or exit lists: the official guidance itself says arrangements can change, so a remembered maneuver is a poor substitute for the event's traffic control." },
        { name: "Choose a receiving place the controlled route can reach", text: "Ask a host, accommodation provider or official shelter operator about acceptance, arrival and household needs. Connect that answer to the permitted route instead of assuming every exit or interchange remains available. Check equipment support, caregivers, service animals and household pets with the relevant operators. Save an alternate contact and destination in case the first arrangement changes. A shelter marker or a route running nearby does not establish admission or the ability to provide medical care." },
        { name: "Plan the trip before the operating window closes", text: "SCEMD warns that evacuation operations stop and traffic personnel seek shelter before tropical-storm-force winds arrive. Flooding, bridge restrictions and unavailable emergency help can affect late travel. Follow the announced evacuation timetable and allow for the actual household's transport needs; do not calculate a last safe minute from landfall or the cone. Use 511SC for travel information alongside official instructions, not as a guarantee that each road segment is passable." },
        { name: "Obtain local return instructions and recheck access", text: "The state traffic FAQ assigns management of entry into evacuated communities to local public safety officials. Save the county or municipality's return announcement, check restrictions and use current travel information before the return journey. Leave road barriers in place and avoid floodwater or downed lines. A reversal ending or traffic moving toward the coast does not show that a particular neighborhood, bridge or home is ready for residents to return." }
      ],
      example: "Fictional exercise: a family has an order for its zone, but its app directs it onto a ramp that officers have closed while reversal lanes are being prepared. The family should follow the traffic signs and officers rather than the app; news of reversal is not permission to enter a closed lane. Its host is reached through a different interchange, so it needs to confirm a permitted approach and keep the host informed. The correct record retains the order, current official route instructions and destination contact as separate entries. This exercise neither activates a reversal nor verifies a current road, order or receiving place."
    },
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
      "Use the designated route and blue hurricane evacuation signs, following officers and current controls over a GPS shortcut. Lane reversal is conditional; entry points can be closed during setup. A planning map does not authorize a ramp, exit or reversed lane.",
      "Connect the instructed departure with a suitable receiving place and check 511SC travel information. Follow the evacuation timetable; traffic operations stop before tropical-storm-force winds. Local public safety officials manage return access."
    ],
    resources: [
      { label: "South Carolina Emergency Management", href: "https://www.scemd.org/" },
      { label: "SC hurricane evacuation guide", href: "https://www.scemd.org/prepare/types-of-disasters/hurricanes/" },
      { label: "SCEMD Know Your Zone and coastal county contacts", href: "https://www.scemd.org/prepare/know-your-zone/" },
      { label: "SCEMD traffic rules: GPS, reversal setup and return", href: "https://scemd.org/prepare/know-your-zone/hurricane-traffic-management/" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross South Carolina", href: "https://www.redcross.org/local/south-carolina.html" }
    ],
    faqs: [
      { question: "When does hurricane season affect South Carolina?", answer: "Atlantic season runs June 1 through November 30, with the greatest historical activity usually from August through October." },
      { question: "How do South Carolina evacuation zones work?", answer: "State and county maps identify coastal surge zones. Enter the property address and follow the order issued for that zone and county." },
      { question: "Will I-26 always reverse for an evacuation?", answer: "No. I-26 lane reversal is an event-specific state decision. Use current SCEMD and transportation instructions rather than assuming contraflow." },
      { question: "Should I follow a GPS shortcut during an evacuation?", answer: "SCEMD says to follow the designated evacuation routes and blue hurricane signs rather than a GPS route that may differ. Follow officers and current controls; never move barricades or enter a closed ramp because an app suggests it." },
      { question: "What should a lowcountry emergency kit include?", answer: "Prepare seven days of supplies, medicines, documents, pet items, weather alerts, safe backup power, cleanup gear, and a portable kit for early zone evacuation." }
    ]
  },
  {
    kind: "state", slug: "georgia", name: "Georgia", stateName: "Georgia", stateSlug: "georgia",
    title: "Georgia Hurricane Planning: County Zones and Transport",
    description: "Build a Georgia hurricane plan with county zone checks, confirmed transport, alternate destinations, assistance contacts, and a worked household example.",
    dateModified: "2026-11-10T00:00:00.000Z",
    sourceCheck: { date: "2026-11-10", scope: "Read GEMA hurricane and evacuation planning guidance. Chatham and Glynn county resources were checked November 6, 2026. No current order, address lookup, shelter opening or assistance acceptance was verified. Retained historical background was not reverified. Check current county instructions again for each event." },
    planningRecord: {
      title: "Build a County-Specific Departure Record",
      intro: "Georgia's coastal counties do not share one address lookup or assistance process. GEMA recommends several possible destinations, alternate routes and transport arrangements. Use your county's instructions to turn those choices into confirmed arrangements; inland households also need wind, flooding and outage plans.",
      steps: [
        { name: "Identify the authority", text: "Record the home address privately, its county, and the county EMA contact from GEMA's local agency directory. A Savannah-area place name alone does not establish jurisdiction." },
        { name: "Save the zone evidence", text: "For Chatham, use county evacuation resources and record the zone returned for the address, lookup URL and check date. For a Glynn address, use Glynn's own resources rather than copying a Chatham zone label." },
        { name: "Separate an order from a lookup", text: "A zone record describes the location. Record an actual evacuation order, its issuing authority and deadline separately when issued; a saved map does not establish today's order status." },
        { name: "Confirm a ride", text: "Write down the driver, pickup arrangement and backup. If requesting county assistance, record the request and follow-up contact; a submitted request is still pending until arrangements are confirmed." },
        { name: "Verify a destination", text: "Ask the host or facility about availability, pets, accessibility and medical equipment. Keep alternatives in different directions and use current official route instructions during an event." },
        { name: "Share an offline copy", text: "Give household members a paper contact and destination record. Keep medications, identification and portable supplies ready, and tell an out-of-area contact when plans change." }
      ],
      example: "Practice example, not a current order: a Chatham household has saved its county zone result and packed supplies, but its driver has not replied. A relative in Glynn offers lodging without checking local conditions. What remains unfinished? Answer: transport and destination are both unconfirmed. Follow up with the driver or assistance provider, check the host location against current Glynn instructions, and retain alternate destinations. A packed kit and a different county do not establish a workable departure plan."
    },
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
      { label: "GEMA: Make a plan to evacuate", href: "https://gema.georgia.gov/make-plan-plan-evacuate" },
      { label: "Find your Georgia local emergency management agency", href: "https://gema.georgia.gov/locations" },
      { label: "Chatham evacuation resources", href: "https://chathamemergency.org/PrepareNow/EvacuationResources" },
      { label: "Glynn evacuation resources", href: "https://www.glynncounty.org/government/departments/emergency-management-agency-ema/evacuation" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Georgia", href: "https://www.redcross.org/local/georgia.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Georgia?", answer: "The Atlantic season is June 1 through November 30. Georgia can receive direct coastal impacts or inland effects from storms striking nearby states." },
      { question: "Where can I find Georgia evacuation zones?", answer: "Use county emergency management resources for the property address. Chatham and other coastal counties publish their own zone and route information." },
      { question: "Does Georgia reverse I-16 for every hurricane?", answer: "No. Contraflow is an event-specific decision. Follow current GEMA, county, and transportation announcements." },
      { question: "Has a major hurricane hit Georgia?", answer: "The 1898 Georgia hurricane was a major coastal strike. More recent Matthew and Irma showed that offshore or indirect storms can still cause severe coastal flooding." },
      { question: "Does an assistance request confirm my ride?", answer: "No. Save the request details and contact the responsible provider to confirm pickup arrangements, timing, accessibility and what to bring. Keep a backup plan while the request is pending." }
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
    title: "Alabama Hurricane Plan: County Zones & Shelter Rides",
    description: "Plan an Alabama coastal evacuation using county instructions, Baldwin zone scenarios, separately confirmed shelter transport and medical arrangements.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read Baldwin County's Evacuation Zones and Transportation to Shelters HTML for planning scenarios, countywide housing exceptions, BRATS stages and separate medical transport. No visible article revision dates. These are Baldwin procedures, not statewide services. No address, current order, activated pickup, fee, admission, road or care arrangement was verified. Retained hazard and historical background was not reverified." },
    planningRecord: {
      title: "Alabama: Keep County Scenarios and Transport Arrangements Separate",
      intro: "First identify whether the actual address is in Mobile County, Baldwin County or another jurisdiction, then use that jurisdiction's instruction. Baldwin's published zones and shelter-transport process provide a concrete example of why a statewide storm category cannot complete a household plan. Keep the county, address, actual instruction, transport provider and receiving place together in a private record. Procedures described below from Baldwin County should not be assumed available in Mobile or elsewhere in Alabama.",
      steps: [
        { name: "Read a planning scenario without turning it into today's order", text: "Baldwin County publishes numbered zones and two evacuation scenarios. The text describes which areas can be included for different storm categories, and a wider scenario officials may use on weather-service guidance. Those standing descriptions help explain a plan; they do not activate an evacuation automatically when a category changes. Save the actual county announcement and its affected areas. If a scenario description and a current instruction seem different, ask the county to clarify the instruction for the address." },
        { name: "Include housing and low-lying-area instructions", text: "Baldwin's scenario text includes manufactured homes and low-lying flood-prone areas countywide, not just the numbered coastal areas. Do not decide that an inland location is exempt solely because a coastal boundary does not include it. Give the county the full address and relevant housing or assistance questions. An insurance flood-zone result, a beach distance and a numbered evacuation zone describe different things; none independently establishes the building's ability to shelter people through wind, flood or a prolonged outage." },
        { name: "Ask BRATS which journey is actually being arranged", text: "Baldwin's standing transport page describes home pickup to local shelters for residents with no transport during a local state of emergency, with wheelchair-accessible buses. It separately describes an out-of-county process following specified mandatory evacuation orders: pickup points, a hub transfer and onward buses. Ask which service is activated, how to schedule it and what pickup and destination apply. Do not go to a school listed as a pickup point without current official instructions confirming its use." },
        { name: "Resolve medical transport through the appropriate provider", text: "The county directs non-ambulatory, bed-bound residents and people with special medical conditions to a separate medical transport contact and encourages advance arrangements. Its page distinguishes that service from general bus transport and describes charges. Ask the provider to confirm eligibility, present costs, pickup, equipment support and a suitable receiving facility. A wheelchair-capable bus or an application does not establish the ability to provide medical care, a treatment appointment or a reserved bed." },
        { name: "Prepare for transfers and the receiving site's needs", text: "If the activated plan uses more than one vehicle, ask who helps at each handoff and how mobility aids, medicines and personal supplies travel. Confirm the arrangements for a caregiver, service animal and household pets with both transport and receiving operators. Keep an offline destination contact and a backup if acceptance changes. A vehicle being available is one confirmed part; the receiving site's opening and ability to meet the household's needs require separate answers." },
        { name: "Reconfirm the actual route and return arrangements", text: "Follow current county route instructions and closures, not a generic northbound highway list. Never enter floodwater or drive around barricades to reach a pickup or host. Before returning, check local permission and access, contact the transport provider if it arranged evacuation, and confirm care can resume at the destination. A standing promise of a return service after safe conditions is not a date, pickup appointment or determination that the particular home is usable." }
      ],
      example: "Fictional exercise: a Baldwin household reads that wheelchair-accessible BRATS buses exist and assumes this confirms a trip for a bed-bound relative who needs ongoing medical support. What remains unresolved? The appropriate medical transport and receiving care, as well as actual pickup and activation. The family contacts the county's listed medical provider, confirms assistance and current charges directly, and connects an agreed ride to an accepted destination. It does not transfer Baldwin's process to a relative living in Mobile County. A published pickup-point list or storm category is not an active booking. This is a planning example, not a service or clinical determination."
    },
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
      "Use the route and traffic controls in the current county instruction. A familiar I-65 or I-10 journey is not confirmation that the approaches, bridges or destination are usable. Avoid floodwater and closures; confirm transport well before conditions deteriorate.",
      "For Baldwin residents, ask which BRATS or medical transport procedure is activated and arrange pickup and receiving support separately. Other counties have their own arrangements. No inland destination is guaranteed free of wind or tornado risk; check its current hazards, suitability and acceptance."
    ],
    resources: [
      { label: "Alabama Emergency Management Agency", href: "https://ema.alabama.gov/" },
      { label: "Alabama hurricane preparedness", href: "https://ema.alabama.gov/hurricane-preparedness/" },
      { label: "Baldwin County zones and planning scenarios", href: "https://baldwincountyal.gov/services/ema/evacuation-information/evacuation-zones" },
      { label: "Baldwin shelter transport: BRATS and medical arrangements", href: "https://baldwincountyal.gov/services/ema/shelters/transportation-to-shelters" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Alabama and Mississippi", href: "https://www.redcross.org/local/alabama.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Alabama?", answer: "Atlantic season is June 1 through November 30. Alabama's central Gulf location makes late summer and early fall especially important for monitoring." },
      { question: "Does Alabama use statewide evacuation zones?", answer: "Coastal counties and local officials issue address-specific maps and orders. Check Mobile or Baldwin County guidance rather than relying on one statewide label." },
      { question: "Can Alabama order coastal residents to evacuate?", answer: "Yes. Local authorities may order islands, surge areas, vulnerable housing, or other threatened locations to leave." },
      { question: "Does a Baldwin transport listing reserve an accessible or medical ride?", answer: "No. Confirm activation, eligibility, pickup and receiving arrangements with the responsible provider. Baldwin distinguishes general BRATS transport from medical transport and encourages advance arrangements. These procedures do not establish services in other Alabama counties." },
      { question: "What should an Alabama hurricane kit include?", answer: "Prepare seven days of supplies, medicines, documents, pet needs, weather alerts, safe generator practices, tornado shelter items, and a portable coastal evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "mississippi", name: "Mississippi", stateName: "Mississippi", stateSlug: "mississippi",
    title: "Mississippi Hurricane Plan: County Maps & Shelters",
    description: "Use Mississippi county zone resources, local shelter announcements and an outage plan to connect a coastal evacuation with a confirmed receiving place.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read MEMA's current Hurricanes, County Emergency Management Contacts, and Shelters and Safe Rooms HTML. The old hurricane URL returned HTTP 404 and was replaced via the official homepage. Checked coastal county map entries, local shelter operation, assistance contacts and outage planning. No visible article revision dates. No map/PDF contents, current order, live shelter capacity, road, pickup or individual care plan was verified. Retained historical background was not reverified." },
    planningRecord: {
      title: "Mississippi: Match the County Map With a Local Shelter Decision",
      intro: "MEMA's hurricane page links evacuation-zone maps for Hancock, Harrison and Jackson counties as well as separate surge-mapping resources. Those are planning entries, not interchangeable instructions or current shelter reports. Begin a household record with the full address and county, then save the local instruction, a receiving contact and the transport needed to get there. Inland households need their own local instructions and outage arrangements rather than assuming the coastal map covers the whole state.",
      steps: [
        { name: "Keep the map type and county with the address", text: "Open the relevant county evacuation-zone resource from MEMA and check what the map actually describes. MEMA also links hurricane surge maps; a scenario showing possible inundation does not itself order departure or establish actual flood depth at a house. If the address result or map version is unclear, ask county emergency management. Keep its answer and the map source together instead of treating a color, insurance zone or nearby landmark as sufficient identification." },
        { name: "Read the local instruction for the household and home", text: "MEMA tells residents to follow local evacuation directions and highlights manufactured or temporary housing and flood-prone locations as concerns. Record the instruction's area, affected people and timing rather than waiting for visible water or a particular landfall point. If transport or medical support changes what the household can do, raise those questions with the county and provider before conditions deteriorate. A storm category does not supply a county order or confirm that the home is suitable." },
        { name: "Use the county directory for specific unresolved needs", text: "MEMA publishes an emergency-management contact for each county and directs storm-damage and unmet-needs reports to local offices. Save the current official directory entry for the household's county. Ask precise questions about the instruction, local assistance process and announced receiving sites; keep the answer and next action in the record. A statewide information page or an unanswered request does not confirm a ride. Use 911 for an immediate emergency rather than waiting for a planning response." },
        { name: "Separate a shelter list from an opening and admission", text: "MEMA's Shelters and Safe Rooms page says these facilities are operated locally and displays openings reported to the agency. Recheck the event-specific announcement and the local operator; do not convert a building name or a planning map into evidence of present operation. Ask about the site's purpose, opening time, acceptance, supplies, animal arrangements and accessibility. A safe-room label alone does not confirm overnight lodging or ongoing medical care. Resolve essential care with the operator and care team." },
        { name: "Link the destination to the outage plan", text: "MEMA recommends alternate arrangements for refrigerated medicines and power-dependent medical equipment. Confirm the particular equipment, approved backup and continued treatment with the relevant providers. If leaving, connect those arrangements to an accepted receiving site and transport that can carry the person, equipment and helper. If staying under applicable instructions, keep a provider-agreed alternative if power or treatment becomes unavailable. A generator, a charged phone and a shelter listing address different needs and should not be counted as equivalent backups." },
        { name: "Keep travel, arrival and return checks open until answered", text: "Record the current permitted route, fuel or charging needs, pickup if applicable and an arrival contact. Avoid floodwater and unauthorized shortcuts even if a saved route is shorter. If the receiving place changes, reconfirm transport and assistance there. After the storm, obtain local return directions and check the property's access and essential services separately. A local shelter closing or a neighborhood regaining electricity does not establish that the household's home, equipment or care arrangements are ready." }
      ],
      example: "Fictional exercise: a Harrison County family has a printed surge scenario and a safe-room address from an old list, but no local departure instruction or current opening notice. A relative assumes the site provides a bed and power for medical equipment. Which facts still need confirmation? The county instruction and address-specific planning result, the site's current purpose and acceptance, and device-specific care and transport. The household uses the county contact and receiving operator to resolve them separately. This example does not say that any site is open, empty, accessible to a particular person or medically suitable today."
    },
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
      "Follow the event's local route instructions and closures rather than selecting a highway from a static list. Officials can control travel; no assumed contraflow, familiar shortcut or navigation estimate establishes a passable journey.",
      "Connect a suitable receiving place with a confirmed ride and care plan. MEMA says shelters and safe rooms are locally operated; check actual opening and acceptance with the local operator. Prepare for delays and check destination hazards without assuming an inland location removes all risk."
    ],
    resources: [
      { label: "Mississippi Emergency Management Agency", href: "https://www.msema.org/" },
      { label: "MEMA hurricane planning and coastal county map entries", href: "https://www.msema.org/prepare/types-disasters/hurricanes" },
      { label: "MEMA county emergency-management contacts", href: "https://www.msema.org/get-assistance/county-emergency-management-contacts" },
      { label: "MEMA locally reported shelter and safe-room openings", href: "https://www.msema.org/get-assistance/disaster-resources/shelters-and-safe-rooms" },
      { label: "FEMA Region 4", href: "https://www.fema.gov/about/organization/region-4" },
      { label: "American Red Cross Mississippi", href: "https://www.redcross.org/local/alabama/about-us/locations/mississippi.html" }
    ],
    faqs: [
      { question: "When is hurricane season in Mississippi?", answer: "Atlantic season runs June 1 through November 30, with Gulf Coast risk often highest from August into October." },
      { question: "Where are Mississippi hurricane evacuation zones?", answer: "Coastal counties publish local surge and evacuation information. Confirm the address with county emergency management instead of relying only on an insurance flood map." },
      { question: "Should mobile-home residents evacuate?", answer: "A mobile home is not safe in hurricane or tornado winds. Follow local orders and arrange a sturdy shelter or safer destination before conditions deteriorate." },
      { question: "Does a safe-room address confirm hurricane lodging or medical power?", answer: "No. MEMA says shelters and safe rooms are operated locally. Check the actual opening, purpose, admission, accessibility and equipment support with the local operator. A building listing does not establish overnight lodging, a care placement or a transport booking." },
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
    title: "New Jersey Hurricane Plan: Shore, Flooding & Alerts",
    description: "Build a New Jersey plan using municipal instructions, county alerts, separate coastal and inland flood checks, receiving arrangements and safe return steps.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read NJOEM's Hurricanes and Tropical Storms and County Coordinators HTML for local alert contacts, coastal/flood-prone/manufactured-home distinctions, evacuation planning and return instructions. No visible article revision dates. Did not adopt older social-platform, utility-disconnection or structural-installation instructions. No county-linked subpage, current alert, address, transit, road, shelter or assistance placement was verified; retained historical background was not reverified." },
    planningRecord: {
      title: "New Jersey: Make the Municipality, Alert and Receiving Place Agree",
      intro: "A Shore rental, an inland river neighborhood and a manufactured home can require different protective actions during the same storm. Begin with the actual municipality and county for each household location, not just 'the Jersey Shore' or an insurance flood-zone letter. NJOEM directs residents to county emergency-management contacts for local information channels. Keep the contact, source, instruction and receiving arrangement in one private record, with a paper copy that remains usable if power or mobile service fails.",
      steps: [
        { name: "Identify which local office covers the exact address", text: "Record the municipality, county, full street address and building type. Use NJOEM's county coordinator directory to find the appropriate local information entry and ask the county about unclear jurisdiction or assistance questions. The directory includes county websites, alert entries and access-and-functional-needs contacts where listed. Finding a contact is a first step, not acceptance into a service. Do not assume a neighboring resort municipality's order applies to the rental or that an inland address has no flood concern." },
        { name: "Save the official channel rather than a platform name", text: "NJOEM recommends local information sources, weather radio and more than one way to receive warnings. Follow the county's present website instructions for an alert service and confirm how the household receives its messages. A social account mentioned on an older state page does not prove a present subscription or delivery method. Keep an offline local contact and a backup way to hear instructions. Separate the time an announcement was issued from the time someone forwarded it." },
        { name: "Separate coastal water, inland flooding and housing needs", text: "NJOEM highlights barrier islands and coastal communities, flood-prone areas, and manufactured homes or campgrounds for different vulnerabilities. Ask what instruction applies to the actual location and home rather than waiting for a higher storm category or a nearby beach to flood. An inland host may avoid the coastal order while still facing river flooding, an outage or access problems. Check that receiving location's current information as well as the departure address before counting the host as a suitable destination." },
        { name: "Connect a permitted route with actual transport", text: "Use the route and controls announced by local officials, then confirm the ride, pickup or service needed by the household. Ask the transport operator about access to the vehicle, mobility equipment, caregivers and animal arrangements; ask the receiving operator separately. A toll policy, transit change or bridge opening must come from the event's official information, not a past storm's plan. Never drive around a barricade or through water because a navigation app suggests an apparently faster approach." },
        { name: "Obtain receiving acceptance and keep a portable plan", text: "Confirm the host, hotel or announced shelter can receive everyone and identify unresolved care or equipment needs before departure. Keep medicines, essential records, contact numbers and portable supplies available during the trip. NJOEM's family-plan advice includes a meeting place and an out-of-state contact; agree who reports arrival and what happens if the destination changes. A directory listing or a registration request does not reserve accommodation, an accessible ride or ongoing care at a general shelter." },
        { name: "Treat return permission and household readiness separately", text: "NJOEM says to return only after authorities advise it is safe and to follow continuing travel restrictions. Check the municipality's return information, then confirm access and essential services at the actual property. Do not enter a flooded basement or approach electrical controls while standing in water to complete a checklist. Document damage only from a safe position, and contact qualified providers about utilities or care arrangements. Tell the family contact where you are and how to reach you after return." }
      ],
      example: "Fictional exercise: visitors receive a municipality's coastal evacuation instruction and choose an inland relative's home. A river-flood warning then affects the relative's neighborhood. Does being outside the Shore order complete the destination check? No. The family needs the receiving area's current instructions and a suitable accepted alternate, then must reconfirm the ride and inform its out-of-state contact. It retains the original departure order rather than replacing it with a screenshot of the host's weather. This exercise illustrates two locations and two sets of instructions; it verifies no real address, route, flood warning or accommodation."
    },
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
      "Follow the route and controls announced for the event, and confirm actual transit or assisted transport with the responsible operator. A highway list, past toll suspension or navigation estimate does not establish the present travel arrangement.",
      "Check the receiving area's current hazards and acceptance as well as the departure instruction. Inland is not automatically flood-free. Never drive around barriers or into water; return only under official directions and separately confirm that the property and essential services are usable."
    ],
    resources: [
      { label: "New Jersey Office of Emergency Management", href: "https://www.nj.gov/njoem/" },
      { label: "NJOEM hurricane planning: local alerts and return precautions", href: "https://ready.nj.gov/plan-prepare/hurricanes.shtml" },
      { label: "NJOEM county coordinators, alert entries and assistance contacts", href: "https://ready.nj.gov/about-us/county-coordinators.shtml" },
      { label: "FEMA Region 2", href: "https://www.fema.gov/about/organization/region-2" },
      { label: "American Red Cross New Jersey", href: "https://www.redcross.org/local/new-jersey.html" }
    ],
    faqs: [
      { question: "When is New Jersey hurricane season?", answer: "Atlantic season is June 1 through November 30, with most New Jersey tropical impacts occurring in late summer or fall." },
      { question: "Does New Jersey have hurricane evacuation zones?", answer: "Counties and municipalities maintain local coastal plans and maps. Confirm the Shore address with local emergency management." },
      { question: "When should barrier-island residents leave?", answer: "Follow the local order and leave early enough to cross the bridge before wind, flooding, or traffic restricts access." },
      { question: "Is an inland host automatically a suitable destination?", answer: "No. Check current hazards and instructions at the receiving address, acceptance, access and household care needs. An inland location may avoid the coastal evacuation area while still facing river flooding or an outage. Reconfirm transport if the destination changes." },
      { question: "What belongs in a New Jersey hurricane kit?", answer: "Store seven days of supplies, medicine, documents, weather alerts, pet needs, outage and basement-flood plans, and a portable barrier-island evacuation kit." }
    ]
  },
  {
    kind: "state", slug: "massachusetts", name: "Massachusetts", stateName: "Massachusetts", stateSlug: "massachusetts",
    title: "Massachusetts Hurricane Plan: Zones, Islands & Care",
    description: "Check Massachusetts zones A and B, Boston and Cambridge zone C, local evacuation instructions, Cape and island transport, care continuity and return access.",
    dateModified: "2026-11-11",
    sourceCheck: { date: "2026-11-11", scope: "Read MEMA's Hurricane Evacuation Zones, Hurricane Safety Tips and Safety Tips for Evacuations HTML. Checked A/B and Boston/Cambridge C, distinction from categories and insurance maps, local instructions, care planning and 211 information. No visible article revision dates. Did not adopt older watch/warning timing, pandemic rules or generic water-treatment wording. No address map result, ferry, flight, bridge, current order, shelter, transport or clinical arrangement was verified; retained historical background was not reverified." },
    planningRecord: {
      title: "Massachusetts: Read the Letter, Then Resolve the Local Journey",
      intro: "Massachusetts does provide a statewide hurricane evacuation-zone resource. MEMA describes zones A and B and an additional zone C in Boston and Cambridge. Those letters identify planning areas; they do not match hurricane categories or insurance flood zones. Save the full address, municipality, map result, applicable local instruction and receiving contact. For a Cape or island trip, keep the transport operator's actual service information separate from the zone lookup: knowing where you are does not book a way out.",
      steps: [
        { name: "Use the correct municipal zone result", text: "MEMA links an interactive map and community PDF maps for places where people live, work or vacation. Its explanation says A areas may flood before B, depending on predicted inundation; Boston and Cambridge also designate C. Look up the actual address and save the municipality and result. Do not transfer a letter from another town or equate Zone B with Category 2. If a map result is unclear, seek local emergency-management clarification rather than interpreting a nearby boundary yourself." },
        { name: "Keep the local instruction distinct from the map", text: "The zone page tells residents to prepare and listen to local and state officials; an evacuation call supplies the action for an affected zone. Record its source, issue time, area and instructions. Housing, assistance needs and hazards outside a mapped surge area can require further local guidance. A result outside a colored area does not certify structural safety or reliable power. If instructed to leave, follow the instruction rather than waiting for a stronger category or the center to approach landfall." },
        { name: "Confirm the Cape or island departure with the operator", text: "Write down the actual road approach or ferry/flight service needed for the departure and ask the relevant operator for current booking and service information. Save its official contact and an alternative arrangement in advance. This guide does not supply a bridge-wind threshold, last sailing or airport cutoff. Neither a zone letter nor a normal timetable establishes a usable trip during a storm. Connect the departure timing to local instructions and the household's actual assistance needs." },
        { name: "Ask the care team for receiving alternatives", text: "MEMA's evacuation guidance recommends backup providers for people receiving regular care, and its hurricane guidance calls for medical-provider planning when services or electricity may fail. Identify the actual equipment, treatment and help that must continue, then confirm a suitable receiving provider and transport. A friend's address, an accessible building or a shelter name is not confirmation of medical capability. Keep provider contacts and essential records accessible during the trip without publishing private clinical information." },
        { name: "Use 211 for information, then confirm the arrangement", text: "MEMA lists 2-1-1 for shelter information, transportation restrictions and evacuation questions, with 9-1-1 reserved for immediate police, fire or medical assistance. An information referral is not itself a booking or shelter acceptance. Ask the named operator about opening, admission, supplies, accessibility, caregiver and animal arrangements. Keep the answer and receiving contact in the record. If the first destination cannot meet an essential need, work with local officials and the care team to resolve an alternative before relying on it." },
        { name: "Plan both the outward and return handoffs", text: "Tell the family contact where everyone is going and agree how arrival is reported. Pack a portable kit, medicines, records and the supplies needed while waiting or transferring. After the storm, remain away until authorities permit return and check the actual road, ferry or flight service again. A returning service does not establish that the home, water, electrical system or care provider is ready. Ask qualified providers about damaged systems rather than entering unsafe areas to finish a checklist." }
      ],
      example: "Fictional exercise: a visitor in a coastal Massachusetts town finds a Zone B address result and assumes this means departure is needed only for a Category 2 hurricane. The correction is to keep the letter as a planning-area result and read the actual local instruction; MEMA explicitly says zones do not directly correspond to hurricane categories. If the trip also needs a ferry, the visitor must confirm operator information and a receiving place separately. A Boston or Cambridge Zone C does not imply the visitor's town uses C too. This example verifies no map result, order, sailing, shelter or care arrangement."
    },
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
      "Use MEMA's statewide zone entry and the actual municipality's current instruction. The state describes A and B, with C in Boston and Cambridge; zone letters are not hurricane categories or FEMA insurance zones.",
      "Confirm the current road approach, ferry or flight information with the responsible operator and follow local departure instructions. No remembered bridge threshold, normal timetable or zone result establishes an available trip.",
      "Connect transport with an accepted destination and necessary care. Call 211 for information about shelters or transport restrictions, then confirm arrangements with the operator. Obtain local return directions and recheck transport, property access and essential services separately."
    ],
    resources: [
      { label: "Massachusetts Emergency Management Agency", href: "https://www.mass.gov/orgs/massachusetts-emergency-management-agency" },
      { label: "Massachusetts hurricane safety", href: "https://www.mass.gov/info-details/hurricane-safety-tips" },
      { label: "MEMA evacuation zones: A/B and Boston/Cambridge C", href: "https://www.mass.gov/info-details/hurricane-evacuation-zones" },
      { label: "MEMA evacuation steps, care backups and 211 information", href: "https://www.mass.gov/info-details/safety-tips-for-evacuations" },
      { label: "FEMA Region 1", href: "https://www.fema.gov/about/organization/region-1" },
      { label: "American Red Cross Massachusetts", href: "https://www.redcross.org/local/massachusetts.html" }
    ],
    faqs: [
      { question: "When is Massachusetts hurricane season?", answer: "Atlantic season runs June 1 through November 30. New England's greatest historical hurricane risk is usually from August through October." },
      { question: "Does Massachusetts use lettered hurricane evacuation zones?", answer: "Yes. MEMA provides a statewide map entry and describes zones A and B, plus C in Boston and Cambridge. Check the actual municipality and address. These letters do not directly correspond to hurricane categories and are separate from FEMA insurance flood zones." },
      { question: "When do Cape Cod and island travelers leave?", answer: "Follow local instructions and move before bridges, ferries, or flights are restricted. Ferry service can stop well before the worst weather." },
      { question: "Does calling 211 reserve a shelter place or an accessible ride?", answer: "No. MEMA lists 211 for evacuation information, shelter locations and transport restrictions. Confirm actual opening, admission, transport and care arrangements with the responsible operator; use 911 for an immediate emergency." },
      { question: "What should a Massachusetts hurricane kit include?", answer: "Prepare seven days of food and water, medication, documents, radio and batteries, pet supplies, boat and outage planning, warm rain gear, and a portable evacuation kit." }
    ]
  },
  {
    kind: "city", slug: "miami", name: "Miami", stateName: "Florida", stateSlug: "florida",
    title: "Miami Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Build a Miami hurricane plan with a private Miami-Dade zone lookup, high-rise access questions, transport contacts and care handoff record.",
    dateModified: "2026-11-02",
    sourceCheck: { date: "2026-11-02", scope: "Miami-Dade's official storm-surge page describes five planning zones, A-E. Checked the zone explanation and linked lookup entry only; no address, interactive map result, current evacuation order, shelter availability or road condition was verified. Other historical and local background on this page was not reverified in this check." },
    planningRecord: {
      title: "Miami: Build a High-Rise and Care Handoff Record",
      intro: "Use this record before a threat to assign the address lookup, building questions and care arrangements to named household contacts. Miami-Dade's five storm-surge planning zones answer a coastal-water question. They do not describe whether a lift will work, who can carry equipment, or whether a host can receive the household. Keep the completed record privately; do not publish the address, medical details or access codes. The current tracker is the separate place to start checking weather during an event.",
      steps: [
        { name: "Record the exact property and county lookup", text: "Write the full street address, unit and county, then use Miami-Dade's linked Know Your Zone tool. Save the returned designation, source URL and lookup date with a copy that can be read offline. Five zones, A through E, appear in the county guidance. An unclear result belongs in an unresolved field until the county clarifies it; do not fill the gap using a nearby building's result." },
        { name: "Ask the building manager about access", text: "Record the manager's contact and answers about elevator shutdown, accessible stair access, water service, entry after an outage and any building evacuation instructions. Assign a household member to follow up on unanswered questions. A generator in a building does not establish which circuits or lifts it powers. Ask about the actual service needed rather than writing only 'building has backup power'." },
        { name: "Keep care and transport confirmations separate", text: "For a person needing help, record the agreed driver or provider, vehicle and equipment space, contact method and backup arrangement. Ask the treating or equipment provider about transport and continuity needs specific to that person. Keep an assistance application marked as submitted until the responsible service confirms its status and instructions; a submission is not a booked ride or a confirmed care placement." },
        { name: "Confirm the destination's actual arrangements", text: "Contact the host or shelter operator about access, care, equipment power and animals before treating a destination as agreed. Save the address privately and identify who will check the destination's own local instructions during a threat. An inland address changes the questions to ask; it does not settle flood, wind, outage or accessibility concerns. A familiar hotel name is not confirmation that a room or service is available." },
        { name: "Pack a portable handoff, not a second household inventory", text: "Keep essential contacts, the agreed care plan, medication and equipment instructions, documents and the items that must travel together in one accessible place. Identify who carries each essential item and who receives the person at the destination. Use the separate supply-checklist tool for quantities, so this record remains a short account of people, confirmations and unfinished arrangements." },
        { name: "Match the saved plan to the next official instruction", text: "During an event, save the issuing agency, issue time, affected area and action from the actual local instruction. Compare it with the recorded address and building needs. Miami-Dade's published guidance also identifies mobile homes and electrically dependent life-sustaining equipment as needing attention regardless of the surge planning zone. Check the current wording directly; the stored map and this household record are preparation inputs, not an evacuation order." }
      ],
      example: "Hypothetical record: a Miami condo household has saved its county zone result and a relative has agreed to receive them. The building manager has not answered which elevator operates during a power failure, and transport for a mobility device is not confirmed. The record has two open tasks, each assigned to a contact, plus an alternative destination contact. The household does not mark transport 'ready' because an assistance form was sent. During an actual threat it would compare the current county instruction with its address and care needs, then confirm the agreed departure and arrival handoff with the responsible people. No property, ride, medical arrangement or current order has been checked for this example."
    },
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
      "Miami-Dade uses five storm-surge Planning Zones, A through E. Find the full address in the county tool and save the result with the lookup date and source URL. During a threat, compare that result with the county's current instructions; the planning map is not itself an evacuation order. The letters are not hurricane categories and are different from FEMA insurance flood zones.",
      "Keep a private planning record for the household: address and zone result, who needs transport, an agreed destination outside the threatened area, and the official channel to check again. If the map fails or the result is unclear, record the lookup as unresolved and contact county emergency management; do not translate a blank result into no risk. Recheck mobile-home, medical and building-specific instructions even when an address is outside a mapped surge zone.",
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
      { question: "What Miami-Dade evacuation zone am I in?", answer: "Use the county Storm Surge Planning Zone tool for the exact address. The five zones, A through E, reflect surge planning, not storm category or FEMA flood-insurance zones. Save the lookup date, then check current county instructions separately; this guide has not looked up your address." },
      { question: "Should Miami high-rise residents evacuate?", answer: "Follow the order for the address and building. High-rises outside evacuation zones still need plans for glass, elevators, water, heat, and prolonged outages." },
      { question: "Does a building generator complete my care plan?", answer: "No. Ask which services it powers, then confirm transport, equipment needs and the receiving person's arrangements separately. Keep unanswered building or care questions open in the household record." }
    ]
  },
  {
    kind: "city", slug: "tampa", name: "Tampa", stateName: "Florida", stateSlug: "florida",
    title: "Tampa Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Prepare a Tampa Bay hurricane record: confirm the county, save the Hillsborough map version, and check transport, destination and bridge dependencies.",
    dateModified: "2026-11-02",
    sourceCheck: { date: "2026-11-02", scope: "Read Hillsborough's Find Evacuation Information page, its five-zone legend, linked HEAT lookup, 2025/2026 map comparison and HART transport entry. No address, interactive map result, current order, bridge status, activated bus or shelter was verified. Historical background was not reverified." },
    planningRecord: {
      title: "Tampa: Save the Map Version and Transport Confirmation",
      intro: "A Tampa Bay plan can cross county lines and depend on a bridge, bus or host. Start with the property's actual jurisdiction, then give each map and transport arrangement its own confirmation status. Hillsborough's official page includes 2025 and 2026 evacuation-map comparisons; an old screenshot can therefore answer a different question from the current lookup. This record is for preparing the household before an event. Use the current tracker and local agencies to check what is happening now.",
      steps: [
        { name: "Identify the county responsible for the address", text: "Save the street address and county privately before opening an evacuation map. A Tampa Bay place name alone does not identify whether Hillsborough, Pinellas or another jurisdiction supplies the applicable instructions. Record the relevant county's official page rather than copying the result for a relative living across the bay. Visitors should confirm the lodging address and county with the property manager." },
        { name: "Record a dated HEAT lookup for Hillsborough", text: "Use the county's Find Evacuation Information page to open the Hurricane Evacuation Assessment Tool. Its legend lists Zones A-E. Save the matched property, returned designation and lookup date. The page links printable maps and comparisons between 2025 and 2026, including Apollo Beach, Thonotosassa and Town 'N Country. Check the version of a saved image; a changed map is a reason to repeat the actual address lookup, not to guess a replacement zone." },
        { name: "Write the shelter or host confirmation separately", text: "Record who agreed to receive the household, when that agreement was made and what still needs checking about accessibility, pets, equipment and care. The official county page links a shelter map, but a location on a planning map does not show that it is open for the current event. Obtain activation and intake instructions from the responsible operator during a threat, and keep an alternative contact." },
        { name: "Plan transport before relying on an emergency service", text: "The county page links HART emergency evacuation bus information. Review the official routes and instructions before a storm, then confirm event-specific service and pickup details when needed. Save the transport contact, the people and equipment travelling, and the alternative if that arrangement fails. A link to a bus route is a planning resource; it is not a personal reservation or proof that service is operating." },
        { name: "Identify a bridge or access dependency", text: "Name any bridge, causeway or other crossing on the proposed journey, and record which official road or county source will supply its current status. Keep an alternative destination or transport arrangement if access changes. Do not turn a remembered closure threshold, an ordinary journey time or an app's suggested route into a promise of access. Check the destination's own instructions as well as those at the origin." },
        { name: "Assign the next order and map checks", text: "Keep the current instruction in its own field: issuing agency, issue time, affected zones or conditions, and required action. Use HCFL Alert and county updates for a Hillsborough address. Compare the instruction with the saved property result and household needs. Give one contact responsibility for updates and another for confirming arrival; a printed map without an event-specific instruction does not complete the record." }
      ],
      example: "Hypothetical record: a Hillsborough household saved a 2025 map and planned to stay with a host across the bay. It notices the official page now displays a 2026 comparison. Its old zone entry is marked 'recheck', not silently carried forward. A contact is assigned to repeat the property lookup; another confirms the host's access and care arrangements. The proposed crossing remains an access dependency, and an alternative destination is recorded. No new zone, open bridge, activated HART service or shelter place is assumed. This is an example of unfinished planning fields, not a current route or departure recommendation."
    },
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
      "Choose a destination and transport arrangement that fit current local instructions and household needs. Confirm the destination's access, care arrangements and local hazards instead of treating a fixed travel distance as a safety rule."
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
      { question: "Can I reuse my saved Hillsborough evacuation map?", answer: "Check its version and repeat the address lookup if needed. The official county page includes 2025 and 2026 map comparisons; a saved zone result is not a current evacuation order or proof of bridge access." }
    ]
  },
  {
    kind: "city", slug: "orlando", name: "Orlando", stateName: "Florida", stateSlug: "florida",
    title: "Orlando Hurricane Preparedness 2026: Flood & Safety Guide",
    description: "Orlando hurricane preparedness for 2026: official alerts, inland wind, tornadoes, flooding, shelters, emergency kits, and local safety.",
    dateModified: "2026-11-09",
    sourceCheck: { date: "2026-11-09", scope: "Read Orange County's Shelters and Persons with Special Needs Program HTML pages; neither displayed a revision date. Checked registration contacts, caregiver/equipment planning, county selection of open sites and pet-friendly shelter distinctions. No application, eligibility decision, current opening, pickup, address or route was verified. Other local and historical background was not reverified." },
    risk: [
      "Orlando is inland and outside coastal storm-surge zones, but that does not make it hurricane-proof. Tropical cyclones crossing the peninsula can retain hurricane or tropical-storm wind, produce tornadoes in rain bands, overwhelm drainage, and knock trees onto homes and power lines.",
      "Central Florida often receives evacuees from both coasts, so hotels, roads, fuel, shelters, and medical services may be busy before local conditions deteriorate. A reservation or a relative's address still needs a check of local risk, access, pets and medical requirements; an inland destination is not automatically a safe one.",
      "Lakes, low roads, construction, saturated soil, mobile homes, and extended heat after power loss are important Orlando risks. Theme parks and airports make their own operational decisions, while Orange County and local officials control public shelter information."
    ],
    planningRecord: {
      title: "Orlando Housing, Shelter and Assistance Record",
      intro: "Decide whether the household has a suitable place to stay, then resolve any care, transport and pet requirements for that specific destination. Keep personal medical information in a private record and share it through the county's official process. This is a planning exercise, not an application or confirmation of shelter access.",
      steps: [
        { name: "Record the household's reason to move", text: "Write the full address, housing type, known flood or access concerns, and the current local instruction with its source and time. Inland Orlando's lack of coastal surge does not settle whether a mobile home, flood-prone building or power-dependent household can remain there. If you need building-specific advice, contact the property manager and responsible local agency before conditions deteriorate." },
        { name: "Separate a possible shelter from an open destination", text: "Orange County officials decide which special-needs sites open. Check the current county announcement or contact 311; record the exact open site, opening time and confirmed requirements. Do not travel to a remembered school, last season's address or a location mentioned only on social media. A designated site in a standing guide is not an opening notice." },
        { name: "Discuss medical needs with the county early", text: "The county's Persons with Special Needs program serves eligible residents and visitors who need a shelter environment with assistance from a caregiver or home health aide. Use the linked county program page or call 311 / 407-836-3111 about registration and keeping details current. Ask how your specific care and equipment needs will be handled. Keep registration, the county's response, shelter activation and transport confirmation as separate entries; do not infer all four from submitting a form." },
        { name: "Confirm the caregiver, equipment and journey", text: "The county asks people to bring their caregiver if they have one, identification and medical information, medication, daily medical equipment and supplies, bedding and personal items. Ask the care provider about equipment power and the journey's requirements; a shelter label alone does not answer those questions. If you need transport, contact the county about current arrangements and record who confirmed the pickup, when, where and what equipment or companion can travel. A pending request is an unresolved task." },
        { name: "Check pets and the return separately", text: "The county distinguishes pet-friendly shelters from general public shelters; do not assume every open site accepts household pets. Confirm the selected site's rules and prepare a carrier, vaccination records, food, water and medication. Service animals have a different role from household pets. Before returning, check official local instructions and whether your street, building, power and essential care arrangements permit return; the center moving away does not establish that." }
      ],
      example: "Fictional household: an Orlando renter uses powered medical equipment and has a cat. The record says 'county registration submitted,' 'sister agreed to accompany,' and 'pet carrier packed.' Those are useful steps, but the destination and ride remain unconfirmed. The next action is to contact the county about program status, the active shelter and transport, and ask the equipment provider about power needs. Write the response and time beside each item. Do not mark the household ready because a form was submitted, assume a hospital is a storm shelter, or publish the renter's medical details in a shared neighborhood document."
    },
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
      "I-4, Florida's Turnpike and the metro toll-road network carry both local and coastal traffic. Their names are geographic context, not recommended routes for a current event. Use current official instructions and road information; check the destination as well as the route, and do not drive into water or depend on a navigation shortcut.",
      "Orange County announces shelters and local protective actions for the event. Its standing shelter page lists three days of food and water and two weeks of prescription and nonprescription medicines among items to bring. Discuss medication availability and individual needs with the pharmacist or clinician in advance; this list is not a prescription or a reason to delay an ordered departure. Confirm caregiver, accessibility and pet arrangements for the actual open site.",
      "Hospitals are not general hurricane shelters. The county directs shelter seekers to designated public or special-needs shelters, while hospitals need capacity for serious illness and injury. An urgent medical emergency requires emergency medical help; it should not be handled by waiting on a registry application. People living in a care facility should discuss that facility's emergency plan with its staff rather than substituting this household record."
    ],
    resources: [
      { label: "Orange County emergency management", href: "https://www.orangecountyfl.net/EmergencySafety/EmergencyManagement.aspx" },
      { label: "Orange County hurricane safety", href: "https://www.orangecountyfl.net/EmergencySafety/HurricaneSafetyGuide.aspx" },
      { label: "Orange County shelter requirements", href: "https://www.orangecountyfl.net/EmergencySafety/shelters.aspx" },
      { label: "Orange County Persons with Special Needs program", href: "https://www.orangecountyfl.net/EmergencySafety/EmergencyMedicalServices/SpecialNeedsProgram.aspx" },
      { label: "NWS Melbourne", href: "https://www.weather.gov/mlb/" },
      { label: "American Red Cross Central Florida", href: "https://www.redcross.org/local/florida/central-florida.html" }
    ],
    faqs: [
      { question: "Can a hurricane reach Orlando?", answer: "Yes. Orlando is inland, but hurricanes and tropical storms can retain damaging wind and produce tornadoes, flooding, and extended outages." },
      { question: "Is Orlando in a hurricane evacuation zone?", answer: "Orlando is not in a coastal surge zone. Local shelter or evacuation guidance may still apply to mobile homes, flood-prone housing, or medical needs." },
      { question: "Which NWS office covers Orlando?", answer: "NWS Melbourne provides forecasts and warnings for Orange County and much of east-central Florida." },
      { question: "Does a special-needs registration confirm my shelter and ride?", answer: "Keep these as separate confirmations. Contact Orange County at 311 or 407-836-3111 about your status, the current open shelter and transport arrangements. This guide has not verified an individual application, opening or pickup." },
      { question: "Can I take my pet to any Orange County shelter?", answer: "Check the specific open site's designation and requirements. The county distinguishes pet-friendly shelters from general public shelters and asks for a carrier, vaccination records, food, water and any medication. Do not treat household pets and service animals as interchangeable." }
    ]
  },
  {
    kind: "city", slug: "jacksonville", name: "Jacksonville", stateName: "Florida", stateSlug: "florida",
    title: "Jacksonville Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Plan a Jacksonville hurricane departure: match the Duval address zone and local order, confirm a destination, and check JTA, medical and pet arrangements.",
    dateModified: "2026-11-09",
    sourceCheck: { date: "2026-11-09", scope: "Read JaxReady's standing HTML guidance on evacuation zones and routes, JTA evacuation transport, special medical needs registration, and general, medical and pet-friendly shelters. These pages did not display article revision dates. No address lookup, active order, shelter opening, bus service, route, application, pickup or pet admission was verified; linked forms and PDFs were not reviewed. Historical background was not reverified." },
    planningRecord: {
      title: "Jacksonville: Match the Zone, Destination and Journey",
      intro: "A Duval address, a shelter listing and a transport registration answer different questions. Build one private record that connects them, with a contact and an unfinished check beside each dependency. Jacksonville's coast and river neighborhoods make address-level instructions particularly useful, while rainfall flooding can affect areas outside the most exposed coastal zones. Use this standing guide to prepare the record; use current JaxReady announcements to decide which instructions and services apply during an event.",
      steps: [
        { name: "Pair the address zone with the actual instruction", text: "Use JaxReady's address lookup and save the full address, zone and lookup date privately. Then record any current local instruction separately: issuing agency, issue time, affected area and requested action. JaxReady describes Zone A as most vulnerable and identifies F as areas likely to flood from rainfall or other hazards. F is not simply the final rung of an A-to-F departure schedule. Neither a saved zone letter nor the absence of a coastal evacuation order resolves every rainfall, housing or medical concern." },
        { name: "Confirm who can receive the household", text: "If staying with someone, confirm the host's agreement, destination address, local instructions and ability to accommodate the household's care needs and animals. If using a public shelter, obtain the event's announced location, opening time and appropriate shelter designation. A school used last year or a standing shelter information page is not evidence that a site is open now. Save the operator's requirements and a contact who will recheck changes before departure; do not treat a list as a reserved place." },
        { name: "Check the JTA journey and its cutoff", text: "JaxReady describes free evacuation transport to open public shelters only. Its guidance identifies marked Evacuation Shuttle service and designated pickup locations, with travel before the announced cutoff. Check the current announcement for activation, where to board, accessibility and the cutoff; then establish how each person will reach the pickup point. This service does not complete a journey to a relative's house or hotel. If a medical condition prevents reaching regular transport or a transfer hub, ask the special medical needs program about eligibility and arrangements rather than assuming a vehicle will come to the home." },
        { name: "Separate medical acceptance from pickup confirmation", text: "Duval's special medical needs registration requires annual renewal, professional review and acceptance notification. Record the current acceptance status, a working callback number, the correct unit number and any requested transport separately. JaxReady says registrants in an ordered zone are contacted to confirm intent and transportation needs; acceptance alone is not an agreed pickup time. Call 904-255-3172 for registration help. Its registration page asks for a caregiver or family member to accompany the registrant. Confirm the individual's assistance, caregiver and equipment requirements with the program; a shelter's backup power and basic medical supervision do not establish support for every device or level of care." },
        { name: "Arrange the pet's ride as well as its shelter", text: "Confirm that the announced open site accepts the household's animal. JaxReady's pet-friendly guidance asks for vaccination and registration records, a crate or cage, and owner-provided care; animals may occupy a separate room. Its medical shelter guidance states that pet transportation is not provided, and its standing pet shelter page says only service animals are allowed on public transport. Confirm current operator requirements and arrange a suitable pet journey separately. A packed carrier or a pet-friendly destination does not establish a ride. Keep service-animal arrangements distinct from household-pet arrangements." },
        { name: "Keep route and return checks open until confirmed", text: "Save the proposed journey, driver or transport contact, and a person responsible for checking current official road and bridge information. JaxReady's published evacuation corridors describe geographic planning, not a live clearance for a particular bridge or access road. Do not drive through water or rely on a navigation shortcut. Record reentry instructions and whether the home can support the household's care needs before returning. For medical program transport, JaxReady describes return by the same mode after program officials verify a safe, habitable home; confirm individual arrangements with that program. Keep an offline copy of contacts and unresolved checks with essential supplies." }
      ],
      example: "Hypothetical record: a household has saved a Zone F result, a relative has offered a room, and a member has received this year's medical registry acceptance. The household also has a cat. The record still shows four unfinished checks: current instructions for the home and destination, whether the relative can support the person's care needs, the person's actual transport arrangement, and the cat's ride. JTA's public-shelter service is not a ride to the relative; registry acceptance is not a pickup booking; the cat's carrier is not transport confirmation. Assign a contact to each check and resolve the destination and journey together. This example does not verify a real address, medical application, order, shelter or vehicle."
    },
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
      "Duval County uses lettered evacuation zones A through F. Check the exact address and current instructions. JaxReady identifies F with rainfall or other flood hazards; do not infer a simple alphabetic timetable or assume a letter establishes that staying is safe. Local instructions can also address mobile homes and other vulnerable housing.",
      "JaxReady's planning routes connect the beaches with westbound corridors and identify alternatives for other travelers. I-10, I-95, I-295 and roads across the St. Johns and Intracoastal are geographic context, not recommended live routes here. Follow current local routing and departure instructions. For help with Duval routes, zones or special needs information, emergency management lists 904-255-3110.",
      "A medical needs shelter provides basic assistance, not every level of medical care. Confirm support for medications, equipment, diet and a caregiver in advance, and bring required personal supplies. Do not travel to a medical shelter until officials announce its location and opening time. An urgent medical emergency requires emergency medical help rather than waiting for a registration or evacuation pickup."
    ],
    resources: [
      { label: "JaxReady emergency management", href: "https://www.jaxready.com/" },
      { label: "Duval address lookup and zone definitions", href: "https://www.jaxready.com/alerts/evacuation-zones" },
      { label: "JTA evacuation transport and cutoff guidance", href: "https://www.jaxready.com/preparedness/evacuation-information/jta-evacuation-information" },
      { label: "Duval annual medical needs registration", href: "https://www.jaxready.com/preparedness/special-medical-needs-registration" },
      { label: "JaxReady shelter opening guidance", href: "https://www.jaxready.com/preparedness/shelter-information" },
      { label: "Medical shelter support and requirements", href: "https://www.jaxready.com/preparedness/shelter-information/special-medical-needs-shelter-information" },
      { label: "Pet-friendly shelter requirements", href: "https://www.jaxready.com/preparedness/shelter-information/pet-friendly-shelter-information" },
      { label: "Duval evacuation route planning", href: "https://www.jaxready.com/preparedness/evacuation-information/evacuation-routes" },
      { label: "NWS Jacksonville", href: "https://www.weather.gov/jax/" },
      { label: "American Red Cross North Florida", href: "https://www.redcross.org/local/florida/north-florida.html" }
    ],
    faqs: [
      { question: "Is Jacksonville at risk from hurricanes?", answer: "Yes. Coastal surge, St. Johns River flooding, rainfall, wind and outages can affect different parts of the city. A storm does not need a direct Jacksonville landfall to cause dangerous conditions. Check the address and current local instructions." },
      { question: "What Duval evacuation zone am I in?", answer: "Use JaxReady's address lookup for zones A through F and follow the current order for the property." },
      { question: "Can Jacksonville bridges close during a storm?", answer: "Wind, water, crashes, or official traffic controls can restrict bridges, so ordered zones should leave during the announced window." },
      { question: "Does Zone F mean I evacuate last?", answer: "Do not infer an alphabetical departure schedule. JaxReady identifies F as areas likely to flood from rainfall or other hazards. Match the property's zone and circumstances to the current local instruction, including its affected area and requested action." },
      { question: "Will a JTA evacuation shuttle take me to a hotel?", answer: "JaxReady describes free evacuation transport to open public shelters only. Confirm current activation, pickup location, accessibility and the announced cutoff. Arrange a separate journey if the destination is a hotel or private home." },
      { question: "Does medical registry acceptance confirm a pickup?", answer: "No. Renew registration annually and keep the acceptance notice, callback details and transport confirmation separate. JaxReady describes contact with registrants in an ordered zone to confirm intent and transport needs. Call 904-255-3172 about registration and confirm the individual caregiver, equipment and journey arrangements with the program." },
      { question: "Does a pet-friendly shelter provide a ride for my pet?", answer: "A shelter designation does not confirm pet transportation. JaxReady's medical shelter page says pet transport is not provided, and its standing pet-friendly page limits public transport to service animals. Confirm current operator requirements and arrange a suitable journey, records, carrier and owner-provided care for the pet." }
    ]
  },
  {
    kind: "city", slug: "houston", name: "Houston", stateName: "Texas", stateSlug: "texas",
    title: "Houston Hurricane Preparedness 2026: Flood & Evacuation",
    description: "Build a Houston hurricane record that separates local instructions, rainfall and channel observations, transport, destination and household care needs.",
    dateModified: "2026-11-02",
    sourceCheck: { date: "2026-11-02", scope: "Read Houston OEM's public contact/navigation, Harris County Flood Warning System's rainfall, channel-status and water-level interface, and TxDOT's hurricane evacuation-route page. The flood-tool HTML includes an unavailable-data notice; no live observation, map interaction, route, order, shelter or assistance arrangement was verified. Historical background was not reverified." },
    planningRecord: {
      title: "Houston: Separate the Order, Flood Observation and Care Plan",
      intro: "A Houston-area household can need coastal evacuation information, local flood observations and an outage plan at the same time. Give these different evidence fields rather than writing one overall 'safe' status. Houston OEM supplies city emergency information; the responsible county may be different for a property elsewhere in the metro. Harris County's Flood Warning System separates rainfall, channel status and water levels. None of those measurements alone completes a household transport or care arrangement.",
      steps: [
        { name: "Record the actual jurisdiction and applicable instruction", text: "Save the full address and responsible city or county privately. Locate that agency's evacuation information, then keep any event instruction with its source, issue time, affected area and required action. Do not apply one Galveston Bay coastal notice to every inland Houston household. Conversely, a blank coastal-zone field cannot resolve an inland flood warning or a need for medical support." },
        { name: "Keep rainfall and channel observations in separate fields", text: "When consulting the Harris County Flood Warning System, record the selected site, measurement type, displayed units, observation time and accumulation period where applicable. Rainfall totals describe precipitation; channel levels and channel status answer a different question. A nearby gauge is an observation at that site, not a measured depth at the home. Leave missing or unavailable observations unresolved rather than entering zero." },
        { name: "Confirm a care and cooling arrangement", text: "Identify who needs essential equipment power, temperature-controlled medicine, assistance or a place to cool during a prolonged outage. Record the specific provider's advice and the receiving person's contact. A charged battery or a utility medical-needs listing does not establish how long equipment will run, that a ride is booked, or that power will be restored by a particular time. Keep each confirmation distinct." },
        { name: "Connect a destination with an actual journey", text: "Confirm the host or shelter operator can receive the household and its equipment or animals. Save the destination's own local instructions and who will recheck them. TxDOT publishes district evacuation maps and links DriveTexas for route information; these are planning and status resources, not a guarantee that every segment is passable. Record the origin, destination, proposed route and transport contact together." },
        { name: "Treat flooded access as a failed route check", text: "Do not translate a gauge color, a navigation shortcut or a receding water report into permission to cross floodwater. Check current official warnings and road information before travel. If a proposed journey depends on an underpass, bayou crossing or access road with unresolved conditions, keep that dependency open and contact the appropriate local source. A historical rain total cannot establish today's street condition." },
        { name: "Save a short offline handoff", text: "Assign who carries essential documents, medication instructions and equipment, who contacts the destination, and who follows updated instructions. Keep a backup contact outside the immediate household and record which arrangements are confirmed, pending or failed. Use the separate supply tool for quantities; this sheet should remain a readable account of the people, observations, dependencies and next checks needed for the plan." }
      ],
      example: "Hypothetical record: an inland Harris County household has a relative willing to host someone using powered medical equipment. The selected flood-observation site has no usable current reading, and the relative has not confirmed an appropriate power arrangement. The household records 'observation unavailable' and 'equipment power pending', not 'no flooding' and 'destination ready'. A designated contact checks current NWS and local instructions; another speaks with the equipment provider and host about an alternative. No actual gauge, household medical need, route or destination is verified here. The example shows why the order, a water observation and a care confirmation cannot be compressed into one readiness score."
    },
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
      "Check the responsible city or county's coastal evacuation guidance and current instruction for the full address. Record any applicable local zone or ZIP designation. Inland flood, housing and care needs require their own checks; a metro-wide stay-or-leave rule cannot resolve them.",
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
      { question: "Should all Houston residents evacuate?", answer: "Follow the actual local instruction for the address and assess housing, coastal or inland flooding, transport and care needs with the relevant agencies and providers. A metro-wide stay-or-leave rule cannot settle every household's situation." },
      { question: "Which NWS office covers Houston?", answer: "NWS Houston/Galveston issues local forecasts, watches, warnings, and storm information for the region." },
      { question: "Does an unavailable flood reading mean no flooding?", answer: "No. Leave the observation unresolved and check current official warnings and local information. A gauge reading is site-specific and cannot certify that a road, underpass or property is safe." }
    ]
  },
  {
    kind: "city", slug: "new-orleans", name: "New Orleans", stateName: "Louisiana", stateSlug: "louisiana",
    title: "New Orleans Hurricane Preparedness 2026: Evacuation & Surge",
    description: "Prepare for New Orleans city-assisted evacuation: separate alerts, the hub journey, medical pickup, carry-on limits, pet transport and return instructions.",
    dateModified: "2026-11-09",
    sourceCheck: { date: "2026-11-09", scope: "Read NOLA Ready's hurricane plan, seniors and medical needs, pet owners, and flooding HTML guidance. No article revision dates were displayed. Checked the standing assisted-evacuation process, medical profile and assistance contacts, luggage exceptions and pet arrangements. No current order, hub opening, bus, pickup, shelter, route, profile or reentry permission was verified; linked PDFs and interactive tools were not reviewed. Historical background was not reverified." },
    planningRecord: {
      title: "New Orleans: Plan Both Stages of Assisted Evacuation",
      intro: "A household without a car needs to connect two journeys: reaching the city's evacuation hub, then leaving the region through the activated assistance process. An alert subscription, a medical profile and registration at the hub have different purposes. Keep these separate in a private household record, including who will resolve an unfinished arrangement. NOLA Ready's standing hurricane plan describes city assistance during a mandatory evacuation. This guide helps prepare for that process; it does not announce that assistance or any particular site is operating now.",
      steps: [
        { name: "Choose a departure plan and its official information source", text: "Record the address and parish privately, along with whether the household can self-evacuate or needs city assistance. Orleans Parish instructions do not replace those for relatives in Jefferson, St. Bernard or Plaquemines. NOLA Ready says all residents and visitors must leave when the city issues a mandatory evacuation. Its plan directs people who might need assistance to text EVACNOLA to 77295 for information if a mandatory evacuation occurs. Receiving those messages is not a transport booking. If leaving independently, confirm the driver and receiving host or lodging directly; do not wait for the city assistance process to arrange a private trip." },
        { name: "Connect the home-to-hub journey with the onward trip", text: "The standing plan names the Smoothie King Center as the evacuation hub, with onsite registration and onward travel by bus, train or airplane to a state or federal shelter. Treat the named hub as a planning reference until current city announcements confirm activation, access and timing. The plan describes modified RTA routes heading downtown and assistance through 311 for mobility-limited residents. Write down how each person will reach the announced boarding or entry point, who can help, and when that service stops. The published timeline is an estimate, so use the event's instructions rather than calculating a personal deadline from a landfall forecast. Do not use an old Evacuspot screenshot as current boarding instructions." },
        { name: "Make medical and mobility needs visible before a threat", text: "NOLA Ready asks residents with relevant needs to create a Smart911 profile and complete its medical section; it also lists 311 for help. Its seniors guidance says some residents may qualify for home pickup when evacuation resources are available. A completed profile is information for the city, not confirmation of a vehicle, pickup time or suitable care at a shelter. Save the callback number, mobility and equipment requirements, caregiver contact and questions for the responsible program. Discuss individual care and equipment continuity with the treating or equipment provider. Keep the journey and receiving arrangements unresolved until confirmed. Call 911 for a life-threatening emergency rather than waiting for routine assistance." },
        { name: "Pack to the city's carry-on rule and its exceptions", text: "NOLA Ready's assisted-evacuation plan allows one carry-on-sized bag per person. It says medical devices, diaper bags and other necessary personal items do not count toward that one-bag limit. Pack essential medication and instructions, identification, contacts, documents, clothing and personal supplies so they can travel with the person who needs them. Identify who handles each device or bag, and ask the city about any uncertain item before departure. Do not discard a necessary device simply to fit a suitcase, or assume any amount of extra ordinary luggage is accepted. Use the separate supply checklist for the household inventory and keep this travel load portable." },
        { name: "Record the pet's transport and shelter separately", text: "The hurricane plan says small pets weighing 20 pounds or less may ride on regular buses in carriers. It directs residents with larger pets to call 311 for dedicated pet transport. Bring the pet's ID collar, leash, medication and carrier, and confirm the current event's boarding arrangements. The pet-owner page says pet information is registered onsite and describes an animal shelter near the household's shelter, where the owner provides care. Do not assume a larger pet travels on the same bus or sleeps in the same room. The standing pages describe pet transport operators differently, so confirm the current operator and handoff through the city rather than relying on one provider name. Ask separately about service-animal arrangements where applicable." },
        { name: "Prepare an arrival contact and a separate return decision", text: "Keep a household contact list offline, with an out-of-area person who can receive updated destination information after registration and assignment. Make a plan for separated caregivers or pets using the actual program's tracking and handoff instructions. An outbound city-assisted journey does not establish a hotel booking or a date for the homeward trip. Before returning, check the city's current resident reentry announcement, road conditions and whether the home can support the household's needs. NOLA Ready describes business reentry tiers separately from the general public; an employer's early return does not authorize the household to follow. Do not drive through floodwater to test access." }
      ],
      example: "Hypothetical packing and journey check: two adults plan to use city assistance, one uses a walker, and their dog weighs 35 pounds. They have two carry-on bags and have subscribed to evacuation texts. The bag count matches the published ordinary-luggage allowance, and the walker is a necessary mobility item to discuss and keep with its user. However, the texts do not confirm hub activation or home pickup. The dog is above the plan's small-pet threshold, so the household still needs to confirm dedicated pet transport through 311 and the animal's care handoff. Their record assigns one person to confirm accessible travel to the hub and another to confirm the pet journey. They keep both tasks open until the responsible service responds. This is an invented exercise, not an eligibility decision, approved load or verified evacuation arrangement."
    },
    risk: [
      "New Orleans lies between the Mississippi River, Lake Pontchartrain, surrounding wetlands, navigation channels, and low terrain. Hurricane risk includes regional storm surge, intense rainfall, wind, tornadoes, pump and power failure, and loss of access even where levees reduce some water risk.",
      "The Hurricane and Storm Damage Risk Reduction System and local drainage infrastructure reduce risk but cannot eliminate it. Residents should not use the presence of levees as a reason to ignore an evacuation order, and should not assume every neighborhood experiences the same source or depth of flooding.",
      "Households may depend on public transportation, powered equipment, elevators, pet transport and caregiver support. NOLA Ready distinguishes an evacuation information subscription, a Smart911 profile for relevant needs, and registration at the activated evacuation hub. Plan these tasks early and confirm the actual journey; no single signup completes them all."
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
      "New Orleans officials issue guidance for the city, while neighboring parishes issue their own orders. Keep the source, issue time, affected area and requested action with the address record. During a mandatory city evacuation, residents and visitors must leave; without one, NOLA Ready asks households to decide whether to leave or shelter in place according to their circumstances.",
      "I-10, I-55, I-59, US 61, and connecting routes carry regional traffic. Contraflow is an official incident-specific action; never assume it will operate or enter a reversed route without instructions.",
      "If staying when no mandatory evacuation is ordered, plan for loss of power, water and access to pharmacies or other businesses. A levee or an assistance profile does not establish that a home can meet an individual's care needs through an outage. If leaving, check the destination's own conditions and transport instructions before treating the plan as complete.",
      "NOLA Ready links Streetwise for street flooding reports. A report describes a location and time, not clearance for an entire journey; an unmarked road is not proof of safe access. Check current official closures and NWS warnings. Never walk or drive through floodwater, and do not return until authorities permit it."
    ],
    resources: [
      { label: "NOLA Ready", href: "https://ready.nola.gov/" },
      { label: "New Orleans evacuation information", href: "https://ready.nola.gov/plan/hurricane/" },
      { label: "City-assisted evacuation process and packing rules", href: "https://ready.nola.gov/plan/hurricane/#cae" },
      { label: "Medical and mobility profile guidance", href: "https://ready.nola.gov/plan/seniors/" },
      { label: "Pet transport, registration and shelter care", href: "https://ready.nola.gov/plan/pet-owners/" },
      { label: "New Orleans flooding and return precautions", href: "https://ready.nola.gov/plan/flooding/" },
      { label: "NWS New Orleans/Baton Rouge", href: "https://www.weather.gov/lix/" },
      { label: "American Red Cross Louisiana", href: "https://www.redcross.org/local/louisiana.html" }
    ],
    faqs: [
      { question: "Is New Orleans under a hurricane threat now?", answer: "Check the current NHC advisory, NWS New Orleans/Baton Rouge alerts, and NOLA Ready. This permanent page does not itself indicate a threat." },
      { question: "Does New Orleans have evacuation zones?", answer: "The city issues event-specific guidance and assisted evacuation information, while surrounding parishes use their own plans. Follow the current instruction for the address." },
      { question: "What if I do not have a car in New Orleans?", answer: "Prepare both the trip to the announced evacuation hub and the onward assisted journey. NOLA Ready describes city-assisted evacuation during a mandatory evacuation. Text EVACNOLA to 77295 for information and contact 311 about assistance; confirm activation, access, accessibility and operating times in the current city instructions." },
      { question: "Do New Orleans levees make evacuation unnecessary?", answer: "No. Risk-reduction systems do not remove all surge, rain, wind, outage, or access hazards. Follow official evacuation guidance." },
      { question: "Does a Smart911 profile book an evacuation pickup?", answer: "No. NOLA Ready asks people with relevant medical or mobility needs to complete the medical section and says some may qualify for home pickup when resources are available. Confirm eligibility and the actual pickup and receiving arrangements through the city; a profile is not a vehicle booking." },
      { question: "Does the one-bag rule include a walker or medical device?", answer: "The standing city-assisted plan allows one carry-on-sized bag per person and excludes medical devices, diaper bags and other necessary personal items from that count. Confirm uncertain items and handling needs with the city; this guide has not approved any individual load." },
      { question: "Can a large dog ride with me during city-assisted evacuation?", answer: "The hurricane plan allows pets weighing 20 pounds or less in carriers on regular buses and directs larger-pet owners to 311 for dedicated transport. Confirm current boarding and handoff arrangements. The pet-owner page describes an animal shelter near the person's shelter, with owner-provided care, so do not assume the same bus or room." },
      { question: "Can residents return when businesses receive reentry placards?", answer: "Business reentry tiers and general resident return are different. Check the current city announcement for residents and confirm the route and home conditions before returning; a business placard announcement does not establish that your household can reenter." }
    ]
  },
  {
    kind: "city", slug: "charleston", name: "Charleston", stateName: "South Carolina", stateSlug: "south-carolina",
    title: "Charleston Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Prepare a Charleston evacuation plan with the correct local route, confirmed transport, medical equipment power, caregiver support and pet-friendly shelter.",
    dateModified: "2026-11-09",
    sourceCheck: { date: "2026-11-09", scope: "Read Charleston County's emergency-management contact page, hurricane Evacuation and Shelters tabs, and shelter-status page; SCEMD's Know Your Zone and hurricane traffic-management guidance; and the state hurricane guide's evacuation, Medical Equipment Power Shelter and return sections. No article revision dates were displayed. No address lookup, current order, live road/bridge condition, transport, individual admission or care arrangement was verified. Linked PDFs, forms and interactive maps were not reviewed. Historical background was not reverified." },
    planningRecord: {
      title: "Charleston: Match the Route, Receiving Place and Care Needs",
      intro: "A Charleston-area departure plan needs more than an I-26 destination on a navigation app. The state's standing routes differ for downtown, West Ashley and the islands, while a place with electrical power may still lack the care a person needs. Keep the applicable instruction, journey and receiving arrangements in separate fields of a private household record. A saved map or a listed program is useful preparation; it is not confirmation that a road, vehicle or shelter is available for the current event.",
      steps: [
        { name: "Keep the exact address, county and instruction together", text: "Use SCEMD's Know Your Zone entry for the property and save the returned location and zone, source URL and lookup date privately. Resolve a misplaced marker or a boundary question with the responsible agency. A Charleston mailing address or a relative's nearby zone does not establish the result; the metro includes more than one county. Keep FEMA flood-insurance labels separate from the evacuation result. During a threat, add the actual notice's issuer, issue time, affected zones and required action. If the current notice has not been checked, record that task as unfinished rather than concluding there is no order." },
        { name: "Choose the official route for the departure area", text: "Open the Charleston Area section of the state hurricane guide instead of assigning every household to I-26. Its standing directions send downtown traffic to the normal I-26 lanes, West Ashley toward SC 61 and US 78, and Johns Island, Kiawah Island and Seabrook via SC 700 and Main Road toward US 17 south and SC 64. These examples identify different planning corridors, not today's turn-by-turn instructions. Check the current route and traffic-control directions before departure. SCEMD warns that GPS may not follow official evacuation routes. Do not move a barricade or seek an unannounced entrance to reversed lanes; I-26 reversal is conditional, with entry points closed while officials set it up." },
        { name: "Confirm a usable ride and an accepted destination", text: "If driving, record the driver, fuel, passenger and equipment load, receiving contact and backup destination. A road leading inland does not establish that lodging has space or electricity. If the household lacks a car or needs accessible transport, contact Charleston County Emergency Management at 843-746-3800 before a threat for the appropriate assistance process. Record the reply, pickup or boarding instructions, accessibility, caregiver and pet arrangements, and operating times. This is the county's published office contact, not a verified round-the-clock dispatch line or a booked ride. Reconfirm event activation through current announcements. Do not turn a stop, school or assembly point from an old guide into an instruction to travel there." },
        { name: "Separate equipment power from medical care", text: "The state hurricane guide describes Medical Equipment Power Shelters, or MEPS, for people needing electricity for medical equipment or room for a hospital bed. It directs callers to 833-351-9990 for access and possible transport arrangements. The same guidance says staff can provide CPR while calling 911 but do not provide other medical care and may not be licensed health workers; a caregiver is generally required. Discuss the person's equipment, medications, supplies, diet and care needs with the program and treating or equipment provider before treating MEPS as a suitable destination. Record admission and transport instructions separately. A working outlet does not establish nursing care, individual eligibility or permission to arrive at a site." },
        { name: "Confirm the pet-friendly site and the whole pet journey", text: "The county distinguishes pet-friendly shelters from general public shelters, where ordinary pets are not accepted; service animals are treated separately. Confirm the currently announced site's designation and the animal's transport and intake requirements. Pack a carrier or crate, vaccination and medical records, identification, food, water and medication. A shelter accepting pets does not establish that a particular vehicle will carry the animal or that it can stay in the same sleeping space. Ask about those details rather than importing another county's rules. The county encourages a suitable inland host or hotel where possible and warns that those places can also lose power. Keep a backup if the receiving place cannot support both the person and pet." },
        { name: "Check current shelter activation and the later return separately", text: "Use the county's shelter-status page and current announcements before leaving for a public site. Standing preparedness guidance and an old school list are not an opening notice. Pack the county's recommended portable food and water, bedding, personal supplies, medications and medical information, with the program's own instructions for individual needs. Tell an out-of-area contact the actual destination once confirmed. On the return leg, follow local permission and traffic restrictions: the state warns that some areas remain inaccessible even after an evacuation order is rescinded. Check the route and the home's power, water and care arrangements again. Never drive through floodwater to test whether access has returned." }
      ],
      example: "Hypothetical household check: two adults on Johns Island have a car, a relative inland has offered a room, one adult needs powered medical equipment and caregiver help, and they have a cat. Their record initially says 'I-26, relative, pet carrier.' Reading the state route guide reveals a different standing corridor for their departure area, which they still need to compare with event instructions. The relative has not confirmed backup power, and reading about MEPS does not supply caregiver services or approve admission. They assign one person to check the current local instruction and route, and the other to confirm equipment and care with the receiving household or appropriate program, plus the cat's destination. Until those replies arrive, the record says host offered, power/care unresolved, current route not checked. This is an invented planning exercise, not an address lookup, personal care recommendation or current evacuation arrangement."
    },
    risk: [
      "Charleston occupies a low peninsula between tidal rivers and a harbor connected to the Atlantic. Barrier islands, marshes, creeks, old drainage systems, high tide, and sea-level rise can combine with tropical rainfall and surge to flood roads well before the eye approaches.",
      "Risk varies across downtown, West Ashley, James Island, Johns Island, Mount Pleasant, North Charleston, and nearby barrier islands. A storm can pass offshore and still produce dangerous onshore water, tornadoes, tree damage, and long outages across the tri-county area.",
      "Experience with ordinary tidal flooding is not a reliable test of access during a hurricane. Surge, rain and high water can cut routes to islands, hospitals and receiving places; a familiar dry-weather shortcut cannot replace current warnings and official traffic directions."
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
      "Use the exact-address evacuation lookup and the current state and local instruction together. A map describes planning areas; it does not announce an evacuation. Visitors should check the county and location of their lodging rather than assuming a downtown instruction applies to every coastal community.",
      "Charleston County links the state's area-specific route guide and says drivers may not be able to choose their route once an order is given. Match the starting area to official directions, then follow law enforcement and traffic-control devices. A GPS shortcut or an I-26 lane assignment from a previous storm may conflict with the active operation.",
      "SCEMD says evacuation operations stop and crews seek shelter before tropical-storm-force winds. Roads can flood, bridges can close and help may be unavailable; do not wait for visible severe conditions to finish the journey. Use the current departure instruction rather than calculating an exact deadline from a forecast center's arrival.",
      "Confirm the receiving place, necessary care and pet arrangements before treating the trip as ready. Even inland lodging can lose electricity. Leave and return according to current official instructions, and never enter a flooded road or park or shelter in a flood-prone garage."
    ],
    resources: [
      { label: "Charleston County emergency management and office contact", href: "https://www.charlestoncounty.gov/departments/emergency-management/" },
      { label: "South Carolina evacuation zones", href: "https://www.scemd.org/prepare/know-your-zone/" },
      { label: "State area-specific routes, equipment power shelters and return guidance", href: "https://hurricane.sc/evacuate" },
      { label: "SCEMD traffic management and conditional lane reversals", href: "https://scemd.org/prepare/know-your-zone/hurricane-traffic-management/" },
      { label: "County evacuation guidance", href: "https://www.charlestoncounty.gov/departments/emergency-management/hurricane.php#evacuation_info" },
      { label: "County shelter supplies and pet-friendly distinctions", href: "https://www.charlestoncounty.gov/departments/emergency-management/hurricane.php#shelters" },
      { label: "Charleston County current shelter-status page", href: "https://www.charlestoncounty.gov/departments/emergency-management/shelters.php" },
      { label: "NWS Charleston", href: "https://www.weather.gov/chs/" },
      { label: "American Red Cross South Carolina", href: "https://www.redcross.org/local/south-carolina.html" }
    ],
    faqs: [
      { question: "Is Charleston threatened by a hurricane now?", answer: "Check the live NHC feed, NWS Charleston alerts, and current state and county notices. This standing preparedness guide is not a current warning." },
      { question: "What Charleston evacuation zone am I in?", answer: "Use SCEMD's official address lookup, confirm the returned location and county, and check the current instruction separately. Do not substitute a FEMA insurance label or assign a zone from a whole island's name." },
      { question: "Will I-26 reverse for every hurricane?", answer: "No. Lane reversal is activated only by official state decision for a specific event." },
      { question: "Should every Charleston household plan to use I-26?", answer: "No. The state guide gives different standing corridors for downtown, West Ashley, Johns Island and other areas. Read the route for the actual departure area, then follow current official controls; a saved route or GPS recommendation is not proof of access." },
      { question: "Does a Medical Equipment Power Shelter provide nursing care?", answer: "The state guide says MEPS provide generator power and space for equipment, but staff do not provide medical care beyond CPR while calling 911, and a caregiver is generally required. Call the listed program contact, 833-351-9990, to discuss access and transport; this guide has not confirmed individual admission or suitability." },
      { question: "Can I take a pet to any Charleston County shelter?", answer: "Ordinary pets need a currently designated pet-friendly shelter; the county distinguishes these from general public shelters and separately permits service animals. Confirm transport and intake rules, and bring a carrier, records, food, water, identification and medication." },
      { question: "How do I arrange evacuation without a car?", answer: "Before a threat, ask Charleston County Emergency Management at its published office number, 843-746-3800, about the applicable assistance process. Confirm current activation, boarding, accessibility, equipment, caregivers and pets with the responsible service. Calling an office or reading a plan does not book a ride." },
      { question: "Can I return as soon as an evacuation order ends?", answer: "Check current local permission, traffic restrictions and home conditions. The state guide warns that some areas remain inaccessible after an order is rescinded. Confirm the actual route and necessary services, and never enter floodwater to test access." }
    ]
  },
  {
    kind: "city", slug: "savannah", name: "Savannah", stateName: "Georgia", stateSlug: "georgia",
    title: "Savannah Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Build a Savannah hurricane record using Chatham's official zones, transport and care confirmations, and a sourced Matthew water-level example.",
    dateModified: "2026-11-06",
    sourceCheck: { date: "2026-11-06", scope: "CEMA's current EvacuationZones and EvacuationResources explanation pages and their linked map entry; NWS Charleston's Matthew summary and preliminary Fort Pulaski storm-tide report. Replaced the older soft-404 zone link. No address lookup, current order, assembly-area activation, ride, shelter, road condition or medical arrangement was verified." },
    planningRecord: {
      title: "Savannah: Confirm the Zone, Instruction and Transport Handoff",
      intro: "Keep one private record that separates a map result from an official instruction and from an agreed way to travel. CEMA's zone page lists A, B and C; its assistance page describes an assembly-area process and a separate Hurricane Registry. Reading those pages is preparation, not confirmation that either service is activated or that an individual has a place. Use the exact county source and write unconfirmed beside arrangements that have not been agreed.",
      steps: [
        { name: "Save the Chatham map result with its source", text: "Open CEMA's official zone page and follow its interactive-map link for the property. Record the address privately, returned designation, map version if displayed, source URL and lookup date. CEMA describes Zone A east of the Truman Parkway and Vernon River, Zone B west of the Truman Parkway but east of I-95, and Zone C west of I-95. Those descriptions help identify the local system; use the official map or CEMA to resolve a boundary rather than assigning a zone from a nearby landmark or a ZIP point." },
        { name: "Read the actual instruction for that area", text: "During a threat, save the notice's issuing authority, original URL, issue time and timezone, affected area, action and any stated timing. CEMA's standing explanation distinguishes an Evacuation Order encouraging departure from a Mandatory Evacuation Order requiring the targeted area to evacuate. Read the specific notice for its scope and wording; a stored zone result alone does not show an order. If the notice has not been checked, write not checked, rather than no order." },
        { name: "Confirm the assistance process before treating it as transport", text: "CEMA's standing resource page describes CAT transport to an assembly area at Enmarket Arena and onward buses to inland public shelter. It explicitly says this process is for people with no other means of transport, is a last option, and does not provide parking for people who drive there expecting a bus. Before using it, confirm current activation, pickup, accessibility, baggage and assembly instructions with the responsible service. Record the contact and reply. The named arena on a standing page is not evidence it is open today." },
        { name: "Resolve care, animals and the destination separately", text: "Ask CEMA or the health department whether the Hurricane Registry is the right process for a household with functional, access or medical needs. Record application status separately from confirmed instructions, transport and care placement. The standing assistance page also says pets travel separately and stay in a separate shelter in the destination area. Ask about the actual animal arrangement, required records and care continuity rather than assuming an ordinary passenger seat or general shelter supplies everything needed." },
        { name: "Make the route and arrival check a named task", text: "Assign someone to check the current local departure instructions, transport agency road restrictions and destination acceptance. Record a fallback contact and an offline copy of the essential information. I-16's presence on a map does not establish activated contraflow, open access or a safe travel time. Never drive through floodwater. If an immediate warning requires shelter, follow it; this long-term worksheet is not a reason to begin a dangerous trip." }
      ],
      example: "Hypothetical record, not a current order: a Savannah household has saved a result from CEMA's linked map and a relative has agreed to receive the family. A household member has read the standing Enmarket assembly process but has not confirmed its activation or suitable transport for a mobility device. The record therefore marks destination agreed, current local instruction not checked, and transport/accessibility unconfirmed. One contact verifies CEMA's actual instruction and assistance process while another reconfirms the receiving household's access and equipment needs. Neither a registry application nor the known zone changes those open fields to confirmed. No address, individual transport entitlement or present-day service availability is asserted here."
    },
    risk: [
      "Savannah sits along the tidal Savannah River near marshes, creeks, barrier islands, and low coastal communities. Storm surge can enter from the Atlantic through sounds and waterways, while heavy rainfall and high tide slow drainage across Chatham County.",
      "Tybee Island, eastern islands, riverfront areas, and low roads face different access and water risks from inland neighborhoods. Tropical storms passing offshore or striking Florida and South Carolina can still produce serious coastal flooding, tornadoes, wind, and outages.",
      "Historic trees and overhead utilities add wind vulnerability, while ports, tourism, and limited island bridges complicate evacuation. Residents and visitors should know their zone and county alert source before a storm appears in the short-range forecast.",
      "Historical evidence: NWS Charleston's Matthew summary reports a preliminary Fort Pulaski storm tide of 12.56 feet relative to Mean Lower Low Water (MLLW) at 0742 UTC on October 8, 2016, equivalent to 3:42 AM EDT. Storm tide includes astronomical tide and surge; 12.56 feet MLLW is not 12.56 feet of water above ground at a Savannah home. The same summary's maximum surge occurred at a different time. Use this distinction when reading coastal measurements, then use the county's map and actual instruction for the property. The linked NWS event page preserves the source's preliminary status; this guide does not present it as today's water level or a current all-time record."
    ],
    history: [
      { storm: "Matthew (2016)", detail: "NWS Charleston's event summary reports preliminary Fort Pulaski storm tide of 12.56 feet MLLW at 0742 UTC on October 8. This is water level relative to a tidal datum, not depth above residential ground." }
    ],
    evacuation: [
      "Use CEMA's official Evacuation Zones page and its linked map to check the exact address. Chatham's A-C system and map boundaries belong to the county; neither a FEMA flood zone nor a ZIP representative point assigns the result.",
      "Keep the current order's area and timing separate from road and transport confirmations. Check official route restrictions and destination acceptance before travel. I-16 contraflow is an event-specific official decision, not an automatic feature of every hurricane threat.",
      "Follow the applicable local evacuation or shelter instruction. Give transport and care arrangements an explicit contact and backup; a submitted assistance application is not the same as confirmed current instructions. Stop unsafe outdoor tasks and never enter flooded roads."
    ],
    resources: [
      { label: "Chatham Emergency Management Agency", href: "https://chathamemergency.org/" },
      { label: "CEMA evacuation zones and interactive-map entry", href: "https://chathamemergency.org/PrepareNow/EvacuationZones" },
      { label: "CEMA evacuation transport and Hurricane Registry procedures", href: "https://chathamemergency.org/PrepareNow/EvacuationResources" },
      { label: "NWS Matthew 2016: Fort Pulaski storm-tide measurement and datum", href: "https://www.weather.gov/chs/HurricaneMatthew-Oct2016" },
      { label: "NWS Charleston", href: "https://www.weather.gov/chs/" },
      { label: "American Red Cross Georgia", href: "https://www.redcross.org/local/georgia.html" }
    ],
    faqs: [
      { question: "Is Savannah at risk from the current storm?", answer: "Compare the live NHC advisory with NWS Charleston and Chatham County alerts. This page alone does not indicate a current threat." },
      { question: "What Chatham County evacuation zone am I in?", answer: "Open CEMA's official zone page and follow its interactive-map link for the exact property. The county lists zones A-C. Save the result and lookup date, then check the current instruction separately; this guide has not assigned a zone to your address." },
      { question: "Does I-16 always use contraflow?", answer: "No. Georgia activates I-16 contraflow only for specific evacuations and announces the timing and access rules." },
      { question: "Can Savannah flood without a direct landfall?", answer: "Yes. NWS Charleston's Matthew summary documents significant coastal and freshwater flooding while the storm moved off Georgia. Its preliminary Fort Pulaski storm tide is expressed relative to MLLW, not as water depth above ground at an individual home." },
      { question: "Does knowing my zone confirm evacuation transport?", answer: "No. Check the actual local instruction and current assistance process, then confirm transport, access and destination arrangements. Reading the standing assembly-area page or submitting a registry application alone is not a confirmed ride or care placement." }
    ]
  },
  {
    kind: "city", slug: "wilmington", name: "Wilmington", stateName: "North Carolina", stateSlug: "north-carolina",
    title: "Wilmington Hurricane Preparedness 2026: Evacuation & Safety",
    description: "Wilmington hurricane preparedness for 2026: official alerts, Know Your Zone, Cape Fear flooding, evacuation routes, and safety.",
    dateModified: "2026-11-10",
    sourceCheck: { date: "2026-11-10", scope: "Read New Hanover County's Evacuation & Shelters page including its shelter panel, Access & Functional Needs Registry page, and NC Emergency Management's Know Your Zone page including unzoned-area and reentry answers. No visible revision dates. Checked standing procedures, not a property lookup, current order, shelter opening, transport booking, clinical placement or road status. Retained hazard and historical background was not reverified." },
    planningRecord: {
      title: "A Wilmington Plan That Connects the Address, Ride and Receiving Place",
      intro: "Keep this record privately with your household, not in a public form. New Hanover County's standing shelter page separates possible shelter sites from actual activation, and its access registry supports preparation rather than replacing a personal plan. Complete each confirmation before the departure window becomes tight. A checked zone or a submitted application is only one part of the journey.",
      steps: [
        { name: "Record the address and the instruction separately", text: "Use the NC Emergency Management Know Your Zone address lookup for the actual home or vacation rental, then save the result and lookup date. Record the issuing authority, affected area and timing of any evacuation notice separately. The state explains that an area without a predetermined zone can still receive emergency instructions. A blank map result therefore does not settle whether a flood-prone home, manufactured home or household with medical needs should remain. Ask county officials when the address or instruction is unclear; a neighboring beach town's notice may cover a different jurisdiction." },
        { name: "Confirm a receiving place before selecting the journey", text: "Contact the host or lodging provider, check the destination's own local instructions and keep an alternate arrangement. New Hanover County calls public shelters a last resort with basic provisions and limited meal capability. Its listed schools are planning locations; they do not all open or close together. If a public shelter becomes necessary, use the county's event announcement to confirm the specific location and opening time. Match the vehicle, accessible entry and assistance required by the household to that confirmed destination, rather than driving to a remembered school address." },
        { name: "Treat registry enrollment as preparation, not a pickup ticket", text: "The county's Access & Functional Needs Registry allows staff to contact enrolled residents ahead of an anticipated emergency to discuss their plans and provide official information. The main registry page lists 910-798-6900 for questions. Ask what support can actually be arranged, who will call back, whether the vehicle and receiving place can meet mobility or equipment needs, and what to do if a call does not arrive. Record confirmed transport separately. The page excludes specified facility residents and people receiving comprehensive home-health or hospice services; those households should review their provider's emergency plan directly." },
        { name: "Keep the pet and care plan with the person", text: "The county's standing policy provides for at least one cat-and-dog co-location shelter, with owners staying at the shelter and animals in a separate area. It says to bring vaccination records and five to seven days of pet food. That policy does not identify today's open facility, accept every species or reserve a place. Confirm activation and animal arrangements before travel, and keep a backup host for other animals. Separately confirm medication, power, caregiver and clinical needs with the responsible provider and receiving location; a general shelter listing does not certify medical suitability." },
        { name: "Recheck road access before departure and before return", text: "Use the traffic and travel link on the state's Know Your Zone page for DriveNC incident and congestion information, together with county instructions. Write down when conditions were checked, the planned route and an alternate receiving place; a saved road number is not a promise of passage. Do not enter floodwater or improvise a flooded-road detour. NC Emergency Management says local officials determine when travel and return are safe and may stage reentry. Carry identification and contact the accommodation provider before returning to a rental. Wind decreasing or a booking date arriving does not establish that roads, services or the property are ready." }
      ],
      example: "Hypothetical exercise: a Wilmington renter has saved the address lookup, enrolled a relative in the access registry and circled a school on the county shelter list. The zone lookup and enrollment are recorded, but the ride, medical suitability and shelter opening remain unconfirmed. The household contacts the registry team and care provider, confirms an accessible ride to an accepting host outside the instructed area, and keeps the shelter announcement as a backup to check. A cat travels with vaccination records and supplies. Before any return, the household checks local reentry instructions and asks the landlord about property access. This is a planning example, not an active order, approved placement or promised service."
    },
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
      "Open the state Know Your Zone address lookup, then compare its result with the current New Hanover County or relevant municipality instruction. The map supports planning; the actual notice determines the area and timing. No predetermined zone is not a guarantee against later emergency instructions.",
      "Use the county's current evacuation and shelter announcements and the state page's DriveNC travel link. I-40 or a familiar bridge cannot be assumed usable. Confirm the ride, destination and alternate before departure, and do not enter flooded roads.",
      "Only travel to a shelter after its event-specific opening has been confirmed. The county's predetermined school list is not an open-shelter list. Local officials determine reentry timing; check road information and property availability again before returning."
    ],
    resources: [
      { label: "New Hanover County evacuation, shelter activation and pet rules", href: "https://www.nhcgov.com/203/Evacuation-Shelters" },
      { label: "New Hanover County Access & Functional Needs Registry", href: "https://www.nhcgov.com/1193/Access-Functional-Needs-Registry" },
      { label: "NC Know Your Zone: address lookup, orders and DriveNC entry", href: "https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone" },
      { label: "NWS Wilmington", href: "https://www.weather.gov/ilm/" },
      { label: "American Red Cross Eastern North Carolina", href: "https://www.redcross.org/local/north-carolina/eastern-north-carolina.html" }
    ],
    faqs: [
      { question: "Is Wilmington in the hurricane forecast?", answer: "Use the latest NHC cone and NWS Wilmington alerts. A permanent tracker page is not evidence that Wilmington is currently threatened." },
      { question: "What Wilmington evacuation zone am I in?", answer: "Enter the full address in the state Know Your Zone lookup and follow the current local instruction separately. An area without a predetermined zone can still receive emergency directions. This guide has not looked up or assigned your property's zone." },
      { question: "Can Wilmington become isolated after a hurricane?", answer: "Yes. Florence showed how river and road flooding can restrict access after coastal wind decreases." },
      { question: "Are the schools on the county shelter page open now?", answer: "The list is for planning. New Hanover County says shelters do not all open or close at the same time; use its event-specific announcements for the facility and opening time. A listed address is not a reservation or current opening notice." },
      { question: "Does the access registry confirm an evacuation ride?", answer: "Enrollment supports advance contact and preparation; record a confirmed ride and suitable receiving place separately. Ask the county registry team about the actual assistance process and your care provider about medical arrangements. The checked main page lists 910-798-6900 for registry questions." },
      { question: "Can my pet stay with me in a county shelter?", answer: "The standing cat-and-dog co-location policy requires owners to stay at the shelter, with pets housed in a separate area. Bring vaccination records and five to seven days of pet food, and confirm the activated facility. Arrange another option for animals outside the policy." },
      { question: "Can I return when hurricane winds ease?", answer: "Not on that fact alone. State guidance says local officials determine safe return and may use staged reentry. Check travel restrictions, carry identification and confirm the home or accommodation is available before setting off." }
    ]
  },
  {
    kind: "city", slug: "virginia-beach", name: "Virginia Beach", stateName: "Virginia", stateSlug: "virginia",
    title: "Virginia Beach Hurricane Preparedness 2026: Zone Safety",
    description: "Virginia Beach hurricane preparedness for 2026: official alerts, Know Your Zone, coastal flooding, bridge routes, and local safety.",
    dateModified: "2026-11-10",
    sourceCheck: { date: "2026-11-10", scope: "Read Virginia Beach Emergency Management's Evacuating page and Evacuation Centers page including medical and pet panels, and VDEM's Know Your Zone HTML page. No visible revision dates. Checked standing route, activation and care limitations, not an address result, current order, crossing restriction, transport arrangement or placement. Retained hazard and historical background was not reverified. Ask officials about species-specific pet acceptance; the standing pet list contains an unclear turtle/reptile distinction." },
    planningRecord: {
      title: "A Virginia Beach Departure Record Beyond the Zone Letter",
      intro: "Virginia's A-D zone system helps target evacuation instructions to an address, but it does not book transport or establish a destination. Build one household record that connects the actual order with an accepting host or activated evacuation center. Include a callback number, an alternate plan and the time each arrangement was checked; keep personal medical details with your care team rather than submitting them to this site.",
      steps: [
        { name: "Match both addresses to the actual instruction", text: "Start at VDEM's Know Your Zone page and use its linked interactive lookup for the full street address. Save the result for the home and check the proposed destination too. The state designates zones A-D; the current state or city directive determines which areas need to leave for the particular event. Virginia Beach notes that an order does not necessarily require every resident to leave town. A friend's home elsewhere in the city may be an option only after its exposure, the applicable instruction, access and the household's needs have been checked. Do not infer the result from a ZIP code or citywide headline." },
        { name: "Choose a route from official instructions, then check conditions", text: "The city's Evacuating page explicitly says the Chesapeake Bay Bridge-Tunnel is not a designated hurricane evacuation route because of its exposure to high winds. Do not confuse that crossing with the Monitor-Merrimac Memorial Bridge-Tunnel included in the city's route list. A route listed in a standing plan still needs current road and crossing checks. The same page describes I-64 lane reversal as conditional on a governor's order; do not assume reversed lanes or every ramp will be available. Record the actual departure instruction and route updates instead of relying on GPS to choose a different crossing when traffic builds." },
        { name: "Confirm the ride and the center's activation independently", text: "Virginia Beach calls evacuation centers a last resort when staying home is unsafe and other options are unavailable. Only selected centers may open, with locations and opening times announced through the city, local TV and radio. Contact the receiving host or verify the activated center before finalizing travel. Ask the transport provider about pickup, mobility equipment, caregiver and pet arrangements, and a backup if the trip changes. The city Emergency Management contact on the checked pages is 757-385-1077, with Virginia Relay TTY 711. It is a source for planning questions, not a confirmed vehicle dispatch or reserved bed." },
        { name: "Check the medical support boundary before relying on a center", text: "The city's medically friendly component describes additional assistance for physical, mental, cognitive or sensory impairments, including help with medication and activities of daily living. It is not intended for significant illness or injury or total dependence on others for care. The city gives examples including bedridden people, NG feeding tubes and recovery from surgery. A household needing care beyond the stated scope should plan with its clinical team and an appropriate receiving provider before travel. Confirm equipment power, medicine storage, caregiver presence and the handoff; the word medically friendly does not establish suitability for a particular person." },
        { name: "Keep pet acceptance and return arrangements explicit", text: "The city says a pet shelter may open if needed and expects owners to care for their animals. Its list includes dogs and cats, but activation and species acceptance must be confirmed for the actual event. Bring a crate, leash or collar, food, medicine, vaccination records and comfort items. For other animals, ask the operator about that specific species rather than extrapolating from a general pet-friendly label; keep an alternative receiving arrangement. Before returning home, seek current city access instructions and road information, then confirm the property can be occupied and the household's care and power needs can be met. An open outbound route or a quiet forecast is not a reentry decision." }
      ],
      example: "Hypothetical exercise: a Zone A household plans to stay with a friend, follows GPS toward the Chesapeake Bay Bridge-Tunnel, and assumes a medically friendly center will cover a relative's recovery from surgery if the visit falls through. The record exposes three unresolved assumptions: the friend's address must be checked against the actual order, the proposed crossing is not the city's designated hurricane evacuation route, and postoperative care may exceed the center's stated scope. The household confirms an appropriate receiving provider with its care team, arranges a suitable ride, and follows current official route instructions. No crossing, center or care place is confirmed by this exercise."
    },
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
      "Use VDEM's Know Your Zone address lookup and save the result. Zones A-D are planning areas; the current directive determines which areas must leave. Check the destination as well as the origin. An evacuation order does not necessarily require everyone to leave the city.",
      "Follow the city's current route and traffic instructions. Its standing evacuation page explicitly excludes the Chesapeake Bay Bridge-Tunnel as a designated hurricane evacuation route. I-64 lane reversal depends on a governor's order; neither a remembered plan nor GPS confirms that a crossing or ramp is open.",
      "Confirm a receiving host or activated center and a suitable ride before departure. Check the center's care limits and pet arrangements separately. Do not drive through floodwater, and obtain current access and road information before attempting a return."
    ],
    resources: [
      { label: "Virginia Beach official evacuation route and lane-reversal guidance", href: "https://oem.virginiabeach.gov/emergency-preparedness/during/evacuating" },
      { label: "Virginia Beach centers: activation, medical limits and pets", href: "https://oem.virginiabeach.gov/emergency-preparedness/during/evacuation-centers" },
      { label: "VDEM Know Your Zone and address-lookup entry", href: "https://www.vdem.virginia.gov/know-your-zone" },
      { label: "NWS Wakefield", href: "https://www.weather.gov/akq/" },
      { label: "American Red Cross Coastal Virginia", href: "https://www.redcross.org/local/virginia/about-us/locations/coastal-virginia.html" }
    ],
    faqs: [
      { question: "Is Virginia Beach under a hurricane warning?", answer: "Check NWS Wakefield, the NHC advisory, and city alerts. This standing tracker does not indicate a current warning." },
      { question: "What Virginia Beach evacuation zone am I in?", answer: "Use Virginia Know Your Zone for the address and follow the current instruction for zones A through D." },
      { question: "Is the Chesapeake Bay Bridge-Tunnel a hurricane evacuation route?", answer: "The city's standing evacuation page explicitly says it is not a designated hurricane evacuation route because it is susceptible to high winds. This is different from the Monitor-Merrimac Memorial Bridge-Tunnel listed by the city. Follow current official directions and crossing conditions rather than a GPS shortcut." },
      { question: "Will I-64 automatically use reversed lanes?", answer: "No. The city's standing page describes reversal as conditional on a governor's order. Check the announced event instructions; do not assume the plan is active or that every ramp will be available." },
      { question: "Can a medically friendly evacuation center provide hospital-level care?", answer: "Do not assume that. The city describes additional assistance but excludes significant illness or injury and total dependence on others for care, with examples such as bedridden people, NG feeding tubes and recovery from surgery. Confirm an appropriate plan with the care team and receiving provider." },
      { question: "Does a pet policy mean a shelter is open for my animal?", answer: "No. The city may open a pet shelter if needed and expects owners to provide care and supplies. Confirm the activated location and specific animal acceptance. For species beyond dogs and cats, obtain a direct answer from the operator and keep a backup arrangement." }
    ]
  }
];

export function getLocalPreparednessPage(kind: LocalPreparednessPage["kind"], slug: string) {
  return localPreparednessPages.find((page) => page.kind === kind && page.slug === slug);
}
