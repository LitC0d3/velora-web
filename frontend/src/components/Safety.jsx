import { motion } from "framer-motion";
import { ShieldCheck, LockKeyhole, Flag, BadgeCheck, EyeOff, Fingerprint } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const icons = [ShieldCheck, LockKeyhole, Flag, BadgeCheck, EyeOff, Fingerprint];

export const Safety = () => {
  const { t } = useLang();
  const s = t.safety;
  return (
    <section id="safety" data-testid="safety-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] rounded-full bg-violet-800/15 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={s.eyebrow} title={s.title} sub={s.sub} className="mb-14" accent="text-red-400/80" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                data-testid={`safety-item-${i}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-purple-500/15 bg-[#160F24]/60 backdrop-blur-xl p-7 transition-all duration-500 hover:border-red-400/40 hover:shadow-[0_0_50px_-15px_rgba(248,113,113,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-300 transition-colors duration-500 group-hover:bg-red-500/20 group-hover:text-white">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-syne text-lg font-semibold text-white leading-snug">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
