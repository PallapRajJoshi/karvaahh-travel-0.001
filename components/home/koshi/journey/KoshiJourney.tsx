import Link from "next/link";
import "./koshi-journey.css";
import { koshiJourney } from "@/data/koshi/journey";

export default function KoshiJourney() {
  return (
    <section
      className="koshi-journey"
      aria-labelledby="koshi-journey-title"
    >
      {/* Background atmosphere */}
      <div className="koshi-journey__bg" aria-hidden="true">
        <span className="koshi-journey__mountain mountain-1" />
        <span className="koshi-journey__mountain mountain-2" />
        <span className="koshi-journey__mountain mountain-3" />
      </div>

      <div className="koshi-shell koshi-journey__shell">

        {/* Header */}
        <div className="koshi-journey__header">
          <div className="koshi-journey__eyebrow">
            <span />
            <p>THE KOSHI JOURNEY</p>
          </div>

          <div className="koshi-journey__heading-row">
            <h2 id="koshi-journey-title">
              From the highest mountains
              <br />
              to the <em>living plains.</em>
            </h2>

            <div className="koshi-journey__index">
              <strong>07</strong>
              <span>THE JOURNEY</span>
            </div>
          </div>

          <p className="koshi-journey__intro">
            One journey. Many landscapes. Follow the changing face of
            Koshi from Himalayan peaks and mountain trails to peaceful
            hills, sacred places and wildlife-rich plains.
          </p>
        </div>

        {/* Route */}
        <div className="koshi-journey__route">

          <div
            className="koshi-journey__route-line"
            aria-hidden="true"
          >
            <span />
          </div>

          {koshiJourney.map((stop, index) => (
            <article
              className="koshi-journey-stop"
              key={stop.number}
            >
              <div className="koshi-journey-stop__marker">
                <span>{stop.number}</span>
              </div>

              <div className="koshi-journey-stop__content">
                <span className="koshi-journey-stop__step">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{stop.title}</h3>

                <p>{stop.description}</p>

                <span className="koshi-journey-stop__arrow">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="koshi-journey__footer">
          <Link
            href="/packages"
            className="koshi-journey__button"
          >
            <span>Plan your Koshi journey</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>

      {/* Bottom label */}
      <span
        className="koshi-journey__vertical"
        aria-hidden="true"
      >
        MOUNTAINS → HILLS → PLAINS
      </span>
    </section>
  );
}