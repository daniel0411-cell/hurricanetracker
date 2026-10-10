type CachedWeather<T> = { value: T; cacheStatus: "hit" | "miss" };

// Only public, short-lived weather data belongs here; durable records stay in KV.
export async function cachedWeather<T>(key: string, ttlSeconds: number, load: () => Promise<T>): Promise<CachedWeather<T>> {
  let cache: Cache | undefined;
  const request = new Request(`https://www.hurricanetracker.cc/__weather-cache/v1/${encodeURIComponent(key)}`);
  try {
    cache = typeof caches === "undefined" ? undefined : (caches as CacheStorage & { default?: Cache }).default;
    const response = await cache?.match(request);
    if (response) {
      const stored = (await response.json()) as { value: T; expiresAt: number };
      if (stored.expiresAt > Date.now()) return { value: stored.value, cacheStatus: "hit" };
    }
  } catch (error) {
    console.error("Weather edge cache read failed", { key, error: String(error) });
  }

  const value = await load();
  if (value != null) {
    try {
      await cache?.put(
        request,
        Response.json(
          { value, expiresAt: Date.now() + ttlSeconds * 1000 },
          {
            headers: { "cache-control": `public, max-age=${ttlSeconds}` },
          },
        ),
      );
    } catch (error) {
      console.error("Weather edge cache write failed", { key, error: String(error) });
    }
  }
  return { value, cacheStatus: "miss" };
}
