import type { Metadata } from "next";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import { annapurnaScenicFlightPage } from "@/data/domestic-flights/annapurna-scenic";

const tour = resolveImages(annapurnaScenicFlightPage);

export const metadata: Metadata = buildHeliTourMetadata(tour);

export default function Page() {
  return <ExperiencePage tour={tour} />;
}
