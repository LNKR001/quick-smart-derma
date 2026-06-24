import { Sparkle, MapPin, Phone, Mail, Clock } from "./icons";

const TREATMENT_LINKS = [
  "Laser Hair Reduction",
  "HydraFacial Elite",
  "Botox & Fillers",
  "PRP Hair Treatment",
  "Chemical Peels",
];

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#testimonials" },
  { label: "Gallery", href: "#" },
];

/** Site footer with clinic info, links and contact placeholders. */
export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-6 pb-10 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/60 bg-white/80 p-8 shadow-glass backdrop-blur-glass lg:p-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Sparkle className="h-4 w-4 text-accent" />
              </span>
              <span className="text-lg font-black tracking-tight text-primary">
                Quick Smart Derma
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary/65">
              Premium skin, hair &amp; laser clinic delivering personalized,
              evidence-based dermatology care.
            </p>
          </div>

          {/* Quick links */}
          <nav>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-primary/65 transition hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treatments */}
          <nav>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2.5">
              {TREATMENT_LINKS.map((t) => (
                <li key={t}>
                  <a
                    href="#treatments"
                    className="text-sm text-primary/65 transition hover:text-primary"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact (placeholder details) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                <span>[ Clinic address — placeholder ]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent-600" />
                <a href="tel:+910000000000" className="hover:text-primary">
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent-600" />
                <a href="mailto:hello@example.com" className="hover:text-primary">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent-600" />
                <span>Mon–Sat · 10:00–20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/60 pt-6 text-center text-xs text-primary/50">
          © {new Date().getFullYear()} Quick Smart Derma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
