import { EMAIL, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/config";
import { Container } from "./container";

export function Contact() {
  return (
    <section id="contato" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Contato
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
          Contrata. A gente abre o grupo.
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-block text-xl tracking-tight transition-opacity hover:opacity-80 sm:text-2xl"
        >
          {EMAIL}
        </a>
        <p className="mt-4">
          <a
            href={INSTAGRAM}
            className="text-sm text-muted transition-opacity hover:opacity-80"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </Container>
    </section>
  );
}
