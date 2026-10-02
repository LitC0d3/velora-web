import { motion } from "framer-motion";
import { useLang } from "../i18n";

export const Stats = () => {
  const { t } = useLang();
  return (
    <section data-testid="stats-band" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-purple-500/15 bg-purple-500/10">
          {t.stats.map((s, i) => (
            <motion.div
              key={i}
              data-testid={`stat-item-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0d0916] p-8 sm:p-10 transition-colors duration-500 hover:bg-[#160F24]"
            >
              <span className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-purple-200 to-pink-400">
                {s.value}
              </span>
              <p className="mt-3 text-xs font-mono tracking-[0.2em] uppercase text-slate-500 group-hover:text-purple-300 transition-colors">
                {s.label}
              </p>
              <span className="absolute left-8 bottom-0 h-px w-10 bg-gradient-to-r from-pink-500 to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
