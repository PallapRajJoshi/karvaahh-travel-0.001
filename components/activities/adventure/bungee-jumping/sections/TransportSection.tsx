import { transport } from "../data/bungeeJumpingData";
import { CtaLink } from "../shared";

export default function TransportSection() {
  return (
    <section id="from-pokhara" className="bj-section bj-transport" aria-labelledby="bj-transport-title">
      <div className="bj-wrap bj-transport__grid">
        <div data-reveal>
          <p className="bj-kicker bj-kicker--light">Day trip</p>
          <h2 id="bj-transport-title" className="bj-transport__title">{transport.heading}</h2>
          <p className="bj-transport__message">{transport.message}</p>
          <p className="bj-transport__text">{transport.text}</p>
          <CtaLink cta={transport.cta} />
        </div>
        <div data-reveal>
          <ol className="bj-journey" aria-label="Day-trip route">
            {transport.journey.map((stop) => <li key={stop}>{stop}</li>)}
          </ol>
          <div className="bj-transport__cost">
            <p className="bj-transport__cost-label">{transport.costLabel}</p>
            <p className="bj-transport__cost-value">{transport.cost}</p>
            <p className="bj-transport__cost-sub">Indicative additional transport — separate from activity prices.</p>
            <p className="bj-transport__cost-note">{transport.costNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
