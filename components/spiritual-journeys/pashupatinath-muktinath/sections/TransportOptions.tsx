import { transport } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./getting-there.css";

export function TransportOptions() {
  return (
    <section id="getting-there" className="pmy-section pmy-transport" aria-labelledby="pmy-transport-title">
      <div className="pmy-container">
        <SectionHeading
          id="pmy-transport-title"
          kicker="Getting there"
          title={transport.heading}
          intro={<p>{transport.intro}</p>}
        />
        <div className="pmy-transport__grid">
          {transport.options.map((opt) => (
            <article
              key={opt.id}
              className={`pmy-transport__option pmy-transport__option--${opt.id}`}
              aria-labelledby={`pmy-transport-${opt.id}`}
              data-reveal
            >
              <div className="pmy-transport__top">
                <span className="pmy-transport__icon"><Icon name={opt.icon} size={26} /></span>
                <h3 id={`pmy-transport-${opt.id}`} className="pmy-transport__title">{opt.title}</h3>
              </div>
              <p className="pmy-transport__summary">{opt.summary}</p>
              <ol className="pmy-transport__legs">
                {opt.legs.map((leg) => <li key={leg}>{leg}</li>)}
              </ol>
              <h4 className="pmy-transport__sub">Keep in mind</h4>
              <ul className="pmy-ticklist">
                {opt.considerations.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="pmy-note pmy-transport__note">{transport.note}</p>
      </div>
    </section>
  );
}
