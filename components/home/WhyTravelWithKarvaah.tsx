"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  Compass,
  Headphones,
  IndianRupee,
  Map,
  Hotel,
  Route,
} from "lucide-react";

/* Height of top bar + nav. Change this one number if the header changes. */
const HEADER_OFFSET = 179;

const benefits = [
  {
    number: "01",
    title: "Local Expertise",
    description:
      "Real knowledge of Nepal & India, from iconic destinations to hidden gems.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Personalized Itineraries",
    description:
      "Journeys designed around your interests, pace, comfort and budget.",
    icon: Map,
  },
  {
    number: "03",
    title: "Reliable Support",
    description:
      "Dedicated assistance before, during and throughout your journey.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description: "Clear, honest pricing with no confusing surprises.",
    icon: IndianRupee,
  },
  {
    number: "05",
    title: "Handpicked Stays",
    description:
      "Comfortable hotels and trusted stays selected for quality and location.",
    icon: Hotel,
  },
  {
    number: "06",
    title: "Hassle-Free Travel",
    description:
      "Transportation, permits, stays and essential arrangements handled smoothly.",
    icon: Route,
  },
];

const trustPoints = [
  "Nepal & India Operations",
  "Local Travel Experts",
  "Curated Experiences",
  "Personalized Journeys",
];

