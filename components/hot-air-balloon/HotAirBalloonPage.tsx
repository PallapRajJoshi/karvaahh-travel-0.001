"use client";

// components/hot-air-balloon/HotAirBalloonPage.tsx
//
// Availability-enquiry page for Hot Air Balloon (Adventure).
// NOTE: swap <Link>/<button> below for your existing <Button> / <CtaLink>
// components if this project already has them — kept generic here so the
// file drops in without assuming your design-system API.

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Info,
  ChevronDown,
  Bell,
  Search,
  Wind,
  Calendar,
  ShieldCheck,
} from "lucide-react";

import {
  hero,
  availabilityNotice,
  destinationsSection,
  destinations,
  statusStyles,
  howItWorks,
  faqs,
  finalCta,
} from "@/data/hot-air-balloon";

const ENQUIRY_HREF = "/enquiry?activity=hot-air-balloon";
const NOTIFY_HREF = "/notify-me?activity=hot-air-balloon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HotAirBalloonPage() {
  return (
    <main className="bg-white dark:bg-stone-950">
      <Hero />
      <AvailabilityNotice />
      <Destinations />
      <HowItWorks />
      <Faqs />
      <FinalCta />
    </main>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
      <Image
        src={hero.image}
        alt="Hot air balloon drifting above the Himalayan foothills at sunrise, Nepal"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Cinematic scrim for legible white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:px-8 sm:pb-20">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] text-amber-300"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {hero.h1}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg font-medium text-white/90 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
        >
          {hero.supportingText}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          {hero.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href={ENQUIRY_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {hero.primaryCta}
          </Link>
          <Link
            href={NOTIFY_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
            {hero.secondaryCta}
          </Link>
        </motion.div>

        {/* Location line */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-center gap-2 text-sm text-white/70"
        >
          <MapPin className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <span>{hero.locationLine}</span>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------- Availability Notice --------------------------- */

function AvailabilityNotice() {
  return (
    <section className="border-b border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-start sm:px-8"
      >
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <Info className="h-5 w-5" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50">
            {availabilityNotice.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
            {availabilityNotice.paragraph1}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
            {availabilityNotice.paragraph2}
          </p>

          <Link
            href={ENQUIRY_HREF}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {availabilityNotice.cta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------ Destinations ------------------------------ */

function Destinations() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 sm:text-4xl">
          {destinationsSection.heading}
        </h2>
        <p className="mt-3 text-base text-stone-600 dark:text-stone-400">
          {destinationsSection.subheading}
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {destinations.map((dest, i) => {
          const status = statusStyles[dest.status];
          return (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`Hot air balloon experience near ${dest.name}, Nepal`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">
                    {dest.name}
                  </h3>
                  <span className="flex items-center gap-1 text-xs font-medium text-stone-500 dark:text-stone-400">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {dest.province}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {dest.description}
                </p>

                <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-stone-500 dark:text-stone-500">
                  <Info className="mt-0.5 h-3.5 w-3.5 flex-none" aria-hidden="true" />
                  {dest.availabilityStatement}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-stone-400">
                      {dest.indicativePrice ? "Indicative price" : "Pricing"}
                    </p>
                    <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                      {dest.indicativePrice ?? "On enquiry"}
                    </p>
                  </div>

                  <Link
                    href={`${ENQUIRY_HREF}&destination=${dest.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-800 transition hover:bg-stone-900 hover:text-white dark:border-stone-700 dark:text-stone-200 dark:hover:bg-white dark:hover:text-stone-900"
                  >
                    {dest.ctaLabel}
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------ How It Works ------------------------------ */

const stepIcons = [Search, ShieldCheck, Calendar, Wind];

function HowItWorks() {
  return (
    <section className="bg-stone-50 py-20 dark:bg-stone-900/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-400">
            {howItWorks.subheading}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold text-stone-400">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-base font-bold text-stone-900 dark:text-stone-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-stone-900 dark:text-stone-50 sm:text-4xl"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="mt-8 divide-y divide-stone-200 rounded-2xl border border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="px-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm font-semibold text-stone-900 dark:text-stone-50 sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 flex-none text-stone-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA -------------------------------- */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),_transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-2xl px-6 text-center sm:px-8"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-base text-white/70">{finalCta.text}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={ENQUIRY_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {finalCta.primaryCta}
          </Link>
          <Link
            href={NOTIFY_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
            {finalCta.secondaryCta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
