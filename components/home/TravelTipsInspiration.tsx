"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion"; // if you use the new package: "motion/react"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

type TravelArticle = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  location: string;
  readTime: string;
};

const articles: TravelArticle[] = [
  {
    id: "01",
    category: "Nepal Guide",
    title: "Best Time to Visit Nepal",
    description:
      "Discover the ideal seasons for Himalayan adventures, cultural exploration, pilgrimage and scenic escapes across Nepal.",
    image: "/images/home/patan-durbar.jpg",
    alt: "Himalayan mountain landscape in Nepal during the best travel season",
    location: "Nepal",
    readTime: "7 min read",
  },
  {
    id: "02",
    category: "Travel Guide",
    title: "Your Complete Nepal Travel Guide",
    description:
      "Everything you need to know before travelling through Kathmandu, Pokhara, Chitwan, Muktinath and beyond.",
    image: "/images/home/pokhara-view.jpg",
    alt: "Travel experience through Kathmandu and Himalayan destinations in Nepal",
    location: "Nepal",
    readTime: "9 min read",
  },
  {
    id: "03",
    category: "Itinerary",
    title: "India–Nepal Itinerary",
    description:
      "A thoughtfully planned route combining India's heritage with Nepal's mountains, culture and spiritual experiences.",
    image: "/images/home/kashi.jpg",
    alt: "India Nepal travel itinerary featuring cultural and Himalayan destinations",
    location: "India · Nepal",
    readTime: "8 min read",
  },
  {
    id: "04",
    category: "Himalayan Guide",
    title: "What to Pack for the Himalayas",
    description:
      "A practical packing guide covering clothing, footwear, essentials and useful travel accessories for mountain journeys.",
    image: "/images/home/treakking.jpg",
    alt: "Essential travel gear and clothing for a Himalayan journey",
    location: "Himalayas",
    readTime: "6 min read",
  },
  {
    id: "05",
    category: "Culture",
    title: "Places You Should Not Miss in Kathmandu",
    description:
      "Explore ancient temples, heritage squares, local neighbourhoods and experiences that reveal the soul of Kathmandu.",
    image: "/images/home/pashupatinath-history.jpg",
    alt: "Ancient temple and cultural heritage of Kathmandu Nepal",
    location: "Kathmandu",
    readTime: "6 min read",
  },
  {
    id: "06",
    category: "Spiritual Travel",
    title: "A Guide to Muktinath",
    description:
      "Understand the spiritual significance, route options, weather and practical details before visiting Muktinath.",
    image: "/images/home/muktinath-road.jpg",
    alt: "Muktinath temple and Himalayan landscape in Nepal",
    location: "Muktinath",
    readTime: "8 min read",
  },
];

