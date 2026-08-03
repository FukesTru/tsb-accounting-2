import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Dark hero used on all inner pages: breadcrumbs, H1 with a gold accent
 * underline on the keyword, subtitle, and the two uniform CTAs.
 */
export default function PageHero({
  crumbs,
  titlePre = "",
  keyword,
  titlePost = "",
  subtitle,
  showCtas = true,
}: {
  crumbs: Crumb[];
  titlePre?: string;
  keyword: string;
  titlePost?: string;
  subtitle: string;
  showCtas?: boolean;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-900 pb-20 pt-36">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <h1
          className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
          data-aos
        >
          {titlePre && <>{titlePre} </>}
          <span className="accent-underline">{keyword}</span>
          {titlePost && <> {titlePost}</>}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75" data-aos data-aos-delay="120">
          {subtitle}
        </p>
        {showCtas && (
          <div className="mt-9 flex flex-wrap gap-4" data-aos data-aos-delay="240">
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
            <a href={site.phoneHref} className="btn-outline-light">
              Call {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/** Subtle ledger-grid + gold glow backdrop shared by all dark heroes. */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-600/10 blur-3xl" />
    </div>
  );
}
