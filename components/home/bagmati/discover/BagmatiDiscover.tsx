"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import {
  bagmatiCategories,
  bagmatiHighlights,
  type BagmatiCategory,
} from "@/data/bagmati/highlights";
import "./bagmati-discover.css";

type Filter = "All" | BagmatiCategory;
const filters: Filter[] = ["All", ...bagmatiCategories];

export default function BagmatiDiscover() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All"
      ? bagmatiHighlights
      : bagmatiHighlights.filter((d) => d.categories.includes(active));

  return (
    <section className="bagmati-discover" id="discover" aria-label="Explore Bagmati Province destinations">
      <BagmatiSectionHeading
        eyebrow="Destination Highlights"
        heading={
          <>
            Explore Bagmati Province <em>destinations</em>
          </>
        }
        description="From the temple squares of the Kathmandu Valley to Himalayan lakes and the jungles of Chitwan — filter by what moves you."
      />

      <div className="bagmati-discover__filters" role="group" aria-label="Filter destinations by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            className="bagmati-discover__filter"
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="bagmati-discover__count" aria-live="polite">
        Showing {visible.length} destination{visible.length === 1 ? "" : "s"}
        {active === "All" ? "" : ` for ${active}`}
      </p>

      {/* Keyed by filter so cards replay their staggered entrance on change. */}
      <ul className="bagmati-discover__grid" key={active}>
        {visible.map((place, i) => (
          <li
            key={place.id}
            className="bagmati-discover-card"
            style={{ "--i": Math.min(i, 8) } as React.CSSProperties}
          >
            <div className="bagmati-discover-card__media">
              {place.image ? (
                <Image
                  src={place.image}
                  alt={place.alt ?? place.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="bagmati-discover-card__image"
                />
              ) : (
                <div className="bagmati-discover-card__fallback" aria-hidden="true">
                  <span>{place.name}</span>
                </div>
              )}
              <span className="bagmati-discover-card__district">{place.district}</span>
            </div>

            <div className="bagmati-discover-card__body">
              <h3 className="bagmati-discover-card__title">{place.name}</h3>
              <p className="bagmati-discover-card__text">{place.description}</p>
              <ul className="bagmati-discover-card__tags" aria-label={`${place.name} experiences`}>
                {place.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link href={place.href} className="bagmati-discover-card__link">
                {place.linkLabel}
                <span className="bagmati-sr"> — {place.name}</span>
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
