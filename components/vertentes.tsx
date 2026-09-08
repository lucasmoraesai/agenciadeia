import type { ReactNode } from "react";
import { Container } from "./container";
import { Icons } from "./agency-page";

type Vertente = {
  href: string;
  icon: (props: { className?: string }) => ReactNode;
  title: string;
  body: string;
  large?: boolean;
};

const VERTENTES: Vertente[] = [
  {
    href: "/automacao",
    icon: Icons.workflow,
    title: "Agência de Automação",
    body: "Fluxos e robôs que rodam sozinhos, ponta a ponta.",
    large: true,
  },
  {
    href: "/marketing",
    icon: Icons.megaphone,
    title: "Agência de Marketing",
    body: "Campanhas, conteúdo e tráfego no piloto automático.",
    large: true,
  },
  {
    href: "/ia",
    icon: Icons.sparkles,
    title: "Agência de IA",
    body: "Agentes que trabalham por você, 24/7.",
    large: true,
  },
  {
    href: "/software",
    icon: Icons.code,
    title: "Agência de Software",
    body: "Construídos sob medida, em dias.",
    large: true,
  },
];

export function Vertentes() {
  return (
    <section id="vertentes" className="py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Vertentes
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Quatro agências. Em 1 só lugar.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Escolha a frente que sua empresa precisa — ou combine todas.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {VERTENTES.map((vertente) => (
            <article
              key={vertente.href}
              className={
                "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:bg-surface " +
                (vertente.large ? "md:col-span-3" : "md:col-span-2")
              }
            >
              {/* conteúdo — sobe no hover */}
              <div
                className={
                  "flex transform-gpu flex-col transition-transform duration-300 lg:group-hover:-translate-y-6 " +
                  (vertente.large ? "p-8 pb-0" : "p-6 pb-0")
                }
              >
                <span className="flex h-10 w-10 origin-left items-center justify-center rounded-lg border border-border text-subtle transition-transform duration-300 group-hover:scale-90">
                  <vertente.icon className="h-5 w-5" />
                </span>
                <h3
                  className={
                    "mt-5 font-medium tracking-tight " +
                    (vertente.large ? "text-xl" : "text-base")
                  }
                >
                  {vertente.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {vertente.body}
                </p>
              </div>

              {/* CTA — revela no hover */}
              <div
                className={
                  "mt-auto flex transition-all duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 " +
                  (vertente.large ? "px-8 pb-8 pt-4" : "px-6 pb-6 pt-4")
                }
              >
                <a
                  href={vertente.href}
                  className="rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-85"
                >
                  Conhecer
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
