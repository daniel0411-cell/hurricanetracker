import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://hurricanehub.pages.dev",
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
    inspectorPort: false
  }),
  build: {
    format: "directory"
  }
});
