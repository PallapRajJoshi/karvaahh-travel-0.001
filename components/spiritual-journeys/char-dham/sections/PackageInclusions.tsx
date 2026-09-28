import { inclusions } from "../data/charDhamData";
import { IconCheck } from "../shared/icons";

export default function PackageInclusions() {
  return (
    <div className="cd-package__block cd-package__block--in" aria-labelledby="inclusions-title">
      <h3 id="inclusions-title" className="cd-package__block-title" data-reveal>
        Package Inclusions
      </h3>
      <div className="cd-package__groups">
        {inclusions.map((g) => (
          <div key={g.id} className="cd-package__group" data-reveal>
            <h4>{g.title}</h4>
            <ul className="cd-list cd-list--in">
              {g.items.map((item) => (
                <li key={item}>
                  <IconCheck className="cd-list__icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
