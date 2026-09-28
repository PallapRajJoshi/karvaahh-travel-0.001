import type { Metadata } from "next";
import AerialActivityPage from "@/components/activities/adventure/aerial/AerialActivityPage";
import { buildAerialMetadata } from "@/components/activities/adventure/aerial/metadata";
import { ultraLightFlight } from "@/components/activities/adventure/ultra-light-flight/ultra-light-flight.data";

export const metadata: Metadata = buildAerialMetadata(ultraLightFlight.seo);

export default function UltraLightFlightPage() {
  return <AerialActivityPage data={ultraLightFlight} />;
}
