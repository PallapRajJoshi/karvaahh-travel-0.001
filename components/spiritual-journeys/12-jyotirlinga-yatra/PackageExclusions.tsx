import { MinusIcon } from "./icons";
import { exclusions } from "./data/jyotirlingaData";

export default function PackageExclusions() {
  return (
    <div className="jyl-terms__panel jyl-terms__panel--out">
      <h2 id="jyl-exclusions-title" className="jyl-terms__title">
        Package Exclusions
      </h2>
      {exclusions.map((group) => (
        <div key={group.title} className="jyl-terms__group">
          <h3 className="jyl-terms__group-title">{group.title}</h3>
          <ul className="jyl-terms__items">
            {group.items.map((item) => (
              <li key={item}>
                <span className="jyl-terms__icon">
                  <MinusIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
