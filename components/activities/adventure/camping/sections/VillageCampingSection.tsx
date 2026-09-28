import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import PlaceList from "../shared/PlaceList";
import { IconFire, IconMountain, IconRoute, IconTent } from "../shared/Icons";
import { villagePlaces } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";
import "./VillageCampingSection.css";

const moments = [
  { Icon: IconRoute, text: "Stone paths between terraced fields" },
  { Icon: IconTent, text: "Camps close to village life" },
  { Icon: IconFire, text: "Local food and evening fires" },
  { Icon: IconMountain, text: "Mountain views from the doorstep" },
];

export default function VillageCampingSection() {
  return (
    <section id="village" className="cmp-section cmp-section--beige cmp-village" aria-labelledby="cmp-village-title">
      <div className="cmp-container cmp-village__grid">
        <div className="cmp-village__photos">
          <div className="cmp-village__photo cmp-village__photo--main" data-reveal>
            <CampImage src={campingImages.sections.village} alt="Stone houses and a campfire in a Gurung village at dusk" tone="earth" loading="lazy" sizes="(max-width: 900px) 70vw, 34vw" />
          </div>
          <div className="cmp-village__photo cmp-village__photo--inset" data-reveal style={{ ["--d" as string]: "180ms" }}>
            <CampImage src={campingImages.sections.villageAlt} alt="Green rice terraces below a hillside village" tone="forest" loading="lazy" sizes="(max-width: 900px) 45vw, 20vw" />
          </div>
        </div>

        <div className="cmp-village__copy">
          <SectionHeading
            id="cmp-village-title"
            kicker="Village & cultural camping"
            title="Camp. Connect. Experience Nepal."
            lead="Spend the night beside Gurung, Magar, Newar and Sherpa communities, where camping comes with local food, festivals and conversation."
          />
          <ul className="cmp-village__moments">
            {moments.map(({ Icon, text }) => (
              <li key={text}><Icon size={20} /> {text}</li>
            ))}
          </ul>
          <PlaceList places={villagePlaces} label="Village and cultural camping destinations" />
        </div>
      </div>
    </section>
  );
}
