import { ArrowUpRight } from "./icons";
import Placeholder from "./placeholder";
import BookButton from "../booking/book-button";

/** Signature treatments featured on the homepage of the reference clinic. */
const TREATMENTS = [
  "Laser Hair Reduction",
  "HydraFacial Elite",
  "Glass Glow Facial",
  "Botox",
  "Dermal Fillers",
  "Skin Booster",
  "PRP Hair Treatment",
  "Chemical Peel",
  "Sylfirm X",
  "Ultraformer Lift",
  "CM Slim Sculpting",
  "IV Drip Therapy",
];

/** "Most Popular Treatments" — image-led card grid (placeholders for now). */
export default function PopularTreatments() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-600">
            Signature
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-primary lg:text-4xl">
            Most popular treatments
          </h2>
        </div>
        <a
          href="#treatments"
          className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-5 py-2.5 text-sm font-semibold text-primary shadow-glass backdrop-blur-glass transition hover:bg-white"
        >
          View all treatments
          <ArrowUpRight className="h-4 w-4 text-accent-600" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TREATMENTS.map((name) => (
          <article
            key={name}
            className="group overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-glass backdrop-blur-md transition hover:shadow-glass-lg"
          >
            <div className="relative">
              <Placeholder
                label={name}
                rounded="rounded-none"
                className="aspect-[4/3] w-full"
              />
              {/* Neon circular arrow badge */}
              <BookButton
                treatment={name}
                ariaLabel={`Book ${name}`}
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shadow-icon-button transition group-hover:scale-105"
              >
                <ArrowUpRight className="h-5 w-5" />
              </BookButton>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold leading-tight text-primary">{name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary/50">
                Book consultation
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
