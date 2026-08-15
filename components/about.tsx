import { PILLARS } from "@/lib/config";
import { Container } from "./container";

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-24">
      <Container>
        <p className="kicker text-copper">Quem somos</p>
        <h2 className="display mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
          Cada real investido é uma decisão de{" "}
          <em className="font-semibold not-italic text-copper">negócio</em>.
        </h2>
        <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.kicker}>
              <p className="kicker text-subtle">{pillar.kicker}</p>
              <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
