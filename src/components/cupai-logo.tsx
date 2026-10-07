/**
 * Cupai brand logo — hand-drawn inline SVG (not an image file).
 * Concept: a warm cup whose steam rises into an AI spark,
 * expressing "Cupai" = a cup of smart assistance for your store.
 */
export function CupaiMark({ className = "h-8 w-8", light = false }: { className?: string; light?: boolean }) {
  const gid = light ? "cupai-g-light" : "cupai-g";
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="8" y1="6" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          {light ? (
            <>
              <stop offset="0" stopColor="hsl(var(--primary-foreground))" />
              <stop offset="1" stopColor="hsl(var(--primary-foreground) / 0.55)" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--primary) / 0.55)" />
            </>
          )}
        </linearGradient>
      </defs>
      {/* AI spark rising from the cup */}
      <path
        d="M24 3.5c.7 3.6 2.6 5.5 6.2 6.2-3.6.7-5.5 2.6-6.2 6.2-.7-3.6-2.6-5.5-6.2-6.2 3.6-.7 5.5-2.6 6.2-6.2Z"
        fill={`url(#${gid})`}
      />
      <circle cx="33.5" cy="13" r="1.6" fill={`url(#${gid})`} opacity="0.8" />
      {/* cup body */}
      <path
        d="M11 20h22v9.5A11.5 11.5 0 0 1 21.5 41h-1A11.5 11.5 0 0 1 11 29.5V20Z"
        fill={`url(#${gid})`}
      />
      {/* handle */}
      <path
        d="M33 22.5h2.4a5.1 5.1 0 0 1 0 10.2H33"
        stroke={`url(#${gid})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* saucer */}
      <path
        d="M9 44.5h26"
        stroke={`url(#${gid})`}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* inner highlight — the "smile" of the cup */}
      <path
        d="M16.5 24.5c1.2 4.5 3.8 7.4 7.5 8.4"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function CupaiLogo({
  markClassName = "h-7 w-7",
  textClassName = "text-base font-extrabold tracking-tight",
  className = "",
  light = false,
}: {
  markClassName?: string;
  textClassName?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <CupaiMark className={markClassName} light={light} />
      <span className={textClassName}>
        Cupai
      </span>
    </span>
  );
}
