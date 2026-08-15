import { INSTAGRAM, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Container } from "./container";

export function Contact() {
  return (
    <section id="contato" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Contato
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
          Contrata. A gente cria o grupo.
        </h2>
        <a
          href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-xl tracking-tight transition-opacity hover:opacity-80 sm:text-2xl"
        >
          {WHATSAPP_DISPLAY}
        </a>
        <p className="mt-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mr-4 text-sm text-muted transition-opacity hover:opacity-80"
          >
            WhatsApp
          </a>
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
