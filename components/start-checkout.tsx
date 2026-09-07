"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PLANS, SITE_NAME } from "@/lib/config";
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

  const price = plan.id === "ilimitado" ? 6000 : 3000;
  const monthly = formatBRL(price);

  const [proposal, setProposal] = useState(false);
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (!proposal) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProposal(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Abre direto o diálogo de impressão (Salvar como PDF)
    const printTimer = window.setTimeout(() => window.print(), 400);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(printTimer);
    };
  }, [proposal]);

  const meetingText = `Olá! Quero agendar uma reunião pra entender o plano ${plan.name} (${plan.price}${plan.period}) da No Humans.`;

  const proposalNumber = useMemo(() => {
    const stamp = new Date();
    const y = stamp.getFullYear();
    const m = String(stamp.getMonth() + 1).padStart(2, "0");
    const d = String(stamp.getDate()).padStart(2, "0");
    return `NH-${y}${m}${d}-01`;
  }, []);

  const proposalText = useMemo(() => {
    const date = new Date().toLocaleDateString("pt-BR");
    const lines = [
      `Proposta comercial — ${SITE_NAME}`,
      `Data: ${date}`,
      company.trim() ? `Empresa: ${company.trim()}` : null,
      "",
      "Plano:",
      `• ${plan.name} — ${monthly}/mês`,
      `  Escopo: ${plan.quota}`,
      "",
      `Total: ${monthly}/mês`,
      "",
      "Condições: kickoff após o pagamento para configurar o grupo e entender a demanda.",
      "Reunião mensal (semanal no Ilimitado). CS dedicado. Suporte VIP.",
      "Horas ilimitadas, 1 demanda ativa por vez, prazo de até 48h.",
      "Mensal, via WhatsApp. Pausa ou cancela quando quiser.",
      "Validade: 15 dias.",
    ].filter((line) => line !== null);
    return lines.join("\n");
  }, [company, plan, monthly]);

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
              {monthly}/mês
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
            {plan.name} · {monthly}
            {plan.period}
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`/checkout/?plan=${plan.id}`}
              className="flex w-full items-center justify-center rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Assinar agora
            </a>
            <button
              type="button"
              onClick={() => setProposal(true)}
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
          <p className="mt-6 text-xs leading-relaxed text-subtle">
            Sem contrato de fidelidade. Pausa ou cancela quando quiser. Pagamento
            via PIX, Bitcoin ou Ethereum.
          </p>
        </aside>
      </div>

      {/* Proposta comercial (orçamento) */}
      {proposal && (
        <div className="fixed inset-0 z-[70] overflow-auto bg-black/80 p-4 sm:p-8">
          <div className="proposal-sheet mx-auto w-full max-w-2xl rounded-2xl bg-white p-8 text-neutral-900 shadow-2xl sm:p-12">
            {/* Header */}
            <header className="flex items-start justify-between gap-6 border-b border-neutral-200 pb-8">
              <div>
                <p className="text-2xl font-bold tracking-tight">nohumans</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Agência de IA e Automação — assinatura mensal
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  Proposta comercial
                </p>
                <p className="mt-1 text-sm font-semibold">{proposalNumber}</p>
              </div>
            </header>

            {/* Meta */}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Data
                </dt>
                <dd className="mt-1 font-medium">
                  {new Date().toLocaleDateString("pt-BR")}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Validade
                </dt>
                <dd className="mt-1 font-medium">15 dias</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Empresa
                </dt>
                <dd className="mt-1 font-medium">
                  {company.trim() || "A definir"}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                  Emitido por
                </dt>
                <dd className="mt-1 font-medium">nohumans</dd>
              </div>
            </dl>

            {/* Título */}
            <h2 className="mt-10 text-xl font-bold tracking-tight">
              Assinatura {plan.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Automação, IA, marketing, software e UX em uma assinatura. Horas
              ilimitadas, 1 demanda ativa por vez, prazo de até 48h.
            </p>

            {/* Tabela */}
            <table className="mt-8 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-[10px] uppercase tracking-widest text-neutral-400">
                  <th className="pb-3 font-medium">Item</th>
                  <th className="pb-3 font-medium">Escopo</th>
                  <th className="pb-3 text-right font-medium">Mensal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 font-semibold">Assinatura {plan.name}</td>
                  <td className="py-4 text-neutral-600">{plan.quota}</td>
                  <td className="py-4 text-right font-semibold">{monthly}</td>
                </tr>
              </tbody>
            </table>

            {/* Total */}
            <div className="mt-6 flex items-center justify-between rounded-lg bg-neutral-100 px-5 py-4">
              <span className="text-sm font-medium text-neutral-600">
                Total mensal
              </span>
              <span className="text-xl font-bold">{monthly}/mês</span>
            </div>

            {/* Incluído */}
            <p className="mt-8 text-[10px] uppercase tracking-widest text-neutral-400">
              O que está incluído
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Condições */}
            <div className="mt-8 rounded-lg border border-neutral-200 p-5 text-sm leading-relaxed text-neutral-600">
              <p className="font-semibold text-neutral-900">Condições</p>
              <p className="mt-2">
                Kickoff após o pagamento para configurar o grupo e entender a
                demanda. Reunião mensal (semanal no Ilimitado), CS dedicado e
                suporte VIP. Mensal, via WhatsApp — pausa ou cancela quando
                quiser. Validade desta proposta: 15 dias.
              </p>
            </div>

            {/* Footer */}
            <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
              <span>nohumans · agenciadeia.tech</span>
              <span>contato@lucasmoraes.ai · +55 11 98350-7618</span>
            </footer>

            {/* Ações (somem na impressão) */}
            <div className="proposal-actions mt-10 space-y-4 border-t border-neutral-200 pt-6">
              <label
                className="block text-sm text-neutral-600"
                htmlFor="proposal-company"
              >
                Empresa (opcional — aparece na proposta)
              </label>
              <input
                id="proposal-company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Nome da empresa"
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              />
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappHref(proposalText)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
                >
                  Enviar no WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100"
                >
                  Imprimir / PDF
                </button>
                <button
                  type="button"
                  onClick={() => setProposal(false)}
                  className="rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
