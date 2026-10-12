"use client";

import { Compass, Ship } from "lucide-react";
import { commandRegions, commandThemes, styleById } from "@/data/antarctica/styles";
import { scrollToId, setPolarFilter, togglePolarStyle, usePolarFilters } from "@/lib/antarctica/explorer";

/**
 * Floating glass command bar under the hero. Regions focus the map and the
 * destination explorer; themes toggle style filters on the expedition grid.
 * Rows scroll horizontally on small screens.
 */
export default function PolarCommandBar() {
  const f = usePolarFilters();

  return (
    <nav className="an-command" id="an-command" aria-label="Explore Antarctica by region or theme">
      <div className="pkg-container">
        <div className="an-command__panel">
          <div className="an-command__row">
            <p className="an-command__label"><Compass size={15} aria-hidden="true" /> Regions</p>
            <ul className="an-command__chips">
              {commandRegions.map((r) => {
                const on = f.region === r.id;
                return (
                  <li key={r.id}>
                    <button
                      type="button"
                      className={`an-chip${on ? " is-active" : ""}`}
                      aria-pressed={on}
                      onClick={() => {
                        setPolarFilter({ region: on ? "all" : r.id });
                        if (!on) scrollToId("an-map");
                      }}
                    >
                      {r.label}
                    </button>
                  </li>
                );
              })}
              <li>
                <a className="an-chip an-chip--accent" href="#expedition-cruise">
                  <Ship size={14} aria-hidden="true" /> Expedition Cruises
                </a>
              </li>
            </ul>
          </div>
          <div className="an-command__row">
            <p className="an-command__label">Travel themes</p>
            <ul className="an-command__chips">
              {commandThemes.map((id) => {
                const on = f.styles.includes(id);
                return (
                  <li key={id}>
                    <button
                      type="button"
                      className={`an-chip an-chip--soft${on ? " is-active" : ""}`}
                      aria-pressed={on}
                      onClick={() => {
                        togglePolarStyle(id);
                        if (!on) scrollToId("expeditions");
                      }}
                    >
                      {styleById(id)?.label.replace(" Expedition", "") ?? id}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
