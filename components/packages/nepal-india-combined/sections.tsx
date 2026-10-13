import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, MapPin, Minus, Plus } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import {
  CUSTOM_JOURNEY,
  type BENEFITS,
  type Circuit,
  type Destination,
  type GRAND_TOUR,
  type PRACTICAL,
  type THEMES,
} from "@/data/nepal-india-combined/content";
import ThemePicker from "./ThemePicker";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const IVORY = "bg-[#FAF6EE]";
const CARD = "rounded-[28px] border border-[#0B2942]/[0.08] bg-white shadow-[0_24px_50px_-36px_rgba(11,41,66,0.45)]";
const TEXT_LINK =
  "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#C9A24D] decoration-2 underline-offset-[6px] transition-colors hover:text-[#9A7420]";
const BTN_NAVY =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143A5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24D]";

/* ============================================================
   Circuit selector
   ============================================================ */

export function Circuits({ items }: { items: Circuit[] }) {
  return (
    <section id="circuits" aria-labelledby="circuits-title" className={`${SECTION} ${IVORY}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="circuits-title"
            center
            eyebrow="Five Signature Circuits"
            title="Discover Your Perfect Journey"
            intro="Each circuit is a starting framework. We adjust the route, pace and stays to your dates, and any two circuits can be combined."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((c, i) => (
            <li key={c.id} id={`circuit-${c.id}`} className="scroll-mt-[120px] md:scroll-mt-[160px]">
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article aria-labelledby={`circuit-${c.id}-title`} className={`group flex h-full flex-col overflow-hidden ${CARD} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_60px_-34px_rgba(11,41,66,0.55)]`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                      <PageImageFill image={c.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw" />
                    </div>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[12.5px] font-semibold text-[#0B2942] backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-[#9A7420]" aria-hidden="true" />
                      {c.duration}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 id={`circuit-${c.id}-title`} className={`${SERIF} text-[24px] font-medium leading-tight text-[#0B2942]`}>
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#4A5866]">{c.text}</p>
                    <p className="mt-4 flex items-start gap-2 text-[13.5px] leading-6 text-[#0B2942]">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#C9A24D]" aria-hidden="true" />
                      <span>
                        <span className="sr-only">Destinations: </span>
                        {c.destinations.join(" · ")}
                      </span>
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                      <OpenBookingButton prefill={{ tourType: c.title }} className={BTN_NAVY}>
                        Enquire about this circuit
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </OpenBookingButton>
                      {c.related && (
                        <Link href={c.related.href} className={TEXT_LINK}>
                          {c.related.label}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}

          <li>
            <Reveal delay={160} className="h-full">
              <article className="flex h-full min-h-[380px] flex-col justify-end rounded-[28px] bg-[linear-gradient(160deg,#143A5C_0%,#0B2942_55%,#071C2E_100%)] p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E2B65C]">The flagship journey</p>
                <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight`}>India to Nepal: The Grand Discovery</h3>
                <p className="mt-3 text-[14.5px] leading-6 text-white/75">Buddhist India, sacred Nepal, Chitwan, the Kathmandu Valley and Pokhara in one 28–30 day route.</p>
                <a href="#grand-tour" className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                  See the itinerary
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Featured grand tour (vertical timeline → horizontal on lg)
   ============================================================ */

export function GrandTour({ tour, image }: { tour: typeof GRAND_TOUR; image: PageImage }) {
  return (
    <section id="grand-tour" aria-labelledby="grand-tour-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <SectionHeading id="grand-tour-title" eyebrow="Featured Grand Tour" title={tour.title} intro={tour.intro} />
            <dl className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-[#C9A24D]/40 bg-[#FAF6EE] px-5 py-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A7420]">Recommended</dt>
                <dd className={`${SERIF} mt-0.5 text-[22px] text-[#0B2942]`}>{tour.duration}</dd>
              </div>
              <div className="rounded-2xl border border-[#0B2942]/10 px-5 py-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5B6B7B]">Countries</dt>
                <dd className={`${SERIF} mt-0.5 text-[22px] text-[#0B2942]`}>India + Nepal</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] shadow-[0_30px_60px_-40px_rgba(11,41,66,0.7)]">
              <PageImageFill image={image} sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ol aria-label={`${tour.title} itinerary stages`} className="nic-timeline relative flex flex-col lg:snap-x lg:flex-row lg:overflow-x-auto lg:pb-4">
            {tour.stages.map((s, i) => (
              <li key={s.place} className="relative pb-8 pl-12 last:pb-0 lg:w-[220px] lg:shrink-0 lg:snap-start lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-12">
                {/* Connector: vertical on mobile, horizontal on desktop. */}
                {i < tour.stages.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[15px] top-8 w-px bg-[#C9A24D]/40 lg:bottom-auto lg:left-8 lg:right-0 lg:top-[15px] lg:h-px lg:w-auto" />
                )}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full text-[12px] font-bold ${
                    s.border ? "bg-[#C9A24D] text-[#0B2942]" : "bg-[#0B2942] text-white"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className={`${SERIF} text-[18px] leading-snug text-[#0B2942]`}>
                  <span className="sr-only">Stage {i + 1}: </span>
                  {s.place}
                </h3>
                <p className="mt-1.5 text-[14px] leading-6 text-[#4A5866]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className={`${CARD} p-6 sm:p-7`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9A7420]">Optional extensions</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tour.extensions.map((e) => (
                <li key={e} className="rounded-full border border-[#0B2942]/10 bg-[#FAF6EE] px-3.5 py-1.5 text-[13.5px] font-medium text-[#0B2942]">
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] leading-6 text-[#4A5866]">Added before, after or within the grand tour when time and season allow.</p>
          </div>
          <div className="flex flex-col justify-between gap-5 rounded-[28px] bg-[#0B2942] p-6 text-white sm:p-7">
            <p className="text-[14.5px] leading-7 text-white/80">{tour.note}</p>
            <OpenBookingButton prefill={{ tourType: tour.title }} className={`${BTN_PRIMARY} w-full sm:w-fit`}>
              Plan the Grand Discovery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </OpenBookingButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Destination highlights
   ============================================================ */

export function Destinations({ items }: { items: Destination[] }) {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${SECTION} ${IVORY}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="destinations-title" center eyebrow="Destination Highlights" title="One Journey. Two Cultures. Countless Discoveries." />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => {
            const body = (
              <>
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                  <PageImageFill image={d.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw" />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071C2E]/90 via-[#071C2E]/30 to-transparent" />
                <div className="relative mt-auto p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#E2B65C]">{d.country}</p>
                  <h3 className={`${SERIF} mt-1.5 flex items-center gap-2 text-[26px] font-medium text-white`}>
                    {d.name}
                    {d.href && <ArrowUpRight className="h-5 w-5 text-[#E2B65C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/80">{d.text}</p>
                </div>
              </>
            );
            const shell = "group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[28px] sm:aspect-[3/4] lg:aspect-[4/5]";
            return (
              <li key={d.name}>
                <Reveal delay={(i % 3) * 80}>
                  {d.href ? (
                    <Link href={d.href} className={`${shell} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24D]`}>
                      {body}
                    </Link>
                  ) : (
                    <article className={shell}>{body}</article>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Choose the way you want to travel
   ============================================================ */

export function TravelThemes({ themes, circuits }: { themes: typeof THEMES; circuits: Circuit[] }) {
  return (
    <section id="travel-style" aria-labelledby="travel-style-title" className={`${SECTION} bg-[#0B2942] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="travel-style-title" dark center eyebrow="Travel Your Way" title="Choose the Way You Want to Travel" intro="Pick what matters most and we will point you to the circuits that fit." />
        </Reveal>
        <ThemePicker themes={themes} circuits={circuits} />
      </div>
    </section>
  );
}

/* ============================================================
   Practical information (native <details> accordion — no JS)
   ============================================================ */

export function Practical({ items }: { items: typeof PRACTICAL }) {
  return (
    <section id="practical" aria-labelledby="practical-title" className={`${SECTION} bg-white`}>
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-12 lg:gap-14`}>
        <Reveal className="lg:col-span-4">
          <SectionHeading id="practical-title" eyebrow="Practical Travel Information" title="Before You Cross the Border" intro="The essentials of planning a two-country journey. We confirm every detail for your specific route and dates." />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <div className="divide-y divide-[#0B2942]/10 border-y border-[#0B2942]/10">
            {items.map((p, i) => (
              <details key={p.id} name="practical" open={i === 0} className="nic-details group">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center gap-4 py-4 text-left">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#FAF6EE] text-[#9A7420]">
                    <PageIcon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className={`${SERIF} flex-1 text-[19px] text-[#0B2942] sm:text-[21px]`}>{p.title}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#0B2942]/50 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="space-y-2.5 pb-6 pl-14 text-[15px] leading-7 text-[#4A5866]">
                  {p.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Inclusions & customization
   ============================================================ */

export function Inclusions({ included, excluded }: { included: string[]; excluded: string[] }) {
  return (
    <section id="inclusions" aria-labelledby="inclusions-title" className={`${SECTION} ${IVORY}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="inclusions-title" center eyebrow="Inclusions & Customization" title="Your Journey, Thoughtfully Planned" intro="Inclusions vary by package and quotation. Your written quote lists exactly what is and is not included for your route." />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className={`${CARD} h-full p-7 sm:p-9`}>
              <h3 className={`${SERIF} text-[24px] text-[#0B2942]`}>Typically included</h3>
              <ul className="mt-5 space-y-3">
                {included.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-6 text-[#2E3B47]">
                    <Plus className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#0B2942] p-1 text-white" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className={`${CARD} flex h-full flex-col p-7 sm:p-9`}>
              <h3 className={`${SERIF} text-[24px] text-[#0B2942]`}>Usually not included</h3>
              <ul className="mt-5 space-y-3">
                {excluded.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-6 text-[#2E3B47]">
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-[#0B2942]/25 p-1 text-[#0B2942]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <p className="text-[14px] leading-6 text-[#4A5866]">Prices depend on season, group size and hotel category, so every journey is quoted individually.</p>
                <OpenBookingButton prefill={{ tourType: CUSTOM_JOURNEY }} className={`${BTN_NAVY} mt-4 w-full sm:w-auto`}>
                  Request a Quotation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </OpenBookingButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Benefits
   ============================================================ */

export function Benefits({ items }: { items: typeof BENEFITS }) {
  return (
    <section aria-labelledby="benefits-title" className="bg-white py-16 sm:py-20">
      <div className={CONTAINER}>
        <Reveal>
          <h2 id="benefits-title" className={`${SERIF} text-center text-[28px] font-medium text-[#0B2942] sm:text-[34px]`}>
            Why Plan With Karvaahh
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 60} className="h-full">
                <div className="h-full rounded-[24px] border border-[#0B2942]/[0.08] p-6 transition-colors hover:border-[#C9A24D]/60">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FAF6EE] text-[#9A7420]">
                    <PageIcon name={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15.5px] font-semibold leading-snug text-[#0B2942]">{b.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#4A5866]">{b.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Final conversion
   ============================================================ */

export function FinalCta({ image, related }: { image: PageImage; related: { href: string; label: string }[] }) {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden bg-[#0B2942] py-24 text-white sm:py-28">
      <div className="absolute inset-0 -z-20">
        <PageImageFill image={image} sizes="100vw" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0B2942]/75" />
      <div className={`${CONTAINER} text-center`}>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E2B65C] sm:text-xs">Live to Travel</p>
          <h2 id="final-title" className={`${SERIF} mx-auto mt-4 max-w-[760px] text-[34px] font-medium leading-[1.08] sm:text-[48px]`}>
            Your India–Nepal Story Starts Here
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15.5px] leading-7 text-white/80 sm:text-[17px]">
            Tell us when you want to travel, which experiences inspire you and how you prefer to explore. Karvaahh Tours &amp; Travels will help you shape a personalized journey across India and Nepal.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <OpenBookingButton prefill={{ tourType: CUSTOM_JOURNEY }} className={BTN_PRIMARY}>
              Plan My Journey
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </OpenBookingButton>
            <Link href="/contact" className={BTN_GHOST}>
              Other ways to contact us
            </Link>
          </div>
          <nav aria-label="Related journeys" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-2">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="inline-flex min-h-[40px] items-center rounded-full border border-white/20 px-4 text-[13.5px] font-medium text-white/85 transition-colors hover:bg-white/10">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
