/**
 * Minimal Web Push implementation using Cloudflare Workers' native WebCrypto.
 * No Node-only deps (web-push won't run on the edge). Implements:
 *  - VAPID JWT signing (ES256 / ECDSA P-256)
 *  - RFC 8291 payload encryption (legacy "aesgcm" scheme: ECDH P-256 + HKDF + AES-128-GCM)
 *
 * Env vars (generate via `npx web-push generate-vapid-keys`):
 *  VAPID_PUBLIC_KEY  base64url of uncompressed EC point (65 bytes: 0x04|x|y)
 *  VAPID_PRIVATE_KEY base64url of raw private scalar (32 bytes)
 *  VAPID_SUBJECT     mailto: or https: contact string
 */

function b64urlEncode(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlDecode(input: string): Uint8Array {
  const pad = input.length % 4 === 0 ? "" : "=".repeat(4 - (input.length % 4));
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function utf8(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}
function concat(...parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const p of parts) {
    out.set(p, off);
    off += p.length;
  }
  return out;
}

async function hmac(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const ck = await crypto.subtle.importKey("raw", key as BufferSource, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", ck, data as BufferSource));
}

function setVapidGlobals(env: VapidEnv) {
  (globalThis as any).VAPID_PUBLIC_KEY = env.VAPID_PUBLIC_KEY;
  (globalThis as any).VAPID_PRIVATE_KEY = env.VAPID_PRIVATE_KEY;
}
function getVapidPublic(): string {
  const v = (globalThis as any).VAPID_PUBLIC_KEY as string | undefined;
  if (!v) throw new Error("VAPID_PUBLIC_KEY missing");
  return v;
}

async function importVapidPrivate(privB64: string): Promise<CryptoKey> {
  const raw = b64urlDecode(privB64);
  const pub = b64urlDecode(getVapidPublic());
  const x = pub.slice(1, 33);
  const y = pub.slice(33, 65);
  return crypto.subtle.importKey(
    "jwk",
    { kty: "EC", crv: "P-256", d: b64urlEncode(raw), x: b64urlEncode(x), y: b64urlEncode(y) },
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"]
  );
}

async function signVapidJwt(audience: string, subject: string): Promise<string> {
  const priv = await importVapidPrivate((globalThis as any).VAPID_PRIVATE_KEY);
  const header = { typ: "JWT", alg: "ES256" };
  const now = Math.floor(Date.now() / 1000);
  const payload = { aud: audience, exp: now + 12 * 3600, sub: subject };
  const h = b64urlEncode(utf8(JSON.stringify(header)));
  const p = b64urlEncode(utf8(JSON.stringify(payload)));
  const signingInput = `${h}.${p}`;
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, priv, utf8(signingInput) as BufferSource);
  return `${signingInput}.${b64urlEncode(new Uint8Array(sig))}`;
}

export interface PushSubscriptionLike {
  endpoint: string;
  keys: { p256dh: string; auth: string };
}
interface VapidEnv {
  VAPID_PUBLIC_KEY?: string;
  VAPID_PRIVATE_KEY?: string;
  VAPID_SUBJECT?: string;
}

/** RFC 8291 (legacy aesgcm) encryption of a UTF-8 payload. */
export async function encryptPayload(
  p256dhB64: string,
  authB64: string,
  plaintext: string
): Promise<{ ciphertext: Uint8Array; salt: Uint8Array; ephemeralPublicB64: string }> {
  const auth = b64urlDecode(authB64);
  const uaPublic = b64urlDecode(p256dhB64); // client public key (65 bytes)
  const eph = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const ephPublic = new Uint8Array(await crypto.subtle.exportKey("raw", eph.publicKey)); // 65 bytes
  const uaPubKey = await crypto.subtle.importKey("raw", uaPublic as BufferSource, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdhBits = await crypto.subtle.deriveBits({ name: "ECDH", public: uaPubKey }, eph.privateKey, 256);
  const ecdh = new Uint8Array(ecdhBits);

  // RFC 8291 §3.3: combine ECDH shared secret with auth secret
  const keyInfo = concat(utf8("WebPush: info"), new Uint8Array([0x00]), uaPublic, ephPublic);
  const prkKey = await hmac(auth, ecdh);
  const ikm = await hmac(prkKey, concat(keyInfo, new Uint8Array([0x01])));

  // RFC 8188: derive CEK + nonce
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, concat(utf8("Content-Encoding: aes128gcm"), new Uint8Array([0x00, 0x01])))).slice(0, 16);
  const nonce = (await hmac(prk, concat(utf8("Content-Encoding: nonce"), new Uint8Array([0x00, 0x01])))).slice(0, 12);

  const aesKey = await crypto.subtle.importKey("raw", cek as BufferSource, { name: "AES-GCM" }, false, ["encrypt"]);
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce as BufferSource, tagLength: 128 }, aesKey, utf8(plaintext) as BufferSource);
  return { ciphertext: new Uint8Array(ct), salt, ephemeralPublicB64: b64urlEncode(ephPublic) };
}

export async function sendWebPush(
  subscription: PushSubscriptionLike,
  payload: { title: string; body: string; url?: string },
  env: VapidEnv
): Promise<number> {
  if (!env.VAPID_PRIVATE_KEY || !env.VAPID_PUBLIC_KEY) throw new Error("VAPID keys not configured");
  setVapidGlobals(env);
  const subject = env.VAPID_SUBJECT || "mailto:alerts@hurricanetracker.cc";
  const audience = new URL(subscription.endpoint).origin;
  const jwt = await signVapidJwt(audience, subject);
  const { ciphertext, salt, ephemeralPublicB64 } = await encryptPayload(
    subscription.keys.p256dh,
    subscription.keys.auth,
    JSON.stringify(payload)
  );
  const res = await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      TTL: "600",
      Urgency: "high",
      Topic: "hurricanehub-alerts",
      Authorization: `WebPush ${jwt}`,
      "Crypto-Key": `dh=${ephemeralPublicB64}; p256ecdsa=${env.VAPID_PUBLIC_KEY}`,
      Encryption: `salt=${b64urlEncode(salt)}`,
      "Content-Encoding": "aesgcm",
      "Content-Type": "application/octet-stream"
    },
    body: ciphertext as BodyInit
  });
  return res.status;
}
