export type OfficialStatus = "none" | "watch" | "hurricane" | "surge" | "flood" | "tornado" | "evacuation";
export type EvacuationRecommendation = {
  level: "Monitor" | "Prepare" | "Act" | "Leave";
  summary: string;
  actions: string[];
};

export function evacuationDecision(status: OfficialStatus, householdScore: number): EvacuationRecommendation {
  // Official instructions and immediate hazards take precedence over household scoring.
  if (status === "evacuation") return {
    level: "Leave",
    summary: "Follow your local mandatory evacuation order and its timing immediately. Household scores cannot override an evacuation order.",
    actions: ["Use the routes and destinations designated by local officials.", "Take medication, IDs, essential supplies, pets, and chargers.", "If conditions prevent safe travel or you need transport assistance, contact local emergency management; call 911 for immediate danger. Never drive through floodwater."]
  };
  if (status === "tornado") return {
    level: "Act",
    summary: "Take tornado shelter immediately. Do not start a hurricane evacuation trip during an immediate tornado threat.",
    actions: ["Go to a basement, safe room, or small interior room on the lowest floor of a sturdy building, away from windows.", "Protect your head and neck. Mobile homes and vehicles are not safe tornado shelters.", "Follow the warning's instructions and remain sheltered until officials say the threat has passed."]
  };
  if (status === "flood") return {
    level: "Act",
    summary: "Act on the flood warning now. Move to higher ground if instructed or threatened by rising water; do not wait for a household score.",
    actions: ["Read the warning for the affected area and immediate instructions.", "Stay out of flooded roads, underpasses, and moving water.", "If trapped by rising water, seek a higher safe level and call 911 for immediate danger."]
  };
  if (status === "surge" || status === "hurricane") return {
    level: "Act",
    summary: status === "surge"
      ? "Life-threatening coastal inundation is expected in the warning area. Follow local evacuation instructions promptly."
      : "Hurricane conditions are expected in the warning area. Complete safe protective actions promptly and follow local evacuation or shelter instructions.",
    actions: ["Check whether your address or evacuation zone is covered by a local order; follow its timing.", "Arrange transport and assistance now if needed. Travel only while conditions and official instructions permit.", "If remaining under local guidance, use a safe shelter and keep official alerts enabled. A low household score does not cancel a warning."]
  };
  if (householdScore >= 4) return {
    level: "Act",
    summary: "Arrange assistance and a safe destination early. Household vulnerability calls for planning now; this score is not an evacuation order.",
    actions: ["Contact local emergency management about transport, accessible shelters, and medical needs.", "Confirm your evacuation zone and official departure instructions.", "Keep medication, documents, pet supplies, and essential equipment ready."]
  };
  if (status === "watch" || householdScore >= 2) return {
    level: "Prepare",
    summary: "Prepare supplies, transport, and a destination now. Follow official updates and any evacuation instructions.",
    actions: ["Check your evacuation zone and local emergency management notices.", "Pack medication, documents, water, food, and pet supplies.", "Arrange fuel, charging, and assistance before conditions deteriorate."]
  };
  return {
    level: "Monitor",
    summary: "Keep checking official alerts and maintain your household plan. A low score is not an all-clear.",
    actions: ["Keep official phone alerts enabled.", "Confirm your county evacuation zone and shelter options.", "Maintain essential supplies and review transport needs."]
  };
}
