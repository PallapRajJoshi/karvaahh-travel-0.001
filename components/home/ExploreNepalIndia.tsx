"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRight, Compass, Mountain } from "lucide-react";

/* Height of top bar + nav. Change this one number if the header changes. */
const HEADER_OFFSET = 179;

/* Used for SEO structured data (JSON-LD). */
const SITE_URL = "https://karvaahh.in";

/*
  Desktop (lg): 6 cols x 2 rows
  [ Kathmandu 2x2 ][ Pokhara ][ Chitwan   ][ Muktinath ][ Delhi ]
  [               ][ Rajasthan][ Varanasi ][ Himalayas (2 wide)  ]

  Tablet (md): 4 cols, Kathmandu 2x2, Rajasthan 2 wide
  Mobile: 2 cols, Kathmandu + Rajasthan full width

  desc modes:
   always  = description always visible
   hover   = hidden on phones, visible tablet, reveal on hover/focus on desktop
   hoverLg = visible on phone/tablet, reveal on hover/focus on desktop
   wideLg  = hidden on phones, visible tablet and desktop
  (Hidden descriptions stay in the HTML, so search engines still read them.)
*/
type DescMode = "always" | "hover" | "hoverLg" | "wideLg";

const reveal =
  "lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-[60px] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[60px] lg:group-focus-within:opacity-100";

const descClasses: Record<DescMode, string> = {
  always: "",
  hover: `hidden sm:block ${reveal}`,
  hoverLg: reveal,
  wideLg: "hidden sm:block",
};

type Destination = {
  name: string;
  country: string;
  description: string;
  image: string;
  href: string;
  span: string;
  desc: DescMode;
  featured?: boolean;
};

const destinations: Destination[] = [
  {
    name: "Kathmandu",
    country: "Nepal",
    description:
      "Ancient temples, living heritage and the cultural heart of Nepal.",
    image: "/images/home/swayambhu-view.jpg",
    href: "/destinations/kathmandu",
    span: "col-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
    desc: "always",
    featured: true,
  },
  {
    name: "Pokhara",
    country: "Nepal",
    description:
      "Lakeside calm, mountain views and unforgettable Himalayan experiences.",
    image: "/images/home/pokhara.jpg",
    href: "/destinations/pokhara",
    span: "",
    desc: "hover",
  },
  {
    name: "Chitwan",
    country: "Nepal",
    description: "Jungle adventures, wildlife and a different side of Nepal.",
    image: "/images/home/chitwan-view.jpg",
    href: "/destinations/chitwan",
    span: "",
    desc: "hover",
  },
  {
    name: "Muktinath",
    country: "Nepal",
    description:
      "A sacred Himalayan destination surrounded by dramatic landscapes.",
    image: "/images/home/muktinath-view.jpg",
    href: "/destinations/muktinath",
    span: "",
    desc: "hover",
  },
  {
    name: "Delhi",
    country: "India",
    description: "History, culture and the vibrant energy of modern India.",
    image: "/images/home/delhi.jpg",
    href: "/destinations/delhi",
    span: "",
    desc: "hover",
  },
  {
    name: "Rajasthan",
    country: "India",
    description: "Royal forts, desert landscapes and timeless heritage.",
    image: "/images/destinations/rajasthan-travel-tour-packages.webp", // ← file must exist in /public
    href: "/destinations/rajasthan",
    span: "col-span-2 md:col-span-2 lg:col-span-1",
    desc: "hoverLg",
  },
  {
    name: "Varanasi",
    country: "India",
    description:
      "Sacred ghats, timeless rituals and the spiritual soul of India.",
    image: "/images/destinations/varanasi-best-places-to-visit.avif", // ← file must exist in /public
    href: "/destinations/varanasi",
    span: "",
    desc: "hover",
  },
  {
    name: "Himalayas",
    country: "Nepal & India",
    description:
      "Mountain landscapes, peaceful valleys and unforgettable escapes.",
    image: "/images/destinations/panchpokhari-sindhupalchok-nepal.jpg", // ← file must exist in /public
    href: "/destinations/himalayan-escapes",
    span: "lg:col-span-2",
    desc: "wideLg",
  },
];

const filters = ["All", "Nepal", "India"] as const;
type Filter = (typeof filters)[number];

/* SEO: structured data so Google understands this is a list of destinations */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Popular destinations in Nepal and India",
  itemListElement: destinations.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristDestination",
      name: d.name,
      description: d.description,
      url: `${SITE_URL}${d.href}`,
      image: `${SITE_URL}${d.image}`,
    },
  })),
};

const ease = [0.22, 1, 0.36, 1] as const;

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const cardVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

