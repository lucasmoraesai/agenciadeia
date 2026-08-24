import { Container } from "./container";

const TASKS = [
  "Automação de processos",
  "Agentes de IA 24/7",
  "Campanhas de marketing",
  "Software sob medida",
  "Interfaces de UX",
];

export function HeroBlock() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
      <Container className="relative grid gap-14 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
        {/* Texto */}
        <div>
          <p
            className="rise font-mono text-[11px] uppercase tracking-widest text-subtle"
            style={{ animationDelay: "0ms" }}
          >
            nohumans — Agência de IA
          </p>
          <h1
            className="rise tracking-tighter-display mt-4 max-w-xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            Sua empresa no{" "}
            <span className="bg-linear-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
              piloto automático.
            </span>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg text-muted"
            style={{ animationDelay: "120ms" }}
          >
            Cinco agências em um só lugar — automação, IA, marketing, software e
            UX — rodando 24/7, sem contratar humanos.
          </p>
          <div
            className="rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#vertentes"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Ver vertentes
            </a>
            <a
              href="#planos"
              className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              Ver planos
            </a>
          </div>
        </div>

        {/* Visual: terminal de automação */}
        <div className="rise relative" style={{ animationDelay: "200ms" }}>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-subtle">
                nohumans — automação
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-sm">
              <p className="text-subtle">$ nohumans run</p>
              {TASKS.map((task) => (
                <p key={task} className="flex items-center gap-2 text-muted">
                  <span className="text-[#28c840]">✓</span>
                  {task}
                </p>
              ))}
              <p className="pt-1 text-subtle">→ 5 agências · 1 só lugar</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
