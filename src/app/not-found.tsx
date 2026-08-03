import Link from "next/link";
import { HeroBackdrop } from "@/components/PageHero";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="on-dark relative flex min-h-screen items-center overflow-hidden bg-navy-900">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          This page doesn&apos;t <span className="accent-italic">balance</span>
        </h1>
        <p className="mt-5 text-white/70">
          The page you&apos;re looking for has moved or never existed. Let&apos;s
          get you back to the books.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={site.phoneHref} className="btn-outline-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
