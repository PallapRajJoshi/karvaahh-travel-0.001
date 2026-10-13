import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ban,
  CalendarDays,
  Camera,
  Check,
  ClipboardCheck,
  CloudRain,
  Flower2,
  Footprints,
  HandHeart,
  Info,
  Leaf,
  MapPin,
  Recycle,
  Shirt,
  Snowflake,
  Store,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PilgrimagePackage } from "@/data/pilgrimage/types";
import type { EtiquetteIcon, SEASONS } from "@/data/festival-cultural/content";
import type { CulturalDestination, CulturalExperience, Festival, ItineraryConcept } from "@/data/festival-cultural/types";
import FestivalVisual from "./FestivalVisual";

const SECTION = "scroll-mt-[120px] py-20 sm:py-24 md:scroll-mt-[160px] lg:py-28";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LINK =
  "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C2561A]";
const BTN_DARK =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B2942] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";
const BTN_OUTLINE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#0B2942]/20 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C98500] hover:text-[#8A4A12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]";

/** Months covered by a [start, end] window, wrapping the year end. */
export function monthsOf([start, end]: [number, number]): number[] {
  const out: number[] = [];
  for (let m = start; ; m = (m % 12) + 1) {
    out.push(m);
    if (m === end) break;
  }
  return out;
}

/* ============================================================
   Living cultural heritage
   ============================================================ */

