export interface SudurpaschimJourneyStop {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const sudurpaschimJourney: SudurpaschimJourneyStop[] = [
  {
    number: "01",
    title: "Dhangadhi / Kailali",
    description:
      "Arrive through the province's aviation gateway into Tharu culture, riverside wetlands and an easy introduction to far-western Nepal.",
    image: "/sudurpaschim/dhangadhi.jpg",
    alt: "Wetland and river landscape near Dhangadhi",
  },
  {
    number: "02",
    title: "Shuklaphanta",
    description:
      "Open grasslands and forest corridors offer opportunities to observe wildlife and settle into the rhythm of the wilderness.",
    image: "/sudurpaschim/shuklaphanta.jpg",
    alt: "Grasslands of Shuklaphanta National Park",
  },
  {
    number: "03",
    title: "Dadeldhura / Doti",
    description:
      "Hill heritage, temple towns and scenic ridgelines mark the transition from the plains toward the Himalayan interior.",
    image: "/sudurpaschim/dadeldhura.jpg",
    alt: "Hill town and temple landscape in Dadeldhura",
  },
  {
    number: "04",
    title: "Khaptad / Badimalika",
    description:
      "Sacred highland plateaus and mountain temples reward trekking and camping across meadows rarely crossed by outside travelers.",
    image: "/sudurpaschim/khaptad.jpg",
    alt: "Highland plateau of Khaptad National Park",
  },
  {
    number: "05",
    title: "Api / Darchula",
    description:
      "The journey climbs toward Api Himal and its base camp, through remote Himalayan valleys at the province's furthest edge.",
    image: "/sudurpaschim/api-himal.jpg",
    alt: "Api Himal in the Darchula district Himalayas",
  },
];
