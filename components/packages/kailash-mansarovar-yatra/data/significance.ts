/**
 * Spiritual significance. Each tradition is described on its own terms —
 * the traditions share a mountain, not a single belief.
 */
import type { SignificanceContent } from "../types";

export const significance: SignificanceContent = {
  eyebrow: "Four Traditions",
  heading: "A Sacred Landscape Shared by Ancient Traditions",
  intro:
    "Few places on Earth are held sacred by so many. Hindus, Buddhists, Jains and followers of Bon each know Kailash by a different name, tell different stories of it, and honour it in their own way.",
  traditions: [
    {
      id: "hinduism",
      name: "Hinduism",
      kailashName: "Kailash Parvat",
      kailash:
        "The abode of Lord Shiva and Goddess Parvati, where Shiva sits in eternal meditation. A darshan of the mountain is itself considered a blessing.",
      mansarovar:
        "Said to have been created in the mind of Lord Brahma. Prayers and holy water from the lake are deeply cherished.",
      kora: "Parikrama is walked clockwise, keeping the mountain on the right.",
    },
    {
      id: "buddhism",
      name: "Buddhism",
      kailashName: "Kang Rinpoche",
      kailash:
        "The 'Precious Jewel of Snows', abode of the meditational deity Demchok (Chakrasamvara). Tibetan tradition also recalls the yogi Milarepa's contest here with a Bon master.",
      mansarovar:
        "Known as Mapham Yumtso, associated in Buddhist tradition with Anavatapta, the lake of the Buddha's teachings.",
      kora: "Kora is walked clockwise; many pilgrims make prostrations along the way.",
    },
    {
      id: "jainism",
      name: "Jainism",
      kailashName: "Ashtapada",
      kailash:
        "Revered as Ashtapada, where Rishabhanatha, the first Tirthankara, attained liberation (nirvana).",
      mansarovar: "Honoured as part of the sacred landscape surrounding Ashtapada.",
      kora: "Circumambulation is made clockwise.",
    },
    {
      id: "bon",
      name: "Bon",
      kailashName: "Yungdrung Gutseg",
      kailash:
        "The 'Nine-Storey Swastika Mountain', the spiritual centre of Tibet's indigenous Bon religion and the seat of its founder's teachings.",
      mansarovar: "Revered as a sacred lake within the ancient Bon landscape of Zhang Zhung.",
      kora: "Bon pilgrims walk the Kora anticlockwise — you may meet them on the trail.",
    },
  ],
  shared: [
    {
      title: "The tradition of circumambulation",
      body: "Rather than climbing the mountain, pilgrims walk around it. One circuit is believed to cleanse the misdeeds of a lifetime; some pilgrims return to complete many.",
    },
    {
      title: "Source of great rivers",
      body: "The Kailash region feeds the headwaters of the Indus, the Sutlej, the Yarlung Tsangpo (Brahmaputra) and the Karnali — part of why it is seen as the centre of the world.",
    },
    {
      title: "Pilgrimage customs",
      body: "Prayer flags hung at Dolma La and Tarboche, stones added to cairns, a token left behind — small acts of devotion carried out by pilgrims for centuries.",
    },
  ],
  respectNote:
    "Walk quietly near monasteries, ask before photographing people or rituals, don't touch or climb on sacred objects, and never remove stones or offerings.",
};
