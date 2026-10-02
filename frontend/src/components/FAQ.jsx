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
    className={`rounded-2xl border transition-colors duration-300 ${open ? "border-purple-400/40 bg-[#160F24]" : "border-purple-500/15 bg-[#160F24]/50 hover:border-purple-500/35"}`}
  >
    <button
      data-testid={`faq-question-${i}`}
      onClick={onToggle}
      aria-expanded={open}
      className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
    >
      <span className="font-syne text-base sm:text-lg font-semibold text-white">{q}</span>
      <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/30 text-purple-300 transition-transform duration-300 ${open ? "rotate-45 bg-purple-600/30" : ""}`}>
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
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} className="lg:sticky lg:top-28 h-max" />
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <Item key={i} i={i} q={item.q} a={item.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};
