"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock, MapPin, Mountain, Signal } from "lucide-react";
import { CONTACT } from "@/components/activities/experience/site";
import { PageImageFill, SERIF } from "@/components/activities/experience/ui";
import { ACCESS, DIFFICULTY, DURATIONS, FAITHS, PILGRIMAGE_TYPES, REGIONS } from "@/data/pilgrimage/filters";
import type { AccessId, PilgrimageDestination, PilgrimagePackage } from "@/data/pilgrimage/types";

/** Event used by "View Packages" to filter the package explorer by destination. */
export const PACKAGES_EVENT = "pilgrimage:show-packages";

export function showPackagesFor(destinationId: string) {
  window.dispatchEvent(new CustomEvent(PACKAGES_EVENT, { detail: destinationId }));
  const el = document.getElementById("packages");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

const TONE = {
  ok: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  info: "bg-sky-50 text-[#0B2942] ring-sky-200",
  warn: "bg-amber-50 text-amber-900 ring-amber-300",
};

/** Honest access / difficulty indicator. */
export function AccessibilityBadge({ id }: { id: AccessId }) {
  const a = ACCESS[id];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${TONE[a.tone]}`}>{a.label}</span>;
}

/** Destination card: image, tradition, significance, honest access and two CTAs. */
export function DestinationCard({ d, compact = false }: { d: PilgrimageDestination; compact?: boolean }) {
  const meta = [
    d.altitude && { icon: Mountain, label: d.altitude },
    d.idealSeason && { icon: CalendarDays, label: d.idealSeason },
    d.recommendedDuration && { icon: Clock, label: DURATIONS[d.recommendedDuration] },
    { icon: Signal, label: DIFFICULTY[d.difficulty] },
  ].filter(Boolean) as { icon: typeof Mountain; label: string }[];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#0B2942]/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(11,41,66,0.55)] focus-within:ring-2 focus-within:ring-[#F4A300]">
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          {d.image ? (
            <PageImageFill image={d.image} sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 480px) 50vw, 100vw" />
          ) : (
            <div role="img" aria-label={d.name} className="absolute inset-0 bg-gradient-to-br from-[#16405E] via-[#0B2942] to-[#3A1F1A]">
              <svg viewBox="0 0 200 120" className="absolute inset-x-0 bottom-0 h-1/2 w-full text-white/[0.07]" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
                <path fill="currentColor" d="M0 120 L40 70 L62 88 L100 40 L138 86 L160 66 L200 96 L200 120 Z" />
              </svg>
              <span className={`${SERIF} absolute bottom-4 left-5 right-5 text-[22px] leading-tight text-white/85`}>{d.name}</span>
            </div>
          )}
        </div>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {d.faith.map((f) => (
            <span key={f} className="rounded-full bg-[#071421]/70 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {FAITHS[f]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-[12px] font-medium text-[#8A97A5]">
          <MapPin className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
          {d.district} · {REGIONS[d.region].short}
        </p>
        <h3 className={`${SERIF} mt-1.5 text-[21px] font-medium leading-tight text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A2E1F]">
          {d.pilgrimageTypes.map((t) => PILGRIMAGE_TYPES[t]).join(" · ")}
        </p>
        <p className="mt-2.5 text-[14px] leading-6 text-[#4A5B6C]">{d.significance}</p>
        {d.classificationNote && <p className="mt-1.5 text-[12px] italic text-[#8A6A1F]">{d.classificationNote}</p>}
        {d.accessNote && <p className="mt-1.5 text-[12px] text-[#5B6B7B]">{d.accessNote}</p>}

        {!compact && (
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[12.5px] text-[#4A5B6C]">
            {meta.map((m) => (
              <li key={m.label} className="flex items-center gap-1.5">
                <m.icon className="h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
                <span className="truncate">{m.label}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.access.map((a) => (
            <AccessibilityBadge key={a} id={a} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {d.href ? (
            <Link
              href={d.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2942] px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#123653]"
            >
              Explore Destination
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : (
            <a
              href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like to know more about visiting ${d.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2942] px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#123653]"
            >
              Ask About This Place
            </a>
          )}
          <button
            type="button"
            onClick={() => showPackagesFor(d.id)}
            className="inline-flex items-center gap-1 rounded-full px-3 py-2.5 text-[13.5px] font-semibold text-[#0B2942] underline-offset-4 hover:underline"
          >
            View Packages
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

/** Package card with full metadata; price only when a real one is entered. */
export function PackageCard({ p, destinationNames }: { p: PilgrimagePackage; destinationNames: string[] }) {
  const rows = [
    { label: "Transport", value: p.transport.join(" · ") },
    { label: "Category", value: p.category },
    p.accommodation && { label: "Hotels", value: p.accommodation },
    p.meals && { label: "Meals", value: p.meals },
    p.permits && { label: "Permits", value: p.permits },
    p.suitableFor && { label: "Suits", value: p.suitableFor },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white ring-1 ring-[#0B2942]/[0.08] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.6)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        {p.image && (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <PageImageFill image={p.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw" />
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/70 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-[#F4A300] px-3 py-1 text-[12px] font-bold text-[#0C1D30]">{p.duration}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className={`${SERIF} text-[21px] font-medium leading-tight text-[#0B2942]`}>{p.title}</h3>
        <p className="mt-2 text-[14px] leading-6 text-[#4A5B6C]">{p.description}</p>
        {destinationNames.length > 0 && (
          <p className="mt-3 text-[12.5px] font-medium text-[#8A2E1F]">{destinationNames.join(" → ")}</p>
        )}
        <dl className="mt-4 grid gap-1.5 border-t border-[#0B2942]/[0.08] pt-4 text-[12.5px]">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[76px_1fr] gap-2">
              <dt className="font-semibold text-[#8A97A5]">{r.label}</dt>
              <dd className="text-[#4A5B6C]">{r.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[17px] font-semibold text-[#0B2942]">{p.price ?? "Price on Request"}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <a
            href={CONTACT.whatsappHref(`Hello Karvaahh, I'm interested in the "${p.title}" package (${p.duration}). Please share details and the current price.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#F4A300] px-4 py-3 text-[14px] font-semibold text-[#0C1D30] transition-colors hover:bg-[#FFB524]"
          >
            Enquire
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          {p.href && (
            <Link href={p.href} className="inline-flex items-center justify-center rounded-full border border-[#0B2942]/15 px-4 py-3 text-[14px] font-semibold text-[#0B2942] hover:border-[#0B2942]">
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/** Large flagship card for a region's featured destination. */
export function FeaturedDestination({ d, related, dark = false }: { d: PilgrimageDestination; related: PilgrimagePackage[]; dark?: boolean }) {
  const facts = [
    { label: "Tradition", value: d.faith.map((f) => FAITHS[f]).join(" · ") },
    { label: "Location", value: `${d.district}, ${REGIONS[d.region].short}` },
    d.altitude && { label: "Altitude", value: d.altitude },
    d.idealSeason && { label: "Ideal time", value: d.idealSeason },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className={`group grid overflow-hidden rounded-[30px] lg:grid-cols-[1.15fr_0.85fr] ${dark ? "bg-white/[0.05] ring-1 ring-white/10" : "bg-white ring-1 ring-[#0B2942]/[0.08] shadow-[0_30px_70px_-45px_rgba(11,41,66,0.55)]"}`}>
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[460px]">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
          {d.image ? <PageImageFill image={d.image} sizes="(min-width: 1024px) 55vw, 100vw" /> : <div className="absolute inset-0 bg-gradient-to-br from-[#16405E] to-[#3A1F1A]" />}
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0C1D30]">Featured</span>
      </div>
      <div className="flex flex-col p-6 sm:p-9">
        <p className={`text-[12px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#F4A300]" : "text-[#8A2E1F]"}`}>{d.pilgrimageTypes.map((t) => PILGRIMAGE_TYPES[t]).join(" · ")}</p>
        <h3 className={`${SERIF} mt-2 text-[32px] font-medium leading-tight sm:text-[38px] ${dark ? "text-white" : "text-[#0B2942]"}`}>{d.name}</h3>
        <p className={`mt-3 text-[15.5px] leading-7 ${dark ? "text-white/80" : "text-[#4A5B6C]"}`}>{d.significance}</p>
        {d.accessNote && <p className={`mt-2 text-[13px] ${dark ? "text-white/60" : "text-[#5B6B7B]"}`}>{d.accessNote}</p>}
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/50" : "text-[#8A97A5]"}`}>{f.label}</dt>
              <dd className={`mt-0.5 text-[14px] font-medium ${dark ? "text-white" : "text-[#0B2942]"}`}>{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {d.access.map((a) => (
            <AccessibilityBadge key={a} id={a} />
          ))}
        </div>
        {related.length > 0 && (
          <p className={`mt-5 text-[13px] ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>
            <span className="font-semibold">Related packages:</span> {related.slice(0, 3).map((r) => r.title).join(" · ")}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {d.href && (
            <Link href={d.href} className="inline-flex items-center gap-1.5 rounded-full bg-[#F4A300] px-5 py-3 text-[14px] font-semibold text-[#0C1D30] hover:bg-[#FFB524]">
              Explore {d.name.split(",")[0]}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          <button
            type="button"
            onClick={() => showPackagesFor(d.id)}
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-[14px] font-semibold ${dark ? "border border-white/30 text-white hover:bg-white/10" : "border border-[#0B2942]/15 text-[#0B2942] hover:border-[#0B2942]"}`}
          >
            View Packages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
