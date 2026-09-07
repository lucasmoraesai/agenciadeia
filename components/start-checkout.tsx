"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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

  const basePrice = plan.id === "ilimitado" ? 6000 : 3000;
  const isUnlimited = plan.id === "ilimitado";

  const [company, setCompany] = useState("");
  const [billing, setBilling] = useState<"mensal" | "anual">("mensal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAnnual = billing === "anual";
  const monthly = formatBRL(basePrice);
  const monthlyEquiv = Math.round(basePrice * 0.7);
  const monthlyEquivBRL = formatBRL(monthlyEquiv);
  const annualTotal = monthlyEquiv * 12;
  const annualBRL = formatBRL(annualTotal);
  const annualDiscountBRL = formatBRL(basePrice * 12 - annualTotal);

  const meetingText = `Olá! Quero agendar uma reunião pra entender o plano ${plan.name} (${plan.price}${plan.period}) da No Humans.`;

  const proposalNumber = useMemo(() => {
    const stamp = new Date();
    const y = stamp.getFullYear();
    const m = String(stamp.getMonth() + 1).padStart(2, "0");
    const d = String(stamp.getDate()).padStart(2, "0");
    return `NH-${y}${m}${d}-01`;
  }, []);

  return (
    <>
      <Container className="py-16 sm:py-24">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Start checkout
        </p>
        <h1 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Revisão do seu plano.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Confira o plano escolhido e decida: assinar agora, gerar um orçamento em
          PDF ou agendar uma reunião.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Revisão do plano */}
          <section className="rounded-xl border border-border p-6">
            <h2 className="text-sm font-medium tracking-tight">Plano</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">
              {plan.name}
            </p>

            {/* Toggle mensal / anual */}
            <div className="mt-6 grid grid-cols-2 gap-1 rounded-lg border border-border p-1">
              <button
                type="button"
                onClick={() => setBilling("mensal")}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  !isAnnual
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-surface-hover"
                }`}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setBilling("anual")}
                className={`flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isAnnual
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-surface-hover"
                }`}
              >
                Anual
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                    isAnnual
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  −30%
                </span>
              </button>
            </div>

            <p className="mt-5 text-lg">
              {isAnnual ? monthlyEquivBRL : plan.price}
              <span className="text-sm text-subtle">
                {isAnnual ? "/mês equivalente" : plan.period}
              </span>
            </p>
            {isAnnual && (
              <p className="mt-1 text-sm text-muted">
                {annualBRL}/ano ·{" "}
                <span className="font-medium text-foreground">
                  30% de desconto (economia de {annualDiscountBRL}/ano)
                </span>
              </p>
            )}
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
              {isAnnual ? "Total anual" : "Total mensal"}:{" "}
              <span className="font-semibold text-foreground">
                {isAnnual ? `${annualBRL}/ano` : `${monthly}/mês`}
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
              {plan.name} ·{" "}
              {isAnnual
                ? `${annualBRL}/ano (30% OFF)`
                : `${monthly}${plan.period}`}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`/checkout/?plan=${plan.id}${isAnnual ? "&billing=anual" : ""}`}
                className="flex w-full items-center justify-center rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Assinar agora
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="flex w-full items-center justify-center rounded-md border border-border-strong px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Gerar orçamento
              </button>
              <a
                href={whatsappHref(meetingText)}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-md border border-border-strong px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Agendar reunião
              </a>
            </div>
            <label
              className="mt-6 block text-sm text-muted"
              htmlFor="proposal-company"
            >
              Empresa (opcional — aparece no PDF)
            </label>
            <input
              id="proposal-company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Nome da empresa"
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-subtle focus:border-border-strong"
            />
            <p className="mt-6 text-xs leading-relaxed text-subtle">
              Sem contrato de fidelidade. Pausa ou cancela quando quiser.
              Pagamento via PIX, Bitcoin ou Ethereum. Plano anual com 30% de
              desconto.
            </p>
          </aside>
        </div>
      </Container>

      {/* Proposta comercial — só na impressão (PDF, uma página) */}
      {mounted &&
        createPortal(
          <div className="print-only">
            <div className="proposal-sheet w-full bg-white text-neutral-900">
              {/* Header: logo ao lado do título */}
              <header className="flex items-center justify-between gap-6 border-b-2 border-neutral-900 pb-5">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-10 w-10 shrink-0 text-neutral-900"
                    aria-hidden
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="52 10"
                      strokeLinecap="round"
                      transform="rotate(-40 16 16)"
                    />
                  </svg>
                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight">
                      nohumans
                    </p>
                    <p className="mt-1.5 text-xs text-neutral-500">
                      Agência de IA e Automação — assinatura mensal
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    Proposta comercial
                  </p>
                  <p className="mt-1 text-sm font-bold">{proposalNumber}</p>
                </div>
              </header>

              <div className="pt-5">
                {/* Meta */}
                <dl className="grid grid-cols-2 gap-x-6 gap-y-2 border-b border-neutral-200 pb-4 text-sm sm:grid-cols-4">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                      Data
                    </dt>
                    <dd className="mt-0.5 font-semibold">
                      {new Date().toLocaleDateString("pt-BR")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                      Validade
                    </dt>
                    <dd className="mt-0.5 font-semibold">15 dias</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                      Empresa
                    </dt>
                    <dd className="mt-0.5 font-semibold">
                      {company.trim() || "A definir"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                      Emitido por
                    </dt>
                    <dd className="mt-0.5 font-semibold">nohumans</dd>
                  </div>
                </dl>

                {/* Título */}
                <h2 className="mt-5 text-2xl font-bold tracking-tight">
                  Assinatura {plan.name}
                  <span className="ml-2 align-middle rounded-full border border-neutral-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-600">
                    {isAnnual ? "Anual · −30%" : "Mensal"}
                  </span>
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Automação, IA, marketing, software e UX em uma assinatura.
                  Horas ilimitadas, 1 demanda ativa por vez, prazo de até 48h.
                </p>

                {/* Detalhamento */}
                <table className="mt-5 w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300 text-[10px] uppercase tracking-widest text-neutral-400">
                      <th className="pb-2 pr-4 font-semibold">Item</th>
                      <th className="pb-2 pr-4 font-semibold">Detalhe</th>
                      <th className="pb-2 text-right font-semibold">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="py-2.5 pr-4 font-semibold">
                        Assinatura {plan.name}
                      </td>
                      <td className="py-2.5 pr-4 text-neutral-600">
                        {plan.quota} · cobrança{" "}
                        {isAnnual ? "anual" : "mensal"}
                      </td>
                      <td className="py-2.5 text-right font-semibold">
                        {isAnnual ? `${annualBRL}/ano` : `${monthly}/mês`}
                      </td>
                    </tr>
                    {isAnnual && (
                      <tr className="border-b border-neutral-200">
                        <td className="py-2.5 pr-4 font-semibold">
                          Desconto anual (30% OFF)
                        </td>
                        <td className="py-2.5 pr-4 text-neutral-600">
                          Equivale a {monthlyEquivBRL}/mês
                        </td>
                        <td className="py-2.5 text-right font-semibold text-neutral-700">
                          −{annualDiscountBRL}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-neutral-200">
                      <td className="py-2.5 pr-4 font-semibold">
                        Setup &amp; kickoff
                      </td>
                      <td className="py-2.5 pr-4 text-neutral-600">
                        Grupo no WhatsApp + entendimento da demanda
                      </td>
                      <td className="py-2.5 text-right text-neutral-500">
                        Incluso
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-2.5 pr-4 font-semibold">
                        CS dedicado &amp; suporte VIP
                      </td>
                      <td className="py-2.5 pr-4 text-neutral-600">
                        Reunião {isUnlimited ? "semanal" : "mensal"} de
                        acompanhamento
                      </td>
                      <td className="py-2.5 text-right text-neutral-500">
                        Incluso
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-2.5 pr-4 font-semibold">
                        Horas ilimitadas
                      </td>
                      <td className="py-2.5 pr-4 text-neutral-600">
                        1 demanda ativa por vez, prazo de até 48h
                      </td>
                      <td className="py-2.5 text-right text-neutral-500">
                        Incluso
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-2.5 pr-4 font-semibold">
                        Formas de pagamento
                      </td>
                      <td className="py-2.5 pr-4 text-neutral-600">
                        PIX, Bitcoin ou Ethereum — sem fidelidade
                      </td>
                      <td className="py-2.5 text-right text-neutral-500">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Total */}
                <div className="mt-4 flex items-center justify-between rounded-lg border border-neutral-300 bg-neutral-50 px-5 py-3">
                  <span className="text-sm font-semibold text-neutral-700">
                    {isAnnual ? "Total anual" : "Total mensal"}
                  </span>
                  <span className="text-xl font-bold">
                    {isAnnual ? annualBRL : monthly}
                    <span className="ml-1 text-sm font-medium text-neutral-500">
                      {isAnnual ? "/ano" : "/mês"}
                    </span>
                  </span>
                </div>

                {/* Incluído */}
                <p className="mt-5 text-[10px] uppercase tracking-widest text-neutral-400">
                  O que está incluído
                </p>
                <ul className="mt-2 grid gap-x-6 gap-y-1 text-sm text-neutral-700 sm:grid-cols-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 py-0.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Condições */}
                <div className="mt-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
                  <p className="text-sm font-semibold text-neutral-900">
                    Condições
                  </p>
                  <p className="mt-1">
                    Kickoff após o pagamento para configurar o grupo e entender a
                    demanda. CS dedicado e suporte VIP. Cobrança{" "}
                    {isAnnual ? "anual" : "mensal"}, via WhatsApp — pausa ou
                    cancela quando quiser.
                    {isAnnual &&
                      " Desconto de 30% aplicado no plano anual."}{" "}
                    Validade desta proposta: 15 dias.
                  </p>
                </div>

                {/* Footer */}
                <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-4 text-[11px] text-neutral-500">
                  <span>nohumans · agenciadeia.tech</span>
                  <span>contato@lucasmoraes.ai · +55 11 98350-7618</span>
                </footer>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
