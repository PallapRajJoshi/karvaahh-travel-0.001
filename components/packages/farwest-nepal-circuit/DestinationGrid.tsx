"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, MapPin, TriangleAlert } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { FarWestDestination } from "@/data/farwest-nepal/content";

/**
 * Destination highlights. The first `initial` cards render up front; the
 * rest mount only when expanded, so their images are never fetched unless
 * a visitor asks for them.
 */
export default function DestinationGrid({ destinations, initial }: { destinations: FarWestDestination[]; initial: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? destinations : destinations.slice(0, initial);
  const remaining = destinations.length - initial;

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-[120px] bg-[#F8F6F1] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="destinations-title"
            eyebrow="Destination Highlights"
            title="Lakes, Valleys & Sacred Heights"
            intro="From the turquoise water of Rara to the meadows of Khaptad — the places that shape every Far-West journey, with honest labels for the ones that need specialist planning."
          />
        </Reveal>

        <ul id="destination-list" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((d, i) => (
            <li key={d.name}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <DestinationCard d={d} />
              </Reveal>
            </li>
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="destination-list"
              onClick={() => setExpanded((e) => !e)}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 bg-white px-7 text-[14.5px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B2942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] sm:w-auto"
            >
              {expanded ? "Show Fewer Destinations" : `Explore All Destinations (+${remaining})`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function DestinationCard({ d }: { d: FarWestDestination }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0B2942]/[0.08] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(11,41,66,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <span
          className={`absolute left-3 top-3 inline-flex max-w-[calc(100%-24px)] items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-tight backdrop-blur-sm ${
            d.caution ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#071421]/60 text-white"
          }`}
        >
          {d.caution && <TriangleAlert className="h-3 w-3 shrink-0" aria-hidden="true" />}
          {d.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#1C8A8F]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {d.province}
        </p>
        <h3 className={`${SERIF} mt-1.5 text-[21px] font-medium leading-snug text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-6 text-[#5B6B7B]">{d.text}</p>
        {d.href && (
          <Link
            href={d.href}
            className="mt-4 inline-flex items-center gap-1 self-start text-[13.5px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
          >
            Discover {d.name.split(" &")[0]}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
