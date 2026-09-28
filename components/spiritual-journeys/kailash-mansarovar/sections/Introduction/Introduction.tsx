import SectionHeading from "../../shared/SectionHeading";
import Icon, { type IconName } from "../../shared/Icon";
import "./Introduction.css";

const FIRST_THINGS: { icon: IconName; title: string; text: string; href: string; link: string }[] = [
  {
    icon: "mountain",
    title: "It is a high-altitude journey",
    text: "Much of the route is above 4,500 m, and the Kora crosses 5,630 m.",
    href: "#preparation",
    link: "Altitude and safety",
  },
  {
    icon: "document",
    title: "It is regulated",
    text: "Permits and entry rules depend on nationality and change over time.",
    href: "#practical-info",
    link: "Documents and permits",
  },
  {
    icon: "cloud",
    title: "Plans can change",
    text: "Weather, roads and border conditions can alter the itinerary.",
    href: "#weather",
    link: "Weather and conditions",
  },
];

export default function Introduction() {
  return (
    <section id="overview" className="km-section km-intro" aria-labelledby="overview-title">
      <div className="km-container km-intro__grid">
        <div>
          <SectionHeading
            id="overview-title"
            marker="Western Tibet, from Nepal"
            title="Kailash Mansarovar Yatra – A Sacred Himalayan Journey"
          />
          <div className="km-prose km-intro__prose">
            <p>
              The Kailash Mansarovar Yatra is one of the most revered spiritual journeys in the Himalayas. It
              takes pilgrims to sacred Mount Kailash and Lake Mansarovar in the Ngari region of Western Tibet, a
              high and remote landscape beyond the Himalayan ranges of far-western Nepal, held sacred in Hindu,
              Buddhist, Jain and Bon traditions.
            </p>
            <p>
              For most pilgrims the journey has two focal points: darshan of Mount Kailash, the solitary
              snow-streaked peak at the heart of this sacred geography, and time at Lake Mansarovar, a
              high-altitude freshwater lake at about 4,590 metres. Many also undertake the Kailash Parikrama,
              known in Tibetan as the Kailash Kora, a circuit of the mountain on foot that crosses Dolma La Pass
              at around 5,630 metres.
            </p>
            <p>
              Nepal is one of the main gateways. A Kailash Yatra from Nepal usually begins in Kathmandu, with
              permits, briefings and final preparation, before continuing overland to the Nepal–Tibet border or
              by flight and helicopter through the far-western Nepalgunj–Simikot–Hilsa corridor, where
              operationally available.
            </p>
            <p>
              This Tibet pilgrimage asks a great deal of the body. Most of the journey is spent above 4,500
              metres, facilities are basic in places, and weather, road conditions and regulations can change
              plans at short notice. Careful preparation, including medical advice, gradual acclimatisation and
              realistic expectations, shapes the experience as much as the destination does.
            </p>
            <p>
              This guide covers the sacred sites, the Kora, the route options, altitude, weather, documents and
              packing, so you can judge whether a Kailash Mansarovar tour is right for you and prepare well for
              this Himalayan pilgrimage.
            </p>
          </div>
        </div>

        <aside className="km-intro__aside" aria-labelledby="km-intro-aside-title">
          <h3 id="km-intro-aside-title" className="km-intro__aside-title">
            Three things to know first
          </h3>
          <ul className="km-intro__list">
            {FIRST_THINGS.map((item) => (
              <li key={item.title} className="km-intro__item">
                <Icon name={item.icon} className="km-intro__item-icon" />
                <div>
                  <p className="km-intro__item-title">{item.title}</p>
                  <p className="km-intro__item-text">{item.text}</p>
                  <a href={item.href} className="km-text-link km-intro__item-link">
                    {item.link}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
