import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* Animates the numeric part of strings like "0", "4K", "85%", "8.0+" when scrolled into view. */
export const CountUp = ({ value, duration = 1.6, className = "", testid }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = String(value).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseFloat(match[2]);
    const decimals = (match[2].split(".")[1] || "").length;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(`${match[1]}${(target * eased).toFixed(decimals)}${match[3]}`);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <span ref={ref} className={className} data-testid={testid}>
      {display}
    </span>
  );
};
