"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, ChevronDown, Compass } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BTN_GHOST, BTN_PRIMARY, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

const TITLE: { text: string; accent?: boolean }[][] = [
  [{ text: "Nepal" }, { text: "Trekking" }, { text: "&" }, { text: "Hiking" }],
  [{ text: "Adventures", accent: true }],
];
/** Index of each line's first word, for the stagger. */
const LINE_START = TITLE.map((_, li) => TITLE.slice(0, li).reduce((n, l) => n + l.length, 0));

/**
 * Full-bleed Himalayan hero: slow settle-in zoom, gentle scroll parallax on
 * the photo, and a masked word-by-word heading reveal. All motion is
 * skipped for visitors who prefer reduced motion.
 */
export default function TrekkingHero({ image, stats }: { image: PageImage; stats: { value: string; label: string }[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.8, ease: EASE }} className="absolute inset-0">
          {image.src && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: image.objectPosition }}
            />
          )}
        </motion.div>
      </motion.div>
      {/* Readability: deep-blue wash from the left and the bottom */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,33,0.92)_0%,rgba(7,20,33,0.7)_42%,rgba(7,20,33,0.2)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(7,20,33,0.95)_0%,rgba(7,20,33,0)_45%)]" />

      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-end px-5 pb-12 pt-10 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10 lg:pb-16"
      >
        <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
          <Breadcrumb
            className="pp-breadcrumb--on-dark text-white"
            items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Nepal Trekking & Hiking" }]}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          animate="show"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300] backdrop-blur-sm"
        >
          <Compass className="h-3.5 w-3.5" aria-hidden="true" />
          Explore the Himalayas
        </motion.p>

        <h1 id="hero-title" className={`${SERIF} mt-5 max-w-[880px] text-[42px] font-medium leading-[1.04] tracking-[-0.03em] sm:text-[62px] lg:text-[80px]`}>
          {TITLE.map((line, li) => (
            <span key={li} className="block">
              {line.map((w, wi) => {
                const i = LINE_START[li] + wi;
                return (
                  <span key={w.text} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      className={`inline-block ${w.accent ? "text-[#F4A300]" : ""}`}
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.35 + i * 0.08, ease: EASE }}
                    >
                      {w.text}
                    </motion.span>
                    {" "}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          custom={0.85}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-[620px] text-[15.5px] leading-7 text-white/85 sm:text-[17.5px] sm:leading-8"
        >
          Follow mountain trails to hidden villages, alpine lakes, ancient monasteries and the foot of the world&apos;s highest peaks.
          From gentle hill walks to remote high-altitude journeys, discover Nepal on foot with Karvaahh.
        </motion.p>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
          <a href="#packages" className={`group ${BTN_PRIMARY}`}>
            Explore Trekking Packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a href="#destinations" className={BTN_GHOST}>
            Discover Destinations
          </a>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          custom={1.15}
          initial="hidden"
          animate="show"
          className="mt-10 grid max-w-[720px] grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-[#071421]/45 px-3 py-4 sm:px-5">
              <dt className="mt-1 text-[11.5px] leading-4 text-white/70 sm:text-[13px]">{s.label}</dt>
              <dd className={`${SERIF} text-[24px] font-medium leading-none text-white sm:text-[32px]`}>{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#destinations"
        aria-label="Scroll to destinations"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white lg:flex"
      >
        <motion.span animate={reduce ? undefined : { y: [0, 5, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
