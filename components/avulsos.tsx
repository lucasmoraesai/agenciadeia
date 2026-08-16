"use client";

import { AVULSO_PRICE, AVULSOS } from "@/lib/config";
import { Container } from "./container";
import { DepartmentIcon } from "./department-icon";
import { useCart } from "./cart-context";

export function Avulsos() {
  const { has, toggle } = useCart();

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
          R$ 3.000/mês cada. Kickoff após o pagamento, reunião mensal, CS
          dedicado e suporte VIP.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AVULSOS.map((item) => {
            const selected = has(item.id);
            return (
              <article
                key={item.id}
                className={`flex flex-col rounded-xl border p-6 transition-colors ${
                  selected
                    ? "border-emerald-500/50 bg-emerald-500/10"
                    : "border-border bg-background hover:bg-surface"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-md border ${
                    selected
                      ? "border-emerald-500/40 text-emerald-400"
                      : "border-border text-foreground"
                  }`}
                >
                  <DepartmentIcon id={item.id} className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-base font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <div
                  className={`mt-5 border-t pt-4 ${
                    selected ? "border-emerald-500/20" : "border-border"
                  }`}
                >
                  <p>
                    <span className="text-lg font-semibold tracking-tight">
                      {AVULSO_PRICE}
                    </span>
                    <span className="ml-1.5 text-xs text-subtle">/mês</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`mt-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                      selected ? "text-emerald-400" : "text-foreground"
                    }`}
                  >
                    {selected ? "No carrinho · Remover" : "Adicionar ao carrinho"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
