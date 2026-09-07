"use client";

import {
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINKEDIN,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Container } from "./container";
import { Logo } from "./logo";

const PAGES = [
  { href: "/automacao", label: "Agência de Automação" },
  { href: "/ia", label: "Agência de IA" },
  { href: "/marketing", label: "Agência de Marketing" },
  { href: "/software", label: "Agência de Software" },
];

const PROGRAMS = [
  { href: "/parceiro", label: "Quero ser um Parceiro" },
  { href: "/revendedor", label: "Quero ser um Revendedor" },
  { href: "/franquia", label: "Quero ser uma Franquia" },
  { href: "/afiliado", label: "Quero ser um Afiliado" },
];

const SOCIALS = [
  { label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { label: INSTAGRAM_HANDLE, href: INSTAGRAM, external: true },
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: EMAIL, href: "mailto:" + EMAIL, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contato" className="border-t border-border">
      {/* CTA */}
      <div className="border-b border-border">
        <Container className="py-20 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            Contato
          </p>
          <h2 className="tracking-tighter-display mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            Contrata. A gente cria o grupo.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Kickoff após o pagamento, grupo no WhatsApp, CS dedicado e suporte
            VIP.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Falar no WhatsApp
            </a>
            <a
              href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
              target="_blank"
              rel="noreferrer"
              className="text-xl tracking-tight transition-opacity hover:opacity-80 sm:text-2xl"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </Container>
      </div>

      {/* Links */}
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Agência automatizada por IA. Automação, agents, vibe coding e
              software — tudo no piloto automático.
            </p>
            <ul className="mt-6 space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    className="text-sm text-muted transition-opacity hover:opacity-80"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              Serviços
            </p>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((page) => (
                <li key={page.href}>
                  <a
                    href={page.href}
                    className="text-sm text-muted transition-opacity hover:opacity-80"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              Programas
            </p>
            <ul className="mt-4 space-y-2.5">
              {PROGRAMS.map((program) => (
                <li key={program.href}>
                  <a
                    href={program.href}
                    className="text-sm text-muted transition-opacity hover:opacity-80"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="/#como"
                  className="text-sm text-muted transition-opacity hover:opacity-80"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="/#planos"
                  className="text-sm text-muted transition-opacity hover:opacity-80"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="/#avulsos"
                  className="text-sm text-muted transition-opacity hover:opacity-80"
                >
                  Departamentos
                </a>
              </li>
              <li>
                <a
                  href="/quem-somos"
                  className="text-sm text-muted transition-opacity hover:opacity-80"
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-opacity hover:opacity-80"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-6">
          <p className="font-mono text-[11px] text-subtle">
            nohumans · agenciadeia.tech · {year}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[11px] text-subtle transition-opacity hover:opacity-80"
          >
            Voltar ao topo ↑
          </a>
        </Container>
      </div>
    </footer>
  );
}
