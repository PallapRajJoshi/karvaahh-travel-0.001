import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import ScrollRail from "../shared/ScrollRail";
import { IconTent } from "../shared/Icons";
import { weekendEscapes } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import "./WeekendEscapesSection.css";

export default function WeekendEscapesSection() {
  return (
    <section id="weekend" className="cmp-section cmp-section--snow cmp-weekend" aria-labelledby="cmp-weekend-title">
      <div className="cmp-container cmp-weekend__top">
        <SectionHeading
          id="cmp-weekend-title"
          kicker="Kathmandu weekend camping"
          title="Weekend Escape from Kathmandu"
          lead="Hill ridges, pine forest, lakes and farming villages on the valley rim and just beyond. Most can be reached the same morning you leave, depending on roads and traffic."
        />
        <div className="cmp-weekend__photo" data-reveal>
          <div className="cmp-weekend__photo-inner" data-parallax="0.06">
            <CampImage
              src={campingImages.sections.weekend}
              alt="A small tent on a forested ridge above the Kathmandu Valley at dawn"
              tone="dusk" loading="lazy" sizes="(max-width: 860px) 92vw, 40vw"
            />
          </div>
        </div>
      </div>

      <ScrollRail label="Weekend camping spots near Kathmandu" className="cmp-weekend__rail">
        {weekendEscapes.map((e) => (
          <article key={e.name} className="cmp-escape">
            <span className="cmp-escape__road" aria-hidden="true" />
            <span className="cmp-escape__icon" aria-hidden="true"><IconTent size={20} /></span>
            <h3 className="cmp-escape__name">{e.name}</h3>
            <ul className="cmp-escape__tags">
              {e.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </ScrollRail>
    </section>
  );
}
