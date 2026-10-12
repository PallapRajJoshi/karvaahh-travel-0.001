import { Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PilgrimageDestination, PilgrimagePackage } from "@/data/pilgrimage/types";
import { DestinationCard, FeaturedDestination, PackageCard } from "./cards";

export type ResolvedSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  featured?: PilgrimageDestination;
  featuredPackages: PilgrimagePackage[];
  destinations: PilgrimageDestination[];
  packages: { p: PilgrimagePackage; names: string[] }[];
  highlights?: { label: string; text: string }[];
  note?: string;
  dark?: boolean;
  splitShakti?: boolean;
};

function Rail({ items, dark }: { items: PilgrimageDestination[]; dark?: boolean }) {
  return (
    <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
      {items.map((d, i) => (
        <li key={d.id} className="w-[80%] shrink-0 snap-start min-[520px]:w-[46%] lg:w-auto">
          <Reveal delay={(i % 4) * 70} className="h-full">
            <div className={dark ? "h-full rounded-[24px] ring-1 ring-white/10" : "h-full"}>
              <DestinationCard d={d} compact />
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** A regional or thematic pilgrimage section driven entirely by data. */
export default function RegionSection({ s }: { s: ResolvedSection }) {
  const dark = s.dark;
  const shaktiPeeths = s.splitShakti ? s.destinations.filter((d) => d.pilgrimageTypes.includes("shakti-peeth")) : [];
  const devi = s.splitShakti ? s.destinations.filter((d) => !d.pilgrimageTypes.includes("shakti-peeth")) : [];

  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className={`scroll-mt-[160px] py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28 ${dark ? "bg-[#0B2942] text-white" : "bg-white"}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id={`${s.id}-title`} eyebrow={s.eyebrow} title={s.title} intro={s.intro} dark={dark} />
        </Reveal>

        {s.highlights && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.highlights.map((h, i) => (
              <li key={h.label}>
                <Reveal delay={i * 70} className={`h-full rounded-2xl border px-5 py-4 ${dark ? "border-white/10 bg-white/[0.05]" : "border-[#0B2942]/[0.08] bg-[#F8F6F1]"}`}>
                  <p className={`${SERIF} text-[19px] ${dark ? "text-[#F4D6A0]" : "text-[#0B2942]"}`}>{h.label}</p>
                  <p className={`mt-1 text-[13.5px] leading-6 ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>{h.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        {s.featured && (
          <Reveal className="mt-10">
            <FeaturedDestination d={s.featured} related={s.featuredPackages} dark={dark} />
          </Reveal>
        )}

        {s.splitShakti ? (
          <>
            <h3 className={`${SERIF} mt-12 text-[26px] ${dark ? "text-white" : "text-[#0B2942]"}`}>Shakti Peeth</h3>
            <p className={`mb-5 mt-1 text-[14px] ${dark ? "text-white/65" : "text-[#5B6B7B]"}`}>Sites widely regarded — or regarded in local tradition — as Shakti Peeths.</p>
            <Rail items={shaktiPeeths} dark={dark} />
            <h3 className={`${SERIF} mt-12 text-[26px] ${dark ? "text-white" : "text-[#0B2942]"}`}>Devi & Bhagawati Temples</h3>
            <p className={`mb-5 mt-1 text-[14px] ${dark ? "text-white/65" : "text-[#5B6B7B]"}`}>Revered goddess temples across Nepal.</p>
            <Rail items={devi} dark={dark} />
          </>
        ) : (
          s.destinations.length > 0 && (
            <div className="mt-10">
              <Rail items={s.destinations} dark={dark} />
            </div>
          )
        )}

        {s.packages.length > 0 && (
          <>
            <h3 className={`${SERIF} mt-14 text-[26px] ${dark ? "text-white" : "text-[#0B2942]"}`}>Packages</h3>
            <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-3 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {s.packages.map(({ p, names }, i) => (
                <li key={p.id} className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-auto">
                  <Reveal delay={(i % 3) * 80} className="h-full">
                    <PackageCard p={p} destinationNames={names} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </>
        )}

        {s.note && (
          <p className={`mt-8 flex items-start gap-2.5 text-[13px] leading-6 ${dark ? "text-white/60" : "text-[#5B6B7B]"}`}>
            <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            {s.note}
          </p>
        )}
      </div>
    </section>
  );
}
