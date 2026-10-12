"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Compass, Map as MapIcon, Package, Sparkles } from "lucide-react";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaExperiences } from "@/data/australia/experiences";
import { activeAustraliaPackages } from "@/data/australia/packages";
import { australiaRegionById, australiaRegions, type AustraliaRegion } from "@/data/australia/regions";
import { destinationMatches, experienceMatches, packageMatches, scrollToId, setAUFilter, useAUFilters } from "@/lib/australia/explorer";
import CountUp from "../../CountUp";

/**
 * Floating "Explore Australia by Region" panel overlapping the hero.
 * Horizontal scrolling tabs on mobile, a segmented control on desktop.
 * Picking a state filters the map, destinations, experiences and packages.
 */
export default function AustraliaRegionNav() {
  const s = useAUFilters();
  const region = s.region === "all" ? null : australiaRegionById(s.region);
  const dCount = visibleAustraliaDestinations.filter((d) => destinationMatches(d, s)).length;
  const pCount = activeAustraliaPackages.filter((p) => packageMatches(p, s)).length;
  const xCount = australiaExperiences.filter((e) => experienceMatches(e, s)).length;

  const pick = (id: AustraliaRegion | "all") => setAUFilter({ region: id, destination: "all" });

  return (
    <section className="us-regions au-regions" id="au-regions" aria-label="Explore Australia by region">
      <div className="us-regions__panel">
        <p className="us-regions__label"><Compass size={15} aria-hidden="true" /> Explore Australia by Region</p>
        <ul className="us-regions__tabs au-regions__tabs" role="group" aria-label="State or territory">
          {[{ id: "all" as const, name: "All Australia", short: "All", tagline: "Every state" }, ...australiaRegions].map((r) => {
            const active = s.region === r.id;
            return (
              <li key={r.id}>
                <button type="button" className={`us-rtab${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => pick(r.id)}>
                  {active && <motion.span layoutId="au-rtab-bg" className="us-rtab__bg" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
                  <span className="us-rtab__name">{r.name}</span>
                  <span className="us-rtab__tag">{r.tagline}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="us-regions__summary">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={s.region}
              className="us-regions__desc"
              aria-live="polite"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {region ? region.description : "Six states and two territories, from tropical reef to red desert. Pick one to focus the map, destinations, experiences and packages."}
            </motion.p>
          </AnimatePresence>
          <dl className="us-regions__stats">
            <div><dt><MapIcon size={14} aria-hidden="true" /> Places</dt><dd><CountUp key={`d-${s.region}`} value={dCount} /></dd></div>
            <div><dt><Sparkles size={14} aria-hidden="true" /> Experiences</dt><dd><CountUp key={`x-${s.region}`} value={xCount} /></dd></div>
            <div><dt><Package size={14} aria-hidden="true" /> Packages</dt><dd><CountUp key={`p-${s.region}`} value={pCount} /></dd></div>
          </dl>
          <div className="us-regions__go">
            <button type="button" className="pkg-btn asia-btn--navy" onClick={() => scrollToId("au-map")}>Open the map</button>
            <button type="button" className="pkg-btn pkg-btn--outline" onClick={() => scrollToId("packages")}>
              See packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </button>
            {region?.sectionId && (
              <a href={`#${region.sectionId}`} className="pkg-btn pkg-btn--text">Read the {region.short} story</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
