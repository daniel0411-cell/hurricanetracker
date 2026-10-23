import "../styles/mapBasemap.css";

export const basemapUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
export function basemapOptions(theme: "light" | "dark") {
  return {
    maxZoom: 8,
    className: theme === "dark" ? "map-base-dark" : "",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  };
}

export function watchBasemap(layer: { on(event: string, callback: () => void): unknown }, host: HTMLElement) {
  let warning = host.querySelector<HTMLElement>(".map-basemap-warning");
  if (!warning) {
    warning = document.createElement("div");
    warning.className = "map-basemap-warning";
    warning.setAttribute("role", "status");
    warning.textContent = "Geographic basemap unavailable. Do not use the overlays alone for location or travel decisions. Retry when your connection is available.";
    warning.hidden = true;
    host.appendChild(warning);
  }
  const notice = warning;
  let failed = false;
  layer.on("loading", () => { failed = false; });
  layer.on("tileerror", () => { failed = true; notice.hidden = false; });
  layer.on("load", () => { if (!failed) notice.hidden = true; });
}
