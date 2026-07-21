import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Strategy", "Design", "Growth", "Automation"];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const glowRingRef = useRef(null);

  useEffect(() => {
    // --- Simulate Organic Load Progress ---
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      
      // Animate progress percentage from 0 to 100 with ease-in-out
      gsap.to(obj, {
        val: 100,
        duration: 3.2,
        ease: "power2.out",
        onUpdate: () => {
          const currentProgress = Math.floor(obj.val);
          setProgress(currentProgress);
          
          // Map progress value to the cycling words
          const idx = Math.min(
            WORDS.length - 1,
            Math.floor((currentProgress / 100) * WORDS.length)
          );
          setWordIdx(idx);

          // Update progress bar width directly in DOM for performance
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${currentProgress}%`;
          }
        },
        onComplete: () => {
          // Play the dramatic exit reveal animation
          const exitTl = gsap.timeline({
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });

          exitTl
            .to(glowRingRef.current, {
              scale: 1.4,
              opacity: 0,
              duration: 0.6,
              ease: "power3.inOut"
            })
            .to(containerRef.current, {
              clipPath: "circle(0% at 50% 50%)", // High-end circular clip-wipe reveal
              duration: 1.0,
              ease: "power4.inOut"
            }, "-=0.3")
            .to(containerRef.current, {
              opacity: 0,
              duration: 0.35
            }, "-=0.4");
        }
      });

      // Subtle pulse and float on the central logo ring
      gsap.to(glowRingRef.current, {
        scale: 1.06,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: "circle(150% at 50% 50%)" }} // Starting clip path for curtain reveal
    >
      {/* Premium Background Gradient Wash */}
      <div className="preloader-bg-wash" />

      {/* Main Logo & Glowing Rings Assembly */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing aura circles */}
        <div 
          ref={glowRingRef}
          className="relative flex items-center justify-center w-36 h-36"
        >
          {/* Cyan dash spin ring */}
          <div className="absolute inset-0 border border-dashed border-cyan/35 rounded-full animate-spin-slow" />
          
          {/* Inner rotating gradient ring */}
          <div className="absolute inset-2 border-2 border-transparent border-t-cyan border-r-blue/40 border-b-green border-l-transparent rounded-full animate-spin" style={{ animationDuration: "3s" }} />

          {/* Logo Mark */}
          <img
            src="/assets/Selmore bg icon.png"
            alt="Selmore Digital Loader"
            className="w-24 h-24 rounded-full object-cover z-10 shadow-[0_0_36px_rgba(34,211,238,0.3)] border border-white/10"
          />
        </div>

        {/* Fading Cycle Words */}
        <div className="mt-8 h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={wordIdx}
              className="text-xs font-bold tracking-[0.4em] text-cyan uppercase text-center"
              initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              exit={{ opacity: 0, y: -10, letterSpacing: "0.6em" }}
              transition={{ duration: 0.42, ease: "easeInOut" }}
            >
              {WORDS[wordIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage text */}
        <span className="mt-2 text-xs font-mono text-slate-400 tracking-wider">
          {progress}%
        </span>
      </div>

      {/* Bottom Horizontal Sleek Progress Bar */}
      <div className="absolute bottom-16 left-10 right-10 max-w-sm mx-auto z-10">
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            ref={progressLineRef}
            className="h-full w-0 bg-gradient-to-r from-blue via-cyan to-green rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
