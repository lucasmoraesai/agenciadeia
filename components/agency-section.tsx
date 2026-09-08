import type { ReactNode } from "react";
import { Container } from "./container";
import { Icons } from "./agency-page";
import type { Agency } from "@/lib/agencies";

type AgencySectionProps = {
  agency: Agency;
  logo: ReactNode;
  /** id para âncora */
  id?: string;
};

export function AgencySection({ agency, logo, id }: AgencySectionProps) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <Container>
        {/* Hero estilo Apple — centralizado, tipografia grande */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-surface">
            {logo}
          </div>
          <p className="mt-6 font-mono text-sm uppercase tracking-widest text-subtle">
            {agency.eyebrow}
          </p>
          <h2 className="tracking-tighter-display mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {agency.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">{agency.subtitle}</p>
        </div>

        {/* Features — cards estilo Departamentos */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agency.features.map((feature) => {
            const Icon = Icons[feature.icon as keyof typeof Icons];
            return (
              <article
                key={feature.title}
                className="flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:bg-surface"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground">
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                </span>
                <h3 className="mt-4 text-base font-medium tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
