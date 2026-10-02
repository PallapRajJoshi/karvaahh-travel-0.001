"use client";

import type { ReactNode } from "react";
import { INQUIRY_ANCHOR } from "../config";

export type Prefill = {
  destination?: string;
  cruiseType?: string;
  purpose?: string;
};

export const PREFILL_EVENT = "cruise:prefill";

type Props = {
  prefill?: Prefill;
  className?: string;
  children: ReactNode;
};

/** Anchor to the inquiry form that also preselects form fields. Works without JS as a plain #anchor. */
export default function PrefillLink({ prefill, className, children }: Props) {
  return (
    <a
      href={`#${INQUIRY_ANCHOR}`}
      className={className}
      onClick={() => {
        if (prefill) {
          window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: prefill }));
        }
      }}
    >
      {children}
    </a>
  );
}
