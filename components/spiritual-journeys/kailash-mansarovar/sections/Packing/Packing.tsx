import SectionHeading from "../../shared/SectionHeading";
import Notice from "../../shared/Notice";
import PackingChecklist from "./PackingChecklist";
import "./Packing.css";

export default function Packing() {
  return (
    <section id="packing" className="km-section km-packing" aria-labelledby="packing-title">
      <div className="km-container">
        <SectionHeading
          id="packing-title"
          marker="Layers, sun protection and documents"
          title="What to Pack for Kailash Mansarovar Yatra"
          intro="Pack for cold, wind and strong sun in the same day. Tick items off as you go."
        />
        <PackingChecklist />
        <Notice className="km-packing__notice">
          <p>
            Your final packing list should follow your operator’s instructions and current route conditions. Some
            items can be bought or hired in Kathmandu before departure.
          </p>
        </Notice>
      </div>
    </section>
  );
}
