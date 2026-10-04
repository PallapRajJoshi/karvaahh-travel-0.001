"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion"; // if you use the new package: "motion/react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Pause,
  Play,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Review = {
  id: string;
  name: string;
  country: string;
  trip: string;
  destination: string;
  review: string;
  image: string;
  imageAlt: string;
};

const reviews: Review[] = [
  {
    id: "01",
    name: "Paramjit Singh",
    country: "India",
    trip: "Nepal Family Holiday",
    destination: "Kathmandu · Pokhara",
    review:
      "The entire journey was thoughtfully planned from start to finish. Everything felt smooth, comfortable and well organised.",
    image: "/images/guests/success-award-ceremony.jpg",
    imageAlt: "Traveller enjoying a memorable family holiday in Nepal",
  },
  {
    id: "02",
    name: "Sahith Kataru",
    country: "India",
    trip: "Himalayan Experience",
    destination: "Pokhara · Ghandruk",
    review:
      "What stood out was the personal attention. The team understood what we wanted and helped us experience Nepal beyond the usual tourist route.",
    image: "/images/guests/karvaahh-gusts.jpg",
    imageAlt: "Traveller exploring the Himalayan landscape of Nepal",
  },
  {
    id: "03",
    name: "Dr. Shiva Shankari",
    country: "India",
    trip: "Spiritual Journey",
    destination: "Muktinath · Kathmandu",
    review:
      "From transportation and hotels to the pilgrimage arrangements, everything was handled with care. We could simply focus on the journey.",
    image: "/images/guests/success-gallery-photo.jpg",
    imageAlt: "Traveller visiting a spiritual destination in Nepal",
  },
  {
    id: "04",
    name: "Anusree Lakshmi",
    country: "India",
    trip: "Nepal Discovery",
    destination: "Kathmandu · Chitwan",
    review:
      "A beautifully organised trip with the right balance of sightseeing, local experiences and time to simply enjoy Nepal.",
    image: "/images/guests/success-gallery.jpg",
    imageAlt: "Traveller exploring Nepal during a curated holiday",
  },
  {
    id: "05",
    name: "Rasmiya Vs",
    country: "India",
    trip: "Muktinath Pilgrimage",
    destination: "Pokhara · Muktinath",
    review:
      "The arrangements were clear and dependable throughout. Karvaah made a spiritual journey feel comfortable and stress-free.",
    image: "/images/guests/success-award-ceremony.jpg",
    imageAlt: "Traveller experiencing the Himalayan region near Muktinath",
  },
  {
    id: "06",
    name: "Chitra Abhyankar",
    country: "India",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/success.jpg",
    imageAlt: "Traveller experiencing Nepalese culture and landscapes",
  },
  {
    id: "07",
    name: "Arindam Sen",
    country: "India",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/testimonial.jpg",
    imageAlt: "Traveller experiencing Nepalese culture and landscapes",
  },
  {
    id: "08",
    name: "Ukita Dahal",
    country: "Nepal",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/success-celebration.jpg",
    imageAlt: "Traveller experiencing Nepalese culture and landscapes",
  },
];

/* Time each review stays on screen (milliseconds). 6000 = 6 seconds. */
const DURATION = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;
const COUNT = reviews.length;

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = to.toFixed(1);
      return;
    }
    const c = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(1);
      },
    });
    return () => c.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>0.0</span>;
}

function Words({ text, reduce }: { text: string; reduce: boolean }) {
  const words = text.split(" ");
  return (
    <>
      <span aria-hidden="true">&ldquo;</span>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.03, ease: EASE }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
      <span aria-hidden="true">&rdquo;</span>
    </>
  );
}

export default function GuestTestimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [hovered, setHovered] = useState(false); // mouse is over the section
  const [userPaused, setUserPaused] = useState(false); // pause button
  const reduce = !!useReducedMotion();
  const progress = useMotionValue(0);
  const active = reviews[index];

  const goTo = (to: number, direction: number) => {
    setState([(to + COUNT) % COUNT, direction]);
    progress.set(0);
  };
 const next = () => {
  setState(([i]) => [(i + 1) % COUNT, 1]);
  progress.set(0);
};

