"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import type { ArtRef, ResolvedImage } from "@/lib/about/types";
import { AboutIcon } from "../shared/AboutIcon";
import { Pic } from "../shared/Pic";

export interface TabRegion {
  id: string;
  label: string;
  tagline: string;
  places: string[];
  andMore: boolean;
  ctaLabel: string;
  ctaHref: string;
  image: ResolvedImage | null;
  art: ArtRef;
}

interface DestinationTabsProps {
  regions: TabRegion[];
}

/**
 * Accessible tabs (WAI-ARIA tabs pattern, automatic activation):
 * Arrow keys / Home / End move between tabs, only the active tab is in the tab order.
 * All panels stay in the DOM (inactive ones `hidden`) so every place name is in the HTML.
 * Photos are stacked and crossfaded by opacity – no layout shift on switch.
 */
export function DestinationTabs({ regions }: DestinationTabsProps) {
  const [activeId, setActiveId] = useState(regions[0]?.id ?? "");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeIndex = Math.max(0, regions.findIndex((r) => r.id === activeId));

  function focusTab(index: number) {
    const next = regions[(index + regions.length) % regions.length];
    setActiveId(next.id);
    tabRefs.current[next.id]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(regions.length - 1);
        break;
    }
  }

  return (
    <div className="ab-tabs" data-reveal="">
      <div className="ab-tabs__list" role="tablist" aria-label="Destination regions" onKeyDown={onKeyDown}>
        {regions.map((region) => {
          const selected = region.id === activeId;
          return (
            <button
              key={region.id}
              ref={(el) => {
                tabRefs.current[region.id] = el;
              }}
              type="button"
              role="tab"
              id={`ab-tab-${region.id}`}
              aria-selected={selected}
              aria-controls={`ab-panel-${region.id}`}
              tabIndex={selected ? 0 : -1}
              className="ab-tabs__tab"
              onClick={() => setActiveId(region.id)}
            >
              {region.label}
            </button>
          );
        })}
      </div>

      <div className="ab-tabs__stage">
        <div className="ab-tabs__photos ab-frame" aria-hidden="true">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`ab-tabs__photo${region.id === activeId ? " is-active" : ""}`}
            >
              <Pic image={region.image} art={region.art} sizes="(min-width: 900px) 46vw, 92vw" decorative />
            </div>
          ))}
        </div>

        <div className="ab-tabs__panels">
          {regions.map((region) => (
            <div
              key={region.id}
              role="tabpanel"
              id={`ab-panel-${region.id}`}
              aria-labelledby={`ab-tab-${region.id}`}
              hidden={region.id !== activeId}
              tabIndex={0}
              className="ab-tabs__panel"
            >
              <h3 className="ab-tabs__region">{region.label}</h3>
              <p className="ab-tabs__tagline">{region.tagline}</p>
              <ul className="ab-tabs__places">
                {region.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
                {region.andMore ? <li className="ab-tabs__more">and more</li> : null}
              </ul>
              <Link href={region.ctaHref} className="ab-tabs__cta">
                {region.ctaLabel}
                <AboutIcon name="arrow" className="ab-tabs__arrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
