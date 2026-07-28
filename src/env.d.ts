/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
}

interface RuntimeEnv {
  HURRICANEHUB_CACHE?: KVNamespace;
  HURRICANEHUB_ASSETS?: R2Bucket;
}

declare namespace App {
  interface Locals {
    runtime?: {
      env?: RuntimeEnv;
    };
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}
