import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { industries } from "../data/siteData.js";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading Fade-In Animation (Runs for both Desktop and Mobile once when entering viewport)
      gsap.fromTo(
        containerRef.current.querySelectorAll(".industries-eyebrow, .industries-title, .industries-subtitle"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Trigger early so it's ready when pinning begins
            toggleActions: "play none none none",
          },
        }
      );

      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Desktop: Pinned Stacked Cards Animation
        const cards = gsap.utils.toArray(".desktop-industry-card");
        if (cards.length === 0) return;

        // Position all cards absolutely except the first one to create the stack
        gsap.set(cards.slice(1), {
          y: 120,
          scale: 0.92,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${cards.length * 400}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Update active indicator index dynamically based on scroll progress
              const index = Math.min(
                Math.floor(self.progress * cards.length),
                cards.length - 1
              );
              setActiveCardIndex(index);
            },
          },
        });

        // Stacked cards transition loop
        cards.forEach((card, idx) => {
          if (idx === cards.length - 1) return;

          const currentCard = card;
          const nextCard = cards[idx + 1];

          tl.to(
            currentCard,
            {
              y: -150,
              scale: 0.88,
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            `card-${idx}`
          ).to(
            nextCard,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            `card-${idx}`
          );
        });

      } else {
        // Mobile / Tablet: Simplified Fade Up Scroll Trigger
        const cards = gsap.utils.toArray(".mobile-industry-card");

        // Cards Anim
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="industries-section bg-light px-4 sm:px-6 lg:px-8 overflow-hidden py-10 md:py-16">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl w-full bg-white rounded-[2.5rem] border border-slate-200/80 shadow-soft p-8 md:p-12 lg:p-16 flex items-center min-h-[90vh]"
      >
        
        {/* Desktop Layout: Split Pinned Stack */}
        <div className="hidden lg:grid w-full grid-cols-[0.45fr_0.55fr] gap-16 items-center min-h-[500px]">
          
          {/* Left Column: Fixed Header copy & active counter */}
          <div ref={leftColRef} className="flex flex-col items-start text-left h-full justify-center">
            <p className="industries-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-blue mb-4 opacity-0">
              Industries
            </p>
            <h2 className="industries-title font-display text-4xl font-black leading-tight tracking-tight text-navy mb-6 opacity-0">
              Experience Across Multiple Industries.
            </h2>
            <p className="industries-subtitle text-base leading-relaxed text-slate-500 mb-8 opacity-0">
              Custom digital growth systems engineered for trust, high-intent lead generation, and long-term business value.
            </p>

            {/* Active Counter Indicator */}
            <div className="flex items-center gap-4 mt-4 border-t border-slate-200 pt-6 w-full">
              <span className="font-display text-5xl font-black text-blue">
                {String(activeCardIndex + 1).padStart(2, "0")}
              </span>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Current sector</span>
                <span className="text-sm font-bold text-navy">{industries[activeCardIndex]?.title}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Cards Container */}
          <div ref={cardsContainerRef} className="relative h-[420px] w-full flex items-center justify-center">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`desktop-${ind.title}`}
                  className="desktop-industry-card absolute inset-0 rounded-3xl border border-white/10 bg-navy shadow-xl overflow-hidden flex flex-col justify-end text-left cursor-pointer group"
                  style={{
                    zIndex: industries.length - idx,
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Background Image */}
                  <img
                    src={ind.image}
                    alt={ind.alt || ind.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent z-10" />

                  {/* Card Content */}
                  <div className="relative z-20 p-8 flex flex-col items-start w-full">

                    <div className="flex items-center justify-between w-full">
                      <h3 className="font-display text-2xl font-black tracking-tight text-white">
                        {ind.title}
                      </h3>
                      <Link
                        to={`/industries/${ind.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="rounded-full bg-white/10 p-2 text-white hover:bg-cyan hover:text-navy transition-all"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed max-w-md">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile / Tablet Layout: Non-pinned Single Column Grid */}
        <div className="block lg:hidden text-center w-full">
          <div className="mb-12 max-w-3xl mx-auto flex flex-col items-center">
            <p className="industries-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-blue mb-4 opacity-0">
              Industries
            </p>
            <h2 className="industries-title font-display text-3xl font-extrabold leading-tight tracking-normal text-navy opacity-0">
              Experience Across Multiple Industries.
            </h2>
            <p className="industries-subtitle mt-4 text-sm leading-relaxed text-slate-500 max-w-xl opacity-0">
              Custom growth systems for trust, visibility, and leads.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`mobile-${ind.title}`}
                  className="mobile-industry-card group relative overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-soft h-[320px] flex flex-col justify-end text-left"
                >
                  <img
                    src={ind.image}
                    alt={ind.alt || ind.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent z-10" />

                  <div className="relative z-20 p-6 flex flex-col items-start w-full">

                    <div className="flex items-center justify-between w-full">
                      <h3 className="font-display text-xl font-extrabold tracking-normal text-white">
                        {ind.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </div>
                    <p className="mt-2 text-xs text-slate-300 font-light leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
