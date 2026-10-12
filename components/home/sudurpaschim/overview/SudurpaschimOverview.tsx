import type { CSSProperties } from "react";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-overview.css";

const facts = [
  { value: "9", label: "Districts" },
  { value: "7,132 m", label: "Api Himal, highest peak" },
  { value: "2", label: "National parks" },
  { value: "1", label: "Ramsar wetland" },
];

const zones = [
  {
    name: "Terai Plains",
    range: "Kailali · Kanchanpur",
    description:
      "Flat, fertile lowlands of sal forest, phanta grassland and oxbow lakes. Home to Tharu villages, Shuklaphanta National Park, Ghodaghodi Lake and the gateway cities of Dhangadhi and Mahendranagar.",
    places: ["Shuklaphanta", "Ghodaghodi", "Jhilmila", "Godawari Dham"],
  },
  {
    name: "Mid-Hills",
    range: "Dadeldhura · Doti · Baitadi · Achham",
    description:
      "Terraced Mahabharat ridges, pine forest and old temple towns where Doteli and Baitadeli culture runs deepest. The Khaptad plateau rises above them at around 3,000 m.",
    places: ["Khaptad", "Ramaroshan", "Ugratara", "Shaileshwari"],
  },
  {
    name: "High Himalaya",
    range: "Darchula · Bajhang · Bajura",
    description:
      "Remote valleys beneath Api, Nampa and Saipal, with sacred lakes and high pilgrim shrines. Few roads, long trails and some of the least-visited mountain country in Nepal.",
    places: ["Api Nampa", "Saipal", "Badimalika", "Surma Sarovar"],
  },
];

export default function SudurpaschimOverview() {
  return (
    <section
      id="sp-overview"
      className="sp-overview"
      aria-labelledby="sp-overview-heading"
    >
      <div className="sp-container sp-overview__inner">
        <div className="sp-overview__intro">
          <SudurpaschimSectionHeading
            id="sp-overview-heading"
            index="02"
            eyebrow="The Province"
            heading="Nepal's far west, from plains to peaks."
          />
          <div className="sp-overview__text" data-reveal>
            <p>
              Sudurpashchim is Nepal&rsquo;s westernmost province, bordered by
              India to the west (along the Mahakali River) and south, Tibet to
              the north and Karnali Province to the east. From south to
              north it rises from the subtropical Terai, through forested
              mid-hills, to glaciated summits above 7,000 m.
            </p>
            <p>
              Long overlooked by mainstream tourism, it rewards slow travelers
              with living Doteli and Tharu traditions, pilgrimage trails that
              predate any trekking route and wildlife habitat that stays
              wonderfully uncrowded.
            </p>
          </div>
        </div>

        <dl className="sp-overview__facts">
          {facts.map((fact, i) => (
            <div
              className="sp-overview__fact"
              key={fact.label}
              data-reveal
              style={{ "--d": i } as CSSProperties}
            >
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="sp-overview__zones">
          {zones.map((zone, i) => (
            <article
              className="sp-zone"
              key={zone.name}
              data-reveal
              style={{ "--d": i } as CSSProperties}
            >
              <span className="sp-zone__step" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sp-zone__name">{zone.name}</h3>
              <p className="sp-zone__range">{zone.range}</p>
              <p className="sp-zone__desc">{zone.description}</p>
              <ul className="sp-zone__places" aria-label={`${zone.name} highlights`}>
                {zone.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
