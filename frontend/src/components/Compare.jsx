import { motion } from "framer-motion";
import { Check, Minus, Crown } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const Cell = ({ ok, gold }) =>
  ok ? (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${gold ? "bg-amber-500/20 text-amber-400" : "bg-purple-600/20 text-purple-300"}`}>
      <Check size={14} strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-slate-600">
      <Minus size={14} />
    </span>
  );

export const Compare = ({ onDownload }) => {
  const { t } = useLang();
  const c = t.compare;
  return (
    <section id="compare" data-testid="compare-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={c.eyebrow} title={c.title} align="center" className="mb-14" accent="text-amber-400/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-purple-500/15 bg-[#160F24]/70 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-y-0 right-0 w-[28%] sm:w-[22%] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-purple-600/10 pointer-events-none" />
          <div className="relative grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_140px_140px] items-end px-5 sm:px-8 pt-8 pb-5 border-b border-purple-500/15">
            <span />
            <div className="text-center">
              <p className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">{c.free}</p>
              <p className="hidden sm:block text-xs text-slate-400 mt-1">{c.freePrice}</p>
            </div>
            <div className="text-center">
              <p className="inline-flex items-center gap-1 text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase">
                <Crown size={11} /> {c.premium}
              </p>
              <p className="hidden sm:block text-xs text-amber-200/80 mt-1">{c.price}</p>
            </div>
          </div>
          {c.rows.map((row, i) => (
            <div
              key={i}
              data-testid={`compare-row-${i}`}
              className="relative grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_140px_140px] items-center px-5 sm:px-8 py-4 border-b border-purple-500/10 last:border-0 text-sm text-slate-300 hover:bg-white/[0.02] transition-colors"
            >
              <span className="pr-3">{row.label}</span>
              <span className="flex justify-center"><Cell ok={row.free} /></span>
              <span className="flex justify-center"><Cell ok={row.premium} gold /></span>
            </div>
          ))}
          <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_140px_140px] gap-3 px-5 sm:px-8 py-6 bg-black/20">
            <span className="hidden sm:block" />
            <button
              data-testid="compare-free-cta"
              onClick={onDownload}
              className="rounded-full border border-purple-500/40 bg-purple-600/15 px-4 py-2.5 text-xs font-semibold text-purple-200 hover:bg-purple-600/30 transition-colors"
            >
              {c.ctaFree}
            </button>
            <span
              data-testid="compare-premium-cta"
              className="rounded-full bg-gradient-to-r from-amber-500 to-purple-600 px-4 py-2.5 text-xs font-bold text-white text-center shadow-lg shadow-amber-900/30"
            >
              {c.ctaPremium}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
