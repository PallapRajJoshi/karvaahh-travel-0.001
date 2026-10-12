"use client";

import { Check, RotateCcw } from "lucide-react";
import { activeSAPackages } from "@/data/south-africa/packages";
import { saStyles } from "@/data/south-africa/styles";
import { clearSAStyles, packageMatches, toggleSAStyle, useSAFilters } from "@/lib/south-africa/explorer";

/**
 * The full style filter (all 16 styles, including senior-friendly, private
 * and group). Shares state with the experience bar; selections combine.
 */
export default function SouthAfricaTravelStyleFilter() {
  const f = useSAFilters();
  const count = activeSAPackages.filter((p) => p.kind === "template" && packageMatches(p, f)).length;

  return (
    <div className="za-filter">
      <fieldset className="za-filter__group">
        <legend className="za-filter__legend">Travel style · choose any combination</legend>
        <div className="za-filter__chips">
          {saStyles.map((s) => {
            const on = f.styles.includes(s.id);
            return (
              <button key={s.id} type="button" className={`za-chip${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => toggleSAStyle(s.id)}>
                {on && <Check size={14} aria-hidden="true" />} {s.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="za-filter__status">
        <p aria-live="polite">
          <strong>{count}</strong> package template{count === 1 ? "" : "s"} {f.styles.length ? "match your styles" : "to choose from"}, plus a fully custom option
        </p>
        {f.styles.length > 0 && (
          <button type="button" className="pkg-btn pkg-btn--text" onClick={() => clearSAStyles()}>
            <RotateCcw size={15} aria-hidden="true" /> Clear styles
          </button>
        )}
      </div>
    </div>
  );
}