export function CulturalDestinations({ items }: { items: CulturalDestination[] }) {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="destinations-title"
              eyebrow="Cultural Destinations"
              title="Explore Nepal's Living Cultural Heritage"
              intro="Royal squares still used for worship, stupas circled at dawn, Mithila homes painted by hand and villages where the old ways are part of daily life."
            />
          </Reveal>
          <Link href="/destinations" className={LINK}>
            All destinations <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <li key={d.id} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[26px] bg-[#0B2942] text-white">
                  <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]">
                    <PageImageFill image={d.image} sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421] via-[#071421]/55 to-transparent" />
                  <div className="relative p-6 sm:p-7">
                    <p className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F4C66A]">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {d.region}
                    </p>
                    <h3 className={`${SERIF} mt-2 text-[28px] font-medium leading-tight`}>{d.name}</h3>
                    <p className="mt-3 max-w-[560px] text-[14.5px] leading-6 text-white/80">{d.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Cultural experiences">
                      {d.tags.map((t) => (
                        <li key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11.5px] font-medium backdrop-blur-sm">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={d.href}
                      className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/95 px-5 text-[14px] font-semibold text-[#0B2942] transition-all duration-300 hover:bg-[#F4A300] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={`${d.linkLabel}: ${d.name}`}
                    >
                      {d.linkLabel}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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

/* ============================================================
   Experiences beyond festivals (editorial bento)
   ============================================================ */

const BENTO_SPAN = ["lg:col-span-2", "", "", "", "", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function CulturalExperiences({ items }: { items: CulturalExperience[] }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            dark
            eyebrow="Beyond Festivals"
            title="Experience the Traditions, Stories & Flavors of Nepal"
            intro="Culture in Nepal is lived every day — in workshops, kitchens, courtyards and monasteries. Each experience depends on the destination, so we match them to your route."
          />
        </Reveal>

        <ul className="mt-12 grid auto-rows-[320px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e, i) => (
            <li key={e.id} className={BENTO_SPAN[i] ?? ""}>
              <Reveal delay={(i % 4) * 70} variant="scale-in" className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[24px] bg-[#123653]">
                  <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]">
                    <FestivalVisual image={e.image} art={e.art} title={e.title} sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" />
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
   Packages (existing pilgrimage-collection products only)
   ============================================================ */

export type ResolvedCulturalPackage = { p: PilgrimagePackage; names: string[]; highlights: string[]; tourType: string };

export function CulturalPackages({ items }: { items: ResolvedCulturalPackage[] }) {
  return (
    <section id="packages" aria-labelledby="packages-title" className={`${SECTION} bg-[#FBF7F0]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="packages-title"
            eyebrow="Cultural Tour Packages"
            title="Find Your Perfect Cultural Journey"
            intro="Heritage-rich journeys from our Nepal collection, each adaptable to festival dates, your pace and your hotel preferences. Prices are quoted on request for your dates."
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
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                        <span>
                          <span className="sr-only">Destinations: </span>
                          {names.join(" · ")}
                        </span>
                      </p>
                    )}
                    <ul className="mt-4 space-y-1.5" aria-label="Cultural highlights">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4A5B6B]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A4A]" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    {p.accommodation && <p className="mt-4 text-[12.5px] text-[#5B6B7B]">Hotels: {p.accommodation}</p>}
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

          <li>
            <Reveal delay={160} className="h-full">
              <article className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B2942] via-[#3A1E2A] to-[#8A3A16] p-7 text-white">
                <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute -right-20 -top-20 h-[340px] w-[340px] text-[#F4A300]/[0.15]">
                  {Array.from({ length: 12 }).map((_, k) => (
                    <ellipse key={k} cx="100" cy="100" rx="88" ry="26" fill="none" stroke="currentColor" strokeWidth="0.7" transform={`rotate(${k * 15} 100 100)`} />
                  ))}
                </svg>
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">Made for you</p>
                <h3 className={`${SERIF} relative mt-3 text-[30px] font-medium leading-tight`}>Customize Your Cultural Tour</h3>
                <p className="relative mt-3 text-[14.5px] leading-6 text-white/80">
                  Planning around Dashain, Indra Jatra, Bisket Jatra or Chhath? Tell us the festival, region and dates — we design the route, guides and stays around it.
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  <OpenBookingButton prefill={{ tourType: "Festival tour" }} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4A300] px-5 text-[14px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]">
                    Customize Your Cultural Tour
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </OpenBookingButton>
                  <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-5 text-[14px] font-semibold transition-colors hover:bg-white/10">
                    Contact us
                  </Link>
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
   Festival calendar (data-driven; seasons, not dates)
   ============================================================ */

export function FestivalCalendar({ festivals }: { festivals: Festival[] }) {
  const sorted = [...festivals].sort((a, b) => a.months[0] - b.months[0]);

  return (
    <section id="calendar" aria-labelledby="calendar-title" className={`${SECTION} bg-white`}>
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <SectionHeading
              id="calendar-title"
              eyebrow="Festival Calendar"
              title="Plan Your Visit Around Nepal's Festivals"
              intro="Nepal's festivals follow a mix of lunar, solar, regional and community calendars, so each one moves against the Western calendar from year to year. Use this seasonal overview to choose when to travel, and we will confirm exact dates for your year."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="flex items-start gap-3 rounded-2xl bg-[#FFF6E5] p-5 text-[14px] leading-6 text-[#5B4320]">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#C98500]" aria-hidden="true" />
              Bars show the months a festival usually falls in, not its length. Dates, routes and public arrangements can change each year.
            </p>
          </Reveal>
        </div>

        {/* Desktop / tablet: month grid */}
        <Reveal className="mt-12 hidden md:block">
          <div role="table" aria-label="Typical festival months" className="overflow-hidden rounded-[24px] border border-[#0B2942]/[0.08]">
            <div role="row" className="grid grid-cols-[minmax(170px,1.3fr)_repeat(12,minmax(0,1fr))] bg-[#0B2942] text-white">
              <span role="columnheader" className="px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em]">
                Festival
              </span>
              {MONTHS.map((m) => (
                <span key={m} role="columnheader" className="py-3 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
                  {m}
                </span>
              ))}
            </div>
            {sorted.map((f, row) => {
              const on = new Set(monthsOf(f.months));
              return (
                <div key={f.id} role="row" className={`grid grid-cols-[minmax(170px,1.3fr)_repeat(12,minmax(0,1fr))] items-center ${row % 2 ? "bg-[#FBF7F0]" : "bg-white"}`}>
                  <span role="rowheader" className="px-5 py-3.5">
                    <span className="block text-[14.5px] font-semibold text-[#0B2942]">{f.name}</span>
                    <span className="block text-[12px] text-[#5B6B7B]">{f.location}</span>
                  </span>
                  {MONTHS.map((m, k) => {
                    const hit = on.has(k + 1);
                    const prev = on.has(k === 0 ? 12 : k) && k !== 0;
                    const next = on.has(k + 2) && k !== 11;
                    return (
                      <span key={m} role="cell" aria-label={hit ? `${f.name}: typically ${m}` : undefined} className="relative h-full min-h-[56px] border-l border-[#0B2942]/[0.05]">
                        {hit && (
                          <span
                            className={`absolute inset-y-[18px] bg-gradient-to-r from-[#F4A300] to-[#E0612A] ${prev ? "left-0" : "left-1.5 rounded-l-full"} ${next ? "right-0" : "right-1.5 rounded-r-full"}`}
                          />
                        )}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile: list */}
        <ol className="mt-10 space-y-3 md:hidden">
          {sorted.map((f) => (
            <li key={f.id} className="rounded-2xl border border-[#0B2942]/[0.08] p-4">
              <p className="text-[15px] font-semibold text-[#0B2942]">{f.name}</p>
              <p className="mt-1 flex items-start gap-1.5 text-[13px] text-[#4A5B6B]">
                <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
                {f.season}
              </p>
              <p className="mt-0.5 flex items-start gap-1.5 text-[13px] text-[#4A5B6B]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
                {f.location}
              </p>
              <p className="mt-2 text-[12.5px] text-[#5B6B7B]">{f.highlights.join(" · ")}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Best time for cultural tours
   ============================================================ */

const SEASON_STYLE: Record<(typeof SEASONS)[number]["tone"], { icon: LucideIcon; card: string; accent: string }> = {
  autumn: { icon: Leaf, card: "from-[#FFF1DC] to-[#FFE2C2]", accent: "text-[#B4532A]" },
  winter: { icon: Snowflake, card: "from-[#EAF1F8] to-[#DCE7F2]", accent: "text-[#1F5A8A]" },
  spring: { icon: Flower2, card: "from-[#FCEAF0] to-[#F6DDE6]", accent: "text-[#A8325A]" },
  monsoon: { icon: CloudRain, card: "from-[#E7F3EC] to-[#D7EBDF]", accent: "text-[#2F6B4A]" },
};

export function BestTime({ seasons, festivals }: { seasons: typeof SEASONS; festivals: Festival[] }) {
  return (
    <section id="best-time" aria-labelledby="best-time-title" className={`${SECTION} bg-[#FBF7F0]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="best-time-title"
            eyebrow="When to Go"
            title="Best Time for Cultural Tours"
            intro="Nepal offers cultural experiences all year round. The best time to travel depends on the festival you want to see and the destinations you plan to visit, because festival dates change annually."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {seasons.map((s, i) => {
            const style = SEASON_STYLE[s.tone];
            const Icon = style.icon;
            const matches = festivals.filter((f) => monthsOf(f.months).some((m) => s.months.includes(m)));
            return (
              <li key={s.id}>
                <Reveal delay={i * 80} className="h-full">
                  <article className={`flex h-full flex-col rounded-[24px] bg-gradient-to-br ${style.card} p-6`}>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/80 ${style.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className={`${SERIF} mt-5 text-[26px] font-medium text-[#0B2942]`}>{s.name}</h3>
                    <p className={`text-[12.5px] font-semibold uppercase tracking-[0.16em] ${style.accent}`}>{s.window}</p>
                    <p className="mt-3 flex-1 text-[14px] leading-6 text-[#4A5B6B]">{s.text}</p>
                    {matches.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Festivals that often fall in ${s.name.toLowerCase()}`}>
                        {matches.map((f) => (
                          <li key={f.id} className="rounded-full bg-white/80 px-2.5 py-1 text-[11.5px] font-semibold text-[#0B2942]">
                            {f.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
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
   Etiquette & responsible tourism
   ============================================================ */

const ETIQUETTE_ICONS: Record<EtiquetteIcon, LucideIcon> = {
  shirt: Shirt,
  footprints: Footprints,
  camera: Camera,
  ban: Ban,
  users: Users,
  quiet: VolumeX,
  store: Store,
  recycle: Recycle,
  greet: HandHeart,
  guide: ClipboardCheck,
};

export function Etiquette({ items, image }: { items: { icon: EtiquetteIcon; title: string; text: string }[]; image: CulturalDestination["image"] }) {
  return (
    <section id="etiquette" aria-labelledby="etiquette-title" className={`${SECTION} bg-white`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start`}>
        <Reveal variant="slide-left" className="lg:sticky lg:top-[180px]">
          <SectionHeading
            id="etiquette-title"
            eyebrow="Responsible Travel"
            title="Travel Respectfully. Experience More Deeply."
            intro="Festivals and temples are first of all places of worship and family life. A few simple courtesies are warmly appreciated — and open the way to real encounters."
          />
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[24px]">
            <PageImageFill image={image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((e, i) => {
            const Icon = ETIQUETTE_ICONS[e.icon];
            return (
              <li key={e.title}>
                <Reveal delay={(i % 2) * 80} className="h-full">
                  <div className="flex h-full gap-4 rounded-[20px] border border-[#0B2942]/[0.07] bg-[#FBF7F0] p-5 transition-colors duration-300 hover:border-[#C98500]/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-semibold text-[#0B2942]">{e.title}</h3>
                      <p className="mt-1 text-[14px] leading-6 text-[#5B6B7B]">{e.text}</p>
                    </div>
                  </div>
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
   Suggested itineraries (customisable concepts)
   ============================================================ */

export function ItineraryConcepts({ items }: { items: ItineraryConcept[] }) {
  return (
    <section id="itineraries" aria-labelledby="itineraries-title" className={`${SECTION} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="itineraries-title"
            dark
            eyebrow="Journey Ideas"
            title="Suggested Cultural Itineraries"
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
                    <span className="absolute left-4 top-4 rounded-full bg-[#F4A300] px-3 py-1 text-[11px] font-semibold text-[#0C1D30]">Customizable concept</span>
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
