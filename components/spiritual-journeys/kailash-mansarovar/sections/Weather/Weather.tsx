import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import Icon from "../../shared/Icon";
import { WEATHER_CONDITIONS } from "../../data/weather";
import "./Weather.css";

export default function Weather() {
  return (
    <section id="weather" className="km-section km-weather" aria-labelledby="weather-title">
      <div className="km-container">
        <SectionHeading
          id="weather-title"
          marker="Cold, dry and changeable"
          title="Kailash Mansarovar Weather & Mountain Conditions"
          intro="Most organised departures run in the warmer months, commonly from late spring to early autumn, within the season when permits are issued. Even then, the high plateau is a cold and exposed place."
        />
        <ul className="km-weather__grid">
          {WEATHER_CONDITIONS.map((c) => (
            <li key={c.title} className="km-weather__item">
              <Icon name={c.icon} className="km-weather__icon" />
              <h3 className="km-weather__title">{c.title}</h3>
              <p className="km-weather__text">{c.text}</p>
            </li>
          ))}
        </ul>
        <Notice className="km-weather__notice">
          <p>
            Weather conditions can change rapidly, and actual conditions should be checked close to departure.
          </p>
        </Notice>
      </div>
    </section>
  );
}
