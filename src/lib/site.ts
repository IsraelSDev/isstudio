export const siteConfig = {
  name: "ISSTUDIO TECH",
  legalName: "ISSTUDIO TECH",
  cnpj: "64.712.734/0001-86",
  url: "https://www.isstudio.com.br",
  storeUrl: "https://store.isstudio.com.br",
  email: "contato@isstudio.com.br",
  phone: "(13) 99131-3917",
  phoneHref: "tel:+5513991313917",
  whatsapp: "5513991313917",
  whatsappMessage:
    "Olá, ISSTUDIO! Vim pelo site e gostaria de conversar sobre um projeto.",
  whatsappHref:
    "https://wa.me/5513991313917?text=Ol%C3%A1%2C%20ISSTUDIO!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  address: {
    street: "Avenida Paulista, 5",
    district: "Bela Vista",
    cep: "01311-000",
    city: "São Paulo",
    state: "SP",
    full: "Avenida Paulista, 5, Bela Vista — CEP 01311-000, São Paulo - SP",
  },
  logoDark: "/logo-dark.png",
  logoLight: "/logo-light.png",
  favicon: "/favicon.ico",
  tagline: "Soluções digitais que transformam negócios",
  description:
    "Agência de tecnologia especializada em software sob medida, plataformas web, IA e produtos digitais de alto impacto.",
} as const;

export const heroRotatingWords = [
  "Inteligência Artificial",
  "Software sob medida",
  "Plataformas SaaS",
  "Cloud & DevOps",
  "Automação inteligente",
];

export const codeSnippets = [
  {
    filename: "agent.isstudio.ts",
    lines: [
      { text: "import { Agent, LLM } from '@isstudio/ai-core'", tokens: [] },
      { text: "", tokens: [] },
      { text: "const agent = new Agent({", tokens: [] },
      { text: '  model: "gpt-4o",', tokens: ["model"] },
      { text: '  expertise: ["RAG", "MLOps", "Agents"],', tokens: ["expertise"] },
      { text: "  locale: \"pt-BR\",", tokens: ["locale"] },
      { text: "});", tokens: [] },
      { text: "", tokens: [] },
      { text: "await agent.deploy({", tokens: [] },
      { text: '  product: "seu-saas",', tokens: ["product"] },
      { text: '  scale: "global",', tokens: ["scale"] },
      { text: "});", tokens: [] },
      { text: "", tokens: [] },
      { text: 'console.log("✓ Pipeline de IA no ar");', tokens: ["console"] },
    ],
  },
  {
    filename: "pipeline.ml",
    lines: [
      { text: "# ISSTUDIO — inferência em produção", tokens: [] },
      { text: "from isstudio import ModelRouter", tokens: ["from", "import"] },
      { text: "", tokens: [] },
      { text: "router = ModelRouter(", tokens: [] },
      { text: '    provider="azure-openai",', tokens: ["provider"] },
      { text: "    fallback=[\"anthropic\", \"local\"],", tokens: ["fallback"] },
      { text: ")", tokens: [] },
      { text: "", tokens: [] },
      { text: "response = router.chat(", tokens: [] },
      { text: '    prompt="Analise o funil de conversão",', tokens: ["prompt"] },
      { text: "    stream=True,", tokens: ["stream"] },
      { text: ")", tokens: [] },
    ],
  },
  {
    filename: "deploy.sh",
    lines: [
      { text: "#!/bin/bash", tokens: [] },
      { text: "isstudio build --optimized", tokens: [] },
      { text: "isstudio test --coverage 98%", tokens: [] },
      { text: "isstudio deploy vercel --region sa-east-1", tokens: [] },
      { text: "", tokens: [] },
      { text: "echo \"🚀 Produto live em 47s\"", tokens: ["echo"] },
    ],
  },
];

export type JourneyStep = {
  phase: string;
  title: string;
  description: string;
};

