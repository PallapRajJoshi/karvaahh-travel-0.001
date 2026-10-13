import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, ExternalLink, Info, MapPin } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import Accordion from "@/components/activities/experience/sections/Accordion";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import {
  CORRIDOR,
  CORRIDOR_FACTS,
  CORRIDOR_NOTE,
  GATEWAY_EXTRAS,
  GATEWAYS,
  INTRO,
  ITINERARY,
  ITINERARY_NOTE,
  OFFICIAL_LINKS,
  PACKAGES,
  PERMITS,
  SEASON_NOTE,
  SEASONS,
  TRANSPORT_NOTE,
  type FarWestPackage,
} from "@/data/farwest-nepal/content";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";

function Note({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      role="note"
      className={`flex items-start gap-3 rounded-[18px] border p-4 text-[13.5px] leading-6 sm:p-5 sm:text-[14px] ${
        dark ? "border-[#F4A300]/30 bg-[#F4A300]/[0.08] text-white/80" : "border-[#C98500]/25 bg-[#FFF7E6] text-[#5B4A20]"
      }`}
    >
      <Info className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-[#F4A300]" : "text-[#C98500]"}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

/* ============================================================
   Nepal, Beyond the Ordinary
   ============================================================ */

export function Intro({ image }: { image: PageImage }) {
  return (
    <section id="overview" aria-labelledby="overview-title" className={`${SECTION} bg-white`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16`}>
        <div>
          <Reveal>
            <SectionHeading id="overview-title" eyebrow="The Far West Difference" title="Nepal, Beyond the Ordinary" intro={INTRO.text} />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#5B6B7B]">One circuit · two provinces</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {INTRO.provinces.map((p) => (
                <div key={p.name} className="rounded-[20px] border border-[#0B2942]/10 bg-[#F8F6F1] p-5">
                  <h3 className={`${SERIF} text-[21px] font-medium text-[#0B2942]`}>{p.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.places.map((place) => (
                      <li key={place} className="rounded-full bg-white px-2.5 py-1 text-[12.5px] font-medium text-[#0B2942] ring-1 ring-[#0B2942]/10">
                        {place}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
                  >
                    Explore {p.name}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {image.src && (
            <Reveal variant="scale-in" className="relative hidden aspect-[16/9] overflow-hidden rounded-[24px] lg:block">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </Reveal>
          )}
          <ul className="grid gap-4">
            {INTRO.features.map((f, i) => (
              <li key={f.title}>
                <Reveal delay={i * 90} className="flex gap-4 rounded-[20px] border border-[#0B2942]/[0.08] bg-white p-5 shadow-[0_14px_40px_-34px_rgba(11,41,66,0.5)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F4F2] text-[#1C8A8F]">
                    <PageIcon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0B2942]">{f.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#5B6B7B]">{f.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Choose Your Far-West Experience
   ============================================================ */

const ACCENTS: Record<FarWestPackage["accent"], { band: string; chip: string; icon: string }> = {
  turquoise: { band: "from-[#0E4F63] to-[#1C8A8F]", chip: "text-[#1C8A8F]", icon: "bg-[#5FD3C6]/20 text-[#A9EDE4]" },
  gold: { band: "from-[#0B2942] to-[#6B4A0E]", chip: "text-[#C98500]", icon: "bg-[#F4A300]/20 text-[#F4C66A]" },
  green: { band: "from-[#163A2E] to-[#3E7C59]", chip: "text-[#3E7C59]", icon: "bg-[#9BD3A8]/20 text-[#C5EBCD]" },
};

export function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            center
            eyebrow="Signature Journeys"
            title="Choose Your Far-West Experience"
            intro="Three private journeys, each tailored to your dates, fitness and travel style. Every route is confirmed locally before departure."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 100} className="h-full">
                <PackageCard p={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[14px] text-[#5B6B7B]">
          Looking for something different?{" "}
          <OpenBookingButton
            prefill={{ tourType: "Custom Far-West expedition" }}
            className="font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
          >
            Design a custom Far-West expedition
          </OpenBookingButton>
        </p>
      </div>
    </section>
  );
}

function PackageCard({ p }: { p: FarWestPackage }) {
  const a = ACCENTS[p.accent];
  return (
    <article
      aria-labelledby={`pkg-${p.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#0B2942]/10 bg-white shadow-[0_20px_50px_-40px_rgba(11,41,66,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_60px_-34px_rgba(11,41,66,0.55)]"
    >
      <header className={`relative overflow-hidden bg-gradient-to-br ${a.band} px-6 pb-6 pt-7 text-white`}>
        <span aria-hidden="true" className={`${SERIF} pointer-events-none absolute -right-2 -top-6 text-[120px] leading-none text-white/[0.08]`}>
          {p.number}
        </span>
        <div className="relative flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Package {p.number}</p>
          <span className={`flex h-10 w-10 items-center justify-center rounded-full ${a.icon}`}>
            <PageIcon name={p.icon} className="h-5 w-5" />
          </span>
        </div>
        <h3 id={`pkg-${p.id}`} className={`${SERIF} relative mt-4 text-[25px] font-medium leading-tight sm:text-[27px]`}>
          {p.title}
        </h3>
        <p className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[12.5px] font-semibold">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {p.duration}
        </p>
      </header>

      <div className="flex flex-1 flex-col p-6">
        <dl>
          <dt className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${a.chip}`}>{p.style.label}</dt>
          <dd className="mt-1 text-[14px] leading-6 text-[#0B2942]">{p.style.value}</dd>
          <dt className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] ${a.chip}`}>Route concept</dt>
          <dd className="mt-2">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-1.5 text-[13px] font-medium text-[#0B2942]">
              {p.route.map((stop, i) => (
                <li key={stop} className="flex items-center gap-1">
                  {i > 0 && <ArrowRight className="h-3 w-3 text-[#0B2942]/35" aria-hidden="true" />}
                  <span className="rounded-md bg-[#F8F6F1] px-2 py-0.5">{stop}</span>
                </li>
              ))}
            </ol>
          </dd>
        </dl>

        <ul className="mt-6 space-y-2 border-t border-[#0B2942]/[0.08] pt-5">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[14px] leading-6 text-[#3D4F60]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <p className="flex items-baseline justify-between gap-3 border-t border-[#0B2942]/[0.08] pt-5 text-[13px] text-[#5B6B7B]">
            Pricing
            <span className="text-[15px] font-semibold text-[#0B2942]">Custom Quote</span>
          </p>
          <OpenBookingButton
            prefill={{ tourType: p.title }}
            className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#0B2942] px-6 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4A300] hover:text-[#0C1D30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
          >
            {p.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </OpenBookingButton>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   The Kolti Corridor
   ============================================================ */

export function KoltiCorridor() {
  return (
    <section id="kolti-corridor" aria-labelledby="corridor-title" className={`${SECTION} relative overflow-hidden bg-[#071421] text-white`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-20 h-[460px] w-[460px] rounded-full bg-[#1C8A8F]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#F4A300]/[0.07] blur-3xl" />
      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <SectionHeading
            id="corridor-title"
            dark
            eyebrow="Signature Route"
            title="The Kolti Corridor: A Journey Through the Far West"
            intro="Explore the trekking connection between the Rara region, Kolti in Bajura, Martadi and the Khaptad region — the walking route that links Karnali to Sudurpashchim."
          />
        </Reveal>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white/70">
          <MapPin className="h-3.5 w-3.5 text-[#5FD3C6]" aria-hidden="true" />
          Illustrative route timeline — not to scale
        </p>

        {/* Vertical on mobile/tablet, horizontal on large screens */}
        <ol className="relative mt-8 grid gap-0 lg:mt-12 lg:grid-cols-8 lg:gap-3" aria-label="Kolti corridor trekking stages, Rara Lake to Khaptad">
          <span aria-hidden="true" className="absolute bottom-6 left-[21px] top-6 border-l-2 border-dashed border-[#5FD3C6]/40 lg:bottom-auto lg:left-[6%] lg:right-[6%] lg:top-[22px] lg:border-l-0 lg:border-t-2" />
          {CORRIDOR.map((s, i) => {
            const end = i === 0 || i === CORRIDOR.length - 1;
            return (
              <li key={s.name} className="relative">
                <Reveal delay={i * 70} variant="fade-in" className="flex gap-4 pb-6 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
                  <span
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
                      end ? "border-[#F4A300] bg-[#F4A300] text-[#0C1D30]" : "border-[#5FD3C6] bg-[#071421] text-[#A9EDE4]"
                    }`}
                  >
                    <PageIcon name={s.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="pt-1.5 lg:pt-4">
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/45">Stage {i + 1}</span>
                    <h3 className={`${SERIF} mt-0.5 text-[19px] font-medium leading-tight lg:text-[18px] xl:text-[19px]`}>{s.name}</h3>
                    <p className="mt-1 text-[13.5px] leading-5 text-white/65 lg:text-[12.5px]">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 lg:mt-14">
          <Note dark>{CORRIDOR_NOTE}</Note>
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {CORRIDOR_FACTS.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 80} className="h-full rounded-[20px] border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-[15px] font-semibold text-[#F4C66A]">{f.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-white/70">{f.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Sample 28-Day Itinerary (collapsed accordion)
   ============================================================ */

export function Itinerary() {
  return (
    <section id="itinerary" aria-labelledby="itinerary-title" className={`${SECTION} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-[180px] lg:self-start">
          <Reveal>
            <SectionHeading
              id="itinerary-title"
              eyebrow="Sample Itinerary"
              title="A 28-Day Far-West Expedition"
              intro="One way to combine Rara, the Kolti corridor, Badimalika and Khaptad. Shorter journeys simply drop modules."
            />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <Note>{ITINERARY_NOTE}</Note>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="divide-y divide-[#0B2942]/10 rounded-[24px] border border-[#0B2942]/10 bg-white px-5 shadow-[0_14px_40px_-30px_rgba(11,41,66,0.45)] sm:px-8">
            {ITINERARY.map((phase, i) => (
              <details key={phase.title} className="heli-details group">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className={`${SERIF} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[16px] text-[#F4A300]`}>
                    {i + 1}
                  </span>
                  <h3 className="min-w-0 flex-1">
                    <span className="block text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#1C8A8F]">
                      Phase {i + 1} · {phase.days}
                    </span>
                    <span className="mt-0.5 block text-[16.5px] font-semibold text-[#0B2942] transition-colors group-hover:text-[#C98500] sm:text-[18px]">
                      {phase.title}
                    </span>
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-[#0B2942] transition-all duration-300 group-open:rotate-180 group-open:bg-[#F4A300] group-open:text-[#0C1D30]">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <ol className="space-y-3 pb-6 sm:pl-[60px]">
                  {phase.items.map((d) => (
                    <li key={d.day} className="grid gap-1 sm:grid-cols-[96px_1fr] sm:gap-4">
                      <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#C98500]">{d.day}</span>
                      <span className="text-[14.5px] leading-6 text-[#3D4F60]">{d.text}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Gateways & Transport
   ============================================================ */

export function Gateways({ nepalgunj }: { nepalgunj: PageImage }) {
  return (
    <section id="gateways" aria-labelledby="gateways-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="gateways-title"
            eyebrow="Gateways & Transport"
            title="Getting Into the Far West"
            intro="Flights, mountain roads and trails combine differently for every itinerary. These are the points we plan around."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {GATEWAYS.map((g, i) => (
            <li key={g.name}>
              <Reveal delay={i * 90} className="group relative h-full overflow-hidden rounded-[22px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_44px_-30px_rgba(11,41,66,0.45)]">
                {g.name === "Nepalgunj" && nepalgunj.src && (
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/7] overflow-hidden">
                    <Image src={nepalgunj.src} alt={nepalgunj.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                  <PageIcon name={g.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C8A8F]">{g.role}</p>
                <h3 className={`${SERIF} mt-1 text-[24px] font-medium text-[#0B2942]`}>{g.name}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#5B6B7B]">{g.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={100} className="mt-6 grid gap-4 rounded-[22px] border border-[#0B2942]/[0.08] p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8">
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {GATEWAY_EXTRAS.map((g) => (
              <li key={g.name} className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                <span className="text-[13.5px] leading-6 text-[#5B6B7B]">
                  <strong className="font-semibold text-[#0B2942]">{g.name}</strong> — {g.text}
                </span>
              </li>
            ))}
          </ul>
          <Note>{TRANSPORT_NOTE}</Note>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Best Time to Visit
   ============================================================ */

export function Seasons() {
  return (
    <section id="best-time" aria-labelledby="seasons-title" className={`${SECTION} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="seasons-title" center eyebrow="Best Time to Visit" title="Seasons of the Far West" />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={i * 80} className="h-full rounded-[22px] border border-[#0B2942]/[0.08] bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${s.tone === "good" ? "bg-[#E3F4F2] text-[#1C8A8F]" : "bg-[#FFF1D6] text-[#C98500]"}`}>
                    <PageIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      s.tone === "good" ? "bg-[#E3F4F2] text-[#156B6F]" : "bg-[#FFF1D6] text-[#8A6A1F]"
                    }`}
                  >
                    {s.tone === "good" ? "Recommended" : "Plan with care"}
                  </span>
                </div>
                <h3 className={`${SERIF} mt-5 text-[24px] font-medium text-[#0B2942]`}>{s.name}</h3>
                <p className="text-[13px] font-semibold text-[#5B6B7B]">{s.months}</p>
                <p className="mt-3 text-[14px] leading-6 text-[#5B6B7B]">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-8 max-w-[860px]">
          <Note>{SEASON_NOTE}</Note>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Permits, Safety & Accommodation
   ============================================================ */

export function Permits() {
  const half = Math.ceil(PERMITS.length / 2);
  return (
    <section id="permits" aria-labelledby="permits-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="permits-title"
            eyebrow="Before You Go"
            title="Permits, Safety & Accommodation"
            intro="Requirements depend on your nationality and the modules you choose. We arrange every permit with you — current fees are confirmed at the time of booking."
          />
        </Reveal>
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
          <Reveal>
            <Accordion items={PERMITS.slice(0, half)} openFirst={false} />
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={PERMITS.slice(half)} openFirst={false} />
          </Reveal>
        </div>
        <Reveal delay={80} className="mt-8 rounded-[20px] bg-[#F8F6F1] p-5 sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5B6B7B]">Official sources</p>
          <ul className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {OFFICIAL_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
                >
                  {l.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
