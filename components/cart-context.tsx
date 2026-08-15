"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AVULSOS, AVULSO_AMOUNT } from "@/lib/config";

export type DepartmentId = (typeof AVULSOS)[number]["id"];

type CartItem = (typeof AVULSOS)[number];

type CartContextValue = {
  ids: DepartmentId[];
  items: CartItem[];
  total: number;
  has: (id: DepartmentId) => boolean;
  toggle: (id: DepartmentId) => void;
  remove: (id: DepartmentId) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<DepartmentId[]>([]);

  const toggle = useCallback((id: DepartmentId) => {
    setIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

  const remove = useCallback((id: DepartmentId) => {
    setIds((current) => current.filter((item) => item !== id));
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const value = useMemo<CartContextValue>(() => {
    const items = AVULSOS.filter((item) => ids.includes(item.id));
    return {
      ids,
      items,
      total: items.length * AVULSO_AMOUNT,
      has: (id) => ids.includes(id),
      toggle,
      remove,
      clear,
    };
  }, [ids, toggle, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
