import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { cultureHighlights } from "@/data/cultureHighlights";
import "./CultureHeritage.css";

export default function CultureHeritage() {
  return (
    <section className="saipal-page__section saipal-culture">
      <div className="saipal-page__inner saipal-culture__grid">
        <Reveal direction="left" className="saipal-culture__media">
          <ImageSlot
            alt="Traditional Himalayan settlement and local community life in the Bajhang region"
            label="Authentic image of a Bajhang settlement / community"
          />
        </Reveal>
        <Reveal direction="right" className="saipal-culture__content">
          <span className="saipal-eyebrow">Local Heritage</span>
          <h2 className="saipal-culture__title">Discover the Cultural Heart of Bajhang</h2>
          <ul className="saipal-culture__list">
            {cultureHighlights.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
