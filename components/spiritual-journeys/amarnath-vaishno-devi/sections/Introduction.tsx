import { SectionHeading } from "../SectionHeading";
import "./Introduction.css";

export function Introduction() {
  return (
    <section className="avd-section avd-section--paper avd-intro" aria-labelledby="avd-intro-title">
      <div className="avd-wrap avd-intro__grid">
        <SectionHeading id="avd-intro-title" title="Amarnath & Vaishno Devi: a journey of faith through the Himalayas" />

        <div className="avd-prose avd-intro__body">
          <p className="avd-intro__lead">
            The Amarnath &amp; Vaishno Devi Yatra brings together two of the most revered Hindu pilgrimages in Jammu and
            Kashmir — a journey of devotion, reflection and Himalayan landscapes undertaken by devotees seeking the
            blessings traditionally associated with both shrines.
          </p>
          <p>
            <strong>Shri Amarnath Cave Temple</strong> sits at approximately 3,888 metres above sea level. Here devotees
            worship a naturally formed ice Shivling, regarded by devotees as a sacred manifestation of Lord Shiva. The
            pilgrimage is a high-altitude journey on routes associated with <strong>Pahalgam</strong> and{" "}
            <strong>Baltal</strong>, through spectacular valleys and challenging mountain terrain.
          </p>
          <p>
            <strong>Shri Mata Vaishno Devi Temple</strong> is nestled in the Trikuta Hills near Katra, at approximately
            1,580 metres. Devotees walk roughly 12–14 km on the traditional route, depending on the route and starting
            point, to receive Darshan of the three natural rock formations known as the Pindies.
          </p>
          <p>
            Depending on your itinerary, you can also spend time in Srinagar, Pahalgam and other Kashmir valleys. Both
            pilgrimages require registration with their Shrine Boards; Amarnath also carries medical and other official
            requirements, and all route services are subject to availability and current rules.
          </p>
        </div>
      </div>
    </section>
  );
}
