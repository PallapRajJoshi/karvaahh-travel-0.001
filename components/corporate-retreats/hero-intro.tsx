"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero, intro, seo, sectionIds } from "@/content/corporate-retreats";
import { CtaLink, EASE, FloatingLabel, Photo, Reveal, Section } from "./ui";

/* ------------------------------------------------------------------ */

export function CorporateHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);

  return (
    <header ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#123B5D] text-white">
      {/* cinematic background: parallax wrapper > slow zoom > image */}
      <motion.div aria-hidden={hero.image.src ? undefined : true} style={{ y }} className="absolute inset-x-0 -top-[8%] bottom-[-8%] -z-20">
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1 }}
          animate={reduce ? undefined : { scale: 1.12 }}
          transition={{ duration: 26, ease: "linear" }}
        >
          <Photo image={hero.image} className="h-full w-full" sizes="100vw" priority />
        </motion.div>
      </motion.div>
      {/* readable-text gradient, heavier at the bottom where the copy sits */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2740] via-[#123B5D]/55 to-[#123B5D]/10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2740]/70 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-40 sm:px-8 md:pb-32 lg:px-12">
        <motion.p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8A64A] sm:text-sm"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.headingLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "text-[#D8A64A]" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 text-xl font-medium tracking-wide text-white/90 sm:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        >
          {hero.subheading}
        </motion.p>
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
        >
          <CtaLink target={sectionIds.inquiry} variant="gold">{hero.primaryCta}</CtaLink>
          <CtaLink target={sectionIds.categories} variant="outlineLight">{hero.secondaryCta}</CtaLink>
          <CtaLink target={sectionIds.inquiry} variant="linkLight" className="sm:ml-2">{hero.tertiaryCta}</CtaLink>
        </motion.div>
      </div>

      {/* floating labels (decorative) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <FloatingLabel className="right-[10%] top-[26%]">{hero.floatingLabels[0]}</FloatingLabel>
        <FloatingLabel className="right-[24%] top-[42%]" delay={1.2}>{hero.floatingLabels[1]}</FloatingLabel>
        <FloatingLabel className="right-[7%] top-[56%]" delay={2.4}>{hero.floatingLabels[2]}</FloatingLabel>
        <FloatingLabel className="right-[20%] top-[70%]" delay={3.6}>{hero.floatingLabels[3]}</FloatingLabel>
      </div>

      {/* scroll indicator */}
      <a
        href={`#${sectionIds.intro}`}
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 hover:text-white sm:flex"
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-white/25">
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-[#D8A64A]"
            animate={reduce ? undefined : { y: ["-100%", "260%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </header>
  );
}

/* ------------------------------------------------------------------ */

export function Breadcrumbs() {
  const last = seo.breadcrumbs.length - 1;
  return (
    <nav aria-label="Breadcrumb" className="border-b border-[#123B5D]/10 bg-[#F8F6F0]">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-5 py-4 text-sm text-[#252B32]/70 sm:px-8 lg:px-12">
        {seo.breadcrumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i === last ? (
              <span aria-current="page" className="font-medium text-[#123B5D]">{c.name}</span>
            ) : (
              <>
                {/* swap for the existing Karvaahh breadcrumb component if one exists */}
                <Link href={c.href} className="underline-offset-4 hover:text-[#123B5D] hover:underline">{c.name}</Link>
                <span aria-hidden="true">→</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */

const collagePos = [
  "left-[8%] top-0 h-[54%] w-[62%]",
  "right-0 top-[8%] h-[36%] w-[32%]",
  "left-0 top-[47%] h-[30%] w-[36%]",
  "bottom-0 left-[30%] h-[34%] w-[36%]",
  "bottom-[6%] right-0 h-[40%] w-[28%]",
];
const badgePos = ["left-[2%] top-[8%]", "right-[4%] top-[50%]", "left-[3%] bottom-[10%]", "bottom-[2%] right-[26%]"];

export function CorporateIntro() {
  const reduce = useReducedMotion();
  return (
    <Section id={sectionIds.intro} tone="ivory" labelledBy="intro-h">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <h2 id="intro-h" className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {intro.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-[1.85] text-[#252B32]/80 md:text-[17px]">{intro.highlight}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 border-l-2 border-[#D8A64A] pl-4 text-lg font-medium text-[#123B5D]">{intro.supporting}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <CtaLink target={sectionIds.inquiry} variant="solidBlue">{intro.cta}</CtaLink>
          </Reveal>
        </div>

        <div className="relative h-[440px] sm:h-[560px]">
          {intro.collage.map((image, i) => (
            <motion.div
              key={image.label}
              className={`absolute overflow-hidden rounded-3xl shadow-[0_18px_50px_-12px_rgba(18,59,93,0.45)] ring-4 ring-[#F8F6F0] ${collagePos[i]}`}
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
            >
              <Photo image={image} className="h-full w-full" sizes="(min-width: 1024px) 30vw, 60vw" />
            </motion.div>
          ))}
          {intro.badges.map((b, i) => (
            <motion.span
              key={b}
              aria-hidden="true"
              className={`absolute z-10 rounded-full bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#123B5D] shadow-lg sm:text-[11px] ${badgePos[i]}`}
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
