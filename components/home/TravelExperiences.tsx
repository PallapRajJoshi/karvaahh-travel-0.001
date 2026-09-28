"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mountain,
  Sparkles,
  Landmark,
  Trees,
  Crown,
  Users,
} from "lucide-react";
import type { ElementType } from "react";

type Experience = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: ElementType;
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    number: "01",
    title: "Himalayan Adventures",
    description:
      "Trek through dramatic landscapes, mountain villages and unforgettable Himalayan trails.",
    image: "/images/home/adventure.jpg",
    href: "/experiences/himalayan-adventures",
    icon: Mountain,
    featured: true,
  },
  {
    number: "02",
    title: "Spiritual Journeys",
    description:
      "Sacred temples, pilgrimage routes and meaningful journeys across Nepal and India.",
    image: "/images/home/pashupatinath-aarati.jpg",
    href: "/experiences/spiritual-journeys",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Cultural Experiences",
    description:
      "Discover living heritage, local traditions, architecture and authentic culture.",
    image: "/images/home/culture-kathmandu.jpg",
    href: "/experiences/cultural-experiences",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Wildlife & Nature",
    description:
      "Discover jungles, wildlife, national parks and beautiful natural landscapes.",
    image: "/images/home/wild-life-tiger.jpg",
    href: "/experiences/wildlife-nature",
    icon: Trees,
  },
  {
    number: "05",
    title: "Luxury Escapes",
    description:
      "Refined stays, private experiences and comfortable journeys designed around you.",
    image: "/images/home/mountain-hotels.jpg",
    href: "/experiences/luxury-escapes",
    icon: Crown,
  },
  {
    number: "06",
    title: "Family Holidays",
    description:
      "Easy-going holidays designed for families, shared moments and lasting memories.",
    image: "/images/home/family-tour.jpg",
    href: "/experiences/family-holidays",
    icon: Users,
  },
];

