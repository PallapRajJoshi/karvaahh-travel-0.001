import { audiences } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

export default function WhoIsThisFor() {
  return (
    <section className="bj-section bj-who" aria-labelledby="bj-who-title">
      <div className="bj-wrap">
        <SectionHeading id="bj-who-title" title="Which Experience Fits Your Trip?" />
        <ul className="bj-who__list">
          {audiences.map((a) => (
            <li key={a.title} data-reveal>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
