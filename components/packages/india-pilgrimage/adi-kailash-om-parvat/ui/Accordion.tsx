import type { ReactNode } from "react";
import type { IconName } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { Icon } from "./Icon";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: IconName;
  badge?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Heading level for item titles, to keep the document outline correct. */
  headingLevel?: 3 | 4;
  /** Id prefix so items are deep-linkable, e.g. #faq-permits. */
  idPrefix: string;
  /** When set, opening one item closes the others (native exclusive <details>). */
  exclusiveName?: string;
  /** Index of an item open on first render. */
  defaultOpen?: number;
}

/**
 * Accessible accordion built on native <details>/<summary>.
 *
 * Why native: keyboard and screen-reader support are built in, it works with
 * JavaScript disabled, it needs no client bundle, and browser find-in-page
 * can open matching items. The open/close animation is progressive CSS
 * (::details-content + interpolate-size) — instant where unsupported.
 */
export function Accordion({ items, headingLevel = 3, idPrefix, exclusiveName, defaultOpen }: AccordionProps) {
  const Heading = headingLevel === 3 ? "h3" : "h4";

  return (
    <div className="akop-accordion">
      {items.map((item, i) => (
        <details
          key={item.id}
          id={`${idPrefix}-${item.id}`}
          className="akop-accordion__item"
          name={exclusiveName}
          open={defaultOpen === i ? true : undefined}
        >
          <summary className="akop-accordion__summary">
            {item.icon ? (
              <span className="akop-accordion__icon">
                <Icon name={item.icon} size={22} />
              </span>
            ) : null}
            <Heading className="akop-accordion__title">{item.title}</Heading>
            {item.badge ? <span className="akop-badge akop-badge--confirm">{item.badge}</span> : null}
            <span className="akop-accordion__chevron">
              <Icon name="chevron-down" size={20} />
            </span>
          </summary>
          <div className="akop-accordion__panel">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
