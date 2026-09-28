import { badaCharDhamPackage as pkg } from "./data/badaCharDhamPackage";
import { CheckIcon } from "./shared/icons";
import "./Package.css";

export default function PackageInclusions() {
  return (
    <section className="bcd-pkg__list bcd-pkg__list--in" aria-labelledby="bcd-incl-title">
      <h3 id="bcd-incl-title" className="bcd-pkg__list-title">
        <CheckIcon size={22} />
        Package inclusions
      </h3>
      {pkg.inclusions.map((g) => (
        <div key={g.title} className="bcd-pkg__group">
          <h4 className="bcd-pkg__group-title">{g.title}</h4>
          <ul>
            {g.items.map((i) => (
              <li key={i}>
                <CheckIcon size={16} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          {g.note && <p className="bcd-pkg__group-note">{g.note}</p>}
        </div>
      ))}
    </section>
  );
}
