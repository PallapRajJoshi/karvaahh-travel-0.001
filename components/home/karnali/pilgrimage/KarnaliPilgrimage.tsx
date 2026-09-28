import Image from "next/image";
import "./karnali-pilgrimage.css";

export default function KarnaliPilgrimage() {
  return (
    <>
      {/* ===================================================
          05 — SACRED LAKES
          Note: the brief's "Lakes" section is not a separate
          folder in the approved architecture, so it is composed
          here as its own full-screen block ahead of Pilgrimage.
      =================================================== */}
      <section
        className="karnali-root karnali-lakes"
        aria-label="Sacred lakes of Karnali"
      >
        <div className="karnali-lakes-media">
          <Image
            src="/karnali/rara-lake.jpg"
            alt="Rara Lake at sunrise, ringed by pine forest and mountains"
            fill
            sizes="100vw"
            className="karnali-lakes-image"
          />
          <div className="karnali-lakes-overlay" />
        </div>
        <span className="karnali-num">05</span>
        <div className="karnali-lakes-content">
          <p className="karnali-eyebrow">SACRED WATERS</p>
          <h2 className="karnali-lakes-title">
            Sacred waters.
            <br />
            <em>Silent mountains.</em>
          </h2>
          <p className="karnali-lakes-description">
            Rara Lake, Phoksundo Lake, Syarpu Lake, Rukmini Tal and Kamal Daha
            hold a stillness few Himalayan destinations still offer — a
            landscape for boating where available, camping, photography,
            hiking and quiet sunrise and sunset over mountain reflections.
          </p>
        </div>
      </section>

      {/* ===================================================
          06 — PILGRIMAGE
      =================================================== */}
      <section
        className="karnali-root karnali-pilgrimage"
        aria-label="Pilgrimage sites of Karnali"
      >
        <span className="karnali-num karnali-num-dark">06</span>
        <div className="karnali-pilgrimage-content">
          <p className="karnali-eyebrow">SACRED KARNALI</p>
          <h2 className="karnali-pilgrimage-title">
            Ancient faith,
            <br />
            <em>high in the mountains.</em>
          </h2>
          <p className="karnali-pilgrimage-description">
            Karnali&rsquo;s sacred landscape stretches from ancient Khas
            pilgrimage sites to Buddhist and Bon traditions preserved in
            remote Himalayan valleys.
          </p>
          <ul className="karnali-pilgrimage-list">
            <li>Chandannath Temple</li>
            <li>Pancha Koshi</li>
            <li>Shristhan</li>
            <li>Nabhi Sthan</li>
            <li>Dhuleshwar</li>
            <li>Padukasthan</li>
            <li>Bhairab Temple</li>
            <li>Halji Monastery</li>
            <li>Buddhist monasteries</li>
            <li>Bon sacred landscapes</li>
            <li>Deuti Bajai Temple</li>
            <li>Khairabang Bhawani Temple</li>
          </ul>
        </div>
        <div className="karnali-pilgrimage-media">
          <Image
            src="/karnali/heritage.jpg"
            alt="Ancient temple in the high valleys of Karnali"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="karnali-pilgrimage-image"
          />
        </div>
      </section>
    </>
  );
}
