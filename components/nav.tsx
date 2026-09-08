"use client";

import { whatsappHref } from "@/lib/whatsapp";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-6">
        <a href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Logo />
        </a>
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="/#planos"
            className="rounded-md border border-border-strong px-3 py-1 text-xs font-medium transition-colors hover:bg-surface-hover"
          >
            Ver plano
          </a>
          <a
            href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background transition-opacity hover:opacity-85"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
