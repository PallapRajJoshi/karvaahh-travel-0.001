"use client";

import Image from "next/image";
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
  Camera,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type JourneyStory = {
  id: string;
  category: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  description: string;
};

const journeyStories: JourneyStory[] = [
  {
    id: "01",
    category: "Mountains",
    title: "Where the Himalayas begin.",
    location: "Pokhara · Nepal",
    image: "/images/home/annapurna-view.jpg",
    alt: "Himalayan mountains and Phewa Lake in Pokhara Nepal",
    description:
      "Lakeside calm, mountain views and unforgettable Himalayan experiences.",
  },
  {
    id: "02",
    category: "Culture",
    title: "Stories carved in stone.",
    location: "Kathmandu · Nepal",
    image: "/images/home/kathmandu-view.jpg",
    alt: "Ancient temple and cultural heritage in Kathmandu Nepal",
    description:
      "Ancient temples, living heritage and the cultural heart of Nepal.",
  },
  {
    id: "03",
    category: "Villages",
    title: "Life at a slower pace.",
    location: "Ghandruk · Nepal",
    image: "/images/home/view-from-ghandruk.jpg",
    alt: "Traditional Himalayan village of Ghandruk Nepal",
    description:
      "Mountain villages, local hospitality and beautiful Himalayan landscapes.",
  },
  {
    id: "04",
    category: "Himalayas",
    title: "Glaciers, up close.",
    location: "Manang · Nepal",
    image: "/images/home/chitwan-wild-life.jpg",
    alt: "Wildlife and jungle safari experience in Chitwan Nepal",
    description:
      "Jungle adventures, wildlife and a completely different side of Nepal.",
  },
  {
    id: "05",
    category: "Spiritual",
    title: "Journeys with meaning.",
    location: "Chardham Yatra · India",
    image: "/images/home/muktinath.jpg",
    alt: "Muktinath pilgrimage and Himalayan landscape in Nepal",
    description:
      "A sacred Himalayan destination surrounded by dramatic landscapes.",
  },
  {
    id: "06",
    category: "Beach & Nightlife",
    title: "A city of timeless stories.",
    location: "Goa · India",
    image: "/images/home/delhi-old-view.jpg",
    alt: "Historic architecture and heritage of Delhi India",
    description:
      "A vibrant meeting point of history, culture, food and modern India.",
  },
  {
    id: "07",
    category: "Royal India",
    title: "Where history feels alive.",
    location: "Rajasthan · India",
    image: "/images/home/kolry-india.jpg",
    alt: "Royal palace and heritage architecture in Rajasthan India",
    description:
      "Royal forts, colourful markets and unforgettable cultural experiences.",
  },
  {
    id: "08",
    category: "Spiritual",
    title: "Where faith meets the river.",
    location: "Varanasi · India",
    image: "/images/home/varanasi.jpg",
    alt: "Ganges river ghats and spiritual experience in Varanasi India",
    description:
      "Sacred ghats, timeless rituals and one of India's most powerful experiences.",
  },
];

const VISIBLE_COUNT = 4;
/* Time each group of 4 stays on screen (milliseconds). 6000 = 6 seconds. */
const DURATION = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_PAGES = Math.ceil(journeyStories.length / VISIBLE_COUNT);

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = String(to).padStart(2, "0");
      return;
    }
    const c = animate(0, to, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = String(Math.round(v)).padStart(2, "0");
      },
    });
    return () => c.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>00</span>;
}

