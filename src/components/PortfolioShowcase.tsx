"use client";

import { useState } from "react";
import { solutions, type Solution } from "@/lib/site";

function BrowserPreview({ project }: { project: Solution }) {
  const src = project.previewUrl ?? project.url;

  return (
    <div className="browser-preview" style={{ "--accent": project.accent } as React.CSSProperties}>
      <div className="browser-preview__chrome">
        <div className="browser-preview__dots">
          <span />
          <span />
          <span />
        </div>
        <span className="browser-preview__url">{src.replace(/^https?:\/\//, "")}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="browser-preview__open"
        >
          Abrir ↗
        </a>
      </div>
      <div className="browser-preview__viewport">
        <iframe
          key={project.id}
          src={src}
          title={`Preview ${project.name}`}
          className="browser-preview__iframe"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="browser-preview__shine" aria-hidden />
      </div>
    </div>
  );
}

export function PortfolioShowcase() {
  const [active, setActive] = useState(0);
  const project = solutions[active];

  return (
    <div className="portfolio-showcase">
      <div className="portfolio-showcase__tabs" role="tablist" aria-label="Projetos">
        {solutions.map((sol, i) => (
          <button
            key={sol.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`portfolio-tab ${i === active ? "portfolio-tab--active" : ""}`}
            style={{ "--accent": sol.accent } as React.CSSProperties}
            onClick={() => setActive(i)}
          >
            <span className="portfolio-tab__icon">{sol.icon}</span>
            {sol.name}
          </button>
        ))}
      </div>

      <article
        className="portfolio-showcase__panel"
        data-reveal
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        <BrowserPreview project={project} />

        <div className="portfolio-showcase__info">
          <div className="portfolio-showcase__tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3>{project.name}</h3>
          <p className="portfolio-showcase__tagline">{project.tagline}</p>
          <p className="portfolio-showcase__desc">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="solution-card__link"
          >
            Visitar {project.name} ao vivo →
          </a>
        </div>
      </article>

      <p className="portfolio-showcase__note">
        Pré-visualização ao vivo dos produtos. Alguns sites podem restringir embed — use
        &quot;Abrir&quot; para ver em tela cheia.
      </p>
    </div>
  );
}