export const israelFounder = {
  name: "Israel Soares",
  role: "Fundador & CEO · ISSTUDIO TECH",
  initials: "IS",
  headline: "Da formação acadêmica à liderança em IA e produtos digitais",
  summary:
    "Formado em Ciência da Computação, com mais de 10 anos em tecnologia, mestrado em CC e MBA em Inteligência Artificial. Passou por multinacionais antes de fundar a ISSTUDIO — onde transforma ideias em SaaS, plataformas e soluções com IA generativa.",
  journey: [
    {
      phase: "01",
      title: "Ciência da Computação",
      description: "Base sólida em engenharia de software, algoritmos e arquitetura de sistemas.",
    },
    {
      phase: "02",
      title: "10+ anos em tecnologia",
      description: "Do desenvolvimento à estratégia de produto — entregas em escala real.",
    },
    {
      phase: "03",
      title: "Mestre em Ciência da Computação",
      description: "Pesquisa e rigor acadêmico aplicados a problemas complexos do mercado.",
    },
    {
      phase: "04",
      title: "MBA em Inteligência Artificial",
      description: "Visão de negócio e IA generativa para produtos que geram resultado.",
    },
    {
      phase: "05",
      title: "Multinacionais",
      description: "Experiência em ambientes globais, processos maduros e alta exigência técnica.",
    },
    {
      phase: "06",
      title: "Fundador da ISSTUDIO",
      description: "Hoje lidera IA, SaaS e engenharia de produto para clientes no Brasil e exterior.",
    },
  ] satisfies JourneyStep[],
  highlights: [
    "Arquitetura de sistemas e cloud",
    "IA generativa, agents & RAG",
    "Liderança técnica global",
    "Produtos digitais end-to-end",
  ],
};

export const techMarquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "OpenAI",
  "Azure AI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Vercel",
  "AWS",
  "LangChain",
  "TensorFlow",
  "FastAPI",
  "Prisma",
];

export const aiCapabilities = [
  {
    title: "Agentes & automação",
    desc: "Assistentes inteligentes integrados ao seu produto, CRM ou operação.",
    icon: "⚡",
  },
  {
    title: "RAG & bases de conhecimento",
    desc: "IA que responde com os dados da sua empresa — segura e contextualizada.",
    icon: "🧠",
  },
  {
    title: "MLOps & deploy",
    desc: "Modelos em produção com monitoramento, fallback e custo otimizado.",
    icon: "📊",
  },
  {
    title: "Copilots sob medida",
    desc: "Experiências estilo ChatGPT alinhadas à sua marca e fluxos de negócio.",
    icon: "✦",
  },
];

export type Solution = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  previewUrl?: string;
  accent: string;
  tags: string[];
  icon: string;
};

export const impactStats = {
  clients: 200,
  systems: 150,
  years: 10,
  headline: "Centenas de clientes. Centenas de sistemas entregues.",
  subline:
    "Mais de uma década entregando software, plataformas e produtos digitais para empresas em todo o Brasil.",
};

export const solutions: Solution[] = [
  {
    id: "store",
    name: "ISStudio Store",
    tagline: "Marketplace de soluções digitais",
    description:
      "E-commerce de soluções premium da ISSTUDIO: sistemas, APIs, templates, plugins, SaaS, IA, white label, hospedagem e assinaturas — prontas para vender e escalar.",
    url: siteConfig.storeUrl,
    accent: "#0096ff",
    tags: ["Marketplace", "SaaS", "IA"],
    icon: "▣",
  },
  {
    id: "capivara",
    name: "Capivara",
    tagline: "Consultas CPF e CNPJ",
    description:
      "Plataforma brasileira de consulta cadastral com planos flexíveis, LGPD e experiência moderna para profissionais e empresas.",
    url: "https://www.consulta-capivara.com",
    accent: "#00b4d8",
    tags: ["SaaS", "Dados", "LGPD"],
    icon: "◇",
  },
  {
    id: "megaagro",
    name: "Mega Agro Group",
    tagline: "Trading agrícola global",
    description:
      "Presença digital premium para operações de commodities, certificações e rede internacional no agronegócio.",
    url: "https://megaagrogroup.com",
    accent: "#2e7d32",
    tags: ["Corporativo", "Agro", "Multilíngue"],
    icon: "◆",
  },
  {
    id: "medsystem",
    name: "MedSystem Pro",
    tagline: "Gestão clínica inteligente",
    description:
      "Sistema completo para clínicas: agenda, prontuário, financeiro, portal do paciente e automações via WhatsApp.",
    url: "https://medsystempro.com",
    accent: "#6366f1",
    tags: ["Saúde", "SaaS", "Multi-clínica"],
    icon: "○",
  },
];

export const services = [
  {
    title: "Software sob medida",
    description:
      "Sistemas, APIs e integrações desenhados para o fluxo real do seu negócio — escaláveis e seguros.",
    icon: "01",
  },
  {
    title: "Inteligência Artificial",
    description:
      "Agentes, copilots, RAG e pipelines de ML integrados ao seu produto com governança e performance.",
    icon: "02",
  },
  {
    title: "Plataformas web",
    description:
      "Sites e aplicações responsivas, rápidas e com SEO técnico para posicionar sua marca no digital.",
    icon: "03",
  },
  {
    title: "Produtos SaaS",
    description:
      "Do MVP ao produto maduro: assinaturas, painéis admin, métricas e experiência de usuário refinada.",
    icon: "04",
  },
  {
    title: "UI/UX & branding digital",
    description:
      "Interfaces que convertem, design systems consistentes e narrativa visual alinhada à sua marca.",
    icon: "05",
  },
  {
    title: "DevOps & performance",
    description:
      "Deploy em nuvem, monitoramento, CI/CD e otimização para máxima disponibilidade e velocidade.",
    icon: "06",
  },
];

