import type { SpiritualExperience } from "./types";

export const EXPERIENCES: SpiritualExperience[] = [
  {
    id: "aarti-har-ki-pauri",
    title: "Ganga Aarti at Har Ki Pauri",
    description:
      "As evening falls, priests raise tiered brass lamps to the river while bells, conch shells and chanting carry across the ghat. Pilgrims float leaf-cup diyas on the current — for many, this is the moment the yatra begins.",
    suitableFor: ["Families", "Devotees", "Senior travellers"],
    note: "Crowds are heavy on festival days and weekends. Timing follows sunset.",
    icon: "diya",
  },
  {
    id: "aarti-triveni-ghat",
    title: "Ganga Aarti at Triveni Ghat",
    description:
      "Rishikesh's evening prayers are smaller in scale than Haridwar's, with the hills close behind the ghat and room to sit by the water through the ceremony.",
    suitableFor: ["Families", "Couples", "Devotees"],
    note: "Timing follows sunset and varies through the year.",
    icon: "river",
  },
  {
    id: "temple-darshan",
    title: "Temple darshan",
    description:
      "Mansa Devi and Chandi Devi in Haridwar, Neelkanth Mahadev in the hills beyond Rishikesh, and the temples included in your itinerary — each visited at a pace that leaves time for prayer.",
    suitableFor: ["Devotees", "Families", "Senior travellers"],
    note: "Temple timings, queues and ropeway operation vary. Special darshan or puja is arranged separately on request.",
    icon: "temple",
  },
  {
    id: "ashram-visits",
    title: "Ashram visits",
    description:
      "Spend time in the courtyards and riverside ghats of ashrams such as Parmarth Niketan, and see how daily spiritual life is organised in Rishikesh.",
    suitableFor: ["Spiritual seekers", "Cultural travellers", "Couples"],
    note: "Each ashram sets its own visiting rules and timings.",
    icon: "lotus",
  },
  {
    id: "yoga-meditation",
    title: "Yoga & meditation",
    description:
      "Rishikesh is known worldwide for yoga. Guided sessions at an ashram or centre can be added for beginners and regular practitioners alike.",
    suitableFor: ["Yoga enthusiasts", "Couples", "Spiritual seekers"],
    note: "Subject to availability and advance arrangement. Participation is optional.",
    icon: "yoga",
  },
  {
    id: "riverfront",
    title: "Sacred riverfront walks",
    description:
      "Unhurried time along the ghats between Ram Jhula and the Lakshman Jhula area — watching morning rituals, sadhus and the green water of the Ganga moving past.",
    suitableFor: ["Everyone", "Photographers"],
    note: "Follow ghat safety instructions. The Ganga is fast and cold even when it looks calm.",
    icon: "wave",
  },
  {
    id: "reflection",
    title: "Reflection & family pilgrimage",
    description:
      "Unscheduled hours for personal prayer and quiet — and the shared experience of three generations standing at the same aarti.",
    suitableFor: ["Families", "Senior travellers", "Devotees"],
    icon: "family",
  },
];
