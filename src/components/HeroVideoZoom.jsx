import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoZoom() {
  const containerRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoSection = videoSectionRef.current;
      const videoWrapper = videoWrapperRef.current;

      if (!videoSection || !videoWrapper) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSection,
          start: "top center",
          end: "+=120%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        videoWrapper,
        {
          width: "55%",
          height: "55vh",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
        },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          boxShadow: "none",
          ease: "none",
        }
      );

      tl.to(
        ".hero-intro-content",
        {
          opacity: 0,
          y: -70,
          ease: "none",
        },
        0
      );

      tl.fromTo(
        ".hero-fs-overlay",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        0.55
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollDownToContent = () => {
    const nextSection = document.querySelector("#features") || containerRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-navy">
      <section
        ref={videoSectionRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden"
      >
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue/15 blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 bg-signal-grid opacity-10" />

        <div className="hero-intro-content pointer-events-auto relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center pt-24 pb-10 sm:pt-28 lg:pt-32">
          <motion.p
            className="mb-4 inline-flex rounded-lg border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DIGITAL GROWTH • AI • TECHNOLOGY
          </motion.p>

          <motion.h1
            className="mb-4 bg-gradient-to-b from-white to-slate-300 bg-clip-text font-display text-4xl font-extrabold leading-none tracking-tight text-transparent sm:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Build What’s Next.
          </motion.h1>

          <motion.p
            className="mb-6 max-w-xl text-base font-medium text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Selmore Digital helps ambitious businesses build, market, and scale through high-performing websites, AI-powered automation, custom software, SEO, and performance marketing. We don’t just deliver projects—we create digital systems that generate measurable business growth.
          </motion.p>

          <motion.div
            className="mb-6 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 text-xs font-bold text-navy transition hover:bg-cyan sm:text-sm"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Free Strategy Call
            </Link>

            <button
              onClick={scrollDownToContent}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-xs font-bold text-white transition hover:border-cyan hover:text-cyan sm:text-sm"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            className="grid gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-400 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span>United States • Canada • Pakistan</span>
            <span>Web • AI • Marketing • Automation</span>
            <span>Startups • SMEs • Enterprises</span>
          </motion.div>
        </div>

        <div
          ref={videoWrapperRef}
          className="hero-video-wrapper relative z-10 mt-12 w-full max-w-[1920px] min-h-[72vh] overflow-hidden sm:mt-16"
        >
          <video
            ref={videoRef}
            src="/carousel_Video.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            loop
            autoPlay
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/35 to-navy/85" />

          <div className="hero-fs-overlay absolute inset-0 z-20 mx-auto flex max-w-4xl flex-col items-center justify-center p-6 text-center opacity-0">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-md border border-cyan/30 bg-cyan/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan backdrop-blur-sm">
              <Activity className="h-3.5 w-3.5 text-cyan" />
              Dynamic Innovation
            </span>

            <h2 className="mb-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Engineering Value.
              <br />
              <span className="text-cyan">Maximizing Scalability.</span>
            </h2>

            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
              We combine visual storytelling, growth strategy, and smart automation into one scalable digital system.
            </p>

            <button
              onClick={scrollDownToContent}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-xs font-bold text-navy transition hover:bg-white sm:text-sm"
            >
              Scroll to Explore
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="hero-intro-content pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-500">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Scroll to zoom
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-cyan" />
        </div>
      </section>
    </div>
  );
}
