import { site, fullAddress } from "./site";

/**
 * JSON-LD schema builders. Rendered via the <JsonLd /> component.
 */

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: "US",
};

/** AccountingService (a ProfessionalService/LocalBusiness subtype) */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: baseAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.googleBusinessProfile,
    sameAs: [site.googleBusinessProfile, site.facebook],
    openingHours: site.hoursSchema,
    priceRange: "$$",
    areaServed: [
      { "@type": "State", name: "Arkansas" },
      { "@type": "Place", name: "Northwest Arkansas" },
      { "@type": "Country", name: "United States" },
    ],
    founder: {
      "@type": "Person",
      name: site.owner,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner,
    jobTitle: "Owner",
    worksFor: {
      "@type": "AccountingService",
      name: site.legalName,
      url: site.url,
    },
    telephone: site.phone,
    email: site.email,
    url: `${site.url}/about`,
    sameAs: [site.facebook],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    serviceType: opts.name,
    provider: {
      "@type": "AccountingService",
      name: site.legalName,
      url: site.url,
      telephone: site.phone,
      address: baseAddress,
    },
    areaServed: [
      { "@type": "Place", name: "Northwest Arkansas" },
      { "@type": "Country", name: "United States" },
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export { fullAddress };
