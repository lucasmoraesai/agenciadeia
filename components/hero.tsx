import { Container } from "./container";

export function Hero() {
  return (
    <section className="glow-hero relative min-h-[88vh] overflow-hidden">
      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-20 pt-28">
        <p className="rise kicker text-muted">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-copper align-middle" />
          Brasil · Agência de IA
        </p>
        <h1 className="rise display mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-[88px]">
          IA tem
          <br />
          <span className="text-copper">arquitetura.</span>
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "80ms" }}
        >
          Claude Code, vibe coding, marketing e automação rodando como um
          sistema só. A gente lê o negócio antes de escrever código.
        </p>
        <a
          className="rise mt-10 inline-flex w-fit items-center text-sm text-foreground fade-hover"
          href="#praticas"
          style={{ animationDelay: "140ms" }}
        >
          Ver as cinco frentes →
        </a>
      </Container>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex">
        <span className="scroll-hint kicker text-subtle">Scroll</span>
        <span className="mt-3 h-14 w-px bg-border-strong" />
      </div>
    </section>
  );
}
