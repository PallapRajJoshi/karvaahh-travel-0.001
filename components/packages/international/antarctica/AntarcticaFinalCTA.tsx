"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";
import { antarcticaImage } from "@/data/antarctica/images";
import { ANTARCTICA_ENQUIRY } from "@/lib/antarctica/config";

/** Cinematic closing section: expedition ship among the ice, with subtle parallax. */
export default function AntarcticaFinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const img = antarcticaImage("ship-gentoos");

  return (
    <section className="an-final" id="an-final" ref={ref} aria-labelledby="final-h">
      <motion.div className="an-final__media" style={{ y }} aria-hidden="true">
        {img && <Image src={img.src} alt="" fill sizes="100vw" className="an-final__img" />}
      </motion.div>
      <div className="an-final__scrim" aria-hidden="true" />
      <div className="pkg-container an-final__inner">
        <p className="asia-eyebrow asia-eyebrow--light">Karvaahh – Live to Travel</p>
        <h2 id="final-h" className="an-final__title">Some Journeys Are Meant to Be Extraordinary.</h2>
        <p className="an-final__lede">
          Step beyond the ordinary and discover a world of ice, wildlife and untouched landscapes. Let Karvaahh design your Antarctica expedition around the way you want to travel.
        </p>
        <div className="an-final__cta">
          <a href="#plan-trip" className="pkg-btn pkg-btn--lg an-btn--ice">
            Design My Antarctica Expedition <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
          </a>
          <a href={ANTARCTICA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
          <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--light">
            <Send size={18} aria-hidden="true" /> Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
