import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { CheckIcon } from "../../shared/Icon";
import { trekHighlights } from "@/data/trekHighlights";
import "./TrekkingExperience.css";

export default function TrekkingExperience() {
  return (
    <section className="saipal-page__section saipal-page__section--dark saipal-trek">
      <div className="saipal-page__inner saipal-trek__grid">
        <Reveal direction="left" className="saipal-trek__media">
          <ImageSlot alt="Trekker on a remote Himalayan trail in the Saipal region" label="Trekking trail, Saipal region" />
        </Reveal>

        <Reveal direction="right" className="saipal-trek__content">
          <span className="saipal-eyebrow">The Journey</span>
          <h2 className="saipal-trek__title">An Expedition Into Nepal&rsquo;s Remote Himalayas</h2>
          <ul className="saipal-trek__list">
            {trekHighlights.map((item) => (
              <li key={item.id} className="saipal-trek__item">
                <CheckIcon className="saipal-trek__check" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="saipal-trek__notice">
            <strong>For Experienced Trekkers:</strong> Remote terrain, limited facilities, and high-altitude
            conditions require careful preparation and appropriate local support.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
