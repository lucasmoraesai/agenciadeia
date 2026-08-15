import { Container } from "./container";
import { Logo } from "./logo";

const FIRINGS = [
  "Demita sua agência de marketing.",
  "Demita seu SDR ruim.",
  "Demita seu programador lento.",
];

export function Manifesto() {
  return (
    <section className="border-b border-border py-28 sm:py-32">
      <Container>
        <p className="tracking-tighter-display max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[64px]">
          Chega de contratar e demitir humans.
        </p>
        <p className="tracking-tighter-display mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-muted sm:text-5xl lg:text-[64px]">
          Chegou a sua agência de IA.
        </p>
        <div className="mt-10">
          <Logo markClassName="h-6 w-6" />
        </div>
      </Container>
    </section>
  );
}

export function Firings() {
  return (
    <section className="border-b border-border py-28 sm:py-32">
      <Container>
        <p className="tracking-tighter-display max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[64px]">
          Chega de prazos infinitos.
        </p>
        <ul className="mt-12 space-y-5">
          {FIRINGS.map((line) => (
            <li
              key={line}
              className="tracking-tighter-display max-w-4xl text-3xl font-semibold leading-[1.1] text-muted sm:text-4xl"
            >
              {line}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
