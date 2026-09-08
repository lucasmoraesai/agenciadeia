import { DEPARTAMENTOS, PLANS, VERTENTES } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Container } from "./container";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ShineBorder } from "./magicui/shine-border";

export function Plans() {
  return (
    <section id="planos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Planos
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Horas ilimitadas, prazo de até 48h.
        </h2>
        <p className="mt-4 max-w-xl text-muted">1 demanda por vez.</p>
        <div className="mx-auto mt-14 grid max-w-xl gap-5">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-xl border p-7 ${
                plan.featured
                  ? "border-border-strong bg-surface"
                  : "border-border bg-background"
              }`}
            >
              {plan.featured && (
                <>
                  <span className="absolute -top-2.5 left-7 rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-background">
                    Tudo incluso
                  </span>
                  <ShineBorder
                    className="rounded-xl"
                    shineColor={["#a855f7", "#3b82f6", "#22d3ee"]}
                  />
                </>
              )}
              <h3 className="text-lg font-medium tracking-tight">{plan.name}</h3>
              {plan.featured ? (
                <AnimatedGradientText
                  className="mt-6 text-3xl font-semibold tracking-tight"
                  colorFrom="#c084fc"
                  colorTo="#60a5fa"
                >
                  {plan.price}
                </AnimatedGradientText>
              ) : (
                <p className="mt-6 text-3xl font-semibold tracking-tight">
                  {plan.price}
                </p>
              )}
              <p className="mt-1 text-sm text-subtle">
                {plan.period} · {plan.quota}
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs font-medium text-subtle">
                  {plan.featured ? "Todas as agências" : "Escolha 1 agência"}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {VERTENTES.map((vertente) => (
                    <li
                      key={vertente}
                      className={
                        "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs " +
                        (plan.featured
                          ? "border-border-strong text-foreground"
                          : "border-border text-muted")
                      }
                    >
                      {plan.featured && (
                        <span className="text-foreground">✓</span>
                      )}
                      {vertente}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 border-t border-border pt-6">
                <p className="text-xs font-medium text-subtle">
                  {plan.featured ? "Todos os departamentos" : "Escolha 1 departamento"}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {DEPARTAMENTOS.map((departamento) => (
                    <li
                      key={departamento}
                      className={
                        "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs " +
                        (plan.featured
                          ? "border-border-strong text-foreground"
                          : "border-border text-muted")
                      }
                    >
                      {plan.featured && (
                        <span className="text-foreground">✓</span>
                      )}
                      {departamento}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(
                  "Quero assinar o plano de R$ 6.000/mês da nohumans.",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Falar no WhatsApp
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
