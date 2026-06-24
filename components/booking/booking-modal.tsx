"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./booking-context";
import { Check, Phone } from "../blocks/icons";

const TREATMENTS = [
  "Skin Treatments",
  "Hair Treatments",
  "Laser Treatments",
  "Injectables",
  "Body Contouring",
  "Face & Neck",
  "Laser Hair Reduction",
  "HydraFacial Elite",
  "Glass Glow Facial",
  "Botox",
  "Dermal Fillers",
  "PRP Hair Treatment",
  "General Consultation",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingModal() {
  const { isOpen, close, treatment } = useBooking();
  const [status, setStatus] = useState<Status>("idle");

  // Lock body scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    setStatus("idle");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 cursor-default bg-primary-900/40 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-white shadow-glass-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-app-shell px-6 py-5">
          <div>
            <h2 className="text-xl font-black tracking-tight text-primary">
              Book an Appointment
            </h2>
            <p className="mt-0.5 text-sm text-primary/60">
              We&apos;ll confirm your slot within one business day.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/60 bg-white/70 text-primary transition hover:bg-white"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-icon-button">
              <Check className="h-7 w-7" />
            </span>
            <h3 className="text-lg font-bold text-primary">Request received!</h3>
            <p className="max-w-sm text-sm text-primary/65">
              Thank you — our team will reach out shortly to confirm your
              appointment. For urgent queries, call us anytime.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-600"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <Field label="Full name" htmlFor="name">
              <input id="name" name="name" required placeholder="Your name" className={inputClass} />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone" htmlFor="phone">
                <input id="phone" name="phone" type="tel" required placeholder="+91 …" className={inputClass} />
              </Field>
              <Field label="Email" htmlFor="email">
                <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Treatment" htmlFor="treatment">
                <select id="treatment" name="treatment" defaultValue={treatment ?? ""} className={inputClass}>
                  <option value="" disabled>
                    Select…
                  </option>
                  {TREATMENTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date" htmlFor="date">
                <input id="date" name="date" type="date" className={inputClass} />
              </Field>
            </div>

            <Field label="Message (optional)" htmlFor="message">
              <textarea id="message" name="message" rows={3} placeholder="Anything we should know?" className={inputClass} />
            </Field>

            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                Something went wrong. Please try again or call us.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-icon-button transition hover:brightness-105 disabled:opacity-60"
            >
              <Phone className="h-4 w-4" />
              {status === "submitting" ? "Sending…" : "Request Appointment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-primary-100 bg-background-icy px-4 py-2.5 text-sm text-primary outline-none transition focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/30";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primary/60">
        {label}
      </span>
      {children}
    </label>
  );
}
