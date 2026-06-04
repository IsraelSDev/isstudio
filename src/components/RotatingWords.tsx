"use client";

import { useEffect, useState } from "react";
import { heroRotatingWords } from "@/lib/site";

export function RotatingWords() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const hold = setTimeout(() => setPhase("out"), 2800);
    return () => clearTimeout(hold);
  }, [index]);

  useEffect(() => {
    if (phase !== "out") return;
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % heroRotatingWords.length);
      setPhase("in");
    }, 420);
    return () => clearTimeout(next);
  }, [phase]);

  return (
    <span className={`rotating-word rotating-word--${phase}`} aria-live="polite">
      {heroRotatingWords[index]}
    </span>
  );
}
