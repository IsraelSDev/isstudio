"use client";

import { techMarquee } from "@/lib/site";

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="marquee-wrap" aria-hidden>
      <div className="marquee">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee__item">
            <span className="marquee__dot" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
