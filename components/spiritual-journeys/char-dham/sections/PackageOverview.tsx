import { LINKS, packageConfig as pkg, packageHeading } from "../data/charDhamData";
import type { Money } from "../data/types";
import SectionHeading from "../shared/SectionHeading";

const inr = (m: Money) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: m.currency, maximumFractionDigits: 0 }).format(m.amount);

/** Renders only confirmed values; anything empty falls back to honest copy. */
export default function PackageOverview() {
  const facts: { label: string; value: string }[] = [
    { label: "Duration", value: pkg.duration || "Planned around your dates" },
    {
      label: "Start / end",
      value: pkg.startPoint || pkg.endPoint ? `${pkg.startPoint || "—"} to ${pkg.endPoint || "—"}` : "Confirmed with your itinerary",
    },
    { label: "Departure", value: pkg.departure ? `${pkg.departure}${pkg.returnDate ? ` – ${pkg.returnDate}` : ""}` : "Private departures on request" },
    { label: "Transport", value: pkg.vehicle || "Private vehicle with driver" },
    { label: "Meals", value: pkg.mealPlan || "As per selected package" },
    { label: "Stay", value: pkg.accommodation || "Hotels/guesthouses, twin or triple sharing" },
  ];

  let price: { value: string; note: string };
  if (pkg.price) {
    price = { value: inr(pkg.price), note: pkg.priceBasis };
  } else if (pkg.priceFrom && pkg.priceVerifiedOn) {
    price = { value: `From ${inr(pkg.priceFrom)}`, note: `${pkg.priceBasis} · indicative, verified ${pkg.priceVerifiedOn}, subject to confirmation` };
  } else {
    price = { value: "Price on request", note: "Quoted for your dates, group size and hotel category" };
  }

  return (
    <div className="cd-package__overview">
      <SectionHeading id="package-title" title={packageHeading.heading} intro={<p>{packageHeading.intro}</p>} />
      <div className="cd-package__panel" data-reveal>
        <dl className="cd-package__facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="cd-package__price">
          <p className="cd-package__price-value">{price.value}</p>
          <p className="cd-package__price-note">{price.note}</p>
          <a href={`${LINKS.enquiry}?interest=char-dham-yatra&topic=package`} className="cd-btn cd-btn--primary">
            Request Package Details
          </a>
        </div>
        <p className="cd-package__custom">{pkg.customNote}</p>
      </div>
    </div>
  );
}
