import SectionHeading from "@/components/shared/SectionHeading";
import { essentialItems, essentialsIntro, essentialsNote } from "@/data/destinations/rara-lake/content";
import "./RaraLakeEssentials.css";

export default function RaraLakeEssentials() {
  return (
    <section className="rara-essentials" aria-labelledby="rara-essentials-heading">
      <SectionHeading
        eyebrow="Before You Go"
        title="Travel Essentials & Safety"
        description={essentialsIntro}
      />
      <ul className="rara-essentials__list">
        {essentialItems.map((item) => (
          <li key={item.id} className="rara-essentials__item">
            <svg className="rara-essentials__icon" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M4 10.5l3.5 3.5L16 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="rara-essentials__note" role="note">
        {essentialsNote}
      </div>
    </section>
  );
}
