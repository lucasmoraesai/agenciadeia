import { HERO_PHRASES } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import ParticleText from "./particle-text";
import { Container } from "./container";
import { Typewriter } from "./typewriter";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
      <Container className="relative py-28 sm:py-36">
        <h1 className="rise tracking-tighter-display max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-[84px]">
          <Typewriter phrases={HERO_PHRASES} />
          <br />
          <span className="text-subtle">por assinatura</span>
        </h1>
        <p
          className="rise mt-7 max-w-xl text-xl text-muted"
          style={{ animationDelay: "80ms" }}
        >
          Automatize sua empresa, sem limites.
        </p>
        <div
          className="rise mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "140ms" }}
        >
          <a
            href={whatsappHref(
              "Quero assinar o plano de R$ 6.000/mês da nohumans.",
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Falar no WhatsApp
          </a>
        </div>

        <ParticleText
          text="nohumans"
          particleSize={2}
          density={4}
          color="#ededed"
          highlightColor="#a1a1a1"
          scatter={180}
          gatherDuration={1600}
          stagger={420}
          pointerRepel={40}
          repelRadius={120}
          idleDrift={0.7}
          trigger="hover"
          fontSize="clamp(3rem, 12vw, 8rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
          className="mt-16"
          style={{ height: 320 }}
        />
      </Container>
    </section>
  );
}