const prev = () => {
  setState(([i]) => [(i - 1 + COUNT) % COUNT, -1]);
  progress.set(0);
};
  /* AUTO CHANGE: progress fills 0 → 1 over DURATION, then moves to the next review. */
  useAnimationFrame((_, delta) => {
    if (hovered || userPaused) return;
    const p = progress.get() + Math.min(delta, 100) / DURATION; // clamp: ignores background-tab time jumps
    if (p >= 1) {
      progress.set(0);
      setState(([i]) => [(i + 1) % COUNT, 1]);
    } else {
      progress.set(p);
    }
  });

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const wipeIn = dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <section
      id="guest-testimonials"
      aria-labelledby="guest-testimonials-title"
      aria-roledescription="carousel"
      /* 139px = header + navbar height. Change it if yours differs. */
      className="relative flex h-[calc(100svh-139px)] min-h-[560px] flex-col overflow-hidden bg-[#F8F6F1] text-[#0B2942]"
      /* Only a real mouse pauses it. Touch taps and button focus never do. */
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
    >
      {/* soft drifting rings */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#D39A17]/20"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#0B2942]/10"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 flex-col gap-3 px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
        {/* ---------- HEADER ---------- */}
        <motion.header
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex shrink-0 items-end justify-between gap-4"
        >
          <div className="min-w-0">
            <motion.div
              variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-2 flex items-center gap-2.5"
            >
              <motion.span
                aria-hidden="true"
                className="h-px w-8 origin-left bg-[#D39A17] sm:w-10"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                transition={{ duration: 0.7, ease: EASE }}
              />
              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5D748A] sm:text-[11px]">
                Why our guests choose us
              </span>
            </motion.div>

            <motion.h2
              id="guest-testimonials-title"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-serif text-[32px] font-medium leading-none tracking-[-0.04em] sm:text-[44px] lg:text-[52px]"
            >
              Journeys they{" "}
              <span className="relative inline-block text-[#C98F0A]">
                remember.
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-1.5 w-full"
                  fill="none"
                >
                  <motion.path
                    d="M2 8 C 50 2, 120 2, 198 7"
                    stroke="#D39A17"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                    transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  />
                </motion.svg>
              </span>
            </motion.h2>
          </div>

          {/* rating */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-10px_rgba(11,41,66,0.4)] sm:h-[64px] sm:w-[64px]">
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 76 76" aria-hidden="true">
                <circle cx="38" cy="38" r="35" fill="none" stroke="#E6E0D4" strokeWidth="2.5" />
                <motion.circle
                  cx="38"
                  cy="38"
                  r="35"
                  fill="none"
                  stroke="#D39A17"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                  transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
                />
              </svg>
              <span className="font-serif text-[18px] sm:text-[22px]">
                <CountUp to={5} />
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="flex gap-0.5 text-[#D39A17]" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <motion.span
                    key={s}
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: -90 },
                      show: { opacity: 1, scale: 1, rotate: 0 },
                    }}
                    transition={{ delay: 0.5 + s * 0.08, type: "spring", stiffness: 260, damping: 14 }}
                  >
                    <Star size={14} fill="currentColor" strokeWidth={1} aria-hidden="true" />
                  </motion.span>
                ))}
              </div>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B8093]">
                Guest experience
              </span>
            </div>
          </motion.div>
        </motion.header>

        {/* ---------- CARD (fills the remaining height) ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid min-h-0 flex-1 grid-rows-[36%_1fr] overflow-hidden rounded-[4px] border border-[#DCD7CE] bg-white shadow-[0_24px_60px_-34px_rgba(11,41,66,0.5)] lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-1"
        >
          {/* LEFT / TOP: gallery */}
          <div className="relative min-h-0 overflow-hidden bg-[#0B2942]">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={active.id}
                custom={dir}
                initial={reduce ? { opacity: 0 } : { clipPath: wipeIn, scale: 1.15 }}
                animate={
                  reduce
                    ? { opacity: 1, transition: { duration: 0.6 } }
                    : {
                        clipPath: "inset(0 0% 0 0%)",
                        scale: 1,
                        transition: {
                          clipPath: { duration: 0.9, ease: EASE },
                          scale: { duration: 1.6, ease: EASE },
                        },
                      }
                }
                exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority={index === 0}
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[#071E31]/15" />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061A2A]/85 to-transparent sm:h-40"
                />
              </motion.div>
            </AnimatePresence>

            {/* label */}
            <div className="absolute left-3 top-3 z-20 flex items-center gap-2 sm:left-5 sm:top-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-[#0B2942]/30 backdrop-blur-sm">
                <motion.span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#D39A17]"
                  animate={reduce ? undefined : { scale: [1, 1.8, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[11px]">
                Traveller moments
              </span>
            </div>

            {/* rolling counter */}
            <div
              aria-hidden="true"
              className="absolute right-3 top-2 z-20 h-[40px] overflow-hidden font-serif text-[34px] leading-[40px] text-white/35 sm:right-5 sm:h-[52px] sm:text-[46px] sm:leading-[52px]"
            >
              <AnimatePresence mode="popLayout" custom={dir} initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ y: dir > 0 ? 44 : -44, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: dir > 0 ? -44 : 44, opacity: 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  {active.id}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* bottom info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-x-3 bottom-3 z-20 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E3C07A] sm:text-[11px]">
                    {active.country}
                  </p>
                  <p className="mt-0.5 font-serif text-[24px] leading-none text-white sm:text-[34px]">
                    {active.destination.split("·")[0].trim()}
                  </p>
                </div>
                <span className="max-w-[45%] text-right text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 sm:text-[11px]">
                  {active.trip}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* thumbnails (desktop only) */}
            <div className="absolute bottom-[88px] right-5 z-30 hidden gap-2 lg:flex">
              {reviews.map((r, i) => (
                <motion.button
                  key={r.id}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`View traveller story ${i + 1}`}
                  aria-current={index === i ? "true" : undefined}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  animate={{ scale: index === i ? 1.12 : 1, opacity: index === i ? 1 : 0.6 }}
                  className={`relative h-11 w-11 overflow-hidden rounded-[2px] border-2 transition-colors duration-300 ${
                    index === i ? "border-[#D39A17]" : "border-white/40"
                  }`}
                >
                  <Image src={r.image} alt="" fill sizes="44px" className="object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT / BOTTOM: review (swipeable) */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            className="relative flex min-h-0 cursor-grab touch-pan-y flex-col justify-between gap-3 p-4 active:cursor-grabbing sm:p-7 lg:p-10"
          >
            <div className="min-h-0">
              <div className="flex items-center justify-between">
                <p className="font-serif text-[16px] sm:text-[19px]">
                  {active.id}
                  <span className="mx-1.5 text-[#D0CAC0]">/</span>
                  <span className="text-[#98A5B1]">{String(COUNT).padStart(2, "0")}</span>
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#708396] sm:text-[11px]">
                  <CheckCircle2 size={14} className="text-[#C98F0A]" aria-hidden="true" />
                  Verified journey
                </div>
              </div>

              <div className="mt-3 flex gap-0.5 text-[#D39A17] sm:mt-5" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <motion.span
                    key={`${active.id}-${s}`}
                    initial={reduce ? false : { opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + s * 0.06, type: "spring", stiffness: 300, damping: 16 }}
                  >
                    <Star size={15} fill="currentColor" strokeWidth={1} aria-hidden="true" />
                  </motion.span>
                ))}
              </div>

              <blockquote
                key={active.id}
                aria-label={active.review}
                className="mt-3 max-w-[620px] font-serif text-[18px] leading-[1.35] tracking-[-0.015em] sm:mt-5 sm:text-[24px] lg:text-[28px] lg:leading-[1.3]"
              >
                <Words text={active.review} reduce={reduce} />
              </blockquote>
            </div>

            <div className="shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-person`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex items-center justify-between gap-3 border-t border-[#E2DDD4] pt-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B2942] font-serif text-[15px] text-[#E3C07A] sm:h-10 sm:w-10">
                      {active.name.replace("Dr. ", "").charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-semibold">{active.name}</p>
                      <p className="truncate text-[11px] text-[#8191A0] sm:text-[12px]">
                        {active.country} · {active.trip}
                      </p>
                    </div>
                  </div>
                  <p className="hidden text-right text-[12px] font-medium text-[#71869A] sm:block">
                    {active.destination}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* controls */}
              <div className="mt-3 flex items-center justify-between border-t border-[#E2DDD4] pt-3">
                <div className="flex items-center gap-1">
                  {reviews.map((r, i) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => goTo(i, i > index ? 1 : -1)}
                      aria-label={`Show review ${i + 1}`}
                      aria-current={index === i ? "true" : undefined}
                      className="flex h-6 items-center"
                    >
                      <motion.span
                        className="relative block h-[3px] overflow-hidden rounded-full bg-[#D7D1C7]"
                        animate={{ width: index === i ? 28 : 10 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        {index === i && (
                          <motion.span
                            className="absolute inset-0 origin-left bg-[#D39A17]"
                            style={{ scaleX: progress }}
                          />
                        )}
                      </motion.span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    type="button"
                    onClick={() => setUserPaused((v) => !v)}
                    aria-label={userPaused ? "Play auto-change" : "Pause auto-change"}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#60788F] transition-colors hover:text-[#C98F0A]"
                  >
                    {userPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={prev}
                    aria-label="Previous guest review"
                    whileHover={{ scale: 1.08, x: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D3C8] bg-white text-[#0B2942] transition-colors hover:border-[#D39A17] hover:text-[#C98F0A]"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={next}
                    aria-label="Next guest review"
                    whileHover={{ scale: 1.08, x: 2 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-white transition-colors hover:bg-[#C98F0A]"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- FOOTER ROW ---------- */}
        <div className="flex shrink-0 items-center justify-center gap-6 sm:justify-between">
          <div className="hidden items-center gap-6 sm:flex">
            {["Personal attention", "Local travel experts", "Thoughtfully planned"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#D39A17]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#657B90]">
                  {t}
                </span>
              </span>
            ))}
          </div>

          <Link
            href="/reviews"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B2942] transition-colors hover:text-[#C98F0A]"
          >
            <span className="border-b border-[#0B2942]/25 pb-0.5 transition-colors group-hover:border-[#D39A17]">
              Read more guest stories
            </span>
            <ArrowRight
              size={13}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}