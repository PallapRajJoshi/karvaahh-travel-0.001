import Image from "next/image";
import Link from "next/link";
import { madheshJourney } from "@/data/madhesh/journey";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-journey.css";

export default function MadheshJourney() {
  return (
    <section className="madhesh-journey" aria-label="Suggested route through Madhesh">
      <MadheshSectionHeading
        eyebrow="The Route"
        heading={
          <>
            From sacred cities to
            <br />
            living landscapes.
          </>
        }
      />

      <ol className="madhesh-journey__route">
        {madheshJourney.map((stop) => (
          <li className="madhesh-journey__stop" key={stop.number}>
            <div className="madhesh-journey__stop-media">
              <Image
                src={stop.image}
                alt={stop.place}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="madhesh-journey__stop-image"
              />
            </div>
            <span className="madhesh-journey__stop-number">
              {stop.number}
            </span>
            <h3 className="madhesh-journey__stop-name">{stop.place}</h3>
            <p className="madhesh-journey__stop-desc">{stop.description}</p>
          </li>
        ))}
      </ol>

      <div className="madhesh-journey__cta">
        <Link href="#cta" className="madhesh-btn madhesh-btn--outline-dark">
          Plan your Madhesh journey <span className="madhesh-arrow">↗</span>
        </Link>
      </div>
    </section>
  );
}
