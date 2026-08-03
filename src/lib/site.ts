/**
 * Central business information for TSB Accounting Solutions, LLC.
 * NAP (Name / Address / Phone) is consumed by the footer, contact page,
 * area pages, and LocalBusiness schema — edit here, updates everywhere.
 *
 * NOTE: Never add the EIN or any license numbers to this file — internal only.
 */

export const site = {
  legalName: "TSB Accounting Solutions, LLC",
  name: "TSB Accounting Solutions",
  tagline:
    "Bookkeeping, advisory, and fractional CFO/controller support for growing businesses — local to Northwest Arkansas, available virtually nationwide.",
  owner: "Victoria Harris-Pelletier",
  phone: "(479) 633-1206",
  phoneHref: "tel:+14796331206",
  /** WhatsApp contact option (client request) — same business/cell number */
  whatsappHref: "https://wa.me/14796331206",
  email: "victoria@tsbaccountingsolutionsllc.com",
  address: {
    street: "1621 Harold King Ln",
    city: "Lowell",
    state: "AR",
    stateFull: "Arkansas",
    zip: "72745",
  },
  /** Canonical production domain */
  url: "https://tsbaccountingsolutionsllc.com",
  googleBusinessProfile: "https://maps.app.goo.gl/AFn1KEQH1HReiKPD7",
  facebook:
    "https://www.facebook.com/people/TSB-Accounting-Solutions-LLC/61580898571123/",
  serviceArea: "Northwest Arkansas",
  /** EDITABLE: confirm exact hours with client */
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  /** Schema.org openingHoursSpecification-compatible values */
  hoursSchema: ["Mo-Fr 08:00-17:00"],
  /** Stat badge — per client edits: 20+ years of experience, name underneath */
  yearsBadge: "20+ Years",
  yearsBadgeLabel: "Accounting Experience",
  yearsBadgeName: "Victoria Harris-Pelletier",
  /** Approximate geo coordinates for Lowell, AR (used in LocalBusiness schema) */
  geo: { lat: 36.2554, lng: -94.1308 },
  trustChips: [
    "Locally Owned",
    "QuickBooks Experts",
    "Virtual Nationwide",
    "Free Consultation",
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/** Google Maps embed of the Lowell office — no API key required */
export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.legalName}, ${fullAddress}`
)}&output=embed`;
