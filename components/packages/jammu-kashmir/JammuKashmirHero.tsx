"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, MessageCircle, MountainSnow } from "lucide-react";
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
 * Cinematic Kashmir hero. Shows the hero photo with a slow zoom once it
 * exists; until then Dal Lake below snow peaks is drawn in SVG so the
 * page never shows a broken or unrelated image. Motion respects
 * prefers-reduced-motion.
 */
export default function JammuKashmirHero({ background, highlights }: { background: PageImage; highlights: Highlight[] }) {
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
            <DalLakeScene reduce={!!reduce} />
          )}
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.92)_0%,rgba(11,41,66,0.68)_45%,rgba(11,41,66,0.12)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#071421] to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 py-14 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[780px]">
          <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Jammu & Kashmir" }]} />
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="show"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#8EC5E8]/40 bg-[#8EC5E8]/10 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#BFE0F5] sm:text-[11px]"
          >
            <MountainSnow className="h-3.5 w-3.5" aria-hidden="true" />
            Jammu &amp; Kashmir Tour Packages
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-6 text-[38px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[56px] lg:text-[70px]`}
          >
            Discover the <span className="text-[#F4A300]">Paradise</span> of the Himalayas
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.55} initial="hidden" animate="show" className="mt-6 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Wake up on a Dal Lake houseboat, wander the meadows of Gulmarg and Pahalgam, and make the sacred journey to Vaishno Devi — Kashmir journeys planned around your dates, pace and travel style.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#enquire" className={BTN_GHOST}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Plan Your Trip
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

/** Decorative Dal Lake at dusk — snow peaks, their reflection, houseboats and a drifting shikara. */
function DalLakeScene({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="jk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B2942" />
          <stop offset="0.6" stopColor="#3A6A90" />
          <stop offset="1" stopColor="#F2C48D" />
        </linearGradient>
        <linearGradient id="jk-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6FAFD" />
          <stop offset="1" stopColor="#A9C2D6" />
        </linearGradient>
        <linearGradient id="jk-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C84A6" />
          <stop offset="1" stopColor="#0D2235" />
        </linearGradient>
        <radialGradient id="jk-glow" cx="0.7" cy="0.58" r="0.3">
          <stop offset="0" stopColor="#FFD9A0" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#jk-sky)" />
      <rect width="1600" height="900" fill="url(#jk-glow)" />

      {/* Pir Panjal & Zabarwan ridges */}
      <path d="M0 520 L150 400 L260 450 L420 270 L560 400 L720 230 L860 380 L1010 280 L1150 400 L1300 260 L1450 370 L1600 300 L1600 600 L0 600 Z" fill="url(#jk-snow)" opacity="0.94" />
      <path d="M420 270 L470 330 L440 325 L405 352 L385 322 Z M720 230 L775 300 L742 292 L705 326 L682 292 Z M1300 260 L1345 318 L1316 312 L1285 338 L1266 306 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M0 580 L170 520 L320 560 L480 500 L640 552 L800 505 L960 556 L1120 510 L1280 560 L1440 515 L1600 548 L1600 610 L0 610 Z" fill="#2B4E6C" />

      {/* Lake and mirrored peaks */}
      <rect y="608" width="1600" height="292" fill="url(#jk-lake)" />
      <g opacity="0.22" transform="translate(0 1216) scale(1 -1)">
        <path d="M0 520 L150 400 L260 450 L420 270 L560 400 L720 230 L860 380 L1010 280 L1150 400 L1300 260 L1450 370 L1600 300 L1600 608 L0 608 Z" fill="#DCE8F2" />
      </g>
      <g stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round">
        <path d="M160 680 H300 M520 720 H700 M980 690 H1120 M1250 760 H1450 M300 820 H520" />
      </g>

      {/* Houseboats moored along the shore */}
      <g fill="#0C1D30">
        <path d="M120 640 H420 L400 662 H140 Z" />
        <path d="M150 640 V606 H390 V640 Z" />
        <path d="M140 606 L270 580 L400 606 Z" />
        <path d="M470 646 H720 L702 666 H488 Z" />
        <path d="M495 646 V616 H695 V646 Z" />
        <path d="M486 616 L595 594 L704 616 Z" />
      </g>
      <g fill="#F4C66A" opacity="0.85">
        <rect x="175" y="616" width="14" height="12" rx="2" />
        <rect x="215" y="616" width="14" height="12" rx="2" />
        <rect x="255" y="616" width="14" height="12" rx="2" />
        <rect x="335" y="616" width="14" height="12" rx="2" />
        <rect x="525" y="624" width="12" height="11" rx="2" />
        <rect x="565" y="624" width="12" height="11" rx="2" />
        <rect x="645" y="624" width="12" height="11" rx="2" />
      </g>

      {/* Shikara */}
      <g>
        {!reduce && <animateTransform attributeName="transform" type="translate" values="0 0; 60 4; 0 0" dur="18s" repeatCount="indefinite" />}
        <path d="M1000 760 Q1080 784 1180 760 Q1170 772 1150 776 H1030 Q1010 772 1000 760 Z" fill="#0C1D30" />
        <path d="M1050 760 V730 H1120 V760" fill="none" stroke="#0C1D30" strokeWidth="4" />
        <path d="M1042 732 H1128 L1118 722 H1052 Z" fill="#C2561A" />
        <path d="M1165 740 L1195 790" stroke="#0C1D30" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
