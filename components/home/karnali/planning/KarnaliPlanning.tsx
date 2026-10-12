import KarnaliRevealItem from "../info/KarnaliRevealItem";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliAccess, karnaliSeasons } from "@/data/karnali/travel-info";
import "../info/karnali-info.css";

export default function KarnaliPlanning() {
  return (
    <section
      id="karnali-planning"
      className="karnali-root karnali-section karnali-info-dark"
      aria-labelledby="karnali-planning-heading"
    >
      <span className="karnali-num">11</span>

      <div className="karnali-section-inner">
        <KarnaliSectionHeading
          id="karnali-planning-heading"
          eyebrow="PLAN YOUR TRIP"
          heading="When to go"
          goldWord="& how to get there."
          sectionNumber="11 / PLANNING"
          description="Karnali's seasons and access routes shape every itinerary. Here is what to expect before you book."
          light
        />

        <h3 className="karnali-info-subheading karnali-info-subheading-light">
          Best time to visit
        </h3>
        <ul className="karnali-season-grid">
          {karnaliSeasons.map((s, i) => (
            <KarnaliRevealItem key={s.season} delay={i * 80} className="karnali-season-card">
              <div className="karnali-season-top">
                <span className="karnali-season-name">{s.season}</span>
                <span className={`karnali-season-rating karnali-rating-${s.rating.toLowerCase()}`}>
                  {s.rating}
                </span>
              </div>
              <p className="karnali-season-months">{s.months}</p>
              <p className="karnali-season-text">{s.description}</p>
            </KarnaliRevealItem>
          ))}
        </ul>

        <h3 className="karnali-info-subheading karnali-info-subheading-light">
          How to reach Karnali
        </h3>
        <ol className="karnali-access-list">
          {karnaliAccess.map((route, i) => (
            <KarnaliRevealItem key={route.title} delay={i * 80} className="karnali-access-item">
              <span className="karnali-access-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="karnali-access-title">{route.title}</h4>
                <p className="karnali-access-text">{route.description}</p>
              </div>
            </KarnaliRevealItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
