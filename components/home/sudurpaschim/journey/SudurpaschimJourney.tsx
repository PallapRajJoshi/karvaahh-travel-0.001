import Image from "next/image";
import Link from "next/link";
import { sudurpaschimJourney } from "@/data/sudurpaschim/journey";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-journey.css";

export default function SudurpaschimJourney() {
  return (
    <section
      id="sp-journey"
      className="sp-journey"
      aria-labelledby="sp-journey-heading"
    >
      <div className="sp-container sp-journey__inner">
        <SudurpaschimSectionHeading
          index="10"
          eyebrow="The Route"
          heading="From the plains to the high Himalayas."
        />

        <ol className="sp-journey__route">
          {sudurpaschimJourney.map((stop) => (
            <li className="sp-journey__stop" key={stop.number}>
              <div className="sp-journey__stop-media">
                <Image
                  src={stop.image}
                  alt={stop.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 20vw"
                  className="sp-journey__stop-image"
                />
              </div>
              <span className="sp-journey__stop-number">{stop.number}</span>
              <h3 className="sp-journey__stop-title">{stop.title}</h3>
              <p className="sp-journey__stop-desc">{stop.description}</p>
            </li>
          ))}
        </ol>

        <div className="sp-journey__cta">
          <Link href="/plan-your-trip" className="sp-btn sp-btn--primary">
            Plan Your Sudurpaschim Journey <span className="sp-arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
