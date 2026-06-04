import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url;

export const seoKeywords = [
  "ISSTUDIO",
  "ISSTUDIO TECH",
  "desenvolvimento de software Goiânia",
  "agência de tecnologia Goiânia",
  "empresa de TI Goiânia",
  "desenvolvimento de sites Goiânia",
  "criação de sites Goiânia",
  "software sob medida",
  "desenvolvimento de aplicativos",
  "inteligência artificial empresas",
  "IA para negócios",
  "agentes de IA",
  "desenvolvimento SaaS",
  "plataforma web",
  "automação com IA",
  "consultoria em tecnologia",
  "MVP startup",
  "DevOps",
  "agência digital Goiás",
  "desenvolvedor em Goiânia",
];

export const homeTitle =
  "ISSTUDIO TECH | Desenvolvimento de Software, IA e Sites em Goiânia";

export const homeDescription =
  "Agência de tecnologia em Goiânia: software sob medida, sites, apps, IA generativa e SaaS. ISSTUDIO TECH — 200+ clientes, 150+ sistemas entregues, 10+ anos. Capivara, Mega Agro e MedSystem Pro.";

export const homeMetadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: seoKeywords,
  authors: [{ name: "Israel Soares", url: `${siteUrl}/#israel` }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "technology",
  alternates: {
    canonical: siteUrl,
    languages: { "pt-BR": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: siteConfig.logoDark,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — agência de software e IA em Goiânia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [siteConfig.logoDark],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione no .env.local: GOOGLE_SITE_VERIFICATION=seu-codigo
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "BR-GO",
    "geo.placename": siteConfig.address.city,
    "geo.position": "-16.6869;-49.2648",
    ICBM: "-16.6869, -49.2648",
  },
};

export const faqItems = [
  {
    question: "O que a ISSTUDIO TECH faz?",
    answer:
      "Desenvolvemos software sob medida, sites, aplicativos, produtos SaaS e soluções com inteligência artificial para empresas em Goiânia e em todo o Brasil.",
  },
  {
    question: "A ISSTUDIO atende empresas fora de Goiânia?",
    answer:
      "Sim. Somos baseados em Goiânia-GO, mas atendemos clientes em todo o país com metodologia ágil, reuniões online e entregas remotas.",
  },
  {
    question: "Vocês trabalham com inteligência artificial?",
    answer:
      "Sim. Integramos IA generativa, agentes, RAG, copilots e automações em produtos reais, com foco em segurança, performance e resultado de negócio.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer:
      "Depende do escopo. MVPs podem sair em poucas semanas; projetos maiores seguem entregas incrementais com prazos definidos na fase de descoberta.",
  },
  {
    question: "Como solicitar orçamento?",
    answer:
      `Entre em contato pelo formulário do site, e-mail ${siteConfig.email} ou WhatsApp ${siteConfig.phone}. Respondemos com clareza e um plano sob medida.`,
  },
];