/* photo slowly settles in as the card appears */
const imageVariants: Variants = {
  hidden: { scale: 1.18 },
  visible: { scale: 1, transition: { duration: 1.6, ease } },
};

/* Heading, split so each word can slide up from behind a mask */
const headingSegments = [
  { words: ["Places", "worth"], start: 0, gold: false },
  { words: ["going", "further"], start: 2, gold: true },
  { words: ["for."], start: 4, gold: false },
];

/* Clean gradient fallback instead of ugly alt text if an image is missing */
function CardImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#164A74] via-[#0F3557] to-[#0B2942]"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D39A17]/10 blur-2xl" />
        <Mountain
          size={48}
          strokeWidth={1}
          className="text-white/15"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
    />
  );
}

type CardState = "idle" | "filtered" | "others";

function DestinationCard({
  d,
  state,
  reduce,
  onHover,
}: {
  d: Destination;
  state: CardState;
  reduce: boolean;
  onHover: (name: string | null) => void;
}) {
  const dim =
    state === "filtered"
      ? "opacity-40 saturate-0 scale-[0.985]"
      : state === "others"
        ? "brightness-[0.82]"
        : "";

  return (
    <motion.li
      variants={reduce ? cardVariantsReduced : cardVariants}
      onMouseEnter={() => onHover(d.name)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`group relative min-h-0 overflow-hidden bg-[#0B2942] ${d.span}`}
    >
      {/* dim wrapper: lets other cards fade back when one is hovered or filtered out */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${dim}`}
      >
        <Link
          href={d.href}
          className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#D39A17]"
        >
          <motion.div
            variants={reduce ? undefined : imageVariants}
            className="absolute inset-0"
          >
            <CardImage
              src={d.image}
              alt={`${d.name}, ${d.country} travel destination`}
              sizes={
                d.featured
                  ? "(max-width: 768px) 100vw, 34vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
            />
          </motion.div>

          {/* gradients: bottom for titles, top for the pill and arrow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B] via-[#0B2942]/25 to-[#0B2942]/0 opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#061A2B]/50 to-transparent" />

          {/* cursor spotlight */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(230px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.17), transparent 65%)",
            }}
          />

          {/* gold frame fades in on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#D39A17]/0 transition-all duration-500 group-hover:ring-[#D39A17]/70"
          />

          {/* country pill (top left) */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-[#061A2B]/40 py-1.5 pl-2.5 pr-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#E0B044]"
            />
            {d.country}
          </span>

          {/* arrow (top right): frees the whole card width for the text */}
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-[#061A2B]/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942] sm:right-4 sm:top-4"
          >
            <ArrowUpRight size={16} />
          </span>

          {/* title + description (bottom) */}
          <div className="absolute inset-x-0 bottom-0 p-4 pb-5 sm:p-5 sm:pb-6">
            <h3
              className={`font-serif font-medium leading-none text-white ${
                d.featured
                  ? "text-[30px] sm:text-[36px] lg:text-[42px]"
                  : "text-[21px] sm:text-[24px]"
              }`}
            >
              <span className="sr-only">Explore </span>
              {d.name}
            </h3>

            <p
              className={`mt-2 max-w-[400px] text-[12px] leading-[18px] text-white/85 sm:text-[13px] ${descClasses[d.desc]}`}
            >
              {d.description}
            </p>
          </div>

          {/* gold line sweeps along the bottom edge on hover */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D39A17] transition-all duration-700 ease-out group-hover:w-full"
          />
        </Link>
      </div>
    </motion.li>
  );
}

export default function ExploreNepalIndia() {
  const reduceMotion = useReducedMotion();
  const reduce = !!reduceMotion;

  const [filter, setFilter] = useState<Filter>("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const matches = (d: Destination) =>
    filter === "All" || d.country.includes(filter);
  const visibleCount = destinations.filter(matches).length;

  return (
    <section
      id="explore-nepal-india"
      aria-labelledby="explore-nepal-india-heading"
      style={{ ["--hdr" as string]: `${HEADER_OFFSET}px` }}
      /* min-height only: fills the screen when there is room,
         grows when needed, so nothing is ever clipped or overlapped */
      className="relative scroll-mt-[179px] overflow-hidden bg-[#F7F5F0] lg:flex lg:min-h-[calc(100svh-var(--hdr))] lg:flex-col"
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-6 h-72 w-72 rounded-full bg-[#D39A17]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-10 h-60 w-60 rounded-full bg-[#164A74]/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1380px] flex-1 flex-col px-4 py-7 sm:px-8 sm:py-8 lg:justify-center lg:px-10 lg:py-6">
        {/* ============ HEADER ============ */}
        <header className="mb-5 flex shrink-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            {/* eyebrow */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-3 flex items-center gap-3 lg:mb-2.5"
            >
              <motion.span
                aria-hidden="true"
                initial={reduce ? false : { width: 0 }}
                whileInView={reduce ? undefined : { width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="h-px bg-[#C99016]"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61748A] sm:tracking-[0.28em]">
                Explore Nepal & India
              </span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C28D]"
              >
                <motion.span
                  className="flex"
                  animate={reduce ? undefined : { rotate: [0, 20, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Compass
                    size={13}
                    strokeWidth={1.4}
                    className="text-[#C99016]"
                  />
                </motion.span>
              </span>
            </motion.div>

            {/* heading: words slide up from behind a mask.
                Words are spaced with margins (not text spaces) so the
                gaps can never collapse. */}
            <h2
              id="explore-nepal-india-heading"
              aria-label="Places worth going further for."
              className="max-w-[760px] font-serif text-[32px] font-medium leading-[1.08] tracking-[-0.025em] text-[#0B2942] sm:text-[40px] lg:text-[42px] xl:text-[48px]"
            >
              {headingSegments.map((seg) => (
                <span
                  key={seg.start}
                  aria-hidden="true"
                  className="relative mr-[0.26em] inline-block last:mr-0"
                >
                  {seg.words.map((w, wi) => (
                    <span
                      key={w}
                      className={`-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom ${
                        wi < seg.words.length - 1 ? "mr-[0.26em]" : ""
                      }`}
                    >
                      <motion.span
                        initial={reduce ? false : { y: "110%" }}
                        whileInView={reduce ? undefined : { y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + (seg.start + wi) * 0.09,
                          ease,
                        }}
                        className={`inline-block ${
                          seg.gold ? "text-[#C99016]" : ""
                        }`}
                      >
                        {w}
                      </motion.span>
                    </span>
                  ))}

                  {seg.gold && (
                    <motion.span
                      aria-hidden="true"
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={reduce ? undefined : { scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.7, ease }}
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-[#C99016]/40"
                    />
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* intro text + country filter */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="flex flex-col items-start gap-3 lg:max-w-[520px]"
          >
            {/* <p className="max-w-[640px] text-[14px] leading-6 text-[#718196] sm:text-[15px] lg:text-[14px] lg:leading-[22px]">
              From the Himalayan valleys of Nepal to the timeless heritage of
              India, discover destinations chosen for their character, culture
              and unforgettable experiences.
            </p> */}

            <div
              role="group"
              aria-label="Filter destinations by country"
              className="inline-flex rounded-full border border-[#D9C28D]/70 bg-white/60 p-1 backdrop-blur-sm"
            >
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className="relative rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D39A17]"
                  >
                    {active && (
                      <motion.span
                        layoutId="explore-filter-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[#0B2942]"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 34 }
                        }
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        active
                          ? "text-white"
                          : "text-[#0B2942] hover:text-[#C99016]"
                      }`}
                    >
                      {f}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="sr-only" aria-live="polite">
              Showing {visibleCount} destinations
            </p>
          </motion.div>
        </header>

        {/* ============ GRID ============ */}
        <motion.ul
          role="list"
          aria-label="Nepal and India travel destinations"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={gridVariants}
          className="grid grid-cols-2 auto-rows-[175px] gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[220px] lg:min-h-[400px] lg:max-h-[640px] lg:flex-1 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-auto lg:gap-4"
        >
          {destinations.map((d) => {
            const state: CardState = !matches(d)
              ? "filtered"
              : hovered && hovered !== d.name
                ? "others"
                : "idle";

            return (
              <DestinationCard
                key={d.name}
                d={d}
                state={state}
                reduce={reduce}
                onHover={setHovered}
              />
            );
          })}
        </motion.ul>

        {/* ============ BOTTOM CTA + ANIMATED BORDER ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-4 flex shrink-0 items-center justify-between gap-4 pb-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8794A1] sm:tracking-[0.2em]">
            Nepal · India · Beyond the ordinary
          </span>

          <Link
            href="/destinations"
            className="group flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#0B2942]"
          >
            <span className="border-b border-[#0B2942]/20 pb-0.5 transition-colors group-hover:border-[#C99016] group-hover:text-[#C99016]">
              Explore all destinations
            </span>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B2942] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#C99016] group-hover:text-[#0B2942]"
            >
              <ArrowUpRight size={14} />
            </span>
          </Link>

          {/* base line */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-[#DDD8CE]"
          />

          {/* gold line draws in from the left */}
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.3, ease }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[#C99016] via-[#D39A17]/50 to-transparent"
          />

          {/* soft glint travelling along the line */}
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute bottom-0 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#D39A17] to-transparent"
              initial={{ left: "-10%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 3.5,
                delay: 1.8,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}