"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import {
  gandakiPlaceCategories,
  gandakiPlaces,
  type GandakiPlaceCategory,
} from "@/data/gandaki/places";
import "./gandaki-explore.css";

type Filter = "all" | GandakiPlaceCategory;

const categoryLabel = Object.fromEntries(
  gandakiPlaceCategories.map((category) => [category.id, category.label])
) as Record<GandakiPlaceCategory, string>;

export default function GandakiExplore() {
  const [active, setActive] = useState<Filter>("all");
  const [hasFiltered, setHasFiltered] = useState(false);

  const places =
    active === "all" ? gandakiPlaces : gandakiPlaces.filter((place) => place.categories.includes(active));

  const filters: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...gandakiPlaceCategories];

  const selectFilter = (id: Filter) => {
    setActive(id);
    setHasFiltered(true);
  };

  return (
    <section className="gandaki-explore" id="destinations" aria-labelledby="gandaki-explore-title">
      <div className="gandaki-explore__inner">
        <GandakiSectionHeading
          index="02"
          eyebrow="WHERE TO GO"
          heading="Explore Gandaki Province"
          emphasis="destinations."
          titleId="gandaki-explore-title"
          description="Lakes, sacred sites, heritage towns and high trails — filter by the kind of journey you have in mind, then dive into the full guide."
        />

        <div className="gandaki-explore__filters" role="group" aria-label="Filter destinations by experience">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              className={`gandaki-explore__filter${active === filter.id ? " gandaki-explore__filter--active" : ""}`}
              onClick={() => selectFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="gandaki-explore__count" aria-live="polite">
          Showing {places.length} {places.length === 1 ? "destination" : "destinations"}
          {active !== "all" && ` for ${categoryLabel[active]}`}
        </p>

        {/* Re-keying the list replays the staggered entrance after each filter change. */}
        <ul key={active} className={`gandaki-explore__grid${hasFiltered ? " gandaki-explore__grid--filtered" : ""}`}>
          {places.map((place, index) => (
            <li
              key={place.id}
              className="gandaki-place-card gandaki-reveal"
              style={{ "--gandaki-i": Math.min(index, 8) } as CSSProperties}
            >
              <div className="gandaki-place-card__media">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="gandaki-place-card__image"
                />
                <div className="gandaki-place-card__scrim" />
                <ul className="gandaki-place-card__categories" aria-label="Experience types">
                  {place.categories.map((category) => (
                    <li key={category}>{categoryLabel[category]}</li>
                  ))}
                </ul>
              </div>

              <div className="gandaki-place-card__body">
                <p className="gandaki-place-card__district">{place.district}</p>
                <h3 className="gandaki-place-card__name">{place.name}</h3>
                <p className="gandaki-place-card__description">{place.description}</p>
                <ul className="gandaki-place-card__tags" aria-label={`${place.name} highlights`}>
                  {place.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link href={place.link.href} className="gandaki-place-card__link">
                  {place.link.label}
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
