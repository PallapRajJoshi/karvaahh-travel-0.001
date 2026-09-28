"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Headphones,
  IndianRupee,
  Map,
  Hotel,
  Route,
} from "lucide-react";

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
    description:
      "Clear, honest pricing with no confusing surprises.",
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
  "NEPAL & INDIA OPERATIONS",
  "LOCAL TRAVEL EXPERTS",
  "CURATED EXPERIENCES",
  "PERSONALIZED JOURNEYS",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyTravelWithKarvaah() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-travel-with-karvaah"
      aria-labelledby="why-travel-with-karvaah-heading"
      className="
        relative
        overflow-hidden
        bg-[#F7F5F0]
        py-8
        sm:py-10
        lg:min-h-[calc(100svh-158px)]
        lg:py-9
        xl:py-10
      "
    >
      <div className="mx-auto flex h-full max-w-[1380px] flex-col px-5 sm:px-8 lg:px-10">

        {/* =========================================================
            COMPACT EDITORIAL HEADER
        ========================================================= */}

        <motion.header
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="mb-6 flex items-center justify-between lg:mb-7"
        >
          <div className="flex items-center gap-3">

            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { width: 0 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { width: 42 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
              aria-hidden="true"
              className="h-px bg-[#C99016]"
            />

            <span className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#60748A]
            ">
              Why Travel With Karvaah?
            </span>

            <span
              aria-hidden="true"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#D9C28D]
              "
            >
              <Compass
                size={13}
                strokeWidth={1.4}
                className="text-[#C99016]"
              />
            </span>

          </div>

          <span className="
            hidden
            text-[9px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#A1A8AE]
            sm:block
          ">
            Nepal · India
          </span>
        </motion.header>


        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div
          className="
            grid
            flex-1
            overflow-hidden
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >

          {/* =======================================================
              LEFT — EDITORIAL NAVY PANEL
          ======================================================= */}

          <motion.article
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease,
            }}
            className="
              relative
              flex
              min-h-[510px]
              flex-col
              justify-between
              overflow-hidden
              bg-[#0B2942]
              px-7
              py-8
              sm:px-9
              sm:py-9
              lg:min-h-0
              lg:px-10
              lg:py-10
              xl:px-12
            "
          >

            {/* Animated circular editorial detail */}

            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-[#D39A17]/10
              "
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-[160px]
                w-[160px]
                rounded-full
                border
                border-white/[0.05]
              "
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Gold vertical accent */}

            <motion.span
              aria-hidden="true"
              initial={
                shouldReduceMotion
                  ? false
                  : { height: 0 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { height: 88 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="
                absolute
                left-0
                top-10
                w-[3px]
                bg-[#D39A17]
              "
            />


            {/* Top label */}

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-[#D39A17]"
                />

                <span className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D7B15F]
                ">
                  The Karvaah Difference
                </span>

              </div>


              {/* =================================================
                  SEO FRIENDLY MAIN HEADING
              ================================================= */}

              <h2
                id="why-travel-with-karvaah-heading"
                className="
                  mt-7
                  max-w-[570px]
                  font-serif
                  text-[38px]
                  font-medium
                  leading-[1.03]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[45px]
                  lg:text-[46px]
                  xl:text-[52px]
                "
              >

                <motion.span
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15,
                    ease,
                  }}
                  className="block"
                >
                  More than a trip.
                </motion.span>

                <motion.span
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.27,
                    ease,
                  }}
                  className="block text-[#D39A17]"
                >
                  A journey thoughtfully
                </motion.span>

                <motion.span
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.39,
                    ease,
                  }}
                  className="block"
                >
                  crafted for you.
                </motion.span>

              </h2>


              {/* Supporting copy */}

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease,
                }}
                className="
                  mt-5
                  max-w-[470px]
                  text-[13px]
                  leading-6
                  text-[#B9C5D0]
                  sm:text-[14px]
                "
              >
                From your first enquiry to the moment you return home,
                we take care of the details so you can focus on
                experiencing Nepal and India.
              </motion.p>

            </div>


            {/* =================================================
                BOTTOM LEFT CONTENT
            ================================================= */}

            <div className="relative z-10 mt-8">

              {/* Quote */}

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -15,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                  ease,
                }}
                className="flex items-start gap-3"
              >

                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-8 shrink-0 bg-[#D39A17]"
                />

                <p className="
                  font-serif
                  text-[14px]
                  italic
                  leading-5
                  text-[#E6E0D5]
                ">
                  Local knowledge. Thoughtful planning.
                  <br />
                  Genuine hospitality.
                </p>

              </motion.div>


              {/* About button */}

              <motion.a
                href="/about"
                aria-label="Learn more about Karvaah travel services"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.65,
                  ease,
                }}
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-[12px]
                  font-semibold
                  text-white
                "
              >

                <span className="
                  border-b
                  border-white/30
                  pb-1
                  transition-colors
                  duration-300
                  group-hover:border-[#D39A17]
                ">
                  About Karvaah
                </span>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D39A17]
                    text-[#0B2942]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-white
                  "
                >
                  <ArrowUpRight size={14} />
                </span>

              </motion.a>

            </div>


            {/* =================================================
                ANIMATED HIMALAYAN CONTOUR
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                h-[100px]
                opacity-60
              "
            >
              <svg
                viewBox="0 0 800 140"
                preserveAspectRatio="none"
                className="h-full w-full"
                fill="none"
              >

                <motion.path
                  d="
                    M0 130
                    L70 92
                    L115 105
                    L175 55
                    L230 92
                    L300 35
                    L355 82
                    L415 50
                    L470 92
                    L535 40
                    L595 83
                    L660 32
                    L735 72
                    L800 15
                  "
                  stroke="#D39A17"
                  strokeWidth="1.2"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          pathLength: 0,
                          opacity: 0,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          pathLength: 1,
                          opacity: 0.45,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    pathLength: {
                      duration: 1.8,
                      delay: 0.2,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 0.4,
                    },
                  }}
                />

              </svg>
            </div>

          </motion.article>


          {/* =======================================================
              RIGHT — SIX BENEFITS
          ======================================================= */}

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            aria-label="Why choose Karvaah for Nepal and India travel"
            className="
              grid
              grid-cols-1
              bg-white
              sm:grid-cols-2
            "
          >

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.li
                  key={benefit.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 25,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.55,
                        ease,
                      },
                    },
                  }}
                  className={`
                    group
                    relative
                    flex
                    min-h-[180px]
                    flex-col
                    justify-between
                    border-[#E5E1D8]
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#FCFBF8]
                    sm:min-h-0
                    sm:p-7
                    lg:p-7
                    xl:p-8

                    ${index % 2 === 0 ? "sm:border-r" : ""}

                    ${index < 4 ? "border-b" : ""}
                  `}
                >

                  {/* =================================================
                      TOP
                  ================================================= */}

                  <div className="flex items-start justify-between">

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.25em]
                        text-[#9BA5AE]
                        transition-colors
                        duration-300
                        group-hover:text-[#C99016]
                      "
                    >
                      {benefit.number}
                    </span>


                    {/* Icon */}

                    <motion.span
                      aria-hidden="true"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                              rotate: 6,
                            }
                      }
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DDD9D0]
                        transition-all
                        duration-300
                        group-hover:border-[#C99016]
                        group-hover:bg-[#FFF9EA]
                      "
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.4}
                        className="
                          text-[#0B2942]
                          transition-colors
                          duration-300
                          group-hover:text-[#C99016]
                        "
                      />
                    </motion.span>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="mt-6">

                    <h3
                      className="
                        font-serif
                        text-[20px]
                        font-medium
                        leading-tight
                        text-[#0B2942]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        lg:text-[21px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[280px]
                        text-[12px]
                        leading-5
                        text-[#718196]
                        lg:text-[13px]
                      "
                    >
                      {benefit.description}
                    </p>

                  </div>


                  {/* =================================================
                      HOVER ACCENT
                  ================================================= */}

                  <motion.span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[#C99016]
                      transition-all
                      duration-300
                      group-hover:w-12
                    "
                  />

                </motion.li>
              );
            })}

          </motion.ul>

        </div>


        {/* =========================================================
            COMPACT TRUST STRIP
        ========================================================= */}

        <motion.ul
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 8 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease,
          }}
          aria-label="Karvaah travel strengths"
          className="
            grid
            grid-cols-2
            border-b
            border-[#DDD8CE]
            sm:grid-cols-4
          "
        >

          {trustPoints.map((point, index) => (
            <li
              key={point}
              className={`
                flex
                items-center
                gap-2
                py-4
                ${index < 2 ? "border-b sm:border-b-0" : ""}
                ${
                  index % 2 === 0
                    ? "sm:border-r"
                    : ""
                }
                ${
                  index !== 0
                    ? "sm:pl-6"
                    : ""
                }
              `}
            >

              <motion.span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#C99016]
                "
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.3, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  tracking-[0.16em]
                  text-[#65768A]
                  sm:text-[9px]
                "
              >
                {point}
              </span>

            </li>
          ))}

        </motion.ul>

      </div>
    </section>
  );
}