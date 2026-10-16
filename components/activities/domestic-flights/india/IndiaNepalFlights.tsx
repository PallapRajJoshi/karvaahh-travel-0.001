import { ArrowRight, BadgeCheck, CircleHelp, MessageCircle, Plane } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTACT } from "@/components/activities/experience/site";
import { BTN_PRIMARY, CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import Sources from "../everest/Sources";
import { km } from "./shared";
import type { IndiaNepalData, NepalOperator } from "./types";

/** The India ↔ Kathmandu nonstop services, on a deep-blue band. */
export default function IndiaNepalFlights({ data, image }: { data: IndiaNepalData; image: PageImage }) {
  return (
    <section id="india-nepal" aria-labelledby="india-nepal-title" className={`${ANCHOR} ${SECTION_Y} relative overflow-hidden bg-[#071421] text-white`}>
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <PageImageFill image={image} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071421] via-[#071421]/85 to-[#071421]" />
      </div>

      <div className={`${CONTAINER} relative`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="india-nepal-title" eyebrow="India ↔ Kathmandu" title={data.title} intro={data.intro} dark />
          </Reveal>
          <Reveal delay={100}>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12.5px] font-medium text-white/80 ring-1 ring-white/10">
              Last reviewed: {data.verified}
            </p>
          </Reveal>
        </div>

        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-[#4ADE80]" aria-hidden="true" /> Airline source
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CircleHelp className="h-4 w-4 text-[#F4A300]" aria-hidden="true" /> Reported — reconfirm before booking
          </span>
        </p>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.routes.map((r, i) => (
            <li key={r.from.code}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="flex h-full flex-col rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.09]">
                  <div className="flex items-center justify-between gap-3">
                    <Code code={r.from.code} city={r.from.city} />
                    <span className="relative flex-1" aria-hidden="true">
                      <span className="block border-t border-dashed border-white/25" />
                      <Plane className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 text-[#F4A300]" />
                    </span>
                    <Code code={r.to.code} city={r.to.city} align="right" />
                  </div>
                  <h3 className="sr-only">
                    {r.from.city} ({r.from.code}) to {r.to.city} ({r.to.code}) nonstop
                  </h3>
                  <p className="mt-2 text-[12px] text-white/50">
                    {r.from.name} → {r.to.name}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-3 text-[13px]">
                    <div className="rounded-xl bg-white/[0.05] p-3">
                      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50">Approx. time</dt>
                      <dd className="mt-0.5 font-semibold">{r.duration}</dd>
                    </div>
                    <div className="rounded-xl bg-white/[0.05] p-3">
                      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50">Distance</dt>
                      <dd className="mt-0.5 font-semibold">{km(r.distanceKm)}</dd>
                    </div>
                    {r.frequency && (
                      <div className="col-span-2 rounded-xl bg-white/[0.05] p-3">
                        <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50">Frequency</dt>
                        <dd className="mt-0.5">{r.frequency}</dd>
                      </div>
                    )}
                  </dl>

                  <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50">Nonstop operators</p>
                  <ul className="mt-2 space-y-2">
                    {r.operators.map((o) => (
                      <Operator key={o.name} op={o} />
                    ))}
                  </ul>
                  {r.note && <p className="mt-4 text-[12.5px] leading-5 text-white/60">{r.note}</p>}

                  <div className="mt-auto pt-5">
                    <a
                      href={CONTACT.whatsappHref(`Hello Karvaahh, please share current fares for ${r.from.city} (${r.from.code}) – ${r.to.city} (${r.to.code}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#F4A300] transition-colors hover:text-[#FFB524]"
                    >
                      Fare enquiry
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}

          {/* Connecting itineraries */}
          <li>
            <Reveal delay={160} className="h-full">
              <article className="flex h-full flex-col rounded-[24px] border border-dashed border-white/20 p-6">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#F4A300]">Connecting itineraries</p>
                <h3 className={`${SERIF} mt-2 text-[22px] font-medium`}>{data.connecting.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/70">{data.connecting.text}</p>
                <p className="mt-4 flex flex-wrap gap-1.5">
                  {data.connecting.cities.map((c) => (
                    <span key={c} className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] text-white/80">
                      {c}
                    </span>
                  ))}
                </p>
              </article>
            </Reveal>
          </li>
        </ul>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <ul className="space-y-2">
              {data.notes.map((n) => (
                <li key={n.slice(0, 40)} className="text-[13px] leading-6 text-white/60">
                  {n}
                </li>
              ))}
            </ul>
            <Sources sources={data.sources} dark className="mt-4" />
          </div>
          <Reveal delay={120}>
            <div className="rounded-[24px] bg-white p-7 text-[#0B2942]">
              <p className={`${SERIF} text-[22px] leading-snug`}>Contact Karvaahh for current fares.</p>
              <p className="mt-2 text-[14px] leading-6 text-[#5B6B7B]">We check the nonstop options for your date and send fares with taxes, baggage and fare conditions.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <OpenBookingButton className={`group ${BTN_PRIMARY}`} prefill={{ tourType: "India ↔ Kathmandu flight" }}>
                  Get a Fare Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </OpenBookingButton>
                <a
                  href={CONTACT.whatsappHref(data.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B2942]/20 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#0B2942]/5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Code({ code, city, align = "left" }: { code: string; city: string; align?: "left" | "right" }) {
  return (
    <span className={align === "right" ? "text-right" : ""}>
      <span className="block font-mono text-[28px] font-semibold leading-none tracking-[0.06em] text-white">{code}</span>
      <span className="mt-1 block text-[12.5px] text-white/65">{city}</span>
    </span>
  );
}

function Operator({ op }: { op: NepalOperator }) {
  const airline = op.status === "airline";
  return (
    <li className="flex items-start gap-2 text-[13.5px]">
      {airline ? (
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#4ADE80]" aria-label="Airline source" />
      ) : (
        <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-label="Reported, reconfirm before booking" />
      )}
      <span>
        <a href={op.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-white/30 underline-offset-2 hover:text-[#F4A300]">
          {op.name}
          <span className="sr-only"> (official site, opens in a new tab)</span>
        </a>
        {op.detail && <span className="block text-[12px] leading-5 text-white/55">{op.detail}</span>}
      </span>
    </li>
  );
}
