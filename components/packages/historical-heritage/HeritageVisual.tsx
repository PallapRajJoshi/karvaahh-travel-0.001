import Image from "next/image";
import type { PageImage } from "@/components/activities/experience/types";
import { SERIF } from "@/components/activities/experience/ui";
import type { HeritageTone } from "@/data/historical-heritage/types";

const TONES: Record<HeritageTone, string> = {
  brick: "from-[#3A1712] via-[#7A2E1C] to-[#B4532A]",
  stone: "from-[#0B2942] via-[#33475A] to-[#9C8B74]",
  dusk: "from-[#0B2942] via-[#4A2A3A] to-[#B4532A]",
  temple: "from-[#2A1410] via-[#6B2A1A] to-[#C98500]",
  gold: "from-[#3B2410] via-[#8A5A1C] to-[#D9A43A]",
};

/**
 * A photo when one is sourced; otherwise designed architectural artwork
 * (tiered pagoda and lattice window) — never a stock or mislabelled
 * image. Parent must be `relative` and sized.
 */
export default function HeritageVisual({
  image,
  tone,
  sizes,
  title,
  className = "",
}: {
  image: PageImage;
  tone: HeritageTone;
  sizes: string;
  /** Shown on the artwork (defaults to the image label). */
  title?: string;
  className?: string;
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className={`object-cover ${className}`}
        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
      />
    );
  }

  return (
    <div role="img" aria-label={`${title ?? image.label} — illustration`} className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${TONES[tone]} ${className}`}>
      {/* Lattice window motif */}
      <svg viewBox="0 0 120 120" aria-hidden="true" className="absolute -left-10 -top-10 h-[70%] w-auto text-white/[0.08]">
        <rect x="6" y="6" width="108" height="108" fill="none" stroke="currentColor" strokeWidth="2" />
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i}>
            <line x1={6 + i * 13.5} y1="6" x2="6" y2={6 + i * 13.5} stroke="currentColor" strokeWidth="0.8" />
            <line x1={114 - i * 13.5} y1="114" x2="114" y2={114 - i * 13.5} stroke="currentColor" strokeWidth="0.8" />
            <line x1={6 + i * 13.5} y1="114" x2="6" y2={114 - i * 13.5} stroke="currentColor" strokeWidth="0.8" />
            <line x1={114 - i * 13.5} y1="6" x2="114" y2={6 + i * 13.5} stroke="currentColor" strokeWidth="0.8" />
          </g>
        ))}
      </svg>
      {/* Tiered pagoda silhouette */}
      <svg viewBox="0 0 200 220" preserveAspectRatio="xMidYMax meet" aria-hidden="true" className="absolute bottom-0 right-[6%] h-[78%] w-auto text-white/[0.14]">
        <path d="M100 6 l4 14 h-8 Z" fill="currentColor" />
        <path d="M60 52 L100 22 L140 52 Z" fill="currentColor" />
        <rect x="76" y="52" width="48" height="16" fill="currentColor" opacity="0.7" />
        <path d="M40 96 L100 64 L160 96 Z" fill="currentColor" />
        <rect x="64" y="96" width="72" height="20" fill="currentColor" opacity="0.7" />
        <path d="M18 144 L100 110 L182 144 Z" fill="currentColor" />
        <rect x="50" y="144" width="100" height="28" fill="currentColor" opacity="0.7" />
        <rect x="30" y="172" width="140" height="14" fill="currentColor" />
        <rect x="14" y="186" width="172" height="14" fill="currentColor" opacity="0.85" />
        <rect x="0" y="200" width="200" height="20" fill="currentColor" opacity="0.7" />
      </svg>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(244,198,106,0.22),transparent_55%)]" />
      <span className={`${SERIF} absolute left-5 top-5 max-w-[70%] text-[24px] font-medium leading-tight text-white/90`}>{title ?? image.label}</span>
      <span className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">Photo coming soon</span>
    </div>
  );
}
