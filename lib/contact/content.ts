import type { BudgetValue, TravelTypeValue } from "./options";

/**
 * All visible copy for /contact lives here, so wording changes never
 * touch layout code. Icon names map to components/contact/ContactIcon.tsx.
 *
 * Copy rule: no invented claims. No response-time promises, prices, years in
 * business, awards or statistics appear anywhere on this page.
 */

export type IconName =
  | "phone"
  | "message"
  | "mail"
  | "pin"
  | "globe"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "send"
  | "plus"
  | "compass"
  | "mountain"
  | "temple"
  | "users"
  | "heart"
  | "briefcase"
  | "graduation"
  | "rings"
  | "lotus"
  | "gem"
  | "sliders"
  | "facebook"
  | "instagram"
  | "youtube";

export const HERO = {
  eyebrow: "Let’s plan your journey",
  title: "Let’s Turn Your Travel Dreams Into Journeys",
  text: "From Himalayan adventures and spiritual pilgrimages to customized holidays around Nepal, India and the world, our travel experts are here to help you plan every detail.",
  primaryCta: "Plan My Trip",
  whatsappCta: "WhatsApp Us",
  callCta: "Call Us",
} as const;

export const ENQUIRY_INTRO = {
  title: "Tell Us About Your Trip",
  text: "Whether you already know where you want to go or need help choosing the perfect destination, share your requirements and our travel experts will get back to you.",
} as const;

export const PANEL = {
  title: "Your Journey Starts With a Conversation",
  note: "Available for travel enquiries, customized tours, pilgrimage planning and group travel.",
} as const;

export const WHY = {
  title: "Why Travelers Choose Karvaahh",
  subtitle: "More than a booking. We help you plan the journey.",
  items: [
    {
      n: "01",
      title: "Local Expertise",
      text: "Travel planning backed by destination knowledge and local experience.",
    },
    {
      n: "02",
      title: "Customized Journeys",
      text: "Build a trip around your interests, schedule and budget.",
    },
    {
      n: "03",
      title: "Personal Assistance",
      text: "Get support before, during and after your journey.",
    },
    {
      n: "04",
      title: "Complete Travel Solutions",
      text: "Transportation, accommodation, sightseeing, permits and experiences in one place.",
    },
  ],
} as const;

export type CategoryItem = {
  id: string;
  label: string;
  icon: IconName;
  /** Pre-fills the enquiry form when the card is clicked. */
  travelType: TravelTypeValue;
  budget?: BudgetValue;
};

export const CATEGORIES_TITLE = "What Are You Planning?";
export const CATEGORIES_SUBTITLE = "Choose a starting point and we’ll pre-fill your enquiry.";

export const CATEGORIES: readonly CategoryItem[] = [
  { id: "nepal", label: "Nepal Tours", icon: "mountain", travelType: "nepal-tours" },
  { id: "spiritual", label: "Spiritual Journeys", icon: "temple", travelType: "spiritual-pilgrimage" },
  { id: "adventure", label: "Himalayan Adventures", icon: "compass", travelType: "adventure-trekking" },
  { id: "family", label: "Family Holidays", icon: "users", travelType: "family" },
  { id: "honeymoon", label: "Honeymoon", icon: "heart", travelType: "honeymoon" },
  { id: "international", label: "International Tours", icon: "globe", travelType: "international" },
  { id: "corporate", label: "Corporate Travel", icon: "briefcase", travelType: "corporate" },
  { id: "educational", label: "Educational Tours", icon: "graduation", travelType: "educational" },
  { id: "wedding", label: "Destination Weddings", icon: "rings", travelType: "destination-wedding" },
  { id: "yoga", label: "Yoga & Wellness", icon: "lotus", travelType: "yoga-wellness" },
  { id: "luxury", label: "Luxury Travel", icon: "gem", travelType: "customized", budget: "luxury" },
  { id: "custom", label: "Customized Trips", icon: "sliders", travelType: "customized" },
];

export const FIND_US = {
  title: "Find Us",
  subtitle: "Visit us and let’s start planning your next adventure.",
} as const;

export type FaqItem = { q: string; a: string };

export const FAQ_TITLE = "Have Questions?";
export const FAQ_INTRO = "A few quick answers. Can’t find yours? Send us an enquiry and we’ll help.";

/**
 * Answers are deliberately free of numbers/SLAs. If you want to promise a
 * response time (e.g. "within one working day"), add it to the first answer.
 */
export const FAQS: readonly FaqItem[] = [
  {
    q: "How quickly will I receive a response?",
    a: "Our team reviews every enquiry and replies through the contact method you choose. For anything time-sensitive, WhatsApp or a phone call is usually the quickest way to reach us.",
  },
  {
    q: "Can I request a customized itinerary?",
    a: "Yes. Tell us your interests, travel dates, group size and budget, and we’ll shape an itinerary around them instead of fitting you into a fixed package.",
  },
  {
    q: "Can Karvaahh arrange transportation and hotels?",
    a: "Yes. We can plan transportation, accommodation, sightseeing, permits and experiences together, so you don’t have to coordinate each piece yourself.",
  },
  {
    q: "Do you organize pilgrimage tours?",
    a: "Yes. Pilgrimage and spiritual journeys across Nepal and India are a core part of what we plan. Choose “Spiritual & Pilgrimage Tours” in the form and tell us which sacred places you have in mind.",
  },
  {
    q: "Can I book international holidays?",
    a: "Yes. Beyond Nepal and India, we can help you plan international tours. Share your destination ideas and travel dates in the enquiry form.",
  },
  {
    q: "Do you arrange group and corporate tours?",
    a: "Yes. Family groups, corporate teams, educational trips and larger parties are all welcome. Let us know the group size and what you want from the trip.",
  },
  {
    q: "Can I contact Karvaahh through WhatsApp?",
    a: "Yes. Use the WhatsApp button on this page to start a chat, or choose WhatsApp as your preferred contact method in the enquiry form.",
  },
  {
    q: "Can I modify my travel plan after enquiry?",
    a: "Yes. Nothing is fixed at the enquiry stage, so your plan can change as we talk. Changes after a booking is confirmed depend on the booking and supplier rules — see our Cancellation Policy for details.",
  },
] as const;

export const FINAL_CTA = {
  title: "Your Next Journey Is Waiting",
  text: "Tell us where you want to go. We’ll help you figure out the rest.",
  primary: "Start Planning",
} as const;

export const IMAGES = {
  /**
   * Optional photography. Leave `null` to use the built-in illustrated
   * Himalayan scene (no broken-image risk, zero extra requests). To use a
   * photo, drop the file into /public and set the path, e.g.
   *   hero: { src: "/images/contact/hero-himalaya.jpg", alt: "…" }
   * Recommended: 2400×1350 JPG/WebP, subject on the right, under 350 KB.
   */
  hero: null as { src: string; alt: string } | null,
  finalCta: null as { src: string; alt: string } | null,
};
