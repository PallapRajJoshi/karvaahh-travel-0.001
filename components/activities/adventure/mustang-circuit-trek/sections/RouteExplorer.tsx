"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { ItineraryStage } from "../data/types";
import { Icon } from "../shared/Icon";

const TBC = "Confirmed at planning";
const zoneLabel = { lower: "Lower Mustang", upper: "Upper Mustang" } as const;

/**
 * Interactive route: a tab list of stages + one visible panel.
 * - All panels are server-rendered (inactive ones `hidden`) so content is indexable.
 * - Tabs carry the stage id, so "#stage-kagbeni" links (from destination cards)
 *   scroll here and select that stage.
 * - Arrow keys / Home / End move between stages (WAI-ARIA tabs pattern).
 */
export default function RouteExplorer({ stages }: { stages: ItineraryStage[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const root = useRef<HTMLDivElement>(null);

  const select = useCallback(
    (i: number, focus = false) => {
      const next = (i + stages.length) % stages.length;
      setIndex(next);
      if (focus) tabs.current[next]?.focus();
    },
    [stages.length],
  );

  // Deep links from destination cards: #stage-xyz
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      const i = stages.findIndex((s) => s.id === id);
      if (i < 0) return;
      setIndex(i);
      // The browser jumps to the tab; bring the whole explorer into view instead.
      requestAnimationFrame(() => root.current?.scrollIntoView({ block: "start" }));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [stages]);

  // Keep the active tab visible in the horizontal (mobile) list without moving the page.
  useEffect(() => {
    const tab = tabs.current[index];
    const list = tab?.parentElement?.parentElement;
    if (!tab || !list || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - list.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [index]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const map: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: stages.length - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  const progress = stages.length > 1 ? index / (stages.length - 1) : 1;

  return (
    <div ref={root} className="mc-rx" style={{ "--mc-rx-progress": progress } as React.CSSProperties}>
      <div className="mc-rx__rail">
        <ol className="mc-rx__tabs" role="tablist" aria-label="Route stages" aria-orientation="vertical">
          {stages.map((s, i) => {
            const active = i === index;
            return (
              <li key={s.id} role="presentation" className={`mc-rx__tab-item${i < index ? " is-past" : ""}`}>
                <button
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  id={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`${s.id}-panel`}
                  tabIndex={active ? 0 : -1}
                  className={`mc-rx__tab mc-rx__tab--${s.zone}${active ? " is-active" : ""}`}
                  onClick={() => select(i)}
                  onKeyDown={onKeyDown}
                >
                  <span className="mc-rx__dot" aria-hidden="true" />
                  <span className="mc-rx__tab-label">{s.label}</span>
                  <span className="mc-rx__tab-place">{s.place}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <p className="mc-rx__legend" aria-hidden="true">
          <span className="mc-rx__key mc-rx__key--lower">Lower Mustang</span>
          <span className="mc-rx__key mc-rx__key--upper">Upper Mustang · permit area</span>
        </p>
      </div>

      <div className="mc-rx__stage">
        {stages.map((s, i) => (
          <div
            key={s.id}
            id={`${s.id}-panel`}
            role="tabpanel"
            aria-labelledby={s.id}
            hidden={i !== index}
            className="mc-rx__panel"
          >
            <div className="mc-rx__media mc-frame">
              <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 58vw, 92vw" />
              <span className={`mc-rx__zone mc-rx__zone--${s.zone}`}>{zoneLabel[s.zone]}</span>
            </div>

            <div className="mc-rx__copy">
              <p className="mc-rx__count">
                {s.label} <span aria-hidden="true">·</span> {i + 1} of {stages.length}
              </p>
              <h3 className="mc-rx__place">{s.place}</h3>
              <p className="mc-rx__summary">{s.summary}</p>

              <dl className="mc-rx__facts">
                <div>
                  <dt>
                    <Icon name="route" /> Travel
                  </dt>
                  <dd className={s.travelMode ? undefined : "is-tbc"}>{s.travelMode ?? TBC}</dd>
                </div>
                <div>
                  <dt>
                    <Icon name="pin" /> Distance
                  </dt>
                  <dd className={s.distance ? undefined : "is-tbc"}>{s.distance ?? TBC}</dd>
                </div>
                <div>
                  <dt>
                    <Icon name="clock" /> Duration
                  </dt>
                  <dd className={s.duration ? undefined : "is-tbc"}>{s.duration ?? TBC}</dd>
                </div>
                <div>
                  <dt>
                    <Icon name="home" /> Stay
                  </dt>
                  <dd className={s.accommodation ? undefined : "is-tbc"}>{s.accommodation ?? TBC}</dd>
                </div>
              </dl>

              <div className="mc-rx__nav">
                <button type="button" className="mc-rx__step" onClick={() => select(i - 1)} disabled={i === 0}>
                  <Icon name="chevron-left" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  className="mc-rx__step"
                  onClick={() => select(i + 1)}
                  disabled={i === stages.length - 1}
                >
                  <span>Next stage</span>
                  <Icon name="chevron-right" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
