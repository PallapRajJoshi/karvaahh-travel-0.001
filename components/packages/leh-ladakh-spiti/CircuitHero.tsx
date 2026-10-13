"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, CalendarDays, ChevronDown, Compass, Route, Users } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useBooking } from "@/components/activities/experience/booking";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

const CHIPS = [
  { icon: CalendarDays, label: "25–30 Days" },
  { icon: Route, label: "Himalayan Road Expedition" },
  { icon: Users, label: "Private & Customized Tours" },
  { icon: Compass, label: "Seasonal Departures" },
];

/**
 * Cinematic Ladakh hero. Shows the Pangong photo with a slow zoom once it
 * exists; until then a high-desert lake scene is drawn in SVG so the page
 * never shows a broken or unrelated image.
 */
export default function CircuitHero({ background }: { background: PageImage }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { open } = useBooking();
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
            <LadakhScene />
          )}
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.9)_0%,rgba(11,41,66,0.68)_48%,rgba(11,41,66,0.12)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#071421] to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 py-14 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[820px]">
          <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Karvaahh Special Packages" },
                { label: "Leh–Ladakh & Spiti Circuit" },
              ]}
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="show"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#F7C35A] sm:text-[11px]"
          >
            Karvaahh Special Packages
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-6 text-[36px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[54px] lg:text-[66px]`}
          >
            Beyond the Ordinary. <span className="text-[#F4A300]">Across the Extraordinary Himalayas.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.52}
            initial="hidden"
            animate="show"
            className="mt-5 text-[17px] font-medium tracking-[-0.005em] text-white/90 sm:text-[21px]"
          >
            Leh–Ladakh, Zanskar &amp; Spiti Grand Himalayan Circuit
          </motion.p>
          <motion.p variants={fadeUp} custom={0.62} initial="hidden" animate="show" className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/75 sm:text-[16.5px] sm:leading-8">
            A private overland journey through ancient monasteries, remote Himalayan valleys, high mountain passes and alpine lakes — planned around
            seasonal roads and unhurried acclimatization.
          </motion.p>

          <motion.ul variants={fadeUp} custom={0.74} initial="hidden" animate="show" className="mt-7 flex flex-wrap gap-2" aria-label="Expedition at a glance">
            {CHIPS.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[12.5px] font-medium text-white/85 sm:text-[13px]">
                <Icon className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} custom={0.86} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={() => open()} className={`group ${BTN_PRIMARY}`}>
              Plan My Expedition
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a href="#routes" className={BTN_GHOST}>
              <Route className="h-4 w-4" aria-hidden="true" />
              Explore the Routes
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#overview"
          aria-label="Scroll to the expedition overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mx-auto mt-12 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white md:flex"
        >
          <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}

/** Decorative high-desert lake under bare Ladakh ridges — used until the hero photo exists. */
function LadakhScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="ll-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2942" />
          <stop offset="0.6" stopColor="#2F6E9C" />
          <stop offset="1" stopColor="#A9CBE0" />
        </linearGradient>
        <linearGradient id="ll-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3FA3B8" />
          <stop offset="1" stopColor="#0F4E6E" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#ll-sky)" />
      <path d="M0 560 L160 420 L300 480 L450 300 L580 410 L740 240 L880 380 L1030 280 L1170 400 L1320 260 L1460 370 L1600 320 L1600 900 L0 900 Z" fill="#E8EEF3" opacity="0.9" />
      <path d="M0 600 L200 470 L360 540 L520 430 L700 520 L860 420 L1040 510 L1220 430 L1400 520 L1600 450 L1600 900 L0 900 Z" fill="#8A6B4E" />
      <path d="M0 650 L240 560 L420 610 L640 540 L860 600 L1080 550 L1300 610 L1600 560 L1600 900 L0 900 Z" fill="#6B4F3A" />
      <path d="M0 690 L1600 670 L1600 900 L0 900 Z" fill="url(#ll-lake)" />
      <path d="M0 800 L260 760 L520 790 L800 750 L1100 790 L1400 760 L1600 780 L1600 900 L0 900 Z" fill="#0D2235" />
    </svg>
  );
}
