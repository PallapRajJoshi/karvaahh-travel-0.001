import type { ComponentType } from "react";
import SectionHeading from "./SectionHeading";
import { MixedIcon, PlaneIcon, RoadIcon, TrainIcon } from "./icons";
import { transport } from "./data/jyotirlingaData";
import "./TransportOptions.css";

const iconFor: Record<string, ComponentType> = {
  Air: PlaneIcon,
  Rail: TrainIcon,
  Road: RoadIcon,
  Mixed: MixedIcon,
};

export default function TransportOptions() {
  return (
    <section id="plan" className="jyl-section jyl-section--white jyl-transport" aria-labelledby="jyl-transport-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-transport-title" title={transport.heading} lead={transport.intro} />
        <ul className="jyl-transport__list">
          {transport.options.map((option) => {
            const Icon = iconFor[option.title] ?? MixedIcon;
            return (
              <li key={option.title} className="jyl-transport__item">
                <span className="jyl-transport__icon">
                  <Icon />
                </span>
                <h3 className="jyl-transport__title">{option.title}</h3>
                <p className="jyl-transport__text">{option.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
