import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { CountUp } from "./fx/CountUp";

export const Stats = () => {
  const { t } = useLang();
  return (
    <section data-testid="stats-band" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="aurora" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-10">
          {t.stats.map((s, i) => (
            <motion.div
              key={i}
              data-testid={`stat-item-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-7"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 h-px w-full origin-left bg-gradient-to-r from-pink-500 via-purple-400 to-transparent"
              />
              <span className="absolute top-0 left-0 w-1.5 h-1.5 -translate-y-[2.5px] rounded-full bg-pink-400 shadow-[0_0_14px_rgba(236,72,153,0.9)]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-purple-400/60">0{i + 1}</span>
              <div className="mt-3 font-syne text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-purple-100 to-pink-400 transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]">
                <CountUp value={s.value} testid={`stat-value-${i}`} />
              </div>
              <p className="mt-4 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-slate-400 group-hover:text-purple-200 transition-colors">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
