import { motion } from "framer-motion";
import { Home, Clapperboard, PlusCircle, Search, Heart, User } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { PhoneFrame, PHONE_MAIN, PHONE_SIDE } from "./PhoneFrame";

const shots = [PHONE_MAIN, PHONE_SIDE];
const navIcons = [Home, Clapperboard, PlusCircle, Search, Heart, User];

const ScreenCard = ({ i, src, item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
    data-testid={`screen-card-${i}`}
    className={`group relative overflow-hidden rounded-3xl border border-purple-500/15 bg-[#160F24]/60 backdrop-blur-xl p-7 sm:p-9 grid sm:grid-cols-[1fr_200px] gap-8 items-center transition-colors duration-500 hover:border-pink-500/40 ${
      i % 2 ? "lg:mt-20" : ""
    }`}
  >
    <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-600/20 blur-[90px] pointer-events-none" />
    <div className="relative z-10 min-w-0">
      <span className="text-[10px] font-mono tracking-[0.3em] text-pink-400">0{i + 1}</span>
      <h3 className="font-syne text-xl sm:text-2xl font-semibold tracking-tight text-white mt-3">{item.title}</h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-purple-500/30 bg-purple-600/10 px-3 py-1 text-[10px] font-mono tracking-[0.15em] text-purple-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <PhoneFrame
      src={src}
      alt={item.title}
      className="relative z-10 w-[200px] mx-auto !p-2 !rounded-[1.8rem] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[-2deg]"
    />
  </motion.div>
);

export const Screens = () => {
  const { t } = useLang();
  const s = t.screens;
  return (
    <section id="screens" data-testid="screens-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-pink-600/10 blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={s.eyebrow} title={s.title} sub={s.sub} className="mb-14" />
        <div className="grid lg:grid-cols-2 gap-6">
          {s.items.map((item, i) => (
            <ScreenCard key={i} i={i} src={shots[i]} item={item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="screens-nav-strip"
          className="mt-14 rounded-3xl border border-purple-500/15 bg-[#0d0916] p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <p className="font-syne text-lg font-semibold text-white shrink-0">{s.navTitle}</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 flex-1">
            {s.navItems.map((label, i) => {
              const Icon = navIcons[i];
              return (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-2 rounded-2xl py-3 text-[11px] font-medium transition-colors duration-300 ${
                    i === 2 ? "text-purple-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon size={20} className={i === 2 ? "text-purple-400" : ""} />
                  {label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
