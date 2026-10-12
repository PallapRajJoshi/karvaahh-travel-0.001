import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-intro.css";

const facts = [
  { value: "8", label: "Districts" },
  { value: "Janakpurdham", label: "Provincial capital" },
  { value: "Terai plains", label: "Landscape" },
  { value: "Bihar, India", label: "Shares border with" },
];

const reasons = [
  {
    title: "Ramayana heritage",
    text: "Janakpurdham, revered as the birthplace of Sita, is one of the most important Ramayana pilgrimage cities in South Asia.",
  },
  {
    title: "Living Mithila culture",
    text: "Mithila painting, Maithili songs and festival rituals are still part of everyday village life, not museum pieces.",
  },
  {
    title: "Medieval history",
    text: "Simraungadh and the region's temple towns tell the story of the kingdoms that once ruled the Mithila plains.",
  },
  {
    title: "Quiet wild places",
    text: "Parsa's sal forests and the Koshi Tappu wetlands offer wildlife and birdwatching away from the crowds.",
  },
  {
    title: "Easy from India",
    text: "Several border crossings, the Janakpur–Jaynagar railway and short flights from Kathmandu make it easy to reach.",
  },
  {
    title: "Festivals with soul",
    text: "Chhath at the ponds, Vivaha Panchami in Janakpur and Holi on the plains are among Nepal's most joyful celebrations.",
  },
];

export default function MadheshIntro() {
  return (
    <section className="madhesh-intro" id="overview" aria-labelledby="madhesh-intro-title">
      <div className="madhesh-container">
        <div className="madhesh-intro__lead">
          <MadheshSectionHeading
            eyebrow="Province at a Glance"
            titleId="madhesh-intro-title"
            heading={
              <>
                The plains where{" "}
                <span className="madhesh-gold-italic">Mithila lives.</span>
              </>
            }
          />
          <div className="madhesh-intro__copy">
            <p>
              Madhesh Province is a long, flat ribbon of the Terai in
              south-eastern Nepal, running from the Koshi River in the east to
              Parsa in the west. Its eight districts — Saptari, Siraha,
              Dhanusha, Mahottari, Sarlahi, Rautahat, Bara and Parsa — sit
              between the forested Chure (Siwalik) hills to the north and the
              Indian state of Bihar to the south.
            </p>
            <p>
              Rivers such as the Kamala, Bagmati and Koshi water a landscape of
              rice fields, mango groves and sacred ponds. It is one of
              Nepal&apos;s most densely populated regions, home to Maithili,
              Bhojpuri and Bajjika-speaking communities, Tharu villages and a
              deep, shared heritage with the wider Mithila region across the
              border.
            </p>
          </div>
        </div>

        <dl className="madhesh-intro__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="madhesh-intro__fact madhesh-reveal">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="madhesh-intro__why">
          <h3 className="madhesh-intro__why-title">Why visit Madhesh Province</h3>
          <ul className="madhesh-intro__reasons">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="madhesh-intro__reason madhesh-reveal">
                <span className="madhesh-intro__reason-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h4 className="madhesh-intro__reason-title">{reason.title}</h4>
                <p className="madhesh-intro__reason-text">{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
