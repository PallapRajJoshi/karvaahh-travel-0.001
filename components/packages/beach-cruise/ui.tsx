import Image from "next/image";
import { SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";

/* ---------- Ocean palette (page-scoped, alongside the Karvaahh navy + gold) ---------- */

export const ABYSS = "#05283A";
export const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";

export const BTN_OCEAN =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0A4D68] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0E6A82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2CC4C8]";
export const BTN_LINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0A4D68]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0A4D68] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0E8A9A] hover:bg-[#EAF7F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2CC4C8]";
export const TEXT_LINK =
  "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0A4D68] underline decoration-[#2CC4C8] decoration-2 underline-offset-[6px] transition-colors hover:text-[#0E8A9A]";

/* ---------- Section heading ---------- */

export function OceanHeading({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
      <p
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] sm:text-xs ${center ? "justify-center" : ""} ${
          dark ? "text-[#7FE0DB]" : "text-[#0E8A9A]"
        }`}
      >
        <WaveMark className="h-2.5 w-8" />
        {eyebrow}
      </p>
      <h2 id={id} className={`${SERIF} mt-4 text-[32px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[40px] lg:text-[48px] ${dark ? "text-white" : "text-[#0B2942]"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-[15.5px] leading-7 sm:text-[16.5px] ${dark ? "text-white/70" : "text-[#4E6272]"}`}>{intro}</p>}
    </div>
  );
}

export function WaveMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 10" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M1 5c3.5-4 6.5-4 10 0s6.5 4 10 0 6.5-4 10 0" />
    </svg>
  );
}

/* ---------- Wave divider between sections ---------- */

export function WaveDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" className="relative h-12 overflow-hidden sm:h-16" style={{ backgroundColor: from }}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className={`absolute inset-0 h-full w-full ${flip ? "-scale-x-100" : ""}`}>
        <path d="M0 40 C 240 8, 480 8, 720 32 S 1200 60, 1440 24 L1440 64 L0 64 Z" fill={to} />
      </svg>
    </div>
  );
}

/* ---------- Image with designed ocean placeholder ---------- */

/**
 * Renders the photo when one exists, otherwise a labelled turquoise
 * placeholder — never a stock photo of a different place.
 * The parent must be `relative` and sized.
 */
export function OceanImage({ image, sizes, eager = false, className = "" }: { image: PageImage; sizes: string; eager?: boolean; className?: string }) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        className={`object-cover ${className}`}
        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
      />
    );
  }

  return (
    <div role="img" aria-label={image.alt} className="absolute inset-0 overflow-hidden bg-[linear-gradient(170deg,#7FE0DB_0%,#2CC4C8_30%,#0E8A9A_58%,#0A4D68_100%)]">
      <span aria-hidden="true" className="absolute right-[14%] top-[16%] h-16 w-16 rounded-full bg-[#FFF3D6]/85 shadow-[0_0_60px_20px_rgba(255,243,214,0.35)]" />
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[58%] w-full">
        <path d="M0 70 C 70 50, 130 50, 200 70 S 330 90, 400 66 L400 200 L0 200 Z" fill="rgba(255,255,255,0.14)" />
        <path d="M0 110 C 80 90, 140 96, 210 112 S 340 128, 400 104 L400 200 L0 200 Z" fill="rgba(5,40,58,0.28)" />
        <path d="M0 160 C 90 140, 170 150, 240 162 S 350 176, 400 158 L400 200 L0 200 Z" fill="#F7F1E6" />
      </svg>
      <span className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/20 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#05283A] backdrop-blur-sm">
        {image.label}
      </span>
    </div>
  );
}
