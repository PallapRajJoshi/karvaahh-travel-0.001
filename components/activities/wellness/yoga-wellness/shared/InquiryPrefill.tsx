"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Prefill = {
  destination?: string;
  experience?: string;
  purpose?: string;
  /** Bumps on every request so the form re-applies identical values. */
  nonce: number;
};

type Ctx = {
  prefill: Prefill;
  requestPrefill: (p: Omit<Prefill, "nonce">) => void;
};

const PrefillContext = createContext<Ctx | null>(null);

export function InquiryPrefillProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefill] = useState<Prefill>({ nonce: 0 });

  const requestPrefill = useCallback((p: Omit<Prefill, "nonce">) => {
    setPrefill((prev) => ({ ...p, nonce: prev.nonce + 1 }));
  }, []);

  const value = useMemo(() => ({ prefill, requestPrefill }), [prefill, requestPrefill]);
  return <PrefillContext.Provider value={value}>{children}</PrefillContext.Provider>;
}

export function useInquiryPrefill(): Ctx {
  const ctx = useContext(PrefillContext);
  if (!ctx) throw new Error("useInquiryPrefill must be used inside InquiryPrefillProvider");
  return ctx;
}
