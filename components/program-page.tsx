import { Container } from "./container";
import { whatsappHref } from "@/lib/whatsapp";

type Step = {
  n: string;
  title: string;
  body: string;
};

type ProgramPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: Step[];
  gains: string[];
  whatsappMessage: string;
};

export function ProgramPage({
  eyebrow,
  title,
  intro,
  steps,
  gains,
  whatsappMessage,
}: ProgramPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
        <Container className="relative py-24 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            {eyebrow}
          </p>
          <h1 className="rise tracking-tighter-display mt-3 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl">
            {title}
          </h1>
          <p className="rise mt-6 max-w-2xl text-lg text-muted">{intro}</p>
          <div className="rise mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-border px-4 py-1.5 text-sm text-muted">
              Sem treinamento
            </span>
            <span className="rounded-full border border-border px-4 py-1.5 text-sm text-muted">
              Mediante aprovação da No Humans
            </span>
          </div>
          <div
            className="rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "80ms" }}
          >
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Quero participar
            </a>
            <a
              href="#como-funciona"
              className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              Como funciona
            </a>
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-b border-border py-24">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            Como funciona
          </p>
          <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Como funciona o programa.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Sem treinamento e sem burocracia: você entra mediante aprovação da
            No Humans.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="font-mono text-[11px] text-subtle">
                  {step.n}
                </span>
                <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* O que você ganha */}
      <section className="border-b border-border py-24">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            O que você ganha
          </p>
          <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            O que você ganha com a No Humans.
          </h2>
          <ul className="mt-12 max-w-2xl space-y-4">
            {gains.map((gain) => (
              <li key={gain} className="flex items-start gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{gain}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Aprovação */}
      <section className="py-24">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
            <h2 className="tracking-tighter-display max-w-2xl text-3xl font-semibold sm:text-4xl">
              Sem treinamento. Mediante aprovação da No Humans.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              A No Humans não oferece treinamento. A entrada em qualquer programa
              é mediante aprovação: a gente analisa o seu perfil, mercado ou
              audiência e decide junto. Se bater, você entra; se não bater, a
              gente te fala com transparência.
            </p>
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Quero participar
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
