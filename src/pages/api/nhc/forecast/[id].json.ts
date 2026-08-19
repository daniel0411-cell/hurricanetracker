import type { APIRoute } from "astro";
import { getNhcForecast } from "../../../../lib/nhcForecast";

export const GET: APIRoute = async ({ params }) => {
  const id = String(params.id ?? "").toLowerCase();
  if (!/^[a-z]{2}\d{6}$/.test(id)) return Response.json({ error: "Invalid storm id" }, { status: 400 });
  try {
    const forecast = await getNhcForecast(id);
    return forecast
      ? Response.json(forecast, { headers: { "cache-control": "public, max-age=120" } })
      : Response.json({ error: "Storm or official forecast GIS unavailable" }, { status: 404 });
  } catch (error) {
    console.error("NHC forecast GIS proxy failed", { id, error });
    return Response.json({ error: "NHC forecast GIS unavailable" }, { status: 502 });
  }
};
