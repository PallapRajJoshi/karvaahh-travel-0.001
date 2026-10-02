import type { Festival } from "../types";

/**
 * Festival content.
 *
 * `season` is deliberately a broad window, never a date: Nepali festivals
 * follow lunar calendars and move every year. Add exact dates only from a
 * verified calendar for a named year.
 */
export const FESTIVALS_HEADING = "Celebrate Nepal’s Most Colorful Festivals";
export const FESTIVALS_LEDE =
  "Discover the traditions, rituals, stories, and community celebrations that bring Nepal’s cultural calendar to life.";
export const FESTIVALS_DATE_NOTE =
  "Festival dates follow lunar calendars and change every year. We confirm the current year’s dates with you when planning.";

export const FESTIVALS: Festival[] = [
  {
    id: "dashain",
    name: "Dashain",
    media: "dashain",
    description:
      "Nepal’s longest and most widely celebrated festival, bringing families together for blessings, feasts and ritual observances.",
    significance:
      "Celebrates the triumph of good over evil. Elders give tika and blessings to younger family members.",
    experience:
      "Look for village swings, kites in the sky and family feasts. Many people travel home, so transport and hotels get busy.",
    season: "Autumn, typically September–October",
    prefill: { interest: "festivals", message: "I’d like to plan a trip around Dashain.", label: "Dashain" },
  },
  {
    id: "tihar",
    name: "Tihar",
    media: "tihar",
    description:
      "The festival of lights, when homes glow with oil lamps, marigold garlands and colourful rangoli at the doorstep.",
    significance:
      "Five days of honouring animals, prosperity and the bond between brothers and sisters.",
    experience:
      "Evenings bring lamp-lit streets and groups going door to door singing Deusi-Bhailo.",
    season: "Autumn, typically October–November",
    prefill: { interest: "festivals", message: "I’d like to plan a trip around Tihar.", label: "Tihar" },
  },
  {
    id: "holi",
    name: "Holi",
    media: "holi",
    description:
      "The festival of colours: a joyful, playful spring celebration of community, with coloured powder and water in towns and cities.",
    significance:
      "Welcomes spring and celebrates the victory of good over evil.",
    experience:
      "Expect to be coloured if you join in. Protect phones and cameras, wear clothes you don’t mind staining, and always play with consent.",
    season: "Late winter to spring, typically February–March",
    prefill: { interest: "festivals", message: "I’d like to plan a trip around Holi.", label: "Holi" },
  },
  {
    id: "indra-jatra",
    name: "Indra Jatra",
    media: "indra-jatra",
    description:
      "One of Kathmandu’s great street festivals, rooted in Newar tradition, with ceremonial processions, masked dances and cultural performances.",
    significance:
      "Honours Indra, king of the heavens, and includes the chariot procession of the living goddess Kumari.",
    experience:
      "Watch chariot processions and masked dancers around the old royal square. Arrive early; the streets fill quickly.",
    season: "Late monsoon, typically August–September",
    prefill: { interest: "festivals", destination: "kathmandu", message: "I’d like to plan a trip around Indra Jatra.", label: "Indra Jatra" },
  },
  {
    id: "buddha-jayanti",
    name: "Buddha Jayanti",
    media: "buddha-jayanti",
    description:
      "A day of prayer and reflection at monasteries and stupas, marking the birth of the Buddha.",
    significance:
      "Nepal is the Buddha’s birthplace (Lumbini). The day is observed by Buddhist communities across the country.",
    experience:
      "Butter lamps, prayer ceremonies and quiet gatherings at stupas such as Swayambhunath and Boudhanath.",
    season: "Spring, typically April–May (full-moon day)",
    prefill: { interest: "spiritual", message: "I’d like to plan a trip around Buddha Jayanti.", label: "Buddha Jayanti" },
  },
  {
    id: "gai-jatra",
    name: "Gai Jatra",
    media: "gai-jatra",
    description:
      "A distinctive Kathmandu Valley festival of processions, costumes and street performances, with a tradition of humour and satire.",
    significance:
      "Families remember loved ones who passed away during the year. It is closely associated with Newar communities.",
    experience:
      "Processions wind through old streets in Kathmandu, Bhaktapur and Patan, with performers in costume.",
    season: "Monsoon, typically August",
    prefill: { interest: "festivals", destination: "kathmandu", message: "I’d like to plan a trip around Gai Jatra.", label: "Gai Jatra" },
  },
  {
    id: "chhath",
    name: "Chhath",
    media: "chhath",
    description:
      "A devotional festival of offerings and fasting, celebrated by communities gathering at rivers, ponds and other water bodies.",
    significance:
      "Devotion to the Sun and to Chhathi Maiya, marked by a demanding fast and offerings at sunset and sunrise.",
    experience:
      "Families gather at the water’s edge at dusk and dawn with baskets of offerings. Ask before photographing anyone.",
    season: "Autumn, typically October–November (after Tihar)",
    prefill: { interest: "festivals", message: "I’d like to plan a trip around Chhath.", label: "Chhath" },
  },
  {
    id: "teej",
    name: "Teej",
    media: "teej",
    description:
      "A festival celebrated by women, with red attire, devotional gatherings, songs and dance.",
    significance:
      "Women observe a fast and gather to pray, sing and dance, often for the wellbeing of their families.",
    experience:
      "Groups of women in red gather at temples and public spaces. Observe respectfully and ask before photographing.",
    season: "Monsoon, typically August–September",
    prefill: { interest: "festivals", message: "I’d like to plan a trip around Teej.", label: "Teej" },
  },
];
