"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import BookingModal from "./booking-modal";

type BookingContextValue = {
  isOpen: boolean;
  treatment?: string;
  open: (treatment?: string) => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

/** Access the booking modal from any client component. */
export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within <BookingProvider>");
  }
  return ctx;
}

/** Wraps the app, owns the booking modal state, and renders the modal once. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatment, setTreatment] = useState<string | undefined>(undefined);

  const open = useCallback((t?: string) => {
    setTreatment(t);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, treatment, open, close }),
    [isOpen, treatment, open, close],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}
