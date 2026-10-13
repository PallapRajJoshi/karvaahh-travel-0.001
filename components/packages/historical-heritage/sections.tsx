import Link from "next/link";
import type { ReactNode } from "react";
import { Accessibility, ArrowRight, Award, Check, CloudRain, Flower2, Info, Leaf, MapPin, Recycle, ShieldCheck, Snowflake, Ticket, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import type { PilgrimagePackage } from "@/data/pilgrimage/types";
import type { GUIDE, UNESCO_THEMES } from "@/data/historical-heritage/content";
import type { HeritageEra, HeritageExperience, ItineraryConcept } from "@/data/historical-heritage/types";
import HeritageVisual from "./HeritageVisual";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const BTN_DARK =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4532A]";
const BTN_OUTLINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B4532A] hover:text-[#8A3A1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4532A]";

/* ============================================================
   UNESCO World Heritage legacy
   ============================================================ */

export function UnescoLegacy({ zones, themes, valleyImage, lumbiniImage }: { zones: string[]; themes: typeof UNESCO_THEMES; valleyImage: PageImage; lumbiniImage: PageImage }) {
  return (
    <section id="unesco" aria-labelledby="unesco-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="unesco-title"
            eyebrow="UNESCO World Heritage"
            title="Discover Nepal's World Heritage Legacy"
            intro="Nepal has two World Heritage cultural properties. Knowing how they are defined helps you understand what you are seeing — and why not every old temple carries the label."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-[26px] bg-[#0B2942] text-white">
              <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]">
                <PageImageFill image={valleyImage} sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/70 to-[#071421]/10" />
              <div className="relative p-6 sm:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F4C66A]">Inscribed 1979 · One property, seven zones</p>
                <h3 className={`${SERIF} mt-2 text-[30px] font-medium leading-tight sm:text-[34px]`}>Kathmandu Valley</h3>
                <p className="mt-3 max-w-[560px] text-[14.5px] leading-6 text-white/80">
                  A single World Heritage property made up of seven separate Monument Zones — protected areas around a palace square, stupa or temple complex, not just one building.
                </p>
                <ol className="mt-5 grid gap-x-6 gap-y-1.5 text-[13.5px] text-white/90 sm:grid-cols-2">
                  {zones.map((z, i) => (
                    <li key={z} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4A300] text-[10.5px] font-bold text-[#0C1D30]">{i + 1}</span>
                      {z}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={100} className="h-full">
              <article className="group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-[26px] bg-[#0B2942] text-white">
                <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]">
                  <PageImageFill image={lumbiniImage} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/60 to-transparent" />
                <div className="relative p-6 sm:p-8">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F4C66A]">Inscribed 1997</p>
                  <h3 className={`${SERIF} mt-2 text-[28px] font-medium leading-tight`}>Lumbini, the Birthplace of the Lord Buddha</h3>
                  <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-white/80">The Sacred Garden, Mayadevi Temple, the Ashoka Pillar and excavated monastic remains.</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <dl className="grid gap-3 rounded-[24px] border border-[#0B2942]/[0.08] bg-[#F7F1E8] p-6 sm:grid-cols-3">
                {[
                  ["Monument", "One building or structure — a temple, stupa or palace."],
                  ["Monument Zone", "A protected area around a group of monuments and their setting."],
                  ["UNESCO property", "What is inscribed on the World Heritage List — here, the whole valley or Lumbini."],
                ].map(([term, def]) => (
                  <div key={term}>
                    <dt className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0B2942]">
                      <Award className="h-4 w-4 text-[#B4532A]" aria-hidden="true" />
                      {term}
                    </dt>
                    <dd className="mt-1 text-[13px] leading-5 text-[#5B6B7B]">{def}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {themes.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={i * 70} className="h-full">
                <div className="h-full rounded-[20px] border-t-[3px] border-[#B4532A] bg-[#FBF7F0] p-5">
                  <h3 className="text-[15px] font-semibold leading-snug text-[#0B2942]">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-[#5B6B7B]">{t.text}</p>
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
   Architectural eras (editorial timeline)
   ============================================================ */

export function ArchitecturalEras({ items }: { items: HeritageEra[] }) {
  return (
    <section id="eras" aria-labelledby="eras-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="eras-title"
            dark
            eyebrow="Eras & Architecture"
            title="Journey Through Nepal's Architectural Legacy"
            intro="Nepal's monuments were built, rebuilt and restored over many centuries. Dates are approximate, and historians still debate parts of the early story."
          />
        </Reveal>

        <ol className="mt-14 space-y-6 lg:space-y-10">
          {items.map((e, i) => (
            <li key={e.id}>
              <Reveal variant={i % 2 ? "slide-left" : "slide-right"}>
                <article className={`group grid overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[340px]">
                    <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]">
                      <HeritageVisual image={e.image} tone={e.tone} title={e.title} sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-10">
                    <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F4A300]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F4A300]/50 text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                      {e.period}
                    </p>
                    <h3 className={`${SERIF} mt-4 text-[28px] font-medium leading-tight sm:text-[32px]`}>{e.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-white/75">{e.text}</p>
                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Where to see it">
                      {e.seeAt.map((s) => (
                        <li key={s} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/85">
                          <MapPin className="h-3 w-3 text-[#F4C66A]" aria-hidden="true" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Packages (existing pilgrimage-collection products only)
   ============================================================ */

export type ResolvedHeritagePackage = { p: PilgrimagePackage; names: string[]; highlights: string[]; tourType: string };

export function HeritagePackages({ items }: { items: ResolvedHeritagePackage[] }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#F7F1E8]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            eyebrow="Heritage Packages"
            title="Choose Your Heritage Journey"
            intro="History-rich journeys from our Nepal collection, each adaptable to your pace, interests and hotel preferences. Prices are quoted on request for your dates."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ p, names, highlights, tourType }, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0B2942]/[0.07] bg-white shadow-[0_18px_40px_-30px_rgba(11,41,66,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.5)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                      {p.image && <PageImageFill image={p.image} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />}
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-semibold text-[#0B2942] backdrop-blur-sm">{p.category}</span>
                    <span className="absolute right-4 top-4 rounded-full bg-[#0B2942]/85 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur-sm">{p.duration}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`${SERIF} text-[23px] font-medium leading-snug text-[#0B2942]`}>{p.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#5B6B7B]">{p.description}</p>
                    {names.length > 0 && (
                      <p className="mt-4 flex items-start gap-2 text-[13px] text-[#0B2942]">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B4532A]" aria-hidden="true" />
                        <span>
                          <span className="sr-only">Destinations: </span>
                          {names.join(" · ")}
                        </span>
                      </p>
                    )}
                    <ul className="mt-4 space-y-1.5" aria-label="Historical highlights">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4A5B6B]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-4 space-y-1 text-[12.5px] text-[#5B6B7B]">
                      {p.accommodation && (
                        <div className="flex gap-1">
                          <dt className="font-semibold text-[#0B2942]">Hotels:</dt>
                          <dd>{p.accommodation}</dd>
                        </div>
                      )}
                      {p.meals && (
                        <div className="flex gap-1">
                          <dt className="font-semibold text-[#0B2942]">Meals:</dt>
                          <dd>{p.meals}</dd>
                        </div>
                      )}
                      <div className="flex gap-1">
                        <dt className="font-semibold text-[#0B2942]">Travel:</dt>
                        <dd>{p.transport.join(" / ")}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#0B2942]/[0.07] pt-5">
                      <p className="text-[14px] font-semibold text-[#0B2942]">{p.price ?? "Price on request"}</p>
                      <div className="flex flex-wrap gap-2">
                        <Link href={p.href ?? "/packages/nepal/spiritual-pilgrimage-tours#packages"} className={BTN_OUTLINE} aria-label={`Explore package: ${p.title}`}>
                          Explore Package
                        </Link>
                        <OpenBookingButton prefill={{ tourType }} className={BTN_DARK} ariaLabel={`Enquire about ${p.title}`}>
                          Enquire Now
                        </OpenBookingButton>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}

          <li className="md:col-span-2 xl:col-span-3">
            <Reveal delay={120}>
              <article className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2942] via-[#3A1E2A] to-[#8A3A1C] p-7 text-white sm:p-10">
                <svg viewBox="0 0 200 220" aria-hidden="true" className="absolute -right-6 bottom-0 h-[120%] w-auto text-[#F4A300]/[0.12]">
                  <path d="M60 52 L100 22 L140 52 Z M40 96 L100 64 L160 96 Z M18 144 L100 110 L182 144 Z" fill="currentColor" />
                  <rect x="30" y="172" width="140" height="48" fill="currentColor" />
                </svg>
                <div className="relative max-w-[640px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Made for you</p>
                  <h3 className={`${SERIF} mt-3 text-[30px] font-medium leading-tight sm:text-[36px]`}>Customize Your Heritage Tour</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/80">
                    Interested in Gorkha and Nuwakot, the palaces of Palpa, or a slow week in the valley&apos;s old towns? Tell us the places and pace you have in mind and we will design the route around them.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <OpenBookingButton prefill={{ tourType: "Custom heritage journey" }} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                      Customize Your Heritage Tour
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </OpenBookingButton>
                    <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-5 text-[14px] font-semibold transition-colors hover:bg-white/10">
                      Contact us
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   Experiences beyond sightseeing (editorial bento)
   ============================================================ */

const BENTO_SPAN = ["lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2", "", "", "lg:col-span-2"];

export function HeritageExperiences({ items }: { items: HeritageExperience[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            eyebrow="Beyond Sightseeing"
            title="Experience the Stories Behind the Monuments"
            intro="History in Nepal is lived as much as it is preserved. These experiences depend on the destination and season, so we match them to your route."
          />
        </Reveal>

        <ul className="mt-12 grid auto-rows-[300px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e, i) => (
            <li key={e.id} className={BENTO_SPAN[i] ?? ""}>
              <Reveal delay={(i % 4) * 70} variant="scale-in" className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[24px] bg-[#123653] text-white">
                  <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]">
                    <HeritageVisual image={e.image} tone={e.tone} title={e.title} sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" />
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
      </div>
    </section>
  );
}

/* ============================================================
   Historical travel guide
   ============================================================ */

const SEASON_ICONS: LucideIcon[] = [Leaf, Snowflake, Flower2, CloudRain];

export function TravelGuide({ guide }: { guide: typeof GUIDE }) {
  return (
    <section id="guide" aria-labelledby="guide-title" className={`${SECTION} bg-[#F7F1E8]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="guide-title" eyebrow="Travel Guide" title="Plan Your Heritage Visit" intro="Practical notes for exploring Nepal's historic sites respectfully and comfortably." />
        </Reveal>

        {/* Best time */}
        <Reveal className="mt-12">
          <h3 className={`${SERIF} text-[26px] font-medium text-[#0B2942]`}>Best Time to Visit</h3>
        </Reveal>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {guide.seasons.map((s, i) => {
            const Icon = SEASON_ICONS[i] ?? Leaf;
            return (
              <li key={s.name}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="h-full rounded-[20px] bg-white p-5 shadow-[0_14px_30px_-26px_rgba(11,41,66,0.45)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B4532A]/10 text-[#B4532A]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-[16px] font-semibold text-[#0B2942]">{s.name}</p>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B4532A]">{s.window}</p>
                    <p className="mt-2 text-[13.5px] leading-6 text-[#5B6B7B]">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 flex items-center gap-2 text-[13px] text-[#5B6B7B]">
          <Info className="h-4 w-4 shrink-0 text-[#B4532A]" aria-hidden="true" />
          {guide.seasonsNote}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <GuideCard icon={ShieldCheck} title="Cultural Etiquette">
              <ul className="space-y-2">
                {guide.etiquette.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </GuideCard>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={80} className="h-full">
              <GuideCard icon={Ticket} title="Entry Fees & Opening Hours">
                <p>{guide.fees}</p>
              </GuideCard>
            </Reveal>
            <Reveal delay={140} className="h-full">
              <GuideCard icon={Accessibility} title="Accessibility">
                <p>{guide.accessibility}</p>
              </GuideCard>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-6">
          <div className="rounded-[24px] bg-[#0B2942] p-6 text-white sm:p-8">
            <h3 className="flex items-center gap-2 text-[17px] font-semibold">
              <Recycle className="h-5 w-5 text-[#F4A300]" aria-hidden="true" />
              Responsible Heritage Tourism
            </h3>
            <ul className="mt-4 grid gap-3 text-[14px] leading-6 text-white/80 sm:grid-cols-2 lg:grid-cols-4">
              {guide.responsible.map((t) => (
                <li key={t} className="border-l-2 border-[#F4A300]/60 pl-3">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GuideCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="h-full rounded-[24px] border border-[#0B2942]/[0.07] bg-white p-6 sm:p-7">
      <h3 className="flex items-center gap-3 text-[17px] font-semibold text-[#0B2942]">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {title}
      </h3>
      <div className="mt-4 text-[14px] leading-6 text-[#4A5B6B]">{children}</div>
    </div>
  );
}

/* ============================================================
   Suggested itineraries (customisable concepts)
   ============================================================ */

export function HeritageItineraries({ items }: { items: ItineraryConcept[] }) {
  return (
    <section id="itineraries" aria-labelledby="itineraries-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="itineraries-title"
            dark
            eyebrow="Journey Ideas"
            title="Suggested Heritage Itineraries"
            intro="Customisable travel concepts to start the conversation. Duration, pace, transport and hotels are planned with you — nothing here is a fixed package."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((it, i) => (
            <li key={it.id} className={i === items.length - 1 && items.length % 2 ? "lg:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] sm:flex-row">
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-[40%]">
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]">
                      <PageImageFill image={it.image} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-[11px] font-semibold text-[#0C1D30]">Customizable suggestion</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`${SERIF} text-[24px] font-medium leading-tight`}>{it.title}</h3>
                    <p className="mt-1 text-[13.5px] text-white/60">{it.theme}</p>
                    <ol className="relative mt-5 space-y-3 border-l border-dashed border-[#F4A300]/50 pl-5">
                      {it.stops.map((s, k) => (
                        <li key={s.name} className="relative">
                          <span aria-hidden="true" className="absolute -left-[27px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#F4A300] bg-[#071421]" />
                          <span className="sr-only">Stop {k + 1}: </span>
                          <span className="text-[14.5px] font-semibold">{s.name}</span>
                          <span className="block text-[13px] text-white/60">{s.note}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-auto pt-6">
                      <OpenBookingButton
                        prefill={{ tourType: it.tourType }}
                        ariaLabel={`Plan this journey: ${it.title}`}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[14px] font-semibold transition-all duration-300 hover:border-[#F4A300] hover:bg-[#F4A300] hover:text-[#0C1D30]"
                      >
                        Plan this journey
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </OpenBookingButton>
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
