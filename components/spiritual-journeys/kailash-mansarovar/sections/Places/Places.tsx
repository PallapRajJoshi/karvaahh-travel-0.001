import SectionHeading from "../../shared/SectionHeading";
import ImageSlot from "../../shared/ImageSlot";
import { PLACES } from "../../data/places";
import "./Places.css";

export default function Places() {
  return (
    <section id="places" className="km-section km-section--snow km-places" aria-labelledby="places-title">
      <div className="km-container">
        <SectionHeading
          id="places-title"
          marker="From Kathmandu to the foot of Kailash"
          title="Places Along the Way"
        />
      </div>
      <div className="km-places__viewport">
        <ul className="km-places__rail" tabIndex={0} aria-label="Places along the Kailash Mansarovar route">
          {PLACES.map((place) => (
            <li key={place.name} className="km-place">
              <div className="km-place__media">
                <ImageSlot image={place.image} sizes="(min-width: 1200px) 20vw, (min-width: 640px) 34vw, 78vw" />
              </div>
              <p className="km-place__label">{place.label}</p>
              <h3 className="km-place__name">{place.name}</h3>
              <p className="km-place__text">{place.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
