import { ArrowRight, CalendarCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedGradientBackground from "./AnimatedGradientBackground.jsx";
import { brandAssets, trustIndicators } from "../data/siteData.js";

const heroImages = [
  brandAssets.heroVisual,
  "/assets/direct/website-growth-laptop.png",
  "/assets/direct/analytics-dashboard-closeup.png",
  "/assets/direct/ai-crm-workspace.png",
  "/assets/direct/mobile-app-screens-direct.png",
];

export default function HeroSection() {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28">
      <AnimatedGradientBackground />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <motion.p
            className="mb-5 inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52 }}
          >
            Strategy. Design. Growth.
          </motion.p>
          <motion.h1
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-normal text-balance md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital Growth, Automated.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Premium websites, smarter marketing, and AI workflows.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Free Consultation
            </Link>
            <Link
              to="/free-website-audit"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan hover:text-cyan"
            >
              Get Growth Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.32 }}
          >
            {trustIndicators.slice(0, 4).map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[1.25] overflow-hidden rounded-lg border border-white/10 shadow-glow bg-navy"
          initial={{ opacity: 0, y: 26, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImageIdx}
              src={heroImages[activeImageIdx]}
              alt="Selmore Digital premium visual showcase"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute -bottom-5 left-5 right-5 z-10 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-navy/80 p-3 backdrop-blur">
            {["Leads", "Visibility", "AI Flow"].map((item) => (
              <span key={item} className="rounded-lg bg-white/8 px-3 py-2 text-center text-xs font-bold text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
