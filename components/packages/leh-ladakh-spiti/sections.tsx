import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTACT } from "@/components/activities/experience/site";
import type { PageImage } from "@/components/activities/experience/types";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import {
  ACCESS_NOTE,
  FACTS,
  OFFICIAL_SOURCES,
  SAFETY,
  SEASONS,
  SEASON_NOTE,
  STYLES,
  type Destination,
  type ExpeditionRoute,
  type Region,
} from "@/data/leh-ladakh-spiti/content";

const CARD = "rounded-[24px] border border-[#0B2942]/10 bg-white shadow-[0_14px_40px_-32px_rgba(11,41,66,0.5)]";
const LIFT = "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.55)]";

/* ---------- Expedition overview ---------- */

export function Overview({ regions }: { regions: Region[] }) {
  return (
    <section id="overview" aria-labelledby="overview-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="overview-title"
            eyebrow="The Expedition"
            title="Three Himalayan Worlds, One Journey"
            intro="This circuit links the high desert of Ladakh, the hidden valleys of Zanskar and the ancient villages of Spiti and Lahaul — each with its own character, roads and seasons."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className={`group h-full overflow-hidden ${CARD} ${LIFT}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <PageImageFill image={r.image} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${SERIF} text-[24px] font-medium text-[#0B2942]`}>{r.name}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#5B6B7B]">{r.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${r.name} destinations`}>
                    {r.tags.map((t) => (
                      <li key={t} className="rounded-full bg-[#F1F4F7] px-2.5 py-1 text-[12px] font-medium text-[#33475B]">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <dl className="mt-10 grid overflow-hidden rounded-[24px] border border-[#0B2942]/10 bg-[#0B2942] text-white sm:grid-cols-2 lg:grid-cols-5">
            {FACTS.map((f) => (
              <div key={f.label} className="border-b border-white/10 px-6 py-5 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">{f.label}</dt>
                <dd className="mt-1.5 text-[16px] font-medium leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p role="note" className="mt-4 flex gap-2.5 text-[14px] leading-6 text-[#5B6B7B]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            {ACCESS_NOTE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Destination highlights ---------- */

export function Destinations({ items }: { items: Destination[] }) {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F7F9FB]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="destinations-title"
            eyebrow="Along the Way"
            title="Destination Highlights"
            intro="Lakes, monasteries, high villages and passes across the circuit — each with the access note that matters when you plan."
          />
        </Reveal>
        <ul className="mt-12 grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => (
            <li key={d.name} className={d.feature ? "sm:col-span-2" : ""}>
              <article className={`group flex h-full flex-col overflow-hidden ${CARD} ${LIFT}`}>
                <div className={`relative overflow-hidden ${d.feature ? "aspect-[4/3] sm:aspect-[8/3]" : "aspect-[4/3]"}`}>
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <PageImageFill image={d.image} sizes={d.feature ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"} />
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B2942]">
                    {d.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`${SERIF} font-medium text-[#0B2942] ${d.feature ? "text-[24px]" : "text-[19px]"}`}>{d.name}</h3>
                  <p className="mt-1.5 flex-1 text-[14px] leading-6 text-[#5B6B7B]">{d.text}</p>
                  <p className="mt-3 flex items-start gap-1.5 text-[12.5px] font-medium text-[#1F5478]">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {d.access}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Schematic route map ---------- */

export function RouteMap({ routes }: { routes: ExpeditionRoute[] }) {
  return (
    <section id="route-map" aria-labelledby="route-map-title" className={`${ANCHOR} ${SECTION_Y} bg-[#071421] text-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="route-map-title"
            eyebrow="Route Map"
            title="How the Three Routes Connect"
            intro="A schematic of each route in travel order — not to scale. Dashed links depend on seasonal passes, permits or optional sectors and are confirmed before departure."
            dark
          />
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-white/70">
          <span className="inline-flex items-center gap-2">
            <span className="h-0.5 w-8 bg-[#8EC5E8]" aria-hidden="true" /> Regular road link
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-8 border-t-2 border-dashed border-[#F4A300]" aria-hidden="true" /> Seasonal / conditional link
          </span>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {routes.map((r, ri) => (
            <Reveal key={r.id} delay={ri * 100}>
              <figure className="h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                <figcaption>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4A300]">Route {r.number}</p>
                  <p className={`${SERIF} mt-1 text-[21px] font-medium`}>{r.tab}</p>
                </figcaption>
                <ol className="mt-6">
                  {r.stops.map((s, i) => (
                    <li key={`${s.name}-${i}`} className="relative">
                      {i > 0 && (
                        <div className="flex min-h-7 items-center gap-3 py-0.5 pl-[5px]">
                          <span
                            aria-hidden="true"
                            className={`h-full min-h-7 self-stretch ${s.link ? "border-l-2 border-dashed border-[#F4A300]" : "border-l-2 border-[#8EC5E8]/70"}`}
                          />
                          {s.link && <span className="text-[11.5px] font-medium text-[#F7C35A]">{s.via}</span>}
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`h-3 w-3 shrink-0 rounded-full ${i === 0 || i === r.stops.length - 1 ? "bg-[#F4A300]" : "border-2 border-[#8EC5E8] bg-[#071421]"}`}
                        />
                        <span className="text-[14.5px] font-medium text-white/90">
                          {s.name}
                          {s.link && <span className="sr-only"> — {s.link} link via {s.via}</span>}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Safety ---------- */

export function Safety() {
  return (
    <section id="safety" aria-labelledby="safety-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="safety-title"
            eyebrow="Plan Safely"
            title="Acclimatization, Roads & Permits"
            intro="Altitude, weather and remote roads shape every day of this journey. Here is how we plan around them."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className={`h-full p-6 ${CARD}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF3FA] text-[#1F5478]">
                  <PageIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-[#0B2942]">{s.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[14px] leading-6 text-[#5B6B7B]">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#F4A300]" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-[#5B6B7B]">
            <span className="font-semibold text-[#0B2942]">Official advisories:</span>
            {OFFICIAL_SOURCES.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline decoration-[#F4A300] decoration-2 underline-offset-4 transition-colors hover:text-[#C98500]"
              >
                {s.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Best time to visit ---------- */

const SEASON_STYLE = {
  main: { bar: "bg-[#3E8E6A]", tag: "bg-[#EAF6F0] text-[#2B6B4E]", label: "Main window" },
  variable: { bar: "bg-[#F4A300]", tag: "bg-[#FFF6E2] text-[#8A5A00]", label: "Variable" },
  limited: { bar: "bg-[#9AA8B5]", tag: "bg-[#F1F4F7] text-[#4A5A6A]", label: "Limited" },
} as const;

export function Seasons() {
  return (
    <section id="seasons" aria-labelledby="seasons-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F7F9FB]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="seasons-title" eyebrow="When to Go" title="Best Time to Visit" intro={SEASON_NOTE} />
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEASONS.map((s) => {
            const st = SEASON_STYLE[s.status];
            return (
              <li key={s.months} className={`relative overflow-hidden p-6 pl-7 ${CARD}`}>
                <span className={`absolute inset-y-0 left-0 w-1.5 ${st.bar}`} aria-hidden="true" />
                <div className="flex items-center justify-between gap-3">
                  <p className={`${SERIF} text-[22px] font-medium text-[#0B2942]`}>{s.months}</p>
                  <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${st.tag}`}>{st.label}</span>
                </div>
                <h3 className="mt-2 text-[15.5px] font-semibold text-[#0B2942]">{s.title}</h3>
                <p className="mt-1 text-[14px] leading-6 text-[#5B6B7B]">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Travel styles ---------- */

export function TravelStyles() {
  return (
    <section id="styles" aria-labelledby="styles-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="styles-title"
              eyebrow="Your Way"
              title="Travel Styles & Customization"
              intro="Every element is configurable — vehicle, stays, pace and extensions are agreed with you before booking."
            />
          </Reveal>
          <OpenBookingButton className="text-[14.5px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]">
            Customize my trip →
          </OpenBookingButton>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STYLES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className={`h-full p-6 ${CARD} ${LIFT}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                  <PageIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className={`${SERIF} mt-4 text-[20px] font-medium leading-snug text-[#0B2942]`}>{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-[#5B6B7B]">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final inquiry CTA ---------- */

export function InquiryCta({ image }: { image: PageImage }) {
  return (
    <section id="enquire" aria-labelledby="cta-title" className={`${ANCHOR} relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#071421] py-24 text-white`}>
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="heli-drift -z-10 object-cover" style={{ objectPosition: image.objectPosition ?? "center" }} />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-[#123653] via-[#0B2942] to-[#071421]" />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0B2942]/70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,20,33,0.1)_0%,rgba(7,20,33,0.85)_75%)]" />

      <Reveal className="mx-auto w-full max-w-[860px] px-5 text-center sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4A300] sm:text-xs">Karvaahh Tours &amp; Travels · Live to Travel</p>
        <h2 id="cta-title" className={`${SERIF} mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[50px] lg:text-[58px]`}>
          Your Grand Himalayan Expedition Starts Here.
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
          Tell us your travel dates, preferred route and group size. Our team will help plan a realistic itinerary around seasonal road access,
          accommodation and acclimatization.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap">
          <OpenBookingButton className={`group ${BTN_PRIMARY}`}>
            Customize My Trip
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </OpenBookingButton>
          <Link href="/contact" className={BTN_GHOST}>
            Contact Karvaahh
          </Link>
        </div>
        <a
          href={CONTACT.whatsappHref("Hello Karvaahh, I'd like to plan the Leh–Ladakh, Zanskar & Spiti circuit.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-[14px] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Or message us on WhatsApp · {CONTACT.phoneDisplay}
        </a>
      </Reveal>
    </section>
  );
}
