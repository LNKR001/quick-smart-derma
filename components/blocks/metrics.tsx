/**
 * Trust ribbon — large bold metrics with fine slate labels beneath.
 * Sits at the base of the page as a single integrated band.
 */

type Metric = { value: string; label: string };

const METRICS: Metric[] = [
  { value: "$250M", label: "In Advanced Equipment" },
  { value: "20M+", label: "Satisfied Patients" },
  { value: "95%", label: "Skin Recovery Success Rate" },
  { value: "200+", label: "Medical Specialists" },
];

export default function Metrics() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-glass backdrop-blur-glass sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`px-8 py-10 text-center ${
              i !== 0 ? "lg:border-l lg:border-white/60" : ""
            }`}
          >
            <div className="text-4xl font-black tracking-tight text-primary lg:text-5xl">
              {m.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-500">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
