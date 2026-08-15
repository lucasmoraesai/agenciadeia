"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
  ready: boolean;
  drawerOpen: boolean;
  has: (id: DepartmentId) => boolean;
  toggle: (id: DepartmentId) => void;
  remove: (id: DepartmentId) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const STORAGE_KEY = "nohumans-cart";
const CartContext = createContext<CartContextValue | null>(null);

function isDepartmentId(value: string): value is DepartmentId {
  return AVULSOS.some((item) => item.id === value);
}

function readStoredIds(): DepartmentId[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (id): id is DepartmentId => typeof id === "string" && isDepartmentId(id),
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<DepartmentId[]>([]);
  const [ready, setReady] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setIds(readStoredIds());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, ready]);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const toggle = useCallback((id: DepartmentId) => {
    setIds((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }
      setDrawerOpen(true);
      return [...current, id];
    });
  }, []);

  const remove = useCallback((id: DepartmentId) => {
    setIds((current) => current.filter((item) => item !== id));
  }, []);

  const clear = useCallback(() => {
    setIds([]);
    setDrawerOpen(false);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const items = AVULSOS.filter((item) => ids.includes(item.id));
    return {
      ids,
      items,
      total: items.length * AVULSO_AMOUNT,
      ready,
      drawerOpen,
      has: (id) => ids.includes(id),
      toggle,
      remove,
      clear,
      openDrawer,
      closeDrawer,
    };
  }, [ids, ready, drawerOpen, toggle, remove, clear, openDrawer, closeDrawer]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
