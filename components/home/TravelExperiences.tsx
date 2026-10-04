"use client";

import { useState, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  Mountain,
  Sparkles,
  Landmark,
  Trees,
  Crown,
  Users,
} from "lucide-react";

/* Height of top bar + nav. Change this one number if the header changes. */
const HEADER_OFFSET = 179;

/* Used for SEO structured data (JSON-LD). */
const SITE_URL = "https://karvaahh.in";

type Experience = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: ElementType;
  /* grid placement per breakpoint */
  span: string;
  size: "hero" | "wide" | "narrow";
};

/*
  Desktop (lg, 12 cols x 2 rows):
  ┌──────────────────┬───────────┬───────────┐
  │                  │ Spiritual │ Cultural  │
  │   HIMALAYAN      ├─────┬─────┼─────┬─────┤
  │   ADVENTURES     │Wild │Lux. │Family     │
  └──────────────────┴─────┴─────┴───────────┘
  Tablet: 2 cols (hero full width, Family full width)
  Mobile: 1 col
*/
const experiences: Experience[] = [
  {
    number: "01",
    title: "Himalayan Adventures",
    description:
      "Trek through dramatic landscapes, mountain villages and unforgettable Himalayan trails.",
    image: "/images/home/adventure.jpg",
    href: "/experiences/himalayan-adventures",
    icon: Mountain,
    span: "row-span-2 sm:col-span-2 lg:col-span-6",
    size: "hero",
  },
  {
    number: "02",
    title: "Spiritual Journeys",
    description:
      "Sacred temples, pilgrimage routes and meaningful journeys across Nepal and India.",
    image: "/images/home/pashupatinath-aarati.jpg",
    href: "/experiences/spiritual-journeys",
    icon: Sparkles,
    span: "lg:col-span-3",
    size: "wide",
  },
  {
    number: "03",
    title: "Cultural Experiences",
    description:
      "Discover living heritage, local traditions, architecture and authentic culture.",
    image: "/images/home/culture-kathmandu.jpg",
    href: "/experiences/cultural-experiences",
    icon: Landmark,
    span: "lg:col-span-3",
    size: "wide",
  },
  {
    number: "04",
    title: "Helicopter Experiences",
    description:
      "Discover jungles, wildlife, national parks and beautiful natural landscapes.",
    image: "/images/home/wild-life-tiger.jpg",
    href: "/experiences/wildlife-nature",
    icon: Trees,
    span: "lg:col-span-2",
    size: "narrow",
  },
  {
    number: "05",
    title: "Luxury Escapes",
    description:
      "Refined stays, private experiences and comfortable journeys designed around you.",
    image: "/images/home/mountain-hotels.jpg",
    href: "/experiences/luxury-escapes",
    icon: Crown,
    span: "lg:col-span-2",
    size: "narrow",
  },
  {
    number: "06",
    title: "Destination Weddings",
    description:
      "Easy-going holidays designed for families, shared moments and lasting memories.",
    image: "/images/home/family-tour.jpg",
    href: "/experiences/family-holidays",
    icon: Users,
    span: "sm:col-span-2 lg:col-span-2",
    size: "narrow",
  },
];

/* SEO: structured data so Google understands this is a list of experiences */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Travel experiences in Nepal and India",
  itemListElement: experiences.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristTrip",
      name: e.title,
      description: e.description,
      url: `${SITE_URL}${e.href}`,
      image: `${SITE_URL}${e.image}`,
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

/* Heading split into words so each can rise from behind a mask */
const headingSegments = [
  { words: ["Travel", "your", "way."], start: 0, gold: false },
  { words: ["Experience", "more."], start: 3, gold: true },
];

/* description reveal on desktop hover/focus (always visible on touch sizes) */
const reveal =
  "lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-[76px] lg:group-hover:opacity-100 lg:group-focus-within:max-h-[76px] lg:group-focus-within:opacity-100";

/* Clean gradient fallback instead of alt text if an image is missing */
function CardImage({
  src,
  alt,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#164A74] via-[#0F3557] to-[#071F34]"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D39A17]/15 blur-2xl" />
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
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
    />
  );
}

