"use client";

import { useEffect, useState } from "react";

import { Logo } from "./logo";

export function Nav() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    let threshold = 0;

    const measure = () => {
      const section = document.querySelector("#hero");
      if (section) {
        // Limite = parte inferior do bloco hero em relação ao topo do documento.
        // O hero tem -mt-14, então offsetTop já reflete esse deslocamento.
        const top = section.getBoundingClientRect().top + window.scrollY;
        threshold = top + section.getBoundingClientRect().height;
      } else {
        threshold = window.innerHeight;
      }
    };

    const onScroll = () => {
      setPastHero(window.scrollY >= threshold);
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        pastHero
          ? "bg-background/30 backdrop-blur-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-6">
        <a href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Logo />
        </a>
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="/#planos"
            className="rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:px-4 sm:py-2 sm:text-sm"
          >
            Ver Plano
          </a>
        </div>
      </div>
    </header>
  );
}
