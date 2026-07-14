import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";

export default function HeroVideoZoom() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const heroTitle = "BUILD WHAT'S NEXT.";

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-navy">
      {/* HERO VIDEO SECTION */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-navy">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/carousel_Video.mp4"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
          />

          {/* Dark overlay layers */}
          <div className="absolute inset-0 z-10 bg-navy/45" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/70" />

          {/* Cyan glow behind content */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/25 blur-[100px]" />
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <motion.p
            className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-cyan sm:text-sm"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            DIGITAL GROWTH • AI • TECHNOLOGY
          </motion.p>

          <motion.h1
            className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <span
              className="hero-typing-smooth inline-block"
              style={{ "--steps": heroTitle.length }}
            >
              <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                {heroTitle}
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Selmore Digital helps ambitious businesses build, market, and scale through high-performing websites, AI-powered automation, custom software, SEO, and performance marketing.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-bold text-navy transition hover:bg-cyan sm:px-7 sm:text-base"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Free Strategy Call
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan hover:bg-white/10 hover:text-cyan sm:px-7 sm:text-base"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400">
          <span className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
            Scroll to explore
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-cyan" />
        </div>
      </section>
    </div>
  );
}