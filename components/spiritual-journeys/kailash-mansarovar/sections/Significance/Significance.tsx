import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import { TRADITIONS } from "../../data/traditions";
import "./Significance.css";

export default function Significance() {
  return (
    <section id="significance" className="km-section km-section--snow" aria-labelledby="significance-title">
      <div className="km-container">
        <SectionHeading
          id="significance-title"
          marker="One mountain, four traditions"
          title="The Spiritual Significance of Mount Kailash"
          intro="Few places on earth are held sacred by so many traditions at once. Pilgrims of different faiths walk the same trail around the same mountain, each carrying their own meaning."
        />
        <ul className="km-traditions">
          {TRADITIONS.map((t) => (
            <li key={t.id} className="km-tradition">
              <h3 className="km-tradition__name">{t.name}</h3>
              <p className="km-tradition__local">{t.localName}</p>
              <p className="km-tradition__text">{t.text}</p>
            </li>
          ))}
        </ul>
        <Notice className="km-traditions__note">
          <p>
            Religious traditions contain diverse interpretations and practices; travellers should approach the site
            respectfully. Availability of specific religious activities may vary according to regulations and local
            conditions.
          </p>
        </Notice>
      </div>
    </section>
  );
}
