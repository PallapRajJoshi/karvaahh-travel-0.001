import { kaliGandaki } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { JourneyImage } from "../ui/JourneyImage";
import "./kali-gandaki.css";

export function KaliGandakiSection() {
  const { views } = kaliGandaki;
  return (
    <section className="pmy-kali" aria-labelledby="pmy-kali-title">
      <div className="pmy-kali__scene">
        <div className="pmy-kali__media">
          <JourneyImage image={kaliGandaki.image} sizes="100vw" />
        </div>
        <div className="pmy-container pmy-kali__overlay">
          <div className="pmy-kali__copy" data-reveal>
            <p className="pmy-heading__kicker">Between Pokhara and Jomsom</p>
            <h2 id="pmy-kali-title" className="pmy-heading__title pmy-heading__title--h2">{kaliGandaki.heading}</h2>
            {kaliGandaki.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </div>
        </div>
      </div>

      <div className="pmy-container pmy-kali__views" aria-labelledby="pmy-views-title">
        <div data-reveal>
          <h3 id="pmy-views-title" className="pmy-heading__title pmy-heading__title--h3">{views.heading}</h3>
          <p className="pmy-kali__views-text">{views.text}</p>
        </div>
        <ul className="pmy-kali__conditions" data-reveal>
          {views.conditions.map((c, i) => (
            <li key={c}>
              <Icon name={(["sun", "compass", "road", "clock"] as const)[i] ?? "sun"} size={20} />
              {c}
            </li>
          ))}
        </ul>
        <p className="pmy-note pmy-note--cool pmy-kali__views-note">{views.note}</p>
      </div>
    </section>
  );
}
