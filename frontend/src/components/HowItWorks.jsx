import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Download, PackageOpen, Play, Check } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const icons = [Download, PackageOpen, Play];

export const HowItWorks = ({ onDownload }) => {
  const { t } = useLang();
  const h = t.how;
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(2, Math.floor(v * 3))));

  return (
    <section id="how" data-testid="how-it-works-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10 overflow-hidden">
      <div className="absolute -left-32 bottom-0 w-[30rem] h-[30rem] rounded-full bg-purple-800/15 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={h.eyebrow} title={h.title} className="mb-16" />

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-24">
          {/* steps with progress rail */}
          <div ref={ref} className="relative pl-12 sm:pl-16">
            <div className="absolute left-[18px] sm:left-[26px] top-3 bottom-3 w-px bg-purple-500/15" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute left-[18px] sm:left-[26px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-pink-500 via-purple-400 to-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            />
            <div className="space-y-20 sm:space-y-24">
              {h.steps.map((step, i) => {
                const Icon = icons[i];
                const on = i <= active;
                return (
                  <motion.div
                    key={i}
                    data-testid={`how-step-${i}`}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-12 sm:-left-16 top-0 flex items-center justify-center w-9 h-9 sm:w-[52px] sm:h-[52px] rounded-2xl border transition-all duration-700 ${
                        on
                          ? "bg-gradient-to-br from-purple-600 to-pink-600 border-transparent text-white shadow-[0_0_30px_-4px_rgba(168,85,247,0.8)] scale-100"
                          : "bg-[#0d0916] border-purple-500/25 text-purple-400/60 scale-90"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <div className="flex items-baseline gap-4">
                      <span className={`font-syne text-5xl sm:text-6xl font-extrabold leading-none transition-colors duration-700 ${on ? "text-white/90" : "text-purple-500/15"}`}>0{i + 1}</span>
                      <h3 className="font-syne text-xl sm:text-2xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">{step.desc}</p>
                    {i === 0 && (
                      <button
                        data-testid="how-download-btn"
                        onClick={onDownload}
                        className="shine mt-6 inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-5 py-2.5 text-xs font-mono tracking-widest text-pink-300 hover:bg-pink-500/20 hover:text-white transition-colors"
                      >
                        <Download size={13} /> APK
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* sticky install console */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                data-testid="how-console"
                className="border-beam relative rounded-3xl border border-purple-500/20 bg-[#08050D]/90 backdrop-blur-xl p-7 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-auto text-[10px] font-mono tracking-[0.25em] text-slate-500">velora-installer</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  {h.steps.map((step, i) => {
                    const done = i < active;
                    const cur = i === active;
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-500 ${
                          cur ? "border-purple-400/50 bg-purple-600/15 text-white" : done ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-300" : "border-white/5 text-slate-600"
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full border ${done ? "border-emerald-400 bg-emerald-400 text-[#06120c]" : cur ? "border-purple-300" : "border-slate-700"}`}>
                          {done ? <Check size={11} strokeWidth={3} /> : cur ? <span className="relative w-1.5 h-1.5 rounded-full bg-purple-300 dot-ping" /> : null}
                        </span>
                        <span className="truncate">{step.title}</span>
                        <span className="ml-auto text-[10px] tracking-widest opacity-70">{done ? "OK" : cur ? "..." : "--"}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div style={{ scaleX: lineScale }} className="h-full origin-left rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400" />
                </div>
                <p className="mt-3 text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">v{t.hero.version.replace("v", "")} · android 8.0+</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
