import { PLANS } from "@/lib/config";
import { Container } from "./container";

export function Plans() {
  return (
    <section id="planos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Planos
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Horas ilimitadas, prazo de até 48h.
        </h2>
        <p className="mt-4 max-w-xl text-muted">1 demanda por vez.</p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-xl border p-7 ${
                plan.featured
                  ? "border-border-strong bg-surface"
                  : "border-border bg-background"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-2.5 left-7 rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-background">
                  Completo
                </span>
              )}
              <h3 className="text-lg font-medium tracking-tight">{plan.name}</h3>
              <p className="mt-6 text-3xl font-semibold tracking-tight">{plan.price}</p>
              <p className="mt-1 text-sm text-subtle">
                {plan.period} · {plan.quota}
              </p>
              <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href ?? "/checkout/?plan=ilimitado"}
                className={`mt-8 flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85 ${
                  plan.featured
                    ? "bg-foreground text-background"
                    : "border border-border-strong"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
