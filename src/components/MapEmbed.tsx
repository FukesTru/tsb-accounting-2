import { mapsEmbedSrc } from "@/lib/site";

/** Lazy-loaded Google Maps embed of the Lowell, AR office. */
export default function MapEmbed({ className = "h-80" }: { className?: string }) {
  return (
    <iframe
      src={mapsEmbedSrc}
      title="Map to TSB Accounting Solutions, 1621 Harold King Ln, Lowell, AR 72745"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-lg border-0 ${className}`}
    />
  );
}
