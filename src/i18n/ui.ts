export const defaultLang = "en";

export const languages = {
  en: "English",
  es: "Español"
};

export type Lang = keyof typeof languages;

const ui = {
  en: {
    "nav.home": "Home",
    "nav.tracker": "Tracker",
    "nav.alerts": "Alerts",
    "nav.radar": "Radar",
    "nav.standalone": "Standalone",
    "nav.compare": "Compare",
    "nav.tools": "Tools",
    "nav.prepare": "Prepare",
    "nav.blog": "Blog",
    "nav.about": "About",
    "theme.toggle": "Toggle dark mode",
    "theme.dark": "Dark",
    "theme.light": "Light",
    "language.label": "Language",
    "disclaimer.text":
      '⚠️ Data sourced from NOAA/National Hurricane Center. This site is for informational purposes only and should not be used for life-critical decisions. Please rely on official alerts at <a href="https://www.weather.gov/">weather.gov</a>.',
    "footer.text":
      "Uses official NOAA, National Hurricane Center, and National Weather Service public feeds. Decision support only; follow official alerts at weather.gov.",
    "footer.sitemap": "Sitemap",
    "footer.rss": "RSS"
  },
  es: {
    "nav.home": "Inicio",
    "nav.tracker": "Seguimiento",
    "nav.alerts": "Alertas",
    "nav.radar": "Radar",
    "nav.standalone": "Radar independiente",
    "nav.compare": "Comparar",
    "nav.tools": "Herramientas",
    "nav.prepare": "Prepárate",
    "nav.blog": "Blog",
    "nav.about": "Acerca de",
    "theme.toggle": "Cambiar modo oscuro",
    "theme.dark": "Oscuro",
    "theme.light": "Claro",
    "language.label": "Idioma",
    "disclaimer.text":
      '⚠️ Datos provenientes de NOAA/Centro Nacional de Huracanes. Este sitio es solo informativo y no debe usarse para decisiones de vida o muerte. Siga las alertas oficiales en <a href="https://www.weather.gov/">weather.gov</a>.',
    "footer.text":
      "Usa fuentes públicas oficiales de NOAA, el Centro Nacional de Huracanes y el Servicio Meteorológico Nacional. Apoyo para decisiones; siga alertas oficiales en weather.gov.",
    "footer.sitemap": "Mapa del sitio",
    "footer.rss": "RSS"
  }
} as const;

export type UIKey = keyof typeof ui.en;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] as string) ?? ui.en[key];
  };
}
