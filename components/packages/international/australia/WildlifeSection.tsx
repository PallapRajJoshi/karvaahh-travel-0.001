"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, HeartHandshake, Info, MapPin } from "lucide-react";
import { australiaImage } from "@/data/australia/images";
import { WILDLIFE_NOTE, animals, responsibleWildlife, wildlifeDestinations, type Animal } from "@/data/australia/wildlife";
import { resetAUFilters, scrollToId, setAUFilter } from "@/lib/australia/explorer";
import DestMedia from "../asia/DestMedia";
import { FilterButton } from "./AustraliaFilterControls";

const KINDS: { id: Animal["kind"] | "all"; label: string }[] = [
  { id: "all", label: "All wildlife" },
  { id: "land", label: "On land" },
  { id: "marine", label: "Coast & sea" },
];

/** Australian wildlife with where to see it, framed by responsible-tourism guidance. */
export default function WildlifeSection() {
  const [kind, setKind] = useState<(typeof KINDS)[number]["id"]>("all");
  const list = kind === "all" ? animals : animals.filter((a) => a.kind === kind);

  const go = (a: Animal) => {
    resetAUFilters();
    setAUFilter(a.destinations.length === 1 ? { destination: a.destinations[0] } : { styles: ["wildlife"] });
    scrollToId("packages");
  };

  return (
    <section className="pkg-section au-wild" id="wildlife" aria-labelledby="wildlife-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Australian wildlife</p>
          <h2 id="wildlife-h" className="pkg-h2">Meet Australia&apos;s Wild Side</h2>
          <p className="pkg-lede">
            Animals found nowhere else on earth, seen in the wild or at accredited sanctuaries. We plan encounters that put the animals first.
          </p>
        </div>

        <ul className="us-styles__chips au-wild__kinds" role="group" aria-label="Filter wildlife">
          {KINDS.map((k) => (
            <li key={k.id}>
              <button type="button" className={`us-chip${kind === k.id ? " is-active" : ""}`} aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>
                {k.label}
              </button>
            </li>
          ))}
        </ul>

        <motion.ul layout className="au-wild__grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((a, i) => (
              <motion.li
                key={a.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.03 }}
              >
                <article className="au-animal" aria-labelledby={`animal-${a.id}`}>
                  <div className="au-animal__media">
                    <DestMedia image={australiaImage(a.image)} label={a.name} tone={["#1b2f2a", "#5b8a6a"]} sizes="(min-width: 1200px) 290px, (min-width: 640px) 45vw, 88vw" />
                  </div>
                  <div className="au-animal__body">
                    <h3 id={`animal-${a.id}`} className="au-animal__name">{a.name}</h3>
                    <p className="au-animal__text">{a.text}</p>
                    <p className="au-animal__where-h">Where travellers often see them</p>
                    <ul className="au-animal__where">
                      {a.where.map((w) => (
                        <li key={w}><MapPin size={12} aria-hidden="true" /> {w}</li>
                      ))}
                    </ul>
                    <button type="button" className="au-animal__go" onClick={() => go(a)}>
                      Related packages <ArrowRight size={14} aria-hidden="true" /><span className="pkg-sr"> for {a.name}</span>
                    </button>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="au-wild__foot">
          <div className="au-wild__places">
            <p className="au-wild__h">Wildlife destinations</p>
            <ul>
              {wildlifeDestinations.map((w) => (
                <li key={w.label}>
                  <FilterButton filter={{ destination: w.destination }} className="us-coll__dest">{w.label}</FilterButton>
                </li>
              ))}
            </ul>
          </div>
          <div className="au-wild__ethics">
            <p className="au-wild__h"><HeartHandshake size={18} aria-hidden="true" /> Responsible wildlife tourism</p>
            <ul>
              {responsibleWildlife.map((r) => (
                <li key={r.title}><strong>{r.title}.</strong> {r.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="us-note"><Info size={14} aria-hidden="true" /> {WILDLIFE_NOTE}</p>
      </div>
    </section>
  );
}
