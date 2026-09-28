export interface Tradition {
  id: string;
  name: string;
  localName: string;
  text: string;
}

export const TRADITIONS: Tradition[] = [
  {
    id: "hinduism",
    name: "Hinduism",
    localName: "Kailash Parvat",
    text:
      "In Hindu tradition Mount Kailash is associated with Lord Shiva and regarded as a sacred spiritual centre, often described as the abode of Shiva and Parvati. For many Hindu pilgrims, darshan of the mountain and a dip or prayer at Lake Mansarovar are the heart of the Yatra.",
  },
  {
    id: "buddhism",
    name: "Buddhism",
    localName: "Kang Rinpoche",
    text:
      "Tibetan Buddhists know the mountain as Kang Rinpoche, the precious snow mountain. Tradition links it with the meditational deity Chakrasamvara, and the Kora passes monasteries and retreat sites that have drawn pilgrims for centuries.",
  },
  {
    id: "jainism",
    name: "Jainism",
    localName: "Ashtapada",
    text:
      "Many Jains associate the Kailash region with Ashtapada, linked in Jain tradition to Rishabhanatha, the first Tirthankara. The wider Himalayan and Tibetan sacred landscape holds a place within Jain pilgrimage traditions.",
  },
  {
    id: "bon",
    name: "Bon",
    localName: "Yungdrung Gutsek",
    text:
      "In Bon, the indigenous religious tradition of Tibet, the mountain is an important sacred site known as Yungdrung Gutsek. Bon pilgrims traditionally circle it anticlockwise, the opposite direction to most other pilgrims.",
  },
];
