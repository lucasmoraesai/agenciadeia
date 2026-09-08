import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  WHATSAPP,
  PLANS,
} from "./config";

export type FaqItem = { q: string; a: string };

/**
 * Constrói a Metadata de uma página com canonical, Open Graph e Twitter
 * consistentes (resolve caminhos relativos ao SITE_URL).
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Caminho com barra final (trailingSlash: true). Use "/" na home. */
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Schema.org — Organization (marca nohumans / agenciadeia.tech). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "nohumans",
    alternateName: "agenciadeia.tech",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${WHATSAPP}`,
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [INSTAGRAM, LINKEDIN],
  };
}

/** Schema.org — Person (fundador e responsável técnico). */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Lucas Moraes",
    url: SITE_URL,
    email: EMAIL,
    jobTitle: "Founder & AI Engineer",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: [INSTAGRAM, LINKEDIN],
  };
}

/** Schema.org — WebSite. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export type OfferInput = {
  name: string;
  price: number;
  description?: string;
  /** id do plano usado no checkout (ex.: "ilimitado"). */
  plan?: string;
};

/** Schema.org — Service com ofertas (preços em BRL, mensal). */
export function serviceSchema({
  name,
  description,
  offers,
}: {
  name: string;
  description: string;
  offers: OfferInput[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name,
    description,
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    audience: { "@type": "BusinessAudience" },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/checkout/?plan=${offer.plan ?? (offer.name === "Ilimitado" ? "ilimitado" : "agencia")}`,
    })),
  };
}

/** Schema.org — OfferCatalog com os planos da assinatura. */
export function offerCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Planos nohumans",
    url: `${SITE_URL}/#planos`,
    itemListElement: PLANS.map((plan, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: plan.name,
      description: plan.includes.join(". "),
      price: plan.price.replace(/\D/g, ""),
      priceCurrency: "BRL",
      url: `${SITE_URL}${plan.href ?? "/checkout/?plan=ilimitado"}`,
    })),
  };
}

/** Schema.org — FAQPage (usado por Google e motores de IA). */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
