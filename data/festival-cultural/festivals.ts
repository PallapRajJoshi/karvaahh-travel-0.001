/* ============================================================
   NEPAL FESTIVAL & CULTURAL TOURS — FESTIVALS
   ------------------------------------------------------------
   Seasons are broad windows, never dates: most festivals follow
   the lunar calendar, others the Nepali solar calendar, and all
   move against the Gregorian year. Add `confirmedDates` only from
   an official calendar for a named year.

   Categories describe the tradition a festival belongs to; a
   festival can sit in more than one, but communities are never
   treated as interchangeable.
   ============================================================ */

import type { Festival, FestivalCategoryId } from "./types";
import * as I from "./images";

export const FESTIVAL_CATEGORIES: { id: FestivalCategoryId | "all"; label: string }[] = [
  { id: "all", label: "All Festivals" },
  { id: "hindu", label: "Hindu Festivals" },
  { id: "buddhist", label: "Buddhist Celebrations" },
  { id: "newar", label: "Newar Heritage" },
  { id: "tharu", label: "Tharu Culture" },
  { id: "himalayan", label: "Himalayan Traditions" },
  { id: "terai", label: "Terai & Mithila Culture" },
];

export const CATEGORY_LABEL: Record<FestivalCategoryId, string> = {
  hindu: "Hindu",
  buddhist: "Buddhist",
  newar: "Newar",
  tharu: "Tharu",
  himalayan: "Himalayan",
  terai: "Terai & Mithila",
};

const CULTURE_HUB = { href: "/activities/culture-festival-experiences", label: "Festival experiences" };
const BAGMATI = { href: "/destinations/bagmati-province", label: "Kathmandu Valley" };

