"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, Compass, Mountain } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

type Highlight = { value: string; label: string };

/**
 * Cinematic Himalayan hero. Shows the hero photo with a slow zoom once
 * it exists; until then a layered Garhwal ridgeline is drawn in SVG so
 * the page never shows a broken or unrelated image. Motion respects
 * prefers-reduced-motion.
 */
export default function UttarakhandHero({ background, highlights }: { background: PageImage; highlights: Highlight[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 3, ease: EASE }} className="absolute inset-0">
          {background.src ? (
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
          ) : (
            <HimalayaScene />
          )}
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.92)_0%,rgba(11,41,66,0.7)_45%,rgba(11,41,66,0.15)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#071421] to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 py-14 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[780px]">
          <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Uttarakhand" }]} />
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="show"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8EC5E8]/40 bg-[#8EC5E8]/10 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#BFE0F5] sm:text-[11px]"
          >
            <Mountain className="h-3.5 w-3.5" aria-hidden="true" />
            Explore the Land of the Gods
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-6 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px]`}
          >
            Discover <span className="text-[#F4A300]">Uttarakhand</span>
            <span className="mt-3 block text-[22px] leading-snug tracking-[-0.01em] text-white/90 sm:text-[30px] lg:text-[36px]">Mountains, Spirituality &amp; Adventure</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.55} initial="hidden" animate="show" className="mt-6 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Journey through the majestic Himalayas, sacred pilgrimage destinations, peaceful hill stations, flowing rivers, and breathtaking natural landscapes with Karvaahh Travels.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Uttarakhand Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#destinations" className={BTN_GHOST}>
              <Compass className="h-4 w-4" aria-hidden="true" />
              Discover Destinations
            </a>
          </motion.div>
        </div>

        <motion.dl
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          animate="show"
          className="mt-12 grid max-w-[880px] grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="bg-[#071421]/55 px-5 py-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">{h.label}</dt>
              <dd className={`${SERIF} mt-1 text-[19px] leading-tight text-white sm:text-[21px]`}>{h.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/** Decorative dawn over layered Himalayan ridges — used until the hero photo exists. */
export function HimalayaScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="uk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2942" />
          <stop offset="0.55" stopColor="#2C5A7E" />
          <stop offset="1" stopColor="#E9B66B" />
        </linearGradient>
        <linearGradient id="uk-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F8FB" />
          <stop offset="1" stopColor="#9FB8CC" />
        </linearGradient>
        <radialGradient id="uk-sun" cx="0.72" cy="0.62" r="0.35">
          <stop offset="0" stopColor="#FFD9A0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#uk-sky)" />
      <rect width="1600" height="900" fill="url(#uk-sun)" />
      <path d="M0 620 L180 470 L300 540 L470 330 L600 450 L760 260 L900 420 L1040 300 L1180 430 L1330 290 L1460 400 L1600 340 L1600 900 L0 900 Z" fill="url(#uk-snow)" opacity="0.92" />
      <path d="M470 330 L520 385 L490 380 L455 410 L430 380 Z M760 260 L815 330 L780 322 L745 355 L720 320 Z M1330 290 L1375 345 L1345 340 L1315 365 L1295 335 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M0 700 L140 610 L280 660 L420 560 L560 640 L720 540 L880 630 L1040 560 L1200 650 L1360 570 L1600 640 L1600 900 L0 900 Z" fill="#33597A" opacity="0.9" />
      <path d="M0 780 L160 710 L340 760 L520 690 L700 750 L880 700 L1060 770 L1240 710 L1420 760 L1600 720 L1600 900 L0 900 Z" fill="#1A3A55" />
      <path d="M0 860 L200 800 L420 850 L640 800 L860 850 L1080 805 L1300 850 L1600 810 L1600 900 L0 900 Z" fill="#0D2235" />
    </svg>
  );
}
