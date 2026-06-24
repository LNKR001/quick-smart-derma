import type { SVGProps } from "react";

/**
 * Lightweight inline icon set so the blocks have zero external deps.
 * Stroke uses currentColor — drive color with Tailwind text-* utilities.
 */

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.5} aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c.4 3.9 2.1 5.6 6 6-3.9.4-5.6 2.1-6 6-.4-3.9-2.1-5.6-6-6 3.9-.4 5.6-2.1 6-6Z" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function ScanLayers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden="true" {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="M3 18l9 5 9-5" opacity={0.5} />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.5} aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95L12 2.5Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

/* ── Treatment-category icons ─────────────────────────────────────── */

export function Droplet(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10Z" />
    </svg>
  );
}

export function Scissors(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}

export function Zap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

export function Syringe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="m18 2 4 4M17 7 7 17l-4 1 1-4L14 4l3 3ZM9 11l2 2M13 7l2 2" />
    </svg>
  );
}

export function Activity(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <path d="M3 12h4l3 8 4-16 3 8h4" />
    </svg>
  );
}

export function Smile(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  );
}
