"use client";

import { Menu, Phone, Sparkle } from "./icons";
import { useBooking } from "../booking/booking-context";

const NAV = [
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/** Top navigation bar (glass pill), sits at the top of the page card. */
export default function Header() {
  const { open } = useBooking();
  return (
    <header className="relative z-30">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-glass backdrop-blur-glass md:px-7">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sparkle className="h-4 w-4 text-accent" />
          </span>
          <span className="text-lg font-black tracking-tight text-primary">
            Quick Smart Derma
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-primary/70 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => open()}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-icon-button transition hover:brightness-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book Appointment
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/70 text-primary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
