import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import "./DestinationHighlight.css";

interface DestinationHighlightProps {
  imageSrc?: string;
}

export default function DestinationHighlight({ imageSrc }: DestinationHighlightProps) {
  return (
    <section id="destination-highlight" className="saipal-page__section saipal-highlight">
      <div className="saipal-page__inner saipal-highlight__grid">
        <Reveal direction="left" className="saipal-highlight__text">
          <span className="saipal-eyebrow">Editorial Introduction</span>
          <h2 className="saipal-highlight__title">Discover the Untouched Beauty of Saipal Base Camp</h2>
          <p className="saipal-highlight__body">
            Saipal Base Camp, nestled in the remote Bajhang district of Nepal&rsquo;s Sudurpashchim Province, is a
            spectacular offbeat Himalayan destination renowned for its untouched wilderness, dramatic alpine
            landscapes, and breathtaking views of Mount Saipal (7,031 m). Surrounded by towering snow-capped
            peaks, pristine rivers, lush forests, and expansive alpine meadows, the region offers an
            extraordinary experience for adventure seekers and nature lovers. Explore the scenic beauty of
            Saipal Base Camp, Saipal Himal, Talkot, Chainpur, Rilu, and the remote valleys of the Seti River
            region. Discover traditional Himalayan villages, local cultural heritage, and diverse wildlife
            while enjoying challenging trekking, camping, mountain photography, and peaceful wilderness
            exploration. Nearby attractions include Khaptad National Park, Surma Sarovar, and the remote
            landscapes of the Api-Saipal Himalayan region. Accessible via Dhangadhi or Nepalgunj, followed by
            an overland journey to Bajhang and a multi-day trek, Saipal Base Camp is ideal for experienced
            trekkers seeking solitude, raw Himalayan beauty, and remote mountain adventures, particularly
            during spring and autumn.
          </p>
        </Reveal>

        <Reveal direction="right" className="saipal-highlight__media">
          <div className="saipal-highlight__image">
            <ImageSlot
              src={imageSrc}
              alt="Cinematic landscape view of Mount Saipal and the surrounding Himalayan wilderness"
              label="Verified Mount Saipal / regional landscape photograph"
            />
          </div>
          <div className="saipal-highlight__elevation">
            <span className="saipal-highlight__elevation-value">7,031 m</span>
            <span className="saipal-highlight__elevation-label">Mount Saipal Elevation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
