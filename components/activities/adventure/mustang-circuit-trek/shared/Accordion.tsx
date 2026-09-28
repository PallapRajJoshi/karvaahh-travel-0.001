"use client";

import { useId, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import "./accordion.css";

export interface AccordionItem {
  id: string;
  title: string;
  /** Small label next to the title, e.g. "Upper Mustang". */
  tag?: string;
  /** Server-rendered content passed straight through. */
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Open several panels at once (default true — better for scanning). */
  multiple?: boolean;
  defaultOpen?: string[];
  /** Numbered badges before titles. */
  numbered?: boolean;
}

/**
 * WAI-ARIA accordion: button[aria-expanded][aria-controls] inside an h3,
 * panel role="region". Closed panels stay in the DOM (good for search engines)
 * but are `inert`, so they can't be tabbed into or read by screen readers.
 */
export default function Accordion({ items, multiple = true, defaultOpen = [], numbered = false }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen));
  const uid = useId();

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="mc-acc">
      {items.map((item, i) => {
        const isOpen = open.has(item.id);
        const btnId = `${uid}-btn-${item.id}`;
        const panelId = `${uid}-panel-${item.id}`;
        return (
          <div key={item.id} className={`mc-acc__item${isOpen ? " is-open" : ""}`}>
            <h3 className="mc-acc__heading">
              <button
                id={btnId}
                type="button"
                className="mc-acc__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                {numbered ? (
                  <span className="mc-acc__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : null}
                <span className="mc-acc__title">{item.title}</span>
                {item.tag ? <span className="mc-acc__tag">{item.tag}</span> : null}
                <Icon name="chevron" className="mc-acc__icon" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="mc-acc__panel" inert={!isOpen}>
              <div className="mc-acc__inner">
                <div className="mc-acc__body">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
