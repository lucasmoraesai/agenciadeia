import { EMAIL, INSTAGRAM, INSTAGRAM_HANDLE, LINKEDIN } from "@/lib/config";

export function Contact() {
  return (
    <section id="contato" className="border-b border-rule/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-terracotta">
            Contato
          </p>
          <h2 className="display mt-3 text-3xl leading-tight text-paper sm:text-4xl">
            Brief, repo ou campanha. A gente entra no trabalho.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Conte o que precisa sair do papel. Respondemos com o recorte certo —
            IA, Claude Code, vibe coding, marketing ou automação.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-5 border-l border-rule/40 pl-0 sm:pl-10">
          <a
            href={`mailto:${EMAIL}`}
            className="display text-xl text-paper fade-hover sm:text-2xl"
          >
            {EMAIL}
          </a>
          <div className="flex flex-col gap-2">
            <a
              href={INSTAGRAM}
              className="mono text-[12px] uppercase tracking-[0.16em] text-muted fade-hover"
            >
              Instagram {INSTAGRAM_HANDLE}
            </a>
            <a
              href={LINKEDIN}
              className="mono text-[12px] uppercase tracking-[0.16em] text-muted fade-hover"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
