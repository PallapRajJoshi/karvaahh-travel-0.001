import Link from "next/link";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniJourney } from "@/data/lumbini/journey";
import "./lumbini-journey.css";

export default function LumbiniJourney() {
  return (
    <section
      className="lumbini-journey"
      id="journey"
      aria-label="Suggested route through Lumbini Province"
    >
      <div className="lumbini-journey__inner">
        <LumbiniSectionHeading
          index="09"
          eyebrow="Suggested Route"
          heading="From sacred gardens"
          emphasis="to wild forests."
        />

        <ol className="lumbini-journey__timeline">
          {lumbiniJourney.map((stop) => (
            <li key={stop.number} className="lumbini-journey__stop">
              <div className="lumbini-journey__stop-marker" aria-hidden="true">
                <span>{stop.number}</span>
              </div>
              <div className="lumbini-journey__stop-body">
                <h3 className="lumbini-journey__stop-title">{stop.title}</h3>
                <p className="lumbini-journey__stop-description">
                  {stop.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="lumbini-journey__info">
          <div className="lumbini-journey__info-block">
            <span className="lumbini-journey__info-label">Best Time</span>
            <p className="lumbini-journey__info-text">
              October–March is ideal for Lumbini, pilgrimage and Terai
              wildlife. October–November and March–May suit hill landscapes,
              trekking and outdoor exploration.
            </p>
          </div>
          <div className="lumbini-journey__info-block">
            <span className="lumbini-journey__info-label">
              Getting There
            </span>
            <p className="lumbini-journey__info-text">
              Gautam Buddha International Airport at Bhairahawa serves as the
              principal aviation gateway, with road connectivity to
              Kathmandu, Pokhara, Chitwan, India and the rest of Nepal.
            </p>
          </div>
        </div>

        <div className="lumbini-journey__cta-row">
          <Link href="/contact" className="lumbini-journey__cta">
            Plan your Lumbini journey
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
