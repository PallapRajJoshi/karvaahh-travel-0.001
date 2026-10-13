"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, CalendarDays } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { BTN_GHOST, BTN_PRIMARY, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import { HERO } from "@/data/farwest-nepal/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

/**
 * Rara Lake hero. Shows the Rara photo with a slow settle-in zoom once the
 * file exists; until then a drawn turquoise-lake scene renders, so the page
 * never shows a broken or unrelated image. Respects prefers-reduced-motion.
 */
export default function FarWestHero({ background }: { background: PageImage }) {
  const reduce = useReducedMotion();
  const anim = (d: number) => ({ variants: fadeUp, custom: d, initial: "hidden", animate: "show" }) as const;

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <motion.div
        initial={reduce ? false : { scale: 1.12, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: EASE }}
        className="absolute inset-0 -z-20"
      >
        {background.src ? (
          <Image
            src={background.src}
            alt={background.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: background.objectPosition ?? "center 60%" }}
          />
        ) : (
          <RaraScene />
        )}
      </motion.div>
      {/* Readability: left-weighted on desktop, bottom-weighted on mobile */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,20,33,0.55)_0%,rgba(7,20,33,0.35)_40%,rgba(7,20,33,0.92)_100%)] md:bg-[linear-gradient(100deg,rgba(7,20,33,0.9)_0%,rgba(11,41,66,0.62)_48%,rgba(11,41,66,0.1)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#071421] to-transparent" />

      <div className="mx-auto flex min-h-[calc(92svh-101px)] w-full max-w-[1400px] flex-col justify-end px-5 pb-10 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] md:justify-center md:py-16 lg:px-10">
        <div className="max-w-[760px]">
          <motion.div {...anim(0.1)}>
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Far-West Nepal Circuit" }]}
            />
          </motion.div>
          <motion.p
            {...anim(0.25)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5FD3C6]/40 bg-[#5FD3C6]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A9EDE4] sm:text-[11px] sm:tracking-[0.26em]"
          >
            {HERO.eyebrow}
          </motion.p>
          <motion.h1
            id="hero-title"
            {...anim(0.4)}
            className={`${SERIF} mt-5 text-[40px] font-medium leading-[1.04] tracking-[-0.03em] min-[400px]:text-[44px] sm:text-[60px] lg:text-[76px]`}
          >
            {HERO.title}
            <span className="block text-[#F4A300]">{HERO.titleAccent}</span>
          </motion.h1>
          <motion.p {...anim(0.55)} className="mt-5 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            {HERO.text}
          </motion.p>

          <motion.div {...anim(0.7)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore the Expedition
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <OpenBookingButton className={BTN_GHOST}>
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Plan Your Journey
            </OpenBookingButton>
          </motion.div>
        </div>

        <motion.ul
          {...anim(0.9)}
          aria-label="Circuit at a glance"
          className="mt-10 grid max-w-[860px] gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-3"
        >
          {HERO.highlights.map((h) => (
            <li key={h.label} className="flex items-center gap-3.5 bg-[#071421]/60 px-5 py-3.5 sm:py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4A300]/15 text-[#F4A300]">
                <PageIcon name={h.icon} className="h-4 w-4" />
              </span>
              <span>
                <span className={`${SERIF} block text-[18px] leading-tight text-white sm:text-[19px]`}>{h.value}</span>
                <span className="mt-0.5 block text-[12px] leading-snug text-white/60">{h.label}</span>
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/** Drawn alpine lake under forested ridges and snow peaks — used until the Rara photo exists. */
function RaraScene() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="fw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2942" />
          <stop offset="0.6" stopColor="#2F6A8C" />
          <stop offset="1" stopColor="#B9D9E0" />
        </linearGradient>
        <linearGradient id="fw-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F8FB" />
          <stop offset="1" stopColor="#8FB0C4" />
        </linearGradient>
        <linearGradient id="fw-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3FB8AE" />
          <stop offset="0.5" stopColor="#1C8A8F" />
          <stop offset="1" stopColor="#0E4F63" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#fw-sky)" />
      <path d="M0 470 L160 380 L290 430 L460 250 L600 380 L760 300 L900 400 L1060 230 L1220 370 L1370 290 L1600 360 L1600 600 L0 600 Z" fill="url(#fw-snow)" opacity="0.9" />
      <path d="M460 250 L505 300 L478 296 L448 320 L425 295 Z M1060 230 L1110 290 L1078 284 L1048 310 L1025 280 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M0 560 L120 500 L260 540 L380 480 L520 545 L680 490 L840 550 L1000 495 L1160 545 L1320 500 L1480 540 L1600 510 L1600 640 L0 640 Z" fill="#1F4A3A" />
      <path d="M0 610 L140 570 L300 600 L460 565 L640 605 L820 570 L1000 605 L1180 575 L1360 605 L1600 575 L1600 660 L0 660 Z" fill="#163A2E" />
      <rect y="640" width="1600" height="260" fill="url(#fw-lake)" />
      <path d="M0 640 L160 680 L290 660 L460 720 L600 670 L760 700 L900 665 L1060 730 L1220 670 L1370 700 L1600 672 L1600 640 Z" fill="#FFFFFF" opacity="0.08" />
      <g stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="2">
        <path d="M220 730 H420 M980 760 H1240 M560 810 H760 M1280 840 H1460 M120 860 H280" />
      </g>
    </svg>
  );
}
