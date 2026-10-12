"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SafeImage from "@/components/shared/SafeImage";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import {
  karnaliCategories,
  karnaliDestinations,
  type KarnaliCategory,
} from "@/data/karnali/destinations";
import "./karnali-destinations.css";

type Filter = (typeof karnaliCategories)[number];

export default function KarnaliDestinations() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? karnaliDestinations
      : karnaliDestinations.filter((d) => d.categories.includes(filter as KarnaliCategory));

  return (
    <section
      id="karnali-destinations"
      className="karnali-root karnali-destinations"
      aria-labelledby="karnali-destinations-heading"
    >
      <span className="karnali-num karnali-num-dark">03</span>

      <div className="karnali-destinations-head">
        <KarnaliSectionHeading
          id="karnali-destinations-heading"
          eyebrow="PLACES TO GO"
          heading="Explore Karnali Province"
          goldWord="destinations."
          sectionNumber="03 / DESTINATIONS"
          description="From Nepal's largest and deepest lakes to medieval Khas valleys and restricted trans-Himalayan trails, these are the places that define the wild west."
          light
        />

        <div
          className="karnali-filter-bar"
          role="toolbar"
          aria-label="Filter destinations by category"
        >
          {karnaliCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="karnali-filter-btn"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="karnali-filter-status" aria-live="polite">
        Showing {visible.length} of {karnaliDestinations.length} destinations
      </p>

      <motion.ul className="karnali-destinations-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((place, index) => {
            const linkLabel = place.href ? "Explore Destination" : "Enquire About This Trip";
            const linkHref = place.href ?? `/contact?trip=${place.slug}`;

            return (
              <motion.li
                key={place.slug}
                layout
                className="karnali-destination-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <article className="karnali-destination-article">
                  <div className="karnali-destination-image-wrap">
                    <SafeImage
                      src={place.image}
                      alt={place.alt}
                      fallbackLabel={place.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="karnali-destination-image"
                    />
                    <div className="karnali-destination-gradient" />
                    <span className="karnali-destination-district">{place.district}</span>
                  </div>

                  <div className="karnali-destination-info">
                    <h3 className="karnali-destination-name">{place.name}</h3>
                    <p className="karnali-destination-description">{place.highlight}</p>

                    <ul className="karnali-destination-tags" aria-label={`${place.name} experiences`}>
                      {place.tags.map((tag) => (
                        <li key={tag} className="karnali-chip karnali-destination-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={linkHref}
                      className="karnali-destination-link"
                      aria-label={`${linkLabel}: ${place.name}`}
                    >
                      {linkLabel} <span className="karnali-arrow">↗</span>
                    </Link>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <p className="karnali-destinations-note">
        Remote destinations in Karnali depend on small-aircraft flights, mountain roads and,
        for Upper Dolpo and Humla, restricted-area permits. Plan these well in advance.
      </p>
    </section>
  );
}
