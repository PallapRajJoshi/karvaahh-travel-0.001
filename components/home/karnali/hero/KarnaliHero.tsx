"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./karnali-hero.css";

const highlights = [
  {
    number: "01",
    title: "WILDERNESS",
    detail: "Rara · Phoksundo · Dolpo",
  },
  {
    number: "02",
    title: "HIMALAYAS",
    detail: "Humla · Jumla · Saipal",
  },
  {
    number: "03",
    title: "EXPEDITION",
    detail: "Remote trails · Ancient cultures",
  },
];

export default function KarnaliHero() {
  return (
    <section className="karnali-root karnali-hero" aria-label="Karnali Province hero">
      <div className="karnali-hero-media">
        <Image
          src="/karnali/hero.jpg"
          alt="Remote high-altitude Himalayan valley in Karnali Province, Nepal"
          fill
          priority
          sizes="100vw"
          className="karnali-hero-image"
        />
        <div className="karnali-hero-overlay" />
      </div>

      <div className="karnali-hero-content">
        <motion.p
          className="karnali-eyebrow karnali-hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          THE WILD WEST
        </motion.p>

        <motion.h1
          className="karnali-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Discover
          <br />
          <span className="karnali-hero-title-gold">Karnali</span>
        </motion.h1>

        <motion.p
          className="karnali-hero-subline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Where the wild still feels untouched.
        </motion.p>

        <motion.p
          className="karnali-hero-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Enter a remote Himalayan world of sacred lakes, ancient valleys, high
          mountains, forgotten trails, traditional villages and extraordinary
          wilderness.
        </motion.p>

        <motion.div
          className="karnali-hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="karnali-hero-location">KARNALI PROVINCE</span>
          <span className="karnali-hero-divider" aria-hidden="true" />
          <span className="karnali-hero-tagline">Remote. Raw. Remarkable.</span>
        </motion.div>

        <motion.div
          className="karnali-hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="#karnali-experiences" className="karnali-hero-cta">
            Begin the Journey <span className="karnali-arrow">↗</span>
          </Link>
        </motion.div>
      </div>

      <div className="karnali-hero-highlights">
        {highlights.map((item) => (
          <div className="karnali-hero-highlight" key={item.number}>
            <span className="karnali-hero-highlight-num">{item.number}</span>
            <div>
              <p className="karnali-hero-highlight-title">{item.title}</p>
              <p className="karnali-hero-highlight-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
