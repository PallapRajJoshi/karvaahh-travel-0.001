"use client";

import { useEffect, useRef } from "react";
import type { LegalSection } from "@/lib/legal/types";
import { useActiveSection } from "./use-active-section";

interface LegalSidebarProps {
  sections: Pick<LegalSection, "id" | "number" | "title">[];
  heading?: string;
}

/**
 * Sticky table of contents (desktop / tablet). Generated from the same section
 * data as the content. The active item is marked with a bar, bolder weight and
 * aria-current — not colour alone.
 */
export function LegalSidebar({ sections, heading = "Legal information" }: LegalSidebarProps) {
  const active = useActiveSection(sections.map((s) => s.id));
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keep the active item visible inside the TOC's own scroll area (50-section documents).
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !active) return;
    const item = scroller.querySelector<HTMLElement>(`[data-toc-id="${active}"]`);
    if (!item) return;
    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.offsetHeight;
    if (itemTop < scroller.scrollTop) {
      scroller.scrollTop = itemTop - 8;
    } else if (itemBottom > scroller.scrollTop + scroller.clientHeight) {
      scroller.scrollTop = itemBottom - scroller.clientHeight + 8;
    }
  }, [active]);

  return (
    <nav className="legal-sidebar" aria-label="Table of contents">
      <p className="legal-sidebar__heading">{heading}</p>
      <div className="legal-sidebar__scroller" ref={scrollerRef}>
        <ol className="legal-sidebar__list">
          {sections.map((section) => {
            const isActive = section.id === active;
            return (
              <li key={section.id} data-toc-id={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`legal-sidebar__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="legal-sidebar__num">{section.number}</span>
                  <span className="legal-sidebar__text">{section.title}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
