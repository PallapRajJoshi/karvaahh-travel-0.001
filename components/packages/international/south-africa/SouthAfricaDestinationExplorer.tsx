"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { visibleSADestinations } from "@/data/south-africa/destinations";
import { packagesForDestination } from "@/data/south-africa/packages";
import { provinces } from "@/data/south-africa/styles";
import type { SouthAfricaDestination } from "@/data/south-africa/types";
import { clearSAStyles, customize, destinationMatches, scrollToId, setSAFilter, useSAFilters } from "@/lib/south-africa/explorer";
import SouthAfricaDestinationCard from "./SouthAfricaDestinationCard";
import SouthAfricaDestinationModal from "./SouthAfricaDestinationModal";

/**
 * Destination cards: also the accessible list alternative to the map.
 * Follows the experience bar's styles and the map's province; swipeable on
 * phones, an editorial grid above.
 */
export default function SouthAfricaDestinationExplorer() {
  const f = useSAFilters();
  const [open, setOpen] = useState<SouthAfricaDestination | null>(null);
  const shown = visibleSADestinations.filter((d) => destinationMatches(d, f));

  return (
    <>
      <div className="za-chiprow za-chiprow--light" role="group" aria-label="Filter destinations by province">
        <button type="button" className={`za-chip${f.region === "all" ? " is-active" : ""}`} aria-pressed={f.region === "all"} onClick={() => setSAFilter({ region: "all" })}>
          All of South Africa
        </button>
        {provinces.map((p) => (
          <button key={p.id} type="button" className={`za-chip${f.region === p.id ? " is-active" : ""}`} aria-pressed={f.region === p.id} onClick={() => setSAFilter({ region: f.region === p.id ? "all" : p.id })}>
            {p.name}
          </button>
        ))}
      </div>
      <p className="za-count" aria-live="polite">
        Showing <strong>{shown.length}</strong> of {visibleSADestinations.length} destinations
      </p>

      {shown.length === 0 ? (
        <div className="za-empty" role="status">
          <p>No destination matches every selected style in this province.</p>
          <button type="button" className="pkg-btn za-btn--earth" onClick={() => { clearSAStyles(); setSAFilter({ region: "all" }); }}>Show all destinations</button>
        </div>
      ) : (
        <motion.ul className="za-dest-grid" layout>
          <AnimatePresence initial={false}>
            {shown.map((d) => (
              <motion.li key={d.id} layout className={d.featured ? "is-feature" : undefined} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
                <SouthAfricaDestinationCard
                  d={d}
                  count={packagesForDestination(d.id).length}
                  onExplore={() => setOpen(d)}
                  onViewPackages={() => {
                    setSAFilter({ destination: d.id });
                    scrollToId("packages");
                  }}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      <SouthAfricaDestinationModal
        d={open}
        packages={open ? packagesForDestination(open.id) : []}
        onClose={() => setOpen(null)}
        onCustomize={(d) => {
          setOpen(null);
          customize({ title: d.name, destinations: [d.id], styles: d.travelStyles.slice(0, 1) });
        }}
      />
    </>
  );
}
