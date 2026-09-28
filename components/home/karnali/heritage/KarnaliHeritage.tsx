import Image from "next/image";
import "./karnali-heritage.css";

export default function KarnaliHeritage() {
  return (
    <section className="karnali-root karnali-heritage" aria-label="Heritage of Karnali">
      <div className="karnali-heritage-media">
        <Image
          src="/karnali/sinja.jpg"
          alt="Sinja Valley, historic centre of Khas civilization"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="karnali-heritage-image"
        />
        <span className="karnali-num">08</span>
      </div>

      <div className="karnali-heritage-content">
        <p className="karnali-eyebrow">DEEP HISTORY</p>
        <h2 className="karnali-heritage-title">
          Where history
          <br />
          <em>survived the mountains.</em>
        </h2>
        <p className="karnali-heritage-description">
          The Sinja Valley stands among Nepal&rsquo;s most historically
          significant landscapes — widely regarded as central to the
          development of the Khas language and civilization. Its legacy
          continues through Dullu and the Pancha Koshi sites, the Dullu
          archaeological monuments, Jajarkot Durbar, Rukumkot and a network of
          historic villages, ancient monasteries and Bon cultural landscapes
          across Karnali.
        </p>

        <div className="karnali-heritage-activities">
          <span className="karnali-heritage-activity">Archaeology</span>
          <span className="karnali-heritage-activity">Heritage walks</span>
          <span className="karnali-heritage-activity">Cultural interpretation</span>
          <span className="karnali-heritage-activity">Photography</span>
          <span className="karnali-heritage-activity">Village exploration</span>
        </div>
      </div>
    </section>
  );
}
