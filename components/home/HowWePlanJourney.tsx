"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Compass,
  MessageCircle,
  PlaneTakeoff,
} from "lucide-react";

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    description:
      "Share where you want to go, what you want to experience, your dates, pace and preferences.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "We Design Your Trip",
    description:
      "Our local travel experts shape the route, stays and experiences around your journey.",
    icon: Compass,
  },
  {
    number: "03",
    title: "You Approve",
    description:
      "Review the itinerary, make changes and confirm your journey when everything feels right.",
    icon: Check,
  },
  {
    number: "04",
    title: "Travel With Confidence",
    description:
      "We handle the essential arrangements and remain available throughout your journey.",
    icon: PlaneTakeoff,
  },
];

export default function HowWePlanJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-plan"
      aria-labelledby="how-we-plan-heading"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F1]
        text-[#0B2942]
      "
    >
      {/* =========================================================
          DECORATIVE EDITORIAL ELEMENTS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#D39A17]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          top-[-105px]
          h-[270px]
          w-[270px]
          rounded-full
          border
          border-[#0B2942]/[0.04]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          h-px
          w-24
          bg-[#D39A17]/50
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-[72px]
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.header
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            grid
            gap-7
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <div className="max-w-[780px]">
            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10
                  bg-[#D39A17]
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#59718A]
                "
              >
                How We Plan Your Journey
              </span>

              <span
                aria-hidden="true"
                className="
                  h-6
                  w-6
                  rounded-full
                  border
                  border-[#D39A17]/50
                "
              />
            </div>

            {/* Heading */}

            <h2
              id="how-we-plan-heading"
              className="
                max-w-[760px]
                font-serif
                text-[38px]
                font-medium
                leading-[1.04]
                tracking-[-0.025em]
                text-[#0B2942]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              From an idea
              <span className="text-[#C98F0A]">
                {" "}
                to a journey.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[650px]
                text-[13px]
                leading-[1.75]
                text-[#607892]
                sm:text-[14px]
              "
            >
              Custom travel should feel exciting, not complicated.
              Tell us what you have in mind and we&apos;ll take care
              of the planning, details and arrangements.
            </p>
          </div>

          {/* Small editorial statement */}

          <div
            className="
              hidden
              max-w-[250px]
              border-l
              border-[#DDD8CC]
              pl-5
              lg:block
            "
          >
            <p
              className="
                font-serif
                text-[17px]
                italic
                leading-[1.45]
                text-[#0B2942]
              "
            >
              Your journey,
              <br />
              thoughtfully planned.
            </p>
          </div>
        </motion.header>

        {/* =======================================================
            JOURNEY PROCESS
        ======================================================== */}

        <div className="relative mt-12 lg:mt-14">
          {/* =====================================================
              DESKTOP CONNECTING LINE
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[31px]
              hidden
              h-px
              bg-[#DED9CE]
              lg:block
            "
          />

          {/* Animated gold progress line */}

          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    scaleX: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[31px]
              hidden
              h-px
              bg-[#D39A17]
              lg:block
            "
          />

          {/* =====================================================
              MOBILE/TABLET LINE
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-5
              left-[25px]
              top-5
              w-px
              bg-[#DED9CE]
              sm:left-[29px]
              lg:hidden
            "
          />

          {/* =====================================================
              STEPS
          ====================================================== */}

          <ol
            className="
              relative
              grid
              grid-cols-1
              gap-7
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 28,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="
                    group
                    relative
                    lg:text-center
                  "
                >
                  {/* =================================================
                      STEP MARKER
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-4
                      lg:mx-auto
                      lg:block
                    "
                  >
                    {/* Number */}

                    <div
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8D2C6]
                        bg-[#F8F6F1]
                        transition-all
                        duration-500
                        group-hover:border-[#D39A17]
                        group-hover:bg-[#0B2942]
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[16px]
                          text-[#0B2942]
                          transition-colors
                          duration-500
                          group-hover:text-[#D39A17]
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#E2DDD3]
                        bg-white
                        text-[#0B2942]
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:border-[#D39A17]
                        group-hover:text-[#C98F0A]
                        lg:absolute
                        lg:-right-1
                        lg:top-[-6px]
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.4}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      ml-[66px]
                      mt-[-48px]
                      pt-[62px]
                      lg:ml-0
                      lg:mt-6
                      lg:pt-0
                    "
                  >
                    <h3
                      className="
                        font-serif
                        text-[22px]
                        font-medium
                        leading-[1.15]
                        text-[#0B2942]
                        transition-colors
                        duration-300
                        group-hover:text-[#B77D00]
                        sm:text-[24px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2.5
                        max-w-[280px]
                        text-[11px]
                        leading-[1.7]
                        text-[#71859A]
                        lg:mx-auto
                        lg:text-[12px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
                      HOVER DETAIL
                  ================================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[-10px]
                      left-[66px]
                      h-px
                      w-0
                      bg-[#D39A17]
                      transition-all
                      duration-500
                      group-hover:w-12
                      lg:bottom-[-18px]
                      lg:left-1/2
                      lg:-translate-x-1/2
                    "
                  />
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-[#DDD8CC]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-14
          "
        >
          {/* Trust statement */}

          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#D39A17]
              "
            />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#71859A]
              "
            >
              Simple planning. Thoughtful travel.
            </p>
          </div>

          {/* CTA */}

          <Link
            href="/plan-your-journey"
            aria-label="Plan your journey with Karvaah"
            className="
              group
              inline-flex
              items-center
              gap-3
              self-start
              text-[11px]
              font-semibold
              text-[#0B2942]
              sm:self-auto
            "
          >
            <span
              className="
                border-b
                border-[#0B2942]/20
                pb-1
                transition-colors
                duration-300
                group-hover:border-[#D39A17]
                group-hover:text-[#B77D00]
              "
            >
              Start planning your journey
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
                bg-[#0B2942]
                text-white
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:bg-[#D39A17]
                group-hover:text-[#0B2942]
              "
            >
              <ArrowRight size={12} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}