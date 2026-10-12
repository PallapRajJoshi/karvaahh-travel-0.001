import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-plan.css";

const seasons = [
  {
    months: "Oct – Nov",
    label: "Best overall",
    text: "Clear, comfortable days and the festival season of Deepawali, Chhath and Vivaha Panchami.",
  },
  {
    months: "Dec – Feb",
    label: "Cool & calm",
    text: "Pleasant afternoons and peak pilgrim season. Dense morning fog can delay roads and flights.",
  },
  {
    months: "Mar – Apr",
    label: "Spring",
    text: "Holi and Ram Navami, good wildlife viewing in Parsa, but the plains heat up quickly by April.",
  },
  {
    months: "May – Sep",
    label: "Heat & monsoon",
    text: "Very hot, then wet. Fields turn green, but floods and road disruption are possible.",
  },
];

const routes = [
  {
    title: "By air",
    points: [
      "Janakpur Airport — regular flights from Kathmandu for Janakpurdham and Dhanusha.",
      "Simara Airport (Bara) — the air gateway for Birgunj, Parsa and Simraungadh.",
    ],
  },
  {
    title: "By road & rail",
    points: [
      "The East–West (Mahendra) Highway crosses the whole province, with links south to every district centre.",
      "From Kathmandu, roads reach Janakpur via the BP Highway (Sindhuli–Bardibas) and Birgunj via Hetauda.",
      "The Janakpur–Jaynagar railway connects Janakpurdham with Jaynagar in Bihar.",
    ],
  },
];

const borders = [
  {
    crossing: "Raxaul ↔ Birgunj",
    bestFor: "Birgunj, Parsa, Simraungadh",
    note: "The busiest India–Nepal crossing, with good road links into Nepal.",
  },
  {
    crossing: "Jaynagar → Janakpurdham",
    bestFor: "Janakpur, Dhanusha, Mithila villages",
    note: "Cross-border rail and road access from the Madhubani side of Bihar.",
  },
  {
    crossing: "Bhitthamore ↔ Jaleshwar",
    bestFor: "Jaleshwar, Mahottari, Janakpur",
    note: "Convenient for pilgrims coming from Sitamarhi in Bihar.",
  },
];

const tips = [
  "Dress modestly and remove shoes before entering temples and shrines.",
  "Ask before photographing people, rituals and the inside of temples.",
  "During Chhath and other festivals, give devotees space at the ponds and ghats.",
  "Buy Mithila paintings directly from artists or cooperatives so income reaches the makers.",
  "Visit Parsa only with licensed guides and keep a safe distance from wildlife.",
  "Avoid single-use plastic around sacred ponds, rivers and protected areas.",
  "Carry cash for villages and small towns; ATMs are concentrated in Janakpur and Birgunj.",
  "Respect local customs in villages — a greeting of “Pranam” or “Namaste” goes a long way.",
];

export default function MadheshPlan() {
  return (
    <section className="madhesh-plan" id="plan-your-visit" aria-labelledby="madhesh-plan-title">
      <div className="madhesh-container">
        <MadheshSectionHeading
          eyebrow="Plan Your Visit"
          titleId="madhesh-plan-title"
          heading={
            <>
              When to go,{" "}
              <span className="madhesh-gold-italic">how to get there.</span>
            </>
          }
          description="Practical essentials for timing your trip, arriving from Nepal or India, and travelling respectfully."
        />

        <div className="madhesh-plan__block">
          <h3 className="madhesh-plan__block-title">Best time to visit</h3>
          <ul className="madhesh-plan__seasons">
            {seasons.map((season) => (
              <li key={season.months} className="madhesh-plan__season madhesh-reveal">
                <span className="madhesh-plan__season-label">{season.label}</span>
                <span className="madhesh-plan__season-months">{season.months}</span>
                <p className="madhesh-plan__season-text">{season.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="madhesh-plan__block">
          <h3 className="madhesh-plan__block-title">How to reach</h3>
          <div className="madhesh-plan__reach">
            {routes.map((route) => (
              <div key={route.title} className="madhesh-plan__card madhesh-reveal">
                <h4 className="madhesh-plan__card-title">{route.title}</h4>
                <ul className="madhesh-plan__points">
                  {route.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="madhesh-plan__card madhesh-plan__card--border madhesh-reveal">
              <h4 className="madhesh-plan__card-title">From India — border crossings</h4>
              <ul className="madhesh-plan__borders">
                {borders.map((border) => (
                  <li key={border.crossing} className="madhesh-plan__border">
                    <span className="madhesh-plan__border-name">{border.crossing}</span>
                    <span className="madhesh-plan__border-for">Best for: {border.bestFor}</span>
                    <span className="madhesh-plan__border-note">{border.note}</span>
                  </li>
                ))}
              </ul>
              <p className="madhesh-plan__small">
                Indian citizens need no visa (carry a passport or Voter ID).
                Other nationalities should confirm the crossing handles foreign
                visitors. Always use official border points and check crossing
                hours before you travel.
              </p>
            </div>
          </div>
        </div>

        <div className="madhesh-plan__block" id="responsible-travel">
          <h3 className="madhesh-plan__block-title">Responsible travel tips</h3>
          <ul className="madhesh-plan__tips">
            {tips.map((tip) => (
              <li key={tip} className="madhesh-plan__tip">
                <span aria-hidden="true">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
