"use client";

import type { ReactNode } from "react";
import { ArrowUpRight, Droplet, Scissors, Zap, Syringe, Activity, Smile } from "./icons";
import { useBooking } from "../booking/booking-context";

type Category = {
  title: string;
  blurb: string;
  treatments: string[];
  icon: ReactNode;
  featured?: boolean;
};

/** Treatment categories mirrored from the reference clinic. */
const CATEGORIES: Category[] = [
  {
    title: "Skin Treatments",
    blurb: "Clinical facials, peels and glow rituals for radiant, healthy skin.",
    treatments: ["HydraFacial Elite", "Glass Glow Facial", "Chemical Peels", "ZO Obagi", "Skin Tag Removal"],
    icon: <Droplet className="h-6 w-6" />,
  },
  {
    title: "Hair Treatments",
    blurb: "Regenerative therapies to restore density and stop hair fall.",
    treatments: ["PRP Hair Treatment", "GFC Hair Treatment", "Keravive Scalp", "Hair Growth Injections"],
    icon: <Scissors className="h-6 w-6" />,
  },
  {
    title: "Laser Treatments",
    blurb: "Precision laser for reduction, toning and skin resurfacing.",
    treatments: ["Laser Hair Reduction", "Laser Toning", "Pigmentation Treatment", "Fotona"],
    icon: <Zap className="h-6 w-6" />,
    featured: true,
  },
  {
    title: "Injectables",
    blurb: "Master-injector anti-aging with natural, balanced results.",
    treatments: ["Botox", "Dermal Fillers", "Skin Booster", "Bio-Stimulators", "PDRN"],
    icon: <Syringe className="h-6 w-6" />,
  },
  {
    title: "Body Contouring",
    blurb: "Non-invasive sculpting and tightening with zero downtime.",
    treatments: ["CM Slim Sculpting", "Ultraformer Lift", "Body Chemical Peel", "IV Drip Therapy"],
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "Face & Neck",
    blurb: "Targeted lifting and rejuvenation for face, neck and under-eyes.",
    treatments: ["Sylfirm X", "Under-Eye Rejuvenation", "Micro-Botox", "Skin Tightening"],
    icon: <Smile className="h-6 w-6" />,
  },
];

/** Treatment categories — translucent glass cards with neon arrow badges. */
export default function Services() {
  return (
    <section id="treatments" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
      <div className="mb-10 max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-widest text-accent-600">
          Our Treatments
        </span>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-primary lg:text-4xl">
          Comprehensive skin, hair &amp; laser care
        </h2>
        <p className="mt-3 text-base leading-relaxed text-primary/65">
          Every treatment is tailored to your unique skin and hair type through a
          personalized clinical consultation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ title, blurb, treatments, icon, featured }: Category) {
  const { open } = useBooking();
  return (
    <article
      className={`group relative rounded-3xl border p-6 shadow-glass backdrop-blur-md transition hover:shadow-glass-lg ${
        featured
          ? "border-primary-400/40 bg-card-feature text-white"
          : "border-white/60 bg-white/90"
      }`}
    >
      {/* Floating neon circular badge — upper right */}
      <button
        type="button"
        aria-label={`Book ${title}`}
        onClick={() => open(title)}
        className="absolute -right-3 -top-3 grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground shadow-icon-button transition group-hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
      >
        <ArrowUpRight className="h-5 w-5" />
      </button>

      <div
        className={`grid h-12 w-12 place-items-center rounded-2xl ring-1 ${
          featured ? "bg-white/15 text-white ring-white/20" : "bg-background-icy text-primary ring-white/70"
        }`}
      >
        {icon}
      </div>

      <h3 className={`mt-4 text-lg font-bold leading-tight ${featured ? "text-white" : "text-primary"}`}>
        {title}
      </h3>
      <p className={`mt-1.5 text-sm leading-relaxed ${featured ? "text-white/75" : "text-primary/65"}`}>
        {blurb}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {treatments.map((t) => (
          <li
            key={t}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              featured ? "bg-white/15 text-white/90" : "bg-background-icy text-primary/80"
            }`}
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
