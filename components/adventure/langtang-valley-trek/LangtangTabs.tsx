"use client";

import { Children, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

interface Props {
  labels: string[];
  children: ReactNode;
  ariaLabel: string;
}

/**
 * Accessible tabs (WAI-ARIA pattern). Panels are server-rendered children, so
 * all text is in the HTML. Below 760px CSS hides the tablist and shows every
 * panel stacked.
 */
export default function LangtangTabs({ labels, children, ariaLabel }: Props) {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panels = Children.toArray(children);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = labels.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="lt-tabs">
      <div className="lt-tabs__list" role="tablist" aria-label={ariaLabel} aria-orientation="vertical">
        {labels.map((label, i) => (
          <button
            key={label}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`${base}-tab-${i}`}
            aria-controls={`${base}-panel-${i}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            className="lt-tabs__tab"
            onClick={() => setActive(i)}
            onKeyDown={onKey}
          >
            <span className="lt-tabs__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="lt-tabs__label">{label}</span>
          </button>
        ))}
      </div>
      <div className="lt-tabs__panels">
        {panels.map((panel, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`${base}-panel-${i}`}
            aria-labelledby={`${base}-tab-${i}`}
            className={`lt-tabs__panel ${active === i ? "is-active" : ""}`}
            tabIndex={0}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
