import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
          className="relative overflow-hidden rounded-[2.5rem] border border-purple-400/30 bg-[#160F24] px-7 py-16 sm:px-16 sm:py-20 text-center violet-ring"
        >
          <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-purple-600/40 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-pink-600/30 blur-[120px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <VeloraMark size={64} />
            </motion.div>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-8">{c.title}</h2>
            <p className="mt-5 max-w-xl text-base text-purple-200/70 leading-relaxed">{c.sub}</p>
            <button
              data-testid="final-cta-download-btn"
              onClick={onDownload}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-900/50 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.04] active:scale-95"
            >
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              {c.button}
            </button>
            <p className="mt-5 text-[11px] font-mono tracking-wider text-slate-500">{c.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
