import { motion } from "framer-motion";
import { MessagesSquare, RefreshCcw, ShieldCheck, RadioTower } from "lucide-react";
import { useLang } from "../i18n";

const icons = [MessagesSquare, RefreshCcw, ShieldCheck, RadioTower];

export const Roadmap = () => {
  const { t } = useLang();
  const r = t.roadmap;
  return (
    <section id="roadmap" data-testid="roadmap-timeline-section" className="relative py-24 sm:py-32 bg-[#0d0916]/60 border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-purple-400/80">{r.eyebrow}</p>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-4">{r.title}</h2>
          <p className="text-base text-slate-400 mt-4">{r.sub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {r.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`roadmap-item-${i}`}
                className="group relative rounded-3xl border border-purple-500/15 bg-[#160F24]/75 backdrop-blur-xl p-7 transition-all duration-500 hover:border-purple-400/45 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.4)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 transition-colors duration-500 group-hover:text-white">
                    <Icon size={19} />
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-pink-400/90 border border-pink-500/30 bg-pink-500/10 rounded-full px-3 py-1">
                    {item.eta}
                  </span>
                </div>
                <h3 className="font-syne text-lg font-semibold text-white leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                <p className="mt-5 text-[10px] font-mono tracking-[0.25em] text-purple-400/70 uppercase">{r.status}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
