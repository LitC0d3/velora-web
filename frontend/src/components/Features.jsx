import { motion } from "framer-motion";
import { Ban, Download, CloudUpload, Clapperboard, EyeOff, Smartphone, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n";

const HERO_MOOD =
  "https://images.unsplash.com/photo-1584359018585-82fb9b6b710d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxzZW5zdWFsJTIwbW9vZHklMjBkYXJrJTIwcG9ydHJhaXQlMjBuZW9uJTIwcHVycGxlJTIwbGlnaHR8ZW58MHx8fHwxNzkwODY3ODQwfDA&ixlib=rb-4.1.0&q=85";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Tile = ({ i, icon: Icon, title, desc, className = "", children, testid }) => (
  <motion.div
    custom={i}
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    data-testid={testid}
    className={`group relative overflow-hidden rounded-3xl border border-purple-500/15 bg-[#160F24]/75 backdrop-blur-xl p-7 sm:p-8 transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.35)] ${className}`}
  >
    <div className="relative z-10">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 mb-5 transition-all duration-500 group-hover:bg-purple-600/35 group-hover:text-white">
        <Icon size={20} />
      </div>
      <h3 className="font-syne text-xl sm:text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-md">{desc}</p>
      {children}
    </div>
  </motion.div>
);

export const Features = () => {
  const { t } = useLang();
  const f = t.features;
  return (
    <section id="features" data-testid="features-bento-grid" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={reveal}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-purple-400/80">{f.eyebrow}</p>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-4">{f.title}</h2>
          <p className="text-base text-slate-400 mt-4">{f.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <Tile i={1} icon={Ban} title={f.adFree.title} desc={f.adFree.desc} testid="feature-ad-free" className="md:col-span-4">
            <span className="mt-5 inline-block rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] text-pink-400">
              {f.adFree.tag}
            </span>
          </Tile>
          <Tile i={2} icon={Download} title={f.offline.title} desc={f.offline.desc} testid="feature-offline" className="md:col-span-2" />

          <motion.div
            custom={3}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            id="creator"
            data-testid="feature-creator"
            className="group relative overflow-hidden rounded-3xl border border-purple-500/15 md:col-span-3 min-h-[300px] transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.35)]"
          >
            <img src={HERO_MOOD} alt="Velora creator" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0916] via-[#0d0916]/70 to-transparent" />
            <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-end h-full min-h-[300px]">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-200 mb-5">
                <CloudUpload size={20} />
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-semibold tracking-tight text-white">{f.creator.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md">{f.creator.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-pink-400">
                {f.creator.cta} <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </motion.div>

          <Tile i={4} icon={Clapperboard} title={f.shorts.title} desc={f.shorts.desc} testid="feature-shorts" className="md:col-span-3" />
          <Tile i={5} icon={EyeOff} title={f.discreet.title} desc={f.discreet.desc} testid="feature-discreet" className="md:col-span-3" />
          <Tile i={6} icon={Smartphone} title={f.android.title} desc={f.android.desc} testid="feature-android" className="md:col-span-3" />
        </div>
      </div>
    </section>
  );
};
