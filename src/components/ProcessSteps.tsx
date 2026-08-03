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
        <li key={step.title} data-aos data-aos-delay={String(i * 120)}>
          <span
            className={`font-display text-5xl font-bold ${
              onDark ? "text-gold-400/40" : "text-gold-500/50"
            }`}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={`mt-3 border-t-2 border-gold-500 pt-3 font-display text-xl font-semibold ${
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
