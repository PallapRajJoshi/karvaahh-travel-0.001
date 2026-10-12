import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import { HELICOPTER_TOUR_ALIASES, HELICOPTER_TOUR_SLUGS, getHelicopterTour } from "@/data/helicopter-tours";

type Props = { params: Promise<{ slug: string }> };

/** Every destination (and alias) is prerendered; unknown slugs 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...HELICOPTER_TOUR_SLUGS, ...Object.keys(HELICOPTER_TOUR_ALIASES)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = getHelicopterTour(slug);
  const tour = found && resolveImages(found);
  return tour ? buildHeliTourMetadata(tour) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const alias = HELICOPTER_TOUR_ALIASES[slug];
  if (alias) permanentRedirect(`/activities/helicopter-tours/${alias}`);
  const found = getHelicopterTour(slug);
  const tour = found && resolveImages(found);
  if (!tour) notFound();
  return <ExperiencePage tour={tour} />;
}
