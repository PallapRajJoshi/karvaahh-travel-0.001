import { weather as w } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconInfo } from "../shared/icons";
import SeasonTabs from "./SeasonTabs";

export default function WeatherSection() {
  return (
    <section id="weather" className="cd-section cd-weather" aria-labelledby="weather-title">
      <div className="cd-container">
        <SectionHeading id="weather-title" title={w.heading} intro={<p>{w.intro}</p>} />
        <div data-reveal>
          <SeasonTabs seasons={w.seasons} />
        </div>
        <p className="cd-note" data-reveal>
          <IconInfo className="cd-note__icon" />
          <span>
            {w.note} {w.operational}
          </span>
        </p>
      </div>
    </section>
  );
}
