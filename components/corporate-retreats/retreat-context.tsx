"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/** Everything a visitor can pick anywhere on the page. The inquiry form reads the same state. */
export interface Draft {
  destination: string;
  retreatType: string;
  participants: string;
  duration: string;
  dates: string;
  accommodation: string;
  transportation: string;
  mealPlan: string;
  budget: string;
  accessibility: string;
  dietary: string;
  activities: string[];
}

export const emptyDraft: Draft = {
  destination: "", retreatType: "", participants: "", duration: "", dates: "", accommodation: "",
  transportation: "", mealPlan: "", budget: "", accessibility: "", dietary: "", activities: [],
};

interface Ctx {
  draft: Draft;
  setField: <K extends keyof Draft>(key: K, value: Draft[K]) => void;
  toggleActivity: (value: string) => void;
  /** Apply optional selections, then smooth-scroll to a section and move focus there. */
  goTo: (sectionId: string, patch?: Partial<Draft>) => void;
}

const RetreatCtx = createContext<Ctx | null>(null);

export function RetreatProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const reduce = useReducedMotion();

  const setField = useCallback<Ctx["setField"]>((key, value) => setDraft((d) => ({ ...d, [key]: value })), []);
  const toggleActivity = useCallback((value: string) => {
    setDraft((d) => ({
      ...d,
      activities: d.activities.includes(value) ? d.activities.filter((a) => a !== value) : [...d.activities, value],
    }));
  }, []);

  const goTo = useCallback<Ctx["goTo"]>(
    (sectionId, patch) => {
      if (patch) setDraft((d) => ({ ...d, ...patch }));
      const el = document.getElementById(sectionId);
      if (!el) return;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      // Keyboard and screen-reader users land in the section, not back at the button.
      window.setTimeout(() => el.focus({ preventScroll: true }), reduce ? 0 : 500);
    },
    [reduce],
  );

  const value = useMemo(() => ({ draft, setField, toggleActivity, goTo }), [draft, setField, toggleActivity, goTo]);
  return <RetreatCtx.Provider value={value}>{children}</RetreatCtx.Provider>;
}

export function useRetreat() {
  const ctx = useContext(RetreatCtx);
  if (!ctx) throw new Error("useRetreat must be used inside <RetreatProvider>");
  return ctx;
}
