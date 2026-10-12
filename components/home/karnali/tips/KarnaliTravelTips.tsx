import KarnaliRevealItem from "../info/KarnaliRevealItem";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliTips } from "@/data/karnali/travel-info";
import "../info/karnali-info.css";

export default function KarnaliTravelTips() {
  return (
    <section
      id="karnali-travel-tips"
      className="karnali-root karnali-section karnali-info-light"
      aria-labelledby="karnali-tips-heading"
    >
      <span className="karnali-num karnali-num-dark">13</span>

      <div className="karnali-section-inner">
        <KarnaliSectionHeading
          id="karnali-tips-heading"
          eyebrow="TRAVEL WISELY"
          heading="Practical tips"
          goldWord="for remote Karnali."
          sectionNumber="13 / RESPONSIBLE TRAVEL"
          description="Remote routes, small-aircraft flights, permits and seasonal access all need advance planning. Travel prepared and leave the high valleys as you found them."
        />

        <ul className="karnali-tips-grid">
          {karnaliTips.map((tip, i) => (
            <KarnaliRevealItem key={tip.title} delay={i * 80} className="karnali-tip-card">
              <h3 className="karnali-tip-title">{tip.title}</h3>
              <ul className="karnali-tip-points">
                {tip.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </KarnaliRevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
