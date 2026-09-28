import EverestBaseCampPage from "@/components/adventure/everest-base-camp-trek/EverestBaseCampPage";
import { buildMetadata } from "@/components/adventure/everest-base-camp-trek/lib/seo";

export const metadata = buildMetadata();

/** Fully static: all content comes from typed data files at build time. */
export const dynamic = "force-static";

export default function Page() {
  return <EverestBaseCampPage />;
}
