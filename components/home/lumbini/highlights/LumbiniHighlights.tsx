"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import {
  lumbiniHighlightFilters,
  lumbiniHighlights,
  type LumbiniHighlightFilter,
} from "@/data/lumbini/highlights";
import "./lumbini-highlights.css";

export default function LumbiniHighlights() {
  const [activeFilter, setActiveFilter] = useState<LumbiniHighlightFilter>("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeFilter === "All"
      ? lumbiniHighlights
      : lumbiniHighlights.filter((item) => item.categories.includes(activeFilter));

  return (
    <section
      className="lumbini-highlights"
      id="explore-destinations"
      aria-labelledby="lumbini-highlights-title"
    >
      <div className="lumbini-highlights__inner">
        <LumbiniSectionHeading
          index="02"
          eyebrow="Destination Highlights"
          heading="Explore Lumbini Province"
          emphasis="Destinations"
          titleId="lumbini-highlights-title"
          description="Ten places that define the province — from the Buddha's birthplace and the Shakya capital to tiger country and the remote western hills."
        />

        <div
          className="lumbini-highlights__filters"
          role="group"
          aria-label="Filter destinations by interest"
        >
          {lumbiniHighlightFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={`lumbini-highlights__filter ${
                activeFilter === filter ? "lumbini-highlights__filter--active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="lumbini-highlights__count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "destination" : "destinations"}
        </p>

        <ul className="lumbini-highlights__grid" key={activeFilter}>
          {filtered.map((item, index) => (
            <motion.li
              key={item.name}
              className="lumbini-highlight-card"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.07, ease: "easeOut" }}
            >
              <div className="lumbini-highlight-card__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="lumbini-highlight-card__image"
                />
                <span className="lumbini-highlight-card__district">{item.district}</span>
              </div>

              <div className="lumbini-highlight-card__body">
                <h3 className="lumbini-highlight-card__title">{item.name}</h3>
                <p className="lumbini-highlight-card__text">{item.highlight}</p>

                <ul className="lumbini-highlight-card__tags" aria-label={`${item.name} experiences`}>
                  {item.tags.map((tag) => (
                    <li key={tag} className="lumbini-highlight-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className="lumbini-highlight-card__link"
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
