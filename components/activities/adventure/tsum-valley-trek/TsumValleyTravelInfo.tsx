import { CONTENT_STATUS, TRAVEL_INFO, TRAVEL_INFO_NOTE } from "@/data/destinations/tsum-valley/content";
import type { TsumInfoCard } from "@/data/destinations/tsum-valley/types";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { Bed, Guide, Info, Permit, Road, Signal, Sos, Wallet } from "./shared/Icons";
import "./TsumValleyTravelInfo.css";

const ICONS: Record<TsumInfoCard["icon"], typeof Permit> = {
  permit: Permit,
  guide: Guide,
  road: Road,
  bed: Bed,
  signal: Signal,
  sos: Sos,
  wallet: Wallet,
};

function formatReviewDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));
}

export default function TsumValleyTravelInfo() {
  const [lead, ...rest] = TRAVEL_INFO;
  const LeadIcon = ICONS[lead.icon];

  return (
    <section className="tsum-section tsum-section--dark tsum-info" id="travel-info" aria-labelledby="tsum-info-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-info-title"
          tone="dark"
          eyebrow="Permits & practicalities"
          title="Essential Information Before You Trek"
          intro="Tsum is a restricted area, so a little paperwork comes first. Here is what to expect — we handle the permits for you."
        />

        <div className="tsum-info__layout">
          <Reveal as="article" className="tsum-info__lead">
            <span className="tsum-info__icon tsum-info__icon--lead"><LeadIcon /></span>
            <h3 className="tsum-info__title">{lead.title}</h3>
            <p className="tsum-info__body">{lead.body}</p>
            {lead.items && (
              <ul className="tsum-info__list">
                {lead.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            )}
            <p className="tsum-info__reviewed">
              Rules last reviewed {formatReviewDate(CONTENT_STATUS.regulationsReviewedOn)}. Fees are confirmed at booking.
            </p>
          </Reveal>

          <ul className="tsum-info__grid">
            {rest.map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <Reveal as="li" key={card.id} className="tsum-info__card" delay={(i % 2) * 80}>
                  <span className="tsum-info__icon"><Icon /></span>
                  <div>
                    <h3 className="tsum-info__title">{card.title}</h3>
                    <p className="tsum-info__body">{card.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <p className="tsum-info__note" role="note">
          <Info aria-hidden="true" />
          {TRAVEL_INFO_NOTE}
        </p>
      </div>
    </section>
  );
}
