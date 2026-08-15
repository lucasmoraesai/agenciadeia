"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE_NAME } from "@/lib/config";
import { formatBRL, whatsappHref } from "@/lib/whatsapp";
import { useCart } from "./cart-context";

function buildProposalText(company: string, items: { title: string }[], total: number) {
  const date = new Date().toLocaleDateString("pt-BR");
  const lines = [
    `Proposta comercial — ${SITE_NAME}`,
    `Data: ${date}`,
    company.trim() ? `Empresa: ${company.trim()}` : null,
    "",
    "Departamentos:",
    ...items.map((item) => `• ${item.title} — R$ 3.000/mês`),
    "",
    `Total: ${formatBRL(total)}/mês`,
    "",
    "Condições: kickoff após o pagamento para configurar o grupo e entender a demanda.",
    "Reunião mensal. CS dedicado. Suporte VIP.",
    "Horas ilimitadas, 1 demanda ativa por vez, prazo de até 48h.",
    "Mensal, via WhatsApp. Pausa ou cancela quando quiser.",
    "Validade: 15 dias.",
  ].filter((line) => line !== null);

  return lines.join("\n");
}

export function CartUi() {
  const { items, total, remove, clear } = useCart();
  const [open, setOpen] = useState(false);
  const [proposal, setProposal] = useState(false);
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      setOpen(false);
      setProposal(false);
    }
  }, [items.length]);

  useEffect(() => {
    if (!open && !proposal) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProposal(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, proposal]);

  const proposalText = useMemo(
    () => buildProposalText(company, items, total),
    [company, items, total],
  );

  const proposalNumber = useMemo(() => {
    const stamp = new Date();
    const y = stamp.getFullYear();
    const m = String(stamp.getMonth() + 1).padStart(2, "0");
    const d = String(stamp.getDate()).padStart(2, "0");
    return `NH-${y}${m}${d}-${String(items.length).padStart(2, "0")}`;
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <>
      <div className="h-20" aria-hidden />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4">
        <div className="pointer-events-auto mx-auto flex max-w-[1120px] items-center justify-between gap-4 rounded-xl border border-border-strong bg-surface px-4 py-3">
          <p className="text-sm">
            <span className="font-medium">{items.length} departamento{items.length > 1 ? "s" : ""}</span>
            <span className="text-muted"> · {formatBRL(total)}/mês</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-md border border-border-strong px-3 py-1.5 text-sm transition-colors hover:bg-surface-hover"
            >
              Ver carrinho
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setProposal(true);
              }}
              className="rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Gerar proposta
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Fechar carrinho"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-medium tracking-tight">Carrinho</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-opacity hover:opacity-80"
              >
                Fechar
              </button>
            </div>
            <ul className="flex-1 overflow-auto px-6 py-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-border py-4"
                >
                  <div>
                    <p className="font-medium tracking-tight">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">R$ 3.000</p>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="mt-2 text-xs text-subtle transition-opacity hover:opacity-80"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-border px-6 py-5">
              <label className="block text-sm text-muted" htmlFor="company">
                Empresa (opcional)
              </label>
              <input
                id="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Nome da empresa"
                className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none placeholder:text-subtle focus:border-border-strong"
              />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted">Total mensal</span>
                <span className="font-medium">{formatBRL(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setProposal(true);
                }}
                className="mt-4 w-full rounded-md bg-foreground py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Gerar proposta comercial
              </button>
              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full text-center text-xs text-subtle transition-opacity hover:opacity-80"
              >
                Limpar
              </button>
            </div>
          </aside>
        </div>
      )}

      {proposal && (
        <div className="fixed inset-0 z-[70] overflow-auto bg-black/80 p-4 sm:p-8">
          <div className="proposal-sheet mx-auto w-full max-w-2xl rounded-xl border border-border bg-background p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  Proposta comercial
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{SITE_NAME}</h2>
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
                <dd className="mt-1">{new Date().toLocaleDateString("pt-BR")}</dd>
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
                  <th className="pb-3 font-normal">Departamento</th>
                  <th className="pb-3 font-normal">Escopo</th>
                  <th className="pb-3 text-right font-normal">Mensal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border">
                    <td className="py-3 font-medium">{item.title}</td>
                    <td className="py-3 text-muted">{item.body}</td>
                    <td className="py-3 text-right">R$ 3.000</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-right text-lg font-semibold tracking-tight">
              Total {formatBRL(total)}/mês
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Kickoff após o pagamento para configurar o grupo e entender a
              demanda. Reunião mensal, CS dedicado e suporte VIP. Horas
              ilimitadas, 1 demanda ativa por vez, prazo de até 48h.
            </p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
