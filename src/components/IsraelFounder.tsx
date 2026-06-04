"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { israelFounder, siteConfig } from "@/lib/site";

export function IsraelFounder() {
  return (
    <section id="israel" className="section section--founder">
      <div className="container">
        <header className="founder-intro" data-reveal>
          <div className="founder-intro__brand">
            <Image
              src={siteConfig.logoLight}
              alt={siteConfig.name}
              width={200}
              height={52}
              className="founder-intro__logo"
            />
          </div>
          <p className="section-label">Sobre o Israel</p>
          <h2>{israelFounder.headline}</h2>
          <p className="founder-intro__summary">{israelFounder.summary}</p>
          <p className="founder-intro__role">{israelFounder.role}</p>
        </header>

        <div className="journey" aria-label="Trajetória profissional">
          <div className="journey__track" aria-hidden />
          <ol className="journey__list">
            {israelFounder.journey.map((step, i) => (
              <li
                key={step.phase}
                className="journey__step"
                data-reveal
                style={{ "--step": i } as CSSProperties}
              >
                <div className="journey__node">
                  <span className="journey__phase">{step.phase}</span>
                </div>
                <div className="journey__card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className="founder-highlights" data-reveal>
          {israelFounder.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
