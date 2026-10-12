import Link from "next/link";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-intro.css";

const facts = [
  { value: "11", label: "Districts" },
  { value: "Pokhara", label: "Provincial capital" },
  { value: "≈21,800 km²", label: "Area" },
  { value: "8,167 m", label: "Highest point · Dhaulagiri I" },
];

const belts = [
  {
    title: "Trans-Himalaya",
    places: "Mustang · upper Manang",
    description:
      "North of the main range, rain-shadow valleys of eroded cliffs, barley fields and Tibetan-influenced villages receive little of the monsoon.",
  },
  {
    title: "High Himalaya",
    places: "Annapurna · Dhaulagiri · Manaslu",
    description:
      "Three 8,000 m massifs, with Machhapuchhre, Nilgiri and Lamjung Himal, form the northern wall — split by the deep Kali Gandaki gorge between Dhaulagiri and Annapurna.",
  },
  {
    title: "Middle Hills & Lakes",
    places: "Kaski · Lamjung · Syangja · Tanahun · Parbat · Baglung · Myagdi · Gorkha",
    description:
      "Terraced ridges, Gurung and Magar villages and the Pokhara valley's lakes — Phewa, Begnas and Rupa — fed by snowmelt rivers.",
  },
  {
    title: "River Valleys & Lowlands",
    places: "Nawalpur · Kali Gandaki · Seti · Marsyangdi",
    description:
      "Snow-fed rivers drain south through deep valleys towards the Narayani, which forms at Devghat and flows past Nawalpur's subtropical forests.",
  },
];

const jumpLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#routes", label: "Suggested routes" },
  { href: "#plan-your-visit", label: "Plan your visit" },
  { href: "#packages", label: "Tours" },
  { href: "#faq", label: "FAQ" },
];

export default function GandakiIntro() {
  return (
    <section className="gandaki-intro" id="overview" aria-labelledby="gandaki-intro-title">
      <div className="gandaki-intro__inner">
        <div className="gandaki-intro__lead">
          <GandakiSectionHeading
            index="01"
            eyebrow="PROVINCE AT A GLANCE"
            heading="From subtropical rivers"
            emphasis="to the roof of the world."
            titleId="gandaki-intro-title"
          />
          <div className="gandaki-intro__copy gandaki-reveal">
            <p>
              Gandaki Province spans central-western Nepal, climbing from the Narayani lowlands
              of Nawalpur through the middle hills to the high Himalaya and the trans-Himalayan
              desert of Mustang. Pokhara, its capital, sits beside Phewa Lake beneath
              Machhapuchhre and is the gateway to the Annapurna region.
            </p>
            <p>
              No other province packs as much altitude into so little distance. In one journey
              you can paddle a lake at sunrise, trek between Gurung villages, bathe beneath the
              108 spouts of Muktinath and cross Thorong La — one of the world&rsquo;s highest
              trekking passes.
            </p>
          </div>
        </div>

        <dl className="gandaki-intro__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="gandaki-intro__fact gandaki-reveal">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="gandaki-intro__geo">
          <h3 className="gandaki-intro__geo-title">Himalayan geography</h3>
          <ul className="gandaki-intro__belts">
            {belts.map((belt, index) => (
              <li key={belt.title} className="gandaki-intro__belt gandaki-reveal">
                <span className="gandaki-intro__belt-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h4 className="gandaki-intro__belt-title">{belt.title}</h4>
                <p className="gandaki-intro__belt-places">{belt.places}</p>
                <p className="gandaki-intro__belt-text">{belt.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <nav className="gandaki-intro__jump" aria-label="On this page">
          <span className="gandaki-intro__jump-label">Jump to</span>
          <ul>
            {jumpLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
