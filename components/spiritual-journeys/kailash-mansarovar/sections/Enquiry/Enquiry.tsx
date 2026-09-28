import Link from "next/link";
import Icon from "../../shared/Icon";
import { ENQUIRY, WHATSAPP_MESSAGE } from "../../lib/site";
import "./Enquiry.css";

const WE_WILL_ASK = [
  "Your nationality and passport",
  "Your preferred route: overland or helicopter-assisted",
  "When you would like to travel",
  "How many people are travelling",
  "Any medical considerations we should plan around",
];

export default function Enquiry() {
  const whatsappHref = ENQUIRY.whatsappNumber
    ? `https://wa.me/${ENQUIRY.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : "";

  return (
    <section id="plan-your-yatra" className="km-section km-enquiry" aria-labelledby="enquiry-title">
      <div className="km-container km-enquiry__grid">
        <div>
          <p className="km-enquiry__marker">Karvaahh – Live to Travel</p>
          <h2 id="enquiry-title" className="km-enquiry__title">
            Plan Your Kailash Mansarovar Yatra
          </h2>
          <p className="km-enquiry__text">
            Tell us about your plans and we will advise on the route, the current permit situation and an
            acclimatisation schedule that suits your group. There is no obligation to book.
          </p>
          <div className="km-enquiry__actions">
            <Link href={ENQUIRY.contactHref} className="km-btn km-btn--primary">
              <Icon name="message" />
              Send an enquiry
            </Link>
            {whatsappHref && (
              <a href={whatsappHref} className="km-btn km-btn--outline-light" target="_blank" rel="noopener noreferrer">
                <Icon name="phone" />
                Chat on WhatsApp
              </a>
            )}
            {ENQUIRY.email && (
              <a href={`mailto:${ENQUIRY.email}`} className="km-btn km-btn--outline-light">
                <Icon name="mail" />
                Email us
              </a>
            )}
          </div>
          {ENQUIRY.phone.display && (
            <p className="km-enquiry__phone">
              Or call <a href={ENQUIRY.phone.href}>{ENQUIRY.phone.display}</a>
            </p>
          )}
        </div>

        <div className="km-enquiry__ask">
          <h3 className="km-enquiry__ask-title">To give you useful advice, we will ask about</h3>
          <ul className="km-enquiry__ask-list">
            {WE_WILL_ASK.map((item) => (
              <li key={item}>
                <Icon name="check" className="km-enquiry__check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
