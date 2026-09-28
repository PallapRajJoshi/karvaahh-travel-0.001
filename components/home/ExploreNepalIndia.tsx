"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  MapPin,
} from "lucide-react";

const destinations = [
  {
    name: "Kathmandu",
    country: "Nepal",
    description:
      "Ancient temples, living heritage and the cultural heart of Nepal.",
    image: "/images/home/swayambhu-view.jpg",
    href: "/destinations/kathmandu",
    featured: true,
  },
  {
    name: "Pokhara",
    country: "Nepal",
    description:
      "Lakeside calm, mountain views and unforgettable Himalayan experiences.",
    image: "/images/home/pokhara.jpg",
    href: "/destinations/pokhara",
  },
  {
    name: "Chitwan",
    country: "Nepal",
    description:
      "Jungle adventures, wildlife and a different side of Nepal.",
    image: "/images/home/chitwan-view.jpg",
    href: "/destinations/chitwan",
  },
  {
    name: "Muktinath",
    country: "Nepal",
    description:
      "A sacred Himalayan destination surrounded by dramatic landscapes.",
    image: "/images/home/muktinath-view.jpg",
    href: "/destinations/muktinath",
  },
  {
    name: "Delhi",
    country: "India",
    description:
      "History, culture and the vibrant energy of modern India.",
    image: "/images/home/delhi.jpg",
    href: "/destinations/delhi",
  },
  {
    name: "Rajasthan",
    country: "India",
    description:
      "Royal forts, desert landscapes and timeless heritage.",
    image: "/images/destinations/rajasthan.jpg",
    href: "/destinations/rajasthan",
  },
  {
    name: "Varanasi",
    country: "India",
    description:
      "Sacred ghats, timeless rituals and the spiritual soul of India.",
    image: "/images/destinations/varanasi.jpg",
    href: "/destinations/varanasi",
  },
  {
    name: "Himalayas",
    country: "Nepal & India",
    description:
      "Mountain landscapes, peaceful valleys and unforgettable escapes.",
    image: "/images/destinations/himalaya.jpg",
    href: "/destinations/himalayan-escapes",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExploreNepalIndia() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="explore-nepal-india"
      aria-labelledby="explore-nepal-india-heading"
      className="
        relative
        overflow-hidden
        bg-[#F7F5F0]
        lg:h-[calc(100svh-158px)]
        lg:min-h-[680px]
        lg:max-h-[780px]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1380px]
          flex-col
          px-5
          py-7
          sm:px-8
          sm:py-8
          lg:px-10
          lg:py-7
        "
      >

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.header
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            mb-5
            flex
            shrink-0
            items-end
            justify-between
            gap-6
            lg:mb-6
          "
        >

          <div>

            {/* Eyebrow */}

            <div className="mb-3 flex items-center gap-3">

              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        width: 0,
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        width: 40,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                aria-hidden="true"
                className="h-px bg-[#C99016]"
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#61748A]
                "
              >
                Explore Nepal & India
              </span>

              <span
                aria-hidden="true"
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D9C28D]
                "
              >
                <Compass
                  size={11}
                  strokeWidth={1.4}
                  className="text-[#C99016]"
                />
              </span>

            </div>


            {/* SEO H2 */}

            <h2
              id="explore-nepal-india-heading"
              className="
                max-w-[760px]
                font-serif
                text-[34px]
                font-medium
                leading-[1.02]
                tracking-[-0.025em]
                text-[#0B2942]
                sm:text-[40px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Places worth{" "}
              <span className="text-[#C99016]">
                going further
              </span>{" "}
              for.
            </h2>

            <p
              className="
                mt-3
                max-w-[650px]
                text-[12px]
                leading-5
                text-[#718196]
                sm:text-[13px]
              "
            >
              From the Himalayan valleys of Nepal to the timeless
              heritage of India, discover destinations chosen for
              their character, culture and unforgettable experiences.
            </p>

          </div>


          {/* Destination counter */}

          <div className="
            hidden
            shrink-0
            items-center
            gap-3
            sm:flex
          ">

            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#C99016]"
            />

            <div>

              <p className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#9AA4AE]
              ">
                Destinations
              </p>

              <p className="
                font-serif
                text-[20px]
                leading-none
                text-[#0B2942]
              ">
                08
              </p>

            </div>

          </div>

        </motion.header>


        {/* =========================================================
            DESTINATION GRID
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="
            grid
            min-h-0
            flex-1
            grid-cols-2
            grid-rows-3
            gap-2
            sm:grid-cols-4
            sm:grid-rows-2
            lg:gap-3
          "
        >

          {destinations.map((destination, index) => (
            <motion.article
              key={destination.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  scale: 0.985,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease,
                  },
                },
              }}
              className={`
                group
                relative
                min-h-0
                overflow-hidden
                bg-[#0B2942]

                ${
                  destination.featured
                    ? "col-span-2 row-span-2"
                    : ""
                }

                ${
                  index === 5
                    ? "col-span-2"
                    : ""
                }

                sm:col-span-1
                sm:row-span-1

                ${
                  destination.featured
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }

                ${
                  index === 5
                    ? "sm:col-span-2"
                    : ""
                }
              `}
            >

              <Link
                href={destination.href}
                aria-label={`Explore ${destination.name}, ${destination.country}`}
                className="absolute inset-0"
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <Image
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country} travel destination`}
                  fill
                  priority={index < 2}
                  sizes={
                    destination.featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-out
                    group-hover:scale-[1.08]
                  "
                />


                {/* =================================================
                    OVERLAY
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061A2B]
                    via-[#0B2942]/20
                    to-[#0B2942]/0
                    opacity-90
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-[#0B2942]/0
                    transition-colors
                    duration-500
                    group-hover:bg-[#0B2942]/20
                  "
                />


                {/* =================================================
                    COUNTRY
                ================================================= */}

                <div className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  sm:left-5
                  sm:top-5
                ">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                    "
                  >
                    <MapPin
                      size={10}
                      strokeWidth={1.5}
                      className="text-[#E0B044]"
                    />
                  </span>

                  <span className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                  ">
                    {destination.country}
                  </span>

                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-4
                  sm:p-5
                  lg:p-6
                ">

                  <div className="
                    flex
                    items-end
                    justify-between
                    gap-3
                  ">

                    <div className="min-w-0">

                      <h3
                        className={`
                          truncate
                          font-serif
                          font-medium
                          leading-none
                          text-white
                          ${
                            destination.featured
                              ? "text-[30px] sm:text-[36px] lg:text-[40px]"
                              : "text-[21px] sm:text-[23px]"
                          }
                        `}
                      >
                        {destination.name}
                      </h3>

                      <p className="
                        mt-1.5
                        line-clamp-2
                        max-w-[360px]
                        text-[10px]
                        leading-4
                        text-white/75
                        sm:text-[11px]
                      ">
                        {destination.description}
                      </p>

                    </div>


                    {/* Arrow */}

                    <motion.span
                      aria-hidden="true"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 3,
                              y: -3,
                            }
                      }
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/35
                        text-white
                        transition-all
                        duration-300
                        group-hover:border-[#D39A17]
                        group-hover:bg-[#D39A17]
                        group-hover:text-[#0B2942]
                      "
                    >
                      <ArrowUpRight size={14} />

                    </motion.span>

                  </div>


                  {/* Gold hover line */}

                  <span
                    aria-hidden="true"
                    className="
                      mt-3
                      block
                      h-[2px]
                      w-0
                      bg-[#D39A17]
                      transition-all
                      duration-500
                      group-hover:w-12
                    "
                  />

                </div>

              </Link>

            </motion.article>
          ))}

        </motion.div>


        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-3
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#DDD8CE]
            pb-3
          "
        >

          <span className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#8794A1]
          ">
            Nepal · India · Beyond the ordinary
          </span>


          <Link
            href="/destinations"
            aria-label="Explore all Nepal and India destinations"
            className="
              group
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              text-[#0B2942]
            "
          >

            <span className="
              border-b
              border-[#0B2942]/20
              pb-0.5
              transition-colors
              group-hover:border-[#C99016]
              group-hover:text-[#C99016]
            ">
              Explore all destinations
            </span>

            <span
              aria-hidden="true"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#0B2942]
                text-white
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:bg-[#C99016]
                group-hover:text-[#0B2942]
              "
            >
              <ArrowUpRight size={12} />
            </span>

          </Link>

        </motion.div>

      </div>
    </section>
  );
}