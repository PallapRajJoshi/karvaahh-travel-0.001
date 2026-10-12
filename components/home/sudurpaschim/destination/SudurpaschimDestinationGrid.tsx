"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  DestinationCategory,
  SudurpaschimDestination,
} from "@/data/sudurpaschim/destinations";

type Filter = "All" | DestinationCategory;

interface SudurpaschimDestinationGridProps {
  destinations: SudurpaschimDestination[];
  categories: DestinationCategory[];
}

export default function SudurpaschimDestinationGrid({
  destinations,
  categories,
}: SudurpaschimDestinationGridProps) {
  const [active, setActive] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...categories];

  const visible =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.categories.includes(active));

  return (
    <>
      <div
        className="sp-dest-filters"
        role="group"
        aria-label="Filter destinations by category"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="sp-dest-filter"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="sp-dest-count" aria-live="polite">
        Showing {visible.length} of {destinations.length} destinations
      </p>

      {/* key remounts the list so the stagger animation replays per filter */}
      <ul className="sp-dest-grid" key={active}>
        {visible.map((place, i) => {
          const linkLabel = place.href ? "Explore Destination" : "Plan a Visit";
          const href =
            place.href ??
            `/contact?province=sudurpaschim&destination=${place.slug}`;

          return (
            <li
              className="sp-dest-card"
              key={place.slug}
              style={{ "--i": Math.min(i, 8) } as CSSProperties}
            >
              <div className="sp-dest-card__media">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className="sp-dest-card__image"
                />
                <span className="sp-dest-card__kicker">{place.kicker}</span>
              </div>

              <div className="sp-dest-card__body">
                <p className="sp-dest-card__district">{place.district}</p>
                <h3 className="sp-dest-card__title">{place.name}</h3>
                <p className="sp-dest-card__desc">{place.description}</p>

                <ul className="sp-dest-card__tags" aria-label="Experiences">
                  {place.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className="sp-dest-card__link"
                  aria-label={`${linkLabel}: ${place.name}`}
                >
                  {linkLabel} <span className="sp-arrow">→</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
