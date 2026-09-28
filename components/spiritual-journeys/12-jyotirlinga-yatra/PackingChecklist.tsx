import SectionHeading from "./SectionHeading";
import { packing } from "./data/jyotirlingaData";
import "./PackingChecklist.css";

const total = packing.groups.reduce((n, g) => n + g.items.length, 0);
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/**
 * Interactive checklist with zero JavaScript: native checkboxes, and a CSS counter
 * that tallies :checked inputs for the progress line.
 */
export default function PackingChecklist() {
  return (
    <section className="jyl-section jyl-pack" aria-labelledby="jyl-pack-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-pack-title" title={packing.heading} lead={packing.intro} />
        <div className="jyl-pack__board" style={{ ["--jyl-pack-total" as string]: `"${total}"` }}>
          <div className="jyl-pack__groups">
            {packing.groups.map((group) => (
              <fieldset key={group.title} className="jyl-pack__group">
                <legend className="jyl-pack__legend">{group.title}</legend>
                <ul className="jyl-pack__items">
                  {group.items.map((item) => {
                    const id = `pack-${slug(group.title)}-${slug(item)}`;
                    return (
                      <li key={item}>
                        <input type="checkbox" id={id} className="jyl-pack__input" />
                        <label htmlFor={id} className="jyl-pack__label">
                          {item}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            ))}
          </div>
          <p className="jyl-pack__progress" aria-hidden="true">
            <span className="jyl-pack__count" />
          </p>
        </div>
      </div>
    </section>
  );
}
