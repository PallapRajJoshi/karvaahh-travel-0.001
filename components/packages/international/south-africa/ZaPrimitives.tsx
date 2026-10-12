import Image from "next/image";
import type { ReactNode } from "react";
import {
  Binoculars,
  Camera,
  Car,
  Compass,
  Fish,
  Heart,
  Hotel,
  Landmark,
  Map as MapIcon,
  Mountain,
  Palmtree,
  Plane,
  ShieldCheck,
  Ship,
  Sparkles,
  Sun,
  Trees,
  Users,
  UtensilsCrossed,
  Wallet,
  Waves,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { saImage, type SAImageId } from "@/data/south-africa/images";
import type { SAIconKey } from "@/data/south-africa/types";

const ICONS: Record<SAIconKey, LucideIcon> = {
  binoculars: Binoculars, camera: Camera, car: Car, compass: Compass, fish: Fish, glass: Wine, heart: Heart,
  hotel: Hotel, landmark: Landmark, map: MapIcon, mountain: Mountain, palm: Palmtree, plane: Plane, shield: ShieldCheck,
  ship: Ship, sparkles: Sparkles, sun: Sun, trees: Trees, users: Users, utensils: UtensilsCrossed, waves: Waves, wallet: Wallet,
};

/** Data-driven icon: data files name an icon by key, never import components. */
export function ZaIcon({ name = "compass", size = 20 }: { name?: SAIconKey; size?: number }) {
  const Icon = ICONS[name];
  return <Icon size={size} aria-hidden="true" />;
}

/**
 * Photo with a designed fallback. Destinations without a verified photo (or
 * CMS entries without one) render a warm, labelled panel instead of a
 * broken or mislabelled image.
 */
export function ZaMedia({
  id,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  decorative = false,
  preload = false,
  label,
}: {
  id?: SAImageId;
  sizes?: string;
  className?: string;
  decorative?: boolean;
  preload?: boolean;
  label?: string;
}) {
  const img = saImage(id);
  return (
    <span className={`za-media ${className}`.trim()}>
      {img ? (
        <Image src={img.src} alt={decorative ? "" : img.alt} fill sizes={sizes} className="za-media__img" preload={preload} />
      ) : (
        <span className="za-media__fallback" aria-hidden={label ? undefined : true}>
          <MapIcon size={26} aria-hidden="true" />
          {label && <span>{label}</span>}
        </span>
      )}
    </span>
  );
}

/** Editorial section heading. `light` for dark sections. */
export function ZaHead({
  id,
  eyebrow,
  title,
  lede,
  light = false,
  center = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  light?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`pkg-section__head za-head${center ? " asia-head--center" : ""}`}>
      <p className={`asia-eyebrow${light ? " asia-eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2 id={id} className={`pkg-h2 za-h2${light ? " pkg-h2--light" : ""}`}>{title}</h2>
      {lede && <p className={`pkg-lede${light ? " pkg-lede--light" : ""}`}>{lede}</p>}
      {children}
    </div>
  );
}
