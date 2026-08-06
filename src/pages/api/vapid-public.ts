import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const GET: APIRoute = () => {
  const publicKey = (env as any).VAPID_PUBLIC_KEY as string | undefined;
  return Response.json({
    publicKey: publicKey ?? null,
    supported: Boolean(publicKey)
  });
};
