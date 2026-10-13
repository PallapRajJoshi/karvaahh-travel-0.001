"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

/**
 * Cinematic Kailash hero. Also enables smooth anchor scrolling for the
 * whole page while it is mounted (skipped for reduced-motion users).
 */
export default function PanchHero({ background }: { background: PageImage }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, [reduce]);

  const reveal = (d: number) => ({ variants: fadeUp, custom: d, initial: "hidden", animate: "show" }) as const;

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#091A2C] text-white">
      <motion.div
        initial={reduce ? false : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: EASE }}
        className="absolute inset-0 -z-20"
      >
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
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(9,26,44,0.94)_0%,rgba(16,44,74,0.72)_50%,rgba(16,44,74,0.2)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#091A2C] to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 py-16 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[760px]">
          <motion.div {...reveal(0.1)}>
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Panch Kailash & Panch Kedar" }]}
            />
          </motion.div>
          <motion.p {...reveal(0.25)} className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C5A46D]">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Karvaahh Special Packages
          </motion.p>
          <motion.h1
            id="hero-title"
            {...reveal(0.4)}
            className={`${SERIF} mt-5 text-[38px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[54px] lg:text-[66px]`}
          >
            Two Sacred Journeys. <span className="block text-[#E3CFA6]">One Spiritual Calling.</span>
          </motion.h1>
          <motion.p {...reveal(0.55)} className="mt-6 max-w-[600px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Discover the sacred Kailash mountains and the legendary Panch Kedar temples through thoughtfully planned Himalayan pilgrimage
            experiences with Karvaahh Tours &amp; Travels.
          </motion.p>
          <motion.div {...reveal(0.7)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#panch-kailash"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A46D] px-7 py-3.5 text-[15px] font-semibold text-[#091A2C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4B57F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Panch Kailash
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#panch-kedar"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A46D] hover:text-[#E3CFA6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Discover Panch Kedar
            </a>
          </motion.div>
          <motion.p {...reveal(0.85)} className="mt-8 text-[12.5px] tracking-[0.08em] text-white/60">
            Sacred Mountains • Ancient Traditions • Guided Himalayan Journeys
          </motion.p>
        </div>
      </div>

      <a
        href="#collection"
        aria-label="Scroll to the pilgrimage collection"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10.5px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white sm:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
