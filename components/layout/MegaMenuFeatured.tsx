// components/layout/MegaMenuFeatured.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MegaMenuFeatured as MegaMenuFeaturedType } from "@/lib/navigation-data";

export default function MegaMenuFeatured({
  featured,
  onNavigate,
}: {
  featured: MegaMenuFeaturedType;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={featured.href}
      onClick={onNavigate}
      className="group/featured relative flex h-full min-h-[180px] flex-col justify-end overflow-hidden rounded-xl"
    >
      {/*
        Placeholder visual — replace this gradient div with a real photo:
        <Image src="/mega-menu/everest-heli.jpg" alt={featured.imageAlt} fill
               className="object-cover transition-transform duration-500 group-hover/featured:scale-105" />
        Keep the gradient overlay below it so the text stays legible over any photo.
      */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover/featured:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #0A2540 0%, #123a63 55%, #1d4d80 100%)",
        }}
        role="img"
        aria-label={featured.imageAlt}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 18px, rgba(255,255,255,0.06) 18px 19px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="relative flex items-start justify-between gap-2 p-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
            Featured
          </p>
          <p className="mt-1 text-[15px] font-semibold leading-snug text-white">
            {featured.title}
          </p>
          <p className="mt-1 text-[12.5px] text-white/75">{featured.subtitle}</p>
        </div>
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-white/80 transition-transform duration-200 group-hover/featured:translate-x-0.5 group-hover/featured:-translate-y-0.5"
          strokeWidth={2}
        />
      </div>
    </Link>
  );
}
