/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
}

interface RuntimeEnv {
  HURRICANEHUB_CACHE?: KVNamespace;
  HURRICANEHUB_ASSETS?: R2Bucket;
  ASSETS?: Fetcher;
}

declare namespace App {
  interface Locals {
    runtime?: {
      env?: RuntimeEnv;
    };
  }
}

declare namespace Cloudflare {
  interface Env {
    HURRICANEHUB_CACHE?: KVNamespace;
    HURRICANEHUB_ASSETS?: R2Bucket;
    ASSETS: Fetcher;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
