import { motion } from "framer-motion";
import { MessagesSquare, RefreshCcw, ShieldCheck, RadioTower } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { SpotlightCard } from "./fx/SpotlightCard";

const icons = [MessagesSquare, RefreshCcw, ShieldCheck, RadioTower];

export const Roadmap = () => {
  const { t } = useLang();
  const r = t.roadmap;
  return (
    <section id="roadmap" data-testid="roadmap-timeline-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10 overflow-hidden">
      <div className="absolute right-0 top-0 w-[30rem] h-[30rem] rounded-full bg-violet-800/15 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={r.eyebrow} title={r.title} sub={r.sub} className="mb-20" />

        <div className="relative">
          {/* timeline thread */}
          <div className="hidden lg:block absolute top-[11px] left-0 right-0 h-px bg-purple-500/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-[11px] left-0 right-0 h-px origin-left bg-gradient-to-r from-pink-500 via-purple-400 to-purple-500/20"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {r.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="relative lg:pt-12">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.3, type: "spring" }}
                    className="hidden lg:flex absolute top-0 left-0 w-6 h-6 items-center justify-center"
                  >
                    <span className={`relative w-3 h-3 rounded-full ${i === 0 ? "bg-pink-400 dot-ping shadow-[0_0_18px_rgba(236,72,153,1)]" : "bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]"}`} />
                  </motion.span>

                  <SpotlightCard
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    data-testid={`roadmap-item-${i}`}
                    tilt
                    className="group h-full p-7 hover:shadow-[0_24px_60px_-20px_rgba(139,92,246,0.5)]"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-7">
                        <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 transition-all duration-500 group-hover:text-white group-hover:bg-purple-600/40">
                          <Icon size={19} />
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-pink-300 border border-pink-500/30 bg-pink-500/10 rounded-full px-3 py-1">
                          {item.eta}
                        </span>
                      </div>
                      <span className="font-syne text-6xl font-extrabold text-purple-500/10 leading-none absolute -bottom-3 -right-1 select-none pointer-events-none">0{i + 1}</span>
                      <h3 className="font-syne text-lg font-semibold text-white leading-snug">{item.title}</h3>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      <p className="mt-6 flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-purple-300/80 uppercase">
                        <span className="relative w-1.5 h-1.5 rounded-full bg-purple-400 dot-ping" /> {r.status}
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
