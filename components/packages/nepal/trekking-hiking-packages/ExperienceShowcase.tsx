import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import ParallaxImage from "@/components/activities/experience/ParallaxImage";
import { SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { EditorialExperience, FEATURES } from "@/data/trekking/content";

/**
 * The diversity of Nepal's trails: large editorial rows that alternate
 * image and text, followed by compact feature tiles.
 */
export default function ExperienceShowcase({ editorial, features }: { editorial: EditorialExperience[]; features: typeof FEATURES }) {
  return (
    <section id="experiences" aria-labelledby="experiences-title" className={`${SECTION_Y} overflow-hidden bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            id="experiences-title"
            eyebrow="On the Trail"
            title="Every Trail Tells a Different Story"
            intro="A trek in Nepal is far more than a walk to a viewpoint. Each day brings new landscapes, communities and moments that stay with you long after the boots come off."
            center
          />
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {editorial.map((e, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={e.id} aria-labelledby={`exp-${e.id}`} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <Reveal variant={flip ? "slide-right" : "slide-left"} className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <ParallaxImage
                      image={e.image}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="aspect-[4/3] rounded-[28px] shadow-[0_40px_80px_-50px_rgba(7,20,33,0.7)] sm:aspect-[16/10]"
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-4 hidden h-24 w-24 rounded-[22px] border-2 border-[#F4A300]/60 lg:block ${flip ? "-left-4" : "-right-4"}`}
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C98500]">
                    <span className="mr-3 text-[#0B2942]/30">0{i + 1}</span>
                    {e.eyebrow}
                  </p>
                  <h3 id={`exp-${e.id}`} className={`${SERIF} mt-4 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-[#0B2942] sm:text-[38px]`}>
                    {e.title}
                  </h3>
                  <p className="mt-5 text-[15.5px] leading-7 text-[#5B6B7B]">{e.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[14.5px] font-medium text-[#0B2942]">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A300]/15 text-[#C98500]">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>

        <ul className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const body = (
              <>
                {f.image && (
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      <PageImageFill image={f.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                  </div>
                )}
                <div className="flex flex-1 gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B2942] text-[#F4A300]">
                    <PageIcon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-1 text-[16px] font-semibold text-[#0B2942]">
                      {f.title}
                      {f.href && <ArrowUpRight className="h-4 w-4 text-[#C98500]" aria-hidden="true" />}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{f.text}</p>
                  </div>
                </div>
              </>
            );
            const cls =
              "group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0B2942]/[0.08] bg-[#FBFAF7] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_44px_-30px_rgba(11,41,66,0.45)]";
            return (
              <li key={f.title}>
                <Reveal delay={(i % 3) * 90} className="h-full">
                  {f.href ? (
                    <Link href={f.href} className={cls}>
                      {body}
                    </Link>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
