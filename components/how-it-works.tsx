import { STEPS } from "@/lib/config";
import { Container } from "./container";

export function HowItWorks() {
  return (
    <section id="como" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Como funciona
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Contrata. Criamos o grupo. Você pede. Entregamos.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n}>
              <p className="font-mono text-[11px] text-subtle">{step.n}</p>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
