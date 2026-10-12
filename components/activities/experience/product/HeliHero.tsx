"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue, type Variants } from "motion/react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { OpenBookingButton, useBooking } from "../booking";
import { longDate } from "../format";
import type { HelicopterTour } from "../product-types";
import { CONTACT } from "../site";
import { BTN_GHOST, BTN_PRIMARY, HelicopterIcon, PageIcon, SERIF } from "../ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const words: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotate: 2 },
  show: (i: number) => ({ opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, delay: 0.45 + i * 0.09, ease: EASE } }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

type HeroTour = Pick<HelicopterTour, "hero" | "breadcrumbLabel" | "title" | "collection">;

/**
 * Layered cinematic hero: sky → drifting clouds → photo (or video) →
 * two ridge silhouettes, each moving at its own scroll speed. The title
 * staggers in word by word and the content fades as the visitor scrolls.
 */
export default function HeliHero({ tour }: { tour: HeroTour }) {
  const { hero } = tour;
  const { booking } = useBooking();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const ridgeBackY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const ridgeFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", "-14%"]);

  const lines = [hero.titleLead, hero.titleAccent].filter(Boolean);
  // Global word index per line, so words stagger continuously across lines.
  const lineOffsets = lines.map((_, li) => lines.slice(0, li).reduce((n, l) => n + l.split(" ").length, 0));

  const strip = [...hero.strip];
  if (booking?.defaults.date) strip.push({ label: booking.sample ? "Sample date" : "Date", value: longDate(booking.defaults.date) });
  const whatsappLabel = hero.whatsappCta ?? "WhatsApp Us";

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[86svh] flex-col overflow-hidden bg-[#071421] text-white md:min-h-[calc(100svh-145px)]"
    >
      {/* Layer 1 — sky */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0E2C4A] via-[#163E5E] to-[#071421]" />

      {/* Layer 3 — photo / video (scales 1.08 → 1 on load) */}
      <motion.div style={reduce ? undefined : { y: photoY }} className="absolute inset-0 -z-20">
        <motion.div
          initial={reduce ? false : { scale: 1.08, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          className="absolute inset-0"
        >
          {hero.image.src ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: hero.image.objectPosition ?? "center 35%" }}
            />
          ) : (
            <IllustratedSky label={hero.image.alt} />
          )}
          {hero.video && !reduce && (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
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
      </motion.div>

      {/* Layer 2 — drifting clouds */}
      {!reduce && (
        <motion.div aria-hidden="true" style={{ y: cloudsY }} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ x: ["-6%", "8%", "-6%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[5%] top-[12%] h-44 w-[60%] rounded-full bg-white/[0.09] blur-3xl"
          />
          <motion.div
            animate={{ x: ["8%", "-8%", "8%"] }}
            transition={{ duration: 52, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-[30%] h-36 w-[45%] rounded-full bg-[#F4D6A0]/[0.08] blur-3xl"
          />
        </motion.div>
      )}

      {/* Readability overlay (fades in) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,33,0.9)_0%,rgba(7,20,33,0.62)_45%,rgba(7,20,33,0.15)_100%)]"
      />

      {/* Layers 4–5 — ridge silhouettes */}
      <motion.svg
        aria-hidden="true"
        style={reduce ? undefined : { y: ridgeBackY }}
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-[22%] w-full text-[#0B2238]/70"
      >
        <path fill="currentColor" d="M0 160 L120 110 L240 140 L380 70 L520 130 L640 95 L780 150 L900 80 L1060 135 L1200 90 L1320 125 L1440 100 L1440 220 L0 220 Z" />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        style={reduce ? undefined : { y: ridgeFrontY }}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-6 -z-10 h-[16%] w-full text-[#071421]"
      >
        <path fill="currentColor" d="M0 120 L160 80 L300 110 L460 60 L620 105 L760 75 L920 115 L1080 70 L1240 110 L1440 85 L1440 160 L0 160 Z" />
      </motion.svg>

      {/* Animated flight path across the sky */}
      {hero.flightPath && <FlightPath reduce={Boolean(reduce)} />}

      {/* Floating elevation badge */}
      {hero.floatingStat && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: EASE }}
          className="heli-motion absolute right-6 top-[24%] z-10 hidden rounded-2xl border border-white/20 bg-[#071421]/45 px-5 py-4 text-white backdrop-blur-md lg:block lg:animate-[heliFloat_7s_ease-in-out_infinite] xl:right-16"
        >
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#F4A300]">{hero.floatingStat.label}</p>
          <p className={`${SERIF} mt-1 text-[30px] leading-none`}>{hero.floatingStat.value}</p>
        </motion.div>
      )}

      {/* Layer 6 — content */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-10 pt-12 sm:px-8 lg:px-10"
      >
        <motion.div variants={fadeUp} custom={0.15} initial="hidden" animate="show">
          <Breadcrumb
            className="pp-breadcrumb--on-dark text-white"
            items={[
              { label: "Home", href: "/" },
              ...(tour.collection === null ? [] : [tour.collection ?? { label: "Helicopter Tours", href: "/activities/helicopter-tours" }]),
              { label: tour.breadcrumbLabel },
            ]}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="show"
          className="mt-6 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#F4A300]/10 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#F4A300] backdrop-blur-sm sm:text-xs sm:tracking-[0.28em]"
        >
          <HelicopterIcon className="h-3.5 w-3.5 shrink-0" />
          {hero.badge}
        </motion.p>

        <h1 id="hero-title" className={`${SERIF} mt-6 text-[44px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[64px] lg:text-[84px] xl:text-[96px]`}>
          {lines.map((line, li) => (
            <span key={line} className={`block ${li === 1 ? "text-[#F4A300]" : ""} ${li === 1 && line.length > 22 ? "mt-2 text-[0.5em] leading-[1.08] tracking-[-0.02em]" : ""}`}>
              {line.split(" ").map((w, wi) => {
                const i = lineOffsets[li] + wi;
                return (
                  <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span variants={words} custom={i} initial="hidden" animate="show" className="inline-block">
                      {w}
                    </motion.span>
                    &nbsp;
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        {hero.subtitle && (
          <motion.p
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-5 max-w-[720px] text-[20px] leading-snug text-[#F4D6A0] sm:text-[26px]`}
          >
            {hero.subtitle}
          </motion.p>
        )}

        <motion.p
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-[660px] text-[15px] leading-7 text-white/80 sm:text-[17px] sm:leading-8"
        >
          {hero.description}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.div variants={fadeUp} custom={1.05} initial="hidden" animate="show">
            <OpenBookingButton className={`group ${BTN_PRIMARY}`}>
              {hero.primaryCta?.label ?? "Check Availability"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </OpenBookingButton>
          </motion.div>
          <motion.div variants={fadeUp} custom={1.15} initial="hidden" animate="show">
            <a href={hero.secondaryCta?.href ?? "#itinerary"} className={BTN_GHOST}>
              {hero.secondaryCta?.label ?? "Explore the Journey"}
            </a>
          </motion.div>
          {whatsappLabel && (
            <motion.div variants={fadeUp} custom={1.25} initial="hidden" animate="show">
              <a
                href={CONTACT.whatsappHref(`Hello Karvaahh, I'm interested in the ${tour.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-[15px] font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                {whatsappLabel}
              </a>
            </motion.div>
          )}
        </div>

        {hero.trust && (
          <motion.ul variants={fadeUp} custom={1.35} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label="Experience highlights">
            {hero.trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-white/80">
                <PageIcon name={t.icon} className="h-4 w-4 text-[#F4A300]" />
                {t.label}
              </li>
            ))}
          </motion.ul>
        )}
      </motion.div>

      {/* Floating info strip */}
      <motion.div
        variants={fadeUp}
        custom={1.45}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24"
      >
        {hero.routeChain?.length ? (
          <RouteChain stops={hero.routeChain} progress={scrollYProgress} reduce={Boolean(reduce)} />
        ) : (
        <dl
          className={`flex snap-x gap-px overflow-x-auto rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md [scrollbar-width:none] lg:grid lg:overflow-visible [&::-webkit-scrollbar]:hidden ${
            strip.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          {strip.slice(0, 5).map((s) => (
            <div key={s.label} className="min-w-[160px] shrink-0 snap-start bg-[#071421]/45 px-5 py-4 first:rounded-l-2xl last:rounded-r-2xl lg:min-w-0">
              <dt className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#F4A300]">{s.label}</dt>
              <dd className="mt-1.5 text-[14.5px] font-medium text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
        )}
        {hero.imageCaption && <p className="mt-2 text-right text-[11px] text-white/50">{hero.imageCaption}</p>}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#booking-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60 transition-colors hover:text-white lg:flex"
      >
        Scroll to explore
        <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}

/** Stand-in hero art (dawn sky, sun, layered peaks and a lake) until a real photo is sourced. */
function IllustratedSky({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="absolute inset-0 bg-gradient-to-b from-[#1B4468] via-[#3F6E8E] to-[#C9A27A]">
      <div className="absolute left-[62%] top-[30%] h-40 w-40 rounded-full bg-[#FFD9A0]/50 blur-2xl" />
      <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[75%] w-full" aria-hidden="true">
        <path d="M0 330 L180 190 L300 260 L470 120 L620 250 L760 160 L930 280 L1100 150 L1270 250 L1440 190 L1440 600 L0 600 Z" fill="#5B7F9C" opacity="0.7" />
        <path d="M0 420 L210 300 L380 380 L560 280 L760 390 L980 300 L1200 390 L1440 320 L1440 600 L0 600 Z" fill="#2E5371" />
        <path d="M0 480 C 300 455, 600 470, 760 462 S 1200 450, 1440 470 L1440 600 L0 600 Z" fill="#7FA7C0" opacity="0.55" />
      </svg>
    </div>
  );
}

/**
 * Sequential route band (e.g. Yamunotri → Gangotri → Kedarnath → Badrinath):
 * the line draws in, stops light up one by one, and each label drifts at its
 * own parallax speed as the visitor scrolls.
 */
function RouteChain({ stops, progress, reduce }: { stops: string[]; progress: MotionValue<number>; reduce: boolean }) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-[#071421]/45 px-5 py-5 backdrop-blur-md sm:px-8">
      <div className="relative">
        <span aria-hidden="true" className="absolute left-[6px] right-[6px] top-[7px] h-px bg-white/20" />
        <motion.span
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.4, delay: 1.5, ease: EASE }}
          className="absolute left-[6px] right-[6px] top-[7px] h-px origin-left bg-[#F4A300]"
        />
        <ol className="relative flex justify-between" aria-label="Route">
          {stops.map((stop, i) => (
            <RouteStop key={stop} stop={stop} index={i} count={stops.length} progress={progress} reduce={reduce} />
          ))}
        </ol>
      </div>
    </div>
  );
}

function RouteStop({ stop, index, count, progress, reduce }: { stop: string; index: number; count: number; progress: MotionValue<number>; reduce: boolean }) {
  const y = useTransform(progress, [0, 1], [0, -index * 6]);
  const delay = 1.6 + (index * 2.2) / Math.max(count - 1, 1);
  const align = index === 0 ? "items-start text-left" : index === count - 1 ? "items-end text-right" : "items-center text-center";
  return (
    <motion.li style={reduce ? undefined : { y }} className={`flex w-0 flex-1 flex-col ${align}`}>
      <motion.span
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay, ease: EASE }}
        className="h-[15px] w-[15px] rounded-full border-2 border-[#F4A300] bg-[#071421] shadow-[0_0_0_4px_rgba(244,163,0,0.15)]"
      />
      <motion.span
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.1, ease: EASE }}
        className="mt-3 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[13px] sm:tracking-[0.3em]"
      >
        {stop}
      </motion.span>
      <span className="sr-only">{index < count - 1 ? ", then" : ""}</span>
    </motion.li>
  );
}

/** A dashed flight path drawn across the sky with an aircraft gliding along it. */
function FlightPath({ reduce }: { reduce: boolean }) {
  const d = "M 980 470 C 1080 400, 1160 350, 1250 300 S 1410 190, 1520 140";
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block">
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
        strokeDasharray="4 10"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.2, delay: 1, ease: "easeInOut" }}
      />
      {!reduce && (
        <g>
          <path d="M0 -6 L14 0 L0 6 L3 0 Z M-2 0 L-8 -5 L-6 0 L-8 5 Z" fill="#F4D6A0" transform="scale(1.6)" />
          <animateMotion dur="14s" begin="0s" repeatCount="indefinite" rotate="auto" path={d} />
        </g>
      )}
    </svg>
  );
}
