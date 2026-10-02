import { motion } from "framer-motion";

/* Section heading with word-by-word masked reveal + animated eyebrow rule. */
export const SectionHead = ({ eyebrow, title, sub, className = "", align = "left", accent = "text-purple-400/80", testid }) => {
  const words = title.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      data-testid={testid}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <motion.p
        variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
        className={`flex items-center gap-3 text-xs font-mono tracking-[0.3em] ${accent} ${align === "center" ? "justify-center" : ""}`}
      >
        <motion.span
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
          className="h-px w-8 origin-left bg-current"
        />
        {eyebrow}
      </motion.p>
      <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-4 leading-[1.1]">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.28em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h2>
      {sub && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.35 } } }}
          className="text-base text-slate-400 mt-4"
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
};
