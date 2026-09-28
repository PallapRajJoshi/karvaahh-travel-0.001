import { dhams } from "../data/charDhamData";
import SmartImage from "../shared/SmartImage";

export default function DhamQuickNav() {
  return (
    <section id="four-dhams" className="cd-quicknav" aria-labelledby="quicknav-title">
      <div className="cd-container">
        <h2 id="quicknav-title" className="cd-quicknav__title" data-reveal>
          The four Dhams, in traditional order
        </h2>
        <ol className="cd-quicknav__list">
          {dhams.map((d) => (
            <li key={d.slug} className="cd-quicknav__item" data-dham={d.slug} data-reveal>
              <a href={`#${d.slug}`} className="cd-quicknav__card">
                <div className="cd-quicknav__media">
                  <SmartImage image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" tone={d.slug} />
                  <span className="cd-quicknav__numeral" aria-hidden="true">
                    {d.numeral}
                  </span>
                </div>
                <div className="cd-quicknav__body">
                  <h3 className="cd-quicknav__name">{d.name}</h3>
                  <p className="cd-quicknav__deity">{d.deity}</p>
                  <p className="cd-quicknav__text">{d.quickLine}</p>
                  <p className="cd-quicknav__region">{d.district}</p>
                  <span className="cd-quicknav__more">
                    Read about {d.name}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
