import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VisualImage from "./VisualImage.jsx";
import { services } from "../data/siteData.js";

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  // Core 8 services
  const carouselServices = services.slice(0, 8);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselServices.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselServices.length) % carouselServices.length);
  };

  // Start/Reset Autoplay Timer (5 seconds)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        slideNext();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentIndex]);

  const activeService = carouselServices[currentIndex];
  const Icon = activeService.icon;

  // Animation variants for full-slide sliding/fading
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      slideNext();
    } else if (info.offset.x > swipeThreshold) {
      slidePrev();
    }
  };

  return (
    <div
      className="relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {/* The main focus image */}
            <VisualImage
              src={activeService.image}
              alt={activeService.imageAlt}
              className="h-full w-full rounded-none"
              imgClassName="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/15 md:from-navy/90 md:via-navy/50 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Content Card (Glassmorphism + Dark Tech Glow) */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-full flex-col justify-center px-6 sm:px-12 md:max-w-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-navy/80 p-6 shadow-glow backdrop-blur-md md:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/12 text-cyan">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Featured Service</p>
            </div>

            <h3 className="mt-4 font-display text-3xl font-extrabold tracking-normal text-white md:text-4xl">
              {activeService.title}
            </h3>
            
            {/* One-line description only */}
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {activeService.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeService.benefits.slice(0, 3).map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-slate-300 border border-white/5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  {benefit}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to={activeService.path}
                className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-cyan"
              >
                Explore Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={slidePrev}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-navy/80 text-white backdrop-blur transition hover:border-cyan hover:text-cyan"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={slideNext}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-navy/80 text-white backdrop-blur transition hover:border-cyan hover:text-cyan"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselServices.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-cyan shadow-cyan/50" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
