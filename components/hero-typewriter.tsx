"use client";

import { useEffect, useState } from "react";

type Phase =
  | "start"
  | "l1-del"
  | "l1-type"
  | "l1-hold"
  | "l2-del"
  | "l2-type"
  | "l2-hold";

interface HeroTypewriterProps {
  line1: readonly string[];
  line2: readonly string[];
}

export function HeroTypewriter({ line1, line2 }: HeroTypewriterProps) {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [text1, setText1] = useState(line1[0] ?? "");
  const [text2, setText2] = useState(line2[0] ?? "");
  const [phase, setPhase] = useState<Phase>("start");
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

    const target1 = line1[idx1 % line1.length];
    const target2 = line2[idx2 % line2.length];

    let delay = 55;
    if (phase === "start") delay = 1500;
    if (phase === "l1-hold" || phase === "l2-hold") delay = 1300;
    if (phase === "l1-del" || phase === "l2-del") delay = 25;

    const timer = window.setTimeout(() => {
      if (phase === "start") {
        setPhase("l1-del");
      } else if (phase === "l1-del") {
        if (text1.length > 0) {
          setText1(text1.slice(0, -1));
        } else {
          setIdx1((i) => (i + 1) % line1.length);
          setPhase("l1-type");
        }
      } else if (phase === "l1-type") {
        if (text1.length < target1.length) {
          setText1(target1.slice(0, text1.length + 1));
        } else {
          setPhase("l1-hold");
        }
      } else if (phase === "l1-hold") {
        setPhase("l2-del");
      } else if (phase === "l2-del") {
        if (text2.length > 0) {
          setText2(text2.slice(0, -1));
        } else {
          setIdx2((i) => (i + 1) % line2.length);
          setPhase("l2-type");
        }
      } else if (phase === "l2-type") {
        if (text2.length < target2.length) {
          setText2(target2.slice(0, text2.length + 1));
        } else {
          setPhase("l2-hold");
        }
      } else if (phase === "l2-hold") {
        setPhase("l1-del");
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phase, text1, text2, idx1, idx2, reduce, line1, line2]);

  const line1Active =
    phase === "start" ||
    phase === "l1-del" ||
    phase === "l1-type" ||
    phase === "l1-hold";
  const line2Active = phase === "l2-del" || phase === "l2-type" || phase === "l2-hold";

  return (
    <>
      <span>
        {text1}
        {!reduce && line1Active ? <Cursor /> : null}
      </span>
      <br />
      <span className="text-subtle">
        {text2}
        {!reduce && line2Active ? <Cursor /> : null}
      </span>
    </>
  );
}

function Cursor() {
  return (
    <span
      className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.15em] animate-pulse rounded-sm bg-current opacity-80"
      aria-hidden
    />
  );
}
