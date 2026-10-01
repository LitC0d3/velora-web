import { motion } from "framer-motion";
import { Crown, BadgeCheck, MonitorPlay, Lock, Zap } from "lucide-react";
import { useLang } from "../i18n";

const STUDIO =
  "https://images.unsplash.com/photo-1781107913585-a2a9b09ed501?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkYXJrJTIwc3R1ZGlvJTIwY2FtZXJhJTIwY3JlYXRvcnxlbnwwfHx8fDE3OTA4Njc4NDh8MA&ixlib=rb-4.1.0&q=85";

const perkIcons = [MonitorPlay, Lock, BadgeCheck, Zap];

export const Premium = () => {
  const { t } = useLang();
  const p = t.premium;
  return (
    <section id="premium" data-testid="premium-vip-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-amber-500/8 blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            data-testid="premium-badge"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-amber-400"
          >
            <Crown size={13} />
            {p.badge}
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-6 leading-tight">
            {p.title}
          </h2>
          <div className="mt-8 flex items-end gap-4">
            <span data-testid="premium-price" className="font-syne text-6xl sm:text-7xl font-extrabold gold-glow bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-purple-400">
              {p.price}
            </span>
            <span className="text-xs font-mono tracking-widest text-slate-500 pb-3 uppercase">{p.period}</span>
          </div>
          <ul className="mt-9 space-y-4" data-testid="premium-perks-list">
            {p.perks.map((perk, i) => {
              const Icon = perkIcons[i];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-4 text-sm sm:text-base text-slate-200"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                    <Icon size={16} />
                  </span>
                  {perk}
                </motion.li>
              );
            })}
          </ul>
          <div className="mt-10">
            <span
              data-testid="premium-cta-note"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-900/40"
            >
              <Crown size={15} />
              {p.cta}
            </span>
            <p className="mt-4 text-xs text-slate-500">{p.note}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <img src={STUDIO} alt="4K cinema studio" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent" />
            <div
              data-testid="premium-gold-badge-chip"
              className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 px-5 py-2.5 text-xs font-bold tracking-widest text-white shadow-xl"
            >
              <BadgeCheck size={15} />
              {p.badgeChip}
            </div>
            <div className="absolute top-6 right-6 rounded-xl border border-white/15 bg-black/40 backdrop-blur-md px-3.5 py-2 text-[10px] font-mono tracking-[0.2em] text-amber-300">
              4K · ULTRA HD
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
