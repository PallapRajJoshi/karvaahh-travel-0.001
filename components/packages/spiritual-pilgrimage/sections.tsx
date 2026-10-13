import Link from "next/link";
import { ArrowRight, ArrowUpRight, BedDouble, Car, Check, Clock, Info, MapPin, Utensils } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { Circuit, Experience, FeaturedPackage, GuideBlock, ItineraryPreview } from "@/data/spiritual-pilgrimage/types";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const LINK =
  "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C2561A]";
const BTN_DARK =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";
const BTN_OUTLINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C98500] hover:text-[#8A4A12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";

export const CUSTOM_ENQUIRY = "/contact?type=spiritual-pilgrimage";

/* ============================================================
   Circuits & sacred trails
   ============================================================ */

export function Circuits({ items }: { items: Circuit[] }) {
  return (
    <section id="circuits" aria-labelledby="circuits-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="circuits-title"
            dark
            eyebrow="Pilgrimage Circuits"
            title="Journey Through Sacred Trails & Pilgrimage Circuits"
            intro="Classic routes that connect sacred places into one journey. Each links to the existing Karvaahh tours built on it, and every circuit can be shortened, extended or combined."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] transition-colors duration-500 hover:border-[#F4A300]/40">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                      <PageImageFill image={c.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
                    </div>
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/80 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`${SERIF} text-[24px] font-medium leading-tight`}>{c.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-6 text-white/70">{c.text}</p>
                    <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[12.5px] font-medium text-white/85" aria-label="Route">
                      {c.stops.map((s, k) => (
                        <li key={s} className="flex items-center gap-1.5">
                          <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1">{s}</span>
                          {k < c.stops.length - 1 && <span aria-hidden="true" className="text-[#F4A300]">→</span>}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-auto pt-6">
                      <Link href={c.link.href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#F4C66A] underline decoration-[#F4A300]/60 decoration-2 underline-offset-[6px] transition-colors hover:text-white">
                        {c.link.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
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
   Experiences beyond sightseeing (editorial bento)
   ============================================================ */

const BENTO_SPAN = ["lg:col-span-2", "", "", "", "", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function Experiences({ items }: { items: Experience[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            eyebrow="Beyond Sightseeing"
            title="Experience the Traditions, Culture & Serenity of Sacred Places"
            intro="A pilgrimage is more than a list of temples. These experiences depend on the destination and on what each site welcomes visitors to do — we match them to your route."
          />
        </Reveal>

        <ul className="mt-12 grid auto-rows-[320px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e, i) => (
            <li key={e.id} className={BENTO_SPAN[i] ?? ""}>
              <Reveal delay={(i % 4) * 70} variant="scale-in" className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[24px] bg-[#123653] text-white">
                  <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]">
                    <PageImageFill image={e.image} sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/95 via-[#071421]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className={`${SERIF} text-[23px] font-medium leading-tight`}>{e.title}</h3>
                    <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-white/80">{e.text}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-[12px] font-medium text-[#F4C66A]">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {e.where}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-start gap-2 rounded-2xl border border-[#C98500]/25 bg-[#FFF6E5] px-5 py-4 text-[14px] leading-6 text-[#5B4320]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          Visitors join rituals only where temples and communities welcome them. Some inner sanctums and ceremonies are open only to followers of the faith, and no tour can guarantee access to restricted areas.{" "}
          <Link href="/activities/wellness/yoga-wellness" className="font-semibold underline underline-offset-4">
            Explore yoga &amp; wellness retreats
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   Featured packages (existing Karvaahh products only)
   ============================================================ */

export function Packages({ items }: { items: FeaturedPackage[] }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#FBF7F0]`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="packages-title"
              eyebrow="Pilgrimage Packages"
              title="Find Your Spiritual Journey"
              intro="Genuine Karvaahh journeys across Nepal and India. Hotels, meals and transport follow the package you choose, and prices are quoted for your dates and group."
            />
          </Reveal>
          <Link href="/packages/nepal/spiritual-pilgrimage-tours#packages" className={LINK}>
            All Nepal pilgrimage packages <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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

          <li>
            <Reveal delay={160} className="h-full">
              <article className="relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2942] via-[#1B2F45] to-[#5A3A16] p-7 text-white">
                <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute -right-20 -top-20 h-[340px] w-[340px] text-[#F4A300]/[0.15]">
                  {Array.from({ length: 12 }).map((_, k) => (
                    <ellipse key={k} cx="100" cy="100" rx="88" ry="26" fill="none" stroke="currentColor" strokeWidth="0.7" transform={`rotate(${k * 15} 100 100)`} />
                  ))}
                </svg>
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Made for you</p>
                <h3 className={`${SERIF} relative mt-3 text-[30px] font-medium leading-tight`}>Plan a Custom Pilgrimage</h3>
                <p className="relative mt-3 text-[14.5px] leading-6 text-white/80">
                  Combining Nepal and India, travelling with elders, or timing your yatra around a festival? Tell us the places you have in mind and we will design the route, pace and stays around you.
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  <Link href={CUSTOM_ENQUIRY} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    Plan a Custom Pilgrimage
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <OpenBookingButton prefill={{ tourType: "Custom spiritual journey" }} className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-5 text-[14px] font-semibold transition-colors hover:bg-white/10">
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

function PackageCard({ p }: { p: FeaturedPackage }) {
  const rows = [
    { icon: Car, label: "Transport", value: p.transport },
    p.accommodation && { icon: BedDouble, label: "Hotels", value: p.accommodation },
    p.meals && { icon: Utensils, label: "Meals", value: p.meals },
  ].filter(Boolean) as { icon: typeof Car; label: string; value: string }[];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
          <PageImageFill image={p.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-semibold text-[#0B2942] backdrop-blur-sm">{p.country}</span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#0B2942]/85 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur-sm">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {p.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[23px] font-medium leading-snug text-[#0B2942]`}>{p.title}</h3>
        {p.destinations.length > 0 && (
          <p className="mt-3 flex items-start gap-2 text-[13px] font-medium text-[#8A2E1F]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            <span>
              <span className="sr-only">Destinations: </span>
              {p.destinations.join(" → ")}
            </span>
          </p>
        )}
        <ul className="mt-4 space-y-1.5" aria-label="Spiritual highlights">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4A5B6B]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        <dl className="mt-4 grid gap-1.5 border-t border-[#0B2942]/[0.07] pt-4 text-[12.5px]">
          {rows.map((r) => (
            <div key={r.label} className="flex items-start gap-2">
              <r.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
              <dt className="w-[70px] shrink-0 font-semibold text-[#8A97A5]">{r.label}</dt>
              <dd className="text-[#4A5B6B]">{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#0B2942]/[0.07] pt-5">
          <p className="text-[14px] font-semibold text-[#0B2942]">{p.price ?? "Price on request"}</p>
          <div className="flex flex-wrap gap-2">
            <Link href={p.href} className={BTN_OUTLINE} aria-label={`Explore package: ${p.title}`}>
              Explore
            </Link>
            <OpenBookingButton prefill={{ tourType: p.tourType }} className={BTN_DARK} ariaLabel={`Enquire about ${p.title}`}>
              Enquire Now
            </OpenBookingButton>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Travel planning & pilgrimage guide
   ============================================================ */

export function PilgrimageGuide({ items }: { items: GuideBlock[] }) {
  const [first, ...rest] = items;
  return (
    <section id="guide" aria-labelledby="guide-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="guide-title"
            eyebrow="Pilgrimage Guide"
            title="Plan Your Sacred Journey With Confidence"
            intro="Practical guidance for every kind of pilgrim. Conditions, regulations and opening dates change, so we confirm the details for your route and season before you travel."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
      className={`flex h-full flex-col rounded-[24px] p-6 sm:p-7 ${featured ? "bg-[#0B2942] text-white" : "border border-[#0B2942]/[0.07] bg-[#FBF7F0]"}`}
    >
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${featured ? "bg-[#F4A300] text-[#0C1D30]" : "bg-[#0B2942] text-[#F4A300]"}`}>
        <PageIcon name={block.icon} className="h-5 w-5" />
      </span>
      <h3 id={`guide-${block.id}`} className={`${SERIF} mt-5 text-[25px] font-medium leading-tight ${featured ? "text-white" : "text-[#0B2942]"}`}>
        {block.title}
      </h3>
      <p className={`mt-2 text-[14.5px] leading-6 ${featured ? "text-white/75" : "text-[#5B6B7B]"}`}>{block.intro}</p>
      <ul className="mt-5 space-y-2.5">
        {block.points.map((pt) => (
          <li key={pt} className={`flex items-start gap-2.5 text-[14px] leading-6 ${featured ? "text-white/85" : "text-[#4A5B6B]"}`}>
            <Check className={`mt-1 h-4 w-4 shrink-0 ${featured ? "text-[#F4A300]" : "text-[#2F7A4A]"}`} aria-hidden="true" />
            {pt}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ============================================================
   Itinerary previews
   ============================================================ */

export function Itineraries({ items }: { items: ItineraryPreview[] }) {
  return (
    <section id="itineraries" aria-labelledby="itineraries-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="itineraries-title"
            dark
            eyebrow="Itinerary Previews"
            title="How a Spiritual Journey Unfolds"
            intro="Published sample itineraries and suggested outlines to start the conversation. Hotels, travel times and access to sacred sites are confirmed for your dates — nothing here is a guaranteed schedule."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((it, i) => (
            <li key={it.id}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${it.status === "sample" ? "bg-[#F4A300] text-[#0C1D30]" : "border border-white/25 text-white/85"}`}
                    >
                      {it.status === "sample" ? "Sample itinerary" : "Suggested — requires confirmation"}
                    </span>
                    <span className="text-[12.5px] font-medium text-white/60">{it.duration}</span>
                  </div>
                  <h3 className={`${SERIF} mt-4 text-[25px] font-medium leading-tight`}>{it.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">{it.summary}</p>
                  <ol className="relative mt-6 space-y-3.5 border-l border-dashed border-[#F4A300]/50 pl-5">
                    {it.steps.map((s, k) => (
                      <li key={`${k}-${s.title}`} className="relative">
                        <span aria-hidden="true" className="absolute -left-[27px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#F4A300] bg-[#071421]" />
                        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F4C66A]">Day {k + 1}</span>
                        <span className="block text-[14.5px] font-semibold">{s.title}</span>
                        <span className="block text-[13px] leading-5 text-white/60">{s.text}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 flex items-start gap-2 text-[12.5px] leading-5 text-white/55">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F4A300]" aria-hidden="true" />
                    {it.notice}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={it.link.href}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[14px] font-semibold transition-all duration-300 hover:border-[#F4A300] hover:bg-[#F4A300] hover:text-[#0C1D30]"
                    >
                      {it.link.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
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
