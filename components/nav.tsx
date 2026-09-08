"use client";

import { whatsappHref } from "@/lib/whatsapp";
import { Logo } from "./logo";

const LINKS = [
  { href: "/automacao", label: "Agência de Automação" },
  { href: "/ia", label: "Agência de IA" },
  { href: "/marketing", label: "Agência de Marketing" },
  { href: "/software", label: "Agência de Software" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-6">
        <a href="/" className="shrink-0 transition-opacity hover:opacity-85">
          <Logo />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs text-muted transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>
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
