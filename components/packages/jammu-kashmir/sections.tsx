import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, Info, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { Assurance, Experience, GuideBlock, ItineraryDay, JkPackage, Season, TravelStyle } from "@/data/jammu-kashmir/types";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const BTN_DARK =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";
const BTN_OUTLINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E6E99] hover:text-[#2E6E99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";

/* ============================================================
   Packages — the verified Karvaahh package, then travel styles
   planned on request
   ============================================================ */

export function Packages({ items, styles, customHref }: { items: JkPackage[]; styles: TravelStyle[]; customHref: string }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            eyebrow="Tour Packages & Experiences"
            title="Jammu & Kashmir Tour Packages"
            intro="A published Karvaahh pilgrimage package, plus Kashmir holidays we design around you — from family trips and honeymoons to the classic Srinagar–Gulmarg–Pahalgam tour. Prices are quoted for your dates, hotels and group size."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {items.map((p) => (
            <Reveal key={p.id}>
              <FeaturedPackage p={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <h3 className={`${SERIF} text-[28px] font-medium leading-tight text-[#0B2942] sm:text-[34px]`}>Kashmir Holidays, Planned on Request</h3>
            <p className="mt-2 max-w-[680px] text-[15px] leading-7 text-[#4A5B6B]">
              No fixed dates or prices — tell us your travel style and we send an itinerary and quote built around it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {styles.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <StyleCard s={s} />
              </Reveal>
            </li>
          ))}
          <li className="md:col-span-2 xl:col-span-3">
            <Reveal className="h-full">
              <article className="relative flex flex-col gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2942] via-[#123653] to-[#1E4E72] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                <svg viewBox="0 0 400 120" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 w-full text-white/[0.06]" preserveAspectRatio="none">
                  <path d="M0 120 L60 60 L110 90 L170 30 L230 80 L290 40 L350 85 L400 55 L400 120 Z" fill="currentColor" />
                </svg>
                <div className="relative max-w-[640px]">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Made for you
                  </p>
                  <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight sm:text-[34px]`}>Customised Jammu &amp; Kashmir Tour</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/80">
                    Combine Vaishno Devi with the Kashmir Valley, add a houseboat night or a quieter meadow like Doodhpathri — share your dates and group, and we design the route, stays and pace around you.
                  </p>
                </div>
                <div className="relative flex flex-wrap gap-3">
                  <Link href={customHref} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F4A300] px-6 text-[14.5px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <OpenBookingButton
                    prefill={{ tourType: "Customized Jammu & Kashmir tour" }}
                    className="inline-flex min-h-[48px] items-center rounded-full border border-white/30 px-6 text-[14.5px] font-semibold transition-colors hover:bg-white/10"
                  >
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

function FeaturedPackage({ p }: { p: JkPackage }) {
  return (
    <article className="group grid overflow-hidden rounded-[28px] border border-[#0B2942]/[0.07] bg-[#F5F8FA] shadow-[0_30px_60px_-44px_rgba(11,41,66,0.6)] lg:grid-cols-[1.05fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
        <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]">
          <PageImageFill image={p.image} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-[11.5px] font-semibold text-[#0C1D30]">Karvaahh package · {p.kind}</span>
      </div>
      <div className="flex flex-col p-6 sm:p-9">
        <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2E6E99]">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {p.duration}
        </p>
        <h3 className={`${SERIF} mt-2 text-[28px] font-medium leading-tight text-[#0B2942] sm:text-[34px]`}>{p.title}</h3>
        <p className="mt-3 flex items-start gap-2 text-[13.5px] font-medium text-[#4A5B6B]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          <span>
            <span className="sr-only">Destinations: </span>
            {p.destinations.join(" → ")}
          </span>
        </p>
        <ul className="mt-5 space-y-2" aria-label="Highlights">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[14.5px] text-[#0B2942]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        {p.inclusions.length > 0 && (
          <div className="mt-5 border-t border-[#0B2942]/[0.08] pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A5]">Included (as per the selected package)</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
              {p.inclusions.map((x) => (
                <li key={x} className="text-[13px] leading-5 text-[#4A5B6B]">
                  · {x}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-7">
          <p className="text-[14.5px] font-semibold text-[#0B2942]">{p.price ?? "Price on request"}</p>
          <div className="flex flex-wrap gap-2">
            <Link href={p.href} className={BTN_DARK} aria-label={`View itinerary: ${p.title}`}>
              View Itinerary
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <OpenBookingButton prefill={{ tourType: p.tourType }} className={BTN_OUTLINE} ariaLabel={`Enquire about ${p.title}`}>
              Enquire
            </OpenBookingButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function StyleCard({ s }: { s: TravelStyle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={s.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942]/85 text-[#F4A300] backdrop-blur-sm">
          <PageIcon name={s.icon} className="h-4.5 w-4.5" />
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0B2942] backdrop-blur-sm">Planned on request</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h4 className={`${SERIF} text-[23px] font-medium leading-snug text-[#0B2942]`}>{s.title}</h4>
        <p className="mt-2 text-[14px] leading-6 text-[#4A5B6B]">{s.text}</p>
        <p className="mt-3 flex items-start gap-2 text-[13px] font-medium text-[#2E6E99]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          <span>
            <span className="sr-only">Usually covers: </span>
            {s.covers.join(" · ")}
          </span>
        </p>
        <ul className="mt-4 space-y-1.5" aria-label="Highlights">
          {s.points.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4A5B6B]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-[#0B2942]/[0.07] pt-5">
          <OpenBookingButton prefill={{ tourType: s.tourType }} className={BTN_DARK} ariaLabel={`Request a quote: ${s.title}`}>
            Request a Quote
          </OpenBookingButton>
          {s.link && (
            <Link href={s.link.href} className={BTN_OUTLINE}>
              {s.link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Suggested itinerary — illustrative, customisable
   ============================================================ */

type Route = { title: string; duration: string; notice: string; tourType: string; days: ItineraryDay[] };

export function SampleItinerary({ route }: { route: Route }) {
  return (
    <section id="itinerary" aria-labelledby="itinerary-title" className={`${SECTION} relative overflow-hidden bg-[#071421] text-white`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#2E6E99]/20 blur-3xl" />
      <div className={`${CONTAINER} relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
        <Reveal>
          <SectionHeading
            id="itinerary-title"
            dark
            eyebrow="Suggested itinerary — customizable"
            title={route.title}
            intro="An example of how a first Kashmir Valley trip often flows. It is a starting point for planning, not a fixed package — we adjust it to your season, pace and interests."
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[12.5px] font-semibold text-white/80">
            <Clock className="h-3.5 w-3.5 text-[#F4A300]" aria-hidden="true" />
            {route.duration}
          </p>
          <p className="mt-6 flex items-start gap-2 rounded-2xl border border-[#F4A300]/30 bg-[#F4A300]/[0.08] px-5 py-4 text-[13.5px] leading-6 text-white/75">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
            {route.notice}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OpenBookingButton
              prefill={{ tourType: route.tourType }}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F4A300] px-6 text-[14.5px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]"
            >
              Customise This Route
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </OpenBookingButton>
          </div>
        </Reveal>

        <ol className="relative space-y-4 border-l border-dashed border-[#F4A300]/50 pl-7 sm:pl-9">
          {route.days.map((d, i) => (
            <li key={d.title} className="relative">
              <Reveal delay={i * 70}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[45px] top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F4A300] bg-[#071421] text-[12px] font-semibold text-[#F4A300] sm:-left-[53px]"
                >
                  {i + 1}
                </span>
                <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-colors duration-500 hover:border-[#F4A300]/40">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#F4C66A]">Day {i + 1}</p>
                  <h3 className="mt-1 text-[17px] font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-6 text-white/65">{d.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Experiences (alternating editorial)
   ============================================================ */

export function Experiences({ items }: { items: Experience[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            center
            eyebrow="Kashmir Experiences"
            title="Houseboats, Gardens, Flavours and Snow"
            intro="The moments that make a Kashmir journey — woven into your itinerary to suit the season and the way you travel."
          />
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {items.map((e, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={e.id} aria-labelledby={`exp-${e.id}`} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
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
                  <h3 id={`exp-${e.id}`} className={`${SERIF} mt-3 text-[30px] font-medium leading-tight text-[#0B2942] sm:text-[36px]`}>
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
   Best time to visit
   ============================================================ */

export function Seasons({ items, note }: { items: Season[]; note: string }) {
  return (
    <section id="best-time" aria-labelledby="best-time-title" className={`${SECTION} bg-[#F5F8FA]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="best-time-title"
            eyebrow="Seasonal Guide"
            title="Best Time to Visit Jammu & Kashmir"
            intro="Every season shows the valley differently. Months are a general guide — mountain weather always has the final word."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i * 70} className="h-full">
                <article className="flex h-full flex-col rounded-[22px] border border-[#0B2942]/[0.07] bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_44px_-30px_rgba(11,41,66,0.45)]">
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
    <section id="guide" aria-labelledby="guide-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="guide-title"
            eyebrow="Travel Guide"
            title="Prepare for Your Kashmir Journey"
            intro="Weather, road conditions, registrations and operating schedules change, so we confirm the details for your route before you travel."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b, i) => (
            <li key={b.id}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <article aria-labelledby={`guide-${b.id}`} className="flex h-full flex-col rounded-[22px] border border-[#0B2942]/[0.07] bg-[#F5F8FA] p-6">
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

/* ============================================================
   Why book with Karvaahh
   ============================================================ */

export function WhyKarvaahh({ items }: { items: Assurance[] }) {
  return (
    <section id="why-karvaahh" aria-labelledby="why-title" className={`${SECTION} relative overflow-hidden bg-gradient-to-b from-[#F5F8FA] to-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="why-title"
            center
            eyebrow="Why Book with Karvaahh"
            title="Your Kashmir Journey, Thoughtfully Planned"
            intro="Karvaahh — Live to Travel. We plan Himalayan journeys across Nepal and India around the people taking them."
          />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 70} className="h-full">
                <article className="group flex h-full flex-col items-center rounded-[22px] border border-[#0B2942]/[0.07] bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_-30px_rgba(11,41,66,0.45)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B2942] to-[#2E6E99] text-[#F4A300] transition-transform duration-500 group-hover:rotate-[-6deg]">
                    <PageIcon name={a.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[#0B2942]">{a.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-[#4A5B6B]">{a.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
