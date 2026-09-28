"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  country: string;
  trip: string;
  destination: string;
  review: string;
  image: string;
  imageAlt: string;
};

const reviews: Review[] = [
  {
    id: "01",
    name: "Paramjit Singh",
    country: "India",
    trip: "Nepal Family Holiday",
    destination: "Kathmandu · Pokhara",
    review:
      "The entire journey was thoughtfully planned from start to finish. Everything felt smooth, comfortable and well organised.",
    image: "/images/guests/success-award-ceremony.jpg",
    imageAlt:
      "Traveller enjoying a memorable family holiday in Nepal",
  },
  {
    id: "02",
    name: "Sahith Kataru",
    country: "India",
    trip: "Himalayan Experience",
    destination: "Pokhara · Ghandruk",
    review:
      "What stood out was the personal attention. The team understood what we wanted and helped us experience Nepal beyond the usual tourist route.",
    image: "/images/guests/karvaahh-gusts.jpg",
    imageAlt:
      "Traveller exploring the Himalayan landscape of Nepal",
  },
  {
    id: "03",
    name: "Dr.Shiva Shankari",
    country: "India",
    trip: "Spiritual Journey",
    destination: "Muktinath · Kathmandu",
    review:
      "From transportation and hotels to the pilgrimage arrangements, everything was handled with care. We could simply focus on the journey.",
    image: "/images/guests/success-gallery-photo.jpg",
    imageAlt:
      "Traveller visiting a spiritual destination in Nepal",
  },
  {
    id: "04",
    name: "Anusree lakshmi",
    country: "India",
    trip: "Nepal Discovery",
    destination: "Kathmandu · Chitwan",
    review:
      "A beautifully organised trip with the right balance of sightseeing, local experiences and time to simply enjoy Nepal.",
    image: "/images/guests/success-gallery.jpg",
    imageAlt:
      "Traveller exploring Nepal during a curated holiday",
  },
  {
    id: "05",
    name: "Rasmiya Vs",
    country: "India",
    trip: "Muktinath Pilgrimage",
    destination: "Pokhara · Muktinath",
    review:
      "The arrangements were clear and dependable throughout. Karvaah made a spiritual journey feel comfortable and stress-free.",
    image: "/images/guests/success-award-ceremony.jpg",
    imageAlt:
      "Traveller experiencing the Himalayan region near Muktinath",
  },
  {
    id: "06",
    name: "Chitra Abhyankar",
    country: "India",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/success.jpg",
    imageAlt:
      "Traveller experiencing Nepalese culture and landscapes",
  },
   {
    id: "07",
    name: "Arindam Sen",
    country: "India",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/testimonial.jpg",
    imageAlt:
      "Traveller experiencing Nepalese culture and landscapes",
  },
   {
    id: "08",
    name: "Ukita Dahal",
    country: "Nepal",
    trip: "Nepal Cultural Escape",
    destination: "Kathmandu · Pokhara",
    review:
      "Excellent local knowledge and thoughtful planning. Every part of the itinerary felt purposeful rather than rushed.",
    image: "/images/guests/success-celebration.jpg",
    imageAlt:
      "Traveller experiencing Nepalese culture and landscapes",
  },
];

