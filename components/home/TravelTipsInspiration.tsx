"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  MapPin,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
    category: "NEPAL GUIDE",
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
    category: "TRAVEL GUIDE",
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
    category: "ITINERARY",
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
    category: "HIMALAYAN GUIDE",
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
    category: "CULTURE",
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
    category: "SPIRITUAL TRAVEL",
    title: "A Guide to Muktinath",
    description:
      "Understand the spiritual significance, route options, weather and practical details before visiting Muktinath.",
    image: "/images/home/muktinath-road.jpg",
    alt: "Muktinath temple and Himalayan landscape in Nepal",
    location: "Muktinath",
    readTime: "8 min read",
  },
];

const GROUP_SIZE = 4;

export default function TravelTipsInspiration() {
  const prefersReducedMotion = useReducedMotion();

  const [activeGroup, setActiveGroup] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalGroups = Math.ceil(articles.length / GROUP_SIZE);

  const visibleArticles = useMemo(() => {
    const start = activeGroup * GROUP_SIZE;

    return articles.slice(start, start + GROUP_SIZE);
  }, [activeGroup]);

  const featuredArticle = visibleArticles[0];

  const secondaryArticles = visibleArticles.slice(1);

  const nextGroup = () => {
    setActiveGroup((current) =>
      current === totalGroups - 1 ? 0 : current + 1
    );
  };

  const previousGroup = () => {
    setActiveGroup((current) =>
      current === 0 ? totalGroups - 1 : current - 1
    );
  };

  /*
   * Automatic article rotation.
   */
  useEffect(() => {
    if (paused || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveGroup((current) =>
        current === totalGroups - 1 ? 0 : current + 1
      );
    }, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, [paused, prefersReducedMotion, totalGroups]);

  if (!featuredArticle) {
    return null;
  }

  return (
    <section
      id="travel-tips"
      aria-labelledby="travel-tips-heading"
      className="relative overflow-hidden bg-[#F8F6F1] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          SUBTLE EDITORIAL BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[440px] w-[440px] rounded-full border border-[#D39A17]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full border border-[#0B2942]/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 h-[420px] w-[420px] rounded-full border border-[#D39A17]/10"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.header
          initial={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 22 }
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
          className="mb-7 flex items-end justify-between gap-6"
        >
          <div>

            {/* Eyebrow */}

            <div className="mb-3 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#D39A17]"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#58718A]">
                Travel Tips & Inspiration
              </span>

              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/45"
              >
                <BookOpen
                  size={11}
                  strokeWidth={1.5}
                  className="text-[#C9910B]"
                  aria-hidden="true"
                />
              </span>
            </div>

            {/* Main SEO heading */}

            <h2
              id="travel-tips-heading"
              className="font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#0B2942] sm:text-[48px] lg:text-[56px]"
            >
              Travel better.{" "}
              <span className="text-[#C9910B]">
                Go further.
              </span>
            </h2>

            <p className="mt-3 max-w-[730px] text-[11px] leading-5 text-[#60788F] sm:text-[12px]">
              Practical travel guides, destination inspiration and
              thoughtful advice to help you plan unforgettable journeys
              across Nepal and India.
            </p>
          </div>

          {/* Desktop blog link */}

          <a
            href="/blog"
            className="hidden items-center gap-3 border-b border-[#0B2942]/25 pb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B2942] transition-colors duration-300 hover:border-[#D39A17] hover:text-[#C9910B] sm:flex"
          >
            Explore all stories
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </motion.header>

        {/* =====================================================
            DECORATIVE DIVIDER
        ====================================================== */}

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DDD8CE]" />

          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#D39A17]"
          />

          <span
            aria-hidden="true"
            className="h-px w-12 bg-[#D39A17]"
          />

          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#D39A17]"
          />

          <div className="h-px flex-1 bg-[#DDD8CE]" />
        </div>

        {/* =====================================================
            ARTICLE GALLERY
        ====================================================== */}

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
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
              className="grid gap-4 lg:grid-cols-[1.25fr_1fr]"
            >

              {/* =================================================
                  FEATURED ARTICLE
              ================================================== */}

              <motion.article
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="group relative h-[390px] overflow-hidden bg-[#0B2942] sm:h-[410px] lg:h-[425px]"
              >
                <a
                  href={`/blog/${featuredArticle.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  aria-label={`Read ${featuredArticle.title}`}
                  className="absolute inset-0 z-20"
                />

                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.alt}
                  fill
                  priority={activeGroup === 0}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {/* Image overlay */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#071D2E]/20"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-[#061A2A] via-[#061A2A]/55 to-transparent"
                />

                {/* Top label */}

                <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between sm:left-6 sm:right-6">

                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                      <BookOpen
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#D39A17]"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-white">
                      Featured Guide
                    </span>
                  </div>

                  <span className="font-serif text-[64px] leading-none text-white/10">
                    {featuredArticle.id}
                  </span>
                </div>

                {/* Content */}

                <div className="absolute bottom-6 left-5 right-5 z-10 sm:left-6 sm:right-6">

                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[#D5A22B]">
                      {featuredArticle.category}
                    </span>

                    <span className="h-px w-6 bg-[#D39A17]" />

                    <span className="text-[7px] uppercase tracking-[0.16em] text-white/60">
                      {featuredArticle.location}
                    </span>
                  </div>

                  <h3 className="max-w-[650px] font-serif text-[29px] leading-[1.04] tracking-[-0.025em] text-white sm:text-[34px] lg:text-[38px]">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-2 max-w-[590px] text-[10px] leading-5 text-white/70 sm:text-[11px]">
                    {featuredArticle.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      Read story
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942]">
                      <ArrowRight
                        size={12}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="ml-auto flex items-center gap-2 text-[7px] uppercase tracking-[0.16em] text-white/50">
                      <Clock3 size={10} aria-hidden="true" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>

              {/* =================================================
                  SECONDARY ARTICLES
              ================================================== */}

              <div className="grid grid-cols-2 gap-4">
                {secondaryArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: prefersReducedMotion
                        ? 0
                        : index * 0.08,
                    }}
                    className="group relative min-h-[190px] overflow-hidden bg-[#0B2942] sm:min-h-[198px]"
                  >
                    <a
                      href={`/blog/${article.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}`}
                      aria-label={`Read ${article.title}`}
                      className="absolute inset-0 z-20"
                    />

                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 30vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#061B2C]/25 transition-colors duration-500 group-hover:bg-[#061B2C]/5"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#061A2A]/95 via-[#061A2A]/35 to-transparent"
                    />

                    {/* Number */}

                    <span className="absolute right-3 top-3 z-10 font-serif text-[22px] text-white/45">
                      {article.id}
                    </span>

                    {/* Category */}

                    <span className="absolute left-4 top-4 z-10 text-[6px] font-semibold uppercase tracking-[0.2em] text-[#D5A22B]">
                      {article.category}
                    </span>

                    {/* Content */}

                    <div className="absolute bottom-4 left-4 right-4 z-10">

                      <h3 className="font-serif text-[18px] leading-[1.05] text-white sm:text-[20px]">
                        {article.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <MapPin
                          size={9}
                          className="text-[#D39A17]"
                          aria-hidden="true"
                        />

                        <span className="text-[7px] uppercase tracking-[0.13em] text-white/60">
                          {article.location}
                        </span>
                      </div>

                      {/* Hover arrow */}

                      <span className="absolute bottom-0 right-0 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-[#D39A17] group-hover:bg-[#D39A17] group-hover:text-[#0B2942] group-hover:opacity-100">
                        <ArrowRight
                          size={11}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
              CONTROLS
          ====================================================== */}

          <div className="mt-4 flex items-center justify-between border-t border-[#DDD8CE] pt-4">

            {/* Progress indicators */}

            <div className="flex items-center gap-2">
              {Array.from({ length: totalGroups }).map(
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveGroup(index)}
                    aria-label={`Show travel articles group ${
                      index + 1
                    }`}
                    aria-current={
                      activeGroup === index
                        ? "true"
                        : undefined
                    }
                    className="flex h-5 items-center outline-none"
                  >
                    <span
                      className={`h-[2px] transition-all duration-500 ${
                        activeGroup === index
                          ? "w-10 bg-[#D39A17]"
                          : "w-5 bg-[#D7D2C9] hover:bg-[#A9A39A]"
                      }`}
                    />
                  </button>
                )
              )}

              <span className="ml-2 text-[7px] font-semibold uppercase tracking-[0.18em] text-[#7B8994]">
                {String(activeGroup + 1).padStart(2, "0")} /{" "}
                {String(totalGroups).padStart(2, "0")}
              </span>
            </div>

            {/* Editorial phrase */}

            <div className="hidden items-center gap-3 md:flex">
              <span className="h-px w-7 bg-[#D39A17]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#7C8994]">
                Discover · Plan · Travel
              </span>

              <span className="h-px w-7 bg-[#D39A17]" />
            </div>

            {/* Navigation */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousGroup}
                aria-label="Previous travel stories"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5D0C7] bg-white text-[#0B2942] transition-all duration-300 hover:border-[#D39A17] hover:text-[#C9910B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
              >
                <ArrowLeft
                  size={13}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={nextGroup}
                aria-label="Next travel stories"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2942] text-white transition-all duration-300 hover:bg-[#C9910B] hover:text-[#0B2942] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
              >
                <ArrowRight
                  size={13}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE BLOG LINK
        ====================================================== */}

        <div className="mt-5 flex justify-center sm:hidden">
          <a
            href="/blog"
            className="flex items-center gap-3 border-b border-[#0B2942]/25 pb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B2942]"
          >
            Explore all travel stories
            <ArrowRight size={12} aria-hidden="true" />
          </a>
        </div>

        {/* =====================================================
            SEO KEYWORDS / EDITORIAL STRIP
        ====================================================== */}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[#DDD8CE] pt-4">
          {[
            "Nepal Travel Guide",
            "India Travel Tips",
            "Himalayan Travel",
            "Travel Inspiration",
            "Destination Guides",
          ].map((keyword, index) => (
            <div
              key={keyword}
              className="flex items-center gap-2"
            >
              {index !== 0 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#D39A17]"
                />
              )}

              <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-[#87929A]">
                {keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}