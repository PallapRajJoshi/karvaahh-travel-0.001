import type { ItineraryDay } from "./types";

export const ITINERARY_LABEL = "Illustrative 4 days / 3 nights";

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Haridwar",
    route: "Arrival point → Haridwar",
    activities: [
      { text: "Pickup from the designated arrival point" },
      { text: "Transfer to your hotel and check in" },
      { text: "Visit Har Ki Pauri" },
      { text: "Evening Ganga Aarti, subject to timing and local conditions" },
      { text: "Return to the hotel" },
    ],
    meals: "As per selected package",
    overnight: "Haridwar",
  },
  {
    day: 2,
    title: "Haridwar temples, then on to Rishikesh",
    route: "Haridwar → Rishikesh",
    activities: [
      { text: "Breakfast at the hotel" },
      { text: "Mansa Devi Temple" },
      { text: "Chandi Devi Temple, subject to time and access" },
      { text: "Other selected Haridwar attractions, such as Bharat Mata Mandir", optional: true },
      { text: "Transfer to Rishikesh and check in" },
      { text: "Evening Ganga Aarti at Triveni Ghat, subject to timing" },
    ],
    meals: "Breakfast; other meals as per package",
    overnight: "Rishikesh",
  },
  {
    day: 3,
    title: "Rishikesh ashrams, ghats and bridges",
    route: "Rishikesh (and Neelkanth, optional)",
    activities: [
      { text: "Breakfast at the hotel" },
      { text: "Parmarth Niketan" },
      { text: "Ram Jhula and the surrounding spiritual area" },
      { text: "The Lakshman Jhula area, subject to access restrictions" },
      {
        text: "Neelkanth Mahadev Temple — depends on road conditions, time available and your package",
        optional: true,
      },
      { text: "Return to the hotel" },
    ],
    meals: "Breakfast; other meals as per package",
    overnight: "Rishikesh",
  },
  {
    day: 4,
    title: "Departure",
    route: "Rishikesh → Departure point",
    activities: [
      { text: "Breakfast at the hotel" },
      { text: "Free time for personal prayers or a last walk by the river, depending on departure time" },
      { text: "Check out" },
      { text: "Drop-off at the designated departure point" },
    ],
    meals: "Breakfast",
    overnight: null,
  },
];

export const ITINERARY_DISCLAIMER =
  "This itinerary is a suggested plan, not a fixed departure. Timings and order may change because of traffic, weather, temple timings, access restrictions or other operating conditions. Your confirmed itinerary is shared with your booking.";