/* 3 per group = 1 big story + 2 small ones, so both groups are always full. */
const GROUP_SIZE = 3;
/* Time each group stays on screen (milliseconds). 7000 = 7 seconds. */
const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL_GROUPS = Math.ceil(articles.length / GROUP_SIZE);

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function TravelTipsInspiration() {
  const reduce = !!useReducedMotion();
  const [[group, dir], setState] = useState<[number, number]>([0, 1]);
  const [hovered, setHovered] = useState(false); // real mouse over gallery
  const [userPaused, setUserPaused] = useState(false); // pause button
  const progress = useMotionValue(0);
  const dragged = useRef(false);

  const visible = useMemo(() => {
    const start = group * GROUP_SIZE;
    return articles.slice(start, start + GROUP_SIZE);
  }, [group]);

  const featured = visible[0];
  const small = visible.slice(1);

  const next = () => {
    setState(([g]) => [(g + 1) % TOTAL_GROUPS, 1]);
    progress.set(0);
  };
  const prev = () => {
    setState(([g]) => [(g - 1 + TOTAL_GROUPS) % TOTAL_GROUPS, -1]);
    progress.set(0);
  };
  const goTo = (i: number) => {
    setState(([g]) => [i, i > g ? 1 : -1]);
    progress.set(0);
  };

  /* AUTO CHANGE: progress fills 0 → 1 over DURATION, then shows the next group. */
  useAnimationFrame((_, delta) => {
    if (hovered || userPaused) return;
    const p = progress.get() + Math.min(delta, 100) / DURATION;
    if (p >= 1) {
      progress.set(0);
      setState(([g]) => [(g + 1) % TOTAL_GROUPS, 1]);
    } else {
      progress.set(p);
    }
  });

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
    window.setTimeout(() => (dragged.current = false), 0);
  };

  if (!featured) return null;

  const wipeIn = dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <section
      id="travel-tips"
      aria-labelledby="travel-tips-heading"
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
              <span className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-[#58718A] sm:text-[11px]">
                Travel tips &amp; inspiration
              </span>
              <span
                aria-hidden="true"
                className="hidden h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/50 sm:flex"
              >
                <BookOpen size={12} strokeWidth={1.5} className="text-[#C9910B]" />
              </span>
            </motion.div>

            <motion.h2
              id="travel-tips-heading"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-serif text-[30px] font-medium leading-none tracking-[-0.04em] text-[#0B2942] sm:text-[44px] lg:text-[52px]"
            >
              Travel better.{" "}
              <span className="relative inline-block text-[#C9910B]">
                Go further.
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
              Practical travel guides, destination inspiration and thoughtful
              advice to help you plan unforgettable journeys across Nepal and
              India.
            </motion.p>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
            className="shrink-0"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border-b border-[#0B2942]/25 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B2942] transition-colors duration-300 hover:border-[#D39A17] hover:text-[#C9910B] sm:text-[11px]"
            >
              <span className="sm:hidden">All stories</span>
              <span className="hidden sm:inline">Explore all stories</span>
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.header>

        {/* ---------- GALLERY (fills remaining height) ---------- */}
        <div
          className="relative min-h-0 flex-1"
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
          onClickCapture={(e) => {
            // a swipe must not open an article
            if (dragged.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={group}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragStart={() => (dragged.current = true)}
              onDragEnd={onDragEnd}
              initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="absolute inset-0 grid touch-pan-y grid-rows-[1.35fr_1fr] gap-2 sm:gap-3 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-1"
            >
              {/* FEATURED */}
              <article className="group relative min-h-0 overflow-hidden bg-[#0B2942]">
                <Link
                  href={`/blog/${slugify(featured.title)}`}
                  aria-label={`Read ${featured.title}`}
                  className="absolute inset-0 z-20"
                />

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
                    priority={group === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </motion.div>

                <div aria-hidden="true" className="absolute inset-0 bg-[#071D2E]/20" />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#061A2A] via-[#061A2A]/55 to-transparent"
                />

                {/* top row */}
                <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between sm:inset-x-6 sm:top-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#0B2942]/30 backdrop-blur-sm">
                      <BookOpen size={13} strokeWidth={1.5} className="text-[#D39A17]" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
                      Featured guide
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-[44px] leading-none text-white/25 sm:text-[62px]"
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
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mb-2 flex items-center gap-3"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E3B74A] sm:text-[11px]">
                      {featured.category}
                    </span>
                    <span className="h-px w-6 bg-[#D39A17]" />
                    <span className="text-[10px] uppercase tracking-[0.14em] text-white/70 sm:text-[11px]">
                      {featured.location}
                    </span>
                  </motion.div>

                  <motion.h3
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="max-w-[650px] font-serif text-[26px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[34px] lg:text-[40px]"
                  >
                    {featured.title}
                  </motion.h3>

                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mt-2 hidden max-w-[590px] text-[13px] leading-5 text-white/80 sm:block"
                  >
                    {featured.description}
                  </motion.p>

                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="mt-3 flex items-center gap-3 sm:mt-4"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[11px]">
                      Read story
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942]">
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-white/65 sm:text-[11px]">
                      <Clock3 size={11} aria-hidden="true" />
                      {featured.readTime}
                    </span>
                  </motion.div>
                </motion.div>

                {/* countdown bar */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[3px] bg-white/15">
                  <motion.div className="h-full origin-left bg-[#D39A17]" style={{ scaleX: progress }} />
                </div>
              </article>

              {/* SMALL ARTICLES */}
              <div className="grid min-h-0 grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1 lg:grid-rows-2">
                {small.map((article, i) => (
                  <motion.article
                    key={article.id}
                    initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: EASE }}
                    whileHover={{ y: -3 }}
                    className="group relative min-h-0 overflow-hidden bg-[#0B2942]"
                  >
                    <Link
                      href={`/blog/${slugify(article.title)}`}
                      aria-label={`Read ${article.title}`}
                      className="absolute inset-0 z-20"
                    />

                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 40vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#061B2C]/25 transition-colors duration-500 group-hover:bg-[#061B2C]/5"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-[#061A2A]/95 via-[#061A2A]/40 to-transparent"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute right-3 top-2 z-10 font-serif text-[20px] text-white/55 sm:top-3 sm:text-[26px]"
                    >
                      {article.id}
                    </span>
                    <span className="absolute left-3 top-3 z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E3B74A] sm:left-4 sm:top-4">
                      {article.category}
                    </span>

                    <div className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-4 sm:bottom-4">
                      <h3 className="line-clamp-3 font-serif text-[16px] leading-[1.1] text-white sm:text-[20px]">
                        {article.title}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/70 sm:text-[11px]">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={10} className="text-[#D39A17]" aria-hidden="true" />
                          {article.location}
                        </span>
                        <span className="hidden items-center gap-1.5 sm:flex">
                          <Clock3 size={10} aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 z-10 hidden h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942] group-hover:opacity-100 lg:flex"
                    >
                      <ArrowRight size={12} />
                    </span>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- CONTROLS ---------- */}
        <div className="flex shrink-0 items-center justify-between border-t border-[#DDD8CE] pt-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_GROUPS }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show travel articles group ${i + 1}`}
                aria-current={group === i ? "true" : undefined}
                className="group flex h-6 items-center outline-none"
              >
                <motion.span
                  className="relative block h-[3px] overflow-hidden rounded-full bg-[#D7D2C9] group-hover:bg-[#B9B3A8]"
                  animate={{ width: group === i ? 44 : 20 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {group === i && (
                    <motion.span
                      className="absolute inset-0 origin-left bg-[#D39A17]"
                      style={{ scaleX: progress }}
                    />
                  )}
                </motion.span>
              </button>
            ))}
            <span className="ml-2 text-[11px] font-semibold tracking-[0.18em] text-[#7B8994]">
              {String(group + 1).padStart(2, "0")} / {String(TOTAL_GROUPS).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="h-px w-7 bg-[#D39A17]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7C8994]">
              Discover · Plan · Travel
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
              aria-label="Previous travel stories"
              whileHover={{ scale: 1.08, x: -2 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5D0C7] bg-white text-[#0B2942] transition-colors hover:border-[#D39A17] hover:text-[#C9910B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              onClick={next}
              aria-label="Next travel stories"
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