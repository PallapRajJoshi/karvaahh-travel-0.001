import { etiquette } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconCheck } from "../shared/icons";

export default function TempleEtiquette() {
  return (
    <section id="temple-etiquette" className="cd-section cd-section--tint cd-etiquette" aria-labelledby="etiquette-title">
      <div className="cd-container">
        <SectionHeading id="etiquette-title" title={etiquette.heading} intro={<p>The Dhams are active places of worship first. A few habits help the day go smoothly for everyone.</p>} />
        <ul className="cd-list cd-list--in cd-list--columns" data-reveal>
          {etiquette.items.map((item) => (
            <li key={item}>
              <IconCheck className="cd-list__icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