export default function GuestTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeReview = reviews[activeIndex];

  /*
   * Automatically change review every 5 seconds.
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === reviews.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  return (
    <section
      id="guest-testimonials"
      aria-labelledby="guest-testimonials-title"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F1]
        text-[#0B2942]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================
          BACKGROUND EDITORIAL CIRCLES
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          -top-[180px]
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
          -right-[180px]
          bottom-[-180px]
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-[#0B2942]/5
        "
      />

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-5
          py-8
          sm:px-8
          sm:py-10
          lg:px-10
          lg:py-11
        "
      >
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 18,
          }}
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
          }}
          className="
            flex
            flex-col
            gap-4
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            {/* Eyebrow */}

            <div
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >
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
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#5D748A]
                  sm:text-[9px]
                "
              >
                Why Our Guests Choose Us
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
                <Star
                  size={10}
                  className="text-[#D39A17]"
                />
              </span>
            </div>

            {/* SEO-friendly H2 */}

            <h2
              id="guest-testimonials-title"
              className="
                font-serif
                text-[40px]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
                text-[#0B2942]
                sm:text-[48px]
                lg:text-[56px]
              "
            >
              Journeys they{" "}
              <span className="text-[#C98F0A]">
                remember.
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-[700px]
                text-[12px]
                leading-5
                text-[#60788F]
                sm:text-[13px]
              "
            >
              Real experiences from travellers who explored
              Nepal and India with Karvaah. Thoughtful planning,
              local expertise and personal attention at every step.
            </p>
          </div>

          {/* =====================================================
              RATING
          ====================================================== */}

          <div
            className="
              flex
              items-center
              gap-3
              self-start
              md:self-auto
            "
          >
            <div
              className="
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D8D2C7]
                bg-white
              "
            >
              <span
                className="
                  font-serif
                  text-[23px]
                  text-[#0B2942]
                "
              >
                5.0
              </span>
            </div>

            <div>
              <div
                className="
                  flex
                  gap-1
                  text-[#D39A17]
                "
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="currentColor"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <span
                className="
                  mt-1
                  block
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#6B8093]
                "
              >
                Guest experience
              </span>
            </div>
          </div>
        </motion.header>

        {/* =======================================================
            EDITORIAL DIVIDER
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            my-6
            flex
            items-center
            gap-3
          "
        >
          <span className="h-px flex-1 bg-[#DDD8CE]" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#D39A17]" />

          <span className="h-px w-12 bg-[#D39A17]" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#D39A17]" />

          <span className="h-px flex-1 bg-[#DDD8CE]" />
        </div>

        {/* =======================================================
            MAIN TWO COLUMN EXPERIENCE

            LEFT  = TRAVELLER GALLERY
            RIGHT = REVIEW
        ======================================================== */}

        <div
          className="
            grid
            overflow-hidden
            border
            border-[#DCD7CE]
            bg-white
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* =====================================================
              LEFT — TRAVELLER GALLERY
          ====================================================== */}

          <div
            className="
              relative
              min-h-[390px]
              overflow-hidden
              bg-[#0B2942]
              sm:min-h-[450px]
              lg:min-h-[500px]
            "
          >
            {/* Large active image */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.image}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeReview.image}
                  alt={activeReview.imageAlt}
                  fill
                  sizes="
                    (max-width: 1024px) 100vw,
                    55vw
                  "
                  priority={activeIndex === 0}
                  className="
                    object-cover
                  "
                />

                {/* Subtle editorial overlay */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-[#071E31]/25
                  "
                />

                {/* Bottom image darkening */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-[#061A2A]/80
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                TOP LEFT LABEL
            ================================================== */}

            <div
              className="
                absolute
                left-5
                top-5
                z-20
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-[#0B2942]/30
                  backdrop-blur-sm
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#D39A17]
                  "
                />
              </span>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                Traveller Moments
              </span>
            </div>

            {/* =================================================
                IMAGE NUMBER
            ================================================== */}

            <div
              className="
                absolute
                right-5
                top-5
                z-20
                font-serif
                text-[38px]
                leading-none
                text-white/25
              "
              aria-hidden="true"
            >
              {activeReview.id}
            </div>

            {/* =================================================
                IMAGE BOTTOM INFORMATION
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-20
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#D8B56A]
                    "
                  >
                    {activeReview.country}
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[25px]
                      leading-none
                      text-white
                    "
                  >
                    {activeReview.destination
                      .split("·")[0]
                      .trim()}
                  </p>
                </div>

                <span
                  className="
                    text-right
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/70
                  "
                >
                  {activeReview.trip}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                SMALL GALLERY PREVIEWS
            ================================================== */}

            <div
              className="
                absolute
                bottom-[78px]
                right-5
                z-30
                hidden
                gap-2
                sm:flex
              "
            >
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View traveller story ${index + 1}`}
                  aria-current={
                    activeIndex === index
                      ? "true"
                      : undefined
                  }
                  className={`
                    relative
                    h-11
                    w-11
                    overflow-hidden
                    border
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "scale-110 border-[#D39A17]"
                        : "border-white/40 opacity-65 hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={review.image}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT — REVIEW
          ====================================================== */}

          <div
            className="
              relative
              flex
              min-h-[390px]
              flex-col
              justify-between
              p-7
              sm:min-h-[450px]
              sm:p-9
              lg:min-h-[500px]
              lg:p-11
            "
          >
            {/* Decorative quote */}

            <Quote
              aria-hidden="true"
              size={120}
              strokeWidth={0.5}
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                text-[#0B2942]/[0.045]
              "
            />

            {/* =================================================
                REVIEW TOP
            ================================================== */}

            <div>
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#60788F]
                    "
                  >
                    Guest Review
                  </span>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      text-[#0B2942]
                    "
                  >
                    {activeReview.id}
                    <span
                      className="
                        mx-1
                        text-[#D0CAC0]
                      "
                    >
                      /
                    </span>
                    <span className="text-[#98A5B1]">
                      {String(reviews.length).padStart(2, "0")}
                    </span>
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#708396]
                  "
                >
                  <CheckCircle2
                    size={13}
                    className="text-[#C98F0A]"
                    aria-hidden="true"
                  />

                  Verified Journey
                </div>
              </div>

              {/* Stars */}

              <div
                className="
                  mt-7
                  flex
                  gap-1
                  text-[#D39A17]
                "
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="currentColor"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* =================================================
                  ANIMATED REVIEW TEXT
              ================================================== */}

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeReview.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-6
                    max-w-[650px]
                    font-serif
                    text-[25px]
                    leading-[1.28]
                    tracking-[-0.02em]
                    text-[#0B2942]
                    sm:text-[28px]
                    lg:text-[31px]
                  "
                >
                  &ldquo;
                  {activeReview.review}
                  &rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* =================================================
                REVIEWER INFORMATION
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeReview.id}-person`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  mt-8
                  border-t
                  border-[#E2DDD4]
                  pt-5
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        text-[#0B2942]
                      "
                    >
                      {activeReview.name}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#8191A0]
                      "
                    >
                      {activeReview.country}
                      {" · "}
                      {activeReview.trip}
                    </p>
                  </div>

                  <p
                    className="
                      text-right
                      text-[8px]
                      font-medium
                      text-[#71869A]
                    "
                  >
                    {activeReview.destination}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                CONTROLS
            ================================================== */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-[#E2DDD4]
                pt-4
              "
            >
              {/* Progress */}

              <div
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show review ${index + 1}`}
                    aria-current={
                      activeIndex === index
                        ? "true"
                        : undefined
                    }
                    className="
                      flex
                      h-6
                      items-center
                    "
                  >
                    <span
                      className={`
                        block
                        h-[2px]
                        transition-all
                        duration-500
                        ${
                          activeIndex === index
                            ? "w-8 bg-[#D39A17]"
                            : "w-3 bg-[#D7D1C7]"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              {/* Arrows */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Previous guest review"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D9D3C8]
                    bg-white
                    text-[#0B2942]
                    transition-all
                    duration-300
                    hover:border-[#D39A17]
                    hover:text-[#C98F0A]
                  "
                >
                  <ArrowLeft
                    size={14}
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next guest review"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2942]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#C98F0A]
                  "
                >
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            AUTO PROGRESS BAR
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            mt-3
            h-px
            w-full
            overflow-hidden
            bg-[#DED9D0]
          "
        >
          {!isPaused && (
            <motion.div
              key={activeIndex}
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="
                h-full
                bg-[#D39A17]
              "
            />
          )}
        </div>

        {/* =======================================================
            TRUST STRIP
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            border-b
            border-[#DDD8CE]
            sm:grid-cols-3
          "
        >
          <TrustItem text="Personal attention" />

          <TrustItem text="Local travel experts" />

          <TrustItem text="Thoughtfully planned" />
        </div>

        {/* =======================================================
            GOOGLE REVIEWS CTA
        ======================================================== */}

        <div
          className="
            flex
            justify-center
            pt-4
          "
        >
          <Link
            href="/reviews"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#0B2942]
            "
          >
            <span
              className="
                border-b
                border-[#0B2942]/20
                pb-1
                transition-all
                duration-300
                group-hover:border-[#D39A17]
                group-hover:text-[#C98F0A]
              "
            >
              Read more guest stories
            </span>

            <ExternalLink
              size={11}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   TRUST STRIP ITEM
================================================================ */

function TrustItem({
  text,
}: {
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        border-b
        border-[#DDD8CE]
        px-4
        py-3
        last:border-b-0
        sm:border-b-0
        sm:border-r
        sm:last:border-r-0
      "
    >
      <span
        aria-hidden="true"
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#D39A17]
        "
      />

      <span
        className="
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#657B90]
        "
      >
        {text}
      </span>
    </div>
  );
}