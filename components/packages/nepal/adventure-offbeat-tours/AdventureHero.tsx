"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, Compass } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BTN_GHOST, BTN_PRIMARY, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { IconName, PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease: EASE } }),
};

type Postcard = { name: string; location: string; image: PageImage; href: string };

/** Topographic contour lines drawn over the photo. */
const CONTOURS = [
  "M-20 420 C 120 360, 240 400, 360 340 S 600 260, 760 300 S 1040 380, 1220 300",
  "M-20 470 C 140 410, 260 450, 380 390 S 620 310, 780 350 S 1060 430, 1220 350",
  "M-20 520 C 160 460, 280 500, 400 440 S 640 360, 800 400 S 1080 480, 1220 400",
  "M-20 570 C 180 510, 300 550, 420 490 S 660 410, 820 450 S 1100 530, 1220 450",
];

/**
 * Full-bleed expedition hero: a slow-zooming Himalayan photo with gentle
 * parallax, animated contour lines and a strip of linked destination
 * "postcards". All motion is disabled under prefers-reduced-motion.
 */
export default function AdventureHero({ background, postcards, badges }: { background: PageImage; postcards: Postcard[]; badges: { icon: IconName; label: string }[] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#06111C] text-white">
      {/* Background photo */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.8, ease: EASE }} className="absolute inset-0">
          {background.src && (
            <Image src={background.src} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" style={{ objectPosition: background.objectPosition ?? "center 45%" }} />
          )}
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,17,28,0.55)_0%,rgba(6,17,28,0.35)_35%,rgba(6,17,28,0.88)_78%,#06111C_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,17,28,0.85)_0%,rgba(6,17,28,0.25)_60%,transparent_100%)]" />

      {/* Contour lines */}
      <svg aria-hidden="true" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
        {CONTOURS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={i === 1 ? "#F4A300" : "#9FD3EE"}
            strokeOpacity={i === 1 ? 0.35 : 0.14}
            strokeWidth="1"
            strokeDasharray={i === 1 ? "4 6" : undefined}
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.2, delay: 0.6 + i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-end px-5 pb-10 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10 lg:pb-14"
      >
        <motion.div variants={fadeUp} custom={0.05} initial="hidden" animate="show">
          <Breadcrumb className="pp-breadcrumb--on-dark text-white" items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Nepal" }, { label: "Adventure & Offbeat Tours" }]} />
        </motion.div>

        <div className="mt-auto max-w-[860px] pt-16">
          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-[#9FD3EE]/35 bg-[#9FD3EE]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#BFE4F5] backdrop-blur-sm"
          >
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Go Beyond the Ordinary
          </motion.p>
          <motion.p variants={fadeUp} custom={0.32} initial="hidden" animate="show" className={`${SERIF} mt-6 text-[17px] italic text-[#F4D6A0] sm:text-[20px]`}>
            Adventure &amp; Offbeat Tours
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.42}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-2 text-[44px] font-medium leading-[0.98] tracking-[-0.03em] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)] min-[400px]:text-[50px] sm:text-[68px] lg:text-[86px]`}
          >
            Discover Nepal <span className="block text-[#F4A300]">Beyond the Ordinary</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.56} initial="hidden" animate="show" className="mt-6 max-w-[640px] text-[15.5px] leading-7 text-white/85 sm:text-[17.5px] sm:leading-8">
            Escape the usual tourist trails and discover Nepal&apos;s hidden valleys, remote mountain villages, pristine lakes, rugged landscapes, wilderness adventures, and extraordinary cultural experiences with Karvaahh Travels.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:flex-wrap">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Offbeat Tours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#destinations" className={BTN_GHOST}>
              Discover Hidden Destinations
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} custom={0.84} initial="hidden" animate="show" className="mt-7 flex flex-wrap gap-2" aria-label="Ways to explore">
            {badges.map((b) => (
              <li key={b.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[12.5px] font-medium text-white/85 backdrop-blur-sm">
                <PageIcon name={b.icon} className="h-4 w-4 text-[#F4A300]" />
                {b.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Destination postcards */}
        <motion.ul
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1 } } }}
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Featured hidden destinations"
        >
          {postcards.map((p) => (
            <motion.li key={p.href + p.name} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }} className="w-[62vw] max-w-[260px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <Link
                href={p.href}
                className="group flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] p-2 pr-4 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
              >
                <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#123653] to-[#071421]">
                  {p.image.src && <Image src={p.image.src} alt="" fill sizes="64px" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: p.image.objectPosition }} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px] font-semibold">{p.name}</span>
                  <span className="block truncate text-[12px] text-white/60">{p.location}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#F4A300] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <a href="#destinations" className="mx-auto mt-8 hidden flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white md:flex">
          Scroll to explore
          <ChevronDown className={`h-4 w-4 ${reduce ? "" : "animate-bounce"}`} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
