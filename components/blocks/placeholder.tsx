/**
 * Image placeholder — used everywhere a real photo will be dropped in later.
 * No external images are fetched; this renders a styled, labeled panel.
 */
export default function Placeholder({
  label = "Image placeholder",
  className = "",
  rounded = "rounded-3xl",
}: {
  label?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-background-icy to-white ${rounded} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-primary/35">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-4.5-4.5L5 21" />
        </svg>
        <span className="text-[11px] font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
