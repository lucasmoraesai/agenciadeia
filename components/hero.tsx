import { Container } from "./container";
import { RotatingWord } from "./rotating-word";
import { whatsappHref } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
      <Container className="relative py-28 sm:py-36">
        <h1 className="rise tracking-tighter-display max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-[84px]">
          Agência de <RotatingWord />
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
            href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            WhatsApp
          </a>
          <a
            href="#avulsos"
            className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
          >
            Avulsos
          </a>
        </div>
      </Container>
    </section>
  );
}
