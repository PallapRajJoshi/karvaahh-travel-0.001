import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, Info, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTACT } from "@/components/activities/experience/site";
import { CONTAINER, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import type { BeachPackage, GuideBlock, OceanExperience, SeasonNote, SiteLink } from "@/data/beach-cruise/types";
import { BTN_LINE, BTN_OCEAN, OceanHeading, OceanImage, SECTION, TEXT_LINK, WaveMark } from "./ui";

/* ============================================================
   Ocean experiences (alternating editorial rows)
   ============================================================ */

export function Experiences({ items }: { items: OceanExperience[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="experiences-title"
            center
            eyebrow="Ocean Experiences"
            title="More Than a Holiday. An Ocean Experience."
            intro="Seven ways to spend time by the sea. Each depends on the destination, season and operator, so we match the experience to the place rather than promise it everywhere."
          />
        </Reveal>

        <ol className="mt-16 space-y-16 sm:space-y-20 lg:space-y-24">
          {items.map((e, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={e.id} id={`experience-${e.id}`} className="scroll-mt-[120px] md:scroll-mt-[160px]">
                <article aria-labelledby={`exp-${e.id}`} className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
                  <Reveal variant={flip ? "slide-left" : "slide-right"} className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                    <div className="group relative aspect-[16/11] overflow-hidden rounded-[32px] shadow-[0_30px_60px_-40px_rgba(5,40,58,0.7)]">
                      <div className="absolute inset-0 transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]">
                        <OceanImage image={e.image} sizes="(min-width: 768px) 56vw, 100vw" />
                      </div>
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#05283A]/30 via-transparent to-transparent" />
                    </div>
                  </Reveal>
                  <Reveal delay={120} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                    <p className={`${SERIF} text-[56px] font-medium leading-none text-[#2CC4C8]/35 lg:text-[72px]`} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 id={`exp-${e.id}`} className={`${SERIF} mt-2 text-[30px] font-medium leading-tight text-[#0B2942] lg:text-[36px]`}>
                      {e.title}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-7 text-[#4E6272]">{e.text}</p>
                    <p className="mt-5 flex items-start gap-2 text-[13.5px] font-medium leading-6 text-[#0A4D68]">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
                      <span>
                        <span className="sr-only">Where: </span>
                        {e.where}
                      </span>
                    </p>
                    {e.link && (
                      <Link href={e.link.href} className={`${TEXT_LINK} mt-6`}>
                        {e.link.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </Reveal>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Featured packages (existing Karvaahh products only)
   ============================================================ */

export function Packages({ items, customHref }: { items: BeachPackage[]; customHref: string }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#F7F1E6]`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <OceanHeading
              id="packages-title"
              eyebrow="Beach & Cruise Packages"
              title="Your Next Escape Starts Here"
              intro="Existing Karvaahh journeys, shown with their published routes and suggested lengths. Hotels, transfers and inclusions are confirmed in your quote for your dates, and every package can be customized."
            />
          </Reveal>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/packages/international/asia#journeys" className={TEXT_LINK}>
              All Asia journeys <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/packages/international/europe#packages" className={TEXT_LINK}>
              Europe packages <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <PackageCard p={p} />
              </Reveal>
            </li>
          ))}

          <li>
            <Reveal delay={210} className="h-full">
              <article className="relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#0E8A9A_0%,#0A4D68_45%,#05283A_100%)] p-7 text-white">
                <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 w-full text-white/[0.08]">
                  {Array.from({ length: 7 }).map((_, k) => (
                    <path key={k} d={`M0 ${30 + k * 22} C 100 ${10 + k * 22}, 200 ${50 + k * 22}, 400 ${24 + k * 22}`} fill="none" stroke="currentColor" strokeWidth="2" />
                  ))}
                </svg>
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7FE0DB]">Made for you</p>
                <h3 className={`${SERIF} relative mt-3 text-[30px] font-medium leading-tight`}>Request a Custom Holiday</h3>
                <p className="relative mt-3 text-[14.5px] leading-6 text-white/80">
                  Mauritius, Seychelles, Goa, the Andaman Islands or an ocean cruise? Tell us where and when, and we will plan the stays, transfers and pace around you.
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  <Link href={customHref} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    Request a Custom Holiday
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <OpenBookingButton prefill={{ tourType: "Custom beach holiday" }} className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-5 text-[14px] font-semibold transition-colors hover:bg-white/10">
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

function PackageCard({ p }: { p: BeachPackage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_22px_48px_-34px_rgba(5,40,58,0.55)] ring-1 ring-[#0A4D68]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_60px_-30px_rgba(5,40,58,0.6)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]">
          <OceanImage image={p.image} sizes="(min-width: 1280px) 24vw, (min-width: 768px) 45vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-semibold text-[#0A4D68] backdrop-blur-sm">{p.destination}</span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#05283A]/80 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur-sm">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {p.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[23px] font-medium leading-snug text-[#0B2942]`}>{p.title}</h3>
        <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12.5px] font-medium text-[#0E8A9A]" aria-label="Route">
          {p.route.map((s, k) => (
            <li key={s} className="flex items-center gap-1.5">
              {s}
              {k < p.route.length - 1 && <span aria-hidden="true" className="text-[#2CC4C8]/70">→</span>}
            </li>
          ))}
        </ol>
        <p className="mt-3 flex items-start gap-2 text-[14px] leading-6 text-[#4E6272]">
          <Check className="mt-1 h-4 w-4 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
          {p.summary}
        </p>
        <p className="mt-3 text-[12px] leading-5 text-[#7A8794]">Suggested length; stays and inclusions confirmed with your quote.</p>
        <div className="mt-auto border-t border-[#0A4D68]/[0.08] pt-5">
          <p className="text-[14px] font-semibold text-[#0B2942]">{p.price ?? "Price on request"}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href={p.href} className={BTN_LINE} aria-label={`Explore package: ${p.title}`}>
              Explore Package
            </Link>
            <OpenBookingButton prefill={{ tourType: p.tourType }} className={BTN_OCEAN} ariaLabel={`Enquire about ${p.title}`}>
              Enquire Now
            </OpenBookingButton>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Best time to travel
   ============================================================ */

export function Seasons({ items }: { items: SeasonNote[] }) {
  return (
    <section id="best-time" aria-labelledby="best-time-title" className={`${SECTION} bg-[#EAF7F6]`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-[180px] lg:self-start">
          <OceanHeading
            id="best-time-title"
            eyebrow="When to Go"
            title="Best Time to Plan a Beach or Cruise Holiday"
            intro="The right season depends on the destination, the coast and what you want to do in the water. These are general patterns, not guarantees."
          />
          <p className="mt-6 flex items-start gap-2 rounded-2xl border border-[#0E8A9A]/20 bg-white/70 px-5 py-4 text-[14px] leading-6 text-[#2F4A5A]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
            Weather shifts year to year. Check current conditions, local advisories and operator schedules before you book — we do the same for your dates.
          </p>
        </Reveal>

        <ul className="divide-y divide-[#0A4D68]/10 border-y border-[#0A4D68]/10">
          {items.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 3) * 70} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <h3 className={`${SERIF} flex items-center gap-3 text-[22px] font-medium leading-tight text-[#0B2942]`}>
                  <WaveMark className="h-2.5 w-6 shrink-0 text-[#2CC4C8]" />
                  {s.region}
                </h3>
                <p className="text-[15px] leading-7 text-[#4E6272]">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Travel planning & cruise essentials
   ============================================================ */

export function Essentials({ items }: { items: GuideBlock[] }) {
  const [first, ...rest] = items;
  return (
    <section id="essentials" aria-labelledby="essentials-title" className={`${SECTION} bg-[#F7F1E6]`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="essentials-title"
            eyebrow="Before You Go"
            title="Travel Planning & Cruise Essentials"
            intro="Practical guidance for island and cruise travel. Requirements change, so we confirm documents and details for your route before you travel."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {first && (
            <Reveal className="lg:row-span-2">
              <GuideCard block={first} featured />
            </Reveal>
          )}
          {rest.map((b, i) => (
            <Reveal key={b.id} delay={(i % 2) * 80}>
              <GuideCard block={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuideCard({ block, featured = false }: { block: GuideBlock; featured?: boolean }) {
  return (
    <article
      aria-labelledby={`guide-${block.id}`}
      className={`flex h-full flex-col rounded-[28px] p-6 sm:p-7 ${featured ? "bg-[#0A4D68] text-white" : "bg-white ring-1 ring-[#0A4D68]/[0.06]"}`}
    >
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${featured ? "bg-[#7FE0DB] text-[#05283A]" : "bg-[#EAF7F6] text-[#0A4D68]"}`}>
        <PageIcon name={block.icon} className="h-5 w-5" />
      </span>
      <h3 id={`guide-${block.id}`} className={`${SERIF} mt-5 text-[25px] font-medium leading-tight ${featured ? "text-white" : "text-[#0B2942]"}`}>
        {block.title}
      </h3>
      <p className={`mt-2 text-[14.5px] leading-6 ${featured ? "text-white/75" : "text-[#5B6B7B]"}`}>{block.intro}</p>
      <ul className="mt-5 space-y-2.5">
        {block.points.map((pt) => (
          <li key={pt} className={`flex items-start gap-2.5 text-[14px] leading-6 ${featured ? "text-white/85" : "text-[#4E6272]"}`}>
            <Check className={`mt-1 h-4 w-4 shrink-0 ${featured ? "text-[#7FE0DB]" : "text-[#0E8A9A]"}`} aria-hidden="true" />
            {pt}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ============================================================
   Closing call to action
   ============================================================ */

export function FinalCta({ image, customHref, related }: { image: PageImage; customHref: string; related: SiteLink[] }) {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden bg-[#05283A] text-white">
      <div className="absolute inset-0 -z-20">
        <OceanImage image={image} sizes="100vw" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,40,58,0.55)_0%,rgba(5,40,58,0.85)_70%,#05283A_100%)]" />

      <div className={`${CONTAINER} py-24 text-center sm:py-32`}>
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7FE0DB] sm:text-xs">
            <WaveMark className="h-2.5 w-8" />
            Karvaahh — Live to Travel
          </p>
          <h2 id="final-title" className={`${SERIF} mx-auto mt-5 max-w-[820px] text-[38px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[56px]`}>
            Your Blue Horizon Is Waiting
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px]">
            Tell us the beach, island or cruise you are dreaming of, when you would like to travel and who is coming along. We will shape the journey and confirm every detail before you book.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <OpenBookingButton
              prefill={{ tourType: "Custom beach holiday" }}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F4A300] px-7 text-[15px] font-semibold text-[#0C1D30] shadow-[0_8px_24px_-6px_rgba(244,163,0,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]"
            >
              Plan My Escape
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </OpenBookingButton>
            <Link href={customHref} className="inline-flex min-h-[48px] items-center rounded-full border border-white/35 bg-white/[0.06] px-7 text-[15px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/[0.14]">
              Request a Custom Holiday
            </Link>
            <a
              href={CONTACT.whatsappHref("Hello Karvaahh, I'd like to plan a beach or cruise holiday.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-5 text-[15px] font-semibold text-[#7FE0DB] transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Karvaahh
            </a>
          </div>
        </Reveal>

        <nav aria-label="Related journeys" className="mt-16 border-t border-white/15 pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px] text-white/70">
            {related.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-4 transition-colors hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
