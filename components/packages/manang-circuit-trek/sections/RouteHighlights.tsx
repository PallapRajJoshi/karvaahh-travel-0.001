import Image from "next/image";
import { routeHighlights } from "../data/content";
import SectionHeading from "../SectionHeading";
import "./route-highlights.css";

export default function RouteHighlights() {
  return (
    <section className="mc-section mc-route" aria-labelledby="mc-route-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-route-title"
          eyebrow="Along the trail"
          title="Six places that define the route"
          intro="From pine-forest villages to a glacial lake at nearly 5,000 m. The landscape changes almost every day."
        />
        <ol className="mc-route__grid">
          {routeHighlights.map((h, i) => (
            <li key={h.id} className={`mc-route__card${i === 3 ? " mc-route__card--feature" : ""}`}>
              <div className="mc-img-frame mc-route__media">
                <Image src={h.image} alt={h.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <span className="mc-route__alt">{h.altitude}</span>
              </div>
              <div className="mc-route__body">
                <p className="mc-route__kicker">{h.kicker}</p>
                <h3 className="mc-route__name">{h.name}</h3>
                <p className="mc-route__desc">{h.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
