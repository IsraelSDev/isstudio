import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { AiExpertise } from "@/components/AiExpertise";
import { FaqSection } from "@/components/FaqSection";
import { ImpactBanner } from "@/components/ImpactBanner";
import { LiveOrbs } from "@/components/LiveOrbs";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { StructuredData } from "@/components/StructuredData";
import { homeMetadata } from "@/lib/seo";
import { AnimatedCounters } from "@/components/AnimatedCounters";
import { ContactForm } from "@/components/ContactForm";
import { FloatingActions } from "@/components/FloatingActions";
import { IsraelFounder } from "@/components/IsraelFounder";
import { ParticleField } from "@/components/ParticleField";
import { RevealObserver, ScrollProgress, SiteChrome } from "@/components/SiteChrome";
import { RotatingWords } from "@/components/RotatingWords";
import { TechMarquee } from "@/components/TechMarquee";
import { TypewriterTerminal } from "@/components/TypewriterTerminal";
import {
  processSteps,
  services,
  siteConfig,
  stats,
  team,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <SiteChrome />
      <RevealObserver />

      <div className="page-bg" aria-hidden>
        <ParticleField />
        <div className="page-bg__grid" />
        <div className="page-bg__glow page-bg__glow--1" />
        <div className="page-bg__glow page-bg__glow--2" />
        <div className="page-bg__beam" />
        <LiveOrbs />
      </div>

      <main id="conteudo-principal">
        <section id="inicio" className="hero" aria-label="Apresentação">
          <div className="hero__badge-float" aria-hidden>
            <span>AI</span>
            <span>SaaS</span>
            <span>Cloud</span>
          </div>

          <div className="container hero__inner">
            <div className="hero__top">
              <div className="hero__content" data-reveal>
              <p className="eyebrow eyebrow--animated">
                <span className="eyebrow__bracket">&lt;</span>
                ISSTUDIO TECH
                <span className="eyebrow__bracket">/&gt;</span>
              </p>
              <h1 className="hero__title">
                <span className="sr-only">
                  ISSTUDIO TECH — desenvolvimento de software, sites e inteligência
                  artificial em Goiânia
                </span>
                <span aria-hidden="true">
                  Especialistas em{" "}
                  <span className="hero__rotator-wrap">
                    <RotatingWords />
                  </span>
                </span>
              </h1>
              <p className="hero__lead">
                Mais de uma década, <strong>200+ clientes</strong> e{" "}
                <strong>150+ sistemas</strong> no ar. Software, IA e produtos
                digitais em Goiânia — com Capivara, Mega Agro Group e MedSystem Pro
                como vitrine ao vivo.
              </p>
              <div className="hero__actions">
                <a href="#ia" className="btn btn--primary btn--glow">
                  Expertise em IA
                </a>
                <a href="#contato" className="btn btn--ghost">
                  Iniciar um projeto
                </a>
              </div>
              </div>

              <div className="hero__visual" data-reveal>
                <TypewriterTerminal />
              </div>
            </div>

            <div className="hero__stats-wrap" data-reveal>
              <AnimatedCounters stats={stats} />
            </div>

            <TechMarquee />
          </div>
        </section>

        <ImpactBanner />

        <AiExpertise />

        <section id="solucoes" className="section section--alt">
          <div className="container">
            <header className="section-header" data-reveal>
              <p className="section-label">Portfólio ao vivo</p>
              <h2>Sites e sistemas que já estão no ar</h2>
              <p className="section-desc">
                Navegue pelos produtos reais que desenvolvemos — pré-visualização
                embutida e link para abrir em tela cheia.
              </p>
            </header>

            <PortfolioShowcase />
          </div>
        </section>

        <section id="sobre" className="section section--about">
          <div className="container about-layout">
            <div className="about-layout__main" data-reveal>
              <p className="section-label">Sobre a ISSTUDIO</p>
              <h2>Tecnologia com visão de produto e foco em resultado</h2>
              <p className="about-layout__text">
                Liderada por quem vive código e IA no dia a dia, já atendemos centenas
                de empresas e colocamos centenas de sistemas em produção — com
                metodologias ágeis e engenharia de ponta.
              </p>
              <ul className="about-pillars">
                <li>
                  <span className="about-pillars__icon">01</span>
                  <div>
                    <strong>IA em produção</strong>
                    <span>Agents, copilots e automação inteligente</span>
                  </div>
                </li>
                <li>
                  <span className="about-pillars__icon">02</span>
                  <div>
                    <strong>Time completo</strong>
                    <span>Dev, design e marketing integrados</span>
                  </div>
                </li>
                <li>
                  <span className="about-pillars__icon">03</span>
                  <div>
                    <strong>Entrega ágil</strong>
                    <span>Do MVP ao produto em escala</span>
                  </div>
                </li>
              </ul>
              <a href="#israel" className="about-layout__link">
                Conheça a trajetória do fundador →
              </a>
            </div>

            <aside className="about-brand" data-reveal>
              <Image
                src={siteConfig.logoLight}
                alt="Logo ISSTUDIO TECH — agência de software e IA em Goiânia"
                width={280}
                height={74}
                className="about-brand__logo"
              />
              <p className="about-brand__tagline">
                Da estratégia ao deploy — parceiros de longo prazo, não apenas
                fornecedores.
              </p>
              <div className="about-brand__meta">
                <span>CNPJ {siteConfig.cnpj}</span>
                <span>{siteConfig.address.city} — {siteConfig.address.state}</span>
              </div>
            </aside>
          </div>
        </section>

        <IsraelFounder />

        <section id="servicos" className="section section--alt">
          <div className="container">
            <header className="section-header" data-reveal>
              <p className="section-label">Serviços</p>
              <h2>O que oferecemos aos nossos clientes</h2>
              <p className="section-desc">
                Do conceito à manutenção — cobrimos todo o ciclo de vida do seu
                produto digital.
              </p>
            </header>

            <div className="services-grid">
              {services.map((svc) => (
                <article key={svc.title} className="service-card" data-reveal>
                  <span className="service-card__num">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section">
          <div className="container">
            <header className="section-header" data-reveal>
              <p className="section-label">Como trabalhamos</p>
              <h2>Processo claro, entregas previsíveis</h2>
            </header>
            <ol className="process-list">
              {processSteps.map((step, i) => (
                <li
                  key={step.step}
                  className="process-item"
                  data-reveal
                  style={{ "--i": i } as CSSProperties}
                >
                  <span className="process-item__step">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="equipe" className="section section--alt">
          <div className="container">
            <header className="section-header" data-reveal>
              <p className="section-label">Time</p>
              <h2>Quem faz a ISSTUDIO acontecer</h2>
            </header>
            <div className="team-grid">
              {team.map((member) => (
                <article
                  key={member.name}
                  className={`team-card ${member.featured ? "team-card--featured" : ""}`}
                  data-reveal
                >
                  <div className="team-card__avatar">{member.initials}</div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  {member.featured && (
                    <a href="#israel" className="team-card__link">
                      Conheça a trajetória →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <header className="section-header" data-reveal>
              <p className="section-label">Depoimentos</p>
              <h2>O que nossos clientes dizem</h2>
            </header>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="testimonial-card" data-reveal>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <strong>{t.author}</strong>
                    <span>{t.company}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <FaqSection />

        <section id="contato" className="section section--contact">
          <div className="container contact-grid">
            <div data-reveal>
              <p className="section-label">Contato</p>
              <h2>Vamos conversar sobre seu próximo projeto</h2>
              <p className="section-desc section-desc--left">
                Conte sua ideia — respondemos com clareza e um plano sob medida.
              </p>

              <ul className="contact-info">
                <li>
                  <span className="contact-info__label">E-mail</span>
                  <a href="#formulario-contato">{siteConfig.email}</a>
                </li>
                <li>
                  <span className="contact-info__label">Telefone</span>
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </li>
                <li>
                  <span className="contact-info__label">Endereço</span>
                  <address>{siteConfig.address.full}</address>
                </li>
                <li>
                  <span className="contact-info__label">CNPJ</span>
                  <span>{siteConfig.cnpj}</span>
                </li>
              </ul>
            </div>

            <div className="contact-panel" data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#inicio" className="footer__logo">
            <Image
              src={siteConfig.logoLight}
              alt="ISSTUDIO TECH"
              width={140}
              height={36}
            />
          </a>
          <p className="footer__copy">
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos
            reservados.
          </p>
          <p className="footer__meta">
            {siteConfig.address.city} — {siteConfig.address.state} ·{" "}
            <a href={siteConfig.url}>isstudio.com.br</a>
          </p>
        </div>
      </footer>

      <FloatingActions />
    </>
  );
}
