import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LOGO_SRC = "/assets/selmore-digital-logo.jpeg";

const SHARD_CLIPS = [
  "polygon(0% 0%, 100% 3%, 96% 100%, 4% 96%)",
  "polygon(4% 0%, 100% 0%, 100% 94%, 0% 100%)",
  "polygon(0% 5%, 95% 0%, 100% 100%, 5% 96%)",
  "polygon(2% 0%, 100% 6%, 94% 100%, 0% 94%)",
  "polygon(0% 0%, 96% 2%, 100% 96%, 3% 100%)",
  "polygon(5% 2%, 100% 0%, 94% 98%, 0% 100%)",
];

const CORNERS = [
  { name: "top-left", xSide: 1, ySide: 1 },
  { name: "top-right", xSide: -1, ySide: 1 },
  { name: "bottom-right", xSide: -1, ySide: -1 },
  { name: "bottom-left", xSide: 1, ySide: -1 },
];

export default function LogoAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const gridRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    // Determine grid size (7x7 for desktop, 5x5 for mobile)
    const GRID = window.innerWidth < 700 ? 5 : 7;
    const gridContainer = gridRef.current;
    if (!gridContainer) return;

    // --- Build Shard Tiles ---
    gridContainer.style.gridTemplateColumns = `repeat(${GRID}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${GRID}, 1fr)`;
    gridContainer.innerHTML = "";

    const wraps = [];
    const tiles = [];

    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const wrap = document.createElement("div");
        wrap.className = "tile-wrap";
        wrap.style.width = "100%";
        wrap.style.height = "100%";

        const tile = document.createElement("div");
        tile.className = "tile";
        tile.style.width = "100%";
        tile.style.height = "100%";
        tile.style.backgroundImage = `url("${LOGO_SRC}")`;
        tile.style.backgroundSize = `${GRID * 100}% ${GRID * 100}%`;
        tile.style.backgroundPosition = `${(col / (GRID - 1)) * 100}% ${(row / (GRID - 1)) * 100}%`;
        tile.style.clipPath = SHARD_CLIPS[(row + col) % SHARD_CLIPS.length];
        tile.style.backfaceVisibility = "hidden";

        wrap.appendChild(tile);
        gridContainer.appendChild(wrap);
        wraps.push(wrap);
        tiles.push(tile);
      }
    }

    // --- Ambient Floating Animations ---
    const ambientTweens = tiles.map((tile) => {
      return gsap.to(tile, {
        x: gsap.utils.random(-8, 8),
        y: gsap.utils.random(-8, 8),
        z: gsap.utils.random(-20, 20),
        rotation: gsap.utils.random(-6, 6),
        duration: gsap.utils.random(2.4, 4.2),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 2),
      });
    });

    // --- Interactive Mouse-Parallax on Fragment Layer ---
    const onMouseMoveParallax = (e) => {
      if (!layerRef.current) return;
      const { clientX, clientY } = e;
      const xOffset = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const yOffset = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      gsap.to(layerRef.current, {
        rotateX: -yOffset * 12,
        rotateY: xOffset * 12,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("mousemove", onMouseMoveParallax);

    // --- Particle Background with Attraction ---
    let animationFrameId;
    let width, height, particles = [];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const onMouseMoveCanvas = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeaveCanvas = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mousemove", onMouseMoveCanvas);
    window.addEventListener("mouseleave", onMouseLeaveCanvas);

    const particleCount = Math.min(90, Math.floor(window.innerWidth / 18));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 0.5,
        density: Math.random() * 20 + 10,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient wash style indicator
      ctx.fillStyle = "rgba(34, 211, 238, 0.45)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Magnetic hover attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const directionX = dx / dist;
            const directionY = dy / dist;
            const pull = force * 1.5;

            p.x += directionX * pull;
            p.y += directionY * pull;
          } else {
            // Drift back to normal motion
            p.x += p.vx;
            p.y += p.vy;
          }
        } else {
          p.x += p.vx;
          p.y += p.vy;
        }

        // Viewport boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw cybernetic grid lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 115) {
            const opacity = 0.16 * (1 - dist / 115);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    // --- Helper Functions for Section Positions ---
    const getGridSize = () => {
      const rect = gridContainer.getBoundingClientRect();
      return { w: rect.width || 160, h: rect.height || 160 };
    };

    const getHeroCenterXY = () => {
      const { w, h } = getGridSize();
      return {
        x: (window.innerWidth - w) / 2,
        y: (window.innerHeight - h) / 2,
      };
    };

    const getCornerXY = (index) => {
      const { w, h } = getGridSize();
      const margin = window.innerWidth < 700 ? 16 : 32;
      const navSafe = window.innerWidth < 700 ? 86 : 98;
      const bottomSafe = window.innerWidth < 700 ? 22 : 36;
      const corner = CORNERS[index % CORNERS.length].name;

      return {
        x: corner.includes("right") ? window.innerWidth - w - margin : margin,
        y: corner.includes("bottom") ? window.innerHeight - h - bottomSafe : navSafe,
      };
    };

    const getFinalAnchorXY = () => {
      const anchor = document.getElementById("final-logo-anchor");
      if (!anchor) return getHeroCenterXY();
      const { w, h } = getGridSize();
      const r = anchor.getBoundingClientRect();
      return {
        x: r.left + (r.width - w) / 2,
        y: r.top + (r.height - h) / 2,
      };
    };

    // --- Setup Scatter Coordinates ---
    const baseScatter = wraps.map((_, i) => {
      const row = Math.floor(i / GRID);
      const col = i % GRID;
      const fromCenterX = col - (GRID - 1) / 2;
      const fromCenterY = row - (GRID - 1) / 2;
      const angle = Math.atan2(fromCenterY, fromCenterX) + gsap.utils.random(-0.85, 0.85);
      const dist = gsap.utils.random(130, 380);

      return {
        dx: Math.cos(angle) * dist + gsap.utils.random(-80, 80),
        dy: Math.sin(angle) * dist + gsap.utils.random(-80, 80),
        z: gsap.utils.random(-260, 260),
        rot: gsap.utils.random(-130, 130),
        rotX: gsap.utils.random(-80, 80),
        rotY: gsap.utils.random(-120, 120),
        scale: gsap.utils.random(0.72, 1.24),
      };
    });

    const makeHeroScatter = () => {
      const safeX = window.innerWidth * 0.46;
      const safeY = window.innerHeight * 0.40;

      return wraps.map((_, i) => {
        const row = Math.floor(i / GRID);
        const col = i % GRID;
        const fromCenterX = col - (GRID - 1) / 2;
        const fromCenterY = row - (GRID - 1) / 2;
        const baseAngle = Math.atan2(fromCenterY, fromCenterX);
        const angle = baseAngle + gsap.utils.random(-1.35, 1.35);

        const radius = gsap.utils.random(0.44, 1.05);
        const sideKick = i % 3 === 0 ? gsap.utils.random(-safeX, safeX) : 0;

        return {
          x: Math.cos(angle) * safeX * radius + sideKick * 0.35 + gsap.utils.random(-120, 120),
          y: Math.sin(angle) * safeY * radius + gsap.utils.random(-110, 110),
          z: gsap.utils.random(-520, 520),
          rot: gsap.utils.random(-260, 260),
          rotX: gsap.utils.random(-180, 180),
          rotY: gsap.utils.random(-220, 220),
          scale: gsap.utils.random(0.42, 1.38),
          opacity: gsap.utils.random(0.12, 0.42),
        };
      });
    };

    let heroScatter = makeHeroScatter();

    // --- Animation states ---
    const instantHeroBroken = () => ({
      x: (i) => heroScatter[i].x,
      y: (i) => heroScatter[i].y,
      z: (i) => heroScatter[i].z,
      rotation: (i) => heroScatter[i].rot,
      rotationX: (i) => heroScatter[i].rotX,
      rotationY: (i) => heroScatter[i].rotY,
      scale: (i) => heroScatter[i].scale,
      opacity: (i) => heroScatter[i].opacity,
      overwrite: true,
      immediateRender: true,
    });

    const heroHiddenBroken = () => ({
      x: (i) => heroScatter[i].x,
      y: (i) => heroScatter[i].y,
      z: (i) => heroScatter[i].z,
      rotation: (i) => heroScatter[i].rot,
      rotationX: (i) => heroScatter[i].rotX,
      rotationY: (i) => heroScatter[i].rotY,
      scale: (i) => heroScatter[i].scale,
      opacity: (i) => heroScatter[i].opacity,
      ease: "none",
      overwrite: "auto",
    });

    const assembled = {
      x: 0,
      y: 0,
      z: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      opacity: 0.98,
      stagger: { each: 0.004, from: "center" },
      ease: "power2.inOut",
      overwrite: "auto",
    };

    const softBroken = (cornerIndex, strength = 0.3) => {
      const c = CORNERS[cornerIndex % CORNERS.length];
      return {
        x: (i) => baseScatter[i].dx * c.xSide * strength,
        y: (i) => baseScatter[i].dy * c.ySide * strength,
        z: (i) => baseScatter[i].z * strength,
        rotation: (i) => baseScatter[i].rot * strength,
        rotationX: (i) => baseScatter[i].rotX * strength,
        rotationY: (i) => baseScatter[i].rotY * strength,
        scale: (i) => 1 + (baseScatter[i].scale - 1) * 0.32,
        opacity: 0.44,
        stagger: { each: 0.003, from: "random" },
        ease: "power2.inOut",
        overwrite: "auto",
      };
    };

    const gridTo = (posFn) => ({
      x: () => posFn().x,
      y: () => posFn().y,
      ease: "power2.inOut",
      overwrite: "auto",
    });

    const FULL_CLIP = "polygon(-0.5% -0.5%, 100.5% -0.5%, 100.5% 100.5%, -0.5% 100.5%)";
    const getShardClip = (i) => {
      const row = Math.floor(i / GRID);
      const col = i % GRID;
      return SHARD_CLIPS[(row + col) % SHARD_CLIPS.length];
    };

    // --- Master Timeline ---
    const finalLogoImg = document.getElementById("final-logo-img");
    const finalAnchor = document.getElementById("final-logo-anchor");

    // Clean initial state
    if (finalLogoImg) gsap.set(finalLogoImg, { opacity: 0, scale: 0.9 });
    if (finalAnchor) finalAnchor.classList.remove("is-visible");

    gsap.set(gridContainer, {
      left: 0,
      top: 0,
      x: () => getHeroCenterXY().x,
      y: () => getHeroCenterXY().y,
      opacity: 0,
      scale: 1,
      transformOrigin: "50% 50%",
      force3D: true,
      willChange: "transform, opacity",
    });

    gsap.set(wraps, instantHeroBroken());
    gsap.set(tiles, { clipPath: (i) => getShardClip(i) });

    // Timeline trigger scroll space
    const master = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        id: "logo-master-smooth",
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.2, // Smoother follow scroll with slight spring latency
        invalidateOnRefresh: true,
      },
    });

    master
      /* Start hidden in hero view. Fades in and moves as scroll starts */
      .to(gridContainer, { opacity: 0, duration: 1.2 }, 0)
      .to(wraps, heroHiddenBroken(), 0)
      .to(tiles, { clipPath: (i) => getShardClip(i), duration: 0.1 }, 0)

      /* FIRST CONVERGENCE: TOP-RIGHT (Section 1/2 transition) */
      .to(gridContainer, { ...gridTo(() => getCornerXY(1)), opacity: 1, duration: 3.4 }, 0.8)
      .to(wraps, assembled, 0.8)
      .to(tiles, { clipPath: FULL_CLIP, duration: 2.2 }, 2.0) // Transition shards into a seamless full image
      .to(gridContainer, { ...gridTo(() => getCornerXY(1)), opacity: 0.96, duration: 2.8 }, 4.2)
      .to(wraps, assembled, 4.2)

      /* SECOND CONVERGENCE: TOP-LEFT */
      .to(tiles, { clipPath: (i) => getShardClip(i), duration: 1.0 }, 7.0) // Turn back into shards as they break apart
      .to(wraps, softBroken(1, 0.3), 7.0)
      .to(gridContainer, { ...gridTo(() => getCornerXY(0)), opacity: 0.74, duration: 4.0 }, 7.0)
      .to(wraps, softBroken(0, 0.3), 8.4)
      .to(wraps, assembled, 11.4)
      .to(tiles, { clipPath: FULL_CLIP, duration: 2.2 }, 12.0) // Merge into a seamless full image
      .to(gridContainer, { ...gridTo(() => getCornerXY(0)), opacity: 0.96, duration: 2.8 }, 11.4)
      .to(gridContainer, { ...gridTo(() => getCornerXY(0)), opacity: 0.96, duration: 2.8 }, 14.2)
      .to(wraps, assembled, 14.2)

      /* THIRD CONVERGENCE: BOTTOM-RIGHT */
      .to(tiles, { clipPath: (i) => getShardClip(i), duration: 1.0 }, 17.0) // Morph to shards on break
      .to(wraps, softBroken(0, 0.3), 17.0)
      .to(gridContainer, { ...gridTo(() => getCornerXY(2)), opacity: 0.74, duration: 4.0 }, 17.0)
      .to(wraps, softBroken(2, 0.3), 18.5)
      .to(wraps, assembled, 21.5)
      .to(tiles, { clipPath: FULL_CLIP, duration: 2.2 }, 22.0) // Merge into a seamless full image
      .to(gridContainer, { ...gridTo(() => getCornerXY(2)), opacity: 0.96, duration: 2.8 }, 21.5)
      .to(gridContainer, { ...gridTo(() => getCornerXY(2)), opacity: 0.96, duration: 2.8 }, 24.3)
      .to(wraps, assembled, 24.3)

      /* FINAL CONVERGENCE: CENTER OF CTA SECTION */
      .to(tiles, { clipPath: (i) => getShardClip(i), duration: 1.0 }, 27.2) // Morph to shards on break
      .to(wraps, softBroken(2, 0.28), 27.2)
      .to(gridContainer, { ...gridTo(getFinalAnchorXY), opacity: 0.7, duration: 2.2 }, 27.2)
      .to(wraps, assembled, 29.4)
      .to(tiles, { clipPath: FULL_CLIP, duration: 1.2 }, 29.4) // Merge into a seamless full image
      .to(gridContainer, { ...gridTo(getFinalAnchorXY), opacity: 0.92, duration: 1.0 }, 29.4)

      /* Rebuilt cross-fade cleanly into the static high-res logo asset */
      .add(() => {
        if (finalAnchor) {
          if (master.time() > 30.0) {
            finalAnchor.classList.add("is-visible");
          } else {
            finalAnchor.classList.remove("is-visible");
          }
        }
      }, 30.6)
      .to(finalLogoImg, { opacity: 1, scale: 1, duration: 1.2, ease: "sine.out" }, 30.6)
      .to(gridContainer, { opacity: 0, duration: 1.2, ease: "sine.out" }, 30.8);

    // Dynamic hover pulse glow on grid container
    const pulseTween = gsap.to(gridContainer, {
      filter: "drop-shadow(0 0 28px rgba(34,211,238,0.48))",
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Refresh ScrollTriggers for accuracy
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // --- Cleanup logic ---
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMoveCanvas);
      window.removeEventListener("mouseleave", onMouseLeaveCanvas);
      window.removeEventListener("mousemove", onMouseMoveParallax);
      cancelAnimationFrame(animationFrameId);

      // Kill ambient tweens
      ambientTweens.forEach((t) => t.kill());
      pulseTween.kill();

      // Kill main scrolltrigger
      const st = ScrollTrigger.getById("logo-master-smooth");
      if (st) st.kill();
      master.kill();

      // Reset final anchors if navigated away
      if (finalAnchor) finalAnchor.classList.remove("is-visible");
      if (finalLogoImg) gsap.set(finalLogoImg, { opacity: 0, scale: 0.9 });
    };
  }, []);

  return (
    <div ref={containerRef} className="logo-anim-container pointer-events-none">
      {/* Dynamic connecting space background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
      />

      {/* Decorative Shard Grid Layer */}
      <div id="fragment-layer" ref={layerRef}>
        <div id="fragment-grid" ref={gridRef} />
      </div>
    </div>
  );
}
