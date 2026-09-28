import { destinations } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function DestinationStops() {
  return (
    <section id="route-destinations" className="cd-section cd-section--tint cd-stops" aria-labelledby="stops-title">
      <div className="cd-container">
        <SectionHeading id="stops-title" title={destinations.heading} intro={<p className="cd-flag">{destinations.label}</p>} />
        <ul className="cd-stops__grid">
          {destinations.items.map((d) => (
            <li key={d.name} className="cd-stops__card" data-reveal>
              <h3>{d.name}</h3>
              <p className="cd-stops__role">{d.role}</p>
              <p>{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
