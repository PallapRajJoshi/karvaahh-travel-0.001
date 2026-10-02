import SectionHeading from "@/components/shared/SectionHeading";
import { trekSegments, trekkingNote } from "@/data/destinations/rara-lake/experiences";
import "./RaraLakeTrekking.css";

export default function RaraLakeTrekking() {
  return (
    <section className="rara-trekking" aria-labelledby="rara-trekking-heading">
      <SectionHeading
        eyebrow="On Foot"
        title="Rara Lake Trekking & Hiking"
      />
      <ol className="rara-trekking__list">
        {trekSegments.map((segment, index) => (
          <li key={segment.id} className="rara-trekking__item">
            <span className="rara-trekking__index">{String(index + 1).padStart(2, "0")}</span>
            <div className="rara-trekking__content">
              <div className="rara-trekking__heading-row">
                <h3 className="rara-trekking__title">{segment.title}</h3>
                {segment.difficultyKnown && segment.difficulty && (
                  <span
                    className={`rara-trekking__difficulty rara-trekking__difficulty--${segment.difficulty.toLowerCase()}`}
                  >
                    {segment.difficulty}
                  </span>
                )}
              </div>
              <p className="rara-trekking__description">{segment.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="rara-trekking__note">{trekkingNote}</p>
    </section>
  );
}
