import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { CompassIcon, MountainIcon, ShieldIcon, CheckIcon, LeafIcon } from "../../shared/Icon";
import { safetyGroups, safetyWarning } from "@/data/safety";
import "./SafetyPermits.css";

const iconMap = {
  compass: CompassIcon,
  mountain: MountainIcon,
  shield: ShieldIcon,
  checklist: CheckIcon,
  leaf: LeafIcon,
};

export default function SafetyPermits() {
  return (
    <section className="saipal-page__section saipal-safety">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Prepare Well" title="Explore Responsibly. Travel Prepared." align="center" />

        <div className="saipal-safety__grid">
          {safetyGroups.map((group, index) => {
            const IconCmp = iconMap[group.icon];
            return (
              <Reveal key={group.id} delay={(index % 3) * 90} className="saipal-safety__card">
                <span className="saipal-safety__icon">
                  <IconCmp />
                </span>
                <h3 className="saipal-safety__title">{group.title}</h3>
                <ul className="saipal-safety__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="saipal-safety__warning" direction="fade">
          <ShieldIcon className="saipal-safety__warning-icon" />
          <p>{safetyWarning}</p>
        </Reveal>
      </div>
    </section>
  );
}
