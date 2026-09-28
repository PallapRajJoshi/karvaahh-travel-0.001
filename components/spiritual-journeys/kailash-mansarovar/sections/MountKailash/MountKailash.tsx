import SectionHeading from "../../shared/SectionHeading";
import ImageSlot from "../../shared/ImageSlot";
import { IMAGES } from "../../data/images";
import "./MountKailash.css";

const FACTS = [
  { label: "Summit elevation", value: "About 6,638 m (commonly cited)" },
  { label: "Where pilgrims see it", value: "From Darchen, Yamadwar and along the Kora" },
  { label: "Climbing", value: "Not permitted; pilgrims circle the mountain instead" },
];

export default function MountKailash() {
  return (
    <section id="mount-kailash" className="km-section km-kailash" aria-labelledby="mount-kailash-title">
      <div className="km-container km-kailash__grid">
        <figure className="km-kailash__figure">
          <div className="km-kailash__media">
            <ImageSlot image={IMAGES.kailashDarshan} sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <figcaption className="km-kailash__caption">Mount Kailash, Western Tibet</figcaption>
        </figure>

        <div className="km-kailash__body">
          <SectionHeading
            id="mount-kailash-title"
            marker="Ngari, Western Tibet"
            title="Mount Kailash – The Sacred Mountain"
          />
          <div className="km-prose">
            <p>
              Mount Kailash rises alone from the Tibetan Plateau, its dark rock faces lined with bands of snow that
              give it an unmistakable, almost sculpted outline. It stands apart from the main Himalayan ranges,
              surrounded by high valleys and open plains.
            </p>
            <p>
              For pilgrims, Mount Kailash darshan, the moment of seeing the mountain, is the centre of the Yatra.
              It is often first glimpsed on the approach across the plateau and from the shore of Lake Mansarovar,
              then seen up close from Darchen, Yamadwar and, most dramatically, from Dirapuk beneath the north
              face.
            </p>
            <p>
              The mountain is circled rather than climbed. Walking the Kora around it is itself an act of devotion
              for many pilgrims, and the whole area is treated as sacred ground. Respectful behaviour, modest
              conduct and care at shrines are part of travelling here.
            </p>
          </div>

          <dl className="km-kailash__facts">
            {FACTS.map((f) => (
              <div key={f.label} className="km-kailash__fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
