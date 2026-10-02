import { motion } from "framer-motion";
import { Download, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n";
import { VeloraMark } from "./Logo";

export const FinalCTA = ({ onDownload }) => {
  const { t } = useLang();
  const c = t.cta;
  return (
    <section data-testid="final-cta-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="border-beam relative overflow-hidden rounded-[2.5rem] border border-purple-400/30 bg-[#120b1e] px-7 py-16 sm:px-16 sm:py-24 text-center violet-ring"
        >
          <div className="aurora opacity-80" />
          <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[46rem] rounded-full pointer-events-none opacity-40"
            style={{ background: "conic-gradient(from 0deg, transparent 0 60%, rgba(168,85,247,0.35) 75%, rgba(236,72,153,0.35) 85%, transparent 100%)", filter: "blur(40px)" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <span className="absolute inset-0 rounded-[22%] bg-purple-500/40 blur-2xl" />
              <VeloraMark size={72} />
            </motion.div>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white mt-9 leading-[1.05]">{c.title}</h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-purple-200/70 leading-relaxed">{c.sub}</p>
            <button
              data-testid="final-cta-download-btn"
              onClick={onDownload}
              className="shine group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 px-10 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_20px_60px_-15px_rgba(168,85,247,0.8)] hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.04] active:scale-95"
            >
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              {c.button}
            </button>
            <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono tracking-wider text-slate-400">
              <ShieldCheck size={13} className="text-red-400" /> {c.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
