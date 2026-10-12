"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import {
  koshiCategories,
  koshiDestinations,
} from "@/data/koshi/destinations";
import "./koshi-destinations.css";

type Filter = (typeof koshiCategories)[number];

export default function KoshiDestinations() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? koshiDestinations
      : koshiDestinations.filter((d) => d.categories.includes(active));

  return (
    <section
      id="destinations"
      className="koshi-destinations koshi-section"
      aria-labelledby="koshi-destinations-title"
    >
      <div className="koshi-shell">

        {/* HEADER */}
        <div className="koshi-destinations__header">
          <KoshiSectionHeading
            eyebrow="PLACES TO GO"
            titleId="koshi-destinations-title"
            title={
              <>
                Explore <em>Koshi Province</em> destinations
              </>
            }
            description="From Everest and Kanchenjunga to Ilam's tea gardens, sacred caves and Koshi Tappu's wetlands — the places that make eastern Nepal unforgettable."
          />

          <div className="koshi-destinations__index" aria-hidden="true">
            <span>{String(koshiDestinations.length).padStart(2, "0")}</span>
            <small>DESTINATIONS</small>
          </div>
        </div>

        {/* FILTERS */}
        <div
          className="koshi-destinations__filters"
          role="group"
          aria-label="Filter destinations by experience"
        >
          {koshiCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              className="koshi-destinations__filter"
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="koshi-destinations__count" aria-live="polite">
          Showing {visible.length} of {koshiDestinations.length} destinations
        </p>

        {/* DESTINATION GRID — keyed by filter so the staggered entrance replays */}
        <ul key={active} className="koshi-destination-grid">
          {visible.map((destination, index) => (
            <li
              key={destination.name}
              className="koshi-destination-card"
              style={{ "--i": index } as CSSProperties}
            >
              <div className="koshi-destination-card__media">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="koshi-destination-card__image"
                />
                <span className="koshi-destination-card__location">
                  {destination.location}
                </span>
              </div>

              <div className="koshi-destination-card__body">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>

                <ul
                  className="koshi-destination-card__tags"
                  aria-label={`${destination.name} experiences`}
                >
                  {destination.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {destination.link ? (
                  <Link
                    href={destination.link.href}
                    className="koshi-destination-card__explore"
                    aria-label={`Explore ${destination.name}: ${destination.link.label}`}
                  >
                    <span>Explore Destination</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="koshi-destination-card__explore koshi-destination-card__explore--enquire"
                    aria-label={`Enquire about a trip to ${destination.name}`}
                  >
                    <span>Plan this trip</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
