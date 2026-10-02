import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { MountainIcon, LeafIcon, RouteIcon, UsersIcon, CompassIcon, CameraIcon } from "../../shared/Icon";
import { whyExploreFeatures } from "@/data/whyExploreFeatures";
import "./WhyExplore.css";

const iconMap = {
  mountain: MountainIcon,
  leaf: LeafIcon,
  route: RouteIcon,
  users: UsersIcon,
  compass: CompassIcon,
  camera: CameraIcon,
};

export default function WhyExplore() {
  return (
    <section className="saipal-page__section saipal-why">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Why Saipal" title="Beyond the Crowds. Into the Wild." align="center" />
        <div className="saipal-why__grid">
          {whyExploreFeatures.map((feature, index) => {
            const IconCmp = iconMap[feature.icon];
            return (
              <Reveal key={feature.id} delay={index * 90} className="saipal-why__card">
                <div className="saipal-why__media">
                  <ImageSlot alt={feature.title} label={feature.imageLabel} />
                </div>
                <div className="saipal-why__body">
                  <span className="saipal-why__icon">
                    <IconCmp />
                  </span>
                  <h3 className="saipal-why__title">{feature.title}</h3>
                  <p className="saipal-why__desc">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
