import { Container } from "./container";
import { Logo } from "./logo";

export function Manifesto() {
  return (
    <section className="py-28 sm:py-32">
      <Container>
        <p className="tracking-tighter-display max-w-4xl text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
          Chega de contratar e demitir humans.
        </p>
        <p className="tracking-tighter-display mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] text-muted sm:text-4xl lg:text-5xl">
          Chegou a sua agência de IA.
        </p>
        <div className="mt-10">
          <Logo markClassName="h-6 w-6" />
        </div>
      </Container>
    </section>
  );
}
