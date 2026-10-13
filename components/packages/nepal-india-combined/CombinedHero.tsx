"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import { CUSTOM_JOURNEY } from "@/data/nepal-india-combined/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: EASE } }),
};

const HIGHLIGHTS = ["India + Nepal", "Flexible 12–30 Day Journeys", "Private & Customized Tours", "Culture, Spirituality & Adventure"];

/**
 * Cinematic hero: a short settle-in zoom on the photo and a restrained
 * text reveal. No parallax. MotionProvider makes it respect reduced motion.
 */
export default function CombinedHero({ background }: { background: PageImage }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#0B2942] text-white">
      <motion.div initial={{ scale: 1.08, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.8, ease: EASE }} className="absolute inset-0 -z-20">
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

      {/* Legibility: navy on the left, the mountains left open on the right. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(11,41,66,0.9)_0%,rgba(11,41,66,0.7)_40%,rgba(11,41,66,0.2)_75%,rgba(11,41,66,0.05)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#0B2942]/85 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-4 pb-24 pt-10 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <motion.div variants={rise} custom={0.05} initial="hidden" animate="show">
          <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Nepal–India Combined Tours" }]} />
        </motion.div>

        <div className="mt-8 max-w-[740px] sm:mt-12">
          <motion.p variants={rise} custom={0.15} initial="hidden" animate="show" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#E2B65C] sm:text-xs">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            Karvaahh Special Packages
          </motion.p>

          <h1 id="hero-title" className={`${SERIF} mt-5 text-[40px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[60px] lg:text-[76px]`}>
            <motion.span variants={rise} custom={0.25} initial="hidden" animate="show" className="block">
              Two Nations.
            </motion.span>
            <motion.span variants={rise} custom={0.35} initial="hidden" animate="show" className="block italic text-[#E2B65C]">
              One Extraordinary Journey.
            </motion.span>
          </h1>

          <motion.p variants={rise} custom={0.45} initial="hidden" animate="show" className="mt-6 max-w-[600px] text-[15.5px] leading-7 text-white/85 sm:text-[17px] sm:leading-8">
            Discover the spiritual heart of India and the breathtaking Himalayas of Nepal through thoughtfully planned journeys combining ancient heritage, sacred temples, Buddhist pilgrimage, wildlife conservation, yoga and Himalayan adventures.
          </motion.p>

          <motion.ul variants={rise} custom={0.55} initial="hidden" animate="show" className="mt-7 grid gap-x-6 gap-y-2.5 text-[14px] text-white/90 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#E2B65C]/20 text-[#E2B65C]">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} custom={0.65} initial="hidden" animate="show" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#circuits" className={`group ${BTN_PRIMARY}`}>
              Explore Our Circuits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <OpenBookingButton prefill={{ tourType: CUSTOM_JOURNEY }} className={BTN_GHOST}>
              Plan Your Journey
            </OpenBookingButton>
          </motion.div>
        </div>
      </div>

      <a href="#circuits" aria-label="Scroll to the circuits" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white sm:flex">
        Scroll
        <ChevronDown className="nic-nudge h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