export const FESTIVALS: Festival[] = [
  {
    id: "dashain",
    name: "Dashain",
    tagline: "Nepal's greatest family festival",
    categories: ["hindu"],
    location: "Nationwide",
    season: "Autumn, typically September–October",
    months: [9, 10],
    description:
      "Nepal's longest and most widely celebrated festival brings families home for blessings, feasts and worship of the goddess Durga. Bamboo swings and kites appear in villages and towns across the country.",
    significance: "Celebrates the victory of good over evil. Elders place tika and jamara on younger relatives' foreheads with blessings.",
    highlights: ["Tika and blessings", "Durga worship", "Family gatherings", "Village swings"],
    image: I.dashain,
    art: "crimson",
    link: CULTURE_HUB,
    active: true,
  },
  {
    id: "tihar",
    name: "Tihar",
    tagline: "Festival of Lights",
    categories: ["hindu"],
    location: "Nationwide",
    season: "Autumn, typically October–November",
    months: [10, 11],
    description:
      "Five days when homes glow with oil lamps, marigold garlands and colourful rangoli. Crows, dogs and cows are honoured in turn, Laxmi Puja welcomes prosperity, and the festival ends with Bhai Tika between brothers and sisters.",
    significance: "Honours animals, prosperity and family bonds. Groups go door to door singing Deusi and Bhailo in the evenings.",
    highlights: ["Laxmi Puja", "Oil lamps & marigolds", "Bhai Tika", "Deusi-Bhailo songs"],
    image: I.tihar,
    art: "lamp",
    link: CULTURE_HUB,
    active: true,
  },
  {
    id: "holi",
    name: "Holi",
    tagline: "Festival of Colours",
    categories: ["hindu", "terai"],
    location: "Kathmandu Valley, hills and Terai",
    season: "Late winter to spring, typically February–March",
    months: [2, 3],
    description:
      "A joyful spring celebration of colour, music and community, known in Nepal as Fagu Purnima. The hills usually celebrate a day before the Terai, where Holi is especially vibrant.",
    significance: "Welcomes spring and celebrates the triumph of good over evil. Join in respectfully, play only with people who are willing, and protect cameras and phones.",
    highlights: ["Coloured powder", "Community gatherings", "Music in the streets"],
    image: I.holi,
    art: "holi",
    link: CULTURE_HUB,
    active: true,
  },
  {
    id: "indra-jatra",
    name: "Indra Jatra",
    tagline: "Kathmandu's great street festival",
    categories: ["newar", "hindu"],
    location: "Kathmandu Durbar Square (Basantapur)",
    season: "Late monsoon, typically September",
    months: [9, 9],
    description:
      "One of Kathmandu's most important Newar festivals, marked by the raising of a ceremonial pole, masked Lakhe dances, traditional music and the display of Bhairav masks around the old royal square.",
    significance: "Honours Indra, king of the heavens. The living goddess Kumari is carried through the old city in her chariot.",
    highlights: ["Kumari chariot procession", "Masked Lakhe dancers", "Traditional music", "Bhairav masks"],
    image: I.indraJatra,
    art: "royal",
    link: BAGMATI,
    active: true,
  },
  {
    id: "bisket-jatra",
    name: "Bisket Jatra",
    tagline: "Bhaktapur's New Year",
    categories: ["newar"],
    location: "Bhaktapur",
    season: "Spring, around Nepali New Year (mid-April)",
    months: [4, 4],
    description:
      "Bhaktapur welcomes the Nepali New Year with a dramatic multi-day festival. Huge chariots of Bhairav and Bhadrakali are hauled through the old town, with neighbourhoods competing in a spirited tug-of-war.",
    significance: "A Newar celebration of the new year. A tall ceremonial pole (lingo) is raised and then pulled down to mark the turn of the year.",
    highlights: ["Bhairav chariot tug-of-war", "Raising of the lingo pole", "Taumadhi Square"],
    image: I.nyatapola,
    pictured: "Taumadhi Square, Bhaktapur",
    art: "ochre",
    link: BAGMATI,
    active: true,
  },
  {
    id: "gai-jatra",
    name: "Gai Jatra",
    tagline: "Procession of remembrance",
    categories: ["newar"],
    location: "Kathmandu, Bhaktapur and Patan",
    season: "Monsoon, typically August–September",
    months: [8, 9],
    description:
      "Families who lost a loved one during the year join processions through the old streets, often with a cow or a child dressed as one. The day also carries a long tradition of humour and satire.",
    significance: "A Newar festival of remembrance and comfort. Treat the processions as observances by bereaved families, not as street performances.",
    highlights: ["Processions of remembrance", "Costumes and satire", "Bhaktapur's old streets"],
    image: I.gaiJatra,
    art: "saffron",
    link: BAGMATI,
    active: true,
  },
  {
    id: "teej",
    name: "Teej",
    tagline: "Celebrated by women in red",
    categories: ["hindu"],
    location: "Pashupatinath and temples nationwide",
    season: "Monsoon, typically August–September",
    months: [8, 9],
    description:
      "Women dressed in red gather to sing, dance and pray, many after a day of fasting. Large crowds visit Pashupatinath and other Shiva temples.",
    significance: "Women pray for the wellbeing of their families and spouses. Observe respectfully and always ask before photographing anyone.",
    highlights: ["Red attire", "Devotional songs & dance", "Gatherings at Pashupatinath"],
    image: I.pashupatiShrines,
    pictured: "Pashupatinath",
    art: "crimson",
    link: { href: "/spiritual-journeys/pashupatinath", label: "Pashupatinath" },
    active: true,
  },
  {
    id: "buddha-jayanti",
    name: "Buddha Jayanti",
    tagline: "The Buddha's birth anniversary",
    categories: ["buddhist"],
    location: "Lumbini, Swayambhunath and Boudhanath",
    season: "Spring, typically April–May (full-moon day)",
    months: [4, 5],
    description:
      "A day of prayer, butter lamps and quiet ceremony at stupas and monasteries across Nepal. In Lumbini, the birthplace of the Buddha, pilgrims gather around the Maya Devi Temple.",
    significance: "Commemorates the birth of Siddhartha Gautama, who became the Buddha. Walk clockwise around stupas and keep voices low.",
    highlights: ["Prayer ceremonies", "Butter lamps", "Monastery visits", "Lumbini pilgrimage"],
    image: I.mayaDevi,
    pictured: "Maya Devi Temple, Lumbini",
    art: "monastery",
    link: { href: "/destinations/lumbini-province", label: "Lumbini" },
    active: true,
  },
  {
    id: "chhath",
    name: "Chhath",
    tagline: "Offerings to the sun",
    categories: ["hindu", "terai"],
    location: "Janakpur and the Terai",
    season: "Autumn, typically October–November (after Tihar)",
    months: [10, 11],
    description:
      "Devotees, mostly women, keep a demanding fast and make offerings to the setting and rising sun at rivers and ponds. Ghats fill with families, baskets of fruit and lamps.",
    significance: "Devotion to the Sun and Chhathi Maiya, rooted in Mithila and the wider Terai. Keep a respectful distance from devotees in the water.",
    highlights: ["Sunset & sunrise offerings", "Lamp-lit ghats", "Mithila traditions"],
    image: I.chhath,
    art: "dusk",
    link: { href: "/destinations/madhesh-province", label: "Janakpur & Madhesh" },
    active: true,
  },
  {
    id: "maghi",
    name: "Maghi",
    tagline: "Tharu New Year",
    categories: ["tharu"],
    location: "Western and central Terai (Dang, Bardiya, Kailali, Chitwan)",
    season: "Winter, mid-January (Magh 1)",
    months: [1, 1],
    description:
      "The Tharu community's most important festival marks the new year with family feasts, traditional dance and song, and community gatherings where village decisions for the year are made.",
    significance: "A Tharu new year and harvest celebration. Many Nepalis also mark the same day as Maghe Sankranti with sesame sweets and yam.",
    highlights: ["Tharu dances", "Community feasts", "Traditional dress"],
    image: I.tharuDance,
    pictured: "Tharu folk dance",
    art: "forest",
    link: { href: "/destinations/lumbini-province", label: "Lumbini Province" },
    active: true,
  },
  {
    id: "losar",
    name: "Losar Festivals",
    tagline: "Himalayan New Years",
    categories: ["buddhist", "himalayan"],
    location: "Gurung, Tamang, Sherpa and Himalayan communities",
    season: "Winter to early spring, typically December–March",
    months: [12, 3],
    description:
      "Several communities celebrate distinct New Years: Tamu Lhosar (Gurung) around late December, Sonam Lhosar (Tamang) in January–February, and Gyalpo Lhosar (Sherpa and Tibetan Buddhist communities) in February–March.",
    significance: "Each Losar has its own calendar and customs — family feasts, cultural performances and monastery prayers. They are not one shared festival.",
    highlights: ["Tamu, Sonam & Gyalpo Lhosar", "Cultural performances", "Monastery prayers"],
    image: I.ghaleGaun,
    pictured: "Ghale Gaun, a Gurung village",
    art: "monastery",
    link: { href: "/destinations/gandaki-province", label: "Gandaki Province" },
    active: true,
  },
  {
    id: "rato-machhindranath",
    name: "Rato Machhindranath Jatra",
    tagline: "Lalitpur's great chariot festival",
    categories: ["newar"],
    location: "Lalitpur (Patan)",
    season: "Spring, typically April–May, often lasting several weeks",
    months: [4, 5],
    description:
      "A towering chariot carrying Rato Machhindranath is pulled in stages through the streets of Patan over several weeks. It concludes at Jawalakhel with Bhoto Jatra, when a sacred jewelled vest is shown to the crowd.",
    significance: "The deity, revered by Hindu and Buddhist Newars as Karunamaya, is associated with rain and a good harvest. It is one of the Kathmandu Valley's oldest festivals.",
    highlights: ["Giant chariot procession", "Bhoto Jatra", "Patan's old streets"],
    image: I.patanPalace,
    pictured: "Patan Durbar Square",
    art: "royal",
    link: BAGMATI,
    active: true,
  },
];

export const activeFestivals = () => FESTIVALS.filter((f) => f.active);
