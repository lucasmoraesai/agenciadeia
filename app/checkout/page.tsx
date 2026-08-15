import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutForm } from "@/components/checkout-form";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Pague ${SITE_NAME} com PIX, Bitcoin ou Ethereum.`,
};

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1120px] px-6 py-24 text-sm text-muted">
          Carregando checkout…
        </div>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
}
