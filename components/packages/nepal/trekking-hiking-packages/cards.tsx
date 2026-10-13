import Link from "next/link";
import { ArrowUpRight, Clock, Gauge, MessageCircle, Mountain } from "lucide-react";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { PageImageFill, SERIF } from "@/components/activities/experience/ui";
import type { FeaturedPackage, Trek } from "@/data/trekking/types";

const GUIDES: Record<string, string> = {
  "/destinations/gandaki-province": "Gandaki guide",
  "/destinations/bagmati-province": "Bagmati guide",
  "/destinations/koshi-province": "Koshi guide",
};

function Facts({ duration, difficulty, maxAltitude, dark = false }: { duration?: string; difficulty?: string; maxAltitude?: string; dark?: boolean }) {
  const items = [
    { icon: Clock, label: "Duration", value: duration },
    { icon: Gauge, label: "Difficulty", value: difficulty },
    { icon: Mountain, label: "Max altitude", value: maxAltitude },
  ].filter((f) => f.value);
  if (!items.length) return null;
  return (
    <dl className={`flex flex-wrap gap-x-4 gap-y-2 text-[12.5px] ${dark ? "text-white/80" : "text-[#4A5B6C]"}`}>
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="inline-flex items-center gap-1.5">
          <Icon className={`h-3.5 w-3.5 ${dark ? "text-[#F4A300]" : "text-[#C98500]"}`} aria-hidden="true" />
          <dt className="sr-only">{label}</dt>
          <dd className="font-medium">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Destination card: the whole card links to the trek's page or its province guide. */
export function TrekCard({ trek }: { trek: Trek }) {
  const linkLabel = trek.dedicated ? "Explore this trek" : `Read more in the ${GUIDES[trek.href] ?? "region guide"}`;
  return (
    <Link
      href={trek.href}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.08] bg-white shadow-[0_18px_40px_-34px_rgba(11,41,66,0.55)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4A300]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0B2942]">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <PageImageFill image={trek.image} sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 560px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/80 via-[#071421]/10 to-transparent" />
        <p className="absolute bottom-3 left-4 right-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">{trek.region}</p>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className={`${SERIF} text-[22px] font-medium leading-tight text-[#0B2942]`}>{trek.name}</h3>
        <p className="mt-2.5 flex-1 text-[14px] leading-6 text-[#5B6B7B]">{trek.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Experiences">
          {trek.tags.map((t) => (
            <li key={t} className="rounded-full bg-[#F3EFE6] px-2.5 py-1 text-[11.5px] font-medium text-[#0B2942]/80">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Facts duration={trek.duration} difficulty={trek.difficulty} maxAltitude={trek.maxAltitude} />
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 border-t border-[#0B2942]/[0.08] pt-4 text-[13.5px] font-semibold text-[#C98500]">
          {linkLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Package card: details link to the package's existing page; Enquire opens the shared booking form. */
export function PackageCard({ pkg }: { pkg: FeaturedPackage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_24px_50px_-36px_rgba(11,41,66,0.6)] ring-1 ring-[#0B2942]/[0.07] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_70px_-36px_rgba(11,41,66,0.55)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0B2942]">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <PageImageFill image={pkg.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/85 via-transparent to-transparent" />
        {pkg.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0C1D30]">{pkg.badge}</span>
        )}
        <div className="absolute inset-x-5 bottom-4">
          <Facts duration={pkg.duration} difficulty={pkg.difficulty} maxAltitude={pkg.maxAltitude} dark />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C98500]">{pkg.destination}</p>
        <h3 className={`${SERIF} mt-2 text-[23px] font-medium leading-tight text-[#0B2942]`}>{pkg.name}</h3>
        <p className="mt-3 text-[14px] leading-6 text-[#5B6B7B]">{pkg.summary}</p>
        <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12.5px] text-[#0B2942]/75" aria-label="Route highlights">
          {pkg.highlights.map((h, i) => (
            <li key={h} className="inline-flex items-center gap-1.5">
              {i > 0 && <span className="text-[#C98500]" aria-hidden="true">→</span>}
              {h}
            </li>
          ))}
        </ol>
        <div className="mt-auto pt-6">
          <p className="text-[13px] text-[#5B6B7B]">
            <span className="font-semibold text-[#0B2942]">Price on request</span> · confirmed with your itinerary
          </p>
          <div className="mt-4 flex gap-2.5">
            <Link
              href={pkg.href}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0B2942] px-4 py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
            >
              {pkg.ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <OpenBookingButton
              prefill={{ tourType: pkg.name }}
              ariaLabel={`Enquire about ${pkg.name}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#0B2942]/15 px-4 py-3 text-[14px] font-semibold text-[#0B2942] transition-colors duration-300 hover:border-[#0B2942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire
            </OpenBookingButton>
          </div>
        </div>
      </div>
    </article>
  );
}
