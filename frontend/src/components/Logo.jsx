export const VeloraMark = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" data-testid="velora-logo-mark" aria-hidden="true">
    <defs>
      <linearGradient id="vlg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7C3AED" />
        <stop offset="0.55" stopColor="#6D28D9" />
        <stop offset="1" stopColor="#2E1065" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#vlg)" />
    <path d="M40 12c6 4 10 11 10 19s-4 15-10 19" fill="none" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <path d="M44 16c4.5 3.5 7 8.8 7 15s-2.5 11.5-7 15" fill="none" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    <path d="M14 16 L32 50 L50 16" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Wordmark = ({ className = "" }) => (
  <span className={`font-syne font-extrabold tracking-[0.22em] text-white ${className}`} data-testid="velora-wordmark">
    VELORA
  </span>
);
