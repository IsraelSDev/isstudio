"use client";

import type { CSSProperties } from "react";
import { aiCapabilities } from "@/lib/site";

export function AiExpertise() {
  return (
    <section id="ia" className="section section--ai">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="section-label">Expertise em IA</p>
          <h2>
            Engenharia de{" "}
            <span className="text-gradient">Inteligência Artificial</span> em produção
          </h2>
          <p className="section-desc">
            Não é hype — é código, arquitetura e produto. Integramos modelos, agents e
            pipelines com a mesma rigorosidade de qualquer sistema crítico.
          </p>
        </header>

        <div className="ai-grid">
          {aiCapabilities.map((cap, i) => (
            <article
              key={cap.title}
              className="ai-card"
              data-reveal
              style={{ "--i": i } as CSSProperties}
            >
              <span className="ai-card__icon">{cap.icon}</span>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
              <div className="ai-card__shine" aria-hidden />
            </article>
          ))}
        </div>

        <div className="ai-flow" data-reveal aria-hidden>
          <div className="ai-flow__node">Dados</div>
          <div className="ai-flow__line" />
          <div className="ai-flow__node ai-flow__node--accent">Modelo</div>
          <div className="ai-flow__line" />
          <div className="ai-flow__node">Agent</div>
          <div className="ai-flow__line" />
          <div className="ai-flow__node">Produto</div>
        </div>
      </div>
    </section>
  );
}
