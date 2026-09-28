import { exclusions, packageDisclaimer } from "../data/charDhamData";
import { IconInfo, IconMinus } from "../shared/icons";

export default function PackageExclusions() {
  return (
    <>
      <div className="cd-package__block cd-package__block--out" aria-labelledby="exclusions-title">
        <h3 id="exclusions-title" className="cd-package__block-title" data-reveal>
          Package Exclusions
        </h3>
        <div className="cd-package__groups">
          {exclusions.map((g) => (
            <div key={g.id} className="cd-package__group" data-reveal>
              <h4>{g.title}</h4>
              <ul className="cd-list cd-list--out">
                {g.items.map((item) => (
                  <li key={item}>
                    <IconMinus className="cd-list__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="cd-note cd-note--strong" role="note">
        <IconInfo className="cd-note__icon" />
        <span>{packageDisclaimer}</span>
      </p>
    </>
  );
}
