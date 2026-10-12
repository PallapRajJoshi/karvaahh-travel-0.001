import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-plan.css";

const seasons = [
  {
    months: "Oct – Nov",
    label: "Best overall",
    text: "Clear skies, mild days and mountain views. Ideal for Lumbini, Tansen, safaris and hill treks.",
  },
  {
    months: "Dec – Feb",
    label: "Cool & calm",
    text: "Pleasant afternoons and peak pilgrim season; expect fog on the plains in early mornings.",
  },
  {
    months: "Mar – Apr",
    label: "Spring",
    text: "Rhododendrons in the hills and good wildlife sightings as grass is cut back. The Terai warms up by April.",
  },
  {
    months: "May – Sep",
    label: "Heat & monsoon",
    text: "Very hot, then wet. Landscapes turn lush, but roads can be disrupted and park access is limited.",
  },
];

const routes = [
  {
    title: "By air",
    points: [
      "Gautam Buddha International Airport, Bhairahawa — about 20 km from Lumbini, with short flights from Kathmandu.",
      "Nepalgunj Airport — the gateway for Banke and Bardiya, with daily flights from Kathmandu.",
    ],
  },
  {
    title: "By road",
    points: [
      "Kathmandu → Lumbini: around 280 km, 7–9 hours via Narayanghat and Butwal.",
      "Pokhara → Lumbini: 7–8 hours on the Siddhartha Highway, via Tansen.",
      "Chitwan → Lumbini: roughly 4–5 hours along the East–West Highway.",
    ],
  },
];

const borders = [
  {
    crossing: "Sonauli ↔ Belahiya (Bhairahawa)",
    bestFor: "Lumbini, Butwal, Tansen",
    note: "Most-used crossing; Lumbini is about 30 km away. Nearest major railhead: Gorakhpur.",
  },
  {
    crossing: "Krishnanagar ↔ Barhni",
    bestFor: "Kapilvastu, Tilaurakot",
    note: "The shortest approach to the Shakya archaeological sites.",
  },
  {
    crossing: "Rupaidiha ↔ Jamunaha (Nepalgunj)",
    bestFor: "Banke, Bardiya, Dang",
    note: "Convenient for travellers coming from Lucknow and central Uttar Pradesh.",
  },
];

const tips = [
  "Dress modestly and remove shoes and hats inside temples and monasteries.",
  "Walk clockwise around stupas and keep voices low in the Sacred Garden.",
  "Ask before photographing people, rituals or the interior of shrines.",
  "Do not touch, climb on or remove anything from archaeological sites.",
  "Use licensed nature guides in Bardiya and Banke and keep a safe distance from wildlife.",
  "Choose community homestays and local guides so tourism income stays in villages.",
  "Carry a reusable bottle and avoid single-use plastic in parks and pilgrimage areas.",
  "Carry cash for the hills — ATMs are scarce outside Butwal, Bhairahawa and Nepalgunj.",
];

export default function LumbiniPlan() {
  return (
    <section className="lumbini-plan" id="plan-your-visit" aria-labelledby="lumbini-plan-title">
      <div className="lumbini-plan__inner">
        <LumbiniSectionHeading
          index="12"
          eyebrow="Plan Your Visit"
          heading="When to go,"
          emphasis="how to get there."
          titleId="lumbini-plan-title"
          description="Practical essentials for timing your trip, arriving from Nepal or India, and travelling respectfully."
        />

        <div className="lumbini-plan__block">
          <h3 className="lumbini-plan__block-title">Best time to visit</h3>
          <ul className="lumbini-plan__seasons">
            {seasons.map((season) => (
              <li key={season.months} className="lumbini-plan__season lumbini-reveal">
                <span className="lumbini-plan__season-label">{season.label}</span>
                <span className="lumbini-plan__season-months">{season.months}</span>
                <p className="lumbini-plan__season-text">{season.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lumbini-plan__block">
          <h3 className="lumbini-plan__block-title">How to reach</h3>
          <div className="lumbini-plan__reach">
            {routes.map((route) => (
              <div key={route.title} className="lumbini-plan__card lumbini-reveal">
                <h4 className="lumbini-plan__card-title">{route.title}</h4>
                <ul className="lumbini-plan__points">
                  {route.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lumbini-plan__card lumbini-plan__card--border lumbini-reveal">
              <h4 className="lumbini-plan__card-title">From India — border crossings</h4>
              <ul className="lumbini-plan__borders">
                {borders.map((border) => (
                  <li key={border.crossing} className="lumbini-plan__border">
                    <span className="lumbini-plan__border-name">{border.crossing}</span>
                    <span className="lumbini-plan__border-for">Best for: {border.bestFor}</span>
                    <span className="lumbini-plan__border-note">{border.note}</span>
                  </li>
                ))}
              </ul>
              <p className="lumbini-plan__small">
                Indian citizens need no visa (carry a passport or Voter ID).
                Indian vehicles need a customs permit at the border. Check
                crossing hours before you travel.
              </p>
            </div>
          </div>
        </div>

        <div className="lumbini-plan__block" id="responsible-travel">
          <h3 className="lumbini-plan__block-title">Responsible travel tips</h3>
          <ul className="lumbini-plan__tips">
            {tips.map((tip) => (
              <li key={tip} className="lumbini-plan__tip">
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
