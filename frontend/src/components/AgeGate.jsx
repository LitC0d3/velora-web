import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import { useLang } from "../i18n";
import { VeloraMark } from "./Logo";

export const AgeGate = ({ onConfirm }) => {
  const { t } = useLang();
  return (
    <motion.div
      data-testid="age-gate-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-2xl px-5"
    >
      <motion.div
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md rounded-3xl border border-purple-500/25 bg-[#160F24]/90 backdrop-blur-xl p-8 sm:p-10 text-center shadow-[0_8px_60px_rgba(0,0,0,0.7)]"
      >
        <div className="flex justify-center mb-6">
          <VeloraMark size={56} />
        </div>
        <span
          data-testid="age-gate-badge"
          className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-[11px] font-mono tracking-[0.25em] text-red-400"
        >
          <ShieldAlert size={13} />
          {t.age.badge}
        </span>
        <h2 className="font-syne text-2xl sm:text-3xl font-bold text-white mt-6" data-testid="age-gate-title">
          {t.age.title}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mt-4">{t.age.text}</p>
        <button
          data-testid="age-confirm-btn"
          onClick={onConfirm}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/50 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          {t.age.confirm}
        </button>
        <a
          data-testid="age-exit-link"
          href="https://www.google.com"
          className="mt-4 inline-block text-xs font-mono tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
        >
          {t.age.exit} →
        </a>
      </motion.div>
    </motion.div>
  );
};
