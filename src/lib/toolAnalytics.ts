type ToolName = "storm_distance" | "local_risk" | "evacuation_decision" | "wind_mitigation";
type ToolOutcome = "success" | "no_data" | "error";

export function trackToolResult(tool: ToolName, outcome: ToolOutcome) {
  try {
    const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
    analytics.gtag?.("event", "tool_result", {
      tool_name: tool,
      outcome,
      page_path: window.location.pathname
    });
  } catch {
    // Analytics must never prevent a household tool from displaying its result.
  }
}
