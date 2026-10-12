"use client";

import { ArrowRight } from "lucide-react";
import { expeditionsWithStyle } from "@/data/antarctica/expeditions";
import { expeditionStyles } from "@/data/antarctica/styles";
import type { ExpeditionStyle } from "@/data/antarctica/types";
import { scrollToId, setPolarFilter, usePolarFilters } from "@/lib/antarctica/explorer";
import PolarMedia from "./PolarMedia";

const SHOWN: ExpeditionStyle[] = ["expedition-cruise", "luxury", "adventure", "photography", "wildlife", "honeymoon", "family", "educational", "small-group", "private"];

/** "Antarctica by travel style": each card filters the expedition grid to that style. */
export default function AntarcticaByTravelStyle() {
  const f = usePolarFilters();
  const styles = SHOWN.map((id) => expeditionStyles.find((s) => s.id === id)).filter(Boolean) as typeof expeditionStyles;

  return (
    <ul className="an-styles">
      {styles.map((s) => {
        const n = expeditionsWithStyle(s.id).length;
        const on = f.styles.length === 1 && f.styles[0] === s.id;
        return (
          <li key={s.id}>
            <button
              type="button"
              className={`an-style${on ? " is-active" : ""}`}
              aria-pressed={on}
              onClick={() => {
                setPolarFilter({ styles: [s.id], routes: [] });
                scrollToId("expeditions");
              }}
            >
              <PolarMedia id={s.image} decorative sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" />
              <span className="an-style__body">
                <span className="an-style__title">{s.id === "expedition-cruise" ? "Expedition" : s.label}</span>
                <span className="an-style__blurb">{s.blurb}</span>
                <span className="an-style__count">
                  {n} template{n === 1 ? "" : "s"}{s.whereAvailable ? " · where available" : ""} <ArrowRight size={14} aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
