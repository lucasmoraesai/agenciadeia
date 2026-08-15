import { SERVICES } from "@/lib/config";
import { Container } from "./container";

export function Services() {
  return (
    <section id="servicos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Serviços
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Quatro frentes. Uma entrega: produção.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="rounded-xl border border-border bg-background p-7 transition-colors hover:bg-surface"
            >
              <h3 className="text-lg font-medium tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
