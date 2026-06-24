import { ArrowRight, Phone } from "./icons";
import BookButton from "../booking/book-button";

/** Closing call-to-action band — "Begin Your Transformation". */
export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center shadow-glass-lg lg:px-16">
        {/* Accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent-glow opacity-70 blur-2xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-primary-foreground lg:text-4xl">
            Begin your transformation today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Book a personalized assessment with our dermatologists and discover the
            treatment journey that’s right for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <BookButton className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-icon-button transition hover:brightness-105">
              Book Appointment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </BookButton>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-glass transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              Call the clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
