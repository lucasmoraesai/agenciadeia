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
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
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
          <div className="proposal-sheet mx-auto w-full max-w-2xl rounded-xl border border-border bg-background p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  Proposta comercial
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {SITE_NAME}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setProposal(false)}
                className="proposal-actions text-sm text-muted transition-opacity hover:opacity-80"
              >
                Fechar
              </button>
            </div>

            <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-subtle">Número</dt>
                <dd className="mt-1 font-mono">{proposalNumber}</dd>
              </div>
              <div>
                <dt className="text-subtle">Data</dt>
                <dd className="mt-1">
                  {new Date().toLocaleDateString("pt-BR")}
                </dd>
              </div>
              <div>
                <dt className="text-subtle">Empresa</dt>
                <dd className="mt-1">{company.trim() || "A definir"}</dd>
              </div>
              <div>
                <dt className="text-subtle">Validade</dt>
                <dd className="mt-1">15 dias</dd>
              </div>
            </dl>

            <table className="mt-8 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-subtle">
                  <th className="pb-3 font-normal">Plano</th>
                  <th className="pb-3 font-normal">Escopo</th>
                  <th className="pb-3 text-right font-normal">Mensal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 font-medium">{plan.name}</td>
                  <td className="py-3 text-muted">{plan.quota}</td>
                  <td className="py-3 text-right">{monthly}</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-6 text-right text-lg font-semibold tracking-tight">
              Total {monthly}/mês
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Kickoff após o pagamento para configurar o grupo e entender a
              demanda. Reunião mensal, CS dedicado e suporte VIP. Horas
              ilimitadas, 1 demanda ativa por vez, prazo de até 48h.
            </p>

            <label className="mt-6 block text-sm text-muted" htmlFor="proposal-company">
              Empresa (opcional)
            </label>
            <input
              id="proposal-company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Nome da empresa"
              className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none placeholder:text-subtle focus:border-border-strong"
            />

            <div className="proposal-actions mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref(proposalText)}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Enviar no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-md border border-border-strong px-4 py-2.5 text-sm transition-colors hover:bg-surface-hover"
              >
                Imprimir / PDF
              </button>
              <button
                type="button"
                onClick={() => setProposal(false)}
                className="rounded-md border border-border-strong px-4 py-2.5 text-sm transition-colors hover:bg-surface-hover"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
