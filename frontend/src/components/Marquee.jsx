import { useLang } from "../i18n";

const Row = ({ items, reverse, outline }) => (
  <div className={`marquee-track flex w-max items-center gap-10 pr-10 ${reverse ? "marquee-reverse" : ""}`}>
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-10 whitespace-nowrap">
        <span
          className={`font-syne font-extrabold tracking-[0.25em] ${
            outline ? "text-outline text-xl sm:text-3xl" : "text-sm sm:text-base text-purple-200/70"
          }`}
        >
          {item}
        </span>
        <span className={`rotate-45 ${outline ? "h-2 w-2 bg-purple-500/40" : "h-1.5 w-1.5 bg-pink-500/80 shadow-[0_0_10px_rgba(236,72,153,0.8)]"}`} />
      </span>
    ))}
  </div>
);

export const Marquee = () => {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-purple-500/15 bg-[#0d0916]/80 py-5 space-y-3"
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
    >
      <Row items={items} />
      <Row items={items} reverse outline />
    </div>
  );
};
