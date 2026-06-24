"use client";

import { ArrowRight, Phone, Sparkle } from "./icons";
import Placeholder from "./placeholder";
import { useBooking } from "../booking/booking-context";

type HeroProps = {
  /** Portrait of the head dermatologist. Falls back to a styled placeholder. */
  doctorImage?: string;
  doctorName?: string;
};

/**
 * Hero block — premium Skin · Hair · Laser clinic positioning.
 *  - Left: pill badge + bold stacked headline + dual CTAs
 *  - Center: arched portrait frame with floating credential cards
 *  - Right: "Smart Skin Layer Analysis" glowing 3D-style visual
 */
export default function Hero({ doctorImage, doctorName = "Head Dermatologist" }: HeroProps) {
  const { open } = useBooking();
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
      {/* ── Left column ───────────────────────────────────────────── */}
      <div className="lg:col-span-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-primary shadow-glass backdrop-blur-glass">
          <Sparkle className="h-4 w-4 text-accent-500" />
          Premium Skin · Hair · Laser Clinic
        </span>

        <h1 className="mt-6 font-black leading-[0.95] tracking-tight text-primary">
          <span className="block text-5xl lg:text-6xl">QUICK</span>
          <span className="block text-5xl lg:text-6xl">SMART</span>
          <span className="block text-5xl lg:text-6xl">DERMA</span>
        </h1>

        <p className="mt-6 max-w-sm text-base leading-relaxed text-primary/70">
          Advanced skin, hair and laser care led by expert dermatologists —
          personalized clinical journeys that reveal your most confident self.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#treatments"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glass transition hover:bg-primary-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            Explore Treatments
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/80 px-6 py-3.5 text-base font-semibold text-primary shadow-glass backdrop-blur-glass transition hover:bg-white"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground">
              <Phone className="h-3.5 w-3.5" />
            </span>
            Book Appointment
          </button>
        </div>
      </div>

      {/* ── Center column: arched portrait ───────────────────────── */}
      <div className="relative flex justify-center lg:col-span-4">
        {/* Gradient frame acts as the arched "border mask" */}
        <div className="relative w-72 rounded-t-full rounded-b-3xl bg-gradient-to-b from-accent/70 via-primary/30 to-primary p-[6px] shadow-glass-lg">
          {/*
            Arched frame: rounded-t-full gives a clean semicircular arch.
            For a pixel-exact arch you can swap to a clip-path arbitrary value, e.g.
            className="... [clip-path:ellipse(50%_60%_at_50%_60%)]"
          */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-3xl bg-background-icy">
            {doctorImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={doctorImage}
                alt={`Portrait of ${doctorName}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <Placeholder
                label="Dermatologist portrait"
                rounded="rounded-t-full rounded-b-3xl"
                className="h-full w-full"
              />
            )}
          </div>
        </div>

        {/* Floating credential card */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 text-center shadow-glass-lg backdrop-blur-glass">
          <div className="text-2xl font-black leading-none text-primary">22+</div>
          <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-primary/60">
            Years of Clinical Excellence
          </div>
        </div>

        {/* Floating awards card */}
        <div className="absolute -right-2 top-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 text-center shadow-glass-lg backdrop-blur-glass">
          <div className="text-xl font-black leading-none text-primary">490</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-accent-600">
            Awards
          </div>
        </div>
      </div>

      {/* ── Right column: Smart Skin Layer Analysis visual ───────── */}
      <div className="relative lg:col-span-4">
        <SmartSkinScan />

        {/* Floating healed-count card */}
        <div className="absolute -right-1 bottom-6 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 text-center shadow-glass-lg backdrop-blur-glass">
          <div className="text-xl font-black leading-none text-primary">6700</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-accent-600">
            Treatments Done
          </div>
        </div>
      </div>
    </section>
  );
}

/** Abstract glowing "3D" visual standing in for a cellular-level scan. */
function SmartSkinScan() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* Accent halo */}
      <div className="absolute inset-0 rounded-full bg-accent-glow blur-2xl" />

      {/* Concentric scan rings */}
      <div className="absolute inset-6 animate-pulse rounded-full border border-accent/40" />
      <div className="absolute inset-12 rounded-full border border-primary/20" />
      <div className="absolute inset-20 rounded-full border border-accent/30" />

      {/* Layered glass core */}
      <div className="absolute inset-16 flex flex-col items-center justify-center gap-3 rounded-full border border-white/60 bg-white/70 text-center shadow-glass-lg backdrop-blur-wrapper">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-icon-button">
          <span className="text-lg font-bold">↗</span>
        </span>
        <div className="px-6">
          <div className="text-sm font-bold uppercase tracking-wide text-primary">
            Smart Skin Layer Analysis
          </div>
          <div className="mt-1 text-[11px] font-medium text-primary/60">
            Cellular-level scan · Mole mapping
          </div>
        </div>
      </div>
    </div>
  );
}
