"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MountainSnow,
} from "lucide-react";

import {
  formatFromPrice,
  type Journey,
} from "./journeys.data";

type JourneyCardProps = {
  journey: Journey;
  index: number;
};

export default function JourneyCard({
  journey,
  index,
}: JourneyCardProps) {
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] =
    useState(false);

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 20,
              scale: 0.98,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative
        flex
        w-[86vw]
        max-w-[370px]
        shrink-0
        snap-start
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-[#E1DDD4]
        bg-white
        shadow-[0_8px_30px_rgba(16,42,67,0.06)]
        transition-shadow
        duration-500
        hover:border-[#D6D0C5]
        hover:shadow-[0_20px_45px_rgba(16,42,67,0.12)]

        sm:w-[72vw]
        sm:max-w-[400px]

        md:w-auto
        md:max-w-none
      "
    >
      {/* ==========================================================
          IMAGE
      ========================================================== */}

      <div
        className="
          relative
          h-[155px]
          w-full
          shrink-0
          overflow-hidden
          bg-[#102A43]

          sm:h-[165px]

          lg:h-[175px]

          xl:h-[180px]
        "
      >
        {!imageFailed ? (
          <Image
            src={journey.image}
            alt={journey.imageAlt}
            fill
            priority={index === 0}
            sizes="
              (min-width: 1280px) 25vw,
              (min-width: 1024px) 25vw,
              (min-width: 768px) 50vw,
              86vw
            "
            onError={() => setImageFailed(true)}
            className="
              object-cover
              transition-transform
              duration-[1000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.07]
              motion-reduce:transform-none
            "
          />
        ) : (
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-[#173A55]
              via-[#102A43]
              to-[#081A2A]
            "
          >
            <MountainSnow
              className="h-10 w-10 text-white/20"
              strokeWidth={1}
            />
          </div>
        )}

        {/* Subtle image depth */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071A2B]/45
            via-transparent
            to-transparent
          "
        />

        {/* Badge */}

        {journey.badge ? (
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -8,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.15 + index * 0.08,
            }}
            className="
              absolute
              left-3
              top-3
              inline-flex
              items-center
              rounded-full
              border
              border-white/60
              bg-white/95
              px-2.5
              py-1
              shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            "
          >
            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#102A43]
              "
            >
              {journey.badge}
            </span>
          </motion.div>
        ) : null}
      </div>

      {/* ==========================================================
          CONTENT
      ========================================================== */}

      <div className="flex flex-1 flex-col">
        <div
          className="
            flex-1
            px-4
            pb-3
            pt-3.5

            sm:px-4.5
            sm:pt-4
          "
        >
          {/* Destination */}

          <h3
            className="
              line-clamp-1
              font-serif
              text-[20px]
              font-medium
              leading-[1.05]
              tracking-[-0.025em]
              text-[#102A43]
              transition-colors
              duration-300
              group-hover:text-[#B87800]

              sm:text-[21px]
            "
          >
            <Link
              href={`/journeys/${journey.slug}`}
              className="
                outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#C48608]
                focus-visible:ring-offset-2
              "
            >
              {journey.destination}
            </Link>
          </h3>

          {/* Descriptor */}

          <p
            className="
              mt-1
              line-clamp-1
              text-[11px]
              leading-4
              text-[#7B8794]
            "
          >
            {journey.descriptor}
          </p>

          {/* Package details */}

          <div
            className="
              mt-2.5
              border-t
              border-[#EEEAE2]
              pt-2
            "
          >
            <ul
              className="
                space-y-0.5
                text-[10.5px]
                leading-[1.4]
                text-[#64748B]
              "
            >
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="
                    mt-[5px]
                    h-[4px]
                    w-[4px]
                    shrink-0
                    rounded-full
                    bg-[#C48608]
                  "
                />

                <span>
                  {journey.duration}
                </span>
              </li>

              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="
                    mt-[5px]
                    h-[4px]
                    w-[4px]
                    shrink-0
                    rounded-full
                    bg-[#C48608]
                  "
                />

                <span>
                  Hotel, Transportation &amp; Meals
                </span>
              </li>

              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="
                    mt-[5px]
                    h-[4px]
                    w-[4px]
                    shrink-0
                    rounded-full
                    bg-[#C48608]
                  "
                />

                <span>Permits</span>
              </li>
            </ul>
          </div>

          {/* Arrival */}

          <p
            className="
              mt-2
              line-clamp-1
              text-[10px]
              leading-4
              text-[#6B7785]
            "
          >
            <span
              className="
                font-semibold
                text-[#253B53]
              "
            >
              Arrival Point:
            </span>{" "}
            Via Kathmandu · Via Gorakhpur · Via Raxaul
          </p>

          {/* Price */}

          <div
            className="
              mt-2
              flex
              items-end
              justify-between
              border-t
              border-[#EEEAE2]
              pt-2
            "
          >
            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#98A0AA]
                "
              >
                Starting From
              </p>

              <p
                className="
                  mt-0.5
                  text-[14px]
                  font-bold
                  tracking-[-0.01em]
                  text-[#102A43]

                  sm:text-[15px]
                "
              >
                {formatFromPrice(
                  journey.priceFrom
                )}
              </p>
            </div>

            <span
              className="
                text-[8px]
                font-medium
                text-[#98A0AA]
              "
            >
              per journey
            </span>
          </div>
        </div>

        {/* ========================================================
            ACTION BUTTONS
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-2
            border-t
            border-[#E7E3DA]
          "
        >
          <Link
            href={`/contact?journey=${encodeURIComponent(
              journey.destination
            )}`}
            className="
              flex
              h-[40px]
              items-center
              justify-center
              border-r
              border-white/20
              bg-[#E93445]
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#D82C3D]
              active:bg-[#C92535]

              sm:h-[42px]
            "
          >
            Enquire Now
          </Link>

          <Link
            href={`/journeys/${journey.slug}`}
            className="
              group/details
              flex
              h-[40px]
              items-center
              justify-center
              gap-1.5
              bg-[#21438D]
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#193875]
              active:bg-[#142E64]

              sm:h-[42px]
            "
          >
            View Details

            <ArrowRight
              className="
                h-3
                w-3
                transition-transform
                duration-300
                group-hover/details:translate-x-1
              "
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}