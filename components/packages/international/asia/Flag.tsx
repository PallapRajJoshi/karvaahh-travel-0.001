import Image from "next/image";

/**
 * Small country flag. Emoji flags render as letters on Windows, so this uses
 * flagcdn SVGs, contained in a fixed box so every flag keeps its own shape
 * (Nepal's is not a rectangle). Decorative: the country name is always shown next to it.
 */
export default function Flag({ iso, size = 22, className = "" }: { iso: string; size?: number; className?: string }) {
  return (
    <span className={`asia-flag ${className}`.trim()} style={{ width: size, height: Math.round(size * 0.72) }}>
      <Image src={`https://flagcdn.com/${iso}.svg`} alt="" fill sizes={`${size}px`} unoptimized className="asia-flag__img" />
    </span>
  );
}
