import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import gsap from "gsap";
import ServiceOrbitHero from "./ServiceOrbitHero.jsx";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const paragraphsRef = useRef(null);
  const ctasRef = useRef(null);
  const trustRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const logo = document.querySelector(".nav-logo");
    if (logo) {
      tl.fromTo(logo, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 });
    }

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.3"
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 25, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        paragraphsRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ctasRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        trustRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        canvasRef.current,
        { opacity: 0 },
        { opacity: 0.5, duration: 1.8 },
        "-=0.8"
      );
  }, []);

  // Canvas Ecosystem Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const particles = [];
    const particleCount = 85;
    const maxDistance = 125;
    const mouse = { x: null, y: null, radius: 180 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        this.radius = Math.random() * 2 + 1;
        this.baseColor = Math.random() > 0.5 ? "#06b6d4" : "#3b82f6"; // Cyan / Blue
        this.color = this.baseColor;
        this.alpha = Math.random() * 0.3 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.baseColor;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }

      update() {
        // Boundary check
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Hover attraction/repulsion effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Accelerate slightly towards mouse pointer
            this.x += (dx / distance) * force * 0.8;
            this.y += (dy / distance) * force * 0.8;
            this.color = "#10b981"; // change color to emerald green on hover
            this.alpha = Math.min(this.alpha + 0.02, 0.8);
          } else {
            this.color = this.baseColor;
            this.alpha = Math.max(this.alpha - 0.01, 0.25);
          }
        }
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.strokeStyle = p1.color === "#10b981" || p2.color === "#10b981" ? "#10b981" : "#ffffff";
            ctx.lineWidth = 1;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      init();
    };

    // Listen on the section container so it tracks across the whole hero background
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollDownToWork = () => {
    const worksSection = document.getElementById("featured-works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-navy px-2 pb-20 pt-20 text-white sm:px-4 lg:px-5 lg:pb-28 lg:pt-28 flex items-center overflow-hidden"
    >
      {/* Background Interactive Nodes Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50"
      />

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan/10 blur-[130px] z-0" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue/15 blur-[160px] z-0" />

      {/* Content Container (Centered max-w-4xl) */}
      <div className="relative mx-auto max-w-6xl w-full z-10 text-left">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex flex-col">
            <p
              ref={eyebrowRef}
              className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-cyan sm:text-sm"
            >
            DIGITAL GROWTH • AI • TECHNOLOGY
          </p>

          <h1
            ref={titleRef}
            className="hero-typing mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl min-h-[1.2em]"
          >
            Build What's Next.
          </h1>

          <div ref={paragraphsRef} className="space-y-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            <p className="font-bold text-white text-lg">Business has changed.</p>
            <p>
              Customers expect better digital experiences. Search engines demand faster, smarter websites. 
              Artificial Intelligence is transforming how companies operate. Competition grows every day.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctasRef}
            className="mt-8 flex flex-wrap gap-4 sm:gap-5"
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan hover:text-navy sm:px-7 sm:text-base shadow-lg shadow-blue/20"
            >
              <CalendarCheck className="h-5 w-5" />
              Start Your Project
            </Link>

            <button
              onClick={scrollDownToWork}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan hover:bg-white/10 hover:text-cyan sm:px-7 sm:text-base"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Small Trust Line */}
          <div ref={trustRef} className="mt-8 border-t border-white/10 pt-6 w-full">
            <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
              Helping businesses grow through strategy, technology, AI, and measurable digital experiences.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <ServiceOrbitHero />
        </div>        </div>      </div>

      <div className="lg:hidden mt-12 px-2">
        <ServiceOrbitHero />
      </div>
    </section>
  );
}