export default function TravelExperiences() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="travel-experiences"
      aria-labelledby="travel-experiences-heading"
      className="
        relative
        overflow-hidden
        bg-[#0B2942]
        text-white
        lg:h-[calc(100svh-158px)]
        lg:min-h-[650px]
        lg:max-h-[800px]
      "
    >
      {/* Decorative background circles */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
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
          -right-10
          -top-10
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      {/* Main container */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-[1400px]
          flex-col
          px-5
          py-7
          sm:px-8
          lg:px-10
          lg:py-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
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
            duration: 0.7,
          }}
          className="
            mb-5
            flex
            shrink-0
            items-end
            justify-between
            gap-5
          "
        >
          <div className="max-w-[760px]">
            {/* Eyebrow */}

            <div className="mb-3 flex items-center gap-3">
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
                  text-[#D7B76A]
                "
              >
                Travel Experiences
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
                  border-[#D39A17]/50
                "
              >
                <Sparkles
                  size={11}
                  strokeWidth={1.4}
                  className="text-[#D39A17]"
                />
              </span>
            </div>

            {/* SEO Heading */}

            <h2
              id="travel-experiences-heading"
              className="
                font-serif
                text-[34px]
                font-medium
                leading-[1.04]
                tracking-[-0.025em]
                text-white
                sm:text-[40px]
                lg:text-[47px]
              "
            >
              Travel your way.
              <span className="text-[#D39A17]">
                {" "}
                Experience more.
              </span>
            </h2>

            <p
              className="
                mt-2.5
                max-w-[650px]
                text-[12px]
                leading-[1.65]
                text-white/60
                sm:text-[13px]
              "
            >
              From Himalayan adventures and sacred journeys to
              cultural escapes, wildlife and family holidays,
              discover experiences designed around the way you
              want to travel.
            </p>
          </div>

          {/* Experience count */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-3
              lg:flex
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-[#D39A17]
              "
            />

            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                "
              >
                Curated
              </p>

              <p
                className="
                  font-serif
                  text-[25px]
                  leading-none
                  text-white
                "
              >
                06
              </p>
            </div>
          </div>
        </motion.header>

        {/* =====================================================
            EXPERIENCE GRID
        ====================================================== */}

        <div
          className="
            grid
            flex-1
            grid-cols-1
            gap-2
            sm:grid-cols-2
            lg:grid-cols-12
            lg:grid-rows-2
            lg:gap-3
          "
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-3
            flex
            shrink-0
            items-center
            justify-between
            border-t
            border-white/10
            pt-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/40
            "
          >
            <span
              aria-hidden="true"
              className="text-[#D39A17]"
            >
              ●
            </span>

            <span>Curated Experiences</span>

            <span
              aria-hidden="true"
              className="hidden text-white/20 sm:inline"
            >
              /
            </span>

            <span className="hidden sm:inline">
              Nepal & India
            </span>
          </div>

          <Link
            href="/experiences"
            aria-label="Explore all travel experiences"
            className="
              group
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              text-white
            "
          >
            <span
              className="
                border-b
                border-white/20
                pb-0.5
                transition-colors
                duration-300
                group-hover:border-[#D39A17]
                group-hover:text-[#D39A17]
              "
            >
              View all experiences
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
                border-white/20
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:border-[#D39A17]
                group-hover:bg-[#D39A17]
                group-hover:text-[#0B2942]
              "
            >
              <ArrowUpRight size={11} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   EXPERIENCE CARD
================================================================ */

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  reduceMotion: boolean | null;
};

function ExperienceCard({
  experience,
  index,
  reduceMotion,
}: ExperienceCardProps) {
  const Icon = experience.icon;

  const featured = experience.featured === true;

  /*
   * Desktop layout:
   *
   * ┌────────────────────┬──────────┬──────────┐
   * │                    │ Spiritual│ Cultural │
   * │    HIMALAYAN       ├──────────┼──────────┤
   * │    ADVENTURES      │ Wildlife │ Luxury   │
   * │                    ├──────────┴──────────┤
   * │                    │      Family         │
   * └────────────────────┴─────────────────────┘
   */

  let gridClass = "";

  if (featured) {
    gridClass = `
      sm:col-span-2
      lg:col-span-5
      lg:row-span-2
    `;
  } else {
    const smallIndex = index - 1;

    if (smallIndex === 4) {
      gridClass = `
        sm:col-span-2
        lg:col-span-2
      `;
    } else {
      gridClass = `
        sm:col-span-1
        lg:col-span-2
      `;
    }
  }

  return (
    <motion.article
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
        amount: 0.08,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
      }}
      className={`
        group
        relative
        min-h-[220px]
        overflow-hidden
        border
        border-white/10
        bg-[#071F34]
        ${gridClass}
      `}
    >
      <Link
        href={experience.href}
        aria-label={`Explore ${experience.title}`}
        className="absolute inset-0"
      >
        {/* IMAGE */}

        <Image
          src={experience.image}
          alt={`${experience.title} travel experience in Nepal and India`}
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 42vw"
              : "(max-width: 768px) 50vw, 20vw"
          }
          className="
            object-cover
            opacity-75
            transition-transform
            duration-[1200ms]
            ease-out
            group-hover:scale-[1.08]
            group-hover:opacity-100
          "
        />

        {/* DARK GRADIENT */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#031725]
            via-[#0B2942]/55
            to-[#0B2942]/5
          "
        />

        {/* HOVER OVERLAY */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[#D39A17]/0
            transition-all
            duration-500
            group-hover:bg-[#D39A17]/[0.06]
          "
        />

        {/* TOP NUMBER */}

        <span
          className="
            absolute
            left-4
            top-4
            text-[9px]
            font-medium
            tracking-[0.22em]
            text-[#D7B76A]
            sm:left-5
            sm:top-5
          "
        >
          {experience.number}
        </span>

        {/* ICON */}

        <span
          className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            text-white/80
            transition-all
            duration-500
            group-hover:border-[#D39A17]
            group-hover:bg-[#D39A17]
            group-hover:text-[#0B2942]
            sm:right-5
            sm:top-5
          "
        >
          <Icon
            size={14}
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </span>

        {/* CONTENT */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            right-0
            ${
              featured
                ? "p-5 sm:p-7 lg:p-8"
                : "p-4 sm:p-5"
            }
          `}
        >
          <p
            className="
              mb-1.5
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#D7B76A]
            "
          >
            Karvaah Experience
          </p>

          <h3
            className={`
              font-serif
              font-medium
              leading-[1.05]
              text-white
              transition-transform
              duration-500
              group-hover:-translate-y-1
              ${
                featured
                  ? "text-[30px] sm:text-[36px] lg:text-[42px]"
                  : "text-[21px] sm:text-[23px]"
              }
            `}
          >
            {experience.title}
          </h3>

          <p
            className={`
              mt-2
              text-white/65
              ${
                featured
                  ? "max-w-[440px] text-[12px] leading-5 sm:text-[13px]"
                  : "line-clamp-2 max-w-[300px] text-[10px] leading-[1.5] sm:text-[11px]"
              }
            `}
          >
            {experience.description}
          </p>

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/80
            "
          >
            <span>Explore experience</span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.5}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </div>

          {/* GOLD ANIMATED LINE */}

          <span
            aria-hidden="true"
            className="
              mt-3
              block
              h-px
              w-8
              bg-[#D39A17]
              transition-all
              duration-500
              group-hover:w-16
            "
          />
        </div>
      </Link>
    </motion.article>
  );
}