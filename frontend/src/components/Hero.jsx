import { motion, useMotionValue, useTransform } from "framer-motion";
import { Download, ShieldCheck, ChevronDown } from "lucide-react";
import { useLang } from "../i18n";

const PHONE_MAIN =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_f0fb59c8-549b-4a2b-906a-64f1cb5c5645/artifacts/1vtbgvbl_Screenshot_20261001-004134.png";
const PHONE_SIDE =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_f0fb59c8-549b-4a2b-906a-64f1cb5c5645/artifacts/wf4wfm36_Screenshot_20261001-004149.png";

export const Hero = ({ intro, onDownload }) => {
  const { t } = useLang();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-11, 11]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-purple-700/25 blur-[140px]" />
        <div className="absolute top-1/3 -right-48 w-[34rem] h-[34rem] rounded-full bg-pink-600/15 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-violet-900/30 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={intro ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-red-500/35 bg-red-500/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.14em] sm:tracking-[0.22em] text-red-400"
            data-testid="hero-age-badge"
          >
            <ShieldCheck size={13} />
            {t.hero.badge}
          </motion.div>

          <h1
            className="font-syne font-extrabold tracking-tight leading-[1.02] mt-7 text-[clamp(1.65rem,calc((100vw-48px)*0.078),2.8rem)]"
            data-testid="hero-title"
          >
            {t.hero.lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-glow bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-400" : "text-white"}`}
                  initial={{ y: "115%" }}
                  animate={intro ? { y: 0 } : {}}
                  transition={{ duration: 0.95, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            data-testid="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={intro ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-7 max-w-md text-base sm:text-lg text-purple-200/70 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={intro ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <button
              data-testid="hero-download-btn"
              onClick={onDownload}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-900/50 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.04] active:scale-95"
            >
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              {t.hero.cta}
              <span className="text-[10px] font-mono opacity-70">{t.hero.version}</span>
            </button>
            <span data-testid="hero-meta" className="text-[11px] font-mono tracking-wider text-slate-500">
              {t.hero.meta}
            </span>
          </motion.div>
        </div>

        <motion.div
          data-testid="app-showcase-mockup"
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={intro ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex justify-center"
          style={{ perspective: 1200 }}
        >
          <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-purple-600/30 blur-[110px]" />
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
            <div className="float-slow relative w-[300px] rounded-[2.4rem] border border-purple-400/30 bg-[#0d0916] p-2.5 violet-ring shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)]">
              <img src={PHONE_MAIN} alt="Velora app profile screen" className="rounded-[1.9rem] w-full object-cover aspect-[9/19]" />
              <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-t from-purple-950/40 via-transparent to-white/5 pointer-events-none" />
            </div>
            <div
              className="absolute -right-40 top-20 w-[210px] rounded-[2rem] border border-purple-400/20 bg-[#0d0916] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]"
              style={{ transform: "translateZ(-90px) rotate(6deg)" }}
            >
              <img src={PHONE_SIDE} alt="Velora app upload screen" className="rounded-[1.6rem] w-full object-cover aspect-[9/19] opacity-90" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#features"
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={intro ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono tracking-[0.3em] text-slate-500 hover:text-purple-300 transition-colors"
      >
        {t.hero.scroll}
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
};
