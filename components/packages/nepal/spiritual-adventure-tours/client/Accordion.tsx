"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import type { AccordionEntry } from "../types";
import { Icon } from "../ui/Icon";

interface AccordionProps {
  items: AccordionEntry[];
  /** Unique per accordion on the page. Used to build ids for aria-controls. */
  idPrefix: string;
  /** Ids open on first render. */
  defaultOpen?: string[];
  /** When false, opening one panel closes the others. */
  allowMultiple?: boolean;
  /** Heading level of each trigger, to keep the document outline correct. */
  headingLevel?: 3 | 4;
  showIcons?: boolean;
}

/**
 * WAI-ARIA accordion pattern:
 *  - each trigger is a <button> inside a heading, with aria-expanded + aria-controls
 *  - panels are role="region" labelled by their trigger
 *  - ↑/↓ move between triggers, Home/End jump to the first/last
 *
 * The open/close animation is a CSS grid-rows transition (0fr → 1fr), so no
 * height measuring in JS. Closed panels are `visibility: hidden` once the
 * transition ends, which removes them from the tab order and the
 * accessibility tree. Panel content stays in the server HTML for SEO.
 */
export function Accordion({
  items,
  idPrefix,
  defaultOpen = [],
  allowMultiple = true,
  headingLevel = 3,
  showIcons = false,
}: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(defaultOpen));
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = useCallback(
    (id: string) => {
      setOpen((prev) => {
        const next = allowMultiple ? new Set(prev) : new Set<string>();
        if (prev.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    },
    [allowMultiple],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const go = (i: number) => {
      e.preventDefault();
      triggers.current[i]?.focus();
    };
    if (e.key === "ArrowDown") go(index === last ? 0 : index + 1);
    else if (e.key === "ArrowUp") go(index === 0 ? last : index - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(last);
  };

  const Heading = headingLevel === 3 ? "h3" : "h4";

  return (
    <div className="nsa-accordion">
      {items.map((item, index) => {
        const isOpen = open.has(item.id);
        const triggerId = `${idPrefix}-trigger-${item.id}`;
        const panelId = `${idPrefix}-panel-${item.id}`;

        return (
          <div key={item.id} className={`nsa-accordion__item${isOpen ? " is-open" : ""}`}>
            <Heading className="nsa-accordion__heading">
              <button
                ref={(el) => {
                  triggers.current[index] = el;
                }}
                id={triggerId}
                type="button"
                className="nsa-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
              >
                {showIcons && item.icon ? (
                  <span className="nsa-accordion__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                ) : null}
                <span className="nsa-accordion__title">{item.title}</span>
                <span className="nsa-accordion__toggle" aria-hidden="true">
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </Heading>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="nsa-accordion__panel"
            >
              <div className="nsa-accordion__panel-inner">
                <div className="nsa-accordion__content">
                  {item.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {item.list?.length ? (
                    <ul>
                      {item.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
