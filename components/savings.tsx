import { Check, X } from "lucide-react";

import { Container } from "./container";

type Alternative = {
  label: string;
  price: string;
  detail: string;
  items: { label: string; included: boolean }[];
};

const ALTERNATIVES: Alternative[] = [
  {
    label: "Agências separadas",
    price: "R$ 16.000+",
    detail: "/mês somando tudo",
    items: [
      { label: "Agência de marketing", included: true },
      { label: "Agência de software", included: true },
      { label: "Agência de automação e IA", included: true },
      { label: "Um contrato e um ponto de contato", included: false },
      { label: "Horas ilimitadas", included: false },
    ],
  },
  {
    label: "Contratar profissional",
    price: "R$ 20.000+",
    detail: "/mês com encargos",
    items: [
      { label: "Gestor de tráfego", included: true },
      { label: "Social media + designer + redator", included: true },
      { label: "Software e automação", included: true },
      { label: "Tudo no piloto automático", included: false },
      { label: "Sem gerir equipe", included: false },
    ],
  },
];

const NOHUMANS_ITEMS = [
  "Automação, IA, marketing e software",
  "Todos os departamentos",
  "Horas ilimitadas, 1 demanda por vez",
  "Entrega em até 48h",
  "Um único ponto de contato",
];

export function Savings() {
  return (
    <section id="economia" className="py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Economia
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          O custo de contratar separado, sem precisar.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Uma assinatura da nohumans substitui agências separadas ou um time
          inteiro — por uma fração do valor.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {ALTERNATIVES.map((alt) => (
            <div
              key={alt.label}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {alt.label}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                {alt.price}
                <span className="text-base font-normal text-muted-foreground">
                  {alt.detail}
                </span>
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {alt.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm">
                    {item.included ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <X className="mt-0.5 size-4 shrink-0 text-subtle" />
                    )}
                    <span
                      className={
                        item.included ? "text-muted" : "text-subtle line-through"
                      }
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* nohumans — destacado */}
          <div className="rounded-xl border border-foreground bg-foreground p-6 text-background">
            <p className="text-sm font-medium text-background/70">nohumans</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">
              R$ 6.000
              <span className="text-base font-normal text-background/70">
                /mês
              </span>
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NOHUMANS_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-subtle">
          Em vez de R$ 16.000 a R$ 20.000/mês entre agências e equipe, você paga
          R$ 6.000/mês e tem tudo incluso. Economia de até R$ 14.000/mês.
          Valores de referência de mercado 2025/2026.
        </p>
      </Container>
    </section>
  );
}
