import { Check, MessageCircle } from "lucide-react";
import { DEPARTAMENTOS, PLANS, VERTENTES } from "@/lib/config";
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

export function Plans() {
  const plan = PLANS[0];

  return (
    <section id="planos" className="border-b border-border py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Plano
        </p>
        <h2 className="tracking-tighter-display mt-3 text-3xl font-semibold sm:text-4xl">
          Um plano. Tudo incluso.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          R$ 6.000/mês. Horas ilimitadas, 1 demanda por vez, prazo de até 48h.
        </p>

        <Card className="relative mx-auto mt-14 max-w-lg overflow-visible border-border-strong bg-surface">
          <CardHeader className="flex flex-col items-center text-center">
            <Badge className="absolute -top-3">Tudo incluso</Badge>
            <CardTitle className="text-2xl tracking-tight">
              {plan.name}
            </CardTitle>
            <CardDescription>
              Uma assinatura. Todas as agências e departamentos.
            </CardDescription>
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="text-5xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {plan.period}
              </span>
            </p>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <Separator />

            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Todas as agências</p>
              <div className="flex flex-wrap gap-2">
                {VERTENTES.map((vertente) => (
                  <Badge key={vertente} variant="outline">
                    <Check />
                    {vertente}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Todos os departamentos</p>
              <div className="flex flex-wrap gap-2">
                {DEPARTAMENTOS.map((departamento) => (
                  <Badge key={departamento} variant="outline">
                    <Check />
                    {departamento}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <ul className="flex flex-col gap-3">
              {plan.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button asChild className="w-full" size="lg">
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
            <p className="mt-3 text-xs text-muted-foreground">
              Sem fidelidade. Pausa ou cancela quando quiser.
            </p>
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
