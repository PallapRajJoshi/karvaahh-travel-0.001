import SafeImage from "@/components/shared/SafeImage";
import "./karnali-wildlife.css";

const fauna = [
  "Snow leopard",
  "Blue sheep (bharal)",
  "Himalayan musk deer",
  "Red panda",
  "Himalayan black bear",
  "Himalayan tahr",
  "Danphe (Himalayan monal)",
  "Tibetan snowcock",
];

const flora = [
  "Blue pine & spruce",
  "Juniper & birch",
  "Rhododendron forests",
  "Alpine meadows",
  "Medicinal Himalayan herbs",
];

export default function KarnaliWildlife() {
  return (
    <section className="karnali-root karnali-wildlife" aria-label="Wildlife and nature in Karnali">
      <div className="karnali-wildlife-media">
        <SafeImage
          src="/karnali/wildlife.jpg"
          alt="Alpine wilderness landscape in Karnali province"
          fill
          priority={false}
          sizes="100vw"
          className="karnali-wildlife-image"
        />
        <div className="karnali-wildlife-overlay" />
      </div>

      <span className="karnali-num">10</span>

      <div className="karnali-wildlife-content">
        <p className="karnali-eyebrow">WILDERNESS & NATURE</p>
        <h2 className="karnali-wildlife-title">
          Where wilderness
          <br />
          <em>has no edge.</em>
        </h2>
        <p className="karnali-wildlife-description">
          From deep forests around Rara to the stark alpine wilderness of
          Dolpo and Humla, Karnali protects some of Nepal&rsquo;s most remote
          natural landscapes — Rara National Park, Shey Phoksundo National
          Park, Himalayan forests, alpine ecosystems and the wide Karnali
          river system, offering opportunities to observe Himalayan wildlife,
          go birdwatching and pursue nature photography across remote
          valleys.
        </p>

        <div className="karnali-wildlife-lists">
          <div>
            <h3 className="karnali-wildlife-list-title">Wildlife to look for</h3>
            <ul className="karnali-wildlife-list">
              {fauna.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="karnali-wildlife-list-title">Flora &amp; habitats</h3>
            <ul className="karnali-wildlife-list">
              {flora.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
