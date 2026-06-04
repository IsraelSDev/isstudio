import { faqItems, homeDescription, homeTitle } from "@/lib/seo";
import { israelFounder, services, siteConfig, solutions } from "@/lib/site";

export function StructuredData() {
  const url = siteConfig.url;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: siteConfig.legalName,
    alternateName: ["ISSTUDIO", "IS Studio"],
    url,
    logo: `${url}${siteConfig.logoDark}`,
    image: `${url}${siteConfig.logoLight}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    taxID: siteConfig.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.cep,
      addressCountry: "BR",
    },
    sameAs: [url],
    founder: {
      "@type": "Person",
      name: israelFounder.name,
      jobTitle: israelFounder.role,
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,
    name: siteConfig.name,
    description: homeDescription,
    url,
    image: `${url}${siteConfig.logoDark}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.6869,
      longitude: -49.2648,
    },
    areaServed: [
      { "@type": "City", name: "Goiânia" },
      { "@type": "State", name: "Goiás" },
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: [
      "Desenvolvimento de software",
      "Inteligência artificial",
      "Desenvolvimento web",
      "SaaS",
      "DevOps",
    ],
    parentOrganization: { "@id": `${url}/#organization` },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "pt-BR",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: homeTitle,
    description: homeDescription,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
    inLanguage: "pt-BR",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços ISSTUDIO TECH",
    itemListElement: services.map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: svc.title,
        description: svc.description,
        provider: { "@id": `${url}/#organization` },
        areaServed: "BR",
      },
    })),
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projetos ISSTUDIO",
    itemListElement: solutions.map((sol, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: sol.name,
        description: sol.description,
        url: sol.url,
        applicationCategory: "BusinessApplication",
      },
    })),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#israel`,
    name: israelFounder.name,
    jobTitle: israelFounder.role,
    description: israelFounder.summary,
    worksFor: { "@id": `${url}/#organization` },
    knowsAbout: israelFounder.highlights,
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Ciência da Computação" },
      { "@type": "EducationalOrganization", name: "Mestrado em Ciência da Computação" },
      { "@type": "EducationalOrganization", name: "MBA em Inteligência Artificial" },
    ],
  };

  const graphs = [
    organization,
    localBusiness,
    webSite,
    webPage,
    faqPage,
    serviceList,
    portfolio,
    person,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
