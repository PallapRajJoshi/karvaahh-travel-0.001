import { Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import ParallaxImage from "../ParallaxImage";
import { CONTAINER, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/** Editorial storytelling section: asymmetric, overlapping parallax images + copy (optional). */
export default function Story({ tour }: { tour: HelicopterProductTour }) {
  const { story } = tour;
  if (!story) return null;
  const [main, inset] = story.images;

  return (
    <section aria-labelledby="story-title" className={`${SECTION_Y} overflow-hidden bg-white`}>
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20`}>
        {/* Overlapping images */}
        <div className="relative pb-16 sm:pb-24 lg:pb-28">
          <Reveal>
            <ParallaxImage
              image={main}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="aspect-[4/3] w-[88%] rounded-[28px] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.45)]"
            />
          </Reveal>
          <Reveal delay={180} className="absolute bottom-0 right-0 w-[52%]">
            <ParallaxImage
              image={inset}
              sizes="(min-width: 1024px) 26vw, 50vw"
              className="aspect-[4/5] rounded-[24px] border-[6px] border-white shadow-[0_30px_60px_-24px_rgba(11,41,66,0.5)]"
            />
          </Reveal>
          <span
            aria-hidden="true"
            className="absolute -left-6 top-10 -z-10 hidden h-40 w-40 rounded-full bg-[#F4A300]/15 blur-2xl sm:block"
          />
        </div>

        <div>
          <Reveal>
            <SectionHeading id="story-title" eyebrow={story.eyebrow} title={story.title} />
          </Reveal>
          <Reveal delay={120} className="mt-6 space-y-5 text-[15.5px] leading-8 text-[#4A5B6C]">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {story.points.map((pt, i) => (
              <li key={pt}>
                <Reveal delay={160 + i * 60} className="flex items-start gap-2.5 text-[14.5px] font-medium text-[#0B2942]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                  {pt}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
