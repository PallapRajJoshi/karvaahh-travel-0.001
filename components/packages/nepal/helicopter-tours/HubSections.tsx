import Link from "next/link";
import { AlertTriangle, ArrowUpRight, Check, CircleDot, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { IconName, RequiredImage } from "@/components/activities/experience/types";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import EnquireButton from "./EnquireButton";
import type { HubCard, HubPackage } from "./model";

/* ---------- The Himalayas, without the long trek ---------- */

export function WhyHelicopter({ items, image }: { items: { icon: IconName; title: string; text: string }[]; image: RequiredImage }) {
  return (
    <section id="why" aria-labelledby="why-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
        <Reveal variant="slide-left" className="lg:sticky lg:top-[170px]">
          <SectionHeading
            id="why-title"
            eyebrow="Why Fly"
            title="The Himalayas, Without the Long Trek"
            intro="A helicopter turns days of walking into a few unforgettable hours above the peaks — for travellers short on time, pilgrims, photographers and anyone who prefers not to trek."
          />
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.6)]">
            <PageImageFill image={image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </Reveal>

        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <li key={item.title} className={i === items.length - 1 && items.length % 2 ? "sm:col-span-2" : undefined}>
                <Reveal delay={(i % 2) * 90} className="h-full">
                  <div className="h-full rounded-[22px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-6 transition-colors duration-300 hover:border-[#F4A300]/50 hover:bg-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                      <PageIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className={`${SERIF} mt-4 text-[20px] font-medium leading-snug text-[#0B2942]`}>{item.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-6 text-[#5B6B7B]">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="mt-6 flex gap-3 rounded-[22px] border border-[#F4A300]/30 bg-[#F4A300]/[0.07] p-5 text-[14px] leading-6 text-[#5B4A1F]">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C98500]" aria-hidden="true" />
              <span>
                Flight routes, duration, landings and accessibility depend on weather, permissions, aircraft limitations and the selected itinerary. Helicopter travel in the
                mountains carries inherent risks, and no flight can guarantee a landing at any particular place or altitude.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured packages ---------- */

const MODE_LABEL: Record<string, string> = {
  landing: "Stop",
  optional: "Landing where permitted",
  aerial: "Aerial view",
  restricted: "Landing restricted",
};

export function FeaturedPackages({ packages }: { packages: HubPackage[] }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            eyebrow="Featured Packages"
            title="Choose Your Himalayan Flight Experience"
            intro="Our most requested helicopter journeys, with the route, inclusions and booking options from each package. Prices are confirmed with the operator for your date."
          />
        </Reveal>

        <ul className="mt-12 grid gap-7 lg:grid-cols-2">
          {packages.map((p, i) => (
            <li key={p.id} className="min-w-0">
              <Reveal delay={(i % 2) * 110} className="h-full">
                <PackageCard p={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PackageCard({ p }: { p: HubPackage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[#0B2942]/[0.07] transition-shadow duration-500 hover:shadow-[0_34px_70px_-34px_rgba(11,41,66,0.55)]">
      <div className="relative aspect-[16/8] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none">
          <PageImageFill image={p.image} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/85 via-[#071421]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F4A300]">{p.region}</p>
          <h3 className={`${SERIF} mt-2 text-[26px] font-medium leading-tight sm:text-[30px]`}>{p.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <dl className="grid grid-cols-2 gap-4 rounded-2xl bg-[#F8F6F1] p-4 text-[13px] sm:grid-cols-4">
          {[
            ["Departure", p.from],
            ["Duration", p.duration],
            ["Landing", p.landing],
            ["Arrangement", p.arrangement],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7B]">{label}</dt>
              <dd className="mt-1 font-semibold leading-5 text-[#0B2942]">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">Flight & landing highlights</h4>
            <ol className="mt-3 space-y-2.5">
              {p.stops.map((s) => (
                <li key={s.name} className="flex gap-2.5 text-[13.5px] leading-5">
                  <CircleDot className={`mt-0.5 h-4 w-4 shrink-0 ${s.mode === "optional" ? "text-[#C98500]" : "text-[#0B2942]/40"}`} aria-hidden="true" />
                  <span>
                    <span className="font-medium text-[#0B2942]">{s.name}</span>
                    {s.elevation && <span className="text-[#5B6B7B]"> · {s.elevation}</span>}
                    <span className="block text-[12px] text-[#5B6B7B]">{MODE_LABEL[s.mode] ?? s.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">Included</h4>
            <ul className="mt-3 space-y-2">
              {p.inclusions.map((inc) => (
                <li key={inc} className="flex gap-2 text-[13.5px] leading-5 text-[#0B2942]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2E8B57]" aria-hidden="true" />
                  {inc}
                </li>
              ))}
            </ul>
            <h4 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">Booking options</h4>
            <ul className="mt-3 divide-y divide-[#0B2942]/[0.07]">
              {p.options.map((o) => (
                <li key={o.name} className="flex items-baseline justify-between gap-3 py-2 text-[13px]">
                  <span className="min-w-0">
                    <span className="font-medium text-[#0B2942]">{o.name}</span>
                    <span className="block text-[12px] text-[#5B6B7B]">{o.basis}</span>
                  </span>
                  <span className="shrink-0 text-right font-semibold text-[#0B2942]">{o.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-[12.5px] leading-5 text-[#5B6B7B]">{p.landingNote}</p>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <EnquireButton
            tourType={p.enquiryType}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#F4A300] px-6 text-[14.5px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2942] motion-reduce:transform-none"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Check Availability
          </EnquireButton>
          {p.href && (
            <Link
              href={p.href}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-6 text-[14.5px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
            >
              View Full Itinerary
              <span className="sr-only">: {p.title}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- How a helicopter tour works ---------- */

export function HowItWorks({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className={`${ANCHOR} ${SECTION_Y} relative overflow-hidden bg-[#0B2942] text-white`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,163,0,0.14),transparent_55%)]" />
      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <SectionHeading id="how-title" eyebrow="Step by Step" title="How a Helicopter Tour Works" dark center />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute left-[23px] top-2 h-[calc(100%-16px)] w-px bg-white/15 lg:left-0 lg:top-[23px] lg:h-px lg:w-full" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 100} className="flex gap-5 lg:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F4A300]/60 bg-[#0B2942] font-semibold text-[#F4A300] shadow-[0_0_0_6px_#0B2942]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-6">
                  <h3 className={`${SERIF} text-[21px] font-medium leading-snug`}>{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-6 text-white/70">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="mx-auto mt-14 max-w-[760px] rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-center text-[14px] leading-6 text-white/75">
            Flight schedules, routes and landings may change at short notice because of weather, safety requirements or aviation restrictions. The pilot&apos;s and
            operator&apos;s decisions on safety are final.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Essential travel & safety information ---------- */

export function TravelInfo({ items }: { items: { icon: IconName; title: string; text: string }[] }) {
  return (
    <section id="travel-info" aria-labelledby="info-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="info-title"
            eyebrow="Before You Fly"
            title="Essential Travel & Safety Information"
            intro="Practical guidance for every Himalayan flight. Your operator's instructions on the day always take precedence."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <div className="h-full rounded-[22px] border border-[#0B2942]/[0.08] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.5)] motion-reduce:transform-none">
                  <PageIcon name={item.icon} className="h-7 w-7 text-[#C98500]" />
                  <h3 className={`${SERIF} mt-4 text-[20px] font-medium text-[#0B2942]`}>{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-6 text-[#5B6B7B]">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Tour comparison ---------- */

const COLUMNS: { key: keyof HubCard; label: string }[] = [
  { key: "from", label: "Departure" },
  { key: "duration", label: "Typical duration" },
  { key: "landing", label: "Landing" },
  { key: "arrangement", label: "Arrangement" },
  { key: "price", label: "Price" },
];

export function Comparison({ cards }: { cards: HubCard[] }) {
  return (
    <section id="compare" aria-labelledby="compare-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="compare-title"
            eyebrow="Compare"
            title="Compare Nepal Helicopter Tours"
            intro="Key details from each tour package side by side. Durations are typical; the operator confirms the final plan for your date."
          />
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden overflow-hidden rounded-[24px] bg-white ring-1 ring-[#0B2942]/[0.07] lg:block">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <caption className="sr-only">Comparison of Nepal helicopter and mountain flight experiences</caption>
            <thead className="bg-[#0B2942] text-white">
              <tr>
                <th scope="col" className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Experience
                </th>
                {COLUMNS.map((c) => (
                  <th key={c.key} scope="col" className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {c.label}
                  </th>
                ))}
                <th scope="col" className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Highlights
                </th>
              </tr>
            </thead>
            <tbody>
              {cards.map((c) => (
                <tr key={c.id} className="border-t border-[#0B2942]/[0.07] align-top transition-colors hover:bg-[#F8F6F1]">
                  <th scope="row" className="px-5 py-4 font-semibold text-[#0B2942]">
                    {c.href ? (
                      <Link href={c.href} className="underline decoration-[#F4A300]/60 decoration-2 underline-offset-4 hover:decoration-[#F4A300]">
                        {c.title}
                      </Link>
                    ) : (
                      c.title
                    )}
                    <span className="mt-1 block text-[12px] font-normal text-[#5B6B7B]">
                      {c.region} · {c.aircraft}
                    </span>
                  </th>
                  {COLUMNS.map((col) => (
                    <td key={col.key} className="px-4 py-4 text-[#0B2942]">
                      {String(c[col.key])}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-[#5B6B7B]">{c.highlights.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile & tablet cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {cards.map((c) => (
            <li key={c.id} className="rounded-[22px] bg-white p-5 ring-1 ring-[#0B2942]/[0.07]">
              <h3 className={`${SERIF} text-[19px] font-medium leading-snug text-[#0B2942]`}>
                {c.href ? <Link href={c.href}>{c.title}</Link> : c.title}
              </h3>
              <p className="mt-1 text-[12px] text-[#5B6B7B]">
                {c.region} · {c.aircraft}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
                {COLUMNS.map((col) => (
                  <div key={col.key} className="min-w-0">
                    <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B]">{col.label}</dt>
                    <dd className="mt-0.5 font-medium text-[#0B2942]">{String(c[col.key])}</dd>
                  </div>
                ))}
                <div className="col-span-2">
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B]">Highlights</dt>
                  <dd className="mt-0.5 text-[#0B2942]">{c.highlights.join(" · ")}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Related links ---------- */

export function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <nav aria-labelledby="related-title" className="border-t border-[#0B2942]/[0.08] bg-white py-12">
      <div className={CONTAINER}>
        <h2 id="related-title" className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#C98500]">
          Continue Exploring
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#0B2942]/15 px-5 text-[14px] font-medium text-[#0B2942] transition-colors hover:border-[#0B2942] hover:bg-[#0B2942] hover:text-white"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

