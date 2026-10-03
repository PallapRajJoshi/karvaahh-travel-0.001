"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Compass,
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
        py-7
        sm:py-8
        lg:flex
        lg:min-h-[calc(100dvh-0px)]
        lg:items-center
        lg:py-8
      "
    >
      {/* ============================================================
          PREMIUM BACKGROUND DETAILS
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          top-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D99A18]/[0.045]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-[-160px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#102A43]/[0.035]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#D99A18]/30
          to-transparent
        "
      />

      {/* ============================================================
          CONTAINER
      ============================================================ */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* ==========================================================
            HEADER
        ========================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        scale: 0.7,
                        opacity: 0,
                      }
                }
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D99A18]/40
                  bg-[#D99A18]/[0.07]
                "
              >
                <Compass
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[#C48608]"
                  strokeWidth={1.8}
                />
              </motion.span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#66758A]
                  sm:text-[11px]
                "
              >
                Explore By Style
              </span>
            </div>

            {/* Heading */}

            <h2
              id="featured-journeys-heading"
              className="
                mt-2.5
                max-w-[700px]
                font-serif
                text-[34px]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
                text-[#102A43]
                sm:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Journeys made{" "}
              <span className="text-[#C48608]">
                to be remembered.
              </span>
            </h2>
          </motion.div>

          {/* View all */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
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
                bg-white/90
                px-4
                py-2.5
                text-[12px]
                font-semibold
                text-[#102A43]
                shadow-[0_6px_24px_rgba(16,42,67,0.05)]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#C48608]
                hover:shadow-[0_12px_30px_rgba(16,42,67,0.1)]
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
                  className="
                    h-3
                    w-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={2}
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ==========================================================
            CATEGORY SELECTOR
        ========================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
          className="mt-6 sm:mt-7"
        >
          <nav
            aria-label="Journey categories"
            className={`overflow-x-auto ${HIDE_SCROLLBAR}`}
          >
            <div
              className="
                flex
                min-w-full
                w-max
                items-center
                gap-1
                rounded-2xl
                border
                border-[#DDD9D0]
                bg-white/80
                p-1.5
                shadow-[0_8px_30px_rgba(16,42,67,0.035)]
                backdrop-blur-md
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
                      min-w-[145px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      px-4
                      text-[11px]
                      font-semibold
                      outline-none
                      transition-colors
                      duration-300
                      sm:min-w-[160px]
                      lg:min-w-0
                      lg:flex-1
                      lg:rounded-full
                    "
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-journey-category"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                type: "spring",
                                stiffness: 450,
                                damping: 32,
                              }
                        }
                        className="
                          absolute
                          inset-0
                          rounded-xl
                          bg-[#102A43]
                          shadow-[0_6px_18px_rgba(16,42,67,0.16)]
                          lg:rounded-full
                        "
                      />
                    )}

                    <Icon
                      aria-hidden="true"
                      className={`
                        relative
                        z-10
                        h-4
                        w-4
                        transition-transform
                        duration-300
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
        </motion.div>

        {/* ==========================================================
            COLLECTION META
        ========================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-[#DDD9D0]
            pt-2.5
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D99A18]
                shadow-[0_0_10px_rgba(217,154,24,0.35)]
              "
            />

            <span
              className="
                text-[9px]
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
              text-[9px]
              font-medium
              tracking-[0.08em]
              text-[#8A929C]
            "
          >
            Nepal · India
          </span>
        </motion.div>

        {/* ==========================================================
            JOURNEY CARDS
        ========================================================== */}

        {visibleJourneys.length > 0 ? (
          <motion.div
            key={activeCategory}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              -mx-5
              mt-3
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              px-5
              pb-2

              sm:-mx-8
              sm:px-8

              md:mx-0
              md:grid
              md:grid-cols-2
              md:gap-4
              md:overflow-visible
              md:px-0

              lg:grid-cols-4
              lg:gap-4

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
              mt-4
              rounded-2xl
              border
              border-dashed
              border-[#D8D5CC]
              bg-white
              px-6
              py-8
              text-center
            "
          >
            <Compass
              className="mx-auto h-6 w-6 text-[#C48608]"
            />

            <p
              className="
                mt-2
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
                mt-2
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

        {/* ==========================================================
            MOBILE SWIPE HINT / DESKTOP FOOTER
        ========================================================== */}

        <div
          className="
            mt-2
            flex
            items-center
            justify-between
            border-t
            border-[#DDD9D0]
            pt-2.5
          "
        >
          <p
            className="
              text-[9px]
              leading-4
              text-[#7B8794]
            "
          >
            Thoughtfully designed journeys across Nepal
            and India.
          </p>

          <Link
            href="/contact"
            className="
              group
              hidden
              items-center
              gap-2
              text-[9px]
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

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#A0A7AF]
              md:hidden
            "
          >
            Swipe →
          </span>
        </div>
      </div>
    </section>
  );
}