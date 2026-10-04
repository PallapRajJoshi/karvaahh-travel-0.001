"use client";

/*
 * EDIT HERE:
 *  - Certification logo paths      -> `certifications` below
 *  - Page links                    -> `companyLinks`, `popularPackages`, `legalLinks`
 *  - Facebook / Instagram / LinkedIn URLs -> `socials`
 */

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion"; // or "motion/react"
import {
  ArrowUpRight,
  Check,
  Compass,
  Gem,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState, type ElementType, type FormEvent, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const WHATSAPP = "https://wa.me/9779766861547";

/* ------------------- BRAND ICONS (drawn inline) ------------------- */

type IconProps = { size?: number; strokeWidth?: number; className?: string };

const svgProps = (size: number, strokeWidth: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

const FacebookIcon = ({ size = 24, strokeWidth = 1.75, className }: IconProps) => (
  <svg {...svgProps(size, strokeWidth, className)}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, strokeWidth = 1.75, className }: IconProps) => (
  <svg {...svgProps(size, strokeWidth, className)}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24, strokeWidth = 1.75, className }: IconProps) => (
  <svg {...svgProps(size, strokeWidth, className)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ----------------------------- DATA ----------------------------- */

const offices = [
  {
    country: "Nepal",
    lines: ["Ganesh Marg, Shankhmul,", "Kathmandu, Nepal 44600"],
    map: "https://maps.google.com/?q=Ganesh+Marg+Shankhmul+Kathmandu+Nepal",
  },
  {
    country: "India",
    lines: ["Sector 28, MG Road, Gurugram,", "Delhi NCR, India 122011"],
    map: "https://maps.google.com/?q=Sector+28+MG+Road+Gurugram+122011+India",
  },
];

const phones = [
  { label: "+977-9766861547", href: "tel:+9779766861547" },
  { label: "+91-8178438408", href: "tel:+918178438408" },
];

const emails = ["info@karvaahh.in", "karvaahofficial@gmail.com"];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Travel Experiences", href: "/experiences" },
  { label: "Travel Tips", href: "/blog" },
  { label: "FAQs & Help", href: "/faqs" },
];

const destinations = ["Kathmandu", "Pokhara", "Muktinath", "Chitwan", "Ghandruk", "Lumbini"];

const popularPackages = [
  { label: "Nepal Tour Packages", href: "/packages/nepal-tour-packages" },
  { label: "Kailash Mansarovar", href: "/packages/kailash-mansarovar" },
  { label: "Char Dham Yatra", href: "/packages/char-dham-yatra" },
  { label: "Kedarnath Yatra", href: "/packages/kedarnath-yatra" },
  { label: "Muktinath Yatra", href: "/packages/muktinath-yatra" },
  { label: "Himalayan Tours", href: "/packages/himalayan-tours" },
];

const certifications = [
  { name: "Uttarakhand Tourism", src: "/images/certifications/uttarakhand-tourism-logo.webp" },
  { name: "Startup India", src: "/images/certifications/startup-india-government-initiative.webp" },
  { name: "Nepal Tourism Board", src: "/images/certifications/nepal-tourism-board.webp" },
  { name: "Government of Nepal", src: "/images/certifications/government-of-nepal-logo.jpg" },
];

const socials: { label: string; href: string; Icon: ElementType }[] = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "WhatsApp", href: WHATSAPP, Icon: MessageCircle },
];

const trust = [
  { Icon: Globe, label: "Nepal & India Operations" },
  { Icon: Compass, label: "Local Travel Experts" },
  { Icon: Gem, label: "Curated Experiences" },
  { Icon: HeartHandshake, label: "Personalized Journeys" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Cookies", href: "/cookies" },
];

/* ------------------------- SMALL PIECES ------------------------- */

function ColTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="font-serif text-[20px] leading-none text-white">{children}</h2>
      <motion.span
        aria-hidden="true"
        className="mt-2.5 block h-px w-10 origin-left bg-[#D39A17]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      />
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center text-[14px] text-white/70 transition-colors duration-300 hover:text-[#E3B74A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
    >
      <span
        aria-hidden="true"
        className="h-px w-0 bg-[#D39A17] transition-all duration-300 group-hover:mr-2 group-hover:w-3"
      />
      {children}
    </Link>
  );
}

