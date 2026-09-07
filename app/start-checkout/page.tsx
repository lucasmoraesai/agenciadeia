import type { Metadata } from "next";
import { Suspense } from "react";
import { StartCheckout } from "@/components/start-checkout";

export const metadata: Metadata = {
  title: "Iniciar checkout",
  description:
    "Revise o seu plano e assine agora, gere um orçamento ou agende uma reunião com a No Humans.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StartCheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1120px] px-6 py-24 text-sm text-muted">
          Carregando…
        </div>
      }
    >
      <StartCheckout />
    </Suspense>
  );
}
