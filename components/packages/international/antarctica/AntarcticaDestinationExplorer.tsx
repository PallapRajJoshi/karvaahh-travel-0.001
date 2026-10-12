"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { visibleAntarcticaDestinations } from "@/data/antarctica/destinations";
import { expeditionsInRegion } from "@/data/antarctica/expeditions";
import { routeFilters } from "@/data/antarctica/styles";
import type { AntarcticaDestination } from "@/data/antarctica/types";
import { customize, destinationMatches, scrollToId, setPolarFilter, usePolarFilters } from "@/lib/antarctica/explorer";
import AntarcticaDestinationCard from "./AntarcticaDestinationCard";
import AntarcticaDestinationModal from "./AntarcticaDestinationModal";

/**
 * Destination cards, also the accessible list alternative to the map. The
 * region chips share state with the map and command bar.
 */
export default function AntarcticaDestinationExplorer() {
  const f = usePolarFilters();
  const [open, setOpen] = useState<AntarcticaDestination | null>(null);
  const shown = visibleAntarcticaDestinations.filter((d) => destinationMatches(d, f));
  const regionNames = visibleAntarcticaDestinations.map((d) => ({ id: d.region, label: d.name }));

  const viewExpeditions = (d: AntarcticaDestination) => {
    setPolarFilter({ routes: routeFilters.some((r) => r.id === d.region) ? [d.region] : [] });
    scrollToId("expeditions");
  };

  return (
    <>
      <div className="an-filterbar" role="group" aria-label="Filter destinations by region">
        <button type="button" className={`an-chip${f.region === "all" ? " is-active" : ""}`} aria-pressed={f.region === "all"} onClick={() => setPolarFilter({ region: "all" })}>
          All destinations
        </button>
        {regionNames.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`an-chip${f.region === r.id ? " is-active" : ""}`}
            aria-pressed={f.region === r.id}
            onClick={() => setPolarFilter({ region: f.region === r.id ? "all" : r.id })}
          >
            {r.label}
          </button>
        ))}
      </div>
      <p className="pkg-sr" aria-live="polite">{shown.length} destinations shown</p>

      <motion.ul className="an-dest-grid" layout>
        <AnimatePresence initial={false}>
          {shown.map((d) => (
            <motion.li
              key={d.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <AntarcticaDestinationCard
                d={d}
                count={expeditionsInRegion(d.region).length}
                onExplore={() => setOpen(d)}
                onViewExpeditions={() => viewExpeditions(d)}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AntarcticaDestinationModal
        d={open}
        expeditions={open ? expeditionsInRegion(open.region) : []}
        onClose={() => setOpen(null)}
        onCustomize={(d) => {
          setOpen(null);
          customize({ title: d.name, region: d.name });
        }}
      />
    </>
  );
}
