"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarDays, Clock, ExternalLink, Gauge, Info, MessageCircle } from "lucide-react";
import { usaImage } from "@/data/usa/images";
import { PARKS_NOTE, activeParks, parkExperiences, type ParkExperience } from "@/data/usa/nationalParks";
import { usaRegionById } from "@/data/usa/regions";
import { OFFICIAL_LINKS, enquireAbout } from "@/lib/usa/config";
import { resetUSAFilters, scrollToId, setUSAFilter } from "@/lib/usa/explorer";
import DestMedia from "../asia/DestMedia";

/** "America Beyond the Cities": park cards filtered by experience (multi-select, any match). */
export default function NationalParksSection() {
  const [picked, setPicked] = useState<ParkExperience[]>([]);
  const list = picked.length ? activeParks.filter((p) => picked.some((x) => p.experiences.includes(x))) : activeParks;
  const toggle = (id: ParkExperience) => setPicked((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));
  const label = (id: ParkExperience) => parkExperiences.find((e) => e.id === id)?.label ?? id;

  return (
    <div className="us-parks">
      <div className="us-parks__filters">
        <ul className="us-styles__chips" role="group" aria-label="Filter parks by experience">
          <li>
            <button type="button" className={`us-chip us-chip--dark${picked.length === 0 ? " is-active" : ""}`} aria-pressed={picked.length === 0} onClick={() => setPicked([])}>
              All parks
            </button>
          </li>
          {parkExperiences.map((e) => {
            const on = picked.includes(e.id);
            return (
              <li key={e.id}>
                <button type="button" className={`us-chip us-chip--dark${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => toggle(e.id)}>
                  {e.label}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="us-parks__count" aria-live="polite"><strong>{list.length}</strong> {list.length === 1 ? "park" : "parks"}</p>
      </div>

      <motion.ul layout className="us-parks__grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.03 }}
            >
              <article className="us-park" aria-labelledby={`park-${p.id}`}>
                <div className="us-park__media">
                  <DestMedia image={usaImage(p.image)} label={p.name} tone={usaRegionById(p.region).tone} sizes="(min-width: 1200px) 290px, (min-width: 640px) 45vw, 88vw" />
                  <span className="us-park__region">{usaRegionById(p.region).name}</span>
                </div>
                <div className="us-park__body">
                  <h3 id={`park-${p.id}`} className="us-park__title">{p.name}</h3>
                  <p className="us-park__state">{p.state}</p>
                  <p className="us-park__desc">{p.description}</p>
                  <p className="us-park__tags">
                    {p.experiences.slice(0, 4).map((x) => (
                      <span key={x} className={picked.includes(x) ? "is-on" : ""}>{label(x)}</span>
                    ))}
                  </p>
                  <dl className="us-park__facts">
                    <div><dt><CalendarDays size={13} aria-hidden="true" /> Season</dt><dd>{p.season}</dd></div>
                    <div><dt><Gauge size={13} aria-hidden="true" /> Difficulty</dt><dd>{p.difficulty}</dd></div>
                    <div><dt><Clock size={13} aria-hidden="true" /> Suggested</dt><dd>{p.duration}</dd></div>
                  </dl>
                  <div className="us-park__cta">
                    {p.destinationId ? (
                      <button
                        type="button"
                        className="pkg-btn asia-btn--gold"
                        onClick={() => {
                          resetUSAFilters();
                          setUSAFilter({ destination: p.destinationId });
                          scrollToId("packages");
                        }}
                      >
                        Explore <ArrowUpRight size={16} aria-hidden="true" /><span className="pkg-sr"> {p.name} packages</span>
                      </button>
                    ) : (
                      <a href={enquireAbout(`${p.name} National Park`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--gold">
                        Explore <ArrowUpRight size={16} aria-hidden="true" /><span className="pkg-sr"> {p.name} with Karvaahh (opens WhatsApp)</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="us-parks__note">
        <p><Info size={16} aria-hidden="true" /> {PARKS_NOTE}</p>
        <div className="us-parks__note-cta">
          <a href={OFFICIAL_LINKS.nps} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
            National Park Service <ExternalLink size={15} aria-hidden="true" /><span className="pkg-sr"> (official site, opens in a new tab)</span>
          </a>
          <a href={enquireAbout("a USA national parks trip")} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--gold">
            <MessageCircle size={16} aria-hidden="true" /> Plan a parks trip<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
