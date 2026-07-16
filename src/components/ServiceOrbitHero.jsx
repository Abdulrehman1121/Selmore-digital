import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  ShoppingCart,
  Search,
  TrendingUp,
  Share2,
  PenTool,
  Cpu,
  Users,
  MessageSquare,
  BotMessageSquare,
  Target,
  Code2,
  Smartphone,
  BarChart3,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data — 14 services split across 4 orbit rings
// ---------------------------------------------------------------------------
const SERVICES = [
  {
    id: "seo",
    label: "SEO",
    icon: Search,
    ring: 1,
    desc: "Search-ready strategies that drive organic visibility.",
  },
  {
    id: "ai-chatbots",
    label: "AI Chatbots",
    icon: BotMessageSquare,
    ring: 1,
    desc: "Conversational bots that convert and support users.",
  },

  {
    id: "ai-automation",
    label: "AI Automation",
    icon: Cpu,
    ring: 2,
    desc: "Smart systems that automate growth and operations.",
  },
  {
    id: "crm-automation",
    label: "CRM Automation",
    icon: Users,
    ring: 2,
    desc: "Customer workflows that stay connected and efficient.",
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    icon: Target,
    ring: 2,
    desc: "Qualified pipelines designed to keep your calendar full.",
  },

  {
    id: "website-development",
    label: "Website Development",
    icon: Monitor,
    ring: 3,
    desc: "High-performing websites built for conversion.",
  },
  {
    id: "custom-software",
    label: "Custom Software",
    icon: Code2,
    ring: 3,
    desc: "Tailored systems for the exact way your business works.",
  },
  {
    id: "analytics-reporting",
    label: "Analytics & Reporting",
    icon: BarChart3,
    ring: 3,
    desc: "Actionable insights from every digital touchpoint.",
  },

  {
    id: "ecommerce-development",
    label: "Ecommerce Development",
    icon: ShoppingCart,
    ring: 4,
    desc: "Shop experiences that sell with speed and polish.",
  },
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    icon: TrendingUp,
    ring: 4,
    desc: "Growth campaigns designed to scale revenue quickly.",
  },
  {
    id: "branding-creative",
    label: "Branding & Creative",
    icon: PenTool,
    ring: 4,
    desc: "Premium visuals and messaging for modern brands.",
  },

  {
    id: "social-media-marketing",
    label: "Social Media Marketing",
    icon: Share2,
    ring: 4,
    desc: "Creative networks that turn engagement into action.",
  },
  {
    id: "whatsapp-automation",
    label: "WhatsApp Automation",
    icon: MessageSquare,
    ring: 4,
    desc: "Instant messaging funnels for real-time lead flow.",
  },
  {
    id: "mobile-app-development",
    label: "Mobile App Development",
    icon: Smartphone,
    ring: 4,
    desc: "Mobile experiences that feel premium and intuitive.",
  },
];

const ACTIVE_SERVICES = SERVICES.filter((s) => s.ring !== 4);

// Radii are expressed as a fraction of the scene's half-width, so the whole
// orbit scales fluidly with .service-orbit-wrapper instead of assuming a
// fixed pixel design box. The orbits are perfect circles using the same radius
// for both X and Y.
const RING_CONFIG = {
  1: { radiusFrac: 0.16, durationSec: 24, direction: 1 },
  2: { radiusFrac: 0.30, durationSec: 34, direction: -1 },
  3: { radiusFrac: 0.44, durationSec: 44, direction: 1 },
};

function buildPlanets() {
  const byRing = {};

  ACTIVE_SERVICES.forEach((service) => {
    if (!byRing[service.ring]) {
      byRing[service.ring] = [];
    }

    byRing[service.ring].push(service);
  });

  return ACTIVE_SERVICES.map((service) => {
    const ringItems = byRing[service.ring];
    const index = ringItems.findIndex((item) => item.id === service.id);
    const baseAngle = (360 / ringItems.length) * index;

    return {
      ...service,
      baseAngle,
      floatPhase: Math.random() * Math.PI * 2,
    };
  });
}

export default function ServiceOrbitHero() {
  const planets = useRef(buildPlanets()).current;
  const sceneRef = useRef(null);
  const nodeRefs = useRef({});
  const halfWidthRef = useRef(340); // sensible default before first measure
  const ringAngleRef = useRef({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const pausedRingsRef = useRef(new Set());
  const [pausedRings, setPausedRings] = useState(new Set());
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    pausedRingsRef.current = pausedRings;
  }, [pausedRings]);

  // Keep the orbit radius in sync with the actual rendered size of the scene
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return undefined;

    const measure = () => {
      halfWidthRef.current = el.offsetWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;

    const positionPlanet = (p, angleDeg, floatOffset = 0) => {
      const cfg = RING_CONFIG[p.ring];
      const half = halfWidthRef.current;
      const rad = (angleDeg * Math.PI) / 180;

      // Perfect circle orbit - matches the guide ring diameter (CSS width of scene is 2 * half)
      const radius = cfg.radiusFrac * half * 2;

      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;

      // Keep all services visible properly
      const scale = 1;
      const opacity = 1;

      const el = nodeRefs.current[p.id];
      if (!el) return;

      el.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(20 + p.ring);
    };

    if (reducedMotionRef.current) {
      planets.forEach((p) => positionPlanet(p, p.baseAngle, 0));
      return undefined;
    }

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      Object.keys(RING_CONFIG).forEach((ringKey) => {
        const ring = Number(ringKey);
        const cfg = RING_CONFIG[ring];
        if (!pausedRingsRef.current.has(ring)) {
          ringAngleRef.current[ring] +=
            dt * (360 / cfg.durationSec) * cfg.direction;
        }
      });

      planets.forEach((p) => {
        const angle = p.baseAngle + ringAngleRef.current[p.ring];
        positionPlanet(p, angle, 0);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = (ring) => {
    if (reducedMotionRef.current) return;
    setPausedRings((prev) => new Set(prev).add(ring));
  };

  const handleLeave = (ring) => {
    if (reducedMotionRef.current) return;
    setPausedRings((prev) => {
      const next = new Set(prev);
      next.delete(ring);
      return next;
    });
  };

  return (
    <div className="service-orbit-wrapper">
      <div className="service-orbit-scene" ref={sceneRef} aria-hidden="true">
        <div className="service-orbit-glow" />

        {/* static decorative guide rings — purely visual, never animated */}
        <div className="orbit-guide orbit-guide-1" />
        <div className="orbit-guide orbit-guide-2" />
        <div className="orbit-guide orbit-guide-3" />

        <div className="service-orbit-core">
          <div className="service-orbit-core-ring" />
          <img
            className="service-orbit-core-logo"
            src="/assets/selmore-digital-logo.png"
            alt="Selmore Digital logo"
          />
        </div>

        {planets.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="service-planet"
              ref={(el) => {
                if (el) nodeRefs.current[p.id] = el;
              }}
              onMouseEnter={() => handleEnter(p.ring)}
              onMouseLeave={() => handleLeave(p.ring)}
            >
              <div className="service-planet-card">
                <div className="service-planet-icon">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="service-planet-tooltip">{p.label}</div>
            </div>
          );
        })}
      </div>

      {/* Mobile fallback — no orbit math runs at all below 768px */}
      <div className="service-orbit-mobile-grid">
        {ACTIVE_SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="service-orbit-mobile-card">
              <div className="service-orbit-mobile-icon">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}