export const stats = [
  { value: impactStats.clients, suffix: "+", label: "Clientes atendidos" },
  { value: impactStats.systems, suffix: "+", label: "Sistemas entregues" },
  { value: impactStats.years, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Compromisso com qualidade" },
];

export const team = [
  {
    name: "Israel Soares",
    role: "Fundador, Dev & CEO",
    initials: "IS",
    featured: true,
  },
  {
    name: "Miqueias Soares",
    role: "Designer",
    initials: "MS",
    featured: false,
  },
  {
    name: "Priscila Neres",
    role: "Marketing & Co-founder",
    initials: "PN",
    featured: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Descoberta",
    text: "Entendemos metas, público e restrições para desenhar a solução certa.",
  },
  {
    step: "02",
    title: "Arquitetura & design",
    text: "Prototipamos fluxos, definimos stack e validamos antes de codar.",
  },
  {
    step: "03",
    title: "Desenvolvimento ágil",
    text: "Entregas incrementais, código limpo e feedback contínuo com você.",
  },
  {
    step: "04",
    title: "Lançamento & escala",
    text: "Deploy, métricas e evolução para o produto crescer com o negócio.",
  },
];

export type StoreProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  priceNote?: string;
  badge?: string;
  accent: string;
};

export const storePromo = {
  eyebrow: "ISStudio Store",
  title: "Soluções digitais prontas para vender e escalar",
  description:
    "Marketplace da ISSTUDIO com sistemas, APIs, templates, SaaS, IA e white label — código, licenças e assinaturas com suporte incluso.",
  cta: "Explorar a loja",
  categories: [
    "Sistemas",
    "APIs",
    "Templates",
    "SaaS",
    "IA",
    "White Label",
    "Hospedagem",
    "Assinaturas",
  ],
} as const;

export const storeProducts: StoreProduct[] = [
  {
    id: "crm-pulse",
    name: "CRM Pulse",
    category: "Sistemas",
    description: "CRM comercial completo com pipeline e automações.",
    price: "R$ 2.490",
    priceNote: "pagamento único",
    badge: "Destaque",
    accent: "#00d4ff",
  },
  {
    id: "payments-api",
    name: "Payments Gateway API",
    category: "APIs",
    description: "Abstração unificada Asaas + Mercado Pago + PayPal.",
    price: "R$ 890",
    priceNote: "pagamento único",
    badge: "Popular",
    accent: "#4db8ff",
  },
  {
    id: "aurora-kit",
    name: "Aurora SaaS Kit",
    category: "Templates",
    description: "Template de SaaS dark premium, pronto para customizar.",
    price: "R$ 249",
    priceNote: "pagamento único",
    accent: "#0096ff",
  },
  {
    id: "inbox-studio",
    name: "Inbox Studio",
    category: "SaaS",
    description: "Inbox unificada para times de suporte e atendimento.",
    price: "R$ 197",
    priceNote: "/mês",
    accent: "#38bdf8",
  },
  {
    id: "agente-vendas",
    name: "Agente de Vendas IA",
    category: "IA",
    description: "SDR virtual que qualifica leads e agenda reuniões.",
    price: "R$ 497",
    priceNote: "/mês",
    badge: "Novo",
    accent: "#22d3ee",
  },
  {
    id: "studio-plus",
    name: "Studio+",
    category: "Assinaturas",
    description: "Clube de soluções, créditos de API e descontos no catálogo.",
    price: "R$ 79",
    priceNote: "/mês",
    badge: "Clube",
    accent: "#67e8f9",
  },
];

export const testimonials = [
  {
    quote:
      "O trabalho da ISSTUDIO foi fundamental para o nosso posicionamento e estratégias. Qualidade surpreendente e entrega impecável.",
    author: "Paula Albuquerque",
    company: "GTB",
  },
  {
    quote:
      "Campanhas de growth com público específico — faturamento superior a 300% com a parceria certa em tecnologia.",
    author: "Priscila Souza",
    company: "Havan",
  },
  {
    quote:
      "A estratégia de lançamento não seria a mesma sem o comprometimento da equipe. Abraçaram nossos desafios como próprios.",
    author: "Diego Rodrigues",
    company: "Rappi",
  },
];
