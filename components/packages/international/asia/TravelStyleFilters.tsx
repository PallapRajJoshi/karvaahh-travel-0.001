"use client";

import { motion } from "motion/react";
import { travelStyles, type TravelStyleId } from "@/data/travel-styles";
import { setExplorer, useExplorer } from "@/lib/asia/explorer";

/** Horizontal style chips. Selecting one filters the destination explorer below. */
export default function TravelStyleFilters() {
  const { style } = useExplorer();
  const options: { id: TravelStyleId | "all"; label: string }[] = [{ id: "all", label: "All Styles" }, ...travelStyles];

  return (
    <div className="asia-styles" role="group" aria-label="Filter destinations by travel style">
      <ul className="asia-styles__row">
        {options.map((o) => {
          const active = style === o.id;
          return (
            <li key={o.id}>
              <button
                type="button"
                className={`asia-chip${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => setExplorer({ style: o.id })}
              >
                {active && (
                  <motion.span
                    layoutId="asia-style-pill"
                    className="asia-chip__bg"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="asia-chip__text">{o.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
