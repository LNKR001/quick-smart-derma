"use client";

import type { ReactNode } from "react";
import { useBooking } from "./booking-context";

/**
 * Button that opens the booking modal, optionally pre-selecting a treatment.
 * Use anywhere a "Book Appointment" / "Book consultation" action is needed.
 */
export default function BookButton({
  children,
  treatment,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  treatment?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => open(treatment)}
      className={className}
    >
      {children}
    </button>
  );
}
