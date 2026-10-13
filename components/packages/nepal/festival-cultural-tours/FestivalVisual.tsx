import Image from "next/image";
import type { PageImage } from "@/components/activities/experience/types";
import { SERIF } from "@/components/activities/experience/ui";
import type { ArtTone } from "@/data/festival-cultural/types";

const TONES: Record<ArtTone, string> = {
  crimson: "from-[#7A1F1A] via-[#A8321F] to-[#E07A1F]",
  lamp: "from-[#14112B] via-[#2A1B4A] to-[#8A4A12]",
  holi: "from-[#B0246A] via-[#E2582E] to-[#F2B705]",
  royal: "from-[#0B2942] via-[#5A1E2A] to-[#B4532A]",
  ochre: "from-[#5B2C12] via-[#9A4A1C] to-[#D99A2B]",
  saffron: "from-[#6B2A10] via-[#C2561A] to-[#F4A300]",
  dusk: "from-[#0B2942] via-[#4A2A55] to-[#D9732A]",
  forest: "from-[#123326] via-[#2F5B3A] to-[#B8862B]",
  monastery: "from-[#3A1414] via-[#8A2A1E] to-[#D9A43A]",
};

/**
 * A photo when one is sourced; otherwise designed festival artwork in a
 * warm colourway — never a stock or mislabelled image. Parent must be
 * `relative` and sized.
 */
export default function FestivalVisual({
  image,
  art,
  sizes,
  title,
  className = "",
  eager = false,
}: {
  image: PageImage;
  art: ArtTone;
  sizes: string;
  /** Shown large on the artwork (defaults to the image label). */
  title?: string;
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
    <div role="img" aria-label={`${title ?? image.label} — illustration`} className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${TONES[art]} ${className}`}>
      {/* Mandala motif */}
      <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute -right-16 -top-16 h-[115%] w-auto text-white/[0.13]">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx="88" ry="26" fill="none" stroke="currentColor" strokeWidth="0.7" transform={`rotate(${i * 15} 100 100)`} />
        ))}
        {[18, 40, 64, 90].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" />
        ))}
      </svg>
      {/* Row of lamp flames */}
      <svg viewBox="0 0 240 40" preserveAspectRatio="xMidYMax meet" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 w-full text-[#FFD27A]/40">
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i} transform={`translate(${14 + i * 27} 8)`}>
            <path d="M6 0 C10 8 11 13 6 18 C1 13 2 8 6 0 Z" fill="currentColor" />
            <path d="M-2 22 h16 l-3 6 h-10 Z" fill="currentColor" opacity="0.7" />
          </g>
        ))}
      </svg>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,210,122,0.28),transparent_55%)]" />
      <span className={`${SERIF} absolute left-5 top-5 max-w-[80%] text-[26px] font-medium leading-tight text-white/90`}>{title ?? image.label}</span>
    </div>
  );
}
