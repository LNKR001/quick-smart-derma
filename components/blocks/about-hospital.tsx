"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "./icons";
import Placeholder from "./placeholder";

type AboutHospitalProps = {
  /** Architectural photo of the facility. Falls back to a styled placeholder. */
  facilityImage?: string;
  establishedYear?: string;
  phone?: string;
};

/**
 * Split block — facility photo on the left, clinic story + CTAs on the right.
 */
export default function AboutHospital({
  facilityImage,
  establishedYear = "Est. 2012",
  phone = "+91 90000 00000",
}: AboutHospitalProps) {
  return (
    <motion.section
      id="about"
      className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-10 px-6 py-16 lg:grid-cols-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* ── Left: facility photo card ────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-glass-lg">
        <div className="aspect-[4/3] w-full">
          {facilityImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={facilityImage}
              alt="Our dermatology facility"
              className="h-full w-full object-cover"
            />
          ) : (
            <Placeholder
              label="Clinic facility photo"
              rounded="rounded-none"
              className="h-full w-full"
            />
          )}
        </div>

        {/* Floating glassmorphism milestone pill */}
        <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/80 px-4 py-1.5 text-sm font-semibold text-primary shadow-glass backdrop-blur-glass">
          {establishedYear}
        </span>
      </div>

      {/* ── Right: about content ─────────────────────────────────── */}
      <div>
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          About Our Clinic
        </span>

        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-primary lg:text-4xl">
          YOUR PREMIER
          <br />
          DERMATOLOGY NETWORK
        </h2>

        <p className="mt-5 max-w-md text-base leading-relaxed text-primary/70">
          From advanced laser suites to AI-assisted diagnostics, our network
          unites leading specialists and modern facilities to deliver measurable
          skin-health outcomes — with care that scales across every location.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#why-us"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-glass transition hover:bg-primary-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            Learn More
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/80 px-6 py-3 text-base font-semibold text-primary shadow-glass backdrop-blur-glass transition hover:bg-white"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground">
              <Phone className="h-3.5 w-3.5" />
            </span>
            {phone}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
