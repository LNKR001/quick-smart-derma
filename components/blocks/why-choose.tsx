import { Check } from "./icons";

const REASONS = [
  {
    title: "Expert Dermatologists",
    body: "Treatments led by experienced, board-certified specialists.",
  },
  {
    title: "Advanced Equipment",
    body: "FDA-approved lasers and devices for safe, effective results.",
  },
  {
    title: "Personalized Care",
    body: "Every plan is mapped to your unique skin and hair type.",
  },
  {
    title: "Safety First",
    body: "Strict clinical protocols with minimal downtime.",
  },
];

/** "Why choose us" feature grid. */
export default function WhyChoose() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-glass backdrop-blur-glass lg:p-12">
        <div className="mb-10 max-w-xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-600">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-primary lg:text-4xl">
            Clinical excellence you can trust
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="flex flex-col gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground shadow-icon-button">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold leading-tight text-primary">{r.title}</h3>
              <p className="text-sm leading-relaxed text-primary/65">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
