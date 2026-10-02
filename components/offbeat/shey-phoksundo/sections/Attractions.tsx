"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { ATTRACTIONS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Attractions.css";

type Filter = "all" | "lake-region" | "upper-dolpo";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Attractions" },
  { id: "lake-region", label: "Around Phoksundo Lake" },
  { id: "upper-dolpo", label: "Upper Dolpo (Extended Trekking)" },
];

export default function Attractions() {
  const ref = useScrollReveal<HTMLElement>();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () => (filter === "all" ? ATTRACTIONS : ATTRACTIONS.filter((a) => a.category === filter)),
    [filter]
  );

  return (
    <section className="phoksundo-attractions" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading
          eyebrow="Explore"
          title="Top Attractions Around Shey Phoksundo"
          description="Attractions near Phoksundo Lake can typically be visited on a standard trip. Upper Dolpo destinations require extended trekking, additional logistics, and permit verification — plan accordingly."
        />

        <div className="phoksundo-attractions__filters" role="tablist" aria-label="Filter attractions">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`phoksundo-attractions__filter ${
                filter === item.id ? "phoksundo-attractions__filter--active" : ""
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="phoksundo-attractions__grid">
          {items.map((item) => (
            <article className="phoksundo-attractions__card" key={item.id} data-reveal>
              <div className="phoksundo-attractions__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="phoksundo-attractions__image"
                />
                <span
                  className={`phoksundo-attractions__badge phoksundo-attractions__badge--${item.category}`}
                >
                  {item.category === "upper-dolpo" ? "Upper Dolpo" : "Lake Region"}
                </span>
              </div>
              <div className="phoksundo-attractions__body">
                <h3 className="phoksundo-attractions__title">{item.name}</h3>
                <p className="phoksundo-attractions__location">{item.location}</p>
                <p className="phoksundo-attractions__description">{item.description}</p>
                <ul className="phoksundo-attractions__activities">
                  {item.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
