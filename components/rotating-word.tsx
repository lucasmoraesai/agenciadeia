"use client";

import { useEffect, useState } from "react";
import { HERO_WORDS } from "@/lib/config";

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 2400);

    return () => window.clearInterval(id);
  }, []);

  if (reduce) {
    return <span className="text-subtle">{HERO_WORDS[0]}</span>;
  }

  return (
    <span className="inline-grid align-bottom" aria-live="polite">
      {HERO_WORDS.map((word, wordIndex) => (
        <span
          key={word}
          className="word-swap col-start-1 row-start-1 text-subtle"
          style={{
            opacity: wordIndex === index ? 1 : 0,
            transform: wordIndex === index ? "translateY(0)" : "translateY(8px)",
          }}
          aria-hidden={wordIndex !== index}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