function ExperienceCard({
  e,
  dimmed,
  reduce,
  onHover,
}: {
  e: Experience;
  dimmed: boolean;
  reduce: boolean;
  onHover: (n: string | null) => void;
}) {
  const Icon = e.icon;
  const hero = e.size === "hero";

  return (
    <motion.li
      variants={reduce ? cardVariantsReduced : cardVariants}
      onMouseEnter={() => onHover(e.number)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={(ev) => {
        if (reduce) return;
        const r = ev.currentTarget.getBoundingClientRect();
        ev.currentTarget.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        ev.currentTarget.style.setProperty("--my", `${ev.clientY - r.top}px`);
      }}
      className={`group relative min-h-0 overflow-hidden bg-[#071F34] ${e.span}`}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          dimmed ? "brightness-[0.7]" : ""
        }`}
      >
        <Link
          href={e.href}
          className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#D39A17]"
        >
          <motion.div
            variants={reduce ? undefined : imageVariants}
            className="absolute inset-0"
          >
            <CardImage
              src={e.image}
              alt={`${e.title} travel experience in Nepal and India`}
              priority={hero}
              sizes={
                hero
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 25vw"
              }
            />
          </motion.div>

          {/* gradients: bottom for text, top for number + icon */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#031725] via-[#0B2942]/30 to-[#0B2942]/0 opacity-95 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#031725]/40 to-transparent"
          />

          {/* cursor spotlight */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(211,154,23,0.20), transparent 65%)",
            }}
          />

          {/* gold frame on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#D39A17]/70"
          />

          {/* number pill (top left) */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-[#031725]/45 py-1.5 pl-2.5 pr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E0C17A] backdrop-blur-sm sm:left-4 sm:top-4">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#D39A17]"
            />
            {e.number}
          </span>

          {/* icon (top right) */}
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#031725]/35 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-[8deg] group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942] sm:right-4 sm:top-4"
          >
            <Icon size={16} strokeWidth={1.5} />
          </span>

          {/* text */}
          <div
            className={`absolute inset-x-0 bottom-0 ${
              hero ? "p-5 pb-6 sm:p-8 sm:pb-9" : "p-4 pb-5 sm:p-5 sm:pb-6"
            }`}
          >
            <h3
              className={`font-serif font-medium leading-[1.08] text-white ${
                hero
                  ? "text-[32px] sm:text-[40px] lg:text-[46px]"
                  : e.size === "wide"
                    ? "text-[22px] sm:text-[24px]"
                    : "text-[19px] sm:text-[20px]"
              }`}
            >
              <span className="sr-only">Explore </span>
              {e.title}
            </h3>

            <p
              className={`mt-2 text-white/80 ${
                hero
                  ? "max-w-[440px] text-[13px] leading-[20px] sm:text-[14px]"
                  : `line-clamp-3 max-w-[340px] text-[12px] leading-[18px] sm:text-[13px] ${reveal}`
              }`}
            >
              {e.description}
            </p>

            {/* hero shows an explicit call to action */}
            {hero && (
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                <span className="border-b border-white/30 pb-0.5 transition-colors duration-300 group-hover:border-[#D39A17] group-hover:text-[#D39A17]">
                  Explore experience
                </span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-[#D39A17]"
                />
              </span>
            )}
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

export default function TravelExperiences() {
  const reduceMotion = useReducedMotion();
  const reduce = !!reduceMotion;

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="travel-experiences"
      aria-labelledby="travel-experiences-heading"
      style={{ ["--hdr" as string]: `${HEADER_OFFSET}px` }}
      /* min-height only: fills the screen when there is room,
         grows when needed, so nothing is ever clipped or overlapped */
      className="relative scroll-mt-[179px] overflow-hidden bg-[#0B2942] text-white lg:flex lg:min-h-[calc(100svh-var(--hdr))] lg:flex-col"
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* decorative rings + glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D39A17]/15"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D39A17]/80" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full border border-white/[0.06]"
        animate={
          reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#164A74]/30 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 py-8 sm:px-8 sm:py-9 lg:justify-center lg:px-10 lg:py-6">
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
                className="h-px bg-[#D39A17]"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D7B76A] sm:tracking-[0.28em]">
                Travel Experiences
              </span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/50"
              >
                <motion.span
                  className="flex"
                  animate={reduce ? undefined : { rotate: [0, 18, -18, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles
                    size={13}
                    strokeWidth={1.4}
                    className="text-[#D39A17]"
                  />
                </motion.span>
              </span>
            </motion.div>

            {/* heading: words rise from behind a mask.
                Spaced with margins (not text spaces) so gaps never collapse. */}
            <h2
              id="travel-experiences-heading"
              aria-label="Travel your way. Experience more."
              className="max-w-[780px] font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white sm:text-[40px] lg:text-[42px] xl:text-[48px]"
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
                          seg.gold ? "text-[#D39A17]" : ""
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
                      transition={{ duration: 0.9, delay: 0.8, ease }}
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-[#D39A17]/50"
                    />
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* intro text */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="max-w-[640px] text-[14px] leading-6 text-white/65 sm:text-[15px] lg:max-w-[480px] lg:pb-1 lg:text-[14px] lg:leading-[22px]"
          >
            {/* From Himalayan adventures and sacred journeys to cultural escapes,
            wildlife and family holidays, discover experiences designed around
            the way you want to travel. */}
          </motion.p>
        </header>

        {/* ============ GRID ============ */}
        <motion.ul
          role="list"
          aria-label="Travel experiences in Nepal and India"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={gridVariants}
          className="grid grid-cols-1 auto-rows-[210px] gap-3 sm:grid-cols-2 sm:auto-rows-[220px] lg:min-h-[440px] lg:max-h-[640px] lg:flex-1 lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-auto lg:gap-4"
        >
          {experiences.map((e) => (
            <ExperienceCard
              key={e.number}
              e={e}
              dimmed={hovered !== null && hovered !== e.number}
              reduce={reduce}
              onHover={setHovered}
            />
          ))}
        </motion.ul>

        {/* ============ BOTTOM STRIP + ANIMATED BORDER ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-4 flex shrink-0 items-center justify-between gap-4 pb-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:tracking-[0.2em]">
            Curated Experiences · Nepal & India
          </span>

          <Link
            href="/experiences"
            className="group flex shrink-0 items-center gap-2 text-[12px] font-semibold text-white"
          >
            <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-[#D39A17] group-hover:text-[#D39A17]">
              View all experiences
            </span>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942]"
            >
              <ArrowUpRight size={14} />
            </span>
          </Link>

          {/* base line */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-white/10"
          />

          {/* gold line draws in from the left */}
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.3, ease }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[#D39A17] via-[#D39A17]/50 to-transparent"
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