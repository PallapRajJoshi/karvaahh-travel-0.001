import AvailabilityForm from "./AvailabilityForm";
import NotifyForm from "./NotifyForm";
import { ANCHORS } from "./data/hotAirBalloonData";
import "./EnquirySection.css";

/** Main conversion: availability enquiry + separate notify-me card. */
export default function EnquirySection() {
  return (
    <section className="hab-section hab-enquiry" aria-label="Availability enquiry">
      <div className="hab-container hab-enquiry__grid">
        <div id={ANCHORS.availability} className="hab-enquiry__main">
          <h2 className="hab-enquiry__title">Check Hot Air Balloon Availability</h2>
          <p className="hab-enquiry__lede">
            Tell us where and when you would like to fly. We&apos;ll check whether an operator or
            scheduled experience is currently available.
          </p>
          <AvailabilityForm />
        </div>

        <aside id={ANCHORS.notify} className="hab-enquiry__notify" aria-labelledby="hab-notify-title">
          <h2 id="hab-notify-title" className="hab-enquiry__notify-title">Flights Not Operating Yet?</h2>
          <p className="hab-enquiry__notify-text">
            Leave your details and tell us where you want to fly. We&apos;ll use your enquiry to help
            you check when balloon experiences become available again.
          </p>
          <NotifyForm />
        </aside>
      </div>
    </section>
  );
}
