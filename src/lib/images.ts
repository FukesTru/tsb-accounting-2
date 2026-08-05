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
 */
export const storyImage = {
  src: "/images/victoria-harris-pelletier.jpg",
  alt: "Victoria Harris-Pelletier, licensed CPA and owner of TSB Accounting Solutions in Lowell, Arkansas",
  width: 680,
  height: 1024,
  /** Tailwind object-position utility for the 7:8 display frame */
  objectPosition: "object-[center_22%]",
};
