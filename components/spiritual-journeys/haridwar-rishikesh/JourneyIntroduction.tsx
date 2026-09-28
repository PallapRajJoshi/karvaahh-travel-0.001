import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { INTRO_IMAGE, SECTION } from "./data/config";
import "./journey-introduction.css";

export default function JourneyIntroduction() {
  return (
    <section id={SECTION.intro} className="hry-section hry-intro" aria-labelledby="hry-intro-title">
      <div className="hry-container hry-intro__grid">
        <div className="hry-intro__text">
          <SectionHeading
            id="hry-intro-title"
            title="Haridwar & Rishikesh: a journey of faith, devotion and spiritual renewal"
          />
          <div className="hry-intro__body">
            <p className="hry-intro__lead">
              <strong>Haridwar &amp; Rishikesh Yatra</strong> is a pilgrimage to two of the most
              sacred destinations in Uttarakhand, known for their deep religious significance,
              ancient temples and serene Himalayan surroundings.
            </p>
            <p>
              <strong>Haridwar</strong>, on the banks of the holy River Ganga, is one of the seven
              sacred cities of Hinduism. It is best known for <strong>Har Ki Pauri</strong>, where
              devotees gather for the Ganga Aarti, holy bathing and prayer.
            </p>
            <p>
              The journey continues upstream to <strong>Rishikesh</strong>, popularly called the{" "}
              <em>Yoga Capital of the World</em>, set in the Himalayan foothills along the Ganga. It
              is home to <strong>Triveni Ghat, Parmarth Niketan, Neelkanth Mahadev Temple</strong>,{" "}
              <strong>Ram Jhula</strong> and the area around <strong>Lakshman Jhula</strong> — places
              for meditation, yoga, reflection and temple visits.
            </p>
            <p>
              Along the way you can attend the Ganga Aarti, explore ancient ashrams, visit sacred
              temples and spend quiet time by the river and the surrounding hills. Depending on the
              itinerary, the journey can also include <strong>Dehradun</strong> and{" "}
              <strong>Mussoorie</strong>.
            </p>
            <p>
              Combining devotion, sacred river rituals, cultural heritage and rest, the yatra is a
              meaningful pilgrimage for families, devotees and spiritual travellers alike.
            </p>
          </div>
        </div>

        <figure className="hry-intro__figure">
          <div className="hry-intro__frame">
            <Image
              src={INTRO_IMAGE.src}
              alt={INTRO_IMAGE.alt}
              fill
              sizes="(min-width: 960px) 40vw, 100vw"
              className="hry-intro__img"
            />
          </div>
          <figcaption className="hry-intro__caption">
            The Ganga at Rishikesh, where the river leaves the hills
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
