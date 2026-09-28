import RegionSpotlight from "./RegionSpotlight";
import { regionSpotlights } from "@/data/campingContent";

type Props = { ids: string[]; startReversed?: boolean };

/** Renders a run of region spotlights in the given order, alternating sides. */
export default function TrekkingCampingSection({ ids, startReversed = false }: Props) {
  const regions = ids
    .map((id) => regionSpotlights.find((r) => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  return (
    <>
      {regions.map((r, i) => (
        <RegionSpotlight key={r.id} region={r} reverse={(i % 2 === 1) !== startReversed} />
      ))}
    </>
  );
}
