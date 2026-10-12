"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { PackageTab } from "@/data/russia/content";
import type { RussiaPackage } from "@/data/russia/packages";
import Carousel from "../../Carousel";
import RuPackageCard from "./RuPackageCard";

/** A section's package carousel, with optional chips (e.g. Beach / Skiing, Summer / Winter). */
export default function FeaturePackages({
  packages,
  tabs,
  label,
  dark = false,
}: {
  packages: RussiaPackage[];
  tabs?: PackageTab[];
  label: string;
  dark?: boolean;
}) {
  const [tab, setTab] = useState(0);
  const t = tabs?.[tab];
  const list = packages.filter(
    (p) => (!t?.style || p.travelStyles.includes(t.style)) && (!t?.season || !p.seasons || p.seasons.includes(t.season)),
  );

  return (
    <div className="ru-fpk">
      {tabs && (
        <div className="ru-fpk__tabs" role="group" aria-label={`Filter ${label}`}>
          {tabs.map((x, i) => (
            <button
              key={x.label}
              type="button"
              className={`asia-tab${dark ? " ru-tab--dark" : ""}${i === tab ? " is-active" : ""}`}
              aria-pressed={i === tab}
              onClick={() => setTab(i)}
            >
              {x.label}
            </button>
          ))}
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Carousel label={label} tone={dark ? "dark" : "light"}>
            {list.map((p) => (
              <RuPackageCard key={p.id} p={p} />
            ))}
          </Carousel>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
