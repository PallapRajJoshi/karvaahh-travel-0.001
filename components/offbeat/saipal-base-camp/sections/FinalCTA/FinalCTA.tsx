import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import "./FinalCTA.css";

interface FinalCTAProps {
  imageSrc?: string;
}

export default function FinalCTA({ imageSrc }: FinalCTAProps) {
  return (
    <section className="saipal-final-cta" aria-label="Plan your Saipal expedition">
      <div className="saipal-final-cta__bg">
        <ImageSlot
          src={imageSrc}
          alt="Mount Saipal and the surrounding Himalayan wilderness at dusk"
          label="Cinematic closing photograph of Mount Saipal / wilderness"
        />
      </div>
      <div className="saipal-final-cta__scrim" />
      <Reveal className="saipal-final-cta__content">
        <h2 className="saipal-final-cta__title">Your Saipal Expedition Starts Here</h2>
        <p className="saipal-final-cta__text">
          Venture into the remote Himalayas of Bajhang, discover the breathtaking landscapes of Mount Saipal,
          and experience a journey defined by wilderness, adventure, and the quiet beauty of Nepal&rsquo;s
          mountains.
        </p>
        <div className="saipal-final-cta__actions">
          <a href="#travel-packages" className="saipal-btn saipal-btn--primary">
            Explore Saipal Packages
          </a>
          <a href="/contact" className="saipal-btn saipal-btn--outline">
            Customize Your Expedition
          </a>
          <a href="/contact" className="saipal-btn saipal-btn--outline">
            Contact Karvaahh
          </a>
        </div>
        <p className="saipal-final-cta__tagline">Karvaahh &mdash; Live to Travel</p>
      </Reveal>
    </section>
  );
}
