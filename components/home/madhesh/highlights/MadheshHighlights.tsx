"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import {
  madheshHighlightFilters,
  madheshHighlights,
  type MadheshHighlightFilter,
} from "@/data/madhesh/highlights";
import "./madhesh-highlights.css";

export default function MadheshHighlights() {
  const [activeFilter, setActiveFilter] = useState<MadheshHighlightFilter>("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeFilter === "All"
      ? madheshHighlights
      : madheshHighlights.filter((item) => item.categories.includes(activeFilter));

  return (
    <section
      className="madhesh-highlights"
      id="explore-destinations"
      aria-labelledby="madhesh-highlights-title"
    >
      <div className="madhesh-container">
        <MadheshSectionHeading
          eyebrow="Destination Highlights"
          titleId="madhesh-highlights-title"
          heading={
            <>
              Explore Madhesh Province{" "}
              <span className="madhesh-gold-italic">Destinations</span>
            </>
          }
          description="Sacred cities, Shakti and Shiva shrines, medieval ruins, Mithila villages and Terai forests — the places that define southern Nepal."
        />

        <div
          className="madhesh-highlights__filters"
          role="group"
          aria-label="Filter destinations by interest"
        >
          {madheshHighlightFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={`madhesh-highlights__filter ${
                activeFilter === filter ? "madhesh-highlights__filter--active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="madhesh-highlights__count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
        </p>

        <ul className="madhesh-highlights__grid" key={activeFilter}>
          {filtered.map((item, index) => (
            <motion.li
              key={item.name}
              className="madhesh-highlight-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.07, ease: "easeOut" }}
            >
              <div className="madhesh-highlight-card__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="madhesh-highlight-card__image"
                />
                <span className="madhesh-highlight-card__district">{item.district}</span>
              </div>

              <div className="madhesh-highlight-card__body">
                <h3 className="madhesh-highlight-card__title">{item.name}</h3>
                <p className="madhesh-highlight-card__text">{item.highlight}</p>

                <ul className="madhesh-highlight-card__tags" aria-label={`${item.name} experiences`}>
                  {item.tags.map((tag) => (
                    <li key={tag} className="madhesh-highlight-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className="madhesh-highlight-card__link"
                  aria-label={`Explore destination: ${item.name}`}
                >
                  Explore Destination
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
