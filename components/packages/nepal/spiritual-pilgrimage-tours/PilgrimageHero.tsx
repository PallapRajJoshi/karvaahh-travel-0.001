"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTACT } from "@/components/activities/experience/site";
import { BTN_GHOST, BTN_PRIMARY, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { IconName, PageImage } from "@/components/activities/experience/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

type CollageItem = { image: PageImage; caption: string };

/* Collage frames (desktop), as % of the collage box. */
const FRAMES = [
  { left: 30, top: 0, w: 46, rotate: -3, z: 3 },
  { left: 0, top: 22, w: 38, rotate: 4, z: 2 },
  { left: 62, top: 30, w: 38, rotate: 3, z: 2 },
  { left: 8, top: 62, w: 40, rotate: -2, z: 4 },
  { left: 52, top: 66, w: 42, rotate: -4, z: 3 },
];

const PARTICLES = [8, 19, 31, 44, 57, 66, 78, 89];

/**
 * Layered sacred-Himalaya hero: background photo with slow parallax, a
 * slowly turning mandala, drifting light particles and a collage of the
 * great pilgrimage sites linked by an animated route line.
 */
export default function PilgrimageHero({
  background,
  collage,
  badges,
}: {
  background: PageImage;
  collage: CollageItem[];
  badges: { icon: IconName; label: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const collageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      {/* Background */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20">
        <motion.div initial={reduce ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: EASE }} className="absolute inset-0">
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
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.95)_0%,rgba(7,20,33,0.82)_45%,rgba(40,18,14,0.55)_100%)]" />

      {/* Mandala */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[620px] w-[620px] text-[#F4A300]/[0.07]"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx="90" ry="28" fill="none" stroke="currentColor" strokeWidth="0.6" transform={`rotate(${i * 15} 100 100)`} />
        ))}
        {[20, 45, 70, 92].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.5" />
        ))}
      </motion.svg>

      {/* Light particles */}
      {!reduce && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {PARTICLES.map((left, i) => (
            <motion.span
              key={left}
              className="absolute h-1 w-1 rounded-full bg-[#F4D6A0]"
              style={{ left: `${left}%`, top: `${25 + ((i * 23) % 55)}%` }}
              animate={{ y: [0, -24, 0], opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            />
          ))}
        </div>
      )}

      <div className="mx-auto grid min-h-[calc(100svh-101px)] w-full max-w-[1400px] items-center gap-12 px-5 py-14 sm:px-8 md:min-h-[calc(100svh-145px)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="min-w-0">
          <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Nepal" }, { label: "Spiritual & Pilgrimage Tours" }]}
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="show"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Karvaahh • Spiritual Nepal
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-6 text-[42px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[60px] lg:text-[72px]`}
          >
            Discover the <span className="text-[#F4A300]">Sacred Soul</span> of Nepal
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.55} initial="hidden" animate="show" className="mt-6 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Journey through ancient temples, sacred lakes, holy monasteries, Shakti Peeths, Buddhist heritage sites and Himalayan pilgrimage destinations with Karvaahh.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className={`group ${BTN_PRIMARY}`}>
              Explore Pilgrimage Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#builder" className={BTN_GHOST}>
              Customize My Yatra
            </a>
          </motion.div>
          <motion.div variants={fadeUp} custom={0.85} initial="hidden" animate="show" className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={CONTACT.whatsappHref("Hello Karvaahh, I'd like to plan a pilgrimage in Nepal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 text-[15px] font-semibold text-white/90 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
              WhatsApp Us
            </a>
            <OpenBookingButton className="py-2 text-[15px] font-semibold text-[#F4D6A0] underline-offset-4 hover:underline">Plan My Spiritual Journey</OpenBookingButton>
          </motion.div>

          <motion.ul variants={fadeUp} custom={1} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-2" aria-label="What we offer">
            {badges.map((b) => (
              <li key={b.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[12.5px] font-medium text-white/85 backdrop-blur-sm">
                <PageIcon name={b.icon} className="h-4 w-4 text-[#F4A300]" />
                {b.label}
              </li>
            ))}
          </motion.ul>

          {/* Mobile collage strip */}
          <div className="-mx-5 mt-10 flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:hidden [&::-webkit-scrollbar]:hidden">
            {collage.map((c) => (
              <figure key={c.caption} className="relative h-28 w-40 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/20">
                {c.image.src && <Image src={c.image.src} alt={c.image.alt} fill sizes="160px" className="object-cover" />}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-1.5 pt-4 text-[11.5px] font-semibold">{c.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop collage */}
        <motion.div style={reduce ? undefined : { y: collageY }} className="relative hidden aspect-[1/1.02] w-full lg:block">
          <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <motion.path
              d="M 53 18 C 30 25, 18 35, 19 42 S 70 40, 81 50 S 35 72, 28 80 S 60 90, 73 86"
              fill="none"
              stroke="#F4A300"
              strokeOpacity="0.55"
              strokeWidth="0.35"
              strokeDasharray="1.2 1.4"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
            />
          </svg>
          {collage.slice(0, FRAMES.length).map((c, i) => {
            const f = FRAMES[i];
            return (
              <motion.figure
                key={c.caption}
                initial={reduce ? false : { opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: f.rotate }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: EASE }}
                whileHover={reduce ? undefined : { scale: 1.04, rotate: 0, zIndex: 10 }}
                className="absolute rounded-[18px] bg-white p-1.5 pb-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]"
                style={{ left: `${f.left}%`, top: `${f.top}%`, width: `${f.w}%`, zIndex: f.z }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[13px]">
                  {c.image.src && <Image src={c.image.src} alt={c.image.alt} fill sizes="22vw" className="object-cover" style={{ objectPosition: c.image.objectPosition }} />}
                </div>
                <figcaption className="mt-1.5 px-1 text-[12px] font-semibold text-[#0B2942]">{c.caption}</figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
