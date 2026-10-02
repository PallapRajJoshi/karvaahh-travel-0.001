import Icon, { type IconName } from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { preparationSafety } from "@/data/panch-pokhari/content";
import "./preparation-safety.css";

const groups: { icon: IconName; title: string; items: string[] }[] = [
  { icon: "backpack", title: "Physical Preparation", items: preparationSafety.physical },
  { icon: "mountain", title: "Altitude Awareness", items: preparationSafety.altitude },
  { icon: "shield", title: "Essential Gear", items: preparationSafety.gear },
  { icon: "compass", title: "Permits & Local Guidance", items: preparationSafety.permits },
  { icon: "cloud-rain", title: "Weather & Trail Conditions", items: preparationSafety.weather },
];

export default function PreparationSafety() {
  return (
    <section className="pp-prep" aria-labelledby="prep-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Be Prepared"
          title="Prepare for a Safe Himalayan Adventure"
        />

        <Reveal className="pp-prep__notice" variant="fade-in">
          <Icon name="shield" className="pp-prep__notice-icon" />
          <p>{preparationSafety.cautionBadge}</p>
        </Reveal>

        <div className="pp-prep__grid">
          {groups.map((group, index) => (
            <Reveal
              key={group.title}
              variant="fade-up"
              delay={index * 80}
              className="pp-prep__card"
            >
              <div className="pp-prep__icon">
                <Icon name={group.icon} />
              </div>
              <h3 className="pp-prep__title">{group.title}</h3>
              <ul className="pp-prep__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
