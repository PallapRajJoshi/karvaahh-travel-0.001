import { bungeeSites } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";
import BungeeSiteCard from "./BungeeSiteCard";

export default function BungeeSiteCards() {
  return (
    <section id="sites" className="bj-section bj-sites" aria-labelledby="bj-sites-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-sites-title"
          title="Bungee Jumping Sites in Nepal"
          intro="Compare the main established options by location, height and experience."
        />
        <div className="bj-sites__grid">
          {bungeeSites.map((s) => <BungeeSiteCard key={s.id} site={s} />)}
        </div>
      </div>
    </section>
  );
}
