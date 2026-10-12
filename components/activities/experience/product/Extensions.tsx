import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTACT } from "../site";
import { BTN_PRIMARY, CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";

/** Optional add-on journeys ("Muktinath + Pokhara") with a custom-pilgrimage CTA. */
export default function Extensions({ tour }: { tour: HelicopterProductTour }) {
  const { extensions } = tour;
  if (!extensions) return null;

  return (
    <section aria-labelledby="extensions-title" className="bg-[#F8F6F1] pb-16 sm:pb-20">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="extensions-title" eyebrow="Combine & Extend" title={extensions.title} intro={extensions.intro} />
        </Reveal>

        <ul className="mt-10 grid gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {extensions.items.map((x, i) => {
            const card = (
              <article className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-[22px] bg-gradient-to-br from-[#123653] to-[#071421] p-6 text-white">
                {x.image?.src && (
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    <PageImageFill image={x.image} sizes="(min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw" />
                  </div>
                )}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071421]/90 via-[#071421]/35 to-transparent" />
                <div className="relative">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F4A300] text-[#0C1D30]">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className={`${SERIF} mt-3 text-[22px] font-medium`}>{x.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-6 text-white/75">{x.text}</p>
                </div>
              </article>
            );
            return (
              <li key={x.title}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  {x.href ? (
                    <Link href={x.href} className="block h-full rounded-[22px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4A300]">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-8 flex justify-center">
          <a
            href={CONTACT.whatsappHref(extensions.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${BTN_PRIMARY}`}
          >
            {extensions.ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
