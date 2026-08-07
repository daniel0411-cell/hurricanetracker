import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.hurricanetracker.cc",
  output: "server",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  adapter: cloudflare({
    imageService: "compile",
    inspectorPort: false
  }),
  build: {
    format: "directory"
  }
});
