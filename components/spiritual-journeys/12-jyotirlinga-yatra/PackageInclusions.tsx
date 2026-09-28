import { CheckIcon } from "./icons";
import { inclusions } from "./data/jyotirlingaData";

export default function PackageInclusions() {
  return (
    <div className="jyl-terms__panel jyl-terms__panel--in">
      <h2 id="jyl-inclusions-title" className="jyl-terms__title">
        Package Inclusions
      </h2>
      {inclusions.map((group) => (
        <div key={group.title} className="jyl-terms__group">
          <h3 className="jyl-terms__group-title">{group.title}</h3>
          <ul className="jyl-terms__items">
            {group.items.map((item) => (
              <li key={item}>
                <span className="jyl-terms__icon">
                  <CheckIcon />
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
