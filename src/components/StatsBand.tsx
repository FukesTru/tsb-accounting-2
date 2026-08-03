import CountUp from "./CountUp";

/** Dark band of animated count-up stats, used on home/about/service pages. */
export default function StatsBand() {
  const stats = [
    { end: 20, suffix: "+", decimals: 0, label: "Years of Experience" },
    { end: 4, suffix: "+", decimals: 0, label: "Years in Business" },
    { end: 3, suffix: "", decimals: 0, label: "Full Service Lines" },
    { end: 100, suffix: "%", decimals: 0, label: "Cloud-Based & Virtual-Ready" },
  ];
  return (
    <section className="on-dark relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center" data-aos data-aos-delay={String(i * 100)}>
            <span className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
              <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
