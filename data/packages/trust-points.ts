export interface TrustPoint {
  title: string;
  text: string;
  /**
   * Only points the Karvaahh website/brand can stand behind are rendered.
   * Flip to `true` after confirming against the live site. Never add awards,
   * certifications, review counts or years of experience.
   */
  verified: boolean;
}

export const trustPoints: TrustPoint[] = [
  { title: "Customized journeys", text: "Tell us where, how and with whom you travel. We shape the route around you.", verified: true },
  { title: "Personalized itineraries", text: "Every plan is built for your dates, pace and group, not copied from a template.", verified: true },
  { title: "Local travel expertise", text: "Routes planned by a team based where these journeys begin.", verified: false },
  { title: "Dedicated travel support", text: "A named point of contact before and during your trip.", verified: false },
  { title: "Carefully selected accommodation", text: "Stays chosen for location, comfort and the trip they belong to.", verified: false },
  { title: "Private transportation", text: "Private vehicles where the route allows.", verified: false },
  { title: "Permit assistance", text: "Help with the permits your route needs.", verified: false },
];
