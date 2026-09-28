import Image from "next/image";
import { VAISHNO_STOPS } from "../data/content";
import { IMAGES } from "../data/images";
import { SectionHeading } from "../SectionHeading";
import "./VaishnoDeviJourney.css";

export function VaishnoDeviJourney() {
  return (
    <section id="vaishno-devi-journey" className="avd-section avd-vdj" aria-labelledby="avd-vdj-title">
      <div className="avd-wrap avd-vdj__grid">
        <div className="avd-vdj__intro">
          <SectionHeading
            id="avd-vdj-title"
            title="The sacred journey to Mata Vaishno Devi"
            lede="From Katra, the traditional walking route climbs roughly 12–14 km through the Trikuta Hills to the Bhawan, depending on the route and reference point."
          />
          <div className="avd-vdj__media">
            <Image
              src={IMAGES.vaishnoPath.src}
              alt={IMAGES.vaishnoPath.alt}
              fill
              sizes="(min-width: 960px) 30rem, 100vw"
              className="avd-vdj__img"
            />
          </div>
        </div>

        <ol className="avd-vdj__steps" aria-label="Stages of the Vaishno Devi pilgrimage">
          {VAISHNO_STOPS.map((s, i) => (
            <li key={s.name} className="avd-vdj__step">
              <span className="avd-vdj__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="avd-vdj__name">{s.name}</h3>
                <p className="avd-vdj__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
