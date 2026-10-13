import Image from "next/image";
import type { CSSProperties } from "react";
import { Landmark, Leaf, Mountain, Sunrise, Users, Waves, type LucideIcon } from "lucide-react";
import { anchors } from "../config";
import { highlightFeatures, highlightPanels, type HighlightIcon } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const icons: Record<HighlightIcon, LucideIcon> = {
  users: Users,
  landmark: Landmark,
  waves: Waves,
  sunrise: Sunrise,
  leaf: Leaf,
  mountain: Mountain,
};

export function Highlights() {
  return (
    <section id={anchors.highlights} className="nbc-section nbc-section--tint" aria-labelledby="nbc-highlights-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-highlights-title"
          eyebrow="On the Trail"
          title="What Makes a Himalayan Base Camp Trek Extraordinary?"
          subtitle="Every route is different — these are the moments that draw trekkers back, and where you are most likely to find them."
        />

        <ul className="nbc-panels">
          {highlightPanels.map((p, i) => (
            <li
              key={p.title}
              className={`nbc-panel${i === 0 ? " nbc-panel--wide" : ""}`}
              data-reveal=""
              style={{ "--nbc-i": i } as CSSProperties}
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes={i === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 40vw"}
                style={p.image.focus ? { objectPosition: p.image.focus } : undefined}
              />
              <div className="nbc-panel__text">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="nbc-panel__where">{p.where}</span>
              </div>
            </li>
          ))}
        </ul>

        <ul className="nbc-features">
          {highlightFeatures.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <li key={f.title} className="nbc-feature" data-reveal="" style={{ "--nbc-i": i % 3 } as CSSProperties}>
                <span className="nbc-feature__icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
