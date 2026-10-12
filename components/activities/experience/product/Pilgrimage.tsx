import { ArrowRight, Check, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import ParallaxImage from "../ParallaxImage";
import { CONTACT } from "../site";
import { BTN_PRIMARY, CONTAINER, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/** Pilgrimage-focused section with a yatra enquiry CTA (optional). */
export default function Pilgrimage({ tour }: { tour: HelicopterProductTour }) {
  const { pilgrimage } = tour;
  if (!pilgrimage) return null;

  return (
    <section aria-labelledby="pilgrimage-title" className={`${SECTION_Y} bg-[#EFE9DF]`}>
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16`}>
        <Reveal className="relative order-2 lg:order-1">
          <ParallaxImage
            image={pilgrimage.image}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] rounded-[28px] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.45)] lg:aspect-[4/5]"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-5 left-6 rounded-full bg-[#0B2942] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#F4A300] shadow-lg"
          >
            {pilgrimage.badge ?? "Yatra by helicopter"}
          </span>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading id="pilgrimage-title" eyebrow={pilgrimage.eyebrow} title={pilgrimage.title} intro={pilgrimage.intro} />
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {pilgrimage.points.map((p, i) => (
              <li key={p}>
                <Reveal
                  delay={i * 70}
                  className="flex h-full items-start gap-3 rounded-2xl bg-white/70 px-4 py-3.5 text-[14.5px] font-medium leading-6 text-[#0B2942] ring-1 ring-[#0B2942]/[0.06]"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                  {p}
                </Reveal>
              </li>
            ))}
          </ul>
          {pilgrimage.note && (
            <Reveal delay={180}>
              <p className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F4A300]/30 bg-[#FFF8E8] px-4 py-3.5 text-[13.5px] leading-6 text-[#6B5418]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                {pilgrimage.note}
              </p>
            </Reveal>
          )}
          <Reveal delay={200}>
            <a
              href={CONTACT.whatsappHref(pilgrimage.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-9 ${BTN_PRIMARY}`}
            >
              {pilgrimage.ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
