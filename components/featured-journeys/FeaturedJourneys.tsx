"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Flame,
  Mountain,
  Users,
  Landmark,
} from "lucide-react";

import JourneyCard from "./JourneyCard";
import {
  CATEGORIES,
  JOURNEYS,
  type CategoryId,
} from "./journeys.data";

const HIDE_SCROLLBAR =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export default function FeaturedJourneys() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("best-sellers");

  const reduceMotion = useReducedMotion();

  const visibleJourneys = useMemo(
    () =>
      JOURNEYS.filter((journey) =>
        journey.categories.includes(activeCategory)
      ),
    [activeCategory]
  );

  return (
    <section
      aria-labelledby="featured-journeys-heading"
      className="
        relative
        overflow-hidden
        bg-[#F7F6F2]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D99A18]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#102A43]/[0.025]
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D99A18]/40
                  bg-[#D99A18]/[0.06]
                "
              >
                <Compass
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[#C48608]"
                  strokeWidth={1.8}
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#66758A]
                "
              >
                Explore By Style
              </span>
            </div>

            {/* Heading */}
            <h2
              id="featured-journeys-heading"
              className="
                mt-3
                max-w-[700px]
                font-serif
                text-[34px]
                font-medium
                leading-[1.02]
                tracking-[-0.035em]
                text-[#102A43]

                sm:text-[40px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Journeys made
              <span className="text-[#C48608]">
                {" "}to be remembered.
              </span>
            </h2>
          </div>

          {/* View all */}
          <Link
            href="/journeys"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-[#D8D5CC]
              bg-white
              px-4
              py-2.5
              text-[12px]
              font-semibold
              text-[#102A43]
              shadow-[0_5px_20px_rgba(16,42,67,0.04)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C48608]
              hover:shadow-[0_10px_25px_rgba(16,42,67,0.08)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C48608]
              focus-visible:ring-offset-2
            "
          >
            View all journeys

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#102A43]
                text-white
                transition-all
                duration-300
                group-hover:bg-[#C48608]
              "
            >
              <ArrowRight
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </Link>
        </div>

        {/* =========================================================
            CATEGORY SELECTOR
        ========================================================= */}

        <div className="mt-7">
          <nav
            aria-label="Journey categories"
            className={`
              overflow-x-auto
              ${HIDE_SCROLLBAR}
            `}
          >
            <div
              className="
                flex
                w-max
                min-w-full
                items-center
                gap-1.5
                rounded-2xl
                border
                border-[#DDD9D0]
                bg-white/80
                p-1.5
                shadow-[0_8px_30px_rgba(16,42,67,0.035)]
                backdrop-blur-sm
                lg:rounded-full
              "
            >
              {CATEGORIES.map((category) => {
                const Icon = category.icon;
                const isActive =
                  category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    aria-pressed={isActive}
                    className="
                      relative
                      flex
                      h-10
                      min-w-[150px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      px-5
                      text-[12px]
                      font-semibold
                      outline-none
                      transition-colors
                      duration-300

                      sm:min-w-[165px]

                      lg:flex-1
                      lg:rounded-full
                    "
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-journey-category"
                        className="
                          absolute
                          inset-0
                          rounded-xl
                          bg-[#102A43]
                          shadow-[0_5px_15px_rgba(16,42,67,0.15)]
                          lg:rounded-full
                        "
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                type: "spring",
                                stiffness: 420,
                                damping: 34,
                              }
                        }
                      />
                    )}

                    <Icon
                      aria-hidden="true"
                      className={`
                        relative
                        z-10
                        h-4
                        w-4
                        ${
                          isActive
                            ? "text-[#F0B429]"
                            : "text-[#8793A2]"
                        }
                      `}
                      strokeWidth={1.7}
                    />

                    <span
                      className={`
                        relative
                        z-10
                        whitespace-nowrap
                        ${
                          isActive
                            ? "text-white"
                            : "text-[#64748B]"
                        }
                      `}
                    >
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* =========================================================
            COLLECTION META
        ========================================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-[#DDD9D0]
            pt-3
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D99A18]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#64748B]
              "
            >
              {visibleJourneys.length}{" "}
              {visibleJourneys.length === 1
                ? "Journey"
                : "Journeys"}{" "}
              Curated
            </span>
          </div>

          <span
            className="
              text-[10px]
              font-medium
              tracking-[0.08em]
              text-[#8A929C]
            "
          >
            Nepal · India
          </span>
        </div>

        {/* =========================================================
            JOURNEY CARDS
        ========================================================= */}

        {visibleJourneys.length > 0 ? (
          <motion.div
            key={activeCategory}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              -mx-5
              mt-4
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-5
              pb-4

              sm:-mx-8
              sm:px-8

              md:mx-0
              md:grid
              md:grid-cols-2
              md:gap-5
              md:overflow-visible
              md:px-0
              md:pb-0

              lg:grid-cols-4
              lg:gap-5

              ${HIDE_SCROLLBAR}
            `}
          >
            {visibleJourneys.map(
              (journey, index) => (
                <JourneyCard
                  key={journey.slug}
                  journey={journey}
                  index={index}
                />
              )
            )}
          </motion.div>
        ) : (
          <div
            className="
              mt-5
              rounded-2xl
              border
              border-dashed
              border-[#D8D5CC]
              bg-white
              px-6
              py-10
              text-center
            "
          >
            <Compass className="mx-auto h-6 w-6 text-[#C48608]" />

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-[#102A43]
              "
            >
              A new collection is being curated.
            </p>

            <Link
              href="/contact"
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-[#102A43]
                hover:text-[#C48608]
              "
            >
              Tell us where you want to go
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* =========================================================
            FOOTER CTA
        ========================================================= */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            border-t
            border-[#DDD9D0]
            pt-3
          "
        >
          <p
            className="
              max-w-[620px]
              text-[10px]
              leading-4
              text-[#7B8794]
            "
          >
            Thoughtfully designed journeys across Nepal
            and India, created around meaningful experiences.
          </p>

          <Link
            href="/contact"
            className="
              group
              hidden
              items-center
              gap-2
              text-[10px]
              font-bold
              text-[#102A43]
              transition-colors
              hover:text-[#C48608]
              sm:inline-flex
            "
          >
            Create a Custom Journey

            <ArrowRight
              className="
                h-3
                w-3
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}