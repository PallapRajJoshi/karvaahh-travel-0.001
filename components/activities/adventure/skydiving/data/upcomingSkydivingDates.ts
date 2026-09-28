/**
 * Upcoming skydiving dates.
 *
 * Leave this array EMPTY until an operator has publicly announced a date.
 * Never add estimated or placeholder dates — the page shows an honest
 * empty state when there is nothing here.
 *
 * Example entry (do not uncomment unless real):
 * {
 *   destination: "Everest Skydive",
 *   dateStart: "2027-10-20",   // ISO yyyy-mm-dd
 *   dateEnd: "2027-11-02",
 *   operator: "Operator name",
 *   status: "announced",
 *   price: "US$—",             // as quoted by the operator
 *   bookingUrl: "https://…",   // operator or enquiry link; "" if none
 * }
 */

export type SkydiveDateStatus = "announced" | "confirmed" | "limited" | "closed";

export interface UpcomingSkydiveDate {
  destination: string;
  dateStart: string;
  dateEnd: string;
  operator: string;
  status: SkydiveDateStatus;
  price: string;
  bookingUrl: string;
}

export const upcomingSkydivingDates: UpcomingSkydiveDate[] = [];