const ease = [0.22, 1, 0.36, 1] as const;

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function WhyTravelWithKarvaah() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-travel-with-karvaah"
      aria-labelledby="why-travel-with-karvaah-heading"
      style={{ ["--hdr" as string]: `${HEADER_OFFSET}px` }}
      /* min-height only: fills the screen when there is room,
         grows when content needs more, so nothing is ever clipped */
      className="relative flex min-h-[calc(100svh-var(--hdr))] scroll-mt-[179px] flex-col overflow-hidden bg-[#F7F5F0] py-6 sm:py-8 lg:py-6"
    >
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#D39A17]/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1380px] flex-1 flex-col px-4 sm:px-8 lg:px-10">
        {/* ============ HEADER ============ */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease }}
          className="mb-4 flex shrink-0 items-center justify-between lg:mb-5"
        >
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              initial={reduce ? false : { width: 0 }}
              whileInView={reduce ? undefined : { width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="h-px bg-[#C99016]"
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#60748A] sm:tracking-[0.3em]">
              Why Travel With Karvaah?
            </span>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C28D]"
            >
              <Compass
                size={13}
                strokeWidth={1.4}
                className="text-[#C99016]"
              />
            </span>
          </div>

          <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[#A1A8AE] sm:block">
            Nepal · India
          </span>
        </motion.header>

        {/* ============ MAIN ============ */}
        <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          {/* ---------- LEFT: NAVY PANEL ---------- */}
          <motion.article
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease }}
            className="relative flex flex-col justify-between gap-8 overflow-hidden bg-[#0B2942] px-6 pb-24 pt-8 sm:px-9 sm:pt-9 lg:px-10 lg:pt-9 xl:px-12 xl:pt-10"
          >
            {/* rotating rings */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 h-[280px] w-[280px] rounded-full border border-[#D39A17]/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {/* orbiting dot */}
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D39A17]" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-[160px] w-[160px] rounded-full border border-white/10"
              animate={
                reduce
                  ? undefined
                  : { scale: [1, 1.1, 1], opacity: [0.35, 0.8, 0.35] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* gold accent bar */}
            <motion.span
              aria-hidden="true"
              initial={reduce ? false : { height: 0 }}
              whileInView={reduce ? undefined : { height: 88 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="absolute left-0 top-8 w-[3px] bg-[#D39A17]"
            />

            {/* top copy */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-[#D39A17]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D7B15F]">
                  The Karvaah Difference
                </span>
              </div>

              <h2
                id="why-travel-with-karvaah-heading"
                className="mt-5 font-serif text-[32px] font-medium leading-[1.06] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[38px] xl:text-[46px]"
              >
                {[
                  "More than a trip.",
                  "A journey thoughtfully",
                  "crafted for you.",
                ].map((line, i) => (
                  <motion.span
                    key={line}
                    initial={reduce ? false : { opacity: 0, y: 22 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.15 + i * 0.12,
                      ease,
                    }}
                    className={`block ${i === 1 ? "text-[#D39A17]" : ""}`}
                  >
                    {line}
                  </motion.span>
                ))}
              </h2>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease }}
                className="mt-5 max-w-[470px] text-[13px] leading-6 text-[#B9C5D0] sm:text-[14px]"
              >
                From your first enquiry to the moment you return home, we take
                care of the details so you can focus on experiencing Nepal and
                India.
              </motion.p>
            </div>

            {/* bottom copy */}
            <div className="relative z-10">
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -14 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease }}
                className="flex items-start gap-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-8 shrink-0 bg-[#D39A17]"
                />
                <p className="font-serif text-[14px] italic leading-5 text-[#E6E0D5]">
                  Local knowledge. Thoughtful planning.
                  <br />
                  Genuine hospitality.
                </p>
              </motion.div>

              <motion.a
                href="/about"
                aria-label="Learn more about Karvaah travel services"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.65, ease }}
                className="group mt-5 inline-flex items-center gap-3 text-[12px] font-semibold text-white"
              >
                <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-[#D39A17]">
                  About Karvaah
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D39A17] text-[#0B2942] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white"
                >
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            </div>

            {/* Himalayan contour: sits in the reserved bottom space,
                never behind the text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] opacity-70"
            >
              <svg
                viewBox="0 0 800 140"
                preserveAspectRatio="none"
                className="h-full w-full"
                fill="none"
              >
                <motion.path
                  d="M0 130 L70 92 L115 105 L175 55 L230 92 L300 35 L355 82 L415 50 L470 92 L535 40 L595 83 L660 32 L735 72 L800 15"
                  stroke="#D39A17"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={
                    reduce ? undefined : { pathLength: 1, opacity: 0.55 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    pathLength: {
                      duration: 1.8,
                      delay: 0.2,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.4 },
                  }}
                />
              </svg>
            </div>
          </motion.article>

          {/* ---------- RIGHT: BENEFITS ---------- */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={listVariants}
            aria-label="Why choose Karvaah for Nepal and India travel"
            className="grid grid-cols-1 gap-px bg-[#E5E1D8] sm:grid-cols-2 lg:grid-rows-3"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.li
                  key={b.number}
                  variants={itemVariants}
                  whileHover={reduce ? undefined : { y: -2 }}
                  className="group relative flex items-center gap-4 overflow-hidden bg-white px-5 py-4 transition-colors duration-300 hover:bg-[#FFFCF4] sm:min-h-[150px] sm:flex-col sm:items-stretch sm:justify-between sm:gap-4 sm:p-6 lg:min-h-[140px] lg:p-5 xl:p-7"
                >
                  {/* number + icon */}
                  <div className="flex shrink-0 items-start justify-between sm:w-full">
                    <span className="hidden text-[10px] font-semibold tracking-[0.25em] text-[#9BA5AE] transition-colors duration-300 group-hover:text-[#C99016] sm:block">
                      {b.number}
                    </span>

                    <motion.span
                      aria-hidden="true"
                      whileHover={
                        reduce ? undefined : { scale: 1.1, rotate: 8 }
                      }
                      transition={{ duration: 0.25 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD9D0] bg-[#FBFAF6] transition-all duration-300 group-hover:border-[#C99016] group-hover:bg-[#FFF3D6] sm:h-10 sm:w-10"
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#0B2942] transition-colors duration-300 group-hover:text-[#C99016]"
                      />
                    </motion.span>
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <h3 className="font-serif text-[18px] font-medium leading-tight text-[#0B2942] transition-transform duration-300 group-hover:translate-x-1 sm:text-[19px] lg:text-[20px]">
                      {b.title}
                    </h3>
                    <p className="mt-1 max-w-[300px] text-[12px] leading-[1.5] text-[#718196] lg:text-[13px]">
                      {b.description}
                    </p>
                  </div>

                  {/* hover underline accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99016] transition-all duration-500 group-hover:w-full"
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* ============ TRUST STRIP (no dots) ============ */}
        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          aria-label="Karvaah travel strengths"
          className="mt-4 grid shrink-0 grid-cols-2 gap-y-1 border-b border-[#DDD8CE] pb-2 sm:grid-cols-4 lg:pb-3"
        >
          {trustPoints.map((point, i) => (
            <li
              key={point}
              className={`py-1.5 ${
                i > 0 ? "sm:border-l sm:border-[#DDD8CE] sm:pl-6" : ""
              }`}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#65768A] sm:text-[10px] sm:tracking-[0.16em]">
                {point}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}