import { site } from "@/lib/site";

/** Floating "Call Now" button — mobile only, every page. */
export default function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      className="pulse-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-xl shadow-black/30 transition-transform active:scale-95 lg:hidden"
      aria-label={`Call TSB Accounting Solutions now at ${site.phone}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
      </svg>
      Call Now
    </a>
  );
}
