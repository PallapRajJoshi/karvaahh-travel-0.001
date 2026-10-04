import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour, RelatedTour } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/**
 * Related experiences. Tours with a live page (or an in-page option) link
 * there; the rest link to the enquiry section so no card leads to a 404.
 */
export default function RelatedTours({ tour }: { tour: HelicopterProductTour }) {
  return (
    <section aria-labelledby="related-title" className={`${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="related-title" eyebrow="More Helicopter Journeys" title="Related Experiences" />
        </Reveal>
        <ul className="mt-12 grid gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {tour.relatedTours.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <RelatedCard r={r} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RelatedCard({ r }: { r: RelatedTour }) {
  const href = r.href ?? "#enquire";
  const isRoute = href.startsWith("/");
  const label = r.href ? "View" : "Enquire";
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#123653] to-[#071421]">
        {r.image?.src && (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <PageImageFill image={r.image} sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw" />
          </div>
        )}
        {!r.href && (
          <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            On request
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`${SERIF} text-[19px] font-medium leading-snug text-[#0B2942]`}>{r.title}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-[#5B6B7B]">{r.text}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#C98500]">
          {label} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  const cls =
    "group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0B2942]/[0.08] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(11,41,66,0.45)]";

  return isRoute ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {body}
    </a>
  );
}
