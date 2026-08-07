import { site } from "../data/site";

type Faq = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: site.sameAs
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/alerts/?state={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? new Date().toISOString(),
    author: organizationSchema(),
    publisher: organizationSchema(),
    about: ["Hurricane tracking", "Emergency management", "Weather alerts"]
  };
}

export function blogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  authorName?: string;
}) {
  return {
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Organization",
      name: params.authorName ?? site.name
    },
    publisher: organizationSchema(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url
    },
    about: ["Hurricane safety", "Emergency preparedness", "Weather alerts"]
  };
}

export function howToSchema(params: {
  name: string;
  description: string;
  url?: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    ...(params.url ? { url: params.url } : {}),
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };
}

export function webApplicationSchema(params: {
  name: string;
  description: string;
  url: string;
  featureList?: string[];
}) {
  return {
    "@type": "WebApplication",
    name: params.name,
    description: params.description,
    url: params.url,
    applicationCategory: "WeatherApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    creator: organizationSchema(),
    publisher: organizationSchema(),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    featureList: params.featureList ?? [
      "Hurricane tracking",
      "NWS alert decision support",
      "Emergency preparedness planning"
    ]
  };
}

export function itemListSchema(items: Array<{ name: string; url: string; description?: string }>) {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function graph(...items: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items
  };
}
