"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./karnali-hero.css";

const highlights = [
  {
    number: "01",
    title: "SACRED LAKES",
    detail: "Rara · Phoksundo · Kupinde",
  },
  {
    number: "02",
    title: "HIMALAYAN TRAILS",
    detail: "Upper Dolpo · Humla · Limi Valley",
  },
  {
    number: "03",
    title: "KHAS HERITAGE",
    detail: "Sinja Valley · Dullu · Jumla",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function KarnaliHero() {
  return (
    <section className="karnali-root karnali-hero" aria-labelledby="karnali-hero-title">
      <div className="karnali-hero-media">
        <Image
          src="/images/home/upper-dolpo-nepal-himalayan.jpg"
          alt="Vast trans-Himalayan valley and snow-dusted mountains of Upper Dolpo, Karnali Province, Nepal"
          fill
          priority
          sizes="100vw"
          className="karnali-hero-image"
        />
        <div className="karnali-hero-overlay" />
      </div>

      <div className="karnali-hero-content">
        <motion.p className="karnali-eyebrow karnali-hero-eyebrow" {...fadeUp(0)}>
          NEPAL&rsquo;S WILD WEST
        </motion.p>

        <motion.h1 id="karnali-hero-title" className="karnali-hero-title" {...fadeUp(0.1)}>
          Karnali
          <br />
          <span className="karnali-hero-title-gold">Province</span>
        </motion.h1>

        <motion.p className="karnali-hero-subline" {...fadeUp(0.2)}>
          Where the Himalaya still feels untouched.
        </motion.p>

        <motion.p className="karnali-hero-description" {...fadeUp(0.3)}>
          Nepal&rsquo;s largest and most remote province is home to Rara and Phoksundo lakes,
          the trans-Himalayan valleys of Dolpo and Humla, and the ancient Khas heritage of
          Sinja. Plan an unforgettable journey to Karnali with Karvaahh.
        </motion.p>

        <motion.div className="karnali-hero-cta-row" {...fadeUp(0.45)}>
          <Link href="#karnali-destinations" className="karnali-btn karnali-btn-gold">
            Explore Destinations <span className="karnali-arrow">↗</span>
          </Link>
          <Link href="#karnali-enquiry" className="karnali-btn karnali-btn-ghost">
            Plan Your Journey
          </Link>
        </motion.div>
      </div>

      <ul className="karnali-hero-highlights" aria-label="Karnali at a glance">
        {highlights.map((item) => (
          <li className="karnali-hero-highlight" key={item.number}>
            <span className="karnali-hero-highlight-num">{item.number}</span>
            <div>
              <p className="karnali-hero-highlight-title">{item.title}</p>
              <p className="karnali-hero-highlight-detail">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
