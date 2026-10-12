"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, Clock, MapPin } from "lucide-react";
import { WILDLIFE_DISCLAIMER, WILDLIFE_GROUPS, activeWildlife } from "@/data/antarctica/wildlife";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

type Group = (typeof WILDLIFE_GROUPS)[number]["id"];

/** Wildlife cards filtered by group. Every card is framed as a possible encounter. */
export default function PolarWildlifeSection() {
  const [group, setGroup] = useState<Group>("all");
  const shown = activeWildlife.filter((w) => group === "all" || w.group === group);

  return (
    <section className="pkg-section an-wildlife" id="wildlife" aria-labelledby="wildlife-h">
      <div className="pkg-container">
        <SectionHead
          id="wildlife-h"
          eyebrow="Polar wildlife"
          title="Meet Antarctica's Wildlife"
          lede="Penguins, whales, seals and the great seabirds of the Southern Ocean. Possible encounters may include the species below, depending on season, route and conditions."
        />

        <div className="an-filterbar" role="group" aria-label="Filter wildlife">
          {WILDLIFE_GROUPS.map((g) => (
            <button key={g.id} type="button" className={`an-chip${group === g.id ? " is-active" : ""}`} aria-pressed={group === g.id} onClick={() => setGroup(g.id)}>
              {g.label}
            </button>
          ))}
        </div>

        <motion.ul className="an-wild-grid" layout>
          <AnimatePresence initial={false}>
            {shown.map((w) => (
              <motion.li key={w.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <article className="an-wild" aria-labelledby={`wild-${w.id}`}>
                  <div className="an-wild__media">
                    <PolarMedia id={w.image} label={w.species} sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" />
                    <span className="an-wild__group">{w.group}</span>
                  </div>
                  <div className="an-wild__body">
                    <h3 id={`wild-${w.id}`} className="an-wild__name">{w.species}</h3>
                    <p className="an-wild__exp">{w.experience}</p>
                    <dl className="an-wild__facts">
                      <div><dt><MapPin size={14} aria-hidden="true" /> Where</dt><dd>{w.where}</dd></div>
                      <div><dt><Clock size={14} aria-hidden="true" /> Typical season</dt><dd>{w.season}</dd></div>
                      <div><dt><Camera size={14} aria-hidden="true" /> Photography</dt><dd>{w.photography}</dd></div>
                    </dl>
                    {w.note && <p className="an-fine">{w.note}</p>}
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <p className="an-note an-note--center">{WILDLIFE_DISCLAIMER}</p>
      </div>
    </section>
  );
}
