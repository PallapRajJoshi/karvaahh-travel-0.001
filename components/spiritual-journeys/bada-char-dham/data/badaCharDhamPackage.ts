/**
 * Bada Char Dham Yatra — PACKAGE DATA
 * ----------------------------------------------------------------------------
 * Commercial information is kept in this file on its own so it can be edited
 * (or later sourced from a CMS/API) without touching page content or UI.
 *
 * RULE: nothing here is invented. Price, duration, dates, hotels and vehicles
 * stay `null` / empty until Karvaahh supplies confirmed values. The UI renders
 * each field only when it has a value, and otherwise shows the custom-package
 * message below.
 */

export interface PackagePrice {
  /** Amount in INR, per person. */
  amount: number;
  basis: string; // e.g. "per person, twin sharing"
  /** ISO date the price was last verified — shown to users. */
  verifiedOn: string;
}

export interface PackageDeparture {
  label: string; // e.g. "May 2027 group departure"
  note?: string;
}

export interface InclusionGroup {
  title: string;
  items: string[];
  note?: string;
}

export interface BadaCharDhamPackage {
  heading: string;
  intro: string;
  /** Rendered when price/duration are not set. */
  customMessage: string;
  price: PackagePrice | null;
  durationLabel: string | null; // e.g. "14 nights / 15 days" — only when confirmed
  departures: PackageDeparture[];
  hotelCategories: string[]; // e.g. ["Standard", "Deluxe"] — only when confirmed
  /** What Karvaahh needs from the traveller to prepare a quote. */
  quoteNeeds: string[];
  enquiry: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  inclusions: InclusionGroup[];
  exclusions: InclusionGroup[];
  disclaimer: string;
}

export const ENQUIRY_BASE = "/contact"; // ⚠ verify route exists (see README)

export const badaCharDhamPackage: BadaCharDhamPackage = {
  heading: "Bada Char Dham Yatra Package",
  intro:
    "Every Bada Char Dham Yatra is planned around the traveller: where the journey starts, when Badrinath is open, how long you can travel and how you prefer to move between regions.",
  customMessage:
    "Custom package options available based on travel dates, group size, accommodation category and transportation preferences.",
  price: null,
  durationLabel: null,
  departures: [],
  hotelCategories: [],
  quoteNeeds: [
    "Your starting city and preferred return city",
    "Approximate travel month",
    "Number of travellers, including senior citizens and children",
    "Preferred accommodation category",
    "Preference for flights, trains or road travel between regions",
    "Any mobility, dietary or medical considerations",
  ],
  enquiry: {
    primary: {
      label: "Request Package Details",
      href: `${ENQUIRY_BASE}?journey=bada-char-dham-yatra&type=package`,
    },
    secondary: {
      label: "Plan Your Yatra",
      href: `${ENQUIRY_BASE}?journey=bada-char-dham-yatra`,
    },
  },
  inclusions: [
    {
      title: "Accommodation",
      items: [
        "Accommodation in selected hotels on twin/triple-sharing basis",
        "Accommodation and meals as specified in the selected package",
      ],
    },
    {
      title: "Meals",
      items: ["Breakfast and dinner as per selected package"],
    },
    {
      title: "Transportation",
      items: [
        "Private transportation throughout the itinerary",
        "Airport/railway station pickup and drop-off, where applicable",
        "Intercity transfers and sightseeing mentioned in the itinerary",
        "Driver allowance",
        "Fuel",
        "Parking",
        "Applicable road taxes",
      ],
    },
    {
      title: "Pilgrimage Support",
      items: [
        "Tour coordinator/driver assistance throughout the journey",
        "Assistance with pilgrimage and temple visit arrangements where applicable",
        "Basic travel coordination and assistance throughout the Yatra",
      ],
    },
    {
      title: "Permits / Entry",
      items: ["Applicable permits and entry fees specifically mentioned in the package"],
    },
  ],
  exclusions: [
    {
      title: "Travel Tickets",
      items: ["Domestic or international airfare/train tickets unless specifically mentioned"],
    },
    {
      title: "Religious Expenses",
      items: ["VIP/special Darshan", "Temple donations", "Puja and ritual expenses"],
    },
    {
      title: "Personal Expenses",
      items: ["Laundry", "Telephone calls", "Room service", "Shopping"],
    },
    {
      title: "Food",
      items: ["Lunch", "Snacks", "Beverages"],
      note: "Unless specifically included.",
    },
    {
      title: "Optional Local Services",
      items: ["Porter", "Pony", "Palki", "Other optional local transportation"],
    },
    {
      title: "Insurance / Medical",
      items: ["Travel insurance", "Medical expenses"],
    },
    {
      title: "Unforeseen Expenses",
      items: [
        "Additional accommodation or transportation caused by weather",
        "Natural disasters",
        "Delays",
        "Unforeseen circumstances",
      ],
    },
    {
      title: "Government / Operational Changes",
      items: ["Government restrictions", "Route changes", "Temple operating changes"],
    },
    {
      title: "Other",
      items: [
        "Tips",
        "Gratuities",
        "Any service or expense not specifically mentioned under Package Inclusions",
      ],
    },
  ],
  disclaimer:
    "Package inclusions and exclusions may vary depending on the selected itinerary, travel dates, group size, accommodation category, transportation and operational requirements. Final package details should be confirmed before booking.",
};
