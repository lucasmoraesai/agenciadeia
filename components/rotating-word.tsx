"use client";

import { useEffect, useState } from "react";
import { HERO_PHRASES } from "@/lib/config";

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_PHRASES.length);
    }, 2400);

    return () => window.clearInterval(id);
  }, []);

  if (reduce) {
    return <span className="text-foreground">{HERO_PHRASES[0]}</span>;
  }

  return (
    <span className="inline-grid align-bottom" aria-live="polite">
      {HERO_PHRASES.map((phrase, phraseIndex) => (
        <span
          key={phrase}
          className="word-swap col-start-1 row-start-1 text-foreground"
          style={{
            opacity: phraseIndex === index ? 1 : 0,
            transform: phraseIndex === index ? "translateY(0)" : "translateY(8px)",
          }}
          aria-hidden={phraseIndex !== index}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
}
