"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { russiaExperiences, type RussiaExperienceId } from "@/data/russia/experiences";
import { russiaImage } from "@/data/russia/images";
import { activeRussiaPackages } from "@/data/russia/packages";
import { resetRussiaFilters, scrollToId, setRussiaFilter, useRussiaFilters } from "@/lib/russia/explorer";
import DestMedia from "../asia/DestMedia";
import FilterStatus from "./FilterStatus";

const TONES: [string, string][] = [
  ["#0d1730", "#7a1f33"],
  ["#14304a", "#4f86b0"],
  ["#2b1a2e", "#8a3d3d"],
  ["#1a3340", "#5a7f8f"],
];

/**
 * "Russia by Experience" cards. Same taxonomy and data as the filter bar;
 * picking a card filters destinations and packages and shows live counts.
 */
export default function ExperienceSection() {
  const s = useRussiaFilters();
  const cards = russiaExperiences.filter((e) => e.card);

  const pick = (id: RussiaExperienceId) => {
    const same = s.experience === id;
    resetRussiaFilters();
    if (!same) setRussiaFilter({ experience: id });
  };

  return (
    <>
      <FilterStatus className="ru-status--inline" />
      <ul className="asia-stylegrid ru-expgrid">
        {cards.map((e, i) => {
          const dCount = visibleDestinations.filter((d) => d.travelStyles.includes(e.id)).length;
          const pCount = activeRussiaPackages.filter((p) => p.travelStyles.includes(e.id)).length;
          const active = s.experience === e.id;
          return (
            <li key={e.id} className="asia-stylegrid__item">
              <button
                type="button"
                className={`asia-stylecard ru-expcard${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => pick(e.id)}
              >
                <DestMedia
                  image={russiaImage(e.card!.image)}
                  label={e.card!.title}
                  tone={TONES[i % TONES.length]}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 78vw"
                  className="asia-stylecard__media"
                />
                <span className="asia-stylecard__body">
                  <span className="asia-stylecard__n">
                    {dCount} destinations · {pCount} packages
                  </span>
                  <span className="asia-stylecard__title">{e.card!.title}</span>
                  <span className="asia-stylecard__text">{e.card!.text}</span>
                  <span className="asia-stylecard__go" aria-hidden="true">
                    {active ? <Check size={18} /> : <ArrowUpRight size={18} />}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="ru-exp-jump">
        <button type="button" className="pkg-btn pkg-btn--outline" onClick={() => scrollToId("packages")}>
          See matching packages
        </button>
        <button type="button" className="pkg-btn pkg-btn--text" onClick={() => scrollToId("explore")}>
          See matching destinations
        </button>
      </p>
    </>
  );
}
