import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import { travelStyles } from "@/data/campingContent";
import "./TravelStyleSection.css";

const TONES = ["dusk", "forest", "night", "snow"] as const;

export default function TravelStyleSection() {
  return (
    <section id="styles" className="cmp-section cmp-section--beige cmp-styles" aria-labelledby="cmp-styles-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-styles-title"
          kicker="Travel styles"
          title="Camping for Every Travel Style"
          lead="The same country feels different depending on who you're with. Start from the kind of trip you want."
        />
        <ul className="cmp-styles__grid">
          {travelStyles.map((s, i) => (
            <li key={s.id} className="cmp-style" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <div className="cmp-style__media">
                <CampImage src={s.image} alt="" tone={TONES[i % TONES.length]} loading="lazy" sizes="(max-width: 767px) 92vw, 46vw" />
              </div>
              <div className="cmp-style__body">
                <h3 className="cmp-style__title">{s.title}</h3>
                <p className="cmp-style__tagline">{s.tagline}</p>
                <p className="cmp-style__places">
                  <span className="sr-only">Suggested destinations: </span>
                  {s.places.join(" • ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
