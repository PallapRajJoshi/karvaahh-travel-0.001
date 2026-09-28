import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { passes } from "@/data/adventure/everest-three-passes-trek/content";
import { elev } from "@/data/adventure/everest-three-passes-trek/format";
import "./ThreePasses.css";

export default function ThreePasses() {
  return (
    <section className="etp-section etp-section--deep etp-passes" id="passes" aria-labelledby="etp-passes-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-passes-title"
          eyebrow="The heart of the journey"
          title="Cross Three Legendary Himalayan Passes"
          intro="Three crossings above 5,300 metres link the Khumbu's valleys into a single circuit. Each is a full, early-starting day — and each rewards you with a different Himalaya."
        />

        <ol className="etp-passes__list">
          {passes.map((p, i) => (
            <li key={p.id} className="etp-pass" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <article className="etp-pass__card" aria-labelledby={`etp-pass-${p.id}`}>
                <Media image={p.image} sizes="(max-width: 900px) 100vw, 33vw" className="etp-pass__media" />
                <div className="etp-pass__shade" aria-hidden="true" />
                <div className="etp-pass__top">
                  <span className="etp-pass__index">Pass {String(i + 1).padStart(2, "0")}</span>
                  <span className="etp-pass__elev">
                    <span className="etp-sr-only">Elevation </span>
                    {elev(p.elevationM)}
                  </span>
                </div>
                <div className="etp-pass__body">
                  <p className="etp-pass__connects">
                    {p.connects[0]} <span aria-hidden="true">→</span>
                    <span className="etp-sr-only"> to </span> {p.connects[1]}
                  </p>
                  <h3 className="etp-pass__name" id={`etp-pass-${p.id}`}>
                    {p.name} <span>Pass</span>
                  </h3>
                  <p className="etp-pass__tagline">{p.tagline}</p>
                  <p className="etp-pass__desc">{p.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <p className="etp-passes__note">
          Elevations are commonly published figures and vary slightly between sources. Crossing order and timing are
          decided on the trail according to conditions.
        </p>
      </div>
    </section>
  );
}
