import Link from "next/link";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-plan.css";

const seasons = [
  {
    months: "Oct – Nov",
    label: "Best overall",
    pokhara: "Crisp, clear days and the sharpest mountain reflections on Phewa.",
    trekking: "Peak trekking season across Annapurna and Manaslu; Thorong La is usually open.",
    mustang: "Dry and sunny, with cold nights; ideal for Muktinath and Lo Manthang.",
  },
  {
    months: "Mar – May",
    label: "Spring",
    pokhara: "Warm days; haze can soften views later in the season.",
    trekking: "Rhododendrons bloom on the Poon Hill and Ghandruk trails.",
    mustang: "Good conditions; spring winds pick up in the Kali Gandaki valley.",
  },
  {
    months: "Dec – Feb",
    label: "Winter",
    pokhara: "Mild and mostly clear — a quiet time for lakes and viewpoints.",
    trekking: "Lower treks are fine; snow can close Thorong La and high routes.",
    mustang: "Very cold, and many Upper Mustang lodges close for winter.",
  },
  {
    months: "Jun – Sep",
    label: "Monsoon",
    pokhara: "One of Nepal's wettest cities: lush, green and often cloudy.",
    trekking: "Leeches, slippery trails and landslide-prone roads in the hills.",
    mustang: "Rain-shadow country — the classic season for Upper Mustang treks.",
  },
];

const reach = [
  {
    title: "By air",
    points: [
      "Pokhara International Airport — frequent short domestic flights from Kathmandu.",
      "Jomsom airstrip — early-morning flights from Pokhara up the Kali Gandaki; weather delays are common, so keep a buffer day.",
    ],
  },
  {
    title: "By road",
    points: [
      "Kathmandu → Pokhara on the Prithvi Highway (about 200 km), passing the turn-offs for Manakamana (Kurintar), Gorkha and Bandipur.",
      "Chitwan → Pokhara via Mugling, joining the Prithvi Highway.",
      "Onward roads run from Beni up the Kali Gandaki to Jomsom and Muktinath, and from Besisahar towards Manang — mostly jeep tracks with seasonal disruptions.",
    ],
  },
  {
    title: "From India",
    points: [
      "Sonauli ↔ Belahiya (Bhairahawa) is the most convenient crossing: continue via Butwal and the Siddhartha Highway through Tansen to Pokhara. Gorakhpur is the nearest major railhead.",
      "Gautam Buddha International Airport at Bhairahawa is another entry point near the border.",
      "Raxaul ↔ Birgunj suits travellers from Bihar, continuing towards Narayanghat and Mugling.",
    ],
  },
];

const altitude = [
  "Above 3,000 m, ascend gradually and build in rest days — Manang is the classic acclimatisation stop before Thorong La (5,416 m).",
  "Muktinath (around 3,700 m) can be reached quickly by road or air: overnight lower in Jomsom or Kagbeni, walk slowly and stay hydrated.",
  "Know the signs of altitude sickness — headache, nausea, dizziness, breathlessness at rest — and descend if they worsen.",
  "Carry insurance that covers high-altitude trekking and helicopter evacuation, and consult a doctor before travel if you have health concerns.",
];

const responsible = [
  "Carry an Annapurna Conservation Area permit; Upper Mustang and Manaslu need restricted-area permits and a licensed guide.",
  "Refill water bottles at safe drinking-water stations and pack out plastic and batteries.",
  "Walk clockwise around chortens and mani walls, and ask before photographing people or shrines.",
  "Stay in community homestays and family-run teahouses so income stays in villages.",
  "Dress modestly at temples and remove shoes where required — especially at Muktinath and Manakamana.",
  "Stick to marked trails in conservation areas and never feed or disturb wildlife.",
];

export default function GandakiPlan() {
  return (
    <section className="gandaki-plan" id="plan-your-visit" aria-labelledby="gandaki-plan-title">
      <div className="gandaki-plan__inner">
        <GandakiSectionHeading
          index="11"
          eyebrow="PLAN YOUR VISIT"
          heading="When to go,"
          emphasis="how to get there."
          titleId="gandaki-plan-title"
          description="Gandaki's seasons differ sharply between the lakes, the trekking hills and the rain-shadow valleys of Mustang — here is how to time each."
        />

        <div className="gandaki-plan__block">
          <h3 className="gandaki-plan__block-title">Best time to visit</h3>
          <ul className="gandaki-plan__seasons">
            {seasons.map((season) => (
              <li key={season.months} className="gandaki-plan__season gandaki-reveal">
                <span className="gandaki-plan__season-label">{season.label}</span>
                <span className="gandaki-plan__season-months">{season.months}</span>
                <dl className="gandaki-plan__season-regions">
                  <div>
                    <dt>Pokhara & lakes</dt>
                    <dd>{season.pokhara}</dd>
                  </div>
                  <div>
                    <dt>Trekking hills</dt>
                    <dd>{season.trekking}</dd>
                  </div>
                  <div>
                    <dt>Mustang & Manang</dt>
                    <dd>{season.mustang}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>

        <div className="gandaki-plan__block">
          <h3 className="gandaki-plan__block-title">How to reach</h3>
          <div className="gandaki-plan__reach">
            {reach.map((group) => (
              <div key={group.title} className="gandaki-plan__card gandaki-reveal">
                <h4 className="gandaki-plan__card-title">{group.title}</h4>
                <ul className="gandaki-plan__points">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="gandaki-plan__small">
            Indian citizens need no visa for Nepal (carry a passport or Voter ID). Road
            conditions in the mountains change with the season — we confirm routes and
            transport before you travel.
          </p>
        </div>

        <div className="gandaki-plan__columns">
          <div className="gandaki-plan__block gandaki-plan__block--panel gandaki-reveal">
            <h3 className="gandaki-plan__block-title">Altitude & trek preparation</h3>
            <ul className="gandaki-plan__tips">
              {altitude.map((tip) => (
                <li key={tip} className="gandaki-plan__tip">
                  <span aria-hidden="true">▲</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="gandaki-plan__block gandaki-plan__block--panel gandaki-reveal" id="responsible-travel">
            <h3 className="gandaki-plan__block-title">Responsible travel</h3>
            <ul className="gandaki-plan__tips">
              {responsible.map((tip) => (
                <li key={tip} className="gandaki-plan__tip">
                  <span aria-hidden="true">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="gandaki-plan__help">
          Not sure which season or route fits your group?{" "}
          <Link href="/contact">Ask a Karvaahh specialist →</Link>
        </p>
      </div>
    </section>
  );
}
