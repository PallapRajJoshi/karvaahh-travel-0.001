import type { TrekPackage } from "./types";

/**
 * Add verified packages here. While this array is empty, the section shows
 * the "Request a Customized Trek Package" card instead of package cards.
 *
 * Never add a price without a verified date; omit `price` to show "Price on request".
 *
 * Example shape (do NOT publish until every field is confirmed):
 * {
 *   id: "api-base-camp-12d",
 *   title: "Api Himal Base Camp Trek",
 *   duration: "12 days",
 *   difficulty: "Challenging",
 *   routeSummary: "Kathmandu – Dhangadhi – Darchula – Chameliya valley – Api Himal Base Camp",
 *   accommodation: "Hotel, tea houses, homestays and supported camping",
 *   inclusions: ["…"],
 *   exclusions: ["…"],
 *   price: { amount: 0, currency: "INR", basis: "per person, twin share", verifiedOn: "2026-10-01" },
 *   detailsHref: "/packages/api-himal-base-camp-trek",
 * }
 */
export const PACKAGES: TrekPackage[] = [];

export const PACKAGES_META = {
  title: "Explore Api Nampa Base Camp Trek Packages",
  intro:
    "Api Nampa is too remote for one-size-fits-all departures. Every trip is planned privately around current access, your dates and your group.",
  custom: {
    title: "Request a Customized Trek Package",
    body: "Tell us when you’d like to travel, who’s coming and how you like to trek. We’ll check current road and trail conditions and come back with a route, stay plan and quote built around you.",
    planPoints: [
      "Your dates and flexibility",
      "Group size and trekking experience",
      "Preferred pace and acclimatisation days",
      "Tea house, homestay or camping preference",
      "Extras like Kalidhunga Lake or village time",
    ],
    note: "Private arrangements are subject to local availability and current conditions.",
  },
};
