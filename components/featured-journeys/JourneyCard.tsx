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
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 14,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        w-[88vw]
        max-w-[390px]
        shrink-0
        snap-start
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-[#E2DED6]
        bg-white
        shadow-[0_8px_28px_rgba(16,42,67,0.055)]
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#D6D0C5]
        hover:shadow-[0_20px_45px_rgba(16,42,67,0.12)]

        sm:w-[72vw]
        sm:max-w-[440px]

        md:w-auto
        md:max-w-none

        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative
          h-[175px]
          w-full
          shrink-0
          overflow-hidden
          bg-[#102A43]

          sm:h-[185px]

          lg:h-[190px]
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
              88vw
            "
            onError={() => setImageFailed(true)}
            className="
              object-cover
              transition-transform
              duration-[900ms]
              ease-out
              group-hover:scale-[1.045]
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
              className="
                h-10
                w-10
                text-white/20
              "
              strokeWidth={1}
            />
          </div>
        )}

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071A2B]/35
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Badge */}
        {journey.badge ? (
          <div
            className="
              absolute
              left-4
              top-4
              inline-flex
              items-center
              rounded-full
              border
              border-white/50
              bg-white/95
              px-3
              py-1.5
              shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            "
          >
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#102A43]
              "
            >
              {journey.badge}
            </span>
          </div>
        ) : null}
      </div>

      {/* =====================================================
          CONTENT
          SAME CONTENT ON DESKTOP + MOBILE
      ===================================================== */}

      <div className="flex flex-1 flex-col">
        <div
          className="
            flex-1
            px-4
            pb-3.5
            pt-4

            sm:px-5
          "
        >
          {/* Destination */}
          <h3
            className="
              line-clamp-1
              font-serif
              text-[21px]
              font-medium
              leading-[1.1]
              tracking-[-0.025em]
              text-[#102A43]
              transition-colors
              duration-300
              group-hover:text-[#B87800]

              sm:text-[22px]
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
              text-[11.5px]
              leading-4
              text-[#7B8794]

              sm:text-[12px]
            "
          >
            {journey.descriptor}
          </p>

          {/* Package details */}
          <div
            className="
              mt-3
              border-t
              border-[#EEEAE2]
              pt-2.5
            "
          >
            <ul
              className="
                space-y-1
                text-[11.5px]
                leading-[1.45]
                text-[#64748B]

                sm:text-[12px]
              "
            >
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="
                    mt-[6px]
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
                    mt-[6px]
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
                    mt-[6px]
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
              mt-2.5
              line-clamp-2
              text-[11px]
              leading-[1.45]
              text-[#6B7785]

              sm:text-[11.5px]
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
              mt-2.5
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
                  text-[8px]
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
                  text-[15px]
                  font-bold
                  tracking-[-0.01em]
                  text-[#102A43]

                  sm:text-[16px]
                "
              >
                {formatFromPrice(
                  journey.priceFrom
                )}
              </p>
            </div>

            <span
              className="
                text-[9px]
                font-medium
                text-[#98A0AA]
              "
            >
              per journey
            </span>
          </div>
        </div>

        {/* =====================================================
            SAME BUTTONS ON MOBILE + DESKTOP
        ===================================================== */}

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
              h-[43px]
              items-center
              justify-center
              border-r
              border-white/20
              bg-[#E93445]
              text-[10.5px]
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-[#D82C3D]
              active:bg-[#C92535]

              sm:h-[44px]
              sm:text-[11px]
            "
          >
            Enquire Now
          </Link>

          <Link
            href={`/journeys/${journey.slug}`}
            className="
              group/details
              flex
              h-[43px]
              items-center
              justify-center
              gap-1.5
              bg-[#21438D]
              text-[10.5px]
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-[#193875]
              active:bg-[#142E64]

              sm:h-[44px]
              sm:text-[11px]
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