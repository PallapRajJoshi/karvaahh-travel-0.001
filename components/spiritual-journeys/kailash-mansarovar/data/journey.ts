export interface JourneyStage {
  title: string;
  place: string;
  text: string;
}

/** Overland flow. Deliberately stage-based rather than day-based. */
export const JOURNEY_STAGES: JourneyStage[] = [
  {
    title: "Kathmandu preparation and briefing",
    place: "Kathmandu, about 1,400 m",
    text: "Final document checks, permit processing, a pre-departure briefing and time to rest before the high country. Kathmandu is also the place to buy or hire anything missing from your kit.",
  },
  {
    title: "Travel toward the Nepal–Tibet border",
    place: "Nepal",
    text: "A road journey north through Nepal’s hill country. Travel time depends heavily on road conditions and on the crossing point in use.",
  },
  {
    title: "Entry formalities and onward journey through Tibet",
    place: "Nepal–Tibet border",
    text: "Border formalities are completed as a group and documents are checked. From here, travel continues with the Tibetan side’s transport and guiding arrangements, and the altitude rises steadily.",
  },
  {
    title: "Saga and the Tibetan Plateau",
    place: "Saga, about 4,640 m",
    text: "Long drives across the open plateau, usually with an acclimatisation stop along the way. Towns such as Saga provide an overnight base between stretches of high, sparsely populated country.",
  },
  {
    title: "Lake Mansarovar",
    place: "About 4,590 m",
    text: "Time by the lake for prayer, rituals and reflection, and, when skies allow, views toward Mount Kailash and the Gurla Mandhata massif.",
  },
  {
    title: "Darchen",
    place: "About 4,575 m",
    text: "The base town for the Kora: rest, final preparation, and arrangements for porters or ponies where they are available.",
  },
  {
    title: "Kailash Parikrama / Kora",
    place: "Yamadwar, Dirapuk, Dolma La, Zuthulpuk",
    text: "The circuit of Mount Kailash on foot, commonly over three days. Travellers who do not walk the full circuit can often still take part in darshan from Darchen and Yamadwar.",
  },
  {
    title: "Return journey",
    place: "Tibet to Kathmandu",
    text: "The return retraces much of the outward route, descending gradually to lower altitudes and finally back to Kathmandu.",
  },
];
