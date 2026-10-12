// data/travel-styles.ts
// Travel styles shared by the Asia filters, style cards and trip builder.

export type TravelStyleId =
  | "beach"
  | "honeymoon"
  | "family"
  | "luxury"
  | "adventure"
  | "cultural"
  | "shopping"
  | "spiritual"
  | "city"
  | "group";

export interface TravelStyle {
  id: TravelStyleId;
  /** Label on the quick-filter chips. */
  label: string;
  /** Heading on the large visual card (only styles with a card get one). */
  cardTitle?: string;
  cardText?: string;
  /** Destination id whose photo the card uses. */
  cardImageFrom?: string;
}

export const travelStyles: TravelStyle[] = [
  {
    id: "beach",
    label: "Beach Holidays",
    cardTitle: "Beach Escapes",
    cardText: "Maldives, Bali, Thailand, Sri Lanka and the Philippines.",
    cardImageFrom: "philippines",
  },
  {
    id: "honeymoon",
    label: "Honeymoon",
    cardTitle: "Honeymoon",
    cardText: "Romantic beaches, luxury resorts and memorable experiences.",
    cardImageFrom: "maldives",
  },
  {
    id: "family",
    label: "Family Holidays",
    cardTitle: "Family Holidays",
    cardText: "Comfortable itineraries with family-friendly attractions.",
    cardImageFrom: "singapore",
  },
  {
    id: "luxury",
    label: "Luxury Escapes",
    cardTitle: "Luxury Travel",
    cardText: "Premium hotels, private transfers and curated experiences.",
    cardImageFrom: "uae",
  },
  {
    id: "adventure",
    label: "Adventure",
    cardTitle: "Adventure",
    cardText: "Mountains, islands, deserts and outdoor experiences.",
    cardImageFrom: "turkey",
  },
  {
    id: "cultural",
    label: "Cultural Tours",
    cardTitle: "Cultural Journeys",
    cardText: "Temples, heritage cities, local traditions and historic sites.",
    cardImageFrom: "japan",
  },
  {
    id: "shopping",
    label: "Shopping",
    cardTitle: "Shopping & City Breaks",
    cardText: "Dubai, Singapore, Bangkok, Kuala Lumpur, Tokyo and more.",
    cardImageFrom: "malaysia",
  },
  {
    id: "spiritual",
    label: "Spiritual Journeys",
    cardTitle: "Spiritual Journeys",
    cardText: "Nepal, Bhutan, India and culturally significant destinations.",
    cardImageFrom: "nepal",
  },
  { id: "city", label: "City Breaks" },
  { id: "group", label: "Group Tours" },
];

export const styleLabel = (id: TravelStyleId) => travelStyles.find((s) => s.id === id)?.label ?? id;
