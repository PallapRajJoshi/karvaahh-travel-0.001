import type { USATourPackage } from "@/data/usa/packages";
import Carousel from "../../Carousel";
import USAPackageCard from "./USAPackageCard";

/** Swipeable package row used inside story and collection sections. */
export default function PackageRail({
  title,
  packages,
  dark = false,
  id,
}: {
  title: string;
  packages: USATourPackage[];
  dark?: boolean;
  id: string;
}) {
  if (!packages.length) return null;
  return (
    <div className="us-rail">
      <h3 id={id} className={`us-rail__h${dark ? " us-rail__h--light" : ""}`}>{title}</h3>
      <Carousel label={title} tone={dark ? "dark" : "light"}>
        {packages.map((p) => (
          <USAPackageCard key={p.id} p={p} scope={id} />
        ))}
      </Carousel>
    </div>
  );
}
