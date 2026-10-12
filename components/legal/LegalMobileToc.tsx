"use client";

import { useId, useRef, useState } from "react";
import type { LegalSection } from "@/lib/legal/types";
import { LegalIcon } from "./LegalIcon";
import { useActiveSection } from "./use-active-section";

interface LegalMobileTocProps {
  sections: Pick<LegalSection, "id" | "number" | "title">[];
}

/**
 * Sticky collapsible "On this page" control for small screens.
 * Disclosure pattern: button with aria-expanded / aria-controls, Escape closes
 * and returns focus to the button, and links are unreachable while collapsed.
 */
export function LegalMobileToc({ sections }: LegalMobileTocProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sections.map((s) => s.id));
  const current = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <div
      className={`legal-mtoc${open ? " is-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="legal-mtoc__button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="legal-mtoc__label">On this page</span>
        {current ? (
          <span className="legal-mtoc__current">
            <span className="legal-mtoc__current-num">{current.number}</span>
            <span className="legal-mtoc__current-text">{current.title}</span>
          </span>
        ) : null}
        <LegalIcon name="chevron" size={18} className="legal-mtoc__chevron" />
      </button>

      <div id={panelId} className="legal-mtoc__panel" role="region" aria-label="Table of contents">
        <div className="legal-mtoc__panel-inner">
          <ol className="legal-mtoc__list">
            {sections.map((section) => {
              const isActive = section.id === active;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`legal-mtoc__link${isActive ? " is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="legal-mtoc__num">{section.number}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
