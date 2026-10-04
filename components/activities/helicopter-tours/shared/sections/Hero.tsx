"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { IconName, RequiredImage } from "../types";

type HeroContent = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  image: RequiredImage;
  video?: string;
  /** Small icon + label row under the buttons. */
  trust?: { icon: IconName; label: string }[];
  /** Compact fact strip pinned to the bottom of the hero. */
  strip?: { label: string; value: string }[];
};
import { BTN_GHOST, BTN_PRIMARY, HelicopterIcon, PageIcon, SERIF } from "../ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero({
  hero,
  breadcrumbLabel,
}: {
  hero: HeroContent;
  breadcrumbLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-101px)] flex-col overflow-hidden bg-[#071421] text-white md:min-h-[calc(100svh-145px)]"
    >
      {/* Background: poster image first (LCP), video fades in once it can play */}
      <motion.div style={reduceMotion ? undefined : { y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: hero.image.objectPosition ?? "center 35%" }}
        />
        {hero.video && !reduceMotion && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Cinematic overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,33,0.92)_0%,rgba(7,20,33,0.7)_45%,rgba(7,20,33,0.25)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#071421] to-transparent"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[760px]">
          <motion.div variants={item}>
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Helicopter Tours" }, { label: breadcrumbLabel }]}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F4A300] backdrop-blur-sm sm:text-xs"
          >
            <HelicopterIcon className="h-3.5 w-3.5" />
            {hero.badge}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className={`${SERIF} mt-6 text-[40px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[54px] lg:text-[66px] xl:text-[74px]`}
          >
            {hero.titleLead} <span className="block text-[#F4A300]">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[640px] text-[15px] leading-7 text-white/80 sm:text-[16.5px] sm:leading-8"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3.5">
            <a href="#enquire" className={`group ${BTN_PRIMARY}`}>
              Plan Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href="#itinerary" className={BTN_GHOST}>
              View Itinerary
            </a>
          </motion.div>

          {hero.trust && (
            <motion.ul variants={item} className="mt-9 flex flex-wrap gap-x-6 gap-y-3" aria-label="What is included">
              {hero.trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-white/80">
                  <PageIcon name={t.icon} className="h-4 w-4 text-[#F4A300]" />
                  {t.label}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>

      {/* Compact fact strip */}
      {hero.strip && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mx-auto w-full max-w-[1400px] px-5 pb-6 sm:px-8 lg:px-10 lg:pb-8"
        >
          <dl className="flex snap-x gap-px overflow-x-auto rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {hero.strip.map((s) => (
              <div key={s.label} className="min-w-[170px] shrink-0 snap-start bg-[#071421]/40 px-5 py-4 first:rounded-l-2xl last:rounded-r-2xl lg:min-w-0">
                <dt className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#F4A300]">{s.label}</dt>
                <dd className="mt-1.5 text-[14.5px] font-medium text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      )}

      {/* Scroll indicator (hidden when the fact strip occupies the bottom) */}
      <motion.a
        hidden={Boolean(hero.strip)}
        href="#intro"
        aria-label="Scroll to the introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.35em]">Scroll</span>
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.a>
    </section>
  );
}
