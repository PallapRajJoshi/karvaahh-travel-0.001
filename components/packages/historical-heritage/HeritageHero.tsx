"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, Landmark, MapPin } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

type Frame = { image: PageImage; caption: string };

/**
 * Cinematic heritage hero: Patan's palace square at golden hour with a
 * slow zoom and gentle parallax, a deep-blue-to-terracotta overlay for
 * legibility, and an arched "gallery" of three historic landmarks on
 * desktop. All motion respects prefers-reduced-motion.
 */
export default function HeritageHero({ background, frames, stats }: { background: PageImage; frames: Frame[]; stats: string[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const galleryY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease: EASE }} className="absolute inset-0">
          {background.src && (
            <Image
              src={background.src}
              alt=""
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
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.95)_0%,rgba(11,41,66,0.82)_45%,rgba(122,46,28,0.42)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#071421] to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-101px)] w-full max-w-[1400px] items-center gap-12 px-5 py-14 sm:px-8 md:min-h-[calc(100svh-145px)] lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="min-w-0">
          <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Historical & Heritage Tours" }]} />
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="show"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8A27A]/40 bg-[#B4532A]/15 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#F4C6A0] sm:text-[11px]"
          >
            <Landmark className="h-3.5 w-3.5" aria-hidden="true" />
            Discover Nepal&apos;s Living History
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-6 text-[42px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[60px] lg:text-[74px]`}
          >
            Historical <span className="text-[#F4A300]">&amp;</span> Heritage Tours
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.55} initial="hidden" animate="show" className="mt-6 max-w-[600px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Step into centuries of history through ancient royal cities, sacred monuments, traditional architecture, archaeological treasures, and the living cultural traditions of Nepal with Karvaahh Travels.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Heritage Tours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#destinations" className={BTN_GHOST}>
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Discover Historic Destinations
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} custom={0.85} initial="hidden" animate="show" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/65">
            {stats.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-[#F4A300]" aria-hidden="true" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Arched gallery of landmarks (desktop) */}
        <motion.div style={reduce ? undefined : { y: galleryY }} className="relative hidden w-full max-w-[560px] grid-cols-3 items-end gap-4 justify-self-end lg:grid">
          {frames.slice(0, 3).map((f, i) => (
            <motion.figure
              key={f.caption}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.18, ease: EASE }}
              className={`group ${i === 1 ? "mb-10" : ""}`}
            >
              <div className={`relative overflow-hidden rounded-t-full border-[4px] border-[#F4C66A]/70 bg-[#123653] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.75)] ${i === 1 ? "aspect-[3/5]" : "aspect-[3/4.4]"}`}>
                {f.image.src && (
                  <Image
                    src={f.image.src}
                    alt={f.image.alt}
                    fill
                    sizes="(min-width: 1024px) 180px, 1px"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    style={{ objectPosition: f.image.objectPosition }}
                  />
                )}
              </div>
              <figcaption className="mt-3 text-center text-[12px] font-medium tracking-wide text-white/80">{f.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
