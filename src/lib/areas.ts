/**
 * Service-area pages for local SEO. Each entry renders at /areas/[slug].
 */

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  displayName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroKeyword: string;
  isPrimary?: boolean;
  intro: string[];
  localNote: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "lowell-ar",
    city: "Lowell",
    state: "AR",
    displayName: "Lowell, AR",
    h1: "Accounting & Bookkeeping in Lowell, AR",
    metaTitle: "Accounting & Bookkeeping in Lowell, AR",
    metaDescription:
      "Local accounting, bookkeeping & fractional CFO services in Lowell, Arkansas. TSB Accounting Solutions is headquartered right here in Lowell. Free consultation.",
    heroKeyword: "Lowell, AR",
    isPrimary: true,
    intro: [
      "TSB Accounting Solutions is headquartered right here in Lowell, Arkansas — so when we say we're your local accounting firm, we mean it literally. From our home base on Harold King Lane, we provide bookkeeping, accounting and advisory services, and fractional CFO and controller support to small businesses throughout Lowell and the surrounding communities.",
      "Lowell sits at the heart of one of the fastest-growing regions in the country, and the businesses here — trucking and logistics companies, contractors, professional services, retail, and everything in between — need financial support that keeps pace. Whether you need your books handled every month, a cleanup to get caught up, tax planning that saves real money, or executive-level financial leadership without the executive-level payroll, you have a neighbor who does exactly that. Meet us in person here in Lowell, or work with us virtually — whatever fits how you run your business.",
    ],
    localNote:
      "Our office is located at 1621 Harold King Ln in Lowell — minutes from Highway 71B and I-49, and an easy drive from anywhere in Benton or Washington County.",
  },
  {
    slug: "northwest-arkansas",
    city: "Northwest Arkansas",
    state: "AR",
    displayName: "Northwest Arkansas",
    h1: "Accounting & Fractional CFO Services in Northwest Arkansas",
    metaTitle: "Accounting Services in Northwest Arkansas (NWA)",
    metaDescription:
      "Bookkeeping, accounting & fractional CFO services across Northwest Arkansas — Bentonville, Rogers, Fayetteville, Springdale & beyond. Virtual nationwide.",
    heroKeyword: "Northwest Arkansas",
    intro: [
      "Northwest Arkansas is one of the fastest-growing metro areas in America — home to global headquarters, a booming startup scene, and thousands of small businesses that keep the region running. TSB Accounting Solutions serves all of it. From our office in Lowell, we provide bookkeeping, accounting and advisory services, and fractional CFO and controller support to businesses in Bentonville, Rogers, Fayetteville, Springdale, and every community in between.",
      "Growth is NWA's defining feature — and growth is exactly when financial clarity matters most. Businesses scaling fast need books that stay clean, forecasts that stay honest, and someone senior watching the cash. That's what we do, at a price point built for small business. We meet NWA clients in person and work with clients across the United States virtually, with the same monthly rhythm and the same attention either way.",
    ],
    localNote:
      "We serve the entire NWA corridor — Bentonville, Rogers, Springdale, Fayetteville, Lowell, Cave Springs, Centerton, Bella Vista, Siloam Springs, and beyond — plus virtual clients nationwide.",
  },
  {
    slug: "bentonville-ar",
    city: "Bentonville",
    state: "AR",
    displayName: "Bentonville, AR",
    h1: "Accounting & Bookkeeping in Bentonville, AR",
    metaTitle: "Accounting & Bookkeeping in Bentonville, AR",
    metaDescription:
      "Bookkeeping, accounting & fractional CFO services for Bentonville, AR businesses. TSB Accounting Solutions — local to NWA, minutes from Bentonville.",
    heroKeyword: "Bentonville, AR",
    intro: [
      "Bentonville isn't just a hometown anymore — it's a headquarters town, a startup town, and one of the most dynamic small-business markets in the country. TSB Accounting Solutions supports Bentonville businesses with bookkeeping, accounting and advisory services, and fractional CFO and controller leadership, all from our office just minutes away in Lowell.",
      "Whether you're a supplier team spinning off your own venture, a Main Street shop, a contractor riding the building boom, or a startup that needs investor-ready financials, the need is the same: accurate books, clear reporting, and someone who can translate the numbers into decisions. We deliver that on a flat, predictable monthly fee — in person around Bentonville or fully virtually, whichever you prefer.",
    ],
    localNote:
      "Bentonville clients are a short drive from our Lowell office — we're happy to meet at your office, ours, or over video.",
  },
  {
    slug: "rogers-ar",
    city: "Rogers",
    state: "AR",
    displayName: "Rogers, AR",
    h1: "Accounting & Bookkeeping in Rogers, AR",
    metaTitle: "Accounting & Bookkeeping in Rogers, AR",
    metaDescription:
      "Bookkeeping, accounting & fractional CFO services for Rogers, AR businesses. TSB Accounting Solutions — your neighbors in Lowell. Free consultation.",
    heroKeyword: "Rogers, AR",
    intro: [
      "Rogers is where much of Northwest Arkansas does business — from the shops and restaurants of historic downtown to the offices, medical practices, and contractors along the I-49 corridor. TSB Accounting Solutions is right next door in Lowell, providing Rogers businesses with monthly bookkeeping, accounting and advisory services, and fractional CFO and controller support.",
      "Our Rogers clients tend to have one thing in common: they'd rather run their business than fight with QuickBooks. So we take the financial back office off their plate — books reconciled every month, taxes planned before they're due, and real advice from someone who knows their numbers. Being minutes away means we can meet face to face whenever it helps; being cloud-based means you never have to leave your shop if you don't want to.",
    ],
    localNote:
      "From Pinnacle Hills to downtown Rogers, we're less than 15 minutes away — close enough for coffee, cloud-based enough that you never need to drive.",
  },
];

export function getArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
