import { Check, MessageCircle } from "lucide-react";
import { DEPARTAMENTOS, PLANS } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "./container";

const AGENCIAS = [
  { name: "Automação", desc: "Fluxos e robôs que rodam sozinhos, ponta a ponta." },
  { name: "IA", desc: "Agentes que trabalham por você, 24/7." },
  { name: "Marketing", desc: "Campanhas e conteúdo no piloto automático." },
  { name: "Software", desc: "Construído sob medida, em dias." },
];

const COMO_FUNCIONA = [
  "Você pede no grupo, 1 demanda por vez",
  "Entrega em até 48h",
  "Horas ilimitadas",
  "Setup e kickoff gratuitos",
  "Pausa ou cancela quando quiser",
];

export function Plans() {
  const plan = PLANS[0];

  return (
    <section id="planos" className="border-b border-border py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">
            Plano único
          </Badge>
          <h2 className="tracking-tighter-display max-w-2xl text-3xl font-semibold sm:text-4xl">
            Um preço. Tudo incluso.
          </h2>
          <p className="max-w-xl text-muted">
            Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as
            agências — você pede, a gente entrega em até 48h.
          </p>
        </div>

        <Card className="mx-auto mt-14 max-w-4xl overflow-hidden border-border-strong bg-surface">
          <CardContent className="grid p-0 md:grid-cols-[1fr_1.2fr]">
            {/* Coluna de decisão: preço + garantias + CTA */}
            <div className="flex flex-col justify-between gap-10 border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="flex flex-col gap-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  Assinatura mensal
                </p>
                <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  {plan.price}
                  <span className="ml-1 text-xl font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {plan.name} — sua agência por assinatura. Todas as agências e
                  departamentos, horas ilimitadas.
                </p>
                <Separator />
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>Setup e kickoff gratuitos</li>
                  <li>Sem fidelidade — pausa ou cancela quando quiser</li>
                  <li>PIX, Bitcoin ou Ethereum</li>
                </ul>
              </div>

              <Button asChild size="lg" className="w-full">
                <a
                  href={whatsappHref(
                    "Quero assinar o plano de R$ 6.000/mês da nohumans.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle data-icon="inline-start" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Coluna do que está incluso */}
            <div className="flex flex-col gap-8 p-8">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  As 4 agências
                </p>
                <ul className="flex flex-col gap-4">
                  {AGENCIAS.map((agencia) => (
                    <li key={agencia.name} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      <div>
                        <p className="font-medium tracking-tight">
                          {agencia.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {agencia.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                  Como funciona
                </p>
                <ul className="flex flex-col gap-4">
                  {COMO_FUNCIONA.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <p className="text-xs leading-relaxed text-muted-foreground">
                Também incluso: {DEPARTAMENTOS.join(" · ")}.
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
