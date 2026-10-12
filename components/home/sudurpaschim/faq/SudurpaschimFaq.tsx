import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-faq.css";

const faqs = [
  {
    q: "Where is Sudurpashchim Province?",
    a: "Sudurpashchim is Nepal's westernmost province. It borders India to the west and south, Tibet (China) to the north and Karnali Province to the east, and covers nine districts from Kailali and Kanchanpur in the Terai to Darchula, Bajhang and Bajura in the Himalaya.",
  },
  {
    q: "What is the best time to visit Sudurpashchim?",
    a: "October to November is the best all-round season, with clear mountain views for trekking. March to May is lovely in the hills. December to February suits the Terai and wildlife parks, while June to September brings monsoon rain but also the green meadows of the Badimalika pilgrimage.",
  },
  {
    q: "How do I get to Sudurpashchim from Kathmandu?",
    a: "The quickest way is a flight from Kathmandu to Dhangadhi. Overland, the East–West Highway reaches Dhangadhi and Mahendranagar, and highways climb from there into Dadeldhura, Doti, Baitadi and Darchula.",
  },
  {
    q: "Do I need special permits?",
    a: "National parks and the Api Nampa Conservation Area charge entry fees. Some high areas of Darchula and Bajhang require a restricted-area permit arranged through a registered trekking agency. Rules change, so confirm current requirements before you travel.",
  },
  {
    q: "Is Sudurpashchim suitable for first-time visitors to Nepal?",
    a: "Yes, with the right pace. Shuklaphanta, Ghodaghodi, Dadeldhura and Khaptad are accessible with a guide, while Api, Saipal and Surma Sarovar suit experienced trekkers. Facilities are simpler than in Nepal's popular regions.",
  },
  {
    q: "How many days do I need?",
    a: "Allow 4–5 days for the Terai parks and gateway towns, about a week to add Dadeldhura, Doti and Khaptad, and two to three weeks for a Himalayan trek to Api or Saipal base camp.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SudurpaschimFaq() {
  return (
    <section id="sp-faq" className="sp-faq" aria-labelledby="sp-faq-heading">
      <div className="sp-container sp-faq__inner">
        <SudurpaschimSectionHeading
          id="sp-faq-heading"
          index="13"
          eyebrow="Good to Know"
          heading="Frequently asked questions."
        />

        <div className="sp-faq__list" data-reveal>
          {faqs.map((item) => (
            <details className="sp-faq__item" key={item.q}>
              <summary className="sp-faq__question">{item.q}</summary>
              <p className="sp-faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
