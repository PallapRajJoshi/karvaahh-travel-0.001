import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarDays, Check, Clock, Compass, MapPin, MessageCircle, Navigation } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTACT } from "@/components/activities/experience/site";
import { CONTAINER, PageIcon, SERIF } from "@/components/activities/experience/ui";
import type { IconName, PageImage } from "@/components/activities/experience/types";
import { BTN_LINE, BTN_OCEAN, OceanHeading, OceanImage, SECTION, WaveMark } from "@/components/packages/beach-cruise/ui";
import type { CoastalPackage, Destination, Region } from "@/data/coastal-south-india/content";

const CARD_SHADOW = "shadow-[0_24px_50px_-36px_rgba(5,40,58,0.55)]";

/* ============================================================
   Introduction & regional geography
   ============================================================ */

export function Regions({ items }: { items: Region[] }) {
  return (
    <section id="regions" aria-labelledby="regions-title" className={`${SECTION} bg-[#F7F1E6]`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="regions-title"
            center
            eyebrow="One Collection, Three Landscapes"
            title="Three Ways to Discover Southern India"
            intro="This collection brings together the Nilgiri Hills and Western Ghats, the western and southern coastlines with Kerala's backwaters, and the sacred temples and historic coastal cities of the south — with optional extensions to the eastern coast."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((r, i) => (
            <Reveal key={r.id} delay={i * 100}>
              <article aria-labelledby={`region-${r.id}`} className={`group flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[#0A4D68]/[0.06] ${CARD_SHADOW}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]">
                    <OceanImage image={r.image} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0E8A9A]">{r.eyebrow}</p>
                  <h3 id={`region-${r.id}`} className={`${SERIF} mt-2 text-[24px] font-medium leading-tight text-[#0B2942]`}>
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-6 text-[#4E6272]">{r.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#0A4D68]/10 pt-5">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13.5px] leading-6 text-[#0A4D68]">
                        <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-[820px] rounded-2xl border border-[#0A4D68]/10 bg-white/70 px-5 py-4 text-center text-[13.5px] leading-6 text-[#4E6272]">
            <strong className="font-semibold text-[#0B2942]">Geography at a glance:</strong> Goa and coastal Karnataka are western India; Kerala and Tamil Nadu form the
            southern peninsula; Andhra Pradesh and Odisha are eastern coastal India. The Andaman &amp; Nicobar Islands are a separate island region reached by flight and ferry.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   The three packages
   ============================================================ */

export function Packages({ items }: { items: CoastalPackage[] }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="packages-title"
            center
            eyebrow="Karvaahh Special Packages"
            title="Three Signature Journeys"
            intro="Each is a starting point, not a fixed product — we adapt the route, pace and stays to your dates and interests."
          />
        </Reveal>

        <ol className="mt-16 space-y-12 lg:space-y-16">
          {items.map((p, i) => (
            <li key={p.id} id={p.id} className="scroll-mt-[120px] md:scroll-mt-[160px]">
              <PackageCard pkg={p} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: CoastalPackage; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article aria-labelledby={`pkg-${pkg.id}`} className={`group grid overflow-hidden rounded-[32px] bg-[#FBF8F2] ring-1 ring-[#0A4D68]/[0.07] lg:grid-cols-12 ${CARD_SHADOW}`}>
        <div className={`relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <div className="absolute inset-0 transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]">
            <OceanImage image={pkg.image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#05283A]/70 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[12.5px] font-semibold text-[#0B2942]">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" style={{ color: pkg.accent }} />
              {pkg.duration}
            </span>
            <span className="rounded-full bg-[#05283A]/60 px-3.5 py-1.5 text-[12.5px] font-medium text-white backdrop-blur-sm">{pkg.style}</span>
          </div>
        </div>

        <div className="p-6 sm:p-9 lg:col-span-7 lg:p-11">
          <p className={`${SERIF} text-[15px] italic`} style={{ color: pkg.accent }}>
            Package {String(index + 1).padStart(2, "0")}
          </p>
          <h3 id={`pkg-${pkg.id}`} className={`${SERIF} mt-1 text-[30px] font-medium leading-tight text-[#0B2942] sm:text-[36px]`}>
            {pkg.title}
          </h3>
          <p className="mt-2 text-[15px] font-medium text-[#0A4D68]">{pkg.tagline}</p>
          <p className="mt-4 text-[15px] leading-7 text-[#4E6272]">{pkg.summary}</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E8A9A]">Destinations</h4>
              <ul className="mt-3 space-y-1.5">
                {pkg.destinations.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-[14px] leading-6 text-[#0B2942]">
                    <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E8A9A]">Highlights</h4>
              <ul className="mt-3 space-y-1.5">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[14px] leading-6 text-[#4E6272]">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0" style={{ color: pkg.accent }} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-[#0A4D68]/[0.06] sm:p-5">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E8A9A]">
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Suggested route
            </p>
            <p className="mt-2 text-[14px] font-medium leading-6 text-[#0B2942]">
              {pkg.route.map((stop, k) => (
                <span key={stop}>
                  {k > 0 && <span aria-hidden="true" className="mx-1.5 text-[#2CC4C8]">→</span>}
                  {stop}
                </span>
              ))}
            </p>
            <p className="mt-2 text-[13px] leading-6 text-[#5B6B7B]">{pkg.routeNote}</p>
            {pkg.extension && (
              <p className="mt-3 border-t border-[#0A4D68]/10 pt-3 text-[13px] leading-6 text-[#5B6B7B]">
                <strong className="font-semibold text-[#0B2942]">{pkg.extension.title}:</strong> {pkg.extension.text}
              </p>
            )}
          </div>

          <p className="mt-4 flex items-start gap-2 text-[13.5px] leading-6 text-[#4E6272]">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8A9A]" aria-hidden="true" />
            <span>
              <span className="font-semibold text-[#0B2942]">Best season: </span>
              {pkg.season}
            </span>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <OpenBookingButton prefill={{ tourType: pkg.title }} className={BTN_OCEAN}>
              {pkg.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </OpenBookingButton>
            <a
              href={CONTACT.whatsappHref(`Hello Karvaahh, I'm interested in the ${pkg.title} package.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_LINE}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ============================================================
   Destination grid
   ============================================================ */

export function DestinationGrid({ items }: { items: Destination[] }) {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${SECTION} bg-[#F7F1E6]`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading id="destinations-title" eyebrow="Featured Destinations" title="Hills, Shores & Sacred Towns" intro="The places these journeys are built from — mix them to suit your time and interests." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((d, i) => (
            <li key={d.name}>
              <Reveal delay={(i % 4) * 60} className="h-full">
                <article className="group relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#05283A] sm:rounded-[26px]">
                  <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]">
                    <OceanImage image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#05283A]/90 via-[#05283A]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 text-white sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7FE0DB] sm:text-[11px]">{d.region}</p>
                    <h3 className={`${SERIF} mt-1 text-[18px] font-medium leading-tight sm:text-[22px]`}>{d.name}</h3>
                    <p className="mt-1 text-[12.5px] leading-5 text-white/80 sm:text-[13.5px]">{d.text}</p>
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
   Flagship route concept (timeline)
   ============================================================ */

export function RoutePreview({ stages }: { stages: { days: string; title: string; text: string }[] }) {
  return (
    <section id="route" aria-labelledby="route-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading
            id="route-title"
            eyebrow="Sample Route Concept"
            title="25–30 Days Across India's Coastal Regions"
            intro="An example of how regions can be combined into one customised journey. It is a route concept, not a fixed itinerary — exact routing depends on transfer times, flight schedules, your interests and the season."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 border-l-2 border-dashed border-[#2CC4C8]/50 pl-7 lg:grid-cols-7 lg:gap-4 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
          {stages.map((s, i) => (
            <li key={s.days} className="relative">
              <Reveal delay={i * 70}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A4D68] ring-4 ring-[#EAF7F6] lg:-top-[41px] lg:left-0"
                />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0E8A9A]">{s.days}</p>
                <h3 className={`${SERIF} mt-1 text-[20px] font-medium leading-tight text-[#0B2942]`}>{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-[#4E6272]">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex gap-3 rounded-2xl bg-[#FFF6E5] p-5 ring-1 ring-[#F4A300]/30 sm:p-6">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C98500]" aria-hidden="true" />
            <p className="text-[14px] leading-6 text-[#5B4A2A]">
              <strong className="font-semibold text-[#3D2E10]">Choose, don&apos;t cram.</strong> The full western-to-eastern coast, the Andaman Islands and Ooty cannot all be
              covered comfortably in 30 days without careful selection, domestic flights and compromises. We recommend the islands as a separate module and Ooty as an optional inland
              hill-station extension.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Andaman extension
   ============================================================ */

export function IslandExtension({
  image,
  stops,
  activities,
}: {
  image: PageImage;
  stops: { name: string; aka: string; text: string }[];
  activities: string[];
}) {
  return (
    <section id="andaman" aria-labelledby="andaman-title" className={`${SECTION} relative isolate overflow-hidden bg-[#05283A] text-white`}>
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#2CC4C8]/15 blur-3xl" />
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-12 lg:gap-14`}>
        <Reveal variant="slide-right" className="lg:col-span-5">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[16/12] lg:aspect-[4/5]">
            <div className="absolute inset-0 transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]">
              <OceanImage image={image} sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-[#7FE0DB] px-4 py-1.5 text-[12.5px] font-semibold text-[#05283A]">+5–7 days</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <OceanHeading
            id="andaman-title"
            dark
            eyebrow="Island Extension"
            title="Extend Your Journey to India's Tropical Islands"
            intro="Add about 5–7 days in the Andaman Islands as a separate module after your mainland journey."
          />

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {stops.map((s) => (
              <li key={s.name} className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                <h3 className={`${SERIF} text-[19px] font-medium leading-tight`}>{s.name}</h3>
                <p className="mt-0.5 text-[12px] text-[#7FE0DB]">{s.aka}</p>
                <p className="mt-2 text-[13.5px] leading-6 text-white/75">{s.text}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-[13.5px] text-white/80">
            <span className="font-semibold text-white">Where operationally available:</span>
            {activities.map((a) => (
              <span key={a} className="rounded-full border border-white/20 px-3 py-1 text-[12.5px]">
                {a}
              </span>
            ))}
          </p>

          <ul className="mt-6 space-y-2 text-[13.5px] leading-6 text-white/70">
            <li className="flex gap-2">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#7FE0DB]" aria-hidden="true" />
              Flights and inter-island ferries are required; schedules depend on operating conditions.
            </li>
            <li className="flex gap-2">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#7FE0DB]" aria-hidden="true" />
              Sea-based activities may be cancelled due to weather.
            </li>
            <li className="flex gap-2">
              <AlertTriangle className="mt-1 h-3.5 w-3.5 shrink-0 text-[#F4A300]" aria-hidden="true" />
              The Nicobar Islands are restricted areas and are not open for ordinary tourist visits.
            </li>
          </ul>

          <OpenBookingButton
            prefill={{ tourType: "Andaman island extension" }}
            className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#7FE0DB] px-7 text-[15px] font-semibold text-[#05283A] transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Request an Island Extension
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </OpenBookingButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Seasons
   ============================================================ */

export function Seasons({ items, note }: { items: { months: string; title: string; icon: IconName; text: string }[]; note: string }) {
  return (
    <section id="seasons" aria-labelledby="seasons-title" className={`${SECTION} bg-[#F7F1E6]`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading id="seasons-title" center eyebrow="When to Go" title="Best Time to Travel" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.months} delay={i * 90}>
              <article className={`h-full rounded-[26px] bg-white p-6 ring-1 ring-[#0A4D68]/[0.06] sm:p-7 ${CARD_SHADOW}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF7F6] text-[#0A4D68]">
                  <PageIcon name={s.icon} className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0E8A9A]">{s.months}</p>
                <h3 className={`${SERIF} mt-1 text-[22px] font-medium text-[#0B2942]`}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-[#4E6272]">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-8 max-w-[760px] text-center text-[13.5px] leading-6 text-[#5B6B7B]">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Planning & safety + Why Karvaahh
   ============================================================ */

type IconCard = { icon: IconName; title: string; text: string };

export function Planning({ planning, why }: { planning: IconCard[]; why: IconCard[] }) {
  return (
    <section id="planning" aria-labelledby="planning-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <OceanHeading id="planning-title" eyebrow="Before You Go" title="Travel Planning & Safety" intro="Practical points we work through with every traveller. Nothing here is a guarantee of schedules or availability." />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planning.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 4) * 60} className="h-full">
                <div className="h-full rounded-2xl border border-[#0A4D68]/10 p-5 transition-colors hover:border-[#2CC4C8]/60 hover:bg-[#F4FBFB]">
                  <PageIcon name={p.icon} className="h-5 w-5 text-[#0E8A9A]" />
                  <h3 className="mt-3 text-[15.5px] font-semibold text-[#0B2942]">{p.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-6 text-[#4E6272]">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0A4D68_0%,#05283A_100%)] p-7 text-white sm:p-10 lg:p-12">
            <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-[560px]">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7FE0DB]">
                  <WaveMark className="h-2.5 w-8" />
                  Why Karvaahh
                </p>
                <h2 className={`${SERIF} mt-3 text-[30px] font-medium leading-tight sm:text-[38px]`}>Why Travel with Karvaahh</h2>
              </div>
              <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#7FE0DB] hover:text-white lg:mt-0">
                About Karvaahh Tours &amp; Travels
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {why.map((w) => (
                <li key={w.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#7FE0DB]">
                    <PageIcon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold">{w.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-6 text-white/70">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Closing call to action
   ============================================================ */

export function FinalCta({ image, contactHref, related }: { image: PageImage; contactHref: string; related: { href: string; label: string }[] }) {
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
          <h2 id="final-title" className={`${SERIF} mx-auto mt-5 max-w-[820px] text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[54px]`}>
            Your South India Journey Starts Here
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15.5px] leading-7 text-white/80 sm:text-[17px]">
            Whether you dream of misty hill stations, tropical beaches or sacred coastal heritage, Karvaahh can help you plan a journey suited to your interests and available time.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <OpenBookingButton
              prefill={{ tourType: "Custom South India journey" }}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F4A300] px-7 text-[15px] font-semibold text-[#0C1D30] shadow-[0_8px_24px_-6px_rgba(244,163,0,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              Plan My Journey
            </OpenBookingButton>
            <Link href={contactHref} className="inline-flex min-h-[48px] items-center rounded-full border border-white/35 bg-white/[0.06] px-7 text-[15px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/[0.14]">
              Contact Karvaahh
            </Link>
            <a
              href={CONTACT.whatsappHref("Hello Karvaahh, I'd like to plan a South India coastal journey.")}
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
