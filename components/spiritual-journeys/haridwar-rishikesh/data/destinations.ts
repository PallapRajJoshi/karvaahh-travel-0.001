import { IMG } from "./config";
import type { RouteGroup, SacredDestination } from "./types";

export const ROUTE_GROUPS: RouteGroup[] = [
  {
    id: "haridwar",
    title: "Haridwar",
    intro:
      "Where the Ganga leaves the hills for the plains — the ghats of Har Ki Pauri and the hilltop shrines of the goddess.",
    optional: false,
  },
  {
    id: "rishikesh",
    title: "Rishikesh & Neelkanth",
    intro:
      "Upstream among the foothills — riverside ghats, ashrams, the old suspension-bridge crossings and the forest shrine of Lord Shiva.",
    optional: false,
  },
  {
    id: "extensions",
    title: "Optional extensions",
    intro:
      "Not part of every package. Add these if you have extra days and want to continue into the Doon Valley and the hills beyond.",
    optional: true,
  },
];

export const DESTINATIONS: SacredDestination[] = [
  {
    id: "har-ki-pauri",
    name: "Har Ki Pauri",
    group: "haridwar",
    location: "Haridwar, Uttarakhand",
    significance:
      "Haridwar's most revered ghat — its name is traditionally read as “the steps of Hari”, Lord Vishnu.",
    description:
      "Har Ki Pauri is one of the most revered pilgrimage sites in Haridwar, located along the sacred River Ganga. It is especially known for its evening Ganga Aarti, when devotees gather to offer prayers and witness the ceremonial worship of the river.",
    highlights: [
      "Evening Ganga Aarti",
      "Sacred riverfront and prayer rituals",
      "Pilgrimage atmosphere and religious traditions",
      "Opportunities for spiritual reflection",
    ],
    suggestedExperience: "Attend the Ganga Aarti and explore the surrounding ghats.",
    visitDuration: "2–3 hours, including the evening aarti",
    notes: [
      "Aarti takes place around sunset, so its time shifts with the season. Arrive early to find a place on the steps.",
    ],
    image: {
      src: `${IMG}/har-ki-pauri.webp`,
      alt: "Har Ki Pauri ghat in Haridwar at dusk, with pilgrims on the steps and the clock tower above the Ganga",
    },
  },
  {
    id: "mansa-devi-temple",
    name: "Mansa Devi Temple",
    group: "haridwar",
    location: "Bilwa Parvat, Haridwar",
    significance:
      "A hilltop shrine of the goddess, often visited together with Chandi Devi as part of Haridwar's temple circuit.",
    description:
      "Mansa Devi Temple is a revered Hindu temple dedicated to Goddess Mansa Devi. Situated on Bilwa Parvat, it attracts devotees seeking blessings and spiritual fulfilment.",
    highlights: [
      "Goddess Mansa Devi darshan",
      "Hilltop temple surroundings",
      "Ropeway access where operational",
      "Panoramic views of Haridwar",
    ],
    visitDuration: "2–3 hours",
    notes: [
      "Ropeway access, operating hours and ticket charges are subject to local operating conditions. A stepped footpath is the alternative.",
    ],
    image: {
      src: `${IMG}/mansa-devi-temple.webp`,
      alt: "Mansa Devi Temple on Bilwa Parvat above Haridwar, with ropeway cabins climbing the forested hill",
    },
  },
  {
    id: "chandi-devi-temple",
    name: "Chandi Devi Temple",
    group: "haridwar",
    location: "Neel Parvat, Haridwar",
    significance:
      "A shrine of Goddess Chandi on the far bank of the Ganga, across the river from Mansa Devi.",
    description:
      "Chandi Devi Temple is a significant pilgrimage destination dedicated to Goddess Chandi Devi. Situated on Neel Parvat, the temple is visited by devotees as part of their spiritual journey through Haridwar.",
    highlights: [
      "Temple darshan",
      "Religious significance and local traditions",
      "Scenic hill surroundings",
      "Ropeway access where operational",
    ],
    visitDuration: "2–3 hours",
    notes: [
      "Ropeway access, operating hours and ticket charges are subject to local operating conditions.",
    ],
    image: {
      src: `${IMG}/chandi-devi-temple.webp`,
      alt: "Chandi Devi Temple on Neel Parvat, Haridwar, surrounded by forest on the hilltop",
    },
  },
  {
    id: "bharat-mata-mandir",
    name: "Bharat Mata Mandir",
    group: "haridwar",
    location: "Haridwar, Uttarakhand",
    significance:
      "Dedicated to the idea of Bharat Mata — Mother India — rather than to a single deity.",
    description:
      "Bharat Mata Mandir is a distinctive temple dedicated to the idea of Bharat Mata, representing India's cultural heritage, historical traditions and spiritual diversity. Its floors are given over to themes such as the country's saints, heroes and religious traditions.",
    highlights: [
      "Multi-storey temple structure",
      "Cultural and historical themes on each level",
      "Religious and educational significance",
    ],
    visitDuration: "1–1.5 hours",
    image: {
      src: `${IMG}/bharat-mata-mandir.webp`,
      alt: "The multi-storey Bharat Mata Mandir tower in Haridwar",
    },
  },
  {
    id: "triveni-ghat",
    name: "Triveni Ghat",
    group: "rishikesh",
    location: "Rishikesh, Uttarakhand",
    significance:
      "Rishikesh's principal bathing ghat, traditionally associated with the confluence of three sacred rivers.",
    description:
      "Triveni Ghat is a prominent sacred bathing ghat on the River Ganga in Rishikesh. It is associated with religious rituals, prayers and the evening Ganga Aarti.",
    highlights: [
      "Evening Ganga Aarti",
      "Sacred riverfront atmosphere",
      "Prayer rituals and devotional gatherings",
      "Peaceful riverside surroundings",
    ],
    visitDuration: "1.5–2 hours",
    image: {
      src: `${IMG}/triveni-ghat.webp`,
      alt: "Devotees at Triveni Ghat, Rishikesh, floating leaf-cup diyas on the Ganga during evening prayers",
    },
  },
  {
    id: "parmarth-niketan",
    name: "Parmarth Niketan",
    group: "rishikesh",
    location: "Swarg Ashram area, Rishikesh",
    significance:
      "One of Rishikesh's best-known ashrams, with its own riverside ghat and daily aarti.",
    description:
      "Parmarth Niketan is a well-known spiritual ashram in Rishikesh, recognised for its spiritual activities, yoga, meditation and Ganga Aarti.",
    highlights: [
      "Spiritual and meditation activities",
      "Yoga and wellness sessions, subject to availability",
      "Ganga Aarti on the ashram ghat",
      "Peaceful ashram surroundings",
    ],
    visitDuration: "1.5–2 hours",
    notes: [
      "Joining yoga, meditation or other ashram activities may need advance arrangement with the ashram.",
    ],
    image: {
      src: `${IMG}/parmarth-niketan.webp`,
      alt: "Parmarth Niketan ashram ghat on the Ganga in Rishikesh, with the large Shiva statue by the river",
    },
  },
  {
    id: "ram-jhula",
    name: "Ram Jhula",
    group: "rishikesh",
    location: "Rishikesh, Uttarakhand",
    significance:
      "The suspension bridge that links Rishikesh's ashram neighbourhoods on either bank of the Ganga.",
    description:
      "Ram Jhula is a well-known suspension bridge over the River Ganga, connecting spiritual neighbourhoods and giving access to ashrams, temples and riverfront attractions. The bridge itself is a crossing and viewpoint; the temples and ashrams are on the banks around it.",
    highlights: [
      "Views up and down the River Ganga",
      "Access to ashrams on both banks",
      "Riverside walks where permitted",
      "Photography of the river and hills",
    ],
    visitDuration: "1–2 hours for the crossing and nearby lanes",
    image: {
      src: `${IMG}/ram-jhula.webp`,
      alt: "Ram Jhula suspension bridge spanning the Ganga in Rishikesh with forested hills behind",
    },
  },
  {
    id: "lakshman-jhula-area",
    name: "Lakshman Jhula area",
    group: "rishikesh",
    location: "Tapovan and adjoining areas, Rishikesh",
    significance:
      "Tradition holds that Lakshman crossed the Ganga here on a rope of jute.",
    description:
      "The Lakshman Jhula area is associated with local religious traditions and is surrounded by temples, ashrams, river views and spiritual establishments. The historic 1929 bridge has been closed to crossing since 2019 for structural safety reasons; it can still be seen from the ghats and lanes on both banks.",
    highlights: [
      "Sacred riverfront surroundings",
      "Nearby temples and ashrams",
      "Views of the Ganga and surrounding hills",
      "Unhurried exploration of the adjoining lanes",
    ],
    visitDuration: "1.5–2 hours",
    notes: [
      "The old Lakshman Jhula bridge deck is closed. A new crossing, Bajrang Setu, has been built nearby — access has varied since construction, so we confirm its status before your visit.",
    ],
    image: {
      src: `${IMG}/lakshman-jhula-area.webp`,
      alt: "The Lakshman Jhula area in Rishikesh, with multi-storey temples on the riverbank and the Ganga below",
    },
  },
  {
    id: "neelkanth-mahadev-temple",
    name: "Neelkanth Mahadev Temple",
    group: "rishikesh",
    location: "Near Rishikesh, Pauri Garhwal district",
    significance:
      "Marks the place where, in legend, Lord Shiva held the poison of the Samudra Manthan in his throat.",
    description:
      "Neelkanth Mahadev Temple is a revered Hindu temple dedicated to Lord Shiva, set in the forested hills near Rishikesh. It is associated with the legend of Samudra Manthan, in which Lord Shiva consumed the poison that emerged during the churning of the cosmic ocean — his throat turning blue, giving him the name Neelkanth.",
    highlights: [
      "Lord Shiva darshan",
      "Religious significance tied to the Samudra Manthan",
      "Forested hill surroundings",
      "A winding route through the Himalayan foothills",
    ],
    visitDuration: "Half a day, including the hill road",
    notes: [
      "Road travel time and conditions vary, especially in monsoon and on festival days. Included only where your package lists it.",
    ],
    image: {
      src: `${IMG}/neelkanth-mahadev-temple.webp`,
      alt: "The colourful gopuram-style entrance of Neelkanth Mahadev Temple amid forested hills near Rishikesh",
    },
  },
  {
    id: "dehradun",
    name: "Dehradun",
    group: "extensions",
    location: "Doon Valley, Uttarakhand",
    significance:
      "Uttarakhand's capital, a short drive from Rishikesh — useful as an arrival point or a gentle extra day.",
    description:
      "Dehradun sits in the broad Doon Valley between the Shivalik range and the lower Himalaya. For pilgrims it adds the cave shrine of Tapkeshwar Mahadev and a slower day among gardens and forest institutions before or after the yatra.",
    highlights: [
      "Tapkeshwar Mahadev cave temple",
      "Sahastradhara springs",
      "Forest Research Institute campus",
      "Robber's Cave (Guchhupani)",
    ],
    suggestedExperience:
      "Pairs well with a Shiva-focused itinerary, or as a restful day for senior travellers.",
    visitDuration: "Full day",
    image: {
      src: `${IMG}/dehradun.webp`,
      alt: "The colonial-era Forest Research Institute building in Dehradun set among lawns",
    },
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    group: "extensions",
    location: "Above Dehradun, Uttarakhand",
    significance:
      "A hill station above Dehradun, with long views towards the snow peaks on clear days.",
    description:
      "Mussoorie offers cooler air and Himalayan views after the riverside days of the yatra. It is a leisure extension rather than a pilgrimage site, and suits families who want to end the journey with a quieter day in the hills.",
    highlights: [
      "Mall Road and the old hill-station centre",
      "Gun Hill and Lal Tibba viewpoints",
      "Kempty Falls",
      "Himalayan views on clear days",
    ],
    suggestedExperience:
      "Best as a 1–2 day add-on after Rishikesh. Hill roads can be slow in peak season and monsoon.",
    visitDuration: "1–2 days",
    image: {
      src: `${IMG}/mussoorie.webp`,
      alt: "Mussoorie's ridge-top town with layered Himalayan foothills fading into the distance",
    },
  },
];
