import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./Practical.css";

export default function ResponsibleTravel() {
  const r = d.responsibleTravel;
  return (
    <section className="bcd-section bcd-section--sand" aria-labelledby="bcd-resp-title">
      <div className="bcd-container bcd-resp">
        <SectionHeading id="bcd-resp-title" title={r.heading} intro={r.intro} />
        <ul className="bcd-resp__list">
          {r.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
