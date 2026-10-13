import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, Info, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { IconName } from "@/components/activities/experience/types";
import type { DhamStop, Escape, GuideBlock, ItineraryPreview, Season, UttarakhandPackage } from "@/data/uttarakhand/types";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const LINK =
  "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#2E6E99]";
const BTN_DARK =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";
const BTN_OUTLINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E6E99] hover:text-[#2E6E99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";

/* ============================================================
   Char Dham Yatra — featured experience
   ============================================================ */

type Note = { icon: IconName; title: string; text: string };

export function CharDham({ dhams, intro, notes, packages }: { dhams: DhamStop[]; intro: string[]; notes: Note[]; packages: UttarakhandPackage[] }) {
  return (
    <section id="char-dham" aria-labelledby="char-dham-title" className={`${SECTION} relative overflow-hidden bg-[#071421] text-white`}>
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#F4A300]/[0.07] blur-3xl" />
      <div className={`${CONTAINER} relative`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <SectionHeading id="char-dham-title" dark eyebrow="Featured Pilgrimage" title="Experience the Sacred Char Dham Yatra" />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-[15.5px] leading-7 text-white/75">
              {intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Connected route, west to east */}
        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="The traditional Char Dham route">
          <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[34px] hidden border-t-2 border-dashed border-[#F4A300]/40 lg:block" />
          {dhams.map((d, i) => (
            <li key={d.name} className="relative">
              <Reveal delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col">
                  <span className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#F4A300] bg-[#071421] text-[13px] font-semibold uppercase tracking-[0.12em] text-[#F4A300]">
                    0{i + 1}
                  </span>
                  <div className="mt-5 flex flex-1 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] transition-colors duration-500 group-hover:border-[#F4A300]/40">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                        <PageImageFill image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#F4C66A]">{d.deity}</p>
                      <h3 className={`${SERIF} mt-1 text-[25px] font-medium leading-tight`}>{d.name}</h3>
                      {d.elevation && <p className="mt-1 text-[12.5px] text-white/55">{d.elevation}</p>}
                      <p className="mt-3 text-[14px] leading-6 text-white/70">{d.text}</p>
                      <div className="mt-auto pt-5">
                        <Link href={d.href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#F4C66A] underline decoration-[#F4A300]/60 decoration-2 underline-offset-[6px] transition-colors hover:text-white">
                          Explore {d.name}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Verified Char Dham packages */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6">
                <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#F4C66A]">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {p.duration}
                </p>
                <h3 className={`${SERIF} mt-2 text-[22px] font-medium leading-snug`}>{p.title}</h3>
                <p className="mt-2 text-[13px] text-white/60">{p.destinations.join(" → ")}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13.5px] text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                  <p className="text-[13.5px] font-semibold">{p.price ?? "Price on request"}</p>
                  <Link href={p.href} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    View itinerary
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Practical notes */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {notes.map((n) => (
            <li key={n.title} className="rounded-[18px] border border-white/10 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4A300]/15 text-[#F4A300]">
                <PageIcon name={n.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-[14.5px] font-semibold">{n.title}</h3>
              <p className="mt-1.5 text-[13px] leading-5 text-white/60">{n.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Find Your Kind of Himalayan Escape (alternating editorial)
   ============================================================ */

export function Escapes({ items }: { items: Escape[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            center
            eyebrow="Travel Experiences"
            title="Find Your Kind of Himalayan Escape"
            intro="Pilgrimage, hill holidays, trekking, wildlife or simply stillness — Uttarakhand holds all of them, often within a day's drive of each other."
          />
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {items.map((e, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={e.id} aria-labelledby={`escape-${e.id}`} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal variant={reverse ? "slide-left" : "slide-right"} className={reverse ? "lg:order-2" : ""}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-36px_rgba(11,41,66,0.6)]">
                    <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]">
                      <PageImageFill image={e.image} sizes="(min-width: 1024px) 45vw, 100vw" />
                    </div>
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-[#071421]/70 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">
                      <MapPin className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
                      {e.where}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={100} className={reverse ? "lg:order-1" : ""}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E6E99]">{e.eyebrow}</p>
                  <h3 id={`escape-${e.id}`} className={`${SERIF} mt-3 text-[30px] font-medium leading-tight text-[#0B2942] sm:text-[36px]`}>
                    {e.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-7 text-[#4A5B6B]">{e.text}</p>
                  <ul className="mt-5 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[14.5px] text-[#0B2942]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {e.link && (
                      <Link href={e.link.href} className={BTN_DARK}>
                        {e.link.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    <OpenBookingButton prefill={{ tourType: e.tourType }} className={e.link ? BTN_OUTLINE : BTN_DARK} ariaLabel={`Enquire about ${e.eyebrow}`}>
                      Enquire Now
                    </OpenBookingButton>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Featured packages (existing Karvaahh products only)
   ============================================================ */

export function Packages({ items, customHref }: { items: UttarakhandPackage[]; customHref: string }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#F5F8FA]`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="packages-title"
              eyebrow="Uttarakhand Packages"
              title="Find Your Perfect Uttarakhand Tour"
              intro="Genuine Karvaahh journeys. Hotels, meals and transport follow the package you choose, and prices are quoted for your dates and group size."
            />
          </Reveal>
          <Link href="/activities/char-dham-yatra" className={LINK}>
            All Char Dham options <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <PackageCard p={p} />
              </Reveal>
            </li>
          ))}
          <li className="md:col-span-2 xl:col-span-3">
            <Reveal className="h-full">
              <article className="relative flex flex-col gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2942] via-[#123653] to-[#1F4D3A] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                <svg viewBox="0 0 400 120" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 w-full text-white/[0.06]" preserveAspectRatio="none">
                  <path d="M0 120 L60 60 L110 90 L170 30 L230 80 L290 40 L350 85 L400 55 L400 120 Z" fill="currentColor" />
                </svg>
                <div className="relative max-w-[640px]">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Made for you
                  </p>
                  <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight sm:text-[34px]`}>Plan Your Custom Uttarakhand Trip</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/80">
                    Mussoorie and Nainital, Auli, Chopta and Tungnath, Jim Corbett or the Valley of Flowers — these are planned on request. Tell us your dates, group and travel style and we will design the route, stays and pace around you.
                  </p>
                </div>
                <div className="relative flex flex-wrap gap-3">
                  <Link href={customHref} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F4A300] px-6 text-[14.5px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    Plan a Custom Trip
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <OpenBookingButton prefill={{ tourType: "Customized Himalayan tour" }} className="inline-flex min-h-[48px] items-center rounded-full border border-white/30 px-6 text-[14.5px] font-semibold transition-colors hover:bg-white/10">
                    Quick WhatsApp enquiry
                  </OpenBookingButton>
                </div>
              </article>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}

function PackageCard({ p }: { p: UttarakhandPackage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={p.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-semibold text-[#0B2942] backdrop-blur-sm">{p.kind}</span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#0B2942]/85 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur-sm">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {p.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[23px] font-medium leading-snug text-[#0B2942]`}>{p.title}</h3>
        <p className="mt-3 flex items-start gap-2 text-[13px] font-medium text-[#2E6E99]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          <span>
            <span className="sr-only">Destinations: </span>
            {p.destinations.join(" → ")}
          </span>
        </p>
        <ul className="mt-4 space-y-1.5" aria-label="Highlights">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4A5B6B]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        {p.inclusions.length > 0 && (
          <div className="mt-4 border-t border-[#0B2942]/[0.07] pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A5]">Included</p>
            <ul className="mt-2 space-y-1">
              {p.inclusions.map((x) => (
                <li key={x} className="text-[12.5px] leading-5 text-[#4A5B6B]">
                  · {x}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#0B2942]/[0.07] pt-5">
          <p className="text-[14px] font-semibold text-[#0B2942]">{p.price ?? "Price on request"}</p>
          <div className="flex flex-wrap gap-2">
            <Link href={p.href} className={BTN_OUTLINE} aria-label={`Explore package: ${p.title}`}>
              Explore Package
            </Link>
            <OpenBookingButton prefill={{ tourType: p.tourType }} className={BTN_DARK} ariaLabel={`Enquire about ${p.title}`}>
              Enquire
            </OpenBookingButton>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Suggested itineraries
   ============================================================ */

export function Itineraries({ items }: { items: ItineraryPreview[] }) {
  return (
    <section id="itineraries" aria-labelledby="itineraries-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="itineraries-title"
            dark
            eyebrow="Suggested Itineraries"
            title="How an Uttarakhand Journey Unfolds"
            intro="Karvaahh's published sample itineraries, alongside illustrative ideas to start the conversation. Hotels, travel times and access are confirmed for your dates — nothing here is a guaranteed schedule."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((it, i) => (
            <li key={it.id} className={i === items.length - 1 && items.length % 2 === 1 ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${it.status === "sample" ? "bg-[#F4A300] text-[#0C1D30]" : "border border-white/25 text-white/85"}`}>
                      {it.status === "sample" ? "Sample itinerary" : "Itinerary idea — requires confirmation"}
                    </span>
                    <span className="text-[12.5px] font-medium text-white/60">{it.duration}</span>
                  </div>
                  <h3 className={`${SERIF} mt-4 text-[25px] font-medium leading-tight`}>{it.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">{it.summary}</p>
                  <ol className="relative mt-6 space-y-3.5 border-l border-dashed border-[#F4A300]/50 pl-5">
                    {it.steps.map((s, k) => (
                      <li key={`${k}-${s.title}`} className="relative">
                        <span aria-hidden="true" className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#F4A300] bg-[#071421]" />
                        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F4C66A]">
                          {it.unit} {k + 1}
                        </span>
                        <span className="block text-[14.5px] font-semibold">{s.title}</span>
                        <span className="block text-[13px] leading-5 text-white/60">{s.text}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 flex items-start gap-2 text-[12.5px] leading-5 text-white/55">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F4A300]" aria-hidden="true" />
                    {it.notice}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {it.link && (
                      <Link
                        href={it.link.href}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[14px] font-semibold transition-all duration-300 hover:border-[#F4A300] hover:bg-[#F4A300] hover:text-[#0C1D30]"
                      >
                        {it.link.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    <OpenBookingButton
                      prefill={{ tourType: it.tourType }}
                      ariaLabel={`Enquire about ${it.title}`}
                      className="inline-flex min-h-[44px] items-center rounded-full px-5 text-[14px] font-semibold text-[#F4C66A] transition-colors hover:text-white"
                    >
                      Enquire
                    </OpenBookingButton>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Best time to visit
   ============================================================ */

export function Seasons({ items, note }: { items: Season[]; note: string }) {
  return (
    <section id="best-time" aria-labelledby="best-time-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="best-time-title"
            eyebrow="Seasonal Guide"
            title="Best Time to Visit Uttarakhand"
            intro="The right season depends on where you are going and how high. Months are a general guide — weather in the mountains always has the final word."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i * 70} className="h-full">
                <article className={`flex h-full flex-col rounded-[22px] border p-6 ${s.caution ? "border-[#C2561A]/20 bg-[#FFF6EE]" : "border-[#0B2942]/[0.07] bg-[#F5F8FA]"}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                    <PageIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className={`${SERIF} mt-4 text-[23px] font-medium text-[#0B2942]`}>{s.name}</h3>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[#2E6E99]">{s.months}</p>
                  <p className="mt-3 text-[13.5px] leading-6 text-[#4A5B6B]">{s.text}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.goodFor.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-[13px] text-[#0B2942]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                        {g}
                      </li>
                    ))}
                  </ul>
                  {s.caution && (
                    <p className="mt-auto flex items-start gap-1.5 pt-4 text-[12.5px] font-medium leading-5 text-[#8A2E1F]">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {s.caution}
                    </p>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-start gap-2 rounded-2xl border border-[#C98500]/25 bg-[#FFF6E5] px-5 py-4 text-[14px] leading-6 text-[#5B4320]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {note}
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   Practical travel guide
   ============================================================ */

export function TravelGuide({ items }: { items: GuideBlock[] }) {
  return (
    <section id="guide" aria-labelledby="guide-title" className={`${SECTION} bg-[#F5F8FA]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="guide-title"
            eyebrow="Practical Travel Guide"
            title="Plan Your Himalayan Journey With Confidence"
            intro="Regulations, road conditions and seasonal access change, so we confirm the details for your route before you travel."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <li key={b.id}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <article aria-labelledby={`guide-${b.id}`} className="flex h-full flex-col rounded-[22px] border border-[#0B2942]/[0.07] bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_44px_-30px_rgba(11,41,66,0.45)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                    <PageIcon name={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 id={`guide-${b.id}`} className={`${SERIF} mt-4 text-[21px] font-medium leading-tight text-[#0B2942]`}>
                    {b.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[13.5px] leading-6 text-[#4A5B6B]">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
