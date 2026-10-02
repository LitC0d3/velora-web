import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Clapperboard, PlusCircle, Search, Heart, User } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { PhoneFrame, PHONE_MAIN, PHONE_SIDE } from "./PhoneFrame";

const shots = [PHONE_MAIN, PHONE_SIDE];
const navIcons = [Home, Clapperboard, PlusCircle, Search, Heart, User];

export const Screens = () => {
  const { t } = useLang();
  const s = t.screens;
  const [active, setActive] = useState(0);
  const item = s.items[active];

  return (
    <section id="screens" data-testid="screens-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-pink-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead eyebrow={s.eyebrow} title={s.title} sub={s.sub} className="mb-14" />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* selector + copy */}
          <div>
            <div className="flex flex-col gap-3" role="tablist" data-testid="screens-selector">
              {s.items.map((it, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  data-testid={`screen-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`group relative text-left rounded-2xl border p-5 sm:p-6 transition-all duration-500 overflow-hidden ${
                    active === i
                      ? "border-pink-500/40 bg-[#160F24] shadow-[0_20px_60px_-25px_rgba(236,72,153,0.5)]"
                      : "border-purple-500/10 bg-transparent hover:border-purple-500/30 hover:bg-[#160F24]/40"
                  }`}
                >
                  {active === i && (
                    <motion.span layoutId="screen-tab-bar" className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-gradient-to-b from-pink-500 to-purple-500" />
                  )}
                  <div className="flex items-center gap-4">
                    <span className={`font-syne text-2xl font-extrabold ${active === i ? "text-pink-400" : "text-purple-500/30"} transition-colors`}>0{i + 1}</span>
                    <h3 className={`font-syne text-lg sm:text-xl font-semibold tracking-tight ${active === i ? "text-white" : "text-slate-400 group-hover:text-slate-200"} transition-colors`}>
                      {it.title}
                    </h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-slate-400 leading-relaxed">{it.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {it.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-purple-500/30 bg-purple-600/10 px-3 py-1 text-[10px] font-mono tracking-[0.15em] text-purple-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* dock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-testid="screens-nav-strip"
              className="mt-8 rounded-3xl border border-purple-500/15 bg-[#0d0916]/80 backdrop-blur-xl p-5 sm:p-6"
            >
              <p className="text-[10px] font-mono tracking-[0.3em] text-purple-400/70 uppercase mb-4">{s.navTitle}</p>
              <div className="grid grid-cols-6 gap-2">
                {s.navItems.map((label, i) => {
                  const Icon = navIcons[i];
                  const hot = i === 2;
                  return (
                    <div
                      key={label}
                      className={`group flex flex-col items-center gap-2 rounded-2xl py-3 text-[10px] sm:text-[11px] font-medium transition-all duration-300 ${
                        hot ? "text-white bg-purple-600/20 border border-purple-500/40 shadow-[0_0_24px_-6px_rgba(168,85,247,0.7)]" : "text-slate-500 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon size={18} className={`transition-transform duration-300 group-hover:-translate-y-0.5 ${hot ? "text-purple-300" : ""}`} />
                      <span className="truncate max-w-full">{label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* phone stage */}
          <div className="relative flex justify-center" data-testid="screens-stage">
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-purple-600/25 blur-[110px] pointer-events-none" />
            <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40, rotateY: -14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, rotateY: 14, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ perspective: 1200 }}
                className="relative"
              >
                <PhoneFrame
                  testid={`screen-phone-${active}`}
                  src={shots[active]}
                  alt={item.title}
                  className="sheen relative w-[240px] sm:w-[280px] lg:w-[300px] violet-ring float-slow"
                />
                <div className="absolute -right-6 sm:-right-14 top-10 rounded-xl border border-purple-500/30 bg-[#160F24]/90 backdrop-blur-md px-3 py-2 text-[10px] font-mono tracking-[0.2em] text-purple-200 shadow-xl">
                  {item.tags[0]}
                </div>
                <div className="absolute -left-10 sm:-left-24 bottom-20 rounded-xl border border-pink-500/30 bg-[#160F24]/90 backdrop-blur-md px-3 py-2 text-[10px] font-mono tracking-[0.2em] text-pink-300 shadow-xl">
                  {item.tags[1]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
