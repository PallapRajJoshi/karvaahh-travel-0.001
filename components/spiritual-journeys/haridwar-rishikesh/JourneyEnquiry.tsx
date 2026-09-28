import Link from "next/link";
import EnquiryForm from "./EnquiryForm";
import Icon from "./Icon";
import { ROUTES, SECTION } from "./data/config";
import "./journey-enquiry.css";

const PROMISES = [
  "An itinerary shaped around your dates, pace and starting point",
  "Clear inclusions before you commit — no surprises",
  "Planning for senior travellers and mobility needs",
];

export default function JourneyEnquiry() {
  return (
    <section
      id={SECTION.enquire}
      className="hry-section hry-section--dark hry-enq"
      aria-labelledby="hry-enq-title"
    >
      <div className="hry-container hry-enq__grid">
        <div className="hry-enq__pitch">
          <h2 id="hry-enq-title" className="hry-enq__title">
            Begin your sacred journey with Karvaahh
          </h2>
          <p className="hry-enq__text">
            Experience the spiritual beauty of Haridwar and Rishikesh with a pilgrimage itinerary
            tailored to your travel preferences, accommodation needs and preferred sightseeing.
          </p>
          <ul className="hry-enq__promises">
            {PROMISES.map((p) => (
              <li key={p}>
                <Icon name="check" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="hry-enq__ctas">
            <a href="#hry-enquiry-form" className="hry-btn hry-btn--primary">
              Enquire now
            </a>
            <a href="#hry-enquiry-form" className="hry-btn hry-btn--outline-light">
              Customize your package
            </a>
            <Link href={ROUTES.contact} className="hry-btn hry-btn--text">
              Contact Karvaahh
            </Link>
          </div>
        </div>

        <div className="hry-enq__card" id="hry-enquiry-form">
          <h3 className="hry-enq__form-title">Plan your Haridwar &amp; Rishikesh Yatra</h3>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
