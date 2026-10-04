import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import ParallaxImage from "../ParallaxImage";
import { CONTAINER, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

export default function Overview({ tour }: { tour: HelicopterProductTour }) {
  const { overview } = tour;
  return (
    <section id="overview" aria-labelledby="overview-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16`}>
        <div>
          <Reveal>
            <SectionHeading id="overview-title" eyebrow="Overview" title={overview.title} />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[17px] font-medium leading-8 text-[#0B2942] sm:text-[18px]">{overview.lead}</p>
          </Reveal>
          <Reveal delay={160} className="mt-5 space-y-5 text-[15.5px] leading-8 text-[#4A5B6C]">
            {overview.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-[#F4A300]/30 bg-[#FFF8E8] px-5 py-4 text-[14px] leading-6 text-[#6B5418]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
              <span>
                <strong className="font-semibold">About landings:</strong> {tour.landingNote}
              </span>
            </p>
          </Reveal>

          <ul className="mt-7 flex flex-wrap gap-3">
            {overview.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#0B2942]/15 bg-white px-4 py-2 text-[13.5px] font-medium text-[#0B2942] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B2942]"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="lg:sticky lg:top-[200px] lg:self-start">
          <figure>
            <ParallaxImage
              image={overview.image}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="aspect-[4/5] rounded-[28px] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.45)] sm:aspect-[16/10] lg:aspect-[4/3]"
            />
            <figcaption className="mt-3 text-[13px] text-[#5B6B7B]">{overview.imageCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
