import { trekkingRoutes, trailCategories, trekkingDisclaimer } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./TrekkingHiking.css";

export default function TrekkingHiking() {
  return (
    <section className="trekking-section" id="trekking">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="On Foot"
          heading="Trekking & Hiking in Dhorpatan"
          subheading="Routes through alpine meadows, highland passes, and mountain villages."
        />

        <div className="trekking-section__routes">
          {trekkingRoutes.map((route, i) => (
            <Reveal key={route.title} delay={(i % 3) * 90} className="trekking-route">
              <h3 className="trekking-route__title">{route.title}</h3>
              <p className="trekking-route__description">{route.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="trekking-section__categories">
          {trailCategories.map((category) => (
            <div key={category.title} className="trail-category">
              <h4 className="trail-category__title">{category.title}</h4>
              <p className="trail-category__description">{category.description}</p>
            </div>
          ))}
        </div>

        <p className="trekking-section__disclaimer">{trekkingDisclaimer}</p>
      </div>
    </section>
  );
}
