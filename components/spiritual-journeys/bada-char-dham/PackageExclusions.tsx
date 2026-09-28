import { badaCharDhamPackage as pkg } from "./data/badaCharDhamPackage";
import { MinusIcon } from "./shared/icons";
import "./Package.css";

export default function PackageExclusions() {
  return (
    <section className="bcd-pkg__list bcd-pkg__list--out" aria-labelledby="bcd-excl-title">
      <h3 id="bcd-excl-title" className="bcd-pkg__list-title">
        <MinusIcon size={22} />
        Package exclusions
      </h3>
      {pkg.exclusions.map((g) => (
        <div key={g.title} className="bcd-pkg__group">
          <h4 className="bcd-pkg__group-title">{g.title}</h4>
          <ul>
            {g.items.map((i) => (
              <li key={i}>
                <MinusIcon size={16} />
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
