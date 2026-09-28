import { ESSENTIALS_NOTE, TRAVEL_INFO } from "./data/content";
import { ANCHORS, INQUIRY } from "./data/routes";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import {
  Alert,
  ArrowRight,
  Compass,
  Home,
  Leaf,
  MapFold,
  Phone,
  Recycle,
  Shield,
  Signal,
  Users,
  Wallet,
} from "./shared/icons";
import "./ApiNampaTravelInfo.css";

const ICONS: Record<string, typeof MapFold> = {
  "conservation-entry": Leaf,
  permits: Shield,
  guides: Users,
  "getting-there": MapFold,
  trailhead: Compass,
  stays: Home,
  connectivity: Signal,
  emergency: Phone,
  money: Wallet,
  waste: Recycle,
};

export default function ApiNampaTravelInfo() {
  return (
    <section className="an-section an-info" id={ANCHORS.essentials} aria-labelledby="an-info-title">
      <div className="an-container">
        <SectionHeading
          id="an-info-title"
          eyebrow="Permits & essentials"
          title="Essential Information Before You Trek"
          intro="The practical side of a remote trek. Anything marked ‘confirm before departure’ changes often — we check it for you when you book."
        />

        <ul className="an-info__grid" role="list">
          {TRAVEL_INFO.map((card, i) => {
            const Icon = ICONS[card.id] ?? Compass;
            return (
              <Reveal as="li" key={card.id} className="an-info__card" delay={(i % 3) * 60}>
                <div className="an-info__head">
                  <Icon className="an-info__icon" />
                  {card.changesOften ? <span className="an-tag">Confirm before departure</span> : null}
                </div>
                <h3 className="an-info__title">{card.title}</h3>
                <p className="an-info__body">{card.body}</p>
                {card.items?.length ? (
                  <ul className="an-info__items">
                    {card.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="an-info__note">
          <Alert />
          <p>{ESSENTIALS_NOTE}</p>
          <a href={INQUIRY.general} className="an-info__note-link">
            Ask us <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
