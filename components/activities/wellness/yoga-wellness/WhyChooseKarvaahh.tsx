import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { icons } from "./shared/icons";
import { whyChoose } from "./data/journeys";
import "./WhyChooseKarvaahh.css";

export default function WhyChooseKarvaahh() {
  return (
    <section className="ykw-section ykw-section--white" aria-labelledby="ykw-why-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-why-title"
          eyebrow="Why Karvaahh"
          title="Why Choose Karvaahh for Yoga & Wellness?"
          intro="We plan the travel around you. Services and availability are always confirmed before booking."
        />
        <ul className="ykw-why__grid">
          {whyChoose.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 3) * 80} className="ykw-why__card">
              <span className="ykw-why__icon">{icons[c.icon]}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
