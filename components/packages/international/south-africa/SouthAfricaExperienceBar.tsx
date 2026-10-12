"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { visibleSADestinations } from "@/data/south-africa/destinations";
import { saExperiences } from "@/data/south-africa/experiences";
import { activeSAPackages } from "@/data/south-africa/packages";
import { barStyles } from "@/data/south-africa/styles";
import { clearSAStyles, destinationMatches, experienceMatches, packageMatches, scrollToId, toggleSAStyle, useSAFilters } from "@/lib/south-africa/explorer";

/**
 * Floating experience bar. Multi-select styles update the destinations,
 * experiences and packages below without a reload, with live result counts.
 * Desktop: segmented row; phones: horizontal chips.
 */
export default function SouthAfricaExperienceBar() {
  const f = useSAFilters();
  const dest = visibleSADestinations.filter((d) => destinationMatches(d, { ...f, region: "all" })).length;
  const exp = saExperiences.filter((e) => experienceMatches(e, f)).length;
  const pkg = activeSAPackages.filter((p) => packageMatches(p, { ...f, destination: "all" })).length;

  return (
    <nav className="za-bar" id="za-bar" aria-label="Filter South Africa by travel style">
      <div className="pkg-container">
        <div className="za-bar__panel">
          <ul className="za-bar__chips" aria-label="Travel styles (choose any)">
            {barStyles.map((s) => {
              const on = f.styles.includes(s.id);
              return (
                <li key={s.id}>
                  <button type="button" className={`za-seg${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => toggleSAStyle(s.id)}>
                    {on && (
                      <motion.span className="za-seg__check" aria-hidden="true" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 26 }}>
                        <Check size={13} />
                      </motion.span>
                    )}
                    {s.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="za-bar__status" aria-live="polite">
            <p>
              <strong>{dest}</strong> destinations · <strong>{exp}</strong> experiences · <strong>{pkg}</strong> packages
              {f.styles.length > 0 && <span className="za-bar__match"> match {f.styles.length > 1 ? "all your styles" : "your style"}</span>}
            </p>
            <div className="za-bar__actions">
              {f.styles.length > 0 && (
                <button type="button" className="pkg-btn pkg-btn--text" onClick={() => clearSAStyles()}>
                  <RotateCcw size={14} aria-hidden="true" /> Clear
                </button>
              )}
              <button type="button" className="pkg-btn pkg-btn--text" onClick={() => scrollToId("packages")}>
                See packages <ArrowRight size={14} className="pkg-arrow" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
