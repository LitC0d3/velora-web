import { motion } from "framer-motion";
import { Check, Lock, Crown, Sparkles } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const Cell = ({ ok, gold }) =>
  ok ? (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
        gold ? "bg-amber-400 text-[#1a1206] shadow-[0_0_18px_rgba(245,158,11,0.7)]" : "bg-purple-600/25 text-purple-200 border border-purple-500/30"
      }`}
    >
      <Check size={14} strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 text-slate-600">
      <Lock size={12} />
    </span>
  );

export const Compare = ({ onDownload }) => {
  const { t } = useLang();
  const c = t.compare;
  const cols = "grid-cols-[1fr_76px_92px] sm:grid-cols-[1fr_150px_170px]";
  return (
    <section id="compare" data-testid="compare-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="aurora aurora-gold opacity-30" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={c.eyebrow} title={c.title} align="center" className="mb-16" accent="text-amber-400/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-purple-500/15 bg-[#160F24]/60 backdrop-blur-xl"
        >
          {/* elevated premium column */}
          <div className="absolute top-[-14px] bottom-[-14px] right-[-6px] sm:right-[-10px] w-[98px] sm:w-[182px] rounded-3xl border border-amber-500/35 bg-gradient-to-b from-amber-950/50 via-[#1a1326] to-[#0d0916] shadow-[0_30px_80px_-25px_rgba(245,158,11,0.45)] pointer-events-none border-beam border-beam-gold" />
          <div
            data-testid="compare-popular-badge"
            className="absolute -top-3 right-[6px] sm:right-[30px] z-20 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#1a1206] shadow-lg"
          >
            <Sparkles size={10} /> {c.popular}
          </div>

          <div className={`relative z-10 grid ${cols} items-end px-5 sm:px-8 pt-10 pb-5 border-b border-purple-500/15`}>
            <span />
            <div className="text-center">
              <p className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">{c.free}</p>
              <p className="hidden sm:block text-xs text-slate-400 mt-1">{c.freePrice}</p>
            </div>
            <div className="text-center">
              <p className="inline-flex items-center gap-1 text-[10px] font-mono tracking-[0.25em] text-amber-300 uppercase">
                <Crown size={11} /> {c.premium}
              </p>
              <p className="hidden sm:block text-xs text-amber-200/80 mt-1 font-semibold">{c.price}</p>
            </div>
          </div>

          {c.rows.map((row, i) => (
            <motion.div
              key={i}
              data-testid={`compare-row-${i}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative z-10 grid ${cols} items-center px-5 sm:px-8 py-4 border-b border-purple-500/10 last:border-0 text-sm text-slate-300 hover:bg-white/[0.03] transition-colors group`}
            >
              <span className={`pr-3 ${!row.free ? "text-white" : ""}`}>
                {row.label}
                {!row.free && <span className="ml-2 hidden sm:inline-block align-middle w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />}
              </span>
              <span className="flex justify-center"><Cell ok={row.free} /></span>
              <span className="flex justify-center transition-transform duration-300 group-hover:scale-110"><Cell ok={row.premium} gold /></span>
            </motion.div>
          ))}

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_150px_170px] gap-3 px-5 sm:px-8 py-6 bg-black/20 rounded-b-3xl">
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
              className="shine rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2.5 text-xs font-bold text-[#1a1206] text-center shadow-[0_10px_30px_-8px_rgba(245,158,11,0.8)]"
            >
              {c.ctaPremium}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
