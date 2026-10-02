import { motion } from "framer-motion";
import { Crown, BadgeCheck, MonitorPlay, Lock, Zap, Sparkles } from "lucide-react";
import { useLang } from "../i18n";

const STUDIO =
  "https://images.unsplash.com/photo-1781107913585-a2a9b09ed501?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkYXJrJTIwc3R1ZGlvJTIwY2FtZXJhJTIwY3JlYXRvcnxlbnwwfHx8fDE3OTA4Njc4NDh8MA&ixlib=rb-4.1.0&q=85";

const perkIcons = [MonitorPlay, Lock, BadgeCheck, Zap];

export const Premium = () => {
  const { t } = useLang();
  const p = t.premium;
  return (
    <section id="premium" data-testid="premium-vip-section" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="aurora aurora-gold" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            data-testid="premium-badge"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-amber-300 shadow-[0_0_30px_-8px_rgba(245,158,11,0.6)]"
          >
            <Crown size={13} />
            {p.badge}
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-7 leading-[1.05]">
            {p.title}
          </h2>
          <div className="mt-9 flex items-end gap-4">
            <span data-testid="premium-price" className="font-syne text-6xl sm:text-7xl lg:text-8xl font-extrabold gold-shimmer leading-none drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              {p.price}
            </span>
            <span className="text-xs font-mono tracking-widest text-amber-200/60 pb-3 uppercase">{p.period}</span>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-3" data-testid="premium-perks-list">
            {p.perks.map((perk, i) => {
              const Icon = perkIcons[i];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="group flex items-start gap-3.5 rounded-2xl border border-amber-500/15 bg-gradient-to-b from-amber-950/25 to-[#160F24]/60 backdrop-blur-md p-4 text-sm text-slate-200 transition-all duration-500 hover:border-amber-400/50 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-14px_rgba(245,158,11,0.5)]"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 shrink-0 transition-colors group-hover:bg-amber-400 group-hover:text-[#1a1206]">
                    <Icon size={16} />
                  </span>
                  <span className="leading-snug pt-1.5">{perk}</span>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-10">
            <span
              data-testid="premium-cta-note"
              className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_40px_-10px_rgba(245,158,11,0.6)]"
            >
              <Crown size={15} />
              {p.cta}
            </span>
            <p className="mt-4 text-xs text-slate-500">{p.note}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none" />
          <div className="border-beam border-beam-gold relative overflow-hidden rounded-3xl border border-amber-500/25 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]">
            <img src={STUDIO} alt="4K cinema studio" className="w-full aspect-[4/3] object-cover transition-transform [transition-duration:1600ms] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-[#08050D]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-700/20 mix-blend-overlay" />

            <div
              data-testid="premium-gold-badge-chip"
              className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-purple-600 px-5 py-2.5 text-xs font-bold tracking-widest text-white shadow-[0_10px_30px_-8px_rgba(245,158,11,0.8)]"
            >
              <BadgeCheck size={15} />
              {p.badgeChip}
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 rounded-xl border border-amber-300/25 bg-black/50 backdrop-blur-md px-3.5 py-2 text-[10px] font-mono tracking-[0.2em] text-amber-300 flex items-center gap-2"
            >
              <Sparkles size={12} /> 4K · ULTRA HD
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-6 left-6 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md px-3.5 py-2 text-[10px] font-mono tracking-[0.2em] text-purple-200"
            >
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-ping" /> HDR · 60 FPS
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
