import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import { IconInfo } from "../shared/Icons";
import { farWestGroups } from "@/data/campingContent";
import "./FarWestSection.css";

export default function FarWestSection() {
  return (
    <section id="farwest" className="cmp-far" aria-labelledby="cmp-far-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-far-title"
          tone="light"
          kicker="Dolpo, Rara, Humla & the Far West"
          title="Nepal Beyond the Familiar"
          lead="Long flights to small airstrips, days without roads, and valleys that see few visitors in a year. This is expedition country — and some of the most rewarding camping in Nepal."
        />
      </div>
      <div className="cmp-container">
        <ul className="cmp-far__panels">
          {farWestGroups.map((g, i) => (
            <li key={g.title} className="cmp-far__panel" data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
              {g.image && (
                <CampImage src={g.image} alt={g.imageAlt ?? ""} tone={i % 2 ? "lake" : "earth"} loading="lazy" sizes="(max-width: 767px) 92vw, (max-width: 1100px) 46vw, 24vw" />
              )}
              <div className="cmp-far__shade" aria-hidden="true" />
              <div className="cmp-far__body">
                <h3 className="cmp-far__title">{g.title}</h3>
                <ul className="cmp-far__places">
                  {g.places.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <p className="cmp-note cmp-note--light">
          <IconInfo size={16} />
          Dolpo, Humla and parts of the Far West include restricted areas with special permit and group requirements. Access depends on flights, weather and trail conditions.
        </p>
      </div>
    </section>
  );
}
