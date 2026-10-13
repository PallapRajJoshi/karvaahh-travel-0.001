"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, Ship } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease: EASE } }),
};

/**
 * Edge-to-edge lagoon hero: a slow settle-in zoom, a gentle scroll
 * parallax, an ocean gradient behind the copy and a drifting wave line
 * into the sand-coloured page below. Motion respects prefers-reduced-motion.
 */
export default function BeachHero({ background }: { background: PageImage }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#05283A] text-white">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.14 }} animate={{ scale: 1.02 }} transition={{ duration: 3.4, ease: EASE }} className="absolute inset-0">
          {background.src && (
            <Image
              src={background.src}
              alt={background.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: background.objectPosition }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Legibility: deep ocean on the left, open lagoon on the right. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(5,40,58,0.88)_0%,rgba(5,40,58,0.62)_38%,rgba(10,77,104,0.18)_70%,rgba(10,77,104,0)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#05283A]/70 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#05283A]/80 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 pb-28 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <motion.div variants={rise} custom={0.1} initial="hidden" animate="show">
          <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Beach & Cruise" }]} />
        </motion.div>

        <div className="mt-10 max-w-[720px] sm:mt-14">
          <motion.p variants={rise} custom={0.25} initial="hidden" animate="show" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#7FE0DB] sm:text-xs">
            <span className="h-px w-10 bg-[#7FE0DB]" aria-hidden="true" />
            Escape to Blue Horizons
          </motion.p>

          <h1 id="hero-title" className={`${SERIF} mt-6 text-[46px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[68px] lg:text-[84px]`}>
            <motion.span variants={rise} custom={0.4} initial="hidden" animate="show" className="block">
              Beach &amp; Cruise
            </motion.span>
            <motion.span variants={rise} custom={0.55} initial="hidden" animate="show" className="block italic text-[#7FE0DB]">
              Escapes
            </motion.span>
          </h1>

          <motion.p variants={rise} custom={0.7} initial="hidden" animate="show" className="mt-7 max-w-[580px] text-[15.5px] leading-7 text-white/85 sm:text-[17.5px] sm:leading-8">
            Discover sun-kissed beaches, turquoise lagoons, tropical island hideaways, unforgettable cruise journeys, and extraordinary coastal experiences with Karvaahh Travels.
          </motion.p>

          <motion.div variants={rise} custom={0.85} initial="hidden" animate="show" className="mt-9 flex flex-wrap gap-3">
            <a href="#destinations" className={`group ${BTN_PRIMARY}`}>
              Explore Beach Holidays
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#experience-cruise" className={BTN_GHOST}>
              <Ship className="h-4 w-4" aria-hidden="true" />
              Discover Cruise Experiences
            </a>
          </motion.div>
        </div>
      </div>

      {/* Waves into the sand-coloured page. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden sm:h-24">
        <svg viewBox="0 0 2880 96" preserveAspectRatio="none" className="bc-wave-drift bc-wave-drift--slow absolute bottom-3 left-0 h-full opacity-40">
          <path d="M0 50 C 240 20, 480 20, 720 50 S 1200 80, 1440 50 S 1920 20, 2160 50 S 2640 80, 2880 50 L2880 96 L0 96 Z" fill="#7FE0DB" />
        </svg>
        <svg viewBox="0 0 2880 96" preserveAspectRatio="none" className="bc-wave-drift absolute bottom-0 left-0 h-full">
          <path d="M0 60 C 240 36, 480 36, 720 60 S 1200 84, 1440 60 S 1920 36, 2160 60 S 2640 84, 2880 60 L2880 96 L0 96 Z" fill="#F7F1E6" />
        </svg>
      </div>
    </section>
  );
}
