import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import {
  koshiAltitudeTips,
  koshiReach,
  koshiResponsibleTips,
  koshiSeasons,
} from "@/data/koshi/guide";
import "./koshi-guide.css";

export default function KoshiPlan() {
  return (
    <section
      id="plan-your-visit"
      className="koshi-guide"
      aria-labelledby="koshi-plan-title"
    >
      <div className="koshi-shell">
        <KoshiSectionHeading
          eyebrow="PLAN YOUR VISIT"
          titleId="koshi-plan-title"
          title={
            <>
              When to go, <em>how to get there.</em>
            </>
          }
          description="High-altitude treks, mountain flights, permits and seasonal road conditions all need advance planning in Koshi. Here are the essentials."
        />

        <h3 className="koshi-guide__subtitle">Best time to visit</h3>
        <ul className="koshi-guide__grid koshi-guide__grid--4">
          {koshiSeasons.map((season) => (
            <li key={season.months} className="koshi-guide__card koshi-reveal">
              <span className="koshi-guide__badge">{season.label}</span>
              <h4>{season.months}</h4>
              <p>{season.text}</p>
            </li>
          ))}
        </ul>

        <h3 className="koshi-guide__subtitle">How to reach Koshi Province</h3>
        <div className="koshi-guide__grid koshi-guide__grid--3">
          {koshiReach.map((route) => (
            <div key={route.title} className="koshi-guide__panel koshi-reveal">
              <h4>{route.title}</h4>
              <ul className="koshi-guide__list">
                {route.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="koshi-guide__pair" id="trekking-preparation">
          <div className="koshi-guide__panel koshi-guide__panel--alert koshi-reveal">
            <h3>Trekking preparation &amp; altitude awareness</h3>
            <ul className="koshi-guide__list">
              {koshiAltitudeTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="koshi-guide__panel koshi-reveal">
            <h3>Responsible tourism</h3>
            <ul className="koshi-guide__list koshi-guide__list--check">
              {koshiResponsibleTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
