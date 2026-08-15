import { SITE_NAME } from "@/lib/config";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#praticas", label: "Frentes" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/" className="fade-hover flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span className="grid h-4 w-4 grid-cols-2 gap-px" aria-hidden="true">
            <span className="bg-foreground" />
            <span className="bg-copper" />
            <span className="bg-copper" />
            <span className="bg-foreground" />
          </span>
          {SITE_NAME}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="kicker text-muted fade-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="kicker rounded-full border border-border-strong px-4 py-2 text-foreground fade-hover"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-copper" />
          Vamos falar
        </a>
      </div>
    </header>
  );
}
