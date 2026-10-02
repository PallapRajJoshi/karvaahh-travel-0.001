"use client";

import { trekCategories, trekkingDisclaimer } from "@/data/tsho-rolpa/trekking";
import SectionHeading from "../shared/SectionHeading";
import TshoIcon from "../shared/TshoIcon";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Trekking.css";

const categoryIcon = {
  village: "village",
  "lake-trek": "trek",
  "pass-expedition": "peak",
} as const;

export default function Trekking() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-trekking tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="On Foot"
          title="Trekking &amp; Hiking in Rolwaling Valley"
          description="The approach runs via Kathmandu–Charikot–Chetchet, through forested trails and mountain villages, then on to Bedhing and Na Village before the high-altitude push to the lake."
        />

        <ol className="tsho-trekking__timeline">
          {trekCategories.map((category, index) => (
            <li key={category.id} className="tsho-trekking__step tsho-reveal">
              <span className="tsho-trekking__step-index">{index + 1}</span>
              <span className="tsho-trekking__step-icon">
                <TshoIcon name={categoryIcon[category.id]} />
              </span>
              <div>
                <h3 className="tsho-trekking__step-title">{category.title}</h3>
                <p className="tsho-trekking__step-description">{category.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="tsho-trekking__note tsho-reveal">{trekkingDisclaimer}</p>
      </div>
    </section>
  );
}
