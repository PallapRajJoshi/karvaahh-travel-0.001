import Image from "next/image";
import { gandakiJourney } from "@/data/gandaki/journey";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-journey.css";

export default function GandakiJourney() {
  return (
    <section className="gandaki-journey" aria-label="A journey through Gandaki">
      <GandakiSectionHeading
        index="10"
        eyebrow="THE ROUTE"
        heading="From lakeside mornings"
        emphasis="to Himalayan silence."
      />

      <ol className="gandaki-journey__route">
        {gandakiJourney.map((stop) => (
          <li className="gandaki-journey-stop" key={stop.id}>
            <div className="gandaki-journey-stop__media">
              <Image
                src={stop.image}
                alt={stop.alt}
                fill
                sizes="(max-width: 768px) 90vw, 20vw"
                className="gandaki-journey-stop__image"
              />
            </div>
            <span className="gandaki-journey-stop__index">{stop.index}</span>
            <h3 className="gandaki-journey-stop__title">{stop.title}</h3>
            <p className="gandaki-journey-stop__description">{stop.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
