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
  /** Quick-facts sidebar shown beside the intro */
  quickFacts: { label: string; value: string }[];
  /** Local industries served — drives the SEO "how we help" section */
  industries: string[];
  /** Location-specific, SEO-focused "how we help" blocks */
  howWeHelp: { title: string; text: string }[];
  /** Nearby communities also served from this location */
  nearby: string[];
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
    quickFacts: [
      { label: "Office", value: "1621 Harold King Ln, Lowell, AR 72745" },
      { label: "Serving", value: "Lowell & all of Benton County" },
      { label: "Meetings", value: "In person at our office, on site, or by video" },
      { label: "Specialty", value: "Construction accounting & job costing" },
    ],
    industries: [
      "Construction & specialty trades",
      "Trucking & logistics",
      "Professional services",
      "Retail & restaurants",
      "Real estate & property management",
      "Healthcare practices",
    ],
    howWeHelp: [
      {
        title: "Bookkeeping for Lowell businesses",
        text: "Monthly bookkeeping handled start to finish — transactions categorized, accounts reconciled, and reports delivered on a set schedule. Lowell owners who'd rather run their business than fight QuickBooks hand it to us and stop thinking about it.",
      },
      {
        title: "Construction accounting on the I-49 corridor",
        text: "Lowell sits in the middle of one of the busiest building corridors in Arkansas. We give contractors here real-time job costing, WIP schedules, and margin by job — so you're bidding from verified numbers, not last year's guesses.",
      },
      {
        title: "Tax planning that starts before December",
        text: "We plan year-round for Lowell business owners: quarterly projections, entity structure reviews, and timing strategies for equipment and hiring — so April is a formality instead of a surprise.",
      },
      {
        title: "Fractional CFO support as you grow",
        text: "Lowell companies scaling past the owner's ability to track cash in their head get budgets, rolling forecasts, and a monthly financial review — executive-level finance without an executive salary.",
      },
    ],
    nearby: [
      "Cave Springs",
      "Rogers",
      "Springdale",
      "Bentonville",
      "Centerton",
      "Bethel Heights",
    ],
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
    quickFacts: [
      { label: "Based in", value: "Lowell, AR — central to all of NWA" },
      { label: "Serving", value: "Benton & Washington County + nationwide" },
      { label: "Meetings", value: "On site anywhere in NWA, or by video" },
      { label: "Specialty", value: "Construction accounting & job costing" },
    ],
    industries: [
      "Construction & building trades",
      "Supplier & vendor businesses",
      "Trucking & logistics",
      "Startups & founder-led companies",
      "Professional services & practices",
      "Retail, restaurants & e-commerce",
    ],
    howWeHelp: [
      {
        title: "Accounting built for NWA's growth",
        text: "Northwest Arkansas grows faster than most metros in the country, and fast growth is exactly when books slip and cash gets tight. We keep financials clean and current so expansion decisions rest on real numbers.",
      },
      {
        title: "Construction accounting across the region",
        text: "The building boom from Bentonville to Fayetteville keeps contractors busy — and behind on job costing. We deliver WIP schedules, retainage tracking, and job-level margin reporting that sureties and banks respect.",
      },
      {
        title: "Bookkeeping & cleanup for busy owners",
        text: "Whether you need steady monthly bookkeeping or a catch-up on months of neglected books, we bring NWA businesses current and keep them that way — for a flat monthly fee with no hourly surprises.",
      },
      {
        title: "Fractional CFO & controller leadership",
        text: "Companies across NWA that aren't ready for a six-figure finance hire get budgeting, forecasting, cash strategy, and month-end close discipline on a part-time basis.",
      },
    ],
    nearby: [
      "Bentonville",
      "Rogers",
      "Springdale",
      "Fayetteville",
      "Bella Vista",
      "Siloam Springs",
      "Centerton",
      "Cave Springs",
    ],
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
    quickFacts: [
      { label: "Distance", value: "About 15 minutes from our Lowell office" },
      { label: "Serving", value: "Bentonville & greater Benton County" },
      { label: "Meetings", value: "At your office, ours, or by video" },
      { label: "Specialty", value: "Construction accounting & job costing" },
    ],
    industries: [
      "Construction & contractors",
      "Supplier & consulting firms",
      "Startups & new ventures",
      "Retail & hospitality",
      "Professional services",
      "Real estate & development",
    ],
    howWeHelp: [
      {
        title: "Bookkeeping for Bentonville businesses",
        text: "From Main Street shops to consulting firms serving the supplier community, we handle monthly books and deliver reports you can act on — accurate, on time, and explained in plain English.",
      },
      {
        title: "Construction & development accounting",
        text: "Bentonville's building pace is relentless. Contractors and developers here get job costing, WIP reporting, and progress-billing support that keeps every project's margin visible while it's still open.",
      },
      {
        title: "Investor- and lender-ready financials",
        text: "New ventures spinning out of the supplier world need financials that stand up to scrutiny. We prepare clean statements and forecasts for bank, investor, and board conversations.",
      },
      {
        title: "Proactive tax strategy",
        text: "Year-round planning for Bentonville owners — entity structure, quarterly estimates, and purchase timing — so your tax bill reflects decisions you made on purpose.",
      },
    ],
    nearby: ["Centerton", "Bella Vista", "Cave Springs", "Rogers", "Lowell", "Pea Ridge"],
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
    quickFacts: [
      { label: "Distance", value: "Under 10 minutes from our Lowell office" },
      { label: "Serving", value: "Rogers & the I-49 business corridor" },
      { label: "Meetings", value: "At your shop, our office, or by video" },
      { label: "Specialty", value: "Construction accounting & job costing" },
    ],
    industries: [
      "Construction & specialty trades",
      "Medical & dental practices",
      "Restaurants & retail",
      "Trucking & distribution",
      "Home services & field businesses",
      "Professional services",
    ],
    howWeHelp: [
      {
        title: "Monthly bookkeeping, done for you",
        text: "Rogers owners hand us the books and get them back reconciled every month, with reports that actually explain the business. No hourly billing, no chasing your bookkeeper for answers.",
      },
      {
        title: "Job costing for Rogers contractors",
        text: "Trades businesses along the I-49 corridor get real-time job costing and WIP schedules, so you learn a job is underwater in week six instead of at year end.",
      },
      {
        title: "Cleanup & catch-up bookkeeping",
        text: "Behind on the books after a busy stretch? We bring Rogers businesses fully current for a one-time flat fee — no judgment, and no obligation to continue monthly.",
      },
      {
        title: "Advisory for practices & growing shops",
        text: "Medical practices, restaurants, and service businesses in Rogers use us as a financial sounding board on pricing, hiring, and expansion — backed by their own numbers.",
      },
    ],
    nearby: ["Lowell", "Bentonville", "Cave Springs", "Springdale", "Bella Vista", "Avoca"],
  },
];

export function getArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
