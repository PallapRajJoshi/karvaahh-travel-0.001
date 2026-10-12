"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Compass, Map as MapIcon, Package, Trees } from "lucide-react";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { activeParks } from "@/data/usa/nationalParks";
import { activeUSAPackages } from "@/data/usa/packages";
import { usaRegionById, usaRegions, type USRegion } from "@/data/usa/regions";
import { destinationMatches, packageMatches, scrollToId, setUSAFilter, useUSAFilters } from "@/lib/usa/explorer";
import CountUp from "../../CountUp";

/**
 * Floating "travel command center" overlapping the hero. Picking a region
 * filters the map, destinations and packages below; a summary strip shows
 * what that region holds and where to go next.
 */
export default function USARegionNav() {
  const s = useUSAFilters();
  const region = s.region === "all" ? null : usaRegionById(s.region);
  const dCount = visibleUSADestinations.filter((d) => destinationMatches(d, s)).length;
  const pCount = activeUSAPackages.filter((p) => packageMatches(p, s)).length;
  const parks = activeParks.filter((p) => !region || p.region === region.id).length;

  const pick = (id: USRegion | "all") => setUSAFilter({ region: id, destination: "all" });

  return (
    <section className="us-regions" id="us-regions" aria-label="Explore the USA by region">
      <div className="us-regions__panel">
        <p className="us-regions__label"><Compass size={15} aria-hidden="true" /> Explore by Region</p>
        <ul className="us-regions__tabs" role="group" aria-label="Region">
          {[{ id: "all" as const, name: "All USA", tagline: "Every region" }, ...usaRegions].map((r) => {
            const active = s.region === r.id;
            return (
              <li key={r.id}>
                <button type="button" className={`us-rtab${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => pick(r.id)}>
                  {active && <motion.span layoutId="us-rtab-bg" className="us-rtab__bg" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
                  <span className="us-rtab__name">{r.name}</span>
                  <span className="us-rtab__tag">{r.tagline}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="us-regions__summary" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={s.region}
              className="us-regions__desc"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {region ? region.description : "Eight regions, from Atlantic cities to Pacific islands. Pick one to focus the map, destinations and packages."}
            </motion.p>
          </AnimatePresence>
          <dl className="us-regions__stats">
            <div><dt><MapIcon size={14} aria-hidden="true" /> Destinations</dt><dd><CountUp key={`d-${s.region}`} value={dCount} /></dd></div>
            <div><dt><Package size={14} aria-hidden="true" /> Packages</dt><dd><CountUp key={`p-${s.region}`} value={pCount} /></dd></div>
            <div><dt><Trees size={14} aria-hidden="true" /> Parks</dt><dd><CountUp key={`n-${s.region}`} value={parks} /></dd></div>
          </dl>
          <div className="us-regions__go">
            <button type="button" className="pkg-btn asia-btn--navy" onClick={() => scrollToId("us-map")}>Open the map</button>
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={() => scrollToId("packages")}>
              See packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </button>
            {region?.sectionId && (
              <a href={`#${region.sectionId}`} className="pkg-btn pkg-btn--text">Read the {region.name} story</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
