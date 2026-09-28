"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Season } from "../data/types";

/** WAI-ARIA tabs: arrow keys, Home/End, roving tabindex. */
export default function SeasonTabs({ seasons }: { seasons: Season[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();

  const focusTab = (i: number) => {
    const next = (i + seasons.length) % seasons.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const map: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: seasons.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      focusTab(map[e.key]);
    }
  };

  return (
    <div className="cd-seasons">
      <div role="tablist" aria-label="Seasons" className="cd-seasons__tabs">
        {seasons.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${uid}-tab-${s.id}`}
            aria-selected={i === index}
            aria-controls={`${uid}-panel-${s.id}`}
            tabIndex={i === index ? 0 : -1}
            className={`cd-seasons__tab cd-seasons__tab--${s.tone}`}
            onClick={() => setIndex(i)}
            onKeyDown={onKey}
          >
            <span className="cd-seasons__tab-label">{s.label}</span>
            <span className="cd-seasons__tab-window">{s.window}</span>
          </button>
        ))}
      </div>
      {seasons.map((s, i) => (
        <div
          key={s.id}
          role="tabpanel"
          id={`${uid}-panel-${s.id}`}
          aria-labelledby={`${uid}-tab-${s.id}`}
          hidden={i !== index}
          tabIndex={0}
          className={`cd-seasons__panel cd-seasons__panel--${s.tone}`}
        >
          <h3 className="cd-seasons__title">
            {s.label} <span>{s.window}</span>
          </h3>
          <p>{s.summary}</p>
          <ul className="cd-seasons__points">
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
