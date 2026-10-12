import React from "react";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import "./bagmati-intro.css";

const facts = [
  { value: "13", label: "Districts" },
  { value: "7", label: "UNESCO monument zones in Kathmandu Valley" },
  { value: "~150 m – 7,000 m+", label: "From Chitwan's lowlands to Langtang's peaks" },
  { value: "Hetauda", label: "Provincial capital" },
];

const reasons = [
  {
    title: "Living heritage",
    text: "Durbar squares, stupas and Newar towns where centuries-old festivals still fill the streets.",
  },
  {
    title: "Himalaya within reach",
    text: "Langtang, Gosaikunda and Helambu treks start a single drive from Kathmandu — no domestic flight needed.",
  },
  {
    title: "Two great faiths",
    text: "Pashupatinath for Hindu pilgrims; Boudhanath, Swayambhunath and Namo Buddha for Buddhists.",
  },
  {
    title: "Jungle to glacier",
    text: "Rhino safaris in Chitwan and alpine lakes in Rasuwa sit in the same province.",
  },
];

export default function BagmatiIntro() {
  return (
    <section className="bagmati-intro" id="overview" aria-label="About Bagmati Province">
      <div className="bagmati-intro__lead">
        <BagmatiSectionHeading
          eyebrow="Province Overview"
          heading={
            <>
              Nepal&apos;s heartland, from <em>valley</em> to summit
            </>
          }
        />
        <div className="bagmati-intro__copy">
          <p>
            Bagmati Province sits at the centre of Nepal, wrapping around the
            Kathmandu Valley and stretching north to the Tibetan border and
            south to the Chitwan lowlands. Its 13 districts include Kathmandu,
            Lalitpur and Bhaktapur — the valley&apos;s three royal cities — along
            with the Himalayan districts of Rasuwa, Sindhupalchok and Dolakha.
          </p>
          <p>
            Few regions pack so much into so little distance. In a week you
            can move from UNESCO-listed temple squares to the glaciers of
            Langtang, or from the ghats of Pashupatinath to a canoe on the
            Rapti River — and Kathmandu&apos;s international airport makes it the
            natural starting point for almost every Nepal journey.
          </p>
        </div>
      </div>

      <dl className="bagmati-intro__facts">
        {facts.map((fact) => (
          <div className="bagmati-intro__fact bagmati-reveal" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="bagmati-intro__why">
        <h3 className="bagmati-intro__why-title">Why visit Bagmati Province</h3>
        <ul className="bagmati-intro__reasons">
          {reasons.map((reason) => (
            <li className="bagmati-intro__reason bagmati-reveal" key={reason.title}>
              <h4>{reason.title}</h4>
              <p>{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
