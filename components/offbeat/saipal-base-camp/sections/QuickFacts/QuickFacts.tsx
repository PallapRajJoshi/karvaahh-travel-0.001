import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { MountainIcon, MapPinIcon, CompassIcon, RouteIcon, TentIcon, CalendarIcon, UsersIcon, ClockIcon } from "../../shared/Icon";
import { quickFacts } from "@/data/quickFacts";
import "./QuickFacts.css";

const iconMap = {
  mountain: MountainIcon,
  "map-pin": MapPinIcon,
  compass: CompassIcon,
  route: RouteIcon,
  tent: TentIcon,
  calendar: CalendarIcon,
  users: UsersIcon,
  clock: ClockIcon,
};

export default function QuickFacts() {
  return (
    <section className="saipal-page__section saipal-facts">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="At a Glance" title="Saipal Base Camp at a Glance" align="center" />
        <div className="saipal-facts__grid">
          {quickFacts.map((fact, index) => {
            const IconCmp = iconMap[fact.icon];
            return (
              <Reveal key={fact.id} delay={index * 60} className="saipal-facts__item">
                <span className="saipal-facts__icon">
                  <IconCmp />
                </span>
                <span className="saipal-facts__label">{fact.label}</span>
                <span className="saipal-facts__value">{fact.value}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
