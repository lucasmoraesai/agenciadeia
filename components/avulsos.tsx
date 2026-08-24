"use client";

import { AVULSOS } from "@/lib/config";
import { Container } from "./container";
import { DepartmentIcon } from "./department-icon";

export function Avulsos() {
  return (
    <section id="avulsos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Departamentos
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Automatize cada departamento da sua empresa.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Kickoff após o pagamento, reunião mensal, CS dedicado e suporte VIP.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AVULSOS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:bg-surface"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground">
                <DepartmentIcon id={item.id} className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-base font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
