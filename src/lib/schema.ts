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
  dateModified?: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.image,
    dateModified: params.dateModified ?? new Date().toISOString(),
    author: organizationSchema(),
    publisher: organizationSchema(),
    about: ["Hurricane tracking", "Emergency management", "Weather alerts"]
  };
}

export function graph(...items: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items
  };
}
