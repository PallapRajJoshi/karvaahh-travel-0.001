import { packages } from "../data/packages";
import SectionHeading from "../ui/SectionHeading";
import PackageCard from "../ui/PackageCard";
import Icon from "../ui/Icon";
import "../styles/packages.css";

const legend = [
  { icon: "boot", label: "On foot", text: "Classic teahouse trek, both ways on the trail" },
  { icon: "helicopter", label: "Helicopter-assisted", text: "Trek up, fly back — weather-dependent" },
  { icon: "star", label: "Luxury lodges", text: "Best available lodging each night" },
];

export default function TrekPackages() {
  return (
    <section id="packages" className="ebc-section ebc-section--alt ebc-packages" aria-labelledby="ebc-packages-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-packages-title"
          eyebrow="Trek Packages"
          title="Choose Your Everest Adventure"
          subtitle="Explore customized trekking experiences designed around your preferred pace, travel style, and schedule."
          align="center"
        />

        <ul className="ebc-packages__legend" aria-label="Ways to trek" data-reveal="">
          {legend.map((l) => (
            <li key={l.label}>
              <Icon name={l.icon} />
              <span>
                <strong>{l.label}</strong> — {l.text}
              </span>
            </li>
          ))}
        </ul>

        <ul className="ebc-packages__grid">
          {packages.map((p, i) => (
            <PackageCard key={p.slug} pkg={p} index={i} />
          ))}
        </ul>

        <p className="ebc-packages__disclaimer" data-reveal="">
          <Icon name="info" />
          Prices, departure dates, inclusions and availability are confirmed individually on enquiry. Every itinerary can be adjusted to your dates and pace.
        </p>
      </div>
    </section>
  );
}
