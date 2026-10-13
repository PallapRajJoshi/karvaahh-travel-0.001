"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { BTN_GHOST, BTN_PRIMARY, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { IconName, PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.85, delay: d, ease: EASE } }),
};

/**
 * Full-bleed coastal hero: slow settle-in zoom on the photo, staggered
 * copy, then a compact info strip. Motion respects prefers-reduced-motion.
 */
export default function CoastalHero({
  background,
  highlights,
  info,
}: {
  background: PageImage;
  highlights: string[];
  info: { icon: IconName; label: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#05283A] text-white">
      <motion.div initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1.02 }} transition={{ duration: 3.2, ease: EASE }} className="absolute inset-0 -z-20">
        {background.src && (
          <Image src={background.src} alt={background.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" style={{ objectPosition: background.objectPosition }} />
        )}
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(5,40,58,0.92)_0%,rgba(5,40,58,0.7)_42%,rgba(10,77,104,0.25)_75%,rgba(10,77,104,0.05)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#05283A]/85 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 pb-32 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <motion.div variants={rise} custom={0.05} initial="hidden" animate="show">
          <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Coastal South India" }]} />
        </motion.div>

        <div className="mt-10 max-w-[760px] sm:mt-14">
          <motion.p variants={rise} custom={0.2} initial="hidden" animate="show" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#7FE0DB] sm:text-xs">
            <span className="h-px w-10 bg-[#7FE0DB]" aria-hidden="true" />
            Karvaahh Special Packages
          </motion.p>

          <motion.h1 variants={rise} custom={0.32} initial="hidden" animate="show" id="hero-title" className={`${SERIF} mt-6 text-[44px] font-medium leading-[1.03] tracking-[-0.03em] sm:text-[64px] lg:text-[78px]`}>
            Coastal Getaways of <span className="italic text-[#7FE0DB]">South India</span>
          </motion.h1>

          <motion.p variants={rise} custom={0.46} initial="hidden" animate="show" className="mt-6 max-w-[620px] text-[17px] font-medium leading-7 text-white sm:text-[19px] sm:leading-8">
            From misty mountain retreats to tropical beaches, sacred shores and timeless coastal heritage.
          </motion.p>
          <motion.p variants={rise} custom={0.56} initial="hidden" animate="show" className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/75 sm:text-[16px]">
            Discover India&apos;s extraordinary coastal diversity through three carefully designed journeys combining hill stations, Arabian Sea beaches, backwaters, ancient temples and cultural experiences.
          </motion.p>

          <motion.ul variants={rise} custom={0.66} initial="hidden" animate="show" className="mt-7 flex flex-wrap gap-2" aria-label="Journey styles">
            {highlights.map((h) => (
              <li key={h} className="rounded-full border border-white/25 bg-white/[0.08] px-4 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur-sm">
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} custom={0.78} initial="hidden" animate="show" className="mt-9 flex flex-wrap gap-3">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Our Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <OpenBookingButton prefill={{ tourType: "Custom South India journey" }} className={BTN_GHOST}>
              <Compass className="h-4 w-4" aria-hidden="true" />
              Plan Your Journey
            </OpenBookingButton>
          </motion.div>
        </div>
      </div>

      <motion.div variants={rise} custom={0.95} initial="hidden" animate="show" className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#05283A]/70 backdrop-blur-md">
        <ul className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 sm:px-8 lg:grid-cols-4 lg:px-10">
          {info.map((i) => (
            <li key={i.label} className="flex items-center gap-2.5 text-[12.5px] font-medium text-white/85 sm:text-[13.5px]">
              <PageIcon name={i.icon} className="h-4 w-4 shrink-0 text-[#7FE0DB]" />
              {i.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
