import type { FaqItem } from "@/lib/seo";
import { Container } from "./container";

/**
 * Seção de FAQ visível — usa <details>/<summary> nativos (sem JS):
 * crawlável pelos buscadores, acessível e renderizada no HTML estático.
 */
export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Perguntas frequentes",
  subtitle,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="faq" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          {eyebrow}
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-muted">{subtitle}</p>
        )}
        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight">
                {item.q}
                <span
                  aria-hidden
                  className="shrink-0 text-subtle transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
