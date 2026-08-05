/**
 * Site imagery.
 *
 * Victoria's headshot is the client's real photo (supplied by the client)
 * and is used everywhere a photo of her appears. Service-card imagery is
 * Unsplash stock (free license) — see src/lib/services.ts.
 */

/**
 * Victoria Harris-Pelletier — official headshot (client-supplied).
 * Native 680×1024 (2:3). Displayed in a 7:8 frame, so `objectPosition`
 * biases the crop upward to keep her face centered with good headroom.
 * A WebP twin is served first via <picture>, with the JPEG as fallback.
 */
export const storyImage = {
  src: "/images/victoria-harris-pelletier.jpg",
  webp: "/images/victoria-harris-pelletier.webp",
  alt: "Victoria Harris-Pelletier, licensed CPA and owner of TSB Accounting Solutions in Lowell, Arkansas",
  width: 680,
  height: 1024,
  /** Tailwind object-position utility for the 7:8 display frame */
  objectPosition: "object-[center_22%]",
};

/**
 * Build a responsive srcset for an Unsplash CDN URL.
 * Unsplash resizes on the fly via the `w`/`h` query params, so we offer
 * several widths and let the browser pick — instead of always shipping
 * the 1200px original to a ~400px slot.
 */
export function unsplashSrcSet(
  url: string,
  widths: number[] = [400, 600, 800, 1200]
): string {
  return widths
    .map((w) => {
      const u = new URL(url);
      const ratio =
        Number(u.searchParams.get("h") ?? 750) /
        Number(u.searchParams.get("w") ?? 1200);
      u.searchParams.set("w", String(w));
      u.searchParams.set("h", String(Math.round(w * ratio)));
      return `${u.toString()} ${w}w`;
    })
    .join(", ");
}
