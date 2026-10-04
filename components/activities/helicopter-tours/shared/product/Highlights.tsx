import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { Highlight, HelicopterProductTour } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

/**
 * Landmark cards. Places with a photo get a large image card; places still
 * waiting for a photo render as an elevation card, so the grid never shows
 * an unrelated stock image or an empty box.
 */
export default function Highlights({ tour }: { tour: HelicopterProductTour }) {
  const { highlights } = tour;
  const withPhoto = highlights.items.filter((h) => h.image?.src);
  const withoutPhoto = highlights.items.filter((h) => !h.image?.src);

  return (
    <section id="highlights" aria-labelledby="highlights-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="highlights-title" eyebrow="Highlights" title={highlights.title} intro={highlights.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {withPhoto.map((h, i) => (
            <li key={h.name}>
              <Reveal delay={i * 100}>
                <PhotoCard h={h} />
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-5 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {withoutPhoto.map((h, i) => (
            <li key={h.name}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <ElevationCard h={h} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhotoCard({ h }: { h: Highlight }) {
  return (
    <article className="group relative aspect-[16/11] overflow-hidden rounded-[26px] bg-[#0B2942] text-white">
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        {h.image && <PageImageFill image={h.image} sizes="(min-width: 768px) 50vw, 100vw" />}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/90 via-[#071421]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
        <div>
          {h.elevation && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">{h.elevation}</p>
          )}
          <h3 className={`${SERIF} mt-1.5 text-[26px] font-medium sm:text-[30px]`}>{h.name}</h3>
          <p className="mt-2 max-w-[420px] text-[14.5px] leading-6 text-white/75">{h.text}</p>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[13px] font-medium opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 sm:flex">
          Explore <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

function ElevationCard({ h }: { h: Highlight }) {
  return (
    <article className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br from-[#123653] to-[#071421] p-6 text-white transition-transform duration-500 hover:-translate-y-1">
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-white/[0.06] transition-transform duration-700 group-hover:scale-110"
        aria-hidden="true"
      >
        <path d="M0 200 L90 90 L140 140 L210 40 L280 130 L330 85 L400 150 L400 200 Z" fill="currentColor" />
      </svg>
      <p className={`${SERIF} relative text-[28px] leading-none text-[#F4A300]`}>{h.elevation ?? "—"}</p>
      <div className="relative mt-8">
        <h3 className="text-[17px] font-semibold">{h.name}</h3>
        <p className="mt-1.5 text-[13.5px] leading-6 text-white/65">{h.text}</p>
        <p className="mt-3 flex items-center gap-1 text-[12.5px] font-medium text-[#F4A300] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Explore <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </p>
      </div>
    </article>
  );
}
