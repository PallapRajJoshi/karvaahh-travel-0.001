import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { TentIcon, DropletIcon, UsersIcon, WifiOffIcon, ClockIcon, MapPinIcon } from "../../shared/Icon";
import { logisticsItems } from "@/data/logistics";
import "./AccommodationLogistics.css";

const iconMap = {
  tent: TentIcon,
  droplet: DropletIcon,
  users: UsersIcon,
  "wifi-off": WifiOffIcon,
  clock: ClockIcon,
  "map-pin": MapPinIcon,
};

export default function AccommodationLogistics() {
  return (
    <section className="saipal-page__section saipal-logistics">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Logistics" title="Prepare for a Remote Himalayan Expedition" align="center" />
        <div className="saipal-logistics__grid">
          {logisticsItems.map((item, index) => {
            const IconCmp = iconMap[item.icon];
            return (
              <Reveal key={item.id} delay={(index % 3) * 90} className="saipal-logistics__card">
                <span className="saipal-logistics__icon">
                  <IconCmp />
                </span>
                <h3 className="saipal-logistics__title">{item.title}</h3>
                <p className="saipal-logistics__desc">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
