import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const Item = ({ i, q, a, open, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.06 }}
    className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
      open
        ? "border-purple-400/40 bg-[#160F24] shadow-[0_24px_60px_-30px_rgba(168,85,247,0.6)]"
        : "border-purple-500/10 bg-[#160F24]/40 hover:border-purple-500/35 hover:bg-[#160F24]/70"
    }`}
  >
    {open && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-pink-500 to-purple-500" />}
    <button
      data-testid={`faq-question-${i}`}
      onClick={onToggle}
      aria-expanded={open}
      className="w-full flex items-center gap-5 px-6 py-5 text-left"
    >
      <span className={`font-mono text-xs tracking-widest shrink-0 ${open ? "text-pink-400" : "text-purple-500/50"}`}>0{i + 1}</span>
      <span className="font-syne text-base sm:text-lg font-semibold text-white flex-1">{q}</span>
      <span
        className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-500 ${
          open ? "rotate-45 bg-gradient-to-br from-purple-600 to-pink-600 border-transparent text-white" : "border-purple-500/30 text-purple-300"
        }`}
      >
        <Plus size={15} />
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          data-testid={`faq-answer-${i}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="pl-[4.25rem] pr-8 pb-6 text-sm text-slate-400 leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10 overflow-hidden">
      <div className="absolute -right-32 top-0 w-[28rem] h-[28rem] rounded-full bg-purple-800/15 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div className="lg:sticky lg:top-28 h-max">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <p className="mt-8 font-syne text-[9rem] leading-none font-extrabold text-purple-500/[0.06] select-none hidden lg:block">?</p>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <Item key={i} i={i} q={item.q} a={item.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};
