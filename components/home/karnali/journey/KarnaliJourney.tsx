"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import SafeImage from "@/components/shared/SafeImage";
import { karnaliJourney } from "@/data/karnali/journey";
import { karnaliCircuits } from "@/data/karnali/travel-info";
import "./karnali-journey.css";

export default function KarnaliJourney() {
  return (
    <section
      id="karnali-circuits"
      className="karnali-root karnali-journey"
      aria-label="Karnali travel circuits and routes"
    >
      <span className="karnali-num">12</span>

      <KarnaliSectionHeading
        eyebrow="THE EXPEDITION ROUTE"
        heading="From the gateway"
        goldWord="to the forgotten valleys."
        sectionNumber="12 / CIRCUITS & ROUTES"
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
              <SafeImage
                src={stop.image}
                fallbackLabel={stop.title}
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

      <h3 className="karnali-circuits-heading">Suggested travel circuits</h3>
      <ul className="karnali-circuits">
        {karnaliCircuits.map((circuit, index) => (
          <motion.li
            key={circuit.name}
            className="karnali-circuit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="karnali-circuit-head">
              <h4 className="karnali-circuit-name">{circuit.name}</h4>
              <span className="karnali-circuit-duration">{circuit.duration}</span>
            </div>
            <p className="karnali-circuit-route">{circuit.route}</p>
            <p className="karnali-circuit-text">{circuit.description}</p>
            {circuit.href && (
              <Link href={circuit.href} className="karnali-circuit-link">
                See the destination <span className="karnali-arrow">↗</span>
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
      <p className="karnali-circuits-note">
        Durations are indicative. Add buffer days for weather-dependent mountain flights.
      </p>

      <div className="karnali-journey-cta-row">
        <Link href="#karnali-enquiry" className="karnali-journey-cta">
          Plan your Karnali expedition <span className="karnali-arrow">↗</span>
        </Link>
      </div>
    </section>
  );
}
