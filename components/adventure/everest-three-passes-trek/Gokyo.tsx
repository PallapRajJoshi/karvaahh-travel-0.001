import Media from "./Media";
import { gokyo } from "@/data/adventure/everest-three-passes-trek/content";
import "./Gokyo.css";

export default function Gokyo() {
  return (
    <section className="etp-gokyo" aria-labelledby="etp-gokyo-title">
      <div className="etp-gokyo__feature">
        <Media image={gokyo.feature} sizes="100vw" className="etp-gokyo__bg" />
        <div className="etp-gokyo__shade" aria-hidden="true" />
        <div className="etp-wrap etp-gokyo__intro" data-reveal>
          <p className="etp-heading__eyebrow">Gokyo Lakes & alpine landscapes</p>
          <h2 className="etp-gokyo__title" id="etp-gokyo-title">
            {gokyo.heading}
          </h2>
          <p className="etp-gokyo__text">{gokyo.intro}</p>
        </div>
      </div>

      <div className="etp-wrap">
        <ul className="etp-gokyo__cards">
          {gokyo.cards.map((c, i) => (
            <li key={c.title} className="etp-gokyo__card" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <Media image={c.image} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" className="etp-gokyo__media" quietPlaceholder />
              <h3 className="etp-gokyo__card-title">{c.title}</h3>
              <p className="etp-gokyo__card-text">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
