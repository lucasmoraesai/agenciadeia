import { SITE_NAME } from "@/lib/config";

const LINKS = [
  { href: "#praticas", label: "Práticas" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/40 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="fade-hover display text-[1.05rem] tracking-tight text-paper">
          {SITE_NAME}
        </a>
        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono text-[11px] uppercase tracking-[0.18em] text-muted fade-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
