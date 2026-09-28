import { inclusions } from "../data/content";
import { IconCheck, IconCross } from "../icons";
import SectionHeading from "../SectionHeading";
import "./inclusions.css";

export default function Inclusions() {
  return (
    <section id="inclusions" className="mc-section mc-incl" aria-labelledby="mc-incl-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-incl-title"
          eyebrow="Clear pricing"
          title="What's included"
          intro="No surprises on the trail. This is exactly what your Karvaahh quote covers, and what it doesn't."
        />
        <div className="mc-incl__grid">
          <div className="mc-incl__col mc-incl__col--yes">
            <h3 className="mc-incl__title">Included</h3>
            <ul>
              {inclusions.included.map((item) => (
                <li key={item}>
                  <IconCheck className="mc-incl__icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mc-incl__col mc-incl__col--no">
            <h3 className="mc-incl__title">Not included</h3>
            <ul>
              {inclusions.excluded.map((item) => (
                <li key={item}>
                  <IconCross className="mc-incl__icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
