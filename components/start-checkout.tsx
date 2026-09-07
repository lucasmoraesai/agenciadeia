"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PLANS } from "@/lib/config";
import { formatBRL, whatsappHref } from "@/lib/whatsapp";
import { Container } from "./container";

export function StartCheckout() {
  const search = useSearchParams();
  const planId = search.get("plan");

  const plan = useMemo(
    () =>
      PLANS.find((p) => p.id === planId) ??
      PLANS.find((p) => p.id === "ilimitado") ??
      PLANS[0],
    [planId],
  );

  const quoteText = `Olá! Quero gerar um orçamento do plano ${plan.name} (${plan.price}${plan.period}) da No Humans.`;
  const meetingText = `Olá! Quero agendar uma reunião pra entender o plano ${plan.name} (${plan.price}${plan.period}) da No Humans.`;

  return (
    <Container className="py-16 sm:py-24">
      <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
        Start checkout
      </p>
      <h1 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
        Revisão do seu plano.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Confira o plano escolhido e decida: assinar agora, gerar um orçamento ou
        agendar uma reunião.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Revisão do plano */}
        <section className="rounded-xl border border-border p-6">
          <h2 className="text-sm font-medium tracking-tight">Plano</h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight">
            {plan.name}
          </p>
          <p className="mt-2 text-lg">
            {plan.price}
            <span className="text-sm text-subtle">{plan.period}</span>
          </p>
          <p className="mt-1 text-sm text-subtle">{plan.quota}</p>
          <ul className="mt-6 space-y-3 border-t border-border pt-6">
            {plan.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-subtle">
            Total mensal:{" "}
            <span className="font-semibold text-foreground">
              {formatBRL(
                plan.id === "ilimitado" ? 6000 : 3000,
              )}
              /mês
            </span>
          </p>
          <a
            href="/#planos"
            className="mt-4 inline-block text-sm text-subtle transition-opacity hover:opacity-80"
          >
            Ver outros planos
          </a>
        </section>

        {/* Opções */}
        <aside className="rounded-xl border border-border-strong bg-surface p-6 lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-sm font-medium tracking-tight">Como quer seguir?</h2>
          <p className="mt-2 text-sm text-muted">
            {plan.name} · {formatBRL(plan.id === "ilimitado" ? 6000 : 3000)}
            {plan.period}
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`/checkout/?plan=${plan.id}`}
              className="flex w-full items-center justify-center rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Assinar agora
            </a>
            <a
              href={whatsappHref(quoteText)}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-md border border-border-strong px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              Gerar orçamento
            </a>
            <a
              href={whatsappHref(meetingText)}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-md border border-border-strong px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              Agendar reunião
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-subtle">
            Sem contrato de fidelidade. Pausa ou cancela quando quiser. Pagamento
            via PIX, Bitcoin ou Ethereum.
          </p>
        </aside>
      </div>
    </Container>
  );
}
