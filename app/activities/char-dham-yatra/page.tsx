import type { Metadata } from "next";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import { CHAR_DHAM_MASTER } from "@/data/char-dham";

const tour = resolveImages(CHAR_DHAM_MASTER);

export const metadata: Metadata = buildHeliTourMetadata(tour);

export default function Page() {
  return <ExperiencePage tour={tour} />;
}
