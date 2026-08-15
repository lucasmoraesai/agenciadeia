import { AVULSO_PRICE, AVULSOS, EMAIL } from "@/lib/config";
import { Container } from "./container";
import { DepartmentIcon } from "./department-icon";

export function Avulsos() {
  return (
    <section id="avulsos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Avulsos
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Escolha o departamento.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          R$ 3.000/mês cada. WhatsApp, fila, o mês todo.
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
              <h3 className="mt-4 text-base font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
              <div className="mt-5 border-t border-border pt-4">
                <p>
                  <span className="text-lg font-semibold tracking-tight">{AVULSO_PRICE}</span>
                  <span className="ml-1.5 text-xs text-subtle">/mês</span>
                </p>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Avulso mensal ${item.title}`)}`}
                  className="mt-3 inline-block text-sm font-medium transition-opacity hover:opacity-80"
                >
                  Assinar {item.title} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
