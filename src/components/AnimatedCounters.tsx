"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };

export function AnimatedCounters({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValues(stats.map((s) => Math.round(s.value * ease)));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, stats]);

  return (
    <div ref={ref} className="hero__stats">
      {stats.map((s, i) => (
        <div key={s.label} className="hero__stat">
          <strong>
            {values[i]}
            {s.suffix}
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
