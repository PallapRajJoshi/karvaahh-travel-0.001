"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliJourney } from "@/data/karnali/journey";
import "./karnali-journey.css";

export default function KarnaliJourney() {
  return (
    <section className="karnali-root karnali-journey" aria-label="Karnali expedition journey">
      <span className="karnali-num">10</span>

      <KarnaliSectionHeading
        eyebrow="THE EXPEDITION ROUTE"
        heading="From the gateway"
        goldWord="to the forgotten valleys."
        sectionNumber="10 / JOURNEY"
      />

      <div className="karnali-journey-route">
        {karnaliJourney.map((stop, index) => (
          <motion.div
            className="karnali-journey-stop"
            key={stop.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="karnali-journey-image-wrap">
              <Image
                src={stop.image}
                alt={stop.alt}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="karnali-journey-image"
              />
            </div>
            <span className="karnali-journey-number">{stop.number}</span>
            <h3 className="karnali-journey-title">{stop.title}</h3>
            <p className="karnali-journey-description">{stop.description}</p>
            {index < karnaliJourney.length - 1 && (
              <span className="karnali-journey-connector" aria-hidden="true" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="karnali-journey-cta-row">
        <Link href="/contact" className="karnali-journey-cta">
          Plan your Karnali expedition <span className="karnali-arrow">↗</span>
        </Link>
      </div>
    </section>
  );
}
