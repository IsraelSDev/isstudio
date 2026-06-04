"use client";

import { impactStats } from "@/lib/site";

export function ImpactBanner() {
  return (
    <section className="impact-banner" aria-label="Números de entrega">
      <div className="container impact-banner__inner" data-reveal>
        <div className="impact-banner__glow" aria-hidden />
        <p className="impact-banner__eyebrow">Track record</p>
        <h2 className="impact-banner__title">{impactStats.headline}</h2>
        <p className="impact-banner__sub">{impactStats.subline}</p>
        <div className="impact-banner__pills">
          <span className="impact-pill">
            <strong>{impactStats.clients}+</strong> clientes
          </span>
          <span className="impact-pill">
            <strong>{impactStats.systems}+</strong> sistemas
          </span>
          <span className="impact-pill">
            <strong>{impactStats.years}+</strong> anos
          </span>
        </div>
      </div>
    </section>
  );
}
