import Image from "next/image";
import type { SVGProps } from "react";
import {
  BedDouble,
  CalendarDays,
  Camera,
  Car,
  Clock,
  CloudRain,
  Compass,
  IdCard,
  Leaf,
  Snowflake,
  FileCheck,
  Footprints,
  HandHeart,
  Headset,
  Landmark,
  Mountain,
  MountainSnow,
  Route,
  ShieldCheck,
  Sun,
  Users,
  Waves,
} from "lucide-react";
import type { IconName, PageImage } from "./types";

/* ---------- Shared class tokens (match the home page palette) ---------- */

export const SERIF = "font-[family-name:var(--font-playfair)]";
export const CONTAINER = "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10";

export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#F4A300] px-7 py-3.5 text-[15px] font-semibold text-[#0C1D30] shadow-[0_8px_24px_-6px_rgba(244,163,0,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#FFB524] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/[0.06] px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.14] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* ---------- Section heading ---------- */

export function SectionHeading({
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
    <div className={center ? "mx-auto max-w-[720px] text-center" : "max-w-[720px]"}>
      <p
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C98500] sm:text-xs ${
          center ? "justify-center" : ""
        } ${dark ? "text-[#F4A300]" : ""}`}
      >
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`${SERIF} mt-4 text-[32px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[40px] lg:text-[46px] ${
          dark ? "text-white" : "text-[#0B2942]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[15.5px] leading-7 sm:text-[16px] ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Image with honest placeholder ---------- */

/**
 * Renders the photo when one is sourced, otherwise a labelled, on-brand
 * placeholder — never a stock or unrelated destination photo.
 * The parent must be `relative` and sized.
 */
export function PageImageFill({
  image,
  sizes,
  className = "",
  eager = false,
}: {
  image: PageImage;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
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
    <div
      role="img"
      aria-label={image.alt}
      className="absolute inset-0 flex items-end overflow-hidden bg-gradient-to-br from-[#123653] via-[#0B2942] to-[#071421]"
    >
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-2/3 w-full text-white/[0.07]"
        aria-hidden="true"
      >
        <path d="M0 200 L90 90 L140 140 L210 40 L280 130 L330 85 L400 150 L400 200 Z" fill="currentColor" />
        <path d="M0 200 L60 150 L120 175 L190 120 L260 170 L340 135 L400 175 L400 200 Z" fill="currentColor" />
      </svg>
      <span className="relative m-5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-white/75 backdrop-blur-sm">
        {image.label}
      </span>
    </div>
  );
}

/* ---------- Icons ---------- */

export function HelicopterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 4h14" />
      <path d="M10 4v3" />
      <path d="M6 10.5c0-2 1.8-3.5 4-3.5h2.5c2.8 0 5 2 5 4.5S15.3 16 12.5 16H9c-1.7 0-3-1.3-3-3v-2.5Z" />
      <path d="M17.5 11.5H22" />
      <path d="M22 9.5v4" />
      <path d="M8 16l-1 3" />
      <path d="M14 16l1 3" />
      <path d="M5 19h12" />
    </svg>
  );
}

const ICONS: Record<IconName, (props: SVGProps<SVGSVGElement> & { strokeWidth?: number }) => React.ReactNode> = {
  mountain: Mountain,
  waves: Waves,
  helicopter: HelicopterIcon,
  footprints: Footprints,
  landmark: Landmark,
  mountainSnow: MountainSnow,
  route: Route,
  file: FileCheck,
  bed: BedDouble,
  heart: HandHeart,
  headset: Headset,
  car: Car,
  compass: Compass,
  users: Users,
  shield: ShieldCheck,
  calendar: CalendarDays,
  sun: Sun,
  camera: Camera,
  clock: Clock,
  leaf: Leaf,
  snow: Snowflake,
  rain: CloudRain,
  passport: IdCard,
};

export function PageIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={1.7} aria-hidden="true" />;
}
