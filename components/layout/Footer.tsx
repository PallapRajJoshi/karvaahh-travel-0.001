"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const destinations = [
  "Kathmandu",
  "Pokhara",
  "Muktinath",
  "Chitwan",
  "Ghandruk",
  "Lumbini",
];

const companyLinks = [
  "About Us",
  "Contact Us",
  "Travel Experiences",
  "Travel Tips",
  "FAQs & Help",
];

const popularPackages = [
  "Nepal Tour Packages",
  "Kailash Mansarovar",
  "Char Dham Yatra",
  "Kedarnath Yatra",
  "Muktinath Yatra",
  "Himalayan Tours",
];

const legalLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cancellation Policy",
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <footer
      className="relative overflow-hidden bg-[#08263D] text-white"
      aria-label="Karvaahh website footer"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#D39A17]/10"
        />

        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full border border-white/[0.035]" />

        <div className="absolute right-[30%] top-[20%] h-2 w-2 rounded-full bg-[#D39A17]/50" />

        <div className="absolute bottom-[20%] left-[45%] h-1.5 w-1.5 rounded-full bg-[#D39A17]/40" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            NEWSLETTER
        ===================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="border-b border-white/10 py-12 lg:py-14"
          aria-labelledby="newsletter-title"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_470px]">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D39A17]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D39A17]">
                  Travel Inspiration
                </span>

                <Sparkles
                  size={14}
                  aria-hidden="true"
                  className="text-[#D39A17]"
                />
              </div>

              <h2
                id="newsletter-title"
                className="max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Stay inspired for your{" "}
                <span className="text-[#D39A17]">
                  next journey.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Get destination ideas, travel inspiration and thoughtfully
                curated journeys across Nepal and India.
              </p>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                aria-label="Subscribe to Karvaahh newsletter"
              >
                <label
                  htmlFor="footer-email"
                  className="sr-only"
                >
                  Email address
                </label>

                <div className="flex min-h-[62px] items-center border border-white/15 bg-white/[0.04] p-1.5 transition-all duration-300 focus-within:border-[#D39A17]/60">
                  <Mail
                    size={18}
                    aria-hidden="true"
                    className="ml-4 shrink-0 text-[#D39A17]"
                  />

                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Your email address"
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/35"
                  />

                  <motion.button
                    type="submit"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.03 }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.97 }
                    }
                    className="flex h-12 shrink-0 items-center gap-2 bg-[#D39A17] px-5 text-xs font-bold text-[#08263D] transition-colors duration-300 hover:bg-[#E2AD32]"
                  >
                    {submitted ? (
                      <>
                        <Check size={15} />
                        Subscribed
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">
                          Subscribe
                        </span>
                        <Send size={15} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/30">
                No spam. Just meaningful travel inspiration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            MAIN FOOTER CONTENT
        ===================================================== */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.1fr] lg:gap-10 lg:py-16">

          {/* ===================================================
              BRAND + CONTACT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h3 className="font-serif text-3xl text-white">
              Karvaahh
            </h3>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D39A17]">
              Live to Travel
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Thoughtfully crafted journeys across Nepal and India,
              built around meaningful experiences, local knowledge
              and genuine hospitality.
            </p>

            <address className="mt-7 space-y-4 not-italic">

              <a
                href="https://maps.google.com/?q=Ganesh+Marg+Shankhmul+Kathmandu+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D39A17]"
                  aria-hidden="true"
                />

                <span>
                  Ganesh Marg, Shankhmul,
                  <br />
                  Kathmandu, Nepal 44600
                </span>
              </a>

              <a
                href="tel:+9779766861547"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Phone
                  size={17}
                  className="text-[#D39A17]"
                  aria-hidden="true"
                />

                <span>+977-9766861547</span>
              </a>

              <a
                href="mailto:info@karvaahh.in"
                className="flex items-center gap-3 break-all text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={17}
                  className="text-[#D39A17]"
                  aria-hidden="true"
                />

                <span>info@karvaahh.in</span>
              </a>
            </address>
          </motion.div>

          {/* ===================================================
              DESTINATIONS
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              Destinations
            </h3>

            <ul className="space-y-3.5">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a
                    href={`/destinations/${destination
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="group flex items-center text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-[#D39A17]"
                  >
                    <ChevronRight
                      size={13}
                      aria-hidden="true"
                      className="mr-2 text-[#D39A17] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===================================================
              EXPLORE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: "easeOut",
            }}
          >
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              Explore Karvaahh
            </h3>

            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-[#D39A17]"
                  >
                    <ChevronRight
                      size={13}
                      aria-hidden="true"
                      className="mr-2 text-[#D39A17] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="my-7 h-px bg-white/10" />

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Popular Journeys
            </p>

            <ul className="space-y-3">
              {popularPackages.slice(0, 4).map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#D39A17]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===================================================
              LOCATION
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: "easeOut",
            }}
          >
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
                Our Location
              </h3>

              <MapPin
                size={17}
                className="text-[#D39A17]"
                aria-hidden="true"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Karvaahh+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Karvaahh location in Google Maps"
              className="group relative block h-[190px] overflow-hidden border border-white/10 bg-[#0C3048]"
            >
              <div
                className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `
                    linear-gradient(32deg, transparent 46%, rgba(255,255,255,.08) 47%, transparent 48%),
                    linear-gradient(118deg, transparent 46%, rgba(255,255,255,.06) 47%, transparent 48%),
                    linear-gradient(70deg, transparent 48%, rgba(255,255,255,.07) 49%, transparent 50%)
                  `,
                  backgroundSize: "80px 80px",
                }}
              />

              <span className="absolute left-5 top-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Nepal
              </span>

              <span className="absolute right-6 top-12 text-[8px] uppercase tracking-[0.2em] text-white/25">
                Kathmandu
              </span>

              <span className="absolute bottom-8 left-10 text-[8px] uppercase tracking-[0.2em] text-white/25">
                Shankhmul
              </span>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.12, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D39A17]/50 bg-[#08263D]/90"
                >
                  <MapPin
                    size={20}
                    className="text-[#D39A17]"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-[#08263D]/90 px-4 py-3">
                <span className="text-xs text-white/70">
                  Kathmandu, Nepal
                </span>

                <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#D39A17]">
                  Open Maps
                  <ArrowRight size={12} />
                </span>
              </div>
            </a>

            {/* SOCIAL */}

            <div className="mt-7">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                Follow Our Journey
              </p>

              <div className="flex gap-2.5">

                <SocialButton
                  href="#"
                  label="Facebook"
                >
                  <span className="text-[12px] font-bold">
                    f
                  </span>
                </SocialButton>

                <SocialButton
                  href="#"
                  label="Instagram"
                >
                  <span className="text-[16px]">
                    ◎
                  </span>
                </SocialButton>

                <SocialButton
                  href="#"
                  label="LinkedIn"
                >
                  <span className="text-[9px] font-bold">
                    in
                  </span>
                </SocialButton>

                <SocialButton
                  href="https://wa.me/9779766861547"
                  label="WhatsApp"
                >
                  <span className="text-[10px] font-bold">
                    W
                  </span>
                </SocialButton>

              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="border-y border-white/10 py-7"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <TrustItem
              number="01"
              title="Nepal & India Operations"
            />

            <TrustItem
              number="02"
              title="Local Travel Experts"
            />

            <TrustItem
              number="03"
              title="Curated Experiences"
            />

            <TrustItem
              number="04"
              title="Personalized Journeys"
            />

          </div>
        </motion.div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()}{" "}
              <span className="text-white/75">
                Karvaahh
              </span>
              . All rights reserved.
            </p>

            <span className="h-1 w-1 rounded-full bg-[#D39A17]" />

            <span className="text-xs text-white/30">
              Live to Travel.
            </span>
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/40 transition-colors duration-300 hover:text-[#D39A17]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <motion.a
        href="https://wa.me/9779766861547"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Karvaahh on WhatsApp"
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.08,
              }
        }
        whileTap={
          shouldReduceMotion
            ? undefined
            : {
                scale: 0.95,
              }
        }
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
      >
        <span className="text-xs font-bold">
          W
        </span>

        {!shouldReduceMotion && (
          <motion.span
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full border border-[#25D366]"
          />
        )}
      </motion.a>
    </footer>
  );
}

/* =============================================================
   SOCIAL BUTTON
============================================================= */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      aria-label={`Karvaahh on ${label}`}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.94,
      }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-[#D39A17] hover:bg-[#D39A17] hover:text-[#08263D]"
    >
      {children}
    </motion.a>
  );
}

/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="group flex items-center gap-4">
      <span className="text-[9px] font-semibold tracking-[0.2em] text-[#D39A17]">
        {number}
      </span>

      <span className="h-px w-5 bg-white/10 transition-all duration-300 group-hover:w-8 group-hover:bg-[#D39A17]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-white/75">
        {title}
      </span>
    </div>
  );
}