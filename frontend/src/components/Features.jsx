import { motion } from "framer-motion";
import { Ban, Download, CloudUpload, Clapperboard, EyeOff, Smartphone, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { SpotlightCard } from "./fx/SpotlightCard";

const HERO_MOOD =
  "https://images.unsplash.com/photo-1584359018585-82fb9b6b710d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxzZW5zdWFsJTIwbW9vZHklMjBkYXJrJTIwcG9ydHJhaXQlMjBuZW9uJTIwcHVycGxlJTIwbGlnaHR8ZW58MHx8fHwxNzkwODY3ODQwfDA&ixlib=rb-4.1.0&q=85";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Tile = ({ i, icon: Icon, title, desc, className = "", children, testid }) => (
  <SpotlightCard
    custom={i}
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    data-testid={testid}
    className={`group p-7 sm:p-8 transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.45)] ${className}`}
  >
    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-purple-600/10 blur-[60px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/10 border border-purple-500/30 text-purple-200 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:text-white group-hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]">
        <Icon size={20} />
      </div>
      <h3 className="font-syne text-xl sm:text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-md">{desc}</p>
      {children}
    </div>
  </SpotlightCard>
);

export const Features = () => {
  const { t } = useLang();
  const f = t.features;
  return (
    <section id="features" data-testid="features-bento-grid" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-40 top-20 w-[34rem] h-[34rem] rounded-full bg-purple-700/15 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={f.eyebrow} title={f.title} sub={f.sub} className="mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <Tile i={1} icon={Ban} title={f.adFree.title} desc={f.adFree.desc} testid="feature-ad-free" className="md:col-span-4">
            <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] text-pink-400">
                <span className="relative w-1.5 h-1.5 rounded-full bg-pink-400 dot-ping" />
                {f.adFree.tag}
              </span>
              <div className="hidden sm:flex items-center gap-1.5 ml-2">
                {[...Array(14)].map((_, k) => (
                  <span
                    key={k}
                    className="w-1 rounded-full bg-gradient-to-t from-purple-600 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ height: `${8 + ((k * 7) % 18)}px` }}
                  />
                ))}
              </div>
            </div>
          </Tile>

          <Tile i={2} icon={Download} title={f.offline.title} desc={f.offline.desc} testid="feature-offline" className="md:col-span-2">
            <div className="mt-auto pt-6 space-y-2.5">
              {[92, 64, 37].map((w, k) => (
                <div key={k} className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + k * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              ))}
            </div>
          </Tile>

          <motion.div
            custom={3}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            id="creator"
            data-testid="feature-creator"
            className="group relative overflow-hidden rounded-3xl border border-purple-500/15 md:col-span-4 min-h-[300px] transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_60px_-10px_rgba(236,72,153,0.4)]"
          >
            <img src={HERO_MOOD} alt="Velora creator" className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform [transition-duration:1400ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0916] via-[#0d0916]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0916] via-transparent to-transparent" />
            <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-end h-full min-h-[300px]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-100 mb-6 backdrop-blur-md">
                <CloudUpload size={20} />
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-semibold tracking-tight text-white">{f.creator.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md">{f.creator.desc}</p>
              <a href="#creator-hub" className="mt-5 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-pink-400 hover:text-pink-300 transition-colors w-max" data-testid="feature-creator-cta">
                {f.creator.cta} <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

          <Tile i={4} icon={Clapperboard} title={f.shorts.title} desc={f.shorts.desc} testid="feature-shorts" className="md:col-span-2" />
          <Tile i={5} icon={EyeOff} title={f.discreet.title} desc={f.discreet.desc} testid="feature-discreet" className="md:col-span-3" />
          <Tile i={6} icon={Smartphone} title={f.android.title} desc={f.android.desc} testid="feature-android" className="md:col-span-3" />
        </div>
      </div>
    </section>
  );
};
