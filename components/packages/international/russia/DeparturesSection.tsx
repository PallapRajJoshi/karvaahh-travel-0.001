import { MessageCircle, PlaneTakeoff } from "lucide-react";
import { departures, type DepartureAvailability } from "@/data/russia/transport";
import { enquireAbout } from "@/lib/russia/config";

const AVAILABILITY: Record<DepartureAvailability, string> = {
  available: "Departures available",
  "on-request": "On request",
  check: "Ask us to check",
};

const CONFIRMED_AT_QUOTE = "Confirmed at quote";

/** Departure gateways from data/russia/transport.ts. Nothing about routes is hard-coded here. */
export default function DeparturesSection() {
  return (
    <section className="pkg-section pkg-section--sand" id="departures" aria-labelledby="departures-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Travel from Nepal & India</p>
          <h2 id="departures-h" className="pkg-h2">Start Your Russia Journey from Nepal or India</h2>
          <p className="pkg-lede">
            Airlines, connections and seat availability change. We confirm the current routing for your date when you enquire.
          </p>
        </div>
        <div className="ru-departures" role="table" aria-label="Departure gateways">
          <div className="ru-departures__row ru-departures__row--head" role="row">
            <span role="columnheader">Departure city</span>
            <span role="columnheader">Gateway</span>
            <span role="columnheader">Airline</span>
            <span role="columnheader">Connection</span>
            <span role="columnheader">Availability</span>
            <span role="columnheader"><span className="pkg-sr">Action</span></span>
          </div>
          {departures.map((d) => (
            <div key={d.departureCity} className="ru-departures__row" role="row">
              <span role="cell" data-label="Departure city"><PlaneTakeoff size={16} aria-hidden="true" /> <strong>{d.departureCity}</strong>, {d.country}</span>
              <span role="cell" data-label="Gateway">{d.departureGateway ?? CONFIRMED_AT_QUOTE}</span>
              <span role="cell" data-label="Airline">{d.airline ?? CONFIRMED_AT_QUOTE}</span>
              <span role="cell" data-label="Connection">{d.connection ?? CONFIRMED_AT_QUOTE}</span>
              <span role="cell" data-label="Availability"><span className={`ru-avail ru-avail--${d.availability}`}>{AVAILABILITY[d.availability]}</span></span>
              <span role="cell">
                <a href={enquireAbout(`Russia trip departing from ${d.departureCity}`)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline ru-departures__btn">
                  <MessageCircle size={15} aria-hidden="true" /> Check dates
                  <span className="pkg-sr"> from {d.departureCity} (opens WhatsApp)</span>
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
