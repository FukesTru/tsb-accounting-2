import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

/**
 * Accessible FAQ accordion (native <details>/<summary> — no JS needed)
 * with FAQPage JSON-LD and the reference-style "Still have questions?" card.
 */
export default function Faq({
  items,
  onDark = false,
  showCallCard = true,
}: {
  items: FaqItem[];
  onDark?: boolean;
  showCallCard?: boolean;
}) {
  const border = onDark ? "border-white/10" : "border-navy-900/10";
  const question = onDark ? "text-white" : "text-navy-900";
  const answer = onDark ? "text-white/70" : "text-navy-900/70";

  return (
    <div>
      <JsonLd data={faqSchema(items)} />
      <div className={`divide-y ${onDark ? "divide-white/10" : "divide-navy-900/10"} rounded-lg border ${border}`}>
        {items.map((item) => (
          <details key={item.question} className="group px-6 py-5">
            <summary
              className={`flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-semibold ${question} [&::-webkit-details-marker]:hidden`}
            >
              {item.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className={`mt-3 text-sm leading-relaxed ${answer}`}>{item.answer}</p>
          </details>
        ))}
      </div>

      {showCallCard && (
        <div
          className={`mt-8 flex flex-col items-center justify-between gap-4 rounded-lg p-6 sm:flex-row ${
            onDark ? "bg-white/5" : "bg-cream-50 border border-navy-900/10"
          }`}
          data-aos
        >
          <div>
            <p className={`font-display text-lg font-semibold ${question}`}>
              Still have questions?
            </p>
            <p className={`text-sm ${answer}`}>
              Call us — a real person answers, and the consultation is free.
            </p>
          </div>
          <a href={site.phoneHref} className="btn-primary shrink-0">
            {site.phone}
          </a>
        </div>
      )}
    </div>
  );
}
