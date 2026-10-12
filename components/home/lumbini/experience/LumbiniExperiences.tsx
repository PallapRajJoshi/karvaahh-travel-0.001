"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniExperiences } from "@/data/lumbini/experiences";
import "./lumbini-experiences.css";

const experienceCategories = [
  "All Experiences",
  "Buddhist Pilgrimage",
  "Spiritual",
  "Heritage",
  "Wildlife",
  "Safari",
  "Tharu Culture",
  "Nature",
  "Adventure",
  "History",
  "Meditation",
  "Family",
  "Photography",
  "Road Trips",
];

export default function LumbiniExperiences() {
  const [activeCategory, setActiveCategory] = useState("All Experiences");
  const prefersReducedMotion = useReducedMotion();

  const filteredExperiences = useMemo(() => {
    if (activeCategory === "All Experiences") {
      return lumbiniExperiences;
    }

    return lumbiniExperiences.filter((experience) =>
      experience.tags.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section
      className="lumbini-experiences"
      id="experiences"
      aria-label="Lumbini experiences"
    >
      <div className="lumbini-experiences__inner">
        <LumbiniSectionHeading
          index="03"
          eyebrow="Why Visit"
          heading="Why visit"
          emphasis="Lumbini Province?"
          description="A province of sacred sites, ancient kingdoms, wildlife-rich plains and timeless hill communities."
        />

        <div
          className="lumbini-experiences__filters"
          role="tablist"
          aria-label="Filter experiences by interest"
        >
          {experienceCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`lumbini-experiences__filter ${
                activeCategory === category
                  ? "lumbini-experiences__filter--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="lumbini-experiences__grid">
          {filteredExperiences.map((experience, index) => (
            <motion.li
              className="lumbini-experience-card"
              key={experience.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="lumbini-experience-card__media">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="lumbini-experience-card__image"
                />
                <span
                  className="lumbini-experience-card__number"
                  aria-hidden="true"
                >
                  {experience.number}
                </span>
              </div>

              <div className="lumbini-experience-card__body">
                <p className="lumbini-experience-card__meta">
                  {experience.meta}
                </p>
                <h3 className="lumbini-experience-card__title">
                  {experience.title}
                </h3>
                <p className="lumbini-experience-card__description">
                  {experience.description}
                </p>
                <div className="lumbini-experience-card__tags" aria-label="Experience tags">
                  {experience.tags.map((tag) => (
                    <span key={`${experience.number}-${tag}`} className="lumbini-experience-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
