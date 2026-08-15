import { SITE_NAME } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";

const LINKS = [
  { href: "#como", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#avulsos", label: "Avulsos" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-6">
        <a href="/" className="text-sm font-medium tracking-tight">
          {SITE_NAME}
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappHref("Quero automatizar a empresa com a nohumans.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
