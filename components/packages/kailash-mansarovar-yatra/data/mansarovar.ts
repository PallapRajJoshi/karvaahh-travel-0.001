import type { MansarovarContent } from "../types";
import { IMG } from "./content";

const M = `${IMG}/mansarovar`;

export const mansarovar: MansarovarContent = {
  eyebrow: "Lake Mansarovar",
  heading: "Find Peace at the Sacred Lake Mansarovar",
  lead:
    "In Hindu tradition the lake was first formed in the mind (manas) of Lord Brahma; Tibetans know it as Mapham Yumtso, the 'invincible turquoise lake'. For many pilgrims, the hours spent on its shore are the quietest and most personal of the yatra.",
  image: {
    src: `${M}/lake-mansarovar-sunrise.jpg`,
    alt: "Sunrise light over Lake Mansarovar with Mount Kailash on the far shore",
  },
  insetImage: {
    src: `${M}/mansarovar-puja.jpg`,
    alt: "Pilgrims offering prayers with diyas on the shore of Lake Mansarovar",
  },
  moments: [
    {
      title: "Prayer and puja",
      body: "Offer prayers, perform puja or havan with your group, and collect holy water to carry home.",
      icon: "flame",
    },
    {
      title: "Sunrise and sunset",
      body: "Watch first light touch Kailash and Gurla Mandhata, and the lake shift from silver to deep blue.",
      icon: "sun",
    },
    {
      title: "Moments of stillness",
      body: "Time set aside for meditation, japa or simply sitting by the water — nothing scheduled, nothing rushed.",
      icon: "lotus",
    },
    {
      title: "Panoramic landscapes",
      body: "A 360° horizon of snow peaks, open plateau and the dark waters of neighbouring Rakshas Tal.",
      icon: "mountain",
    },
  ],
  ritualNote:
    "Bathing, fire rituals and walking the lake shore are governed by current local rules, environmental restrictions and safety guidance, which can change. The water is extremely cold at this altitude — your tour leader will advise on what is permitted and safe on the day.",
};
