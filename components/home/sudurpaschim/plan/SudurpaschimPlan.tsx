import type { CSSProperties } from "react";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-plan.css";

const seasons = [
  {
    months: "Oct – Nov",
    label: "Best overall",
    note: "Clear skies, crisp mountain views and festival season. Ideal for Khaptad, Api and Saipal treks.",
  },
  {
    months: "Mar – May",
    label: "Spring bloom",
    note: "Rhododendron forests flower in the hills. The Terai grows hot by May; aim for the highlands.",
  },
  {
    months: "Dec – Feb",
    label: "Terai & wildlife",
    note: "Mild, sometimes foggy days in the plains suit Shuklaphanta and wetland birding. High passes are snowbound.",
  },
  {
    months: "Jun – Sep",
    label: "Monsoon",
    note: "Green meadows and the Badimalika pilgrimage, but expect rain, leeches and road disruptions.",
  },
];

const routes = [
  {
    title: "By air",
    text: "Daily flights connect Kathmandu with Dhangadhi, the province's main airport. Limited, weather-dependent flights serve hill airstrips such as Sanfebagar (Achham), Kolti (Bajura) and Chainpur (Bajhang).",
  },
  {
    title: "By road",
    text: "The East–West (Mahendra) Highway runs through Kailali to Mahendranagar. From the plains, the Mahakali Highway climbs via Dadeldhura and Baitadi toward Darchula, and the Seti corridor heads north through Doti toward Bajhang.",
  },
  {
    title: "From India",
    text: "Gaddachauki near Mahendranagar and Gauriphanta near Dhangadhi are the main land crossings. Check current border and immigration rules before travelling.",
  },
];

const tips = [
  "Some high areas of Darchula and Bajhang need a restricted-area permit arranged through a registered agency; national parks and Api Nampa charge entry fees.",
  "Hill and mountain roads are slow and can close after rain. Build buffer days into any itinerary.",
  "ATMs and reliable mobile data thin out beyond district towns. Carry cash and offline maps.",
  "Accommodation in remote areas is basic teahouses, homestays or camping. Bring a warm sleeping bag for the highlands.",
  "Dress modestly at temples, ask before photographing people or rituals and follow local guidance at shrines.",
  "Carry out all rubbish, keep to trails in Khaptad's meadows and never feed or approach wildlife.",
  "Hire local guides, stay in homestays and buy local produce so tourism income stays in the community.",
];

export default function SudurpaschimPlan() {
  return (
    <section id="sp-plan" className="sp-plan" aria-labelledby="sp-plan-heading">
      <div className="sp-container sp-plan__inner">
        <SudurpaschimSectionHeading
          id="sp-plan-heading"
          index="11"
          eyebrow="Plan Your Visit"
          heading="When to go, how to get there."
          description="The far west rewards a little planning. Here is what to know before you set out."
        />

        <div className="sp-plan__block" data-reveal>
          <h3 className="sp-plan__subtitle">Best time to visit</h3>
          <ul className="sp-plan__seasons">
            {seasons.map((s, i) => (
              <li
                className="sp-plan__season"
                key={s.months}
                data-reveal
                style={{ "--d": i } as CSSProperties}
              >
                <span className="sp-plan__season-label">{s.label}</span>
                <span className="sp-plan__season-months">{s.months}</span>
                <p className="sp-plan__season-note">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sp-plan__columns">
          <div className="sp-plan__block" data-reveal>
            <h3 className="sp-plan__subtitle">How to reach</h3>
            <dl className="sp-plan__routes">
              {routes.map((r) => (
                <div className="sp-plan__route" key={r.title}>
                  <dt>{r.title}</dt>
                  <dd>{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sp-plan__block sp-plan__block--tips" data-reveal>
            <h3 className="sp-plan__subtitle">Practical &amp; responsible travel</h3>
            <ul className="sp-plan__tips">
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
