import SectionHeading from "../../shared/SectionHeading";
import ImageSlot from "../../shared/ImageSlot";
import { IMAGES } from "../../data/images";
import "./LakeMansarovar.css";

const FACTS = [
  { label: "Elevation", value: "About 4,590 m" },
  { label: "Location", value: "Ngari, Western Tibet" },
  { label: "Nearby", value: "Mount Kailash to the north; Lake Rakshastal to the west" },
];

export default function LakeMansarovar() {
  return (
    <section id="lake-mansarovar" className="km-lake" aria-labelledby="lake-mansarovar-title">
      <div className="km-lake__panorama">
        <ImageSlot image={IMAGES.mansarovar} sizes="100vw" />
      </div>

      <div className="km-container km-lake__layout">
        <dl className="km-lake__card">
          {FACTS.map((f) => (
            <div key={f.label} className="km-lake__fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="km-lake__body">
          <SectionHeading
            id="lake-mansarovar-title"
            marker="South of Mount Kailash"
            title="Lake Mansarovar – Sacred Waters of the Himalayas"
          />
          <div className="km-prose km-lake__prose">
            <p>
              Lake Mansarovar lies on the high plain south of Mount Kailash, a wide freshwater lake whose colour
              shifts from deep blue to turquoise with the light. On clear days the snow dome of Kailash rises to
              the north and the Gurla Mandhata massif fills the southern horizon.
            </p>
            <p>
              The lake is sacred in several traditions. Pilgrims come here for prayer, ritual and meditation, and
              many describe the time by its shore as the quietest and most reflective part of the Yatra.
            </p>
            <p>
              It is also a remote, high-altitude environment. Mornings and nights are cold, wind can build quickly
              across the open water, and the sun is intense. Facilities around the lake are simple, and weather
              decides what the day looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
