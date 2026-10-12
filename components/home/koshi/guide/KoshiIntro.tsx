import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import {
  koshiBelts,
  koshiFacts,
  koshiProtectedAreas,
  koshiRivers,
  koshiWhyVisit,
} from "@/data/koshi/guide";
import "./koshi-guide.css";

export default function KoshiIntro() {
  return (
    <section
      id="overview"
      className="koshi-guide koshi-guide--cream"
      aria-labelledby="koshi-intro-title"
    >
      <div className="koshi-shell">
        <div className="koshi-guide__split">
          <KoshiSectionHeading
            eyebrow="PROVINCE AT A GLANCE"
            titleId="koshi-intro-title"
            title={
              <>
                Nepal&apos;s far east, from <em>Everest to the plains.</em>
              </>
            }
          />

          <div className="koshi-guide__copy">
            <p>
              Koshi Province is the easternmost of Nepal&apos;s seven provinces,
              named after the Koshi — the country&apos;s largest river system.
              It rises from the Terai plains of Jhapa, Morang and Sunsari
              through tea-covered middle hills to the summit of Mount Everest
              and the Kanchenjunga massif on the borders of Tibet and Sikkim.
            </p>
            <p>
              That range makes Koshi one of the most varied regions in the
              Himalaya: high-altitude treks and Sherpa monasteries, Ilam&apos;s
              tea gardens and sunrise ridges, sacred caves and Devi shrines, and
              Koshi Tappu&apos;s wetlands for birdlife and wild water buffalo.
            </p>
          </div>
        </div>

        <dl className="koshi-guide__facts">
          {koshiFacts.map((fact) => (
            <div key={fact.label} className="koshi-guide__fact koshi-reveal">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="koshi-guide__pair">
          <div className="koshi-guide__panel koshi-reveal">
            <h3>Major rivers</h3>
            <ul className="koshi-guide__list">
              {koshiRivers.map((river) => (
                <li key={river}>{river}</li>
              ))}
            </ul>
          </div>
          <div className="koshi-guide__panel koshi-reveal">
            <h3>Protected areas</h3>
            <ul className="koshi-guide__list">
              {koshiProtectedAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="koshi-guide__belts" aria-label="Geographic regions of Koshi Province">
          {koshiBelts.map((belt, index) => (
            <li key={belt.title} className="koshi-guide__card koshi-reveal">
              <span className="koshi-guide__num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{belt.title}</h3>
              <p className="koshi-guide__places">{belt.places}</p>
              <p>{belt.description}</p>
            </li>
          ))}
        </ul>

        <div className="koshi-guide__why">
          <h3 className="koshi-guide__subtitle">Why visit Koshi Province</h3>
          <ul className="koshi-guide__grid koshi-guide__grid--4">
            {koshiWhyVisit.map((item) => (
              <li key={item.title} className="koshi-guide__why-item koshi-reveal">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
