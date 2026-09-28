"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  MapPin,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
    category: "MOUNTAINS",
    title: "Where the Himalayas begin.",
    location: "Pokhara · Nepal",
    image: "/images/home/annapurna-view.jpg",
    alt: "Himalayan mountains and Phewa Lake in Pokhara Nepal",
    description:
      "Lakeside calm, mountain views and unforgettable Himalayan experiences.",
  },
  {
    id: "02",
    category: "CULTURE",
    title: "Stories carved in stone.",
    location: "Kathmandu · Nepal",
    image: "/images/home/kathmandu-view.jpg",
    alt: "Ancient temple and cultural heritage in Kathmandu Nepal",
    description:
      "Ancient temples, living heritage and the cultural heart of Nepal.",
  },
  {
    id: "03",
    category: "VILLAGES",
    title: "Life at a slower pace.",
    location: "Ghandruk · Nepal",
    image: "/images/home/view-from-ghandruk.jpg",
    alt: "Traditional Himalayan village of Ghandruk Nepal",
    description:
      "Mountain villages, local hospitality and beautiful Himalayan landscapes.",
  },
  {
    id: "04",
    category: "WILDLIFE",
    title: "Wild Nepal, up close.",
    location: "Chitwan · Nepal",
    image: "/images/home/chitwan-wild-life.jpg",
    alt: "Wildlife and jungle safari experience in Chitwan Nepal",
    description:
      "Jungle adventures, wildlife and a completely different side of Nepal.",
  },
  {
    id: "05",
    category: "SPIRITUAL",
    title: "Journeys with meaning.",
    location: "Muktinath · Nepal",
    image: "/images/home/muktinath.jpg",
    alt: "Muktinath pilgrimage and Himalayan landscape in Nepal",
    description:
      "A sacred Himalayan destination surrounded by dramatic landscapes.",
  },
  {
    id: "06",
    category: "HERITAGE",
    title: "A city of timeless stories.",
    location: "Delhi · India",
    image: "/images/home/delhi-old-view.jpg",
    alt: "Historic architecture and heritage of Delhi India",
    description:
      "A vibrant meeting point of history, culture, food and modern India.",
  },
  {
    id: "07",
    category: "ROYAL INDIA",
    title: "Where history feels alive.",
    location: "Rajasthan · India",
    image: "/images/home/kolry-india.jpg",
    alt: "Royal palace and heritage architecture in Rajasthan India",
    description:
      "Royal forts, colourful markets and unforgettable cultural experiences.",
  },
  {
    id: "08",
    category: "SPIRITUAL",
    title: "Where faith meets the river.",
    location: "Varanasi · India",
    image: "/images/home/varanasi.jpg",
    alt: "Ganges river ghats and spiritual experience in Varanasi India",
    description:
      "Sacred ghats, timeless rituals and one of India's most powerful experiences.",
  },
];

const VISIBLE_COUNT = 4;

