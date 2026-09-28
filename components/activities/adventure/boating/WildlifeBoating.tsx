import SectionHeading from "@/components/activities/shared/SectionHeading";
import { wildlifeBoating } from "@/data/activities/boatingData";

export default function WildlifeBoating() {
  return (
    <section aria-labelledby="wildlife-boating">
      <SectionHeading
        title="Boating With Wildlife"
        lead="Four wildlife-focused waterways. Sightings are never guaranteed and depend on season, water level and conditions on the day."
        id="wildlife-boating"
      />
      <ul className="boat-wildlife">
        {wildlifeBoating.map((item) => (
          <li className="boat-wildlife__item" key={item.slug}>
            <h3 className="boat-wildlife__title">{item.title}</h3>
            <p className="boat-wildlife__detail">{item.detail}</p>
            <p className="boat-wildlife__sightings">{item.sightings}</p>
          </li>
        ))}
      </ul>
      <p className="boat-wildlife__note">
        Subject to conditions. Karvaahh does not guarantee wildlife sightings on
        any boat experience.
      </p>
    </section>
  );
}
