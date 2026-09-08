import { HERO_PHRASES } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import LightRays from "./light-rays";
import { Container } from "./container";
import { Typewriter } from "./typewriter";

export function Hero() {
  return (
    <section className="relative -mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ededed"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={1}
          fadeDistance={1}
          saturation={0.4}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0.05}
        />
      </div>
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
      </Container>
    </section>
  );
}
