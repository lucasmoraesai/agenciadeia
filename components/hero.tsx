export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-terracotta/15 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="rise mono text-[11px] uppercase tracking-[0.22em] text-terracotta">
          Ateliê de engenharia e operação
        </p>
        <h1 className="rise display mt-5 max-w-3xl text-[2.6rem] leading-[1.08] text-paper sm:text-6xl">
          A agência que constrói com IA — e deixa rodando.
        </h1>
        <p
          className="rise mt-7 max-w-xl text-lg leading-relaxed text-paper-muted"
          style={{ animationDelay: "80ms" }}
        >
          Claude Code, vibe coding, marketing e automação. Entrega em produção,
          com o time usando no dia seguinte — não deck de piloto.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "140ms" }}
        >
          <a
            href="#contato"
            className="inline-flex items-center bg-terracotta px-5 py-2.5 text-sm font-medium text-paper fade-hover"
          >
            Falar com a agência
          </a>
          <a
            href="#praticas"
            className="mono text-[11px] uppercase tracking-[0.18em] text-muted fade-hover"
          >
            Ver práticas →
          </a>
        </div>
      </div>
    </section>
  );
}
