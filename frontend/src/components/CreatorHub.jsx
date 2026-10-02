import { motion } from "framer-motion";
import { Upload, Wallet, Users, Lock, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n";
import { SectionHead } from "./SectionHead";

const CREATOR_IMG =
  "https://images.unsplash.com/photo-1787783182240-eb908a1b821d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbmVvbiUyMHB1cnBsZSUyMHN0dWRpbyUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcGhvbmV8ZW58MHx8fHwxNzkwOTE5MTM3fDA&ixlib=rb-4.1.0&q=85";

const icons = [Upload, Wallet, Users, Lock];

export const CreatorHub = () => {
  const { t } = useLang();
  const c = t.creatorHub;
  return (
    <section id="creator-hub" data-testid="creator-hub-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-pink-600/10 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-pink-500/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <img src={CREATOR_IMG} alt="Velora creator in studio light" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-[#08050D]/30 to-transparent" />
            <div data-testid="creator-hub-stat" className="absolute bottom-7 left-7 right-7">
              <span className="font-syne text-6xl sm:text-7xl font-extrabold text-white leading-none">85%</span>
              <p className="mt-2 text-xs font-mono tracking-[0.2em] uppercase text-pink-300">{c.stat}</p>
            </div>
          </div>
          <div className="absolute -top-5 -right-5 rounded-2xl border border-purple-500/30 bg-[#160F24] px-4 py-3 shadow-xl hidden sm:block">
            <p className="text-[10px] font-mono tracking-[0.2em] text-slate-500">4K MASTER</p>
            <p className="text-sm font-semibold text-white mt-1">Preserved</p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SectionHead eyebrow={c.eyebrow} title={c.title} sub={c.sub} accent="text-pink-400/80" />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {c.points.map((pt, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  data-testid={`creator-point-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                  className="group rounded-2xl border border-purple-500/15 bg-[#160F24]/60 p-5 transition-all duration-500 hover:border-pink-500/40 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-300 transition-colors group-hover:text-white">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-syne text-base font-semibold text-white mt-4">{pt.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{pt.desc}</p>
                </motion.div>
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
