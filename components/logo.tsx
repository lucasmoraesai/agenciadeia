type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

/** Open ring — presence of absence, no slash. */
export function LogoMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle
        cx="16"
        cy="16"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="52 10"
        strokeLinecap="round"
        transform="rotate(-40 16 16)"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-5 w-5",
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="text-sm font-medium tracking-[-0.02em]">nohumans</span>
      )}
    </span>
  );
}
