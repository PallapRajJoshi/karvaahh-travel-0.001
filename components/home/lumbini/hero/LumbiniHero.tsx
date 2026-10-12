"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import "./lumbini-hero.css";

const highlights = [
  {
    number: "01",
    title: "Birthplace of Buddha",
    detail: "Lumbini · Maya Devi Temple",
  },
  {
    number: "02",
    title: "Ancient Buddhist Heritage",
    detail: "Tilaurakot · Kapilvastu · Kudan",
  },
  {
    number: "03",
    title: "Wildlife & Culture",
    detail: "Bardiya · Tharu villages · Tansen",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function LumbiniHero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : "hidden";

  return (
    <section className="lumbini-hero" aria-labelledby="lumbini-hero-title">
      <div className="lumbini-hero__media">
        <Image
          src="/images/lumbini/lumbini-sacred-garden-maya-devi-temple-nepal.jpg"
          alt="Sunrise over the Sacred Garden of Lumbini with prayer flags and monastery silhouettes"
          fill
          priority
          sizes="100vw"
          className="lumbini-hero__image"
        />
        <div className="lumbini-hero__overlay" aria-hidden="true" />
      </div>

      <motion.div
        className="lumbini-hero__content"
        variants={container}
        initial={initial}
        animate="show"
      >
        <motion.p className="lumbini-hero__eyebrow" variants={item}>
          Explore Western Nepal
        </motion.p>

        <motion.h1 id="lumbini-hero-title" className="lumbini-hero__title" variants={item}>
          Lumbini Province
          <span className="lumbini-hero__title-emphasis">
            Spiritual Heritage, Ancient History &amp; Wildlife
          </span>
        </motion.h1>

        <motion.p className="lumbini-hero__description" variants={item}>
          From the sacred birthplace of Lord Buddha to ancient Buddhist cities,
          Tharu villages, wildlife-rich forests and historic hill towns —
          a journey through spirituality, culture, nature and history.
        </motion.p>

        <motion.div className="lumbini-hero__actions" variants={item}>
          <Link href="#explore-destinations" className="lumbini-hero__cta lumbini-hero__cta--primary">
            Explore Destinations
            <span aria-hidden="true">↓</span>
          </Link>
          <Link href="/contact" className="lumbini-hero__cta lumbini-hero__cta--secondary">
            Plan Your Lumbini Journey
          </Link>
        </motion.div>
      </motion.div>

      <motion.ul
        className="lumbini-hero__highlights"
        aria-label="Lumbini highlights"
        variants={container}
        initial={initial}
        animate="show"
      >
        {highlights.map((highlight) => (
          <motion.li className="lumbini-hero__highlight" key={highlight.number} variants={item}>
            <span className="lumbini-hero__highlight-number">{highlight.number}</span>
            <div className="lumbini-hero__highlight-text">
              <span className="lumbini-hero__highlight-title">{highlight.title}</span>
              <span className="lumbini-hero__highlight-detail">{highlight.detail}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
