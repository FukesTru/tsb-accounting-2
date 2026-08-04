/**
 * Service architecture: 3 parent categories, each with sub-services.
 * Sub-services with a `slug` get their own page at
 * /services/[category]/[slug]; those without link back to the parent page.
 */

export type SubServiceLink = {
  name: string;
  slug: string | null;
  blurb: string;
  /** Absolute path override — used for services that live outside /services */
  href?: string;
};

export type SubServicePage = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroKeyword: string; // word(s) that get the gold accent underline in the H1
  intro: string[];
  included: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroKeyword: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  intro: string[];
  handle: string[];
  process: { title: string; description: string }[];
  why: string;
  subServices: SubServiceLink[];
  pages: SubServicePage[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "accounting-advisory",
    name: "Accounting & Advisory Services",
    shortName: "Accounting & Advisory",
    metaTitle: "Accounting & Advisory Services in Northwest Arkansas",
    metaDescription:
      "Financial statements, tax planning, and business advisory for Northwest Arkansas businesses. TSB Accounting Solutions in Lowell, AR — virtual nationwide. Free consultation.",
    heroKeyword: "Accounting & Advisory",
    cardDescription:
      "Accurate financials and forward-looking advice — so you always know where your business stands and where it's headed.",
    // Unsplash stock (free license) — swap for real firm photos when available
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=750&q=80",
    imageAlt:
      "Accountant reviewing financial documents and reports with a client",
    intro: [
      "Good decisions start with good numbers. Our accounting and advisory services give Northwest Arkansas business owners clean, reliable financial statements — and, just as importantly, someone who can explain what they mean and what to do next. Instead of getting a stack of reports once a year at tax time, you get financials you can actually use to run your business month to month.",
      "We prepare financial statements, build tax planning strategies that reduce surprises in April, and act as a sounding board for the decisions that keep you up at night: pricing, hiring, equipment purchases, and growth. Whether you're in Lowell, Rogers, Bentonville, Fayetteville, or working with us virtually from anywhere in the U.S., you get the same thing — numbers you can trust and advice in plain English.",
    ],
    handle: [
      "Construction accounting: job costing, WIP schedules & job profitability",
      "Monthly, quarterly, and annual financial statement preparation",
      "Proactive tax planning and strategy (not just year-end filing prep)",
      "Business advisory for pricing, hiring, and growth decisions",
      "Cash flow management and forecasting",
      "KPI dashboards and management reporting",
      "Coordination with your tax preparer, banker, or attorney",
    ],
    process: [
      {
        title: "Discovery Call",
        description:
          "We learn how your business runs, what your books look like today, and what's frustrating you about your current numbers.",
      },
      {
        title: "Assess & Scope",
        description:
          "We review your financials and systems, then recommend a right-sized engagement — no bloated packages, no surprises.",
      },
      {
        title: "Build Your Rhythm",
        description:
          "We set a monthly or quarterly cadence: statements delivered, KPIs tracked, and a standing review call to talk through them.",
      },
      {
        title: "Advise & Adjust",
        description:
          "As your business changes, your reporting and tax strategy change with it. We stay ahead of it so you don't have to.",
      },
    ],
    why: "Most small businesses only hear from their accountant at tax time. A dedicated advisory relationship means someone is watching your numbers all year — catching problems while they're small and spotting opportunities while they're still on the table.",
    subServices: [
      {
        name: "Construction Accounting",
        slug: null,
        href: "/construction-accounting",
        blurb: "Job costing, WIP reporting & real-time job profitability.",
      },
      {
        name: "Financial Statement Preparation",
        slug: "financial-statements",
        blurb: "Clean, accurate statements you can hand to a banker or investor.",
      },
      {
        name: "Tax Planning & Strategy",
        slug: "tax-planning",
        blurb: "Year-round planning that keeps April boring — in a good way.",
      },
      {
        name: "Business Advisory",
        slug: "business-advisory",
        blurb: "A financial sounding board for your biggest decisions.",
      },
      {
        name: "Cash Flow Management",
        slug: null,
        blurb: "Know what's coming in, what's going out, and what's left.",
      },
      {
        name: "KPI & Financial Reporting",
        slug: null,
        blurb: "The handful of numbers that actually drive your business.",
      },
    ],
    pages: [
      {
        slug: "financial-statements",
        name: "Financial Statement Preparation",
        metaTitle: "Financial Statement Preparation in Northwest Arkansas",
        metaDescription:
          "Accurate profit & loss, balance sheet, and cash flow statements for NWA businesses. Bank-ready financials from TSB Accounting Solutions in Lowell, AR.",
        heroKeyword: "Financial Statement",
        intro: [
          "Your financial statements are the scoreboard for your business — and if they're late, incomplete, or wrong, every decision you make is a guess. We prepare accurate, timely profit & loss statements, balance sheets, and cash flow statements for small businesses across Northwest Arkansas and virtually nationwide, delivered on a schedule you can set your watch by.",
          "Whether you need monthly statements to manage the business, quarterly packages for your lender, or a clean year-end set for your tax preparer, we build financials that hold up to scrutiny. Banks, investors, and the IRS all speak the language of financial statements — we make sure yours are saying the right things. And because we review the results with you in plain English, you'll actually understand what the numbers mean, not just receive a PDF.",
        ],
        included: [
          "Profit & loss (income statement) preparation",
          "Balance sheet preparation and reconciliation",
          "Statement of cash flows",
          "Month-end and year-end close support",
          "Bank- and lender-ready financial packages",
          "Plain-English review of results with you",
        ],
        process: [
          {
            title: "Review Your Books",
            description:
              "We assess your current bookkeeping and clean up anything that would distort the statements.",
          },
          {
            title: "Close & Prepare",
            description:
              "Each period, we reconcile accounts, post adjustments, and prepare your full statement package.",
          },
          {
            title: "Deliver & Explain",
            description:
              "You get your statements on schedule, plus a walkthrough of what changed and why it matters.",
          },
        ],
        faqs: [
          {
            question: "How often should my business get financial statements?",
            answer:
              "Most active small businesses benefit from monthly statements — that cadence catches problems early and keeps your books tax-ready year-round. Some clients with simpler operations choose quarterly. We'll recommend a rhythm based on your activity and goals.",
          },
          {
            question: "My bank asked for financial statements. Can you help?",
            answer:
              "Yes. Lender-ready financial packages are one of the most common reasons clients come to us. We prepare statements banks are comfortable with and can work directly with your lender on any follow-up questions.",
          },
          {
            question: "My books are a mess. Can you still prepare statements?",
            answer:
              "Absolutely — that's what our cleanup and catch-up bookkeeping service is for. We get the underlying books accurate first, then produce statements you can trust. Statements built on messy books aren't worth the paper they're printed on.",
          },
          {
            question: "Do you prepare audited or reviewed financial statements?",
            answer:
              "We prepare internal-use and management financial statements. If your situation requires an audit, review, or formal compilation report, we'll help you scope the need and coordinate with a licensed CPA firm that performs attestation work.",
          },
          {
            question: "What software do you use to prepare statements?",
            answer:
              "Primarily QuickBooks Online, though we work with other platforms as well. If you're not on a system yet, we can set one up and migrate your data as part of the engagement.",
          },
          {
            question: "Do you work with businesses outside Northwest Arkansas?",
            answer:
              "Yes — everything we do is cloud-based, so we serve clients across the U.S. virtually with the same turnaround and the same attention as our local NWA clients.",
          },
        ],
      },
      {
        slug: "tax-planning",
        name: "Tax Planning & Strategy",
        metaTitle: "Tax Planning & Strategy in Northwest Arkansas",
        metaDescription:
          "Proactive, year-round tax planning for NWA small businesses. Reduce surprises and keep more of what you earn with TSB Accounting Solutions, Lowell, AR.",
        heroKeyword: "Tax Planning",
        intro: [
          "The biggest tax savings don't happen in April — they happen in the months before, when there's still time to act. Our tax planning and strategy service works year-round to structure your income, expenses, and major decisions so that tax season becomes a formality instead of a fire drill.",
          "We help Northwest Arkansas business owners understand what they'll owe before they owe it, plan estimated payments so there are no ugly surprises, and time decisions — equipment purchases, retirement contributions, entity changes — to their best tax advantage. We work alongside your tax preparer (or can coordinate the relationship for you), making sure the strategy on paper actually shows up on the return. If you've ever been blindsided by a tax bill, this is the service that makes sure it never happens again.",
        ],
        included: [
          "Year-round proactive tax strategy, not just year-end prep",
          "Quarterly estimated tax planning and projections",
          "Entity structure review (LLC, S-corp election, and more)",
          "Timing strategies for major purchases and income",
          "Retirement and benefit contribution planning",
          "Coordination with your tax preparer or CPA",
        ],
        process: [
          {
            title: "Baseline Review",
            description:
              "We review prior returns and current-year books to see where you stand and where money is being left on the table.",
          },
          {
            title: "Build the Plan",
            description:
              "You get a clear, written strategy: what to do, when to do it, and what it's projected to save.",
          },
          {
            title: "Check In & Adjust",
            description:
              "We revisit the plan quarterly as your numbers come in, so the strategy tracks reality — not January's guess.",
          },
        ],
        faqs: [
          {
            question: "What's the difference between tax planning and tax preparation?",
            answer:
              "Tax preparation is filing an accurate return for what already happened. Tax planning is shaping what happens — before year-end — so the return comes out better. Preparation is looking in the rear-view mirror; planning is steering.",
          },
          {
            question: "Do you file my tax return too?",
            answer:
              "Our focus is the planning and strategy side. We coordinate closely with your tax preparer so the plan is executed correctly on the return, and if you don't have a preparer we can connect you with one we trust.",
          },
          {
            question: "When should I start tax planning?",
            answer:
              "Now. The earlier in the year we start, the more options are on the table. Strategies that save real money — S-corp elections, retirement plan setup, purchase timing — often have deadlines months before the filing date.",
          },
          {
            question: "Is an S-corp election right for my LLC?",
            answer:
              "It depends on your profit level, payroll situation, and growth plans. It's one of the most common questions we get, and one of the easiest to get wrong without running the numbers. We'll model it both ways and show you the actual difference.",
          },
          {
            question: "Can you help me with quarterly estimated taxes?",
            answer:
              "Yes. We calculate your estimates from live numbers each quarter, so you pay enough to avoid penalties without giving the IRS an interest-free loan.",
          },
          {
            question: "Do you offer tax planning for remote clients?",
            answer:
              "Yes — tax planning works great virtually. We serve clients across the U.S. with video reviews and secure document sharing, in addition to our Northwest Arkansas clients.",
          },
        ],
      },
      {
        slug: "business-advisory",
        name: "Business Advisory",
        metaTitle: "Business Advisory Services in Northwest Arkansas",
        metaDescription:
          "A financial sounding board for NWA business owners — pricing, hiring, growth, and profitability advice from TSB Accounting Solutions in Lowell, AR.",
        heroKeyword: "Business Advisory",
        intro: [
          "Every owner faces decisions the numbers should inform: Can I afford to hire? Is this job actually profitable? Should I buy or lease? Our business advisory service gives you a financial partner who knows your books, understands your goals, and gives you straight answers — not vague reassurance.",
          "We work with small businesses and founders across Northwest Arkansas as an on-call financial brain. That might mean digging into your margins to find out which service line is quietly losing money, building a simple model for a big purchase, or preparing you for a conversation with your bank. You don't need a full-time CFO to get CFO-level thinking — you need someone in your corner who treats your money like their own. That's the standard we hold ourselves to on every engagement.",
        ],
        included: [
          "Profitability analysis by product, service, or job",
          "Pricing strategy and margin review",
          "Hiring and compensation decision support",
          "Buy-vs-lease and major purchase analysis",
          "Bank, loan, and investor readiness",
          "Regular advisory sessions — your questions, our homework",
        ],
        process: [
          {
            title: "Understand the Business",
            description:
              "We start with your books and your goals, so advice is grounded in your actual numbers — not generic benchmarks.",
          },
          {
            title: "Tackle the Big Questions",
            description:
              "We prioritize the decisions with the most money at stake and work through them together, with clear analysis.",
          },
          {
            title: "Stay in Your Corner",
            description:
              "Ongoing check-ins keep the advice current as your business grows and new questions come up.",
          },
        ],
        faqs: [
          {
            question: "How is business advisory different from a fractional CFO?",
            answer:
              "Advisory is typically session-based: you bring decisions and questions, we bring analysis and recommendations. A fractional CFO engagement is ongoing ownership of your financial strategy — forecasting, reporting, and leadership. Many clients start with advisory and grow into fractional CFO support.",
          },
          {
            question: "What kinds of businesses do you advise?",
            answer:
              "Primarily small businesses and founders in Northwest Arkansas — service businesses, contractors, professional practices, e-commerce, and more — plus virtual clients nationwide. If your questions are about margins, cash, growth, or pricing, we can help.",
          },
          {
            question: "Do I need clean books before starting advisory?",
            answer:
              "It helps, but it's not a requirement to start the conversation. If the books need work first, we'll tell you honestly and can handle the cleanup ourselves so the advice rests on real numbers.",
          },
          {
            question: "How often do we meet?",
            answer:
              "That's up to you — monthly is the most common rhythm, with some clients preferring quarterly deep-dives or ad-hoc sessions around big decisions. We scope it in your free consultation.",
          },
          {
            question: "Can you help me prepare to sell my business someday?",
            answer:
              "Yes. Clean financials and a credible growth story are most of what buyers pay for. The earlier we start preparing, the stronger your position when the time comes.",
          },
          {
            question: "Is advisory available virtually?",
            answer:
              "Completely. Advisory sessions work well over video, and we serve clients across the U.S. alongside our Northwest Arkansas base.",
          },
        ],
      },
    ],
  },
  {
    slug: "fractional-cfo-controller",
    name: "Fractional CFO & Controller",
    shortName: "Fractional CFO & Controller",
    metaTitle: "Fractional CFO & Controller Services in Northwest Arkansas",
    metaDescription:
      "Executive-level financial leadership without the full-time cost. Fractional CFO & controller services for NWA businesses from TSB Accounting Solutions.",
    heroKeyword: "Fractional CFO & Controller",
    cardDescription:
      "Executive-level financial leadership — strategy, forecasting, and oversight — at a fraction of a full-time hire.",
    // Unsplash stock (free license) — swap for real firm photos when available
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=80",
    imageAlt:
      "Financial KPI dashboard and growth charts on a laptop — CFO-level reporting",
    intro: [
      "There's a stage where a growing business needs more than bookkeeping but isn't ready for a six-figure finance hire. That's exactly the gap our fractional CFO and controller services fill: senior financial leadership, on a part-time basis, at a fraction of the cost of a full-time executive.",
      "As your fractional CFO, we own the forward-looking work — budgets, forecasts, cash strategy, and the financial story you tell lenders and investors. As your fractional controller, we own the accuracy side — closing the books, enforcing process, and making sure every report you see is right. Many Northwest Arkansas clients use both together as a complete outsourced finance department. You focus on running the business; we make sure the finance function keeps up.",
    ],
    handle: [
      "Fractional CFO leadership: strategy, forecasting, and cash planning",
      "Fractional controller oversight: accurate books and a reliable close",
      "Annual budgets and rolling forecasts",
      "Financial systems, process, and internal controls setup",
      "Board, lender, and investor reporting",
      "Oversight of your bookkeeper or in-house staff",
    ],
    process: [
      {
        title: "Discovery Call",
        description:
          "We dig into where your finance function is today and where the gaps are — leadership, accuracy, or both.",
      },
      {
        title: "Custom Scope & Quote",
        description:
          "You get a defined monthly engagement — deliverables, meeting cadence, and a flat, predictable fee.",
      },
      {
        title: "Stand Up the Function",
        description:
          "First 90 days: we stabilize the books, build your reporting package, and establish the forecast.",
      },
      {
        title: "Lead & Report",
        description:
          "Ongoing: monthly close, forecast updates, and a standing financial review — like a CFO on staff, without the salary.",
      },
    ],
    why: "A full-time CFO costs well into six figures. Most businesses under $10M in revenue don't need one full-time — they need the right ten hours a month from someone senior. Fractional is how you get executive-level finance before you can justify the executive-level payroll.",
    subServices: [
      {
        name: "Fractional CFO Services",
        slug: "fractional-cfo",
        blurb: "Strategy, forecasting, and financial leadership, part-time.",
      },
      {
        name: "Fractional Controller Services",
        slug: "fractional-controller",
        blurb: "Accurate books, a disciplined close, and real oversight.",
      },
      {
        name: "Budgeting & Forecasting",
        slug: null,
        blurb: "A financial roadmap you'll actually use.",
      },
      {
        name: "Financial Systems & Process Setup",
        slug: null,
        blurb: "The right tools and workflows for a scalable back office.",
      },
    ],
    pages: [
      {
        slug: "fractional-cfo",
        name: "Fractional CFO Services",
        metaTitle: "Fractional CFO Services in Northwest Arkansas",
        metaDescription:
          "Part-time CFO leadership for growing NWA businesses — forecasting, cash strategy, and investor-ready reporting from TSB Accounting Solutions.",
        heroKeyword: "Fractional CFO",
        intro: [
          "A fractional CFO gives your business the financial leadership of a chief financial officer — strategy, forecasting, cash management, and accountability — for a fraction of the cost of a full-time executive. It's the difference between reacting to your numbers and steering by them.",
          "We serve as the senior finance voice in your business: building budgets and rolling forecasts, managing cash so growth doesn't outrun it, preparing lender- and investor-ready reporting, and sitting at the table for your biggest decisions. Engagements are scoped to what your business actually needs — typically a defined set of monthly deliverables plus a standing strategy session. Based in Lowell, we work with growing companies across Northwest Arkansas and, because the work is cloud-based, with clients across the U.S. as well.",
        ],
        included: [
          "Annual budgeting and rolling 12-month forecasts",
          "Cash flow strategy and runway management",
          "Monthly financial review and KPI reporting",
          "Lender, board, and investor reporting packages",
          "Pricing, margin, and growth strategy",
          "Finance leadership for your team and vendors",
        ],
        process: [
          {
            title: "Financial Assessment",
            description:
              "We evaluate your books, cash position, and reporting to establish an honest baseline.",
          },
          {
            title: "Roadmap & Cadence",
            description:
              "We define the deliverables, forecast model, and monthly meeting rhythm for your engagement.",
          },
          {
            title: "Lead the Numbers",
            description:
              "Each month: updated forecast, financial review, and clear recommendations — a CFO's agenda, on your budget.",
          },
        ],
        faqs: [
          {
            question: "What does a fractional CFO actually do?",
            answer:
              "Everything a full-time CFO does — budgeting, forecasting, cash strategy, reporting, and financial leadership — scoped to part-time hours. You get the senior thinking without the senior salary.",
          },
          {
            question: "How is a fractional CFO different from my bookkeeper?",
            answer:
              "Your bookkeeper records what happened. A fractional CFO decides what should happen next: where cash goes, how fast you can grow, what the bank needs to see. The roles complement each other — we often work alongside a client's existing bookkeeper.",
          },
          {
            question: "When is a business ready for a fractional CFO?",
            answer:
              "Common triggers: revenue growing past the point where the owner can track cash in their head, taking on debt or investors, planning a major expansion, or simply wanting a real forecast instead of a gut feeling. If you're asking the question, a discovery call is worth 30 minutes.",
          },
          {
            question: "How many hours per month do I get?",
            answer:
              "Engagements are scoped by deliverables rather than a clock — typically the equivalent of one to three days per month. You'll know exactly what's included before you sign anything.",
          },
          {
            question: "Can you work with our existing accountant or tax preparer?",
            answer:
              "Yes — that's the normal setup. We handle strategy and management reporting, and coordinate with your tax professional so nothing falls between the seats.",
          },
          {
            question: "Do you offer fractional CFO services remotely?",
            answer:
              "Yes. The work is cloud-based by nature, so we serve companies nationwide virtually, alongside our Northwest Arkansas clients whom we can also meet in person.",
          },
        ],
      },
      {
        slug: "fractional-controller",
        name: "Fractional Controller Services",
        metaTitle: "Fractional Controller Services in Northwest Arkansas",
        metaDescription:
          "Part-time controller oversight for NWA businesses — accurate books, disciplined month-end close, and reliable reporting from TSB Accounting Solutions.",
        heroKeyword: "Fractional Controller",
        intro: [
          "If a CFO decides where the business is going, the controller makes sure the map is accurate. Our fractional controller service brings professional oversight to your accounting: books that close on time, reports you can trust, and processes that don't fall apart when someone goes on vacation.",
          "We manage the month-end close, review and correct your bookkeeping, enforce consistent processes for payables, receivables, and payroll, and deliver financial reports that are actually right. If you have an in-house bookkeeper or office manager doing the day-to-day, we supervise and support their work; if you don't, we pair controller oversight with our own bookkeeping team. Northwest Arkansas businesses use this service to get big-company financial discipline at a small-business price — and to sleep better knowing someone is checking the numbers.",
        ],
        included: [
          "Month-end close management and review",
          "Account reconciliations and error correction",
          "Oversight of bookkeeping staff or providers",
          "Accounting process design and documentation",
          "Internal controls to protect cash and prevent fraud",
          "Accurate monthly reporting package delivery",
        ],
        process: [
          {
            title: "Books & Process Review",
            description:
              "We audit the current state of your books and workflows and flag what's putting your numbers at risk.",
          },
          {
            title: "Stabilize the Close",
            description:
              "We fix errors, document processes, and establish a month-end close that finishes on schedule.",
          },
          {
            title: "Ongoing Oversight",
            description:
              "Every month: books reviewed, close completed, reports delivered — with controller-level accountability.",
          },
        ],
        faqs: [
          {
            question: "What's the difference between a controller and a bookkeeper?",
            answer:
              "A bookkeeper records transactions; a controller reviews, corrects, and takes responsibility for the result. The bookkeeper does the work, the controller guarantees it's right. Growing businesses usually need both roles — but neither full-time.",
          },
          {
            question: "Do I need a controller and a CFO?",
            answer:
              "They solve different problems: the controller ensures accuracy, the CFO drives strategy. Some clients need one, many benefit from both together as an outsourced finance department. We'll tell you honestly which gap you actually have.",
          },
          {
            question: "Can you supervise my current bookkeeper?",
            answer:
              "Yes — that's one of the most common arrangements. Your bookkeeper keeps doing the daily work; we review it, coach them, and take ownership of the close and final reports.",
          },
          {
            question: "How long does the month-end close take?",
            answer:
              "Our target for most small businesses is a complete, reviewed close within 10–15 days of month end. If yours currently takes longer — or doesn't really happen at all — that's fixable, and it's usually the first thing we tackle.",
          },
          {
            question: "Can a fractional controller help prevent fraud?",
            answer:
              "It's one of the biggest benefits. Simple internal controls — separation of duties, bank reconciliation review, approval workflows — stop most small-business fraud, and a controller is the person who puts them in place and keeps them working.",
          },
          {
            question: "Is this service available outside Northwest Arkansas?",
            answer:
              "Yes. Controller work is done in your cloud accounting system, so we provide the same oversight to virtual clients nationwide as we do for businesses here in NWA.",
          },
        ],
      },
    ],
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    shortName: "Bookkeeping",
    metaTitle: "Bookkeeping Services in Northwest Arkansas",
    metaDescription:
      "Monthly bookkeeping, cleanup, payroll support, and QuickBooks help for NWA small businesses. TSB Accounting Solutions, Lowell AR — virtual nationwide.",
    heroKeyword: "Bookkeeping",
    cardDescription:
      "Clean, current, tax-ready books every month — done for you, so you can get back to running your business.",
    // Unsplash stock (free license) — swap for real firm photos when available
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=750&q=80",
    imageAlt:
      "Calculator and financial paperwork — monthly bookkeeping and reconciliation",
    intro: [
      "Bookkeeping is the foundation everything else in your business finances sits on — and it's the first thing to slide when you're busy actually running the business. We take it off your plate entirely: transactions categorized, accounts reconciled, and reports delivered every month, accurately and on time.",
      "Whether you need ongoing monthly bookkeeping, a one-time cleanup of books that have gotten away from you, payroll support, help managing payables and receivables, or a proper QuickBooks setup, our team handles it with the care we'd give our own money. We work with small businesses across Lowell, Rogers, Bentonville, Fayetteville, and all of Northwest Arkansas — and because everything runs in the cloud, with clients anywhere in the U.S.",
    ],
    handle: [
      "Monthly transaction categorization and bank reconciliation",
      "Cleanup and catch-up for behind or messy books",
      "Payroll support and coordination",
      "Accounts payable & receivable management",
      "QuickBooks setup, migration, and training",
      "Monthly reports delivered on a reliable schedule",
    ],
    process: [
      {
        title: "Discovery Call",
        description:
          "We look at your current books, volume, and software to understand exactly what you need.",
      },
      {
        title: "Custom Scope & Quote",
        description:
          "You get a flat monthly price for a defined scope — no hourly surprises, no mystery invoices.",
      },
      {
        title: "Cleanup & Setup",
        description:
          "If your books need catching up, we fix that first, so your ongoing service starts from a clean slate.",
      },
      {
        title: "Monthly Rhythm",
        description:
          "Every month: books reconciled, reports delivered, questions answered. It just gets done.",
      },
    ],
    why: "Behind-on-the-books is the most expensive problem in small business — it hides cash problems, inflates tax bills, and turns tax season into a nightmare. A dedicated bookkeeper costs a fraction of what messy books do.",
    subServices: [
      {
        name: "Monthly Bookkeeping",
        slug: "monthly-bookkeeping",
        blurb: "Your books, reconciled and reported every single month.",
      },
      {
        name: "Cleanup & Catch-Up Bookkeeping",
        slug: "cleanup-catch-up",
        blurb: "Months (or years) behind? We'll get you current.",
      },
      {
        name: "Payroll Support",
        slug: null,
        blurb: "Payroll processed, filed, and booked correctly.",
      },
      {
        name: "Accounts Payable & Receivable",
        slug: null,
        blurb: "Bills paid on time, invoices collected faster.",
      },
      {
        name: "QuickBooks Setup & Support",
        slug: null,
        blurb: "Set up right the first time, with training included.",
      },
    ],
    pages: [
      {
        slug: "monthly-bookkeeping",
        name: "Monthly Bookkeeping",
        metaTitle: "Monthly Bookkeeping Services in Northwest Arkansas",
        metaDescription:
          "Flat-rate monthly bookkeeping for NWA small businesses — categorized, reconciled, and reported every month by TSB Accounting Solutions in Lowell, AR.",
        heroKeyword: "Monthly Bookkeeping",
        intro: [
          "Monthly bookkeeping is the service that keeps everything else honest: transactions categorized, bank and credit card accounts reconciled, and a clean set of reports in your inbox every month — without you touching a spreadsheet. It's the single highest-leverage thing a busy owner can take off their plate.",
          "Here's how it works: we connect to your accounts through QuickBooks Online, handle the books on a set monthly schedule, and deliver a report package with your profit & loss, balance sheet, and anything else your business needs. Questions get answered by a real person who knows your books — not a chatbot or a call center. Pricing is a flat monthly rate scoped to your volume, so you always know the cost. Businesses across Northwest Arkansas and around the country trust us to just get it done, month after month.",
        ],
        included: [
          "All transactions categorized accurately",
          "Bank and credit card reconciliations",
          "Monthly profit & loss and balance sheet",
          "Tax-ready books at year end",
          "Flat monthly pricing — no hourly billing",
          "A real person to answer your questions",
        ],
        process: [
          {
            title: "Connect & Setup",
            description:
              "We link your accounts in QuickBooks Online and tailor your chart of accounts to your business.",
          },
          {
            title: "We Do the Books",
            description:
              "Each month we categorize, reconcile, and review — you don't touch a thing.",
          },
          {
            title: "Reports & Review",
            description:
              "Your report package arrives on schedule, with a review call whenever you want one.",
          },
        ],
        faqs: [
          {
            question: "How much does monthly bookkeeping cost?",
            answer:
              "Pricing is a flat monthly rate based on your transaction volume, number of accounts, and complexity — scoped after a free discovery call. Flat means flat: no hourly billing and no surprise invoices.",
          },
          {
            question: "What do I have to do each month?",
            answer:
              "Very little. After setup, most clients spend a few minutes a month answering questions about unusual transactions. We handle everything else.",
          },
          {
            question: "What reports will I get?",
            answer:
              "At minimum, a monthly profit & loss and balance sheet. Depending on your needs we can add cash flow statements, class or location tracking, job profitability, and custom KPI reports.",
          },
          {
            question: "I'm behind on my books. Can I still start monthly service?",
            answer:
              "Yes — we'll scope a one-time cleanup and catch-up project first, then roll you into monthly service once you're current. It's the most common way clients start with us.",
          },
          {
            question: "Do you replace my accountant or tax preparer?",
            answer:
              "No — we make their job easier. Clean monthly books mean faster, cheaper tax preparation, and we coordinate directly with your preparer at year end.",
          },
          {
            question: "Can you do my bookkeeping if I'm not in Arkansas?",
            answer:
              "Absolutely. Our bookkeeping is fully virtual through QuickBooks Online, and we serve clients across the U.S. with the same monthly rhythm as our local NWA clients.",
          },
        ],
      },
      {
        slug: "cleanup-catch-up",
        name: "Cleanup & Catch-Up Bookkeeping",
        metaTitle: "Cleanup & Catch-Up Bookkeeping in Northwest Arkansas",
        metaDescription:
          "Months or years behind on your books? One-time cleanup and catch-up bookkeeping from TSB Accounting Solutions in Lowell, AR. Judgment-free. Free consultation.",
        heroKeyword: "Cleanup & Catch-Up",
        intro: [
          "Months — or years — behind on your books? You're not the only one, and it's more fixable than it feels. Our cleanup and catch-up service takes books that are messy, incomplete, or untouched and brings them fully current: every transaction categorized, every account reconciled, and a clean set of financials at the end.",
          "This is a one-time, flat-fee project, scoped up front after we've looked at what we're dealing with. There's no judgment here — behind-on-the-books usually just means you were busy building a business. Whether you need to file overdue taxes, apply for a loan, or simply want to stop dreading your QuickBooks login, we'll get you to clean. Most clients then roll into monthly bookkeeping so it never piles up again — but that's your call, not a requirement.",
        ],
        included: [
          "Full review and cleanup of existing books",
          "Catch-up on unrecorded months or years",
          "Bank and credit card reconciliations for the full period",
          "Duplicate, miscategorized, and error correction",
          "Clean financial statements when we're done",
          "One-time flat fee — scoped before we start",
        ],
        process: [
          {
            title: "Free Books Review",
            description:
              "We look at your current state — no judgment — and quote a flat fee for the full cleanup.",
          },
          {
            title: "Cleanup & Catch-Up",
            description:
              "We reconcile every account and rebuild the books until every period is accurate and complete.",
          },
          {
            title: "Clean Handoff",
            description:
              "You get current, tax-ready financials — and the option (not obligation) of monthly service to stay clean.",
          },
        ],
        faqs: [
          {
            question: "How far behind can my books be?",
            answer:
              "There's no limit — we've handled everything from a few messy months to multiple years of untouched accounts. More history means a bigger project, but the process is the same and the outcome is the same: clean, current books.",
          },
          {
            question: "How long does a cleanup take?",
            answer:
              "Most cleanups finish in two to six weeks depending on how many months and accounts are involved. We give you a timeline with your quote and keep you posted throughout.",
          },
          {
            question: "How much does cleanup bookkeeping cost?",
            answer:
              "It's a one-time flat fee quoted after a free review of your books — based on the number of months, accounts, and transaction volume. You'll know the full cost before we start.",
          },
          {
            question: "I need to file back taxes. Can you help?",
            answer:
              "Cleanup is exactly what makes overdue filings possible — your preparer needs accurate books to file from. We get the books current and coordinate with your tax preparer so the returns can move quickly.",
          },
          {
            question: "Do I have to sign up for monthly bookkeeping afterward?",
            answer:
              "No. Cleanup is a standalone project. Most clients do continue with monthly service so the pile-up never happens again, but there's no obligation.",
          },
          {
            question: "My 'books' are a shoebox of receipts and bank statements. Is that okay?",
            answer:
              "Completely okay — we can start from bank and credit card statements and build proper books from scratch in QuickBooks. Shoeboxes are welcome here.",
          },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getSubService(categorySlug: string, serviceSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const page = category.pages.find((p) => p.slug === serviceSlug);
  return page ? { category, page } : undefined;
}
