"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliExperiences } from "@/data/karnali/experiences";
import "./karnali-experiences.css";

export default function KarnaliExperiences() {
  return (
    <section
      id="karnali-experiences"
      className="karnali-root karnali-experiences"
      aria-label="Karnali experiences"
    >
      <span className="karnali-num">04</span>

      <KarnaliSectionHeading
        eyebrow="EXPERIENCE KARNALI"
        heading="One province."
        goldWord="A world apart."
        sectionNumber="04 / WHY VISIT"
      />

      <div className="karnali-experiences-grid">
        {karnaliExperiences.map((item, index) => (
          <motion.article
            className="karnali-experience-card"
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
          >
            <div className="karnali-experience-image-wrap">
              <SafeImage
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="karnali-experience-image"
              />
              <span className="karnali-experience-number">{item.number}</span>
            </div>
            <div className="karnali-experience-body">
              <h3 className="karnali-experience-title">{item.title}</h3>
              <p className="karnali-experience-meta">{item.meta}</p>
              <p className="karnali-experience-description">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
