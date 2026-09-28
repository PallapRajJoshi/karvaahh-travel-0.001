import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import Icon from "../../shared/Icon";
import { KORA_FACTS } from "../../data/kora";
import KoraCircuit from "./KoraCircuit";
import "./KoraParikrama.css";

const PATH = ["Darchen", "Yamadwar", "Dirapuk", "Dolma La", "Zuthulpuk", "Darchen"];

const DOLMA_POINTS = [
  { title: "Highest point of the Kora", text: "The climb from Dirapuk gains several hundred metres in thin air." },
  { title: "Steep, high-altitude terrain", text: "Rocky, uneven ground on both the ascent and the descent." },
  { title: "Cold conditions", text: "Early starts in freezing temperatures, with wind and possible snow." },
  { title: "Acclimatisation matters", text: "Days at Mansarovar and Darchen prepare the body for this day." },
  { title: "Fitness is individual", text: "Pace, stamina and altitude response vary from person to person." },
  { title: "Weather decides", text: "Guides may delay or turn a group back when conditions are unsafe." },
];

export default function KoraParikrama() {
  return (
    <section id="kora" className="km-section km-kora" aria-labelledby="kora-title">
      <div className="km-container">
        <div className="km-kora__intro">
          <SectionHeading
            id="kora-title"
            tone="light"
            marker="About 52 km around the mountain"
            title="Kailash Parikrama – The Sacred Kora"
            intro="The Kailash Parikrama, or Kora, is a circuit of Mount Kailash on foot. It traditionally passes Yamadwar, Dirapuk, Dolma La Pass and Zuthulpuk before returning toward Darchen."
          />
          <ol className="km-kora__path" aria-label="Kora route sequence">
            {PATH.map((stop, i) => (
              <li key={`${stop}-${i}`} className={stop === "Dolma La" ? "is-high" : undefined}>
                {stop}
              </li>
            ))}
          </ol>
          <dl className="km-kora__facts">
            {KORA_FACTS.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <KoraCircuit />

        <div className="km-dolma">
          <div className="km-dolma__head">
            <p className="km-dolma__elev">
              <Icon name="pass" className="km-dolma__icon" />
              About 5,630 m
            </p>
            <h3 id="km-dolma-title" className="km-dolma__title">
              Dolma La Pass – the hardest day
            </h3>
            <p className="km-dolma__lede">
              Dolma La Pass, at approximately 5,630 metres, is the highest point of the Kora and the day most
              pilgrims prepare for from the start of the journey.
            </p>
          </div>
          <ul className="km-dolma__points">
            {DOLMA_POINTS.map((p) => (
              <li key={p.title}>
                <p className="km-dolma__point-title">{p.title}</p>
                <p className="km-dolma__point-text">{p.text}</p>
              </li>
            ))}
          </ul>
          <Notice variant="caution" onDark className="km-dolma__notice">
            <p>
              <strong>Completing the Kora is never guaranteed.</strong> It depends on your health, your response
              to altitude and the weather on the day. Guides may advise resting, taking a pony where available, or
              turning back. Pilgrims who do not complete the circuit can often still take part in darshan from
              Darchen and Yamadwar.
            </p>
          </Notice>
        </div>
      </div>
    </section>
  );
}
