import { SITE_NAME, WHATSAPP_DISPLAY } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-subtle">{SITE_NAME}</p>
        <a
          href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] text-subtle transition-opacity hover:opacity-80"
        >
          {WHATSAPP_DISPLAY} · agenciadeia.tech · {new Date().getFullYear()}
        </a>
      </Container>
    </footer>
  );
}
