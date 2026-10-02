import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, Flag, BadgeCheck, EyeOff, Fingerprint } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { SpotlightCard } from "./fx/SpotlightCard";

const icons = [ShieldCheck, LockKeyhole, Flag, BadgeCheck, EyeOff, Fingerprint];

export const Safety = () => {
  const { t } = useLang();
  const s = t.safety;
  return (
    <section id="safety" data-testid="safety-section" className="relative py-24 sm:py-32 overflow-hidden">
      {/* concentric radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[520, 820, 1140].map((d, i) => (
          <motion.span
            key={d}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: i * 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10"
            style={{ width: d, height: d }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] rounded-full bg-violet-800/15 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHead eyebrow={s.eyebrow} title={s.title} sub={s.sub} accent="text-red-400/80" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 hidden lg:flex items-center justify-center w-40 h-40 rounded-full border border-red-500/20 bg-red-500/5 relative"
            >
              <span className="absolute inset-3 rounded-full border border-red-500/20" />
              <span className="absolute inset-0 rounded-full border border-red-400/40 dot-ping bg-transparent" />
              <ShieldCheck size={48} className="text-red-300 drop-shadow-[0_0_20px_rgba(248,113,113,0.6)]" />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {s.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <SpotlightCard
                  key={i}
                  data-testid={`safety-item-${i}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group p-6 sm:p-7 hover:-translate-y-1 transition-transform duration-500 ${i % 2 ? "sm:translate-y-8" : ""}`}
                >
                  <div className="relative z-10">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-300 transition-all duration-500 group-hover:bg-red-500/80 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(248,113,113,0.6)] group-hover:rotate-[-8deg]">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-syne text-lg font-semibold text-white leading-snug mt-5">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
