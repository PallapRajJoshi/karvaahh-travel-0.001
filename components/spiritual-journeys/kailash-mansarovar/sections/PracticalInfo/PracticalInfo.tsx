import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import Icon, { type IconName } from "../../shared/Icon";
import {
  ACCOMMODATION,
  CONNECTIVITY,
  DOCUMENTS_MAY_INCLUDE,
  DOCUMENT_FACTORS,
  FOOD,
} from "../../data/practical";
import "./PracticalInfo.css";

const PANELS: { id: string; icon: IconName; title: string; intro: string; items: string[] }[] = [
  {
    id: "stays",
    icon: "bed",
    title: "Accommodation & Facilities",
    intro: "Beyond Kathmandu, comfort drops as altitude rises. Expect:",
    items: ACCOMMODATION,
  },
  {
    id: "food",
    icon: "utensils",
    title: "Food & Hydration",
    intro: "Meals are simple and practical rather than a highlight:",
    items: FOOD,
  },
  {
    id: "connectivity",
    icon: "signal",
    title: "Communication & Connectivity",
    intro: "Plan to be out of touch for parts of the journey:",
    items: CONNECTIVITY,
  },
];

export default function PracticalInfo() {
  return (
    <section id="practical-info" className="km-section km-section--snow" aria-labelledby="practical-title">
      <div className="km-container">
        <SectionHeading
          id="practical-title"
          marker="Before you go"
          title="Documents, Stays and Staying Connected"
          intro="A realistic picture of what the journey involves on the ground, so that nothing on the plateau comes as a surprise."
        />

        <article className="km-docs" aria-labelledby="km-docs-title">
          <div className="km-docs__head">
            <Icon name="passport" className="km-docs__icon" />
            <h3 id="km-docs-title" className="km-docs__title">
              Documents, Visa & Permits
            </h3>
          </div>
          <div className="km-docs__cols">
            <div>
              <p className="km-docs__lead">Requirements depend on:</p>
              <ul className="km-docs__tags">
                {DOCUMENT_FACTORS.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="km-docs__lead">Documents may include:</p>
              <ul className="km-docs__list">
                {DOCUMENTS_MAY_INCLUDE.map((d) => (
                  <li key={d}>
                    <Icon name="document" className="km-docs__list-icon" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Notice variant="caution">
            <p>
              Visa, permit, border and entry requirements can change. Travellers must follow the latest instructions
              issued by the relevant authorities and the authorized travel operator. No single visa process applies
              to every nationality.
            </p>
          </Notice>
        </article>

        <div className="km-practical">
          {PANELS.map((panel) => (
            <article key={panel.id} className="km-practical__panel" aria-labelledby={`km-${panel.id}-title`}>
              <Icon name={panel.icon} className="km-practical__icon" />
              <h3 id={`km-${panel.id}-title`} className="km-practical__title">
                {panel.title}
              </h3>
              <p className="km-practical__intro">{panel.intro}</p>
              <ul className="km-practical__list">
                {panel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
