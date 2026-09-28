import Image from "next/image";
import { PEAKS } from "./data/content";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Compass } from "./shared/icons";
import "./ApiNampaPeaks.css";

export default function ApiNampaPeaks() {
  return (
    <section className="an-section an-section--dark an-peaks" id="peaks" aria-labelledby="an-peaks-title">
      <div className="an-container">
        <SectionHeading
          id="an-peaks-title"
          eyebrow="The mountains"
          title="Surrounded by the Giants of Far-Western Nepal"
          intro="The Api massif and its neighbours are among the least-visited big peaks in the Himalaya. Which summits you see depends on where you stand and the day’s weather — no single viewpoint shows them all."
        />

        <ul className="an-peaks__grid" role="list">
          {PEAKS.map((peak, i) => (
            <Reveal as="li" key={peak.id} className={`an-peak${i === 0 ? " an-peak--lead" : ""}`} delay={i * 90}>
              <article className="an-peak__card">
                <div className="an-peak__media">
                  <Image
                    src={peak.image.src}
                    alt={peak.image.alt}
                    fill
                    sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 40vw"}
                    className="an-peak__image"
                  />
                  {peak.elevation ? (
                    <p className="an-peak__elev">
                      {peak.elevation}
                      {!peak.elevationVerified ? <span> approx.</span> : null}
                    </p>
                  ) : null}
                </div>
                <div className="an-peak__body">
                  <p className="an-peak__range">{peak.range}</p>
                  <h3 className="an-peak__name">{peak.name}</h3>
                  <p className="an-peak__desc">{peak.description}</p>
                  <p className="an-peak__vis">
                    <Compass />
                    <span>{peak.visibility}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
