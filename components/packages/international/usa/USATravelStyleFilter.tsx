"use client";

import { motion } from "motion/react";
import { Check, SlidersHorizontal } from "lucide-react";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { activeUSAPackages } from "@/data/usa/packages";
import { travelStyles } from "@/data/usa/travel-styles";
import { destinationMatches, scrollToId, toggleUSAStyle, useUSAFilters } from "@/lib/usa/explorer";
import { FilterStatus } from "./USAFilterControls";

/**
 * "USA by Travel Style": multi-select chips. Each chip shows how many packages
 * carry that style within the current region; selecting several narrows the
 * results (a package must match all of them). Nothing reloads.
 */
export default function USATravelStyleFilter() {
  const s = useUSAFilters();
  const matchedDests = visibleUSADestinations.filter((d) => destinationMatches(d, s));

  return (
    <div className="us-styles">
      <div className="us-styles__head">
        <p className="us-styles__label"><SlidersHorizontal size={15} aria-hidden="true" /> Travel style · choose one or more</p>
      </div>
      <ul className="us-styles__chips" role="group" aria-label="Travel styles">
        {travelStyles.map((t) => {
          const on = s.styles.includes(t.id);
          const n = activeUSAPackages.filter(
            (p) => p.styles.includes(t.id) && (s.region === "all" || p.destinations.some((id) => visibleUSADestinations.find((d) => d.id === id)?.region === s.region)),
          ).length;
          return (
            <motion.li key={t.id} layout>
              <button
                type="button"
                className={`us-chip${on ? " is-active" : ""}${n === 0 ? " is-empty" : ""}`}
                aria-pressed={on}
                onClick={() => toggleUSAStyle(t.id)}
              >
                {on && (
                  <motion.span className="us-chip__check" aria-hidden="true" initial={{ width: 0, opacity: 0 }} animate={{ width: 16, opacity: 1 }} transition={{ duration: 0.2 }}>
                    <Check size={14} />
                  </motion.span>
                )}
                {t.label}
                <span className="us-chip__n" aria-label={`${n} packages`}>{n}</span>
              </button>
            </motion.li>
          );
        })}
      </ul>
      <FilterStatus />
      {s.styles.length > 0 && matchedDests.length > 0 && (
        <p className="us-styles__dests">
          Matching destinations:{" "}
          {matchedDests.slice(0, 8).map((d, i) => (
            <span key={d.id}>
              <a href={`#dest-${d.id}`}>{d.name}</a>
              {i < Math.min(matchedDests.length, 8) - 1 ? ", " : ""}
            </span>
          ))}
          {matchedDests.length > 8 && <> and {matchedDests.length - 8} more</>}{" "}
          <button type="button" className="pkg-btn pkg-btn--text" onClick={() => scrollToId("explore")}>See all</button>
        </p>
      )}
    </div>
  );
}
