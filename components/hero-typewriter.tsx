"use client";

import { useEffect, useState } from "react";

type Phase =
  | "line1-typing"
  | "line1-pause"
  | "line1-deleting"
  | "line2-typing"
  | "line2-pause"
  | "line2-deleting";

interface HeroTypewriterProps {
  line1: readonly string[];
  line2: readonly string[];
  className?: string;
}

export function HeroTypewriter({ line1, line2 }: HeroTypewriterProps) {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [text1, setText1] = useState(() => line1[0] ?? "");
  const [text2, setText2] = useState(() => line2[0] ?? "");
  const [phase, setPhase] = useState<Phase>("line1-pause");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
  }, []);

  useEffect(() => {
    if (reduce) {
      setText1(line1[0] ?? "");
      setText2(line2[0] ?? "");
      return;
    }

    const current1 = line1[idx1 % line1.length];
    const current2 = line2[idx2 % line2.length];

    let delay = 45;
    if (phase === "line1-pause" || phase === "line2-pause") delay = 1400;
    if (phase === "line1-deleting" || phase === "line2-deleting") delay = 25;

    const timer = window.setTimeout(() => {
      if (phase === "line1-typing") {
        if (text1 === current1) {
          setPhase("line1-pause");
        } else {
          setText1(current1.slice(0, text1.length + 1));
        }
      } else if (phase === "line1-pause") {
        setPhase("line1-deleting");
      } else if (phase === "line1-deleting") {
        if (text1 === "") {
          setIdx1((i) => (i + 1) % line1.length);
          setPhase("line2-typing");
        } else {
          setText1(text1.slice(0, text1.length - 1));
        }
      } else if (phase === "line2-typing") {
        if (text2 === current2) {
          setPhase("line2-pause");
        } else {
          setText2(current2.slice(0, text2.length + 1));
        }
      } else if (phase === "line2-pause") {
        setPhase("line2-deleting");
      } else if (phase === "line2-deleting") {
        if (text2 === "") {
          setIdx2((i) => (i + 1) % line2.length);
          setPhase("line1-typing");
        } else {
          setText2(text2.slice(0, text2.length - 1));
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phase, text1, text2, idx1, idx2, reduce, line1, line2]);

  return (
    <>
      <span>
        {reduce ? line1[0] : text1}
        {!reduce && (phase.startsWith("line1") ? <Cursor /> : null)}
      </span>
      <br />
      <span className="text-subtle">
        {reduce ? line2[0] : text2}
        {!reduce && (phase.startsWith("line2") ? <Cursor /> : null)}
      </span>
    </>
  );
}

function Cursor() {
  return (
    <span
      className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.15em] animate-pulse rounded-sm bg-current opacity-80"
      aria-hidden
    />
  );
}
