"use client";

import { CartProvider } from "./cart-context";
import { CartUi } from "./cart-ui";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartUi />
    </CartProvider>
  );
}