function Chip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full border border-white/15 px-3 py-1.5 text-[12.5px] text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D39A17] hover:bg-[#D39A17] hover:text-[#08263D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
    >
      {children}
    </Link>
  );
}

function CertCard({
  name,
  src,
  index,
  reduce,
}: {
  name: string;
  src: string;
  index: number;
  reduce: boolean;
}) {
  const [failed, setFailed] = useState(false);

  const variants: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, scale: 0.9, y: 16 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.15 + index * 0.1, ease: EASE },
        },
      };

  return (
    <motion.li variants={variants}>
      {/* gentle idle float, each card on its own rhythm */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 5 + index * 0.8, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="group relative aspect-[5/4] overflow-hidden border border-white/10 bg-[#F6F3EC] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D39A17] hover:shadow-[0_20px_40px_-18px_rgba(211,154,23,0.6)]">
          {failed ? (
            <div className="flex h-full items-center justify-center px-3 text-center font-serif text-[14px] leading-tight text-[#08263D]">
              {name}
            </div>
          ) : (
            <Image
              src={src}
              alt={name}
              fill
              sizes="(max-width: 640px) 45vw, 140px"
              onError={() => setFailed(true)}
              className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
            />
          )}

          {/* shine sweep */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-1000 group-hover:translate-x-[450%]"
          />

          {/* name slides up on hover */}
          <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#08263D]/95 px-2 py-1 text-center text-[11px] text-white transition-transform duration-300 group-hover:translate-y-0">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.li>
  );
}

function MapCard() {
  return (
    <div className="group relative h-[190px] overflow-hidden border border-white/10 bg-[#0C3048] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.7)] transition-colors duration-500 hover:border-[#D39A17]/60 sm:h-[210px] lg:h-[190px]">
      <iframe
        title="Karvaahh office location in Shankhmul, Kathmandu"
        src="https://maps.google.com/maps?q=Karvaahh.in%20Ganesh%20Marg%20Shankhmul%20Kathmandu&z=15&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute inset-0 h-full w-full border-0 [filter:saturate(0.75)_contrast(1.05)] transition-all duration-700 group-hover:[filter:saturate(1)_contrast(1)] lg:pointer-events-auto"
      />

      {/* top-left action */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Karvaahh.in+Ganesh+Marg+Shankhmul+Kathmandu"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 bg-[#08263D]/90 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-[#D39A17] hover:text-[#08263D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Open in Maps
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>

      {/* bottom caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 bg-gradient-to-t from-[#08263D] via-[#08263D]/85 to-transparent px-3 pb-2.5 pt-8">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/60 bg-[#08263D]">
          <MapPin size={13} className="text-[#D39A17]" aria-hidden="true" />
        </span>
        <span className="text-[12.5px] leading-tight text-white">
          Karvaahh.in
          <span className="block text-[11px] text-white/65">Ganesh Marg, Shankhmul, Kathmandu</span>
        </span>
      </div>

      {/* gold corner accents */}
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-[#D39A17]" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-[#D39A17]" />
    </div>
  );
}

function SocialButton({
  label,
  href,
  Icon,
  index,
  reduce,
}: {
  label: string;
  href: string;
  Icon: ElementType;
  index: number;
  reduce: boolean;
}) {
  const external = href.startsWith("http");
  const variants: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, scale: 0.5 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.3 + index * 0.08 } },
      };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`Karvaahh on ${label}`}
      variants={variants}
      whileHover={reduce ? undefined : { y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.92 }}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 text-white/80 transition-colors duration-300 hover:border-[#D39A17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-[#D39A17] transition-transform duration-300 group-hover:scale-y-100"
      />
      <Icon
        size={17}
        strokeWidth={1.75}
        aria-hidden="true"
        className="relative transition-all duration-300 group-hover:rotate-[8deg] group-hover:text-[#08263D]"
      />
    </motion.a>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

export default function Footer() {
  const reduce = !!useReducedMotion();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 3500);
  };

  const rowCls =
    "group flex items-start gap-3 text-[14px] leading-6 text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D39A17]";
  const iconCls = "mt-1 shrink-0 text-[#D39A17] transition-transform duration-300 group-hover:scale-110";

  return (
    <footer className="relative overflow-hidden bg-[#08263D] text-white" aria-label="Karvaahh website footer">
      {/* ------------ FLOATING DECORATION ------------ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* slow dashed orbit */}
        <motion.div
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-dashed border-[#D39A17]/20"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

        {/* swaying compass */}
        <motion.div
          className="absolute right-12 top-10 hidden text-[#D39A17]/30 lg:block"
          animate={reduce ? undefined : { rotate: [-14, 14, -14] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Compass size={64} strokeWidth={0.8} />
        </motion.div>

        {/* paper plane drifting across */}
        {!reduce && (
          <motion.div
            className="absolute left-0 top-9"
            initial={{ x: "-8vw" }}
            animate={{ x: "108vw", y: [0, -18, 4, -10, 0] }}
            transition={{
              x: { duration: 42, repeat: Infinity, ease: "linear" },
              y: { duration: 42, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="absolute right-full top-1/2 h-px w-28 bg-gradient-to-l from-[#D39A17]/40 to-transparent" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D39A17" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" opacity="0.6">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </motion.div>
        )}

        {/* twinkling dots */}
        {[
          { l: "12%", t: "26%", d: 0 },
          { l: "46%", t: "10%", d: 1.2 },
          { l: "80%", t: "44%", d: 2.1 },
          { l: "30%", t: "68%", d: 0.6 },
        ].map((s) => (
          <motion.span
            key={s.l}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#D39A17]"
            style={{ left: s.l, top: s.t }}
            initial={{ opacity: 0.3 }}
            animate={reduce ? undefined : { opacity: [0.15, 0.7, 0.15], scale: [1, 1.5, 1] }}
            transition={{ duration: 4, delay: s.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* mountain ridge */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-20 w-full text-white/[0.035]" fill="currentColor">
          <path d="M0 120V80l120-40 90 38 120-60 120 67 110-35 130 42 130-62 120 50 120-36 120 44 120-50 140 38v66Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 lg:px-12">
        {/* ------------ NEWSLETTER ------------ */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={item}
          className="grid items-center gap-5 border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 lg:grid-cols-[1fr_440px] lg:gap-10"
        >
          <div>
            <h2 className="font-serif text-[24px] leading-tight sm:text-[28px]">
              Stay inspired for your <span className="text-[#E3B74A]">next journey.</span>
            </h2>
            <p className="mt-1.5 max-w-xl text-[14px] leading-6 text-white/65">
              Get destination ideas, travel inspiration and thoughtfully curated journeys across Nepal and India.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} aria-label="Subscribe to the Karvaahh newsletter">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex min-h-[56px] items-center border border-white/15 bg-[#08263D]/60 p-1.5 transition-colors duration-300 focus-within:border-[#D39A17]">
                <Mail size={17} aria-hidden="true" className="ml-3 shrink-0 text-[#D39A17]" />
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent px-3 text-[14px] text-white outline-none placeholder:text-white/45"
                />
                <motion.button
                  type="submit"
                  aria-label={subscribed ? "Subscribed" : "Subscribe"}
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.96 }}
                  className="flex h-11 shrink-0 items-center gap-2 bg-[#D39A17] px-4 text-[13px] font-bold text-[#08263D] transition-colors duration-300 hover:bg-[#E2B23A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {subscribed ? (
                    <>
                      <Check size={15} aria-hidden="true" /> Subscribed
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Subscribe</span>
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
            <p role="status" className="mt-2 text-[12px] text-white/50">
              {subscribed ? "Thank you. You're on the list." : "No spam. Just meaningful travel inspiration."}
            </p>
          </div>
        </motion.div>

        {/* ------------ MAIN GRID ------------ */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={container}
          className="grid gap-x-10 gap-y-9 py-9 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr_1fr] lg:py-10"
        >
          {/* BRAND + OFFICE ADDRESS */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Karvaahh home" className="inline-block">
              <span className="block font-serif text-[30px] leading-none">Karvaahh</span>
              <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D39A17]">
                Live to Travel
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/65">
              Thoughtfully crafted journeys across Nepal and India, built around meaningful experiences, local
              knowledge and genuine hospitality.
            </p>

            <h2 className="sr-only">Office address and contact</h2>
            <address className="mt-5 grid gap-5 not-italic sm:grid-cols-2 lg:grid-cols-1">
              <div className="space-y-4">
                {offices.map((o) => (
                  <a key={o.country} href={o.map} target="_blank" rel="noopener noreferrer" className={rowCls}>
                    <MapPin size={16} aria-hidden="true" className={iconCls} />
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E3B74A]">
                        {o.country} office
                      </span>
                      {o.lines[0]}
                      <br />
                      {o.lines[1]}
                    </span>
                  </a>
                ))}
              </div>

              <div className="space-y-2.5">
                {phones.map((p) => (
                  <a key={p.href} href={p.href} className={rowCls}>
                    <Phone size={16} aria-hidden="true" className={iconCls} />
                    {p.label}
                  </a>
                ))}
                {emails.map((m) => (
                  <a key={m} href={`mailto:${m}`} className={`${rowCls} break-all`}>
                    <Mail size={16} aria-hidden="true" className={iconCls} />
                    {m}
                  </a>
                ))}
              </div>
            </address>
          </motion.div>

          {/* COMPANY + POPULAR JOURNEYS */}
          <motion.div variants={item}>
            <ColTitle>Company</ColTitle>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>

            <p className="mb-2.5 mt-6 text-[13px] font-semibold text-white/85">Popular journeys</p>
            <ul className="flex flex-wrap gap-2">
              {popularPackages.map((p) => (
                <li key={p.label}>
                  <Chip href={p.href}>{p.label}</Chip>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CERTIFICATION + DESTINATIONS */}
          <motion.div variants={item}>
            <ColTitle>Certification</ColTitle>
            <ul className="grid grid-cols-2 gap-3">
              {certifications.map((c, i) => (
                <CertCard key={c.name} name={c.name} src={c.src} index={i} reduce={reduce} />
              ))}
            </ul>

            <p className="mb-2.5 mt-6 text-[13px] font-semibold text-white/85">Destinations</p>
            <ul className="flex flex-wrap gap-2">
              {destinations.map((d) => (
                <li key={d}>
                  <Chip href={`/destinations/${d.toLowerCase().replace(/\s+/g, "-")}`}>{d}</Chip>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LOCATION + SOCIAL */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-1">
            <ColTitle>Our Location</ColTitle>
            <MapCard />

            <p className="mb-3 mt-6 text-[13px] font-semibold text-white/85">Follow our journey</p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <SocialButton key={s.label} {...s} index={i} reduce={reduce} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ------------ WHY TRAVEL WITH KARVAAHH ------------ */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="flex flex-col gap-4 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:gap-10"
        >
          <motion.h2 variants={item} className="shrink-0 font-serif text-[19px] text-[#E3B74A]">
            Why travel with Karvaahh?
          </motion.h2>

          <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4">
            {trust.map(({ Icon, label }) => (
              <motion.li key={label} variants={item} className="group flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D39A17]/50 text-[#D39A17] transition-all duration-300 group-hover:rotate-[8deg] group-hover:bg-[#D39A17] group-hover:text-[#08263D]">
                  <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="text-[13px] font-medium leading-snug text-white/80 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ------------ COPYRIGHT ------------ */}
        <div className="flex flex-col gap-3 pb-20 pt-5 md:flex-row md:items-center md:justify-between md:pb-5 md:pr-16">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-white/60">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="text-white/90 transition-colors hover:text-[#E3B74A]">
                Karvaahh
              </Link>
              , All rights reserved.
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#D39A17]" />
            <span className="text-white/45">Live to Travel.</span>
          </p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-white/55 transition-colors duration-300 hover:text-[#E3B74A]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ------------ FLOATING WHATSAPP ------------ */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Karvaahh on WhatsApp"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 240, damping: 16 }}
        whileHover={reduce ? undefined : { scale: 1.08 }}
        whileTap={reduce ? undefined : { scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle size={26} aria-hidden="true" />
        {!reduce && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-[#25D366]"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.a>
    </footer>
  );
}