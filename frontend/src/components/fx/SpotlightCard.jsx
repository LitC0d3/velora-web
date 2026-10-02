import { motion } from "framer-motion";

/* Glass card whose glow + gradient border follow the cursor (CSS vars --x/--y, see .spot in index.css).
   Optional `tilt` adds a subtle 3D parallax. */
export const SpotlightCard = ({ children, className = "", gold = false, tilt = false, style, ...rest }) => {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    if (tilt) {
      const rx = ((y / r.height) - 0.5) * -6;
      const ry = ((x / r.width) - 0.5) * 6;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
    }
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        ...style,
        ...(tilt
          ? { transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))", transition: "transform 0.25s ease-out" }
          : {}),
      }}
      className={`spot ${gold ? "spot-gold" : ""} relative overflow-hidden rounded-3xl border border-purple-500/15 bg-[#160F24]/70 backdrop-blur-xl ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
