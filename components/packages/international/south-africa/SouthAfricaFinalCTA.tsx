"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Binoculars, MessageCircle, Send } from "lucide-react";
import { saImage } from "@/data/south-africa/images";
import { SA_ENQUIRY } from "@/lib/south-africa/config";

/** Cinematic close: a safari sunset with subtle parallax. */
export default function SouthAfricaFinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const img = saImage("vehicle-sunset");

  return (
    <section className="za-final" id="za-final" ref={ref} aria-labelledby="final-h">
      <motion.div className="za-final__media" style={{ y }} aria-hidden="true">
        {img && <Image src={img.src} alt="" fill sizes="100vw" className="za-final__img" />}
      </motion.div>
      <div className="za-final__scrim" aria-hidden="true" />
      <div className="pkg-container za-final__inner">
        <p className="asia-eyebrow asia-eyebrow--light">Karvaahh – Live to Travel</p>
        <h2 id="final-h" className="za-final__title">Your African Journey Starts Here.</h2>
        <p className="za-final__lede">
          From Cape Town&apos;s mountains and vineyards to the untamed beauty of the African bush, let Karvaahh create a South African journey shaped around the way you want to travel.
        </p>
        <div className="za-final__cta">
          <a href="#plan-trip" className="pkg-btn pkg-btn--lg za-btn--gold">Customize My South Africa Trip <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" /></a>
          <a href="#safari" className="pkg-btn pkg-btn--lg pkg-btn--light"><Binoculars size={18} aria-hidden="true" /> Plan My Safari</a>
          <a href={SA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
          <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost"><Send size={18} aria-hidden="true" /> Enquire Now</a>
        </div>
      </div>
    </section>
  );
}
