"use client";

/**
 * Accessible accordion (WAI-ARIA disclosure pattern).
 * - Buttons carry aria-expanded / aria-controls; panels are role="region".
 * - Collapsed panels are `inert` so their content is skipped by keyboard and AT,
 *   while still being in the HTML for SEO and FAQ structured data parity.
 * - Height animates with the grid-template-rows 0fr → 1fr technique (no JS measuring).
 */
import { useId, useState } from "react";
import type { AccordionEntry } from "../types";
import Icon from "./Icon";
import "../styles/accordion.css";

interface Props {
  items: AccordionEntry[];
  /** Allow several panels open at once. */
  multiple?: boolean;
  defaultOpen?: string[];
  headingLevel?: 3 | 4;
  numbered?: boolean;
}

export default function Accordion({ items, multiple = false, defaultOpen = [], headingLevel = 3, numbered = false }: Props) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen));
  const uid = useId();
  const H = headingLevel === 3 ? "h3" : "h4";

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className={`ebc-accordion${numbered ? " ebc-accordion--numbered" : ""}`}>
      {items.map((item, i) => {
        const isOpen = open.has(item.id);
        const btnId = `${uid}-btn-${item.id}`;
        const panelId = `${uid}-panel-${item.id}`;
        return (
          <div key={item.id} className={`ebc-accordion__item${isOpen ? " is-open" : ""}`} data-reveal="" style={{ ["--i" as string]: Math.min(i, 6) }}>
            <H className="ebc-accordion__heading">
              <button
                type="button"
                id={btnId}
                className="ebc-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                {numbered && <span className="ebc-accordion__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>}
                <span className="ebc-accordion__title">{item.title}</span>
                {item.verify && <span className="ebc-badge ebc-badge--verify ebc-accordion__verify">Verify before travel</span>}
                <span className="ebc-accordion__icon" aria-hidden="true">
                  <Icon name="plus" />
                </span>
              </button>
            </H>
            <div id={panelId} role="region" aria-labelledby={btnId} className="ebc-accordion__panel" inert={!isOpen}>
              <div className="ebc-accordion__inner">
                {item.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
