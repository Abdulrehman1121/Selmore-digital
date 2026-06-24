import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/siteData.js";
import FadeIn from "./FadeIn.jsx";

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse number and suffix (e.g. "8+" -> number 8, suffix "+")
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 1500; // 1.5s animation

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * targetNumber));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({ dark = false }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <FadeIn
          key={stat.label}
          delay={index * 0.06}
          className={`rounded-lg p-5 ${dark ? "border border-white/10 bg-white/[0.06]" : "border border-slate-200 bg-white shadow-sm"}`}
        >
          <p className={`font-display text-4xl font-extrabold tracking-normal ${dark ? "text-white" : "text-navy"}`}>
            <Counter value={stat.value} />
          </p>
          <p className={`mt-2 text-sm ${dark ? "text-slate-300" : "text-darkGray"}`}>{stat.label}</p>
        </FadeIn>
      ))}
    </div>
  );
}
