"use client";

/**
 * Accessible accordion (WAI-ARIA disclosure pattern).
 *
 * - Buttons with aria-expanded / aria-controls; panels are role="region".
 * - Collapsed panels stay in the DOM (good for SEO / FAQ schema parity) but
 *   are `inert` so they're skipped by keyboard and screen readers.
 * - Height animates via grid-template-rows 0fr → 1fr (no JS measuring).
 * - Arrow Up/Down, Home, End move between headers.
 */
import { useCallback, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Icon from "./Icon";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  /** Small inline badge after the title (e.g. "Confirm before booking"). */
  badge?: ReactNode;
  /** Leading icon element. */
  leading?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Heading level for item titles. */
  headingLevel?: 3 | 4;
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  headingLevel = 3,
  defaultOpen = [],
  allowMultiple = true,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen));
  const uid = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const H = `h${headingLevel}` as "h3" | "h4";

  const toggle = useCallback(
    (id: string) =>
      setOpen((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(id)) next.delete(id);
        else next.add(id);
        return next;
      }),
    [allowMultiple],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    const to =
      e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (to === null) return;
    e.preventDefault();
    buttons.current[to]?.focus();
  };

  return (
    <div className={`km-accordion${className ? ` ${className}` : ""}`}>
      {items.map((item, i) => {
        const isOpen = open.has(item.id);
        const btnId = `${uid}-btn-${item.id}`;
        const panelId = `${uid}-panel-${item.id}`;
        return (
          <div key={item.id} className={`km-accordion__item${isOpen ? " is-open" : ""}`}>
            <H className="km-accordion__heading">
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={btnId}
                type="button"
                className="km-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {item.leading ? <span className="km-accordion__leading">{item.leading}</span> : null}
                <span className="km-accordion__title">
                  {item.title}
                  {item.badge ? <span className="km-accordion__badge">{item.badge}</span> : null}
                </span>
                <Icon name="chevron" size={20} className="km-accordion__chevron" />
              </button>
            </H>
            <div id={panelId} role="region" aria-labelledby={btnId} className="km-accordion__panel" inert={!isOpen}>
              <div className="km-accordion__panel-inner">
                <div className="km-accordion__content">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
