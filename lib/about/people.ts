import type { TeamMember, Testimonial } from "./types";

/**
 * REAL DATA ONLY.
 *
 * Both arrays ship empty because no verified team or testimonial data was provided.
 * While empty:
 *   – production builds render NOTHING for these sections (no empty frames, no fake people);
 *   – `next dev` shows a dashed "add data here" placeholder so the layout is visible.
 *
 * Add entries and the sections appear automatically. Ideas for a durable source:
 * a CMS collection, or the same data file your /reviews or /testimonials page will use.
 */
export const team: TeamMember[] = [
  // {
  //   id: "jane-doe",
  //   name: "Jane Doe",
  //   role: "Founder",
  //   bio: "One or two honest sentences, written or approved by the person.",
  //   photo: "/images/team/jane-doe.jpg", // 4:5 portrait, ~800×1000
  //   email: "jane@example.com",           // optional – only if they want it public
  //   linkedin: "https://www.linkedin.com/in/…", // optional
  // },
];

export const testimonials: Testimonial[] = [
  // {
  //   id: "t1",
  //   name: "Traveller name (with permission)",
  //   destination: "Destination they travelled to",
  //   quote: "Their real words, lightly trimmed if needed – never rewritten.",
  //   rating: 5,
  //   photo: "/images/testimonials/t1.jpg", // optional
  // },
];

export const teamCopy = {
  eyebrow: "Our Team",
  title: "The People Behind Your Journey",
} as const;

export const testimonialsCopy = {
  eyebrow: "Traveler Experiences",
  title: "Stories From the Road",
} as const;
