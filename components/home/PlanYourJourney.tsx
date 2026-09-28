"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function PlanYourJourney() {
  const prefersReducedMotion = useReducedMotion();

  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello Karvaahh, I would like to plan a trip.

Destination: ${destination || "Not decided yet"}
Travel Date: ${travelDate || "Flexible"}
Number of Travelers: ${travelers}`;

    const whatsappUrl = `https://wa.me/9779766861547?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="plan-your-journey"
      aria-labelledby="plan-journey-heading"
      className="relative overflow-hidden bg-[#F8F6F1] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full border border-[#D39A17]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-32 h-[260px] w-[260px] rounded-full border border-[#0B2942]/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -bottom-40 h-[520px] w-[520px] rounded-full border border-[#D39A17]/10"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-7"
        >
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#D39A17]"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#58718A]">
              Plan Your Journey With Us
            </span>

            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/45"
            >
              <Sparkles
                size={11}
                strokeWidth={1.5}
                className="text-[#C9910B]"
              />
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2
                id="plan-journey-heading"
                className="font-serif text-[40px] font-medium leading-[0.98] tracking-[-0.045em] text-[#0B2942] sm:text-[52px] lg:text-[60px]"
              >
                Your journey starts{" "}
                <span className="text-[#C9910B]">
                  with a conversation.
                </span>
              </h2>

              <p className="mt-3 max-w-[760px] text-[11px] leading-5 text-[#60788F] sm:text-[12px]">
                Tell us where you want to go, when you want to travel
                and who you are travelling with. We&apos;ll help turn
                your ideas into a thoughtful journey across Nepal and
                India.
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <div className="font-serif text-[52px] leading-none text-[#0B2942]/10">
                01
              </div>

              <div className="mt-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8A949B]">
                Start planning
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DDD8CE]" />

          <span className="h-2 w-2 rounded-full bg-[#D39A17]" />

          <span className="h-px w-12 bg-[#D39A17]" />

          <span className="h-2 w-2 rounded-full bg-[#D39A17]" />

          <div className="h-px flex-1 bg-[#DDD8CE]" />
        </div>

        {/* =====================================================
            MAIN CTA
        ====================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.98 }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden bg-[#0B2942]"
        >
          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="absolute inset-0 lg:left-[48%]">
            <Image
              src="/images/journeys/plan-your-journey.jpg"
              alt="Travellers enjoying a scenic Himalayan journey in Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#0B2942]/35"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#0B2942] via-[#0B2942]/65 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#071D2E]/70 to-transparent"
            />
          </div>

          {/* =================================================
              DECORATIVE ROUTE LINE
          ================================================== */}

          <motion.div
            aria-hidden="true"
            initial={
              prefersReducedMotion
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            whileInView={{
              pathLength: 1,
              opacity: 0.7,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[6%] top-[10%] hidden h-[80%] w-[40%] lg:block"
          >
            <svg
              viewBox="0 0 500 400"
              fill="none"
              className="h-full w-full"
            >
              <motion.path
                d="M20 350 C100 300 70 230 170 210 C280 185 200 100 330 100 C390 100 430 65 475 20"
                stroke="#D39A17"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              />

              <circle
                cx="20"
                cy="350"
                r="5"
                fill="#D39A17"
              />

              <circle
                cx="475"
                cy="20"
                r="5"
                fill="#D39A17"
              />
            </svg>
          </motion.div>

          {/* =================================================
              CTA CONTENT
          ================================================== */}

          <div className="relative z-10 grid min-h-[470px] lg:grid-cols-[48%_52%]">

            {/* LEFT */}

            <div className="flex flex-col justify-between px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-12">

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#D5A22B]">
                    Let&apos;s plan something meaningful
                  </span>

                  <span className="flex items-center gap-2 text-[7px] uppercase tracking-[0.18em] text-white/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D39A17]" />
                    Karvaahh
                  </span>
                </div>

                <h3 className="max-w-[560px] font-serif text-[38px] leading-[1.02] tracking-[-0.035em] text-white sm:text-[46px] lg:text-[52px]">
                  Tell us where{" "}
                  <span className="text-[#D5A22B]">
                    you dream
                  </span>{" "}
                  of going.
                </h3>

                <p className="mt-4 max-w-[500px] text-[11px] leading-5 text-white/65">
                  From Himalayan adventures and spiritual journeys
                  to cultural escapes and family holidays, we design
                  trips around you.
                </p>
              </div>

              {/* Trust strip */}

              <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-5">
                <div>
                  <div className="font-serif text-[23px] text-white">
                    Nepal
                  </div>

                  <div className="mt-1 text-[6px] uppercase tracking-[0.18em] text-white/45">
                    Local expertise
                  </div>
                </div>

                <div className="border-l border-white/10 pl-4">
                  <div className="font-serif text-[23px] text-white">
                    India
                  </div>

                  <div className="mt-1 text-[6px] uppercase tracking-[0.18em] text-white/45">
                    Curated journeys
                  </div>
                </div>

                <div className="border-l border-white/10 pl-4">
                  <div className="font-serif text-[23px] text-white">
                    24/7
                  </div>

                  <div className="mt-1 text-[6px] uppercase tracking-[0.18em] text-white/45">
                    Journey support
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div className="relative flex items-center px-5 py-7 sm:px-9 lg:px-12">

              <div className="w-full max-w-[510px]">

                <div className="mb-5">
                  <span className="text-[7px] font-semibold uppercase tracking-[0.26em] text-[#D5A22B]">
                    Start with the essentials
                  </span>

                  <h3 className="mt-2 font-serif text-[27px] leading-tight text-white">
                    Plan your trip
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >

                  {/* Destination */}

                  <div className="group relative">
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#D39A17]"
                    />

                    <label
                      htmlFor="destination"
                      className="sr-only"
                    >
                      Destination
                    </label>

                    <select
                      id="destination"
                      value={destination}
                      onChange={(event) =>
                        setDestination(event.target.value)
                      }
                      className="h-[54px] w-full appearance-none rounded-none border border-white/15 bg-white/[0.08] pl-11 pr-4 text-[11px] text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-[#D39A17] focus:bg-white/[0.12]"
                    >
                      <option
                        value=""
                        className="bg-[#0B2942] text-white"
                      >
                        Where would you like to go?
                      </option>

                      <option
                        value="Nepal"
                        className="bg-[#0B2942] text-white"
                      >
                        Nepal
                      </option>

                      <option
                        value="Kathmandu"
                        className="bg-[#0B2942] text-white"
                      >
                        Kathmandu
                      </option>

                      <option
                        value="Pokhara"
                        className="bg-[#0B2942] text-white"
                      >
                        Pokhara
                      </option>

                      <option
                        value="Muktinath"
                        className="bg-[#0B2942] text-white"
                      >
                        Muktinath
                      </option>

                      <option
                        value="Chitwan"
                        className="bg-[#0B2942] text-white"
                      >
                        Chitwan
                      </option>

                      <option
                        value="India"
                        className="bg-[#0B2942] text-white"
                      >
                        India
                      </option>

                      <option
                        value="Char Dham"
                        className="bg-[#0B2942] text-white"
                      >
                        Char Dham
                      </option>

                      <option
                        value="Kailash Mansarovar"
                        className="bg-[#0B2942] text-white"
                      >
                        Kailash Mansarovar
                      </option>
                    </select>
                  </div>

                  {/* Date + Travelers */}

                  <div className="grid grid-cols-2 gap-3">

                    <div className="relative">
                      <CalendarDays
                        size={14}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#D39A17]"
                      />

                      <label
                        htmlFor="travel-date"
                        className="sr-only"
                      >
                        Travel date
                      </label>

                      <input
                        id="travel-date"
                        type="date"
                        value={travelDate}
                        onChange={(event) =>
                          setTravelDate(event.target.value)
                        }
                        className="h-[54px] w-full border border-white/15 bg-white/[0.08] px-3 pl-11 text-[10px] text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-[#D39A17] focus:bg-white/[0.12]"
                      />
                    </div>

                    <div className="relative">
                      <Users
                        size={14}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#D39A17]"
                      />

                      <label
                        htmlFor="travelers"
                        className="sr-only"
                      >
                        Number of travelers
                      </label>

                      <select
                        id="travelers"
                        value={travelers}
                        onChange={(event) =>
                          setTravelers(event.target.value)
                        }
                        className="h-[54px] w-full appearance-none border border-white/15 bg-white/[0.08] pl-11 pr-3 text-[10px] text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-[#D39A17] focus:bg-white/[0.12]"
                      >
                        <option
                          value="1"
                          className="bg-[#0B2942]"
                        >
                          1 Traveller
                        </option>

                        <option
                          value="2"
                          className="bg-[#0B2942]"
                        >
                          2 Travellers
                        </option>

                        <option
                          value="3"
                          className="bg-[#0B2942]"
                        >
                          3 Travellers
                        </option>

                        <option
                          value="4"
                          className="bg-[#0B2942]"
                        >
                          4 Travellers
                        </option>

                        <option
                          value="5"
                          className="bg-[#0B2942]"
                        >
                          5 Travellers
                        </option>

                        <option
                          value="6+"
                          className="bg-[#0B2942]"
                        >
                          6+ Travellers
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Submit */}

                  <motion.button
                    type="submit"
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 1.015,
                          }
                    }
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 0.985,
                          }
                    }
                    className="group flex h-[56px] w-full items-center justify-between bg-[#D39A17] px-5 text-[#0B2942] transition-colors duration-300 hover:bg-[#E2B23A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em]">
                      Plan My Trip
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B2942] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight
                        size={13}
                        aria-hidden="true"
                      />
                    </span>
                  </motion.button>
                </form>

                <p className="mt-3 text-center text-[7px] uppercase tracking-[0.13em] text-white/35">
                  No commitment · Personalised assistance · Quick response
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MICRO CTA
        ====================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row"
        >
          <p className="text-center text-[8px] uppercase tracking-[0.18em] text-[#7B8994] sm:text-left">
            From first idea to final farewell — we&apos;re with you.
          </p>

          <a
            href="tel:+9779766861547"
            className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#0B2942] transition-colors hover:text-[#C9910B]"
          >
            Speak with our travel team
            <ArrowRight size={12} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}