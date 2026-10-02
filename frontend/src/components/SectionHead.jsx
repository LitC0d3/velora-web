import { motion } from "framer-motion";

export const SectionHead = ({ eyebrow, title, sub, className = "", align = "left", accent = "text-purple-400/80" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
  >
    <p className={`text-xs font-mono tracking-[0.3em] ${accent}`}>{eyebrow}</p>
    <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-4">{title}</h2>
    {sub && <p className="text-base text-slate-400 mt-4">{sub}</p>}
  </motion.div>
);
