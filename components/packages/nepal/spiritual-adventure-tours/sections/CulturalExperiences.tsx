import { headings } from "../config/page.config";
import { culturalExperiences } from "../data/experiences";
import { SectionHeading } from "../ui/SectionHeading";
import { ExperienceTile } from "../ui/cards/ExperienceTile";
import "./cards.css";

export function CulturalExperiences({ anchor }: { anchor: string }) {
  const h = headings.culture;
  return (
    <section id={anchor} className="nsa-section nsa-culture" aria-labelledby="nsa-culture-title">
      <div className="nsa-container">
        <SectionHeading id="nsa-culture-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
        <div className="nsa-mosaic">
          {culturalExperiences.map((e, i) => (
            <ExperienceTile key={e.id} item={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
