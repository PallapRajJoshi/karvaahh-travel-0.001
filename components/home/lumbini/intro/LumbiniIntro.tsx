import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-intro.css";

const facts = [
  { value: "12", label: "Districts" },
  { value: "≈22,300 km²", label: "Area" },
  { value: "Deukhuri, Dang", label: "Provincial capital" },
  { value: "Uttar Pradesh", label: "Shares border with India" },
];

const belts = [
  {
    title: "Terai Plains",
    places: "Rupandehi · Kapilvastu · Nawalparasi West · Banke · Bardiya · Dang",
    description:
      "Flat, fertile lowlands and inner-Terai valleys holding the Buddhist sacred sites, Tharu villages and the sal forests of Bardiya and Banke.",
  },
  {
    title: "Middle Hills",
    places: "Palpa · Gulmi · Arghakhanchi · Pyuthan · Rolpa",
    description:
      "Terraced ridges cut by the Kali Gandaki, Rapti and Babai rivers, dotted with heritage towns, hilltop temples and Magar settlements.",
  },
  {
    title: "High Country",
    places: "Rukum East",
    description:
      "Remote alpine meadows and the snow peaks of Sisne Himal and the Putha Himal massif, reached only by long roads and trails.",
  },
];

export default function LumbiniIntro() {
  return (
    <section className="lumbini-intro" id="overview" aria-labelledby="lumbini-intro-title">
      <div className="lumbini-intro__inner">
        <div className="lumbini-intro__lead">
          <LumbiniSectionHeading
            index="01"
            eyebrow="Province at a Glance"
            heading="From the Buddha's garden"
            emphasis="to the western Himalaya."
            titleId="lumbini-intro-title"
          />
          <div className="lumbini-intro__copy">
            <p>
              Lumbini Province stretches across south-western Nepal, from the
              Indian border on the Terai plains up through the middle hills to
              the high country of Rukum East. It takes its name from Lumbini,
              the birthplace of Siddhartha Gautama, and holds the ancient
              Shakya homeland of Kapilvastu alongside it.
            </p>
            <p>
              In a single journey you can meditate in the Sacred Garden, walk
              the ruins of a 2,500-year-old capital, stay in a Newar hill town,
              track tigers in Bardiya and sleep in Tharu and Magar villages —
              with major gateways at Bhairahawa and Nepalgunj connecting it to
              India and the rest of Nepal.
            </p>
          </div>
        </div>

        <dl className="lumbini-intro__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="lumbini-intro__fact lumbini-reveal">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="lumbini-intro__belts" aria-label="Geographic regions of Lumbini Province">
          {belts.map((belt, index) => (
            <li key={belt.title} className="lumbini-intro__belt lumbini-reveal">
              <span className="lumbini-intro__belt-index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="lumbini-intro__belt-title">{belt.title}</h3>
              <p className="lumbini-intro__belt-places">{belt.places}</p>
              <p className="lumbini-intro__belt-text">{belt.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
