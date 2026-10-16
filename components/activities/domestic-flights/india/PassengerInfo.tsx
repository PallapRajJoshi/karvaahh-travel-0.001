import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTACT } from "@/components/activities/experience/site";
import { BTN_PRIMARY, CONTAINER, PageIcon, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "../everest/Sources";
import { VerifiedPill } from "./shared";
import type { PassengerInfoData } from "./types";

/** Fare basis (quoted on request) and ID / document requirements. */
export default function PassengerInfo({ data }: { data: PassengerInfoData }) {
  const { documents } = data;
  return (
    <section id="fares" aria-labelledby="fares-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="fares-title" eyebrow="Fares & Passengers" title={data.title} intro={data.intro} />
          </Reveal>
          <Reveal delay={100}>
            <VerifiedPill date={data.verified} label="Fare information checked" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.fares.map((f, i) => (
              <li key={f.title}>
                <Reveal delay={i * 60} className="h-full">
                  <div className="h-full rounded-[22px] bg-white p-6 ring-1 ring-[#0B2942]/[0.06]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                      <PageIcon name={f.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold text-[#0B2942]">{f.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{f.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-[24px] bg-[#0B2942] p-7 text-white">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4A300]">One-way · Return · Multi-city</p>
                <p className={`${SERIF} mt-3 text-[28px] leading-tight`}>{data.fareMessage}</p>
                <p className="mt-3 text-[14px] leading-6 text-white/70">
                  We don&apos;t publish fares that change by the hour. Send your route and date and we reply with live options, total price, baggage and fare rules.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <OpenBookingButton className={`group ${BTN_PRIMARY}`}>
                  Request Fares
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </OpenBookingButton>
                <a
                  href={CONTACT.whatsappHref(data.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <h3 className={`${SERIF} mt-16 text-[26px] font-medium text-[#0B2942] sm:text-[30px]`}>{documents.title}</h3>
        <p className="mt-2 max-w-[720px] text-[15px] leading-7 text-[#5B6B7B]">{documents.intro}</p>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {documents.groups.map((g, i) => (
            <li key={g.title}>
              <Reveal delay={i * 80} className="h-full">
                <article className="h-full rounded-[22px] bg-white p-6 ring-1 ring-[#0B2942]/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3D6] text-[#C98500]">
                      <PageIcon name={g.icon} className="h-5 w-5" />
                    </span>
                    <h4 className="text-[16px] font-semibold text-[#0B2942]">{g.title}</h4>
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-[#4A5B6C]">{g.text}</p>
                  {g.points && (
                    <ul className="mt-3 space-y-2">
                      {g.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13.5px] leading-6 text-[#5B6B7B]">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Sources sources={documents.sources} className="mt-6" />
      </div>
    </section>
  );
}
