import { planHref, ROUTES } from "./routes";
import type { ExperienceCard } from "./types";

/**
 * "Travel Experiences We Create".
 * Descriptions are deliberately descriptive, not promissory: no prices, durations,
 * guarantees or counts.
 *
 * `span` drives the 6-column desktop mosaic. Rows add up to 6:
 *   4+2 · 2+2+2 · 3+3 · 2+4 · 2+2+2 · 3+3
 *
 * Hubs that are not yet verified in the live app are listed in routes.ts;
 * everything without a dedicated page links to a pre-filled enquiry instead of a dead end.
 */
export const experiences: ExperienceCard[] = [
  { id: "nepal", title: "Nepal Tours", category: "Destinations", text: "Cities, lakes, jungle and mountain views across Nepal's seven provinces.", href: ROUTES.destinations, cta: "Explore", imageKey: "exp-nepal", span: 4 },
  { id: "india", title: "India Tours", category: "Destinations", text: "Himalayan foothills, heritage cities and coastlines, planned end to end.", href: planHref("india-tours"), cta: "Plan this", imageKey: "exp-india", span: 2 },

  { id: "international", title: "International Tours", category: "Destinations", text: "Asia, Europe and beyond, with the same personal attention.", href: planHref("international-tours"), cta: "Plan this", imageKey: "exp-international", span: 2 },
  { id: "spiritual", title: "Spiritual & Pilgrimage Tours", category: "Pilgrimage", text: "Yatras and sacred journeys across Nepal and India, paced with care.", href: ROUTES.spiritual, cta: "Explore", imageKey: "exp-spiritual", span: 2 },
  { id: "adventure", title: "Himalayan Adventures", category: "Adventure", text: "Paragliding, scenic flights and high-country experiences.", href: ROUTES.adventure, cta: "Explore", imageKey: "exp-adventure", span: 2 },

  { id: "trekking", title: "Trekking & Outdoor Experiences", category: "Adventure", text: "Trails, camps and open-air days, from gentle walks to demanding routes.", href: ROUTES.activities, cta: "Explore", imageKey: "exp-trekking", span: 3 },
  { id: "family", title: "Family Holidays", category: "Occasions", text: "Comfortable, flexible plans that suit every generation travelling together.", href: planHref("family-holidays"), cta: "Plan this", imageKey: "exp-family", span: 3 },

  { id: "honeymoon", title: "Honeymoon & Romantic Escapes", category: "Occasions", text: "Quiet lakes, mountain views and time set aside for the two of you.", href: planHref("honeymoon"), cta: "Plan this", imageKey: "exp-honeymoon", span: 2 },
  { id: "corporate", title: "Corporate Tours & Retreats", category: "Groups", text: "Offsites, incentive trips and team retreats shaped around your group.", href: planHref("corporate-retreats"), cta: "Plan this", imageKey: "exp-corporate", span: 4 },

  { id: "educational", title: "Educational Tours", category: "Groups", text: "Learning journeys for students and groups, rooted in place and culture.", href: planHref("educational-tours"), cta: "Plan this", imageKey: "exp-educational", span: 2 },
  { id: "wedding", title: "Destination Weddings", category: "Occasions", text: "A setting, a guest plan and the logistics, coordinated in one place.", href: planHref("destination-weddings"), cta: "Plan this", imageKey: "exp-wedding", span: 2 },
  { id: "wellness", title: "Yoga & Wellness", category: "Wellness", text: "Retreats and slower journeys built around rest and renewal.", href: planHref("yoga-wellness"), cta: "Plan this", imageKey: "exp-wellness", span: 2 },

  { id: "luxury", title: "Luxury Travel", category: "Signature", text: "Refined stays and private arrangements, tailored to how you like to travel.", href: planHref("luxury-travel"), cta: "Plan this", imageKey: "exp-luxury", span: 3 },
  { id: "custom", title: "Customized Journeys", category: "Signature", text: "Nothing on this list? Tell us what you have in mind and we'll design it.", href: planHref("customized-journey"), cta: "Start here", imageKey: "exp-custom", span: 3 },
];
