import { EMAIL, INSTAGRAM, INSTAGRAM_HANDLE, LINKEDIN } from "@/lib/config";
import { Container } from "./container";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border py-24">
      <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="kicker text-copper">Contato</p>
          <h2 className="display mt-5 max-w-lg text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Brief, repo ou campanha. A gente entra no trabalho.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Conte o que precisa sair do papel. Respondemos com o recorte certo —
            IA, Claude Code, vibe coding, marketing ou automação.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end md:text-right">
          <a
            href={`mailto:${EMAIL}`}
            className="text-xl tracking-tight fade-hover sm:text-2xl"
          >
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM}
            className="kicker text-muted fade-hover"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <a href={LINKEDIN} className="kicker text-muted fade-hover">
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
