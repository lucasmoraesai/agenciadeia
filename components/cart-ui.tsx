"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE_NAME } from "@/lib/config";
import { formatBRL, whatsappHref } from "@/lib/whatsapp";
import { useCart } from "./cart-context";

function buildProposalText(
  company: string,
  items: { title: string }[],
  total: number,
) {
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

function CartIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6 7h15l-1.4 8.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.6L5.2 4H3" />
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </svg>
  );
}

/** Ícone do carrinho no topo (nav). */
export function CartButton() {
  const { items, openDrawer, ready } = useCart();
  const count = items.length;

  if (!ready) {
    return <span className="h-9 w-9" aria-hidden />;
  }

  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label={
        count > 0
          ? `Abrir carrinho, ${count} departamento${count > 1 ? "s" : ""}`
          : "Abrir carrinho"
      }
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface-hover"
    >
      <CartIcon />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 font-mono text-[10px] font-medium text-background">
          {count}
        </span>
      )}
    </button>
  );
}

/** Sidebar do carrinho + proposta. Sem barra inferior. */
export function CartUi() {
  const { items, total, remove, clear, drawerOpen, closeDrawer } = useCart();
  const [proposal, setProposal] = useState(false);
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (items.length === 0) setProposal(false);
  }, [items.length]);

  useEffect(() => {
    if (!drawerOpen && !proposal) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProposal(false);
        closeDrawer();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, proposal, closeDrawer]);

  useEffect(() => {
    if (!drawerOpen && !proposal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen, proposal]);

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

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          aria-label="Fechar carrinho"
          tabIndex={drawerOpen ? 0 : -1}
          className={`absolute inset-0 bg-black/70 transition-opacity duration-200 motion-reduce:transition-none ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Carrinho"
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h2 className="text-lg font-medium tracking-tight">Carrinho</h2>
              {items.length > 0 && (
                <p className="mt-0.5 text-xs text-subtle">
                  {items.length} departamento{items.length > 1 ? "s" : ""} ·{" "}
                  {formatBRL(total)}/mês
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              className="text-sm text-muted transition-opacity hover:opacity-80"
            >
              Fechar
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <CartIcon className="h-8 w-8 text-subtle" />
              <p className="mt-4 text-sm text-muted">Carrinho vazio.</p>
              <a
                href="/#avulsos"
                onClick={closeDrawer}
                className="mt-6 text-sm font-medium transition-opacity hover:opacity-80"
              >
                Ver departamentos
              </a>
            </div>
          ) : (
            <>
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
                <a
                  href="/checkout/"
                  className="mt-4 flex w-full items-center justify-center rounded-md bg-foreground py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Ir para o checkout
                </a>
                <button
                  type="button"
                  onClick={() => {
                    closeDrawer();
                    setProposal(true);
                  }}
                  className="mt-3 w-full text-center text-sm text-muted transition-opacity hover:opacity-80"
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
            </>
          )}
        </aside>
      </div>

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
                href="/checkout/"
                className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Ir para o checkout
              </a>
              <a
                href={whatsappHref(proposalText)}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border-strong px-4 py-2.5 text-sm transition-colors hover:bg-surface-hover"
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
