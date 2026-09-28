import SectionHeading from "@/components/activities/shared/SectionHeading";
import { boatingExperienceCategories } from "@/data/activities/boatingData";

export default function BoatingCategories() {
  return (
    <section aria-labelledby="boating-categories">
      <SectionHeading
        title="Choose Your Kind of Boating"
        lead="Four quite different days on the water. Start here, then pick the destination."
        id="boating-categories"
      />
      <ul className="boat-categories">
        {boatingExperienceCategories.map((category) => (
          <li className="boat-categories__item" key={category.key}>
            <h3 className="boat-categories__title">{category.title}</h3>
            <p className="boat-categories__places">{category.places}</p>
            <p className="boat-categories__text">{category.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
