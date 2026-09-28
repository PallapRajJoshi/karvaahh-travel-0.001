import Image from "next/image";

export default function Logomark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative h-17 w-17 shrink-0 overflow-hidden rounded-full ${className}`}
    >
      <Image
        src="/karvaahh-tours-travels-logo.webp"
        alt="Karvaahh Tours & Travels"
        fill
        priority
        sizes="48px"
        className="object-cover"
      />
    </div>
  );
}