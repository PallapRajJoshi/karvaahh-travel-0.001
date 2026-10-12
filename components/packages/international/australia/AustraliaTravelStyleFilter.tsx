"use client";

import { motion } from "motion/react";
import { Check, SlidersHorizontal } from "lucide-react";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaExperiences } from "@/data/australia/experiences";
import { activeAustraliaPackages } from "@/data/australia/packages";
import { travelStyles } from "@/data/australia/travel-styles";
import { destAnchor } from "@/lib/australia/config";
import { destinationMatches, experienceMatches, scrollToId, toggleAUStyle, useAUFilters } from "@/lib/australia/explorer";
import { FilterStatus } from "./AustraliaFilterControls";

/**
 * "Australia by Travel Style": multi-select chips. Each chip shows how many
 * packages carry that style within the current region; selecting several
 * narrows packages, destinations and experiences together. Nothing reloads.
 */
export default function AustraliaTravelStyleFilter() {
  const s = useAUFilters();
  const matchedDests = visibleAustraliaDestinations.filter((d) => destinationMatches(d, s));
  const matchedExp = australiaExperiences.filter((e) => experienceMatches(e, s));
  const inRegion = (ids: string[]) => s.region === "all" || ids.some((id) => visibleAustraliaDestinations.find((d) => d.id === id)?.region === s.region);

  return (
    <div className="us-styles">
      <div className="us-styles__head">
        <p className="us-styles__label"><SlidersHorizontal size={15} aria-hidden="true" /> Travel style · choose one or more</p>
      </div>
      <ul className="us-styles__chips" role="group" aria-label="Travel styles">
        {travelStyles.map((t) => {
          const on = s.styles.includes(t.id);
          const n = activeAustraliaPackages.filter((p) => p.styles.includes(t.id) && inRegion(p.destinations)).length;
          return (
            <motion.li key={t.id} layout>
              <button
                type="button"
                className={`us-chip${on ? " is-active" : ""}${n === 0 ? " is-empty" : ""}`}
                aria-pressed={on}
                onClick={() => toggleAUStyle(t.id)}
              >
                <motion.span className="us-chip__check" aria-hidden="true" animate={{ width: on ? 16 : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.2 }}>
                  <Check size={14} />
                </motion.span>
                {t.label}
                <span className="us-chip__n" aria-label={`${n} packages`}>{n}</span>
              </button>
            </motion.li>
          );
        })}
      </ul>
      <FilterStatus />
      {s.styles.length > 0 && (matchedDests.length > 0 || matchedExp.length > 0) && (
        <div className="us-styles__dests au-styles__matches">
          {matchedDests.length > 0 && (
            <p>
              Matching destinations:{" "}
              {matchedDests.slice(0, 8).map((d, i) => (
                <span key={d.id}>
                  <a href={`#${destAnchor(d.id)}`}>{d.name}</a>
                  {i < Math.min(matchedDests.length, 8) - 1 ? ", " : ""}
                </span>
              ))}
              {matchedDests.length > 8 && <> and {matchedDests.length - 8} more</>}{" "}
              <button type="button" className="pkg-btn pkg-btn--text" onClick={() => scrollToId("explore")}>See all</button>
            </p>
          )}
          {matchedExp.length > 0 && (
            <p>
              Matching experiences: {matchedExp.slice(0, 6).map((e) => e.title).join(", ")}
              {matchedExp.length > 6 && <> and {matchedExp.length - 6} more</>}{" "}
              <button type="button" className="pkg-btn pkg-btn--text" onClick={() => scrollToId("experiences")}>See them</button>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
