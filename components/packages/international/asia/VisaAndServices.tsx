import { BookUser, Info, MessageCircle, Plane, Hotel, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { travelServices, visaPoints } from "@/data/asia-content";
import { VISA_ENQUIRY } from "@/lib/asia/config";
import Reveal from "../../Reveal";

const SERVICE_ICONS: Record<(typeof travelServices)[number]["icon"], LucideIcon> = {
  plane: Plane,
  hotel: Hotel,
  meal: UtensilsCrossed,
};

export function VisaAssistance() {
  return (
    <section className="pkg-section" id="visa" aria-labelledby="visa-h">
      <div className="pkg-container asia-visa">
        <Reveal className="asia-visa__intro">
          <span className="asia-visa__icon" aria-hidden="true"><BookUser size={28} /></span>
          <p className="asia-eyebrow">Visa &amp; travel assistance</p>
          <h2 id="visa-h" className="pkg-h2">Paperwork, Explained Honestly</h2>
          <p className="pkg-lede">
            Entry rules across Asia differ widely. We help you understand what applies to your passport and route, and
            assist with applications where we can.
          </p>
          <a href={VISA_ENQUIRY} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--navy">
            <MessageCircle size={18} aria-hidden="true" /> Ask About Visa Assistance
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </Reveal>
        <ul className="asia-visa__list">
          {visaPoints.map((p, i) => (
            <li key={p} style={{ "--i": i } as React.CSSProperties}>
              <Reveal className="asia-visa__item">
                <span className="asia-visa__n" aria-hidden="true">{i + 1}</span>
                <p>{p}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TravelServices() {
  return (
    <section className="pkg-section pkg-section--sand" id="services" aria-labelledby="services-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">What we arrange</p>
          <h2 id="services-h" className="pkg-h2">Flights, Hotels &amp; Meals</h2>
        </div>
        <ul className="asia-services">
          {travelServices.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <li key={s.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-service">
                  <span className="asia-service__icon"><Icon size={26} aria-hidden="true" /></span>
                  <h3 className="asia-service__title">{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="asia-services__note">
          <Info size={15} aria-hidden="true" /> Exact inclusions vary by itinerary and package.
        </p>
      </div>
    </section>
  );
}
