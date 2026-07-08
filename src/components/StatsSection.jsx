import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/siteData.js";
import FadeIn from "./FadeIn.jsx";

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const shouldAnimate = /^\d+(\+|%)?$/.test(value);
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || !shouldAnimate) return;

    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress);

      setCount(Math.floor(easeProgress * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, shouldAnimate, targetNumber]);

  if (!shouldAnimate) {
    return <span ref={ref}>{value}</span>;
  }

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
          className={`rounded-lg p-5 ${
            dark
              ? "border border-white/10 bg-white/[0.06]"
              : "border border-slate-200 bg-white shadow-sm"
          }`}
        >
          <p
            className={`font-display text-4xl font-extrabold tracking-normal ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            <Counter value={stat.value} />
          </p>

          <p className={`mt-2 text-sm ${dark ? "text-slate-300" : "text-darkGray"}`}>
            {stat.label}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
