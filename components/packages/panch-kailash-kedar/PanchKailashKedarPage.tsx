import Link from "next/link";
import type { ReactNode } from "react";
import { AlertTriangle, ArrowRight, ChevronDown, Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/shared/Reveal";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import { BookingProvider, OpenBookingButton } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import Accordion from "@/components/activities/experience/sections/Accordion";
import { ANCHOR } from "@/components/activities/experience/product/constants";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { CONTAINER, PageIcon, PageImageFill, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import {
  EXTENSIONS,
  FAQS,
  IMAGES,
  ITINERARIES,
  KAILASH,
  KAILASH_ENQUIRY,
  KEDARS,
  KEDAR_ENQUIRY,
  PLANNING,
  SERVICES,
  type Difficulty,
} from "@/data/panch-kailash-kedar/content";
import PanchHero from "./PanchHero";

const BOOKING: ResolvedBooking = {
  destination: "Panch Kailash & Panch Kedar",
  departures: ["Delhi", "Haridwar", "Dehradun", "Rishikesh", "Kathmandu", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [
    KAILASH_ENQUIRY,
    ...KAILASH.map((d) => d.name),
    KEDAR_ENQUIRY,
    ...ITINERARIES.map((i) => i.enquiry),
    "Customized pilgrimage",
  ],
  defaults: { date: "", travelers: "2 Adults", departure: "Delhi", tourType: "Customized pilgrimage", message: "" },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Pilgrimage" },
};

/* ---------- Tokens ---------- */

const GOLD_BTN =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A46D] px-7 py-3.5 text-[15px] font-semibold text-[#091A2C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4B57F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A46D]";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A46D] hover:text-[#E3CFA6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const SECTION = `${ANCHOR} py-20 sm:py-24 lg:py-28`;

function Heading({ id, eyebrow, title, tagline, intro, dark = false, center = false }: {
  id: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
      <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${dark ? "text-[#C5A46D]" : "text-[#9A7A44]"} ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={`${SERIF} mt-4 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[46px] ${dark ? "text-white" : "text-[#102C4A]"}`}>
        {title}
      </h2>
      {tagline && <p className={`${SERIF} mt-3 text-[19px] italic sm:text-[21px] ${dark ? "text-[#E3CFA6]" : "text-[#9A7A44]"}`}>{tagline}</p>}
      {intro && <p className={`mt-5 text-[15.5px] leading-7 sm:text-[16.5px] ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>{intro}</p>}
    </Reveal>
  );
}

/* ---------- Destination card (both products) ---------- */

type Fact = { label: string; value: string };

function DestinationCard({ image, kicker, name, summary, difficulty, facts, alert, details, dark = false, delay = 0 }: {
  image: PageImage;
  kicker: string;
  name: string;
  summary: string;
  difficulty: Difficulty;
  facts: Fact[];
  alert?: string;
  details: string[];
  dark?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`group flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-500 hover:-translate-y-1 ${
          dark
            ? "border-white/10 bg-[#102C4A] hover:border-[#C5A46D]/50 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
            : "border-[#102C4A]/10 bg-white hover:shadow-[0_30px_60px_-34px_rgba(16,44,74,0.45)]"
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <PageImageFill image={image} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-[#091A2C]/80 px-3 py-1 text-[11.5px] font-semibold tracking-wide text-[#E3CFA6] backdrop-blur-sm">
            {difficulty}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-[#C5A46D]" : "text-[#9A7A44]"}`}>{kicker}</p>
          <h3 className={`${SERIF} mt-2 text-[24px] font-medium leading-tight ${dark ? "text-white" : "text-[#102C4A]"}`}>{name}</h3>
          <p className={`mt-3 text-[14.5px] leading-6 ${dark ? "text-white/70" : "text-[#5B6B7B]"}`}>{summary}</p>

          <dl className={`mt-5 space-y-2.5 border-t pt-4 text-[13.5px] ${dark ? "border-white/10" : "border-[#102C4A]/10"}`}>
            {facts.map((f) => (
              <div key={f.label} className="flex gap-3">
                <dt className={`w-[92px] shrink-0 font-semibold ${dark ? "text-white/50" : "text-[#5B6B7B]/80"}`}>{f.label}</dt>
                <dd className={dark ? "text-white/85" : "text-[#102C4A]"}>{f.value}</dd>
              </div>
            ))}
          </dl>

          {alert && (
            <p role="note" className="mt-5 flex gap-2.5 rounded-xl border border-[#C5A46D]/60 bg-[#C5A46D]/15 p-3.5 text-[13px] leading-5 text-inherit">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A46D]" aria-hidden="true" />
              <span className={dark ? "text-[#F3E6CB]" : "text-[#6B5228]"}>
                <strong className="font-semibold">Availability: </strong>
                {alert}
              </span>
            </p>
          )}

          <details className="heli-details group/d mt-auto pt-5">
            <summary
              className={`inline-flex cursor-pointer list-none items-center gap-2 text-[14px] font-semibold transition-colors [&::-webkit-details-marker]:hidden ${
                dark ? "text-[#E3CFA6] hover:text-white" : "text-[#102C4A] hover:text-[#9A7A44]"
              }`}
            >
              Explore Destination
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open/d:rotate-180" aria-hidden="true" />
            </summary>
            <ul className={`mt-4 space-y-2 text-[13.5px] leading-6 ${dark ? "text-white/75" : "text-[#5B6B7B]"}`}>
              {details.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A46D]" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </article>
    </Reveal>
  );
}

function PlanButton({ tourType, children, className = GOLD_BTN }: { tourType: string; children: ReactNode; className?: string }) {
  return (
    <OpenBookingButton prefill={{ tourType }} className={className}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </OpenBookingButton>
  );
}

/**
 * Panch Kailash & Panch Kedar — Karvaahh Special Packages. Two separate
 * pilgrimage products on one page; content in data/panch-kailash-kedar.
 * Every enquiry opens the shared booking form (WhatsApp) with the chosen
 * pilgrimage prefilled.
 */
export default function PanchKailashKedarPage() {
  const images = resolveImages(IMAGES);
  const kailash = resolveImages(KAILASH);
  const kedars = resolveImages(KEDARS);
  const extensions = resolveImages(EXTENSIONS);

  return (
    <MotionProvider>
      <BookingProvider booking={BOOKING} tourTitle="Panch Kailash & Panch Kedar Yatra">
        <Navbar />
        <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#102C4A] antialiased">
          <PanchHero background={images.hero} />

          {/* ---------- Collection intro ---------- */}
          <section id="collection" aria-labelledby="collection-title" className={`${SECTION} bg-[#F8F5EF]`}>
            <div className={CONTAINER}>
              <Heading
                id="collection-title"
                eyebrow="The Collection"
                title="A Journey Beyond the Ordinary"
                intro="This page brings together two distinct Himalayan pilgrimages from the Karvaahh Special Packages collection. They are separate journeys with their own geography, permits and seasons — choose one, or plan each in its own time."
                center
              />
              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                {[
                  {
                    href: "#panch-kailash",
                    n: "01",
                    title: "Panch Kailash",
                    text: "Five sacred mountain destinations across Tibet and northern India, each requiring separate regional planning.",
                    image: images.hero,
                  },
                  {
                    href: "#panch-kedar",
                    n: "02",
                    title: "Panch Kedar",
                    text: "Five sacred Shiva temples in the Garhwal Himalaya of Uttarakhand, linked by mountain roads and trekking trails.",
                    image: images.kedarCollection,
                  },
                ].map((p, i) => (
                  <Reveal key={p.href} delay={i * 120}>
                    <a href={p.href} className="group relative block aspect-[4/3] overflow-hidden rounded-[24px] sm:aspect-[16/10]">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                        <PageImageFill image={p.image} sizes="(min-width:1024px) 50vw, 100vw" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091A2C]/95 via-[#091A2C]/40 to-transparent" aria-hidden="true" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                        <p className={`${SERIF} text-[15px] text-[#C5A46D]`}>{p.n}</p>
                        <h3 className={`${SERIF} mt-1 text-[30px] font-medium sm:text-[36px]`}>{p.title}</h3>
                        <p className="mt-2 max-w-[460px] text-[14.5px] leading-6 text-white/80">{p.text}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#E3CFA6]">
                          Explore {p.title}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Product 1: Panch Kailash ---------- */}
          <section id="panch-kailash" aria-labelledby="panch-kailash-title" className={`${SECTION} bg-[#091A2C] text-white`}>
            <div className={CONTAINER}>
              <Heading
                id="panch-kailash-title"
                eyebrow="Sacred Mountain Expeditions"
                title="Panch Kailash Pilgrimage"
                tagline="Five Sacred Landscapes. One Timeless Faith."
                intro="Journey through some of the Himalaya’s most revered sacred landscapes, from Mount Kailash and Lake Mansarovar to Adi Kailash, Om Parvat and the legendary Shiva peaks of Himachal Pradesh. Each pilgrimage has its own geography, traditions, access conditions and physical demands."
                dark
              />
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {kailash.map((d, i) => (
                  <DestinationCard
                    key={d.id}
                    dark
                    delay={(i % 3) * 100}
                    image={d.image}
                    kicker={d.location}
                    name={d.name}
                    summary={d.summary}
                    difficulty={d.difficulty}
                    facts={[
                      { label: "Duration", value: d.duration },
                      { label: "Access", value: d.access },
                    ]}
                    alert={d.alert}
                    details={d.details}
                  />
                ))}
              </div>

              <Reveal className="mt-16">
                <div className="grid gap-8 rounded-[26px] border border-[#C5A46D]/40 bg-gradient-to-br from-[#102C4A] to-[#091A2C] p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                  <div>
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C5A46D]">
                      <Info className="h-4 w-4" aria-hidden="true" />
                      Route-planning notice
                    </p>
                    <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight sm:text-[34px]`}>Five Destinations. Five Different Access Plans.</h3>
                    <p className="mt-4 text-[15px] leading-7 text-white/75">
                      The Panch Kailash cannot be treated as one simple continuous road journey. Tibet authorization, Indian border-region permits,
                      regional trekking restrictions, seasonal access, medical requirements and connecting transfers differ significantly between
                      destinations.
                    </p>
                    <p className="mt-3 text-[15px] leading-7 text-white/75">
                      We recommend booking each destination as a separate regional module — or combining only compatible destinations after checking
                      travel time, safety, eligibility and current operations.
                    </p>
                  </div>
                  <div className="lg:justify-self-end">
                    <PlanButton tourType={KAILASH_ENQUIRY}>Plan My Panch Kailash Journey</PlanButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------- Product 2: Panch Kedar ---------- */}
          <section id="panch-kedar" aria-labelledby="panch-kedar-title" className={`${SECTION} bg-[#F8F5EF]`}>
            <div className={CONTAINER}>
              <Heading
                id="panch-kedar-title"
                eyebrow="Uttarakhand Spiritual Journeys"
                title="Panch Kedar Yatra"
                tagline="Five Sacred Temples. One Legendary Himalayan Pilgrimage."
                intro="Follow the sacred trail through Garhwal’s mountains, forests and alpine valleys to visit the five legendary Kedars associated with Lord Shiva. Experience traditional worship, Himalayan trekking, peaceful mountain settlements and the spiritual heritage of Uttarakhand."
              />
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {kedars.map((t, i) => (
                  <DestinationCard
                    key={t.id}
                    delay={(i % 3) * 100}
                    image={t.image}
                    kicker={`${t.altitude} · ${t.legend}`}
                    name={t.name}
                    summary={t.summary}
                    difficulty={t.difficulty}
                    facts={[
                      { label: "Walking", value: t.walking },
                      { label: "Season", value: t.season },
                    ]}
                    details={t.details}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Itineraries ---------- */}
          <section id="itineraries" aria-labelledby="itineraries-title" className={`${SECTION} bg-white`}>
            <div className={CONTAINER}>
              <Heading
                id="itineraries-title"
                eyebrow="Panch Kedar Itineraries"
                title="Choose Your Spiritual Journey"
                intro="Two proposed ways to plan your Panch Kedar pilgrimage. Every itinerary is adjusted to your dates, fitness and current trail conditions."
              />
              <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
                {ITINERARIES.map((it, i) => (
                  <Reveal key={it.id} delay={i * 120}>
                    <article
                      className={`rounded-[24px] p-7 sm:p-9 ${
                        i === 0 ? "bg-[#102C4A] text-white" : "border border-[#102C4A]/12 bg-[#F8F5EF] text-[#102C4A]"
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${i === 0 ? "text-[#C5A46D]" : "text-[#9A7A44]"}`}>{it.label}</p>
                        <p className={`rounded-full px-3.5 py-1 text-[13px] font-semibold ${i === 0 ? "bg-white/10 text-[#E3CFA6]" : "bg-white text-[#102C4A]"}`}>
                          {it.duration}
                        </p>
                      </div>
                      <h3 className={`${SERIF} mt-3 text-[28px] font-medium leading-tight sm:text-[32px]`}>{it.title}</h3>
                      <p className={`mt-3 text-[15px] leading-7 ${i === 0 ? "text-white/75" : "text-[#5B6B7B]"}`}>{it.summary}</p>

                      <details className="heli-details group/d mt-6" open={i === 1}>
                        <summary
                          className={`inline-flex cursor-pointer list-none items-center gap-2 text-[14.5px] font-semibold [&::-webkit-details-marker]:hidden ${
                            i === 0 ? "text-[#E3CFA6]" : "text-[#102C4A]"
                          }`}
                        >
                          View day-by-day outline
                          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open/d:rotate-180" aria-hidden="true" />
                        </summary>
                        <ol className={`mt-6 border-l ${i === 0 ? "border-[#C5A46D]/40" : "border-[#C5A46D]/60"}`}>
                          {it.days.map((d, n) => (
                            <li key={d} className="relative pb-4 pl-6 last:pb-0">
                              <span className="absolute -left-[5px] top-[7px] h-2.5 w-2.5 rounded-full bg-[#C5A46D]" aria-hidden="true" />
                              <span className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${i === 0 ? "text-white/50" : "text-[#9A7A44]"}`}>
                                Day {n + 1}
                              </span>
                              <p className={`text-[14.5px] leading-6 ${i === 0 ? "text-white/85" : "text-[#102C4A]"}`}>{d}</p>
                            </li>
                          ))}
                        </ol>
                      </details>

                      <p className={`mt-6 flex gap-2.5 text-[13px] leading-5 ${i === 0 ? "text-white/60" : "text-[#5B6B7B]"}`}>
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A46D]" aria-hidden="true" />
                        {it.note}
                      </p>
                      <PlanButton
                        tourType={it.enquiry}
                        className={
                          i === 0
                            ? `${GOLD_BTN} mt-7`
                            : "group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#102C4A] px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#091A2C]"
                        }
                      >
                        Enquire About This Journey
                      </PlanButton>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Extensions ---------- */}
          <section id="extensions" aria-labelledby="extensions-title" className={`${SECTION} bg-[#F8F5EF]`}>
            <div className={CONTAINER}>
              <Heading
                id="extensions-title"
                eyebrow="Optional Uttarakhand Extensions"
                title="Extend Your Pilgrimage"
                intro="Add-ons can be planned around your Panch Kedar Yatra on request. They are optional and never automatically included."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {extensions.map((e, i) => (
                  <Reveal key={e.title} delay={i * 100}>
                    <article className="group h-full overflow-hidden rounded-[22px] border border-[#102C4A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(16,44,74,0.45)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                          <PageImageFill image={e.image} sizes="(min-width:768px) 33vw, 100vw" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className={`${SERIF} text-[22px] font-medium text-[#102C4A]`}>{e.title}</h3>
                        <p className="mt-2 text-[14.5px] leading-6 text-[#5B6B7B]">{e.text}</p>
                        {e.href && (
                          <Link href={e.href} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#102C4A] underline decoration-[#C5A46D] decoration-2 underline-offset-[5px] hover:text-[#9A7A44]">
                            Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Best time, fitness & safety ---------- */}
          <section id="planning" aria-labelledby="planning-title" className={`${SECTION} bg-white`}>
            <div className={CONTAINER}>
              <Heading id="planning-title" eyebrow="Before You Travel" title="Best Time, Fitness & Safety" />
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {PLANNING.map((p, i) => (
                  <Reveal key={p.title} delay={i * 120}>
                    <div className="h-full rounded-[22px] border-t-2 border-[#C5A46D] bg-[#F8F5EF] p-7 sm:p-9">
                      <h3 className={`${SERIF} text-[26px] font-medium text-[#102C4A]`}>{p.title}</h3>
                      <ul className="mt-5 space-y-3">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-[15px] leading-6 text-[#3E4E5E]">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A46D]" aria-hidden="true" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <p className="mt-8 flex max-w-[860px] gap-2.5 text-[13.5px] leading-6 text-[#5B6B7B]">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#9A7A44]" aria-hidden="true" />
                  Access is seasonal and never guaranteed year-round. Helicopter services, where they operate, depend on weather and current operations
                  and cannot be promised.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ---------- Services ---------- */}
          <section id="services" aria-labelledby="services-title" className={`${SECTION} bg-[#102C4A] text-white`}>
            <div className={CONTAINER}>
              <Heading
                id="services-title"
                eyebrow="Karvaahh Planning"
                title="Your Pilgrimage, Thoughtfully Planned"
                intro="Services we can arrange according to the package you choose. Permits, guides, hotels and transport are confirmed per itinerary — not automatically included."
                dark
                center
              />
              <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICES.map((s) => (
                  <li key={s.label} className="flex items-center gap-4 bg-[#102C4A] p-6 transition-colors hover:bg-[#143558]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C5A46D]/50 text-[#C5A46D]">
                      <PageIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[14.5px] font-medium leading-snug text-white/90">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- FAQ ---------- */}
          <section id="faqs" aria-labelledby="faqs-title" className={`${SECTION} bg-[#F8F5EF]`}>
            <div className={CONTAINER}>
              <Heading
                id="faqs-title"
                eyebrow="FAQs"
                title="Frequently Asked Questions"
                intro="Access, eligibility, opening dates and services always require confirmation for your travel dates."
              />
              <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
                <Accordion items={FAQS.slice(0, 5).map((f) => ({ title: f.question, body: f.answer }))} />
                <Accordion items={FAQS.slice(5).map((f) => ({ title: f.question, body: f.answer }))} openFirst={false} />
              </div>
            </div>
          </section>

          {/* ---------- Final CTA ---------- */}
          <section id="enquire" aria-labelledby="enquire-title" className={`${ANCHOR} relative isolate overflow-hidden bg-[#091A2C] py-24 text-white sm:py-32`}>
            <div className="absolute inset-0 -z-20 opacity-60">
              <PageImageFill image={images.finalCta} sizes="100vw" />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#091A2C]/85 via-[#102C4A]/80 to-[#091A2C]/95" aria-hidden="true" />
            <div className={`${CONTAINER} text-center`}>
              <Reveal className="mx-auto max-w-[780px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C5A46D]">Begin Your Pilgrimage</p>
                <h2 id="enquire-title" className={`${SERIF} mt-4 text-[34px] font-medium leading-[1.1] sm:text-[46px]`}>
                  Your Sacred Himalayan Journey Starts Here
                </h2>
                <p className="mt-5 text-[15.5px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
                  Whether you seek the sacred Kailash mountains or the legendary five Kedars of Uttarakhand, Karvaahh Tours &amp; Travels can help you
                  plan a journey suited to your time, travel preferences and pilgrimage goals.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <PlanButton tourType={KAILASH_ENQUIRY}>Plan My Panch Kailash Journey</PlanButton>
                  <PlanButton tourType={KEDAR_ENQUIRY} className={`group ${OUTLINE_BTN}`}>
                    Plan My Panch Kedar Yatra
                  </PlanButton>
                </div>
                <p className="mx-auto mt-10 max-w-[640px] text-[12.5px] leading-5 text-white/50">
                  Itineraries, permits, opening dates, road conditions and services are subject to official regulations and local conditions, and are
                  confirmed with you before booking.
                </p>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </BookingProvider>
    </MotionProvider>
  );
}
