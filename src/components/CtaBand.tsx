import Link from "next/link";
import { site } from "@/lib/site";

/** Full-width gold/navy CTA band used across the site. */
export default function CtaBand({
  heading = "Ready to become our next happy client?",
  text = "Book a free consultation — we'll look at where your books stand and map the fastest path to clean, useful numbers.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8" data-aos>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Free Consultation
          </Link>
          <a href={site.phoneHref} className="btn-outline-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
