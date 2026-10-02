import { motion } from "framer-motion";
import { Download, PackageOpen, Play } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const icons = [Download, PackageOpen, Play];

export const HowItWorks = ({ onDownload }) => {
  const { t } = useLang();
  const h = t.how;
  return (
    <section id="how" data-testid="how-it-works-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={h.eyebrow} title={h.title} className="mb-16" />
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
          {h.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                data-testid={`how-step-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={22} />
                  </span>
                  <span className="font-syne text-5xl font-extrabold text-purple-500/20 leading-none">0{i + 1}</span>
                </div>
                <h3 className="font-syne text-xl font-semibold text-white mt-7">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">{step.desc}</p>
                {i === 0 && (
                  <button
                    data-testid="how-download-btn"
                    onClick={onDownload}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Download size={13} /> APK
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
