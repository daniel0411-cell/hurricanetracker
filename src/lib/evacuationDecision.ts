export type OfficialStatus = "unknown" | "none" | "watch" | "hurricane" | "surge" | "flood" | "tornado" | "evacuation";
export type EvacuationRecommendation = {
  level: "Unconfirmed" | "Monitor" | "Prepare" | "Act" | "Leave";
  summary: string;
  actions: string[];
};

export function evacuationDecision(status: OfficialStatus): EvacuationRecommendation {
  if (status === "evacuation") return {
    level: "Leave",
    summary: "Follow your local mandatory evacuation order and its timing immediately. Unfinished household arrangements do not cancel an order.",
    actions: ["Use the routes and destinations designated by local officials.", "Take medication, IDs, essential supplies, pets, and chargers.", "If conditions prevent safe travel or you need transport assistance, contact local emergency management; call 911 for immediate danger. Never drive through floodwater."]
  };
  if (status === "tornado") return {
    level: "Act",
    summary: "Take tornado shelter immediately. Do not start a hurricane evacuation trip during an immediate tornado threat.",
    actions: ["Go to a basement, safe room, or small interior room on the lowest floor of a sturdy building, away from windows.", "Protect your head and neck. Mobile homes and vehicles are not safe tornado shelters.", "Follow the warning's instructions and remain sheltered until officials say the threat has passed."]
  };
  if (status === "flood") return {
    level: "Act",
    summary: "Act on the flood warning now. Move to higher ground if instructed or threatened by rising water; do not delay protective action to finish a checklist.",
    actions: ["Read the warning for the affected area and immediate instructions.", "Stay out of flooded roads, underpasses, and moving water.", "If trapped by rising water, seek a higher safe level and call 911 for immediate danger."]
  };
  if (status === "surge" || status === "hurricane") return {
    level: "Act",
    summary: status === "surge"
      ? "Life-threatening coastal inundation is expected in the warning area. Follow local evacuation instructions promptly."
      : "Hurricane conditions are expected in the warning area. Complete safe protective actions promptly and follow local evacuation or shelter instructions.",
    actions: ["Check whether your address or evacuation zone is covered by a local order; follow its timing.", "Arrange transport and assistance now if needed. Travel only while conditions and official instructions permit.", "If remaining under local guidance, use a safe shelter and keep official alerts enabled. Unchecked household boxes do not cancel a warning."]
  };
  if (status === "watch") return {
    level: "Prepare",
    summary: "Prepare supplies, transport, and a destination now. Follow official updates and any evacuation instructions.",
    actions: ["Check your evacuation zone and local emergency management notices.", "Pack medication, documents, water, food, and pet supplies.", "Arrange fuel, charging, and assistance before conditions deteriorate."]
  };
  if (status === "none") return {
    level: "Monitor",
    summary: "No alert found in the sources you checked is not an all-clear. Keep checking official alerts and maintain your household plan.",
    actions: ["Keep official phone alerts enabled.", "Confirm your county evacuation zone and shelter options.", "Maintain essential supplies and review transport needs."]
  };
  return {
    level: "Unconfirmed",
    summary: "Official status has not been confirmed. Check the latest local warning and evacuation instructions; do not assume there is no alert.",
    actions: ["Open the latest NWS warning and local emergency-management instructions for your location.", "Record the source, issue time, affected area and required protective action.", "If you face immediate danger, take protective action and call 911; do not wait to complete this record."]
  };
}
