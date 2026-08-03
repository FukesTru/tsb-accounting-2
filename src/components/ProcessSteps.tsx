/** Numbered process timeline (01–04 style, per the reference site). */
export default function ProcessSteps({
  steps,
  onDark = false,
}: {
  steps: { title: string; description: string }[];
  onDark?: boolean;
}) {
  return (
    <ol className={`grid gap-8 sm:grid-cols-2 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {steps.map((step, i) => (
        <li key={step.title} className="group" data-aos data-aos-delay={String(i * 130)}>
          <span
            className={`font-display text-5xl font-bold transition-colors duration-500 ${
              onDark
                ? "text-gold-400/40 group-hover:text-gold-400"
                : "text-gold-500/50 group-hover:text-gold-500"
            }`}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={`mt-3 border-t-2 border-gold-500/60 pt-3 font-display text-xl font-semibold transition-colors duration-500 group-hover:border-gold-500 ${
              onDark ? "text-white" : "text-navy-900"
            }`}
          >
            {step.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${onDark ? "text-white/65" : "text-navy-900/70"}`}>
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
