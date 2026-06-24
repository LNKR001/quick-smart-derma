import { Star } from "./icons";

const REVIEWS = [
  {
    quote:
      "The team mapped out a clear plan for my skin and the results speak for themselves. Truly a confidence-revealing experience.",
    name: "Patient Name",
    detail: "HydraFacial Elite",
  },
  {
    quote:
      "Painless laser sessions and genuinely caring dermatologists. My hair fall has reduced dramatically.",
    name: "Patient Name",
    detail: "PRP Hair Treatment",
  },
  {
    quote:
      "Natural, balanced results from their master injectors. I felt informed and safe at every step.",
    name: "Patient Name",
    detail: "Botox & Fillers",
  },
];

/** Testimonials — glass cards with star ratings and avatar placeholders. */
export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
      <div className="mb-10 max-w-xl">
        <span className="text-sm font-bold uppercase tracking-widest text-accent-600">
          Results &amp; Reviews
        </span>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-primary lg:text-4xl">
          Trusted by hundreds of patients
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <figure
            key={i}
            className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/90 p-6 shadow-glass backdrop-blur-md"
          >
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary/75">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              {/* Avatar placeholder */}
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-background-icy to-white ring-1 ring-white/70" />
              <span>
                <span className="block text-sm font-bold text-primary">{r.name}</span>
                <span className="block text-xs font-medium text-primary/50">{r.detail}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
