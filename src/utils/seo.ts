// SEO utility — schema.org JSON-LD generators voor Organization, FAQ, LocalBusiness, BreadcrumbList.
// Gebruik in <Base> layout via <slot name="schema">.

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PROMAN Belgium',
    url: 'https://zakelijk.proman.be',
    logo: 'https://zakelijk.proman.be/logo.svg',
    sameAs: [
      'https://www.linkedin.com/company/proman-belgium',
      'https://www.facebook.com/PROMANbelgium',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+32-2-123-45-67',
      contactType: 'customer service',
      areaServed: 'BE',
      availableLanguage: ['Dutch', 'French', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tervurenlaan 100',
      addressLocality: 'Brussel',
      postalCode: '1040',
      addressCountry: 'BE',
    },
    description:
      'PROMAN is de vierde grootste Europese speler in HR-services. In België actief via PROMAN Jobs, Home, Care, Ascento, Winsearch en Amplo.',
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function localBusinessSchema(args: {
  name: string;
  city: string;
  postalCode?: string;
  streetAddress?: string;
  phone?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: args.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: args.city,
      postalCode: args.postalCode,
      streetAddress: args.streetAddress,
      addressCountry: 'BE',
    },
    telephone: args.phone,
    areaServed: { '@type': 'AdministrativeArea', name: args.city },
  };
}

export function serviceSchema(args: { name: string; description: string; provider?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    provider: {
      '@type': 'Organization',
      name: args.provider ?? 'PROMAN Belgium',
    },
    areaServed: { '@type': 'Country', name: 'Belgium' },
  };
}
