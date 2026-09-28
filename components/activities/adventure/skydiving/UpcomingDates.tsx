import NotifyLink from "./NotifyLink";
import SectionHeading from "./SectionHeading";
import { NOTIFY_INTERESTS, upcomingSection, type NotifyInterest } from "./data/skydivingData";
import { upcomingSkydivingDates, type SkydiveDateStatus, type UpcomingSkydiveDate } from "./data/upcomingSkydivingDates";
import "./UpcomingDates.css";

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

const statusLabel: Record<SkydiveDateStatus, string> = {
  announced: "Announced",
  confirmed: "Operator confirmed",
  limited: "Limited places",
  closed: "Closed",
};

function formatRange(d: UpcomingSkydiveDate) {
  const start = new Date(d.dateStart);
  const end = d.dateEnd ? new Date(d.dateEnd) : null;
  return end && d.dateEnd !== d.dateStart ? `${dateFmt.format(start)} – ${dateFmt.format(end)}` : dateFmt.format(start);
}

function toInterest(destination: string): NotifyInterest {
  return (NOTIFY_INTERESTS as readonly string[]).includes(destination) ? (destination as NotifyInterest) : "Any Nepal Event";
}

/** Server-rendered from data; past dates are hidden at build/revalidate time. */
export default function UpcomingDates() {
  const today = new Date().toISOString().slice(0, 10);
  const dates = upcomingSkydivingDates
    .filter((d) => (d.dateEnd || d.dateStart) >= today)
    .sort((a, b) => a.dateStart.localeCompare(b.dateStart));

  return (
    <section id="upcoming-dates" className="sky-section" aria-labelledby="sky-dates-title">
      <div className="sky-container">
        <SectionHeading id="sky-dates-title" title={upcomingSection.heading} />

        {dates.length === 0 ? (
          <div className="sky-dates-empty">
            <div>
              <p className="sky-dates-empty__title">{upcomingSection.emptyTitle}</p>
              <p className="sky-dates-empty__text">{upcomingSection.emptyText}</p>
            </div>
            <NotifyLink className="sky-btn sky-btn--dark">{upcomingSection.cta}</NotifyLink>
          </div>
        ) : (
          <ul className="sky-dates">
            {dates.map((d) => (
              <li key={`${d.destination}-${d.dateStart}-${d.operator}`} className="sky-date">
                <div className="sky-date__main">
                  <p className="sky-date__when">{formatRange(d)}</p>
                  <h3 className="sky-date__dest">{d.destination}</h3>
                  {d.operator && <p className="sky-date__op">Operated by {d.operator}</p>}
                </div>
                <div className="sky-date__meta">
                  <span className="sky-status">{statusLabel[d.status]}</span>
                  {d.price && <span className="sky-date__price">{d.price}</span>}
                </div>
                {d.bookingUrl && d.status !== "closed" ? (
                  <a href={d.bookingUrl} className="sky-btn sky-btn--outline" target="_blank" rel="noopener noreferrer">
                    View date details<span className="sky-sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <NotifyLink interest={toInterest(d.destination)} className="sky-btn sky-btn--outline">
                    Enquire about this date
                  </NotifyLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
