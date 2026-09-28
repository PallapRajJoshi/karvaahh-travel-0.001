"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliDestinations } from "@/data/karnali/destinations";
import "./karnali-destinations.css";

export default function KarnaliDestinations() {
  return (
    <section
      className="karnali-root karnali-destinations"
      aria-label="Places to go in Karnali"
    >
      <span className="karnali-num karnali-num-dark">03</span>

      <KarnaliSectionHeading
        eyebrow="PLACES TO GO"
        heading="The wild heart"
        goldWord="of Nepal."
        sectionNumber="03 / DESTINATIONS"
        light
      />

      <div className="karnali-destinations-atlas">
        {karnaliDestinations.map((place, index) => (
          <motion.article
            key={place.number}
            className={`karnali-destination-card karnali-size-${place.size}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 5) * 0.06 }}
          >
            <div className="karnali-destination-image-wrap">
              <Image
                src={place.image}
                alt={place.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="karnali-destination-image"
              />
              <div className="karnali-destination-gradient" />
              <span className="karnali-destination-district">{place.district}</span>
            </div>
            <div className="karnali-destination-info">
              <span className="karnali-destination-category">{place.category}</span>
              <h3 className="karnali-destination-name">{place.name}</h3>
              <p className="karnali-destination-location">{place.location}</p>
              <p className="karnali-destination-description">{place.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
