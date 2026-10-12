import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ExperiencePage from "@/components/activities/experience/ExperiencePage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { buildHeliTourMetadata } from "@/components/activities/experience/structured-data";
import { CHAR_DHAM_ALIASES, CHAR_DHAM_PAGES, getCharDhamPage } from "@/data/char-dham";

type Props = { params: Promise<{ slug: string }> };

/** Every Char Dham sub-page (and alias) is prerendered; unknown slugs 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...Object.keys(CHAR_DHAM_PAGES), ...Object.keys(CHAR_DHAM_ALIASES)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = getCharDhamPage(slug);
  return found ? buildHeliTourMetadata(resolveImages(found)) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const alias = CHAR_DHAM_ALIASES[slug];
  if (alias) permanentRedirect(`/activities/char-dham-yatra/${alias}`);
  const found = getCharDhamPage(slug);
  if (!found) notFound();
  return <ExperiencePage tour={resolveImages(found)} />;
}
