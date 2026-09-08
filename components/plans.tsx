import { Check, MessageCircle } from "lucide-react";
import { DEPARTAMENTOS, PLANS } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Plano único
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Um preço. Tudo incluso.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as
          agências — você pede, a gente entrega em até 48h.
        </p>

        <Card className="mx-auto mt-14 max-w-3xl overflow-hidden border-border-strong bg-surface">
          <CardHeader className="flex flex-row items-start justify-between gap-6">
            <div className="flex flex-col gap-3">
              <Badge variant="outline" className="w-fit">
                Plano único
              </Badge>
              <CardTitle className="text-5xl font-semibold tracking-tight sm:text-6xl">
                {plan.price}
                <span className="ml-1 text-lg font-normal text-muted-foreground">
                  {plan.period}
                </span>
              </CardTitle>
              <CardDescription className="max-w-xs text-base">
                {plan.name} — sua agência por assinatura. Todas as agências e
                departamentos, horas ilimitadas.
              </CardDescription>
            </div>
            <div
              aria-hidden
              className="mt-2 hidden rotate-6 rounded border-2 border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle sm:block"
            >
              Tudo incluso
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <Separator />

            <div className="grid gap-10 md:grid-cols-2">
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
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Também incluso: {DEPARTAMENTOS.join(" · ")}.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 border-t sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              CS dedicado · Reunião semanal · PIX, Bitcoin ou Ethereum
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
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
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
