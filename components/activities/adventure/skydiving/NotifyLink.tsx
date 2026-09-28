"use client";

import type { ReactNode } from "react";
import { NOTIFY_EVENT, type NotifyInterest } from "./data/skydivingData";

interface NotifyLinkProps {
  children: ReactNode;
  className?: string;
  /** Preselects this interest in the notification form. */
  interest?: NotifyInterest;
  target?: string;
}

/** Plain anchor (works without JS) that also preselects the form's interest. */
export default function NotifyLink({ children, className, interest, target = "notify" }: NotifyLinkProps) {
  return (
    <a
      href={`#${target}`}
      className={className}
      onClick={() => {
        if (interest) window.dispatchEvent(new CustomEvent<NotifyInterest>(NOTIFY_EVENT, { detail: interest }));
      }}
    >
      {children}
    </a>
  );
}
