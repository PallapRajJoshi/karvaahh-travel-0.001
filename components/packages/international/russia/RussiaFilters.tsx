"use client";

import { motion } from "motion/react";
import { MapPin, Sparkles } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { russiaExperiences } from "@/data/russia/experiences";
import { setRussiaFilter, useRussiaFilters } from "@/lib/russia/explorer";
import FilterStatus from "./FilterStatus";

/** Quick filter bar under the hero: destinations + experiences. Drives the grids below. */
export default function RussiaFilters() {
  const s = useRussiaFilters();
  const destinations = [{ id: "all", name: "All Russia" }, ...visibleDestinations.filter((d) => d.quickFilter)];
  const experiences = [{ id: "all" as const, label: "All Experiences" }, ...russiaExperiences.filter((e) => !e.tagOnly)];

  return (
    <section className="ru-filters" id="ru-filters" aria-label="Filter Russia destinations and packages">
      <div className="pkg-container">
        <div className="ru-filters__row">
          <p className="ru-filters__label"><MapPin size={15} aria-hidden="true" /> Destinations</p>
          <ul className="asia-styles__row" role="group" aria-label="Destination">
            {destinations.map((d) => {
              const active = s.destination === d.id;
              return (
                <li key={d.id}>
                  <button type="button" className={`asia-chip${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => setRussiaFilter({ destination: d.id })}>
                    {active && <motion.span layoutId="ru-dest-pill" className="asia-chip__bg" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                    <span className="asia-chip__text">{d.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="ru-filters__row">
          <p className="ru-filters__label"><Sparkles size={15} aria-hidden="true" /> Experiences</p>
          <ul className="asia-styles__row" role="group" aria-label="Experience">
            {experiences.map((e) => {
              const active = s.experience === e.id;
              return (
                <li key={e.id}>
                  <button type="button" className={`asia-chip ru-chip--exp${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => setRussiaFilter({ experience: e.id })}>
                    {active && <motion.span layoutId="ru-exp-pill" className="asia-chip__bg" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                    <span className="asia-chip__text">{e.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <FilterStatus />
        <p className="ru-filters__jump">
          Results update in <a href="#explore">Explore Russia</a> and <a href="#packages">Popular Russia Tour Packages</a>.
        </p>
      </div>
    </section>
  );
}
