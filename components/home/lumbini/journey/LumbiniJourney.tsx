import Link from "next/link";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniJourney, lumbiniRoutes } from "@/data/lumbini/journey";
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
          index="11"
          eyebrow="Suggested Routes"
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

        <div className="lumbini-journey__routes">
          <h3 className="lumbini-journey__routes-title">More route ideas</h3>
          <ul className="lumbini-journey__routes-grid">
            {lumbiniRoutes.map((route) => (
              <li key={route.title} className="lumbini-journey__route lumbini-reveal">
                <span className="lumbini-journey__route-duration">{route.duration}</span>
                <h4 className="lumbini-journey__route-title">{route.title}</h4>
                <p className="lumbini-journey__route-stops">{route.stops.join(" → ")}</p>
                <p className="lumbini-journey__route-for">Best for: {route.bestFor}</p>
              </li>
            ))}
          </ul>
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
