import type { Metadata } from "next";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import { lehLadakhFlightsPage } from "@/data/domestic-flights/leh-ladakh-scenic-flights";

const tour = resolveImages(lehLadakhFlightsPage);

export const metadata: Metadata = buildHeliTourMetadata(tour);

export default function Page() {
  return <ExperiencePage tour={tour} />;
}
