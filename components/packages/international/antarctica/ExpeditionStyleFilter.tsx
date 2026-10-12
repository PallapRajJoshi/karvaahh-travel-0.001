"use client";

import { Check, RotateCcw } from "lucide-react";
import { expeditionStyles, routeFilters } from "@/data/antarctica/styles";
import { activeExpeditions } from "@/data/antarctica/expeditions";
import { expeditionMatches, isFiltering, resetPolarFilters, togglePolarRoute, togglePolarStyle, usePolarFilters } from "@/lib/antarctica/explorer";

/**
 * Multi-select filter: every selected style and route must match. Shares
 * state with the command bar, map and style cards.
 */
export default function ExpeditionStyleFilter() {
  const f = usePolarFilters();
  const count = activeExpeditions.filter((e) => expeditionMatches(e, f)).length;

  return (
    <div className="an-filter">
      <fieldset className="an-filter__group">
        <legend className="an-filter__legend">Route</legend>
        <div className="an-filter__chips">
          {routeFilters.map((r) => {
            const on = f.routes.includes(r.id);
            return (
              <button key={r.id} type="button" className={`an-chip${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => togglePolarRoute(r.id)}>
                {on && <Check size={14} aria-hidden="true" />} {r.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      <fieldset className="an-filter__group">
        <legend className="an-filter__legend">Expedition style</legend>
        <div className="an-filter__chips">
          {expeditionStyles.map((s) => {
            const on = f.styles.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                className={`an-chip an-chip--soft${on ? " is-active" : ""}`}
                aria-pressed={on}
                title={s.whereAvailable ? "Where available" : undefined}
                onClick={() => togglePolarStyle(s.id)}
              >
                {on && <Check size={14} aria-hidden="true" />} {s.label}
                {s.whereAvailable && <span className="an-chip__note">where available</span>}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="an-filter__status">
        <p aria-live="polite">
          <strong>{count}</strong> expedition{count === 1 ? "" : "s"} {isFiltering(f) ? "match your choices" : "available to customize"}
        </p>
        {isFiltering(f) && (
          <button type="button" className="pkg-btn pkg-btn--text" onClick={() => resetPolarFilters()}>
            <RotateCcw size={15} aria-hidden="true" /> Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
