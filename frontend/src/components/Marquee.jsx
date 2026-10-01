import { useLang } from "../i18n";

export const Marquee = () => {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-purple-500/15 bg-[#0d0916]/80 py-5"
    >
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-syne text-sm sm:text-base font-bold tracking-[0.3em] text-purple-200/60">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-pink-500/70" />
          </span>
        ))}
      </div>
    </div>
  );
};
