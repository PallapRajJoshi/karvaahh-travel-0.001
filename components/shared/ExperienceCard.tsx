import Icon, { type IconName } from "./Icon";
import "./shared-cards.css";

type Experience = { title: string; description: string; icon: string };

/* Maps the data's icon keywords onto the shared inline icon set. */
const ICON_MAP: Record<string, IconName> = {
  trek: "route",
  peak: "mountain",
  tent: "camp",
  camera: "camera",
  bird: "leaf",
  horse: "compass",
  village: "flag",
  food: "sun",
  landscape: "mountain",
  compass: "compass",
};

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <span className="experience-card__icon">
        <Icon name={ICON_MAP[experience.icon] ?? "compass"} />
      </span>
      <h3 className="experience-card__title">{experience.title}</h3>
      <p className="experience-card__text">{experience.description}</p>
    </article>
  );
}