export default function RealJourneys() {
  const reduce = !!useReducedMotion();
  const [[page, dir], setState] = useState<[number, number]>([0, 1]);
  const [hovered, setHovered] = useState(false); // real mouse over gallery
  const [userPaused, setUserPaused] = useState(false); // pause button
  const progress = useMotionValue(0);

  const visibleStories = useMemo(() => {
    const start = page * VISIBLE_COUNT;
    return journeyStories.slice(start, start + VISIBLE_COUNT);
  }, [page]);

  const featured = visibleStories[0];
  const small = visibleStories.slice(1);

  const next = () => {
    setState(([p]) => [(p + 1) % TOTAL_PAGES, 1]);
    progress.set(0);
  };
  const prev = () => {
    setState(([p]) => [(p - 1 + TOTAL_PAGES) % TOTAL_PAGES, -1]);
    progress.set(0);
  };
  const goTo = (i: number) => {
    setState(([p]) => [i, i > p ? 1 : -1]);
    progress.set(0);
  };

  /* AUTO CHANGE: progress fills 0 → 1 over DURATION, then shows the next group. */
  useAnimationFrame((_, delta) => {
    if (hovered || userPaused) return;
    const p = progress.get() + Math.min(delta, 100) / DURATION;
    if (p >= 1) {
      progress.set(0);
      setState(([pg]) => [(pg + 1) % TOTAL_PAGES, 1]);
    } else {
      progress.set(p);
    }
  });

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  if (!featured) return null;

  const wipeIn = dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <section
      id="real-journeys"
      aria-labelledby="real-journeys-heading"
      aria-roledescription="carousel"
      /* 139px = header + navbar height. Change it if yours differs. */
      className="relative flex h-[calc(100svh-139px)] min-h-[560px] flex-col overflow-hidden bg-[#F8F6F1]"
    >
      {/* drifting background rings */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#D39A17]/20"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 h-[420px] w-[420px] rounded-full border border-[#0B2942]/10"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 flex-col gap-3 px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
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
              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-[#56718A] sm:text-[11px]">
                Nepal &amp; India travel moments
              </span>
              <span
                aria-hidden="true"
                className="hidden h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/50 sm:flex"
              >
                <Camera size={12} strokeWidth={1.5} className="text-[#C9910B]" />
              </span>
            </motion.div>

            <motion.h2
              id="real-journeys-heading"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-serif text-[30px] font-medium leading-none tracking-[-0.04em] text-[#0B2942] sm:text-[44px] lg:text-[52px]"
            >
              Real journeys.{" "}
              <span className="relative inline-block text-[#C9910B]">
                Real moments.
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

            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-2 hidden max-w-[720px] text-[13px] leading-5 text-[#60788F] md:block"
            >
              Explore unforgettable travel experiences across Nepal and India,
              from Himalayan landscapes and sacred temples to wildlife,
              heritage and local culture.
            </motion.p>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
            className="hidden shrink-0 items-center gap-4 sm:flex"
          >
            <div className="text-right">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C8993]">
                Destinations
              </div>
              <div className="font-serif text-[34px] leading-none text-[#0B2942]">
                <CountUp to={journeyStories.length} />
              </div>
            </div>
            <div className="h-10 w-px bg-[#D8D3CA]" />
            <div className="text-[10px] font-semibold uppercase leading-4 tracking-[0.18em] text-[#7C8993]">
              Nepal
              <br />
              India
            </div>
          </motion.div>
        </motion.header>

        {/* ---------- GALLERY (fills remaining height) ---------- */}
        <div
          className="relative min-h-0 flex-1"
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
        >
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.div
              key={page}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={onDragEnd}
              initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="absolute inset-0 grid touch-pan-y grid-rows-[1.35fr_1fr] gap-2 sm:gap-3 lg:grid-cols-[1.38fr_1fr] lg:grid-rows-1"
            >
              {/* FEATURED */}
              <div className="group relative min-h-0 overflow-hidden bg-[#0B2942]">
                <motion.div
                  key={featured.id}
                  initial={reduce ? false : { clipPath: wipeIn, scale: 1.15 }}
                  animate={{
                    clipPath: "inset(0 0% 0 0%)",
                    scale: 1,
                    transition: {
                      clipPath: { duration: 0.9, ease: EASE },
                      scale: { duration: 1.8, ease: EASE },
                    },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featured.image}
                    alt={featured.alt}
                    fill
                    priority={page === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </motion.div>

                <div aria-hidden="true" className="absolute inset-0 bg-[#061B2C]/15" />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#061B2C]/95 via-[#061B2C]/35 to-transparent"
                />

                {/* top row */}
                <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between sm:inset-x-6 sm:top-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#0B2942]/30 backdrop-blur-sm sm:h-9 sm:w-9">
                      <MapPin size={13} strokeWidth={1.5} className="text-[#D39A17]" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
                      {featured.category}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-[44px] leading-none text-white/25 sm:text-[64px]"
                  >
                    {featured.id}
                  </span>
                </div>

                {/* text */}
                <motion.div
                  key={`${featured.id}-text`}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
                  className="absolute inset-x-4 bottom-5 z-10 sm:inset-x-6 sm:bottom-7"
                >
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E3B74A] sm:text-[11px]"
                  >
                    {featured.location}
                  </motion.p>
                  <motion.h3
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="max-w-[650px] font-serif text-[26px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[36px] lg:text-[42px]"
                  >
                    {featured.title}
                  </motion.h3>
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mt-2 hidden max-w-[560px] text-[13px] leading-5 text-white/80 sm:block"
                  >
                    {featured.description}
                  </motion.p>
                </motion.div>

                {/* progress bar (this is the countdown) */}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-30 h-[3px] bg-white/15">
                  <motion.div
                    className="h-full origin-left bg-[#D39A17]"
                    style={{ scaleX: progress }}
                  />
                </div>
              </div>

              {/* SMALL CARDS */}
              <div className="grid min-h-0 grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-2 lg:grid-rows-2">
                {small.map((story, i) => (
                  <motion.article
                    key={story.id}
                    initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: EASE }}
                    whileHover={{ y: -3 }}
                    className={`group relative min-h-0 overflow-hidden bg-[#0B2942] ${
                      i === 0 ? "lg:col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      sizes="(max-width: 640px) 34vw, (max-width: 1024px) 34vw, 40vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#061B2C]/20 transition-colors duration-500 group-hover:bg-[#061B2C]/5"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#061B2C]/95 via-[#061B2C]/30 to-transparent"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute right-2.5 top-2 z-10 font-serif text-[18px] text-white/60 sm:right-3 sm:top-3 sm:text-[24px]"
                    >
                      {story.id}
                    </span>
                    <span className="absolute left-2.5 top-2.5 z-10 hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E3B74A] sm:left-4 sm:top-4 sm:block">
                      {story.category}
                    </span>

                    <div className="absolute inset-x-2.5 bottom-2.5 z-10 sm:inset-x-4 sm:bottom-4">
                      <h3 className="font-serif text-[15px] leading-tight text-white sm:text-[20px]">
                        {story.location.split("·")[0].trim()}
                      </h3>
                      <p className="mt-1 hidden max-w-[260px] text-[12px] leading-4 text-white/75 lg:block">
                        {story.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 z-10 hidden h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-white group-hover:text-[#0B2942] group-hover:opacity-100 lg:flex"
                    >
                      <ArrowRight size={13} />
                    </span>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- NAV BAR ---------- */}
        <div className="flex shrink-0 items-center justify-between border-t border-[#DDD8CE] pt-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show destination group ${i + 1}`}
                aria-current={page === i ? "true" : undefined}
                className="group flex h-6 items-center outline-none"
              >
                <motion.span
                  className="relative block h-[3px] overflow-hidden rounded-full bg-[#D7D2C9] group-hover:bg-[#B9B3A8]"
                  animate={{ width: page === i ? 44 : 20 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {page === i && (
                    <motion.span
                      className="absolute inset-0 origin-left bg-[#D39A17]"
                      style={{ scaleX: progress }}
                    />
                  )}
                </motion.span>
              </button>
            ))}
            <span className="ml-2 text-[11px] font-semibold tracking-[0.18em] text-[#7B8994]">
              {String(page + 1).padStart(2, "0")} / {String(TOTAL_PAGES).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="h-px w-7 bg-[#D39A17]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7C8994]">
              Explore · Experience · Remember
            </span>
            <span className="h-px w-7 bg-[#D39A17]" />
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={() => setUserPaused((v) => !v)}
              aria-label={userPaused ? "Play auto-change" : "Pause auto-change"}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#60788F] transition-colors hover:text-[#C9910B]"
            >
              {userPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            </motion.button>
            <motion.button
              type="button"
              onClick={prev}
              aria-label="Previous travel destinations"
              whileHover={{ scale: 1.08, x: -2 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5D0C7] bg-white text-[#0B2942] transition-colors hover:border-[#D39A17] hover:text-[#C9910B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              onClick={next}
              aria-label="Next travel destinations"
              whileHover={{ scale: 1.08, x: 2 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-white transition-colors hover:bg-[#C9910B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}