import { weather } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./prepare.css";

export function WeatherSection() {
  return (
    <section className="pmy-section pmy-section--tight pmy-weather" aria-labelledby="pmy-weather-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-weather-title" title={weather.heading} />
        <div className="pmy-weather__grid">
          {weather.cards.map((card, i) => (
            <article
              key={card.region}
              className={`pmy-weather__card pmy-weather__card--${i === 0 ? "valley" : "mountain"}`}
              aria-labelledby={`pmy-weather-${i}`}
              data-reveal
            >
              <div className="pmy-weather__top">
                <Icon name={card.icon} size={26} />
                <h3 id={`pmy-weather-${i}`}>{card.region}</h3>
              </div>
              <p className="pmy-weather__intro">{card.intro}</p>
              <dl className="pmy-weather__seasons">
                {card.seasons.map((s) => (
                  <div key={s.title}>
                    <dt>{s.title}</dt>
                    <dd>{s.text}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="pmy-note pmy-weather__note">{weather.note}</p>
      </div>
    </section>
  );
}
