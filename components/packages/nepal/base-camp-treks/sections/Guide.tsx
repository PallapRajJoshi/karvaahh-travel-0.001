import Image from "next/image";
import type { CSSProperties } from "react";
import { Backpack, FileText, HeartPulse, ShieldCheck, type LucideIcon } from "lucide-react";
import { anchors } from "../config";
import { guideBlocks, seasonNote, seasons } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const icons: Record<(typeof guideBlocks)[number]["icon"], LucideIcon> = {
  heart: HeartPulse,
  backpack: Backpack,
  file: FileText,
  shield: ShieldCheck,
};

const toneLabel = { best: "Peak season", good: "Possible on some routes", hard: "Difficult on most routes" } as const;

export function Guide() {
  return (
    <section id={anchors.guide} className="nbc-section" aria-labelledby="nbc-guide-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-guide-title"
          eyebrow="Trekking Guide"
          title="Seasons & Preparation for High-Altitude Treks"
          subtitle="The practical essentials for planning a safe, enjoyable base camp trek."
        />

        <h3 className="nbc-subheading" data-reveal="">
          Best time for base camp treks
        </h3>
        <ol className="nbc-seasons">
          {seasons.map((s, i) => (
            <li
              key={s.id}
              className={`nbc-season nbc-season--${s.tone}`}
              data-reveal=""
              style={{ "--nbc-i": i } as CSSProperties}
            >
              <span className="nbc-season__tag">{toneLabel[s.tone]}</span>
              <h4>{s.name}</h4>
              <p className="nbc-season__months">{s.months}</p>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="nbc-note" data-reveal="">
          {seasonNote}
        </p>

        <div className="nbc-guide">
          <figure className="nbc-guide__figure" data-reveal="">
            <Image
              src="/images/home/treakking.jpg"
              alt="Trekking gear laid out: backpack, boots, poles, down jacket, sleeping bag and map"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <figcaption>Pack light, but pack for the altitude.</figcaption>
          </figure>

          <div className="nbc-guide__blocks">
            {guideBlocks.map((b, i) => {
              const Icon = icons[b.icon];
              return (
                <article key={b.id} className="nbc-guide__block" data-reveal="" style={{ "--nbc-i": i % 2 } as CSSProperties}>
                  <h3>
                    <span className="nbc-feature__icon">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    {b.title}
                  </h3>
                  <p>{b.intro}</p>
                  <ul>
                    {b.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
