import React from "react";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-plan.css";

const flavours = [
  {
    culture: "Newar",
    text: "Samay baji feast platters, yomari dumplings, bara lentil patties, chatamari and Bhaktapur's juju dhau curd.",
  },
  {
    culture: "Tamang & Hyolmo",
    text: "Thukpa noodle soup, tsampa, butter tea, buckwheat breads and village-made cheese in Langtang and Helambu.",
  },
  {
    culture: "Tharu",
    text: "Dhikri rice dumplings, river fish and ghonghi snail curry, served with warm hospitality in Chitwan homestays.",
  },
];

const festivals = [
  { name: "Maha Shivaratri", where: "Pashupatinath", when: "Feb–Mar" },
  { name: "Gyalpo & Sonam Lhosar", where: "Boudhanath, Tamang villages", when: "Jan–Mar" },
  { name: "Bisket Jatra", where: "Bhaktapur", when: "April (Nepali New Year)" },
  { name: "Rato Machhindranath Jatra", where: "Patan", when: "Spring" },
  { name: "Janai Purnima", where: "Gosaikunda, Panch Pokhari", when: "Aug" },
  { name: "Indra Jatra", where: "Kathmandu Durbar Square", when: "Sept" },
  { name: "Dashain & Tihar", where: "Across the province", when: "Oct–Nov" },
];

const seasons = [
  {
    season: "Autumn",
    months: "Oct – Nov",
    text: "Clear Himalayan views, stable trekking weather and the Dashain and Tihar festivals. Peak season — book early.",
    best: true,
  },
  {
    season: "Spring",
    months: "Mar – May",
    text: "Rhododendron forests in bloom on Langtang trails and good wildlife sightings in Chitwan; the lowlands grow hot by May.",
    best: true,
  },
  {
    season: "Winter",
    months: "Dec – Feb",
    text: "Crisp, sunny days for valley heritage tours and hill sunrises. High passes such as Lauribina La can be snowbound.",
  },
  {
    season: "Monsoon",
    months: "Jun – Sep",
    text: "Lush and quiet, but expect rain, cloud and landslide delays on mountain roads. Pilgrims still visit Gosaikunda for Janai Purnima.",
  },
];

const access = [
  {
    title: "By air",
    text: "Tribhuvan International Airport in Kathmandu has direct flights from Delhi, Varanasi, Kolkata, Mumbai and other hubs across Asia and the Gulf. Bharatpur Airport serves Chitwan with short domestic hops.",
  },
  {
    title: "From India by road",
    text: "The Raxaul–Birgunj crossing is the most direct road link, continuing via Hetauda into Bagmati. Sunauli–Bhairahawa suits travellers combining Lumbini, Chitwan and Kathmandu.",
  },
  {
    title: "Entry for Indian travellers",
    text: "Indian citizens do not need a visa for Nepal. Carry a valid passport or Election Commission voter ID — other IDs are not accepted for entry.",
  },
];

const transport = [
  "Private car or jeep with driver — the most comfortable option for heritage circuits and Chitwan transfers.",
  "Tourist buses link Kathmandu with Chitwan (Sauraha) daily; local buses and jeeps run to Syabrubesi for Langtang.",
  "Taxis and ride-hailing apps cover the Kathmandu Valley; walking is often fastest in the old cores of Patan and Bhaktapur.",
  "Mountain roads are slow — budget generous time and avoid night driving in the hills.",
];

const tips = [
  "Foreign trekkers need national park permits and a licensed guide for Langtang and Gosaikunda — we arrange both.",
  "Gosaikunda sits around 4,380 m. Ascend gradually and watch for signs of altitude sickness.",
  "Walk clockwise around stupas and prayer wheels, dress modestly and remove shoes where asked.",
  "The main Pashupatinath shrine is open to Hindus only; observe cremation ghats quietly and without close-up photos.",
  "Heritage zones charge entry fees for foreign visitors — keep tickets handy, as they may be checked more than once.",
  "Carry a refillable bottle, choose locally owned homestays and buy crafts directly from artisans.",
];

/** Food, festivals and living traditions. */
export function BagmatiTraditions() {
  return (
    <section className="bagmati-traditions" id="traditions" aria-label="Food, festivals and traditions of Bagmati">
      <BagmatiSectionHeading
        eyebrow="Food, Festivals & Traditions"
        heading={
          <>
            A province that <em>celebrates</em>
          </>
        }
        description="Bagmati's Newar, Tamang, Hyolmo and Tharu communities keep a year-round calendar of jatras, feasts and pilgrimages — time your trip right and you'll travel through a festival."
      />

      <div className="bagmati-traditions__layout">
        <div>
          <h3 className="bagmati-plan__subtitle">Taste of Bagmati</h3>
          <ul className="bagmati-traditions__flavours">
            {flavours.map((item) => (
              <li key={item.culture} className="bagmati-reveal">
                <h4>{item.culture}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="bagmati-plan__subtitle">Festival calendar</h3>
          <ul className="bagmati-traditions__festivals">
            {festivals.map((festival) => (
              <li key={festival.name}>
                <span className="bagmati-traditions__festival-name">{festival.name}</span>
                <span className="bagmati-traditions__festival-meta">
                  {festival.where} · {festival.when}
                </span>
              </li>
            ))}
          </ul>
          <p className="bagmati-plan__note">
            Festival dates follow the lunar calendar and shift each year.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Practical planning: seasons, access, transport and responsible-travel tips. */
export default function BagmatiPlan() {
  return (
    <section className="bagmati-plan" id="plan" aria-label="Plan your Bagmati trip">
      <BagmatiSectionHeading
        eyebrow="Travel Essentials"
        heading={
          <>
            Plan your <em>Bagmati</em> trip
          </>
        }
      />

      <div className="bagmati-plan__block">
        <h3 className="bagmati-plan__subtitle">Best time to visit</h3>
        <ul className="bagmati-plan__seasons">
          {seasons.map((s) => (
            <li key={s.season} className={`bagmati-reveal${s.best ? " is-best" : ""}`}>
              <span className="bagmati-plan__months">{s.months}</span>
              <h4>
                {s.season}
                {s.best && <span className="bagmati-plan__badge">Best</span>}
              </h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bagmati-plan__columns">
        <div className="bagmati-plan__block">
          <h3 className="bagmati-plan__subtitle">How to reach</h3>
          <dl className="bagmati-plan__access">
            {access.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bagmati-plan__block">
          <h3 className="bagmati-plan__subtitle">Getting around</h3>
          <ul className="bagmati-plan__list">
            {transport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bagmati-plan__block">
        <h3 className="bagmati-plan__subtitle">Responsible travel & practical tips</h3>
        <ul className="bagmati-plan__tips">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
