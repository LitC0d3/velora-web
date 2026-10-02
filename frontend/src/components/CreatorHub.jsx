import { motion } from "framer-motion";
import { Upload, Wallet, Users, Lock, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";
import { SpotlightCard } from "./fx/SpotlightCard";
import { CountUp } from "./fx/CountUp";

const CREATOR_IMG =
  "https://images.unsplash.com/photo-1787783182240-eb908a1b821d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbmVvbiUyMHB1cnBsZSUyMHN0dWRpbyUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcGhvbmV8ZW58MHx8fHwxNzkwOTE5MTM3fDA&ixlib=rb-4.1.0&q=85";

const icons = [Upload, Wallet, Users, Lock];

export const CreatorHub = () => {
  const { t } = useLang();
  const c = t.creatorHub;
  return (
    <section id="creator-hub" data-testid="creator-hub-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-pink-600/10 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-pink-600/20 via-transparent to-purple-600/20 blur-2xl pointer-events-none" />
          <div className="border-beam relative overflow-hidden rounded-3xl border border-pink-500/25 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] group">
            <img src={CREATOR_IMG} alt="Velora creator in studio light" className="w-full aspect-[4/5] object-cover transition-transform [transition-duration:1600ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-[#08050D]/30 to-transparent" />
            <div data-testid="creator-hub-stat" className="absolute bottom-7 left-7 right-7">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                <span className="font-syne text-6xl sm:text-7xl font-extrabold text-white leading-none drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                  <CountUp value="85%" />
                </span>
                <p className="mt-2 text-xs font-mono tracking-[0.2em] uppercase text-pink-300">{c.stat}</p>
                <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-5 rounded-2xl border border-purple-500/30 bg-[#160F24]/95 backdrop-blur-md px-4 py-3 shadow-xl hidden sm:block"
          >
            <p className="text-[10px] font-mono tracking-[0.2em] text-slate-500">4K MASTER</p>
            <p className="text-sm font-semibold text-white mt-1 flex items-center gap-2">
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-ping" /> Preserved
            </p>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SectionHead eyebrow={c.eyebrow} title={c.title} sub={c.sub} accent="text-pink-400/80" />
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {c.points.map((pt, i) => {
              const Icon = icons[i];
              return (
                <SpotlightCard
                  key={i}
                  data-testid={`creator-point-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                  className="group !rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-500"
                >
                  <div className="relative z-10">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-300 transition-all duration-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                      <Icon size={17} />
                    </span>
                    <h3 className="font-syne text-base font-semibold text-white mt-4">{pt.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{pt.desc}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-pink-400">
            {c.cta} <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </section>
  );
};