export default function RealJourneys() {
  const prefersReducedMotion = useReducedMotion();

  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(
    journeyStories.length / VISIBLE_COUNT
  );

  /*
   * Create groups of four destinations.
   *
   * Page 1:
   * Pokhara / Kathmandu / Ghandruk / Chitwan
   *
   * Page 2:
   * Muktinath / Delhi / Rajasthan / Varanasi
   */

  const visibleStories = useMemo(() => {
    const start = page * VISIBLE_COUNT;

    return journeyStories.slice(
      start,
      start + VISIBLE_COUNT
    );
  }, [page]);

  const featuredStory = visibleStories[0];

  const smallStories = visibleStories.slice(1);

  const goNext = () => {
    setPage((current) =>
      current === totalPages - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setPage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  /*
   * Automatic destination group change.
   */

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setPage((current) =>
        current === totalPages - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, prefersReducedMotion, totalPages]);

  if (!featuredStory) {
    return null;
  }

  return (
    <section
      id="real-journeys"
      aria-labelledby="real-journeys-heading"
      className="relative flex min-h-[calc(100vh-155px)] items-center overflow-hidden bg-[#F8F6F1] py-7 sm:py-8 lg:py-9"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full border border-[#D39A17]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full border border-[#0B2942]/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -right-48 h-[500px] w-[500px] rounded-full border border-[#D39A17]/10"
      />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mb-5 flex items-end justify-between gap-6"
        >
          <div>
            {/* Eyebrow */}

            <div className="mb-2 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#D39A17]"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#56718A]">
                Real Journeys · Real Moments
              </span>

              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/50"
              >
                <Camera
                  size={11}
                  strokeWidth={1.5}
                  className="text-[#C9910B]"
                />
              </span>
            </div>

            {/* SEO heading */}

            <h2
              id="real-journeys-heading"
              className="font-serif text-[39px] font-medium leading-none tracking-[-0.045em] text-[#0B2942] sm:text-[48px] lg:text-[56px]"
            >
              Real journeys.{" "}
              <span className="text-[#C9910B]">
                Real moments.
              </span>
            </h2>

            <p className="mt-2 max-w-[780px] text-[11px] leading-5 text-[#60788F] sm:text-[12px]">
              Explore unforgettable travel experiences across Nepal and
              India — from Himalayan landscapes and sacred temples to
              wildlife, heritage and local culture.
            </p>
          </div>

          {/* Counter */}

          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <div className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#7C8993]">
                Destinations
              </div>

              <div className="font-serif text-[29px] leading-none text-[#0B2942]">
                08
              </div>
            </div>

            <div className="h-9 w-px bg-[#D8D3CA]" />

            <div className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#7C8993]">
              Nepal
              <br />
              India
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            GALLERY
        ======================================================== */}

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={
                prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 35 }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: -35 }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-3 lg:grid-cols-[1.38fr_1fr]"
            >
              {/* =================================================
                  FEATURED DESTINATION
              ================================================== */}

              <div className="group relative h-[390px] overflow-hidden bg-[#0B2942] sm:h-[420px] lg:h-[445px]">

                <Image
                  src={featuredStory.image}
                  alt={featuredStory.alt}
                  fill
                  priority={page === 0}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {/* Overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#061B2C]/15"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#061B2C]/95 via-[#061B2C]/35 to-transparent"
                />

                {/* Top information */}

                <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between sm:left-6 sm:right-6 sm:top-6">

                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#0B2942]/30">
                      <MapPin
                        size={13}
                        strokeWidth={1.5}
                        className="text-[#D39A17]"
                      />
                    </span>

                    <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-white">
                      {featuredStory.category}
                    </span>
                  </div>

                  <span className="font-serif text-[70px] leading-none text-white/15">
                    {featuredStory.id}
                  </span>
                </div>

                {/* Featured content */}

                <div className="absolute bottom-6 left-5 right-5 z-10 sm:left-6 sm:right-6">

                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#D6A536]">
                    {featuredStory.location}
                  </p>

                  <h3 className="max-w-[650px] font-serif text-[30px] leading-[1.02] tracking-[-0.025em] text-white sm:text-[36px] lg:text-[40px]">
                    {featuredStory.title}
                  </h3>

                  <p className="mt-2 max-w-[570px] text-[10px] leading-5 text-white/70 sm:text-[11px]">
                    {featuredStory.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D39A17]" />

                    <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-white/65">
                      Karvaahh · Live to Travel
                    </span>
                  </div>
                </div>

                {/* Progress */}

                {!isPaused && !prefersReducedMotion && (
                  <motion.div
                    key={`progress-${page}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 6,
                      ease: "linear",
                    }}
                    className="absolute bottom-0 left-0 z-30 h-[3px] bg-[#D39A17]"
                  />
                )}
              </div>

              {/* =================================================
                  SMALL DESTINATION GALLERY
              ================================================== */}

              <div className="grid grid-cols-2 gap-3">
                {smallStories.map((story, index) => (
                  <motion.article
                    key={story.id}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 15 }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.45,
                      delay: prefersReducedMotion
                        ? 0
                        : index * 0.08,
                    }}
                    className="group relative min-h-[190px] overflow-hidden bg-[#0B2942] sm:min-h-[202px] lg:min-h-0"
                  >
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 30vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#061B2C]/20 transition-colors duration-500 group-hover:bg-[#061B2C]/5"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#061B2C]/95 via-[#061B2C]/25 to-transparent"
                    />

                    {/* Number */}

                    <span className="absolute right-3 top-3 z-10 font-serif text-[23px] text-white/55">
                      {story.id}
                    </span>

                    {/* Category */}

                    <span className="absolute left-4 top-4 z-10 text-[7px] font-semibold uppercase tracking-[0.2em] text-[#D6A536]">
                      {story.category}
                    </span>

                    {/* Text */}

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-serif text-[19px] leading-tight text-white sm:text-[21px]">
                        {story.location.split("·")[0].trim()}
                      </h3>

                      <p className="mt-1 max-w-[180px] text-[8px] leading-4 text-white/65">
                        {story.description}
                      </p>
                    </div>

                    {/* Hover arrow */}

                    <span className="absolute bottom-4 right-4 z-10 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-white group-hover:bg-white group-hover:text-[#0B2942] group-hover:opacity-100">
                      <ArrowRight size={12} />
                    </span>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
              NAVIGATION BAR
          ====================================================== */}

          <div className="mt-3 flex items-center justify-between border-t border-[#DDD8CE] pt-3">

            {/* Page indicator */}

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map(
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPage(index)}
                    aria-label={`Show destination group ${
                      index + 1
                    }`}
                    aria-current={
                      page === index ? "true" : undefined
                    }
                    className="group flex h-6 items-center outline-none"
                  >
                    <span
                      className={`h-[2px] transition-all duration-500 ${
                        page === index
                          ? "w-11 bg-[#D39A17]"
                          : "w-5 bg-[#D7D2C9] group-hover:bg-[#A9A39A]"
                      }`}
                    />
                  </button>
                )
              )}

              <span className="ml-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#7B8994]">
                {String(page + 1).padStart(2, "0")} /{" "}
                {String(totalPages).padStart(2, "0")}
              </span>
            </div>

            {/* Center label */}

            <div className="hidden items-center gap-3 md:flex">
              <span className="h-px w-7 bg-[#D39A17]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#7C8994]">
                Explore · Experience · Remember
              </span>

              <span className="h-px w-7 bg-[#D39A17]" />
            </div>

            {/* Controls */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous travel destinations"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5D0C7] bg-white text-[#0B2942] transition-all duration-300 hover:border-[#D39A17] hover:text-[#C9910B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
              >
                <ArrowLeft size={13} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next travel destinations"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2942] text-white transition-all duration-300 hover:bg-[#C9910B] hover:text-[#0B2942] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
              >
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* =======================================================
            SEO / EDITORIAL KEYWORDS
        ======================================================== */}

        <div className="mt-3 flex items-center justify-center gap-x-4 gap-y-1">
          {[
            "Nepal Travel",
            "India Travel",
            "Himalayan Adventures",
            "Cultural Experiences",
            "Wildlife",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              {index !== 0 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#D39A17]"
                />
              )}

              <span className="text-[6px] font-semibold uppercase tracking-[0.17em] text-[#87929A]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}