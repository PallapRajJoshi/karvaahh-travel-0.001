"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { ImageRef, Tone } from "@/content/corporate-retreats";
import { Icon } from "./icons";
import { useRetreat, type Draft } from "./retreat-context";

/* ---------- motion ---------- */

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children, delay = 0, y = 24, x = 0, className,
}: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- layout ---------- */

const sectionTone = {
  ivory: "bg-[#F8F6F0] text-[#252B32]",
  white: "bg-white text-[#252B32]",
  blue: "bg-[#123B5D] text-white",
  charcoal: "bg-[#252B32] text-white",
} as const;

export function Section({
  id, tone = "ivory", labelledBy, children, className = "", bleed = false,
}: {
  id?: string; tone?: keyof typeof sectionTone; labelledBy?: string; children: ReactNode; className?: string; bleed?: boolean;
}) {
  return (
    <section
      id={id}
      tabIndex={id ? -1 : undefined}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-20 overflow-hidden outline-none ${sectionTone[tone]} ${className}`}
    >
      {bleed ? children : <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">{children}</div>}
    </section>
  );
}

export function SectionHeader({
  id, eyebrow, title, sub, invert = false, center = false,
}: { id: string; eyebrow?: string; title: string; sub?: string; invert?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${invert ? "text-[#D8A64A]" : "text-[#2A7F82]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className={`mt-5 text-lg leading-relaxed ${invert ? "text-white/75" : "text-[#252B32]/70"}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------- CTAs ---------- */

const ctaVariant = {
  gold: "bg-[#D8A64A] text-[#252B32] hover:bg-[#e3b75f] focus-visible:outline-[#D8A64A]",
  outlineLight: "border border-white/60 text-white hover:bg-white hover:text-[#123B5D] focus-visible:outline-white",
  outlineDark: "border border-[#123B5D]/30 text-[#123B5D] hover:bg-[#123B5D] hover:text-white focus-visible:outline-[#123B5D]",
  solidBlue: "bg-[#123B5D] text-white hover:bg-[#0e2f4a] focus-visible:outline-[#123B5D]",
  link: "text-[#2A7F82] hover:text-[#123B5D] px-0 py-0 focus-visible:outline-[#2A7F82]",
  linkLight: "text-[#D8A64A] hover:text-white px-0 py-0 focus-visible:outline-white",
} as const;
export type CtaVariant = keyof typeof ctaVariant;

const ctaBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

/** In-page CTA: sets optional selections, scrolls to a section, moves focus. Works as a normal #anchor without JS. */
export function CtaLink({
  target, patch, variant = "gold", children, className = "", arrow = true,
}: { target: string; patch?: Partial<Draft>; variant?: CtaVariant; children: ReactNode; className?: string; arrow?: boolean }) {
  const { goTo } = useRetreat();
  return (
    <a
      href={`#${target}`}
      onClick={(e) => {
        e.preventDefault();
        goTo(target, patch);
      }}
      className={`${ctaBase} ${ctaVariant[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  );
}

export function LinkCta({
  href, variant = "outlineLight", children, className = "",
}: { href: string; variant?: CtaVariant; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`${ctaBase} ${ctaVariant[variant]} ${className}`}>
      {children}
    </a>
  );
}

/* ---------- imagery ---------- */

const toneGradient: Record<Tone, string> = {
  blue: "from-[#0b2740] via-[#123B5D] to-[#2A7F82]",
  teal: "from-[#1a5558] via-[#2A7F82] to-[#86b9ad]",
  gold: "from-[#9c7024] via-[#D8A64A] to-[#f2d9a3]",
  ivory: "from-[#e9e2cf] via-[#F8F6F0] to-[#c9dcd8]",
  dusk: "from-[#182642] via-[#3b4d76] to-[#D8A64A]",
};

function MountainArt({ light }: { light: boolean }) {
  const c = light ? "#123B5D" : "#ffffff";
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="absolute inset-0 h-full w-full">
      <circle cx="310" cy="80" r="26" fill={c} opacity="0.16" />
      <path d="M0 300V190l70-70 55 55 70-95 85 105 45-40 75 65v90z" fill={c} opacity="0.14" />
      <path d="M0 300V235l80-60 60 45 80-70 90 85 90-40v105z" fill={c} opacity="0.22" />
    </svg>
  );
}

/**
 * Real photo when `image.src` exists; otherwise an art-directed placeholder.
 * Never fake a photo: placeholders are clearly illustrations, not "Karvaahh events".
 */
export function Photo({
  image, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false,
}: { image: ImageRef; className?: string; sizes?: string; priority?: boolean }) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`relative overflow-hidden bg-gradient-to-br ${toneGradient[image.tone]} ${className}`}
    >
      <MountainArt light={image.tone === "ivory"} />
    </div>
  );
}

/* ---------- small pieces ---------- */

export function IconBadge({ name, tone = "blue" }: { name: Parameters<typeof Icon>[0]["name"]; tone?: "blue" | "gold" | "teal" | "light" }) {
  const cls = {
    blue: "bg-[#123B5D]/10 text-[#123B5D]",
    teal: "bg-[#2A7F82]/12 text-[#2A7F82]",
    gold: "bg-[#D8A64A]/20 text-[#8a6212]",
    light: "bg-white/10 text-[#D8A64A]",
  }[tone];
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${cls}`}>
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

export function Note({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p className={`mt-8 max-w-3xl border-l-2 pl-4 text-sm leading-relaxed ${invert ? "border-[#D8A64A] text-white/70" : "border-[#D8A64A] text-[#252B32]/65"}`}>
      {children}
    </p>
  );
}

export function FloatingLabel({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md ${className}`}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.span>
  );
}
