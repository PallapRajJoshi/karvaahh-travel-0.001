import Media from "./Media";
import SectionHeading from "./SectionHeading";
import PeaksRail from "./PeaksRail";
import { peaks } from "@/data/adventure/everest-three-passes-trek/content";
import { num } from "@/data/adventure/everest-three-passes-trek/format";
import "./Peaks.css";

export default function Peaks() {
  return (
    <section className="etp-section etp-section--dark etp-peaks" id="peaks" aria-labelledby="etp-peaks-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-peaks-title"
          eyebrow="The giants"
          title="Surrounded by the Giants of the Himalayas"
          intro="Four of the world's six highest mountains — and one of its most beautiful — rise around the route. Which peaks you see depends on where you stand and on the weather; not every summit is visible from every point on the trail."
        />
      </div>

      <PeaksRail label="Himalayan peaks">
        {peaks.map((p, i) => (
          <li key={p.id} className="etp-peak" data-reveal style={{ "--i": i } as React.CSSProperties}>
            <article className="etp-peak__card" aria-labelledby={`etp-peak-${p.id}`}>
              <Media image={p.image} sizes="(max-width: 640px) 82vw, 380px" className="etp-peak__media" />
              <div className="etp-peak__body">
                <div className="etp-peak__row">
                  <h3 className="etp-peak__name" id={`etp-peak-${p.id}`}>
                    {p.name}
                  </h3>
                  {p.rank && <span className="etp-peak__rank">{p.rank}</span>}
                </div>
                <p className="etp-peak__elev">
                  {num(p.elevationM)}
                  <span> m</span>
                </p>
                <p className="etp-peak__desc">{p.description}</p>
              </div>
            </article>
          </li>
        ))}
      </PeaksRail>
    </section>
  );
}
