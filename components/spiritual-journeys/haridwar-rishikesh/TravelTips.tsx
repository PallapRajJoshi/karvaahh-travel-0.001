import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { RIVER_SAFETY, TIP_GROUPS } from "./data/guidance";
import "./travel-tips.css";

export default function TravelTips() {
  return (
    <section id={SECTION.tips} className="hry-section hry-tips" aria-labelledby="hry-tips-title">
      <div className="hry-container">
        <SectionHeading
          id="hry-tips-title"
          title="Essential travel tips for your spiritual journey"
        />

        <aside className="hry-tips__safety" aria-labelledby="hry-river-safety">
          <span className="hry-tips__safety-icon">
            <Icon name="alert" size={26} />
          </span>
          <div>
            <h3 id="hry-river-safety" className="hry-tips__safety-title">
              River safety
            </h3>
            <p className="hry-tips__safety-text">{RIVER_SAFETY}</p>
          </div>
        </aside>

        <div className="hry-tips__grid">
          {TIP_GROUPS.map((group) => (
            <div key={group.id} className="hry-tips__group">
              <h3 className="hry-tips__group-title">{group.title}</h3>
              <ul className="hry-tips__list">
                {group.tips.map((tip) => (
                  <li key={tip} className="hry-tips__tip">
                    <Icon name="check" size={18} className="hry-tips__check" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
