import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const words = ["Build", "What's", "Next."];

export default function HeroVideoZoom() {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoWrapper = videoWrapperRef.current;

      if (!videoWrapper) return;

      // Zoom animation for video on scroll
      gsap.fromTo(
        videoWrapper,
        {
          width: "70%",
          height: "auto",
          borderRadius: "20px",
        },
        {
          scrollTrigger: {
            trigger: ".video-zoom-section",
            start: "top 80%",
            end: "center center",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
          width: "100%",
          height: "auto",
          borderRadius: "0px",
          ease: "power2.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollDownToContent = () => {
    const videoSection = document.querySelector(".video-zoom-section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-navy">
      {/* SECTION 1: Hero with heading, paragraph, and CTA buttons */}
      <section className="relative w-full min-h-screen bg-navy pt-32 sm:pt-40 lg:pt-48 flex items-center justify-center">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue/15 blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 bg-signal-grid opacity-5" />

        <div className="hero-intro-content pointer-events-auto relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
          <motion.h1
            className="mb-6 bg-gradient-to-b from-white to-slate-300 bg-clip-text font-display text-5xl font-extrabold leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build What's Next.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selmore Digital helps ambitious businesses build, market, and scale through high-performing websites, AI-powered automation, custom software, SEO, and performance marketing. We don't just deliver projects—we create digital systems that generate measurable business growth.
          </motion.p>

          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-bold text-navy transition hover:bg-cyan sm:px-7 sm:py-3 sm:text-base"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Free Strategy Call
            </Link>

            <button
              onClick={scrollDownToContent}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan hover:bg-white/10 hover:text-cyan sm:px-7 sm:py-3 sm:text-base"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Video as Hero Background with Overlay and Centered Heading */}
      <section className="video-zoom-section relative w-full min-h-screen bg-navy flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            ref={videoWrapperRef}
            className="hero-video-wrapper relative w-full h-full"
          >
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src="/carousel_Video.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                muted
                playsInline
                loop
                autoPlay
                preload="auto"
              />
              
              {/* Dark overlay layers */}
              <div className="absolute inset-0 z-10 bg-navy/65" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/80" />
              
              {/* Cyan glow behind heading */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[90px] z-5" />
              
              {/* Centered content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
                <motion.p
                  className="mb-5 text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-cyan"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  DIGITAL GROWTH • AI • TECHNOLOGY
                </motion.p>

                <motion.div
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight text-white"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {words.map((word, idx) => (
                    <motion.span key={idx} variants={wordVariants} className="inline-block mr-3">
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="pointer-events-none relative z-20 flex justify-center py-8 text-slate-500 sm:py-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
            Scroll to explore
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-cyan" />
        </div>
      </div>
    </div>
  );
}
