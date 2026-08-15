import { PRACTICES } from "@/lib/config";
import { Container } from "./container";

export function Practices() {
  return (
    <section id="praticas" className="border-t border-border py-24">
      <Container>
        <p className="kicker text-copper">O que fazemos</p>
        <h2 className="display mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
          Cinco frentes. Um sistema.
        </h2>
        <p className="mt-5 max-w-xl text-muted">
          Cada peça alimenta a próxima. Conectadas, multiplicam. Separadas,
          diluem.
        </p>
        <ol className="mt-16 divide-y divide-border border-y border-border">
          {PRACTICES.map((practice, index) => (
            <li
              key={practice.id}
              className="grid gap-3 py-10 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:items-start sm:gap-8"
            >
              <span className="kicker pt-1 text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {practice.title}
                </h3>
                <p className="mt-2 text-muted">{practice.lead}</p>
              </div>
              <p className="text-[15px] leading-relaxed text-subtle">
                {practice.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
