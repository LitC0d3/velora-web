export const VeloraMark = ({ size = 36 }) => (
  <img
    src={`${process.env.PUBLIC_URL}/velora-logo.png`}
    width={size}
    height={size}
    alt="Velora"
    data-testid="velora-logo-mark"
    className="rounded-[22%] shadow-[0_0_18px_-4px_rgba(139,92,246,0.7)]"
    style={{ width: size, height: size }}
  />
);

export const Wordmark = ({ className = "" }) => (
  <span className={`font-syne font-extrabold tracking-[0.22em] text-white ${className}`} data-testid="velora-wordmark">
    VELORA
  </span>
);
