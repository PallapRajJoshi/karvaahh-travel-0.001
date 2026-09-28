import SectionHeading from "../../shared/SectionHeading";
import Icon from "../../shared/Icon";
import { RESPONSIBLE } from "../../data/responsible";
import "./ResponsibleTravel.css";

export default function ResponsibleTravel() {
  return (
    <section id="responsible-travel" className="km-section km-section--ink km-resp" aria-labelledby="responsible-title">
      <div className="km-container">
        <SectionHeading
          id="responsible-title"
          tone="light"
          marker="Sacred ground, fragile land"
          title="Responsible & Respectful Travel"
          intro="The Kailash region is a place of worship and a fragile high-altitude environment. Travelling well here means leaving it as you found it."
        />
        <div className="km-resp__grid">
          {RESPONSIBLE.map((group) => (
            <div key={group.title} className="km-resp__group">
              <Icon name={group.icon} className="km-resp__icon" />
              <h3 className="km-resp__title">{group.title}</h3>
              <ul className="km-resp__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
