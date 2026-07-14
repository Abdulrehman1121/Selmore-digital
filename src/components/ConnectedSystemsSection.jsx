import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Search, Megaphone, Bot, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function ConnectedSystemsSection() {
  const [activeStep, setActiveStep] = useState(0); // 0: None, 1: Web, 2: SEO, 3: Marketing, 4: AI, 5: Growth

  const handleNodeHover = (step) => {
    setActiveStep(step);
  };

  const resetAnimation = () => {
    setActiveStep(0);
  };

  return (
    <section className="section-pad bg-light px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Side: Large Editorial Typography */}
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Connected Systems"
              title={
                <>
                  <span className="text-blue">Growth</span> Doesn't Come From One Service. It Comes From <span className="text-blue">Connected Systems</span>.
                </>
              }
              description="Many businesses invest in websites. Others focus on SEO. Some launch advertising campaigns. Others adopt AI. Each investment solves part of the problem. But disconnected solutions rarely create sustainable growth."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Real growth happens when strategy, technology, marketing, customer experience, automation, 
                and data work together.
              </p>
              <p className="font-bold text-navy text-lg border-l-4 border-blue pl-4">
                That's why we don't sell individual services. We design connected digital growth systems 
                that help businesses attract customers, improve efficiency, and scale with confidence.
              </p>
            </div>
            
            {/* Guide overlay */}
            <div className="mt-8 rounded-xl bg-white border border-slate-200 p-4 shadow-sm w-full">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interactive Network Guide</p>
              <p className="text-sm text-slate-600 mt-1">
                Hover over the network nodes on the right to see how connected digital systems assemble to drive exponential growth.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Connected SVG Network Diagram */}
          <div className="relative flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0,transparent_60%)] pointer-events-none" />

            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-white border border-slate-200/80 shadow-soft p-8 flex items-center justify-center overflow-hidden">
              
              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Path 1: Web -> SEO */}
                <path
                  d="M 120 120 Q 230 80 340 120"
                  fill="none"
                  stroke={activeStep >= 2 ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="3"
                  className={`transition-colors duration-500 ${activeStep >= 2 ? "animate-pulse" : ""}`}
                />
                
                {/* Path 2: SEO -> Marketing */}
                <path
                  d="M 340 120 Q 380 230 340 340"
                  fill="none"
                  stroke={activeStep >= 3 ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="3"
                  className={`transition-colors duration-500 ${activeStep >= 3 ? "animate-pulse" : ""}`}
                />

                {/* Path 3: Marketing -> AI */}
                <path
                  d="M 340 340 Q 230 380 120 340"
                  fill="none"
                  stroke={activeStep >= 4 ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="3"
                  className={`transition-colors duration-500 ${activeStep >= 4 ? "animate-pulse" : ""}`}
                />

                {/* Path 4: AI -> Growth */}
                <path
                  d="M 120 340 Q 80 230 120 120"
                  fill="none"
                  stroke={activeStep >= 5 ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth="3"
                  className={`transition-colors duration-500 ${activeStep >= 5 ? "animate-pulse" : ""}`}
                />

                {/* Starburst connector lines pointing to Center (Growth) */}
                <line
                  x1="120" y1="120" x2="230" y2="230"
                  stroke={activeStep >= 5 ? "#10b981" : "#e2e8f0"}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-colors duration-500"
                />
                <line
                  x1="340" y1="120" x2="230" y2="230"
                  stroke={activeStep >= 5 ? "#10b981" : "#e2e8f0"}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-colors duration-500"
                />
                <line
                  x1="340" y1="340" x2="230" y2="230"
                  stroke={activeStep >= 5 ? "#10b981" : "#e2e8f0"}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-colors duration-500"
                />
                <line
                  x1="120" y1="340" x2="230" y2="230"
                  stroke={activeStep >= 5 ? "#10b981" : "#e2e8f0"}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-colors duration-500"
                />
              </svg>

              {/* Node 1: Website */}
              <div
                className="absolute top-[80px] left-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                onMouseEnter={() => handleNodeHover(1)}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                  activeStep >= 1 ? "bg-blue border-blue text-white shadow-lg shadow-blue/30 scale-110" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <Code2 className="h-7 w-7" />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-600">Hover Website</span>
              </div>

              {/* Node 2: SEO */}
              <div
                className="absolute top-[80px] right-[80px] translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                onMouseEnter={() => handleNodeHover(2)}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                  activeStep >= 2 ? "bg-blue border-blue text-white shadow-lg shadow-blue/30 scale-110" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <Search className="h-7 w-7" />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-600">SEO Lights Up</span>
              </div>

              {/* Node 3: Marketing */}
              <div
                className="absolute bottom-[80px] right-[80px] translate-x-1/2 translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                onMouseEnter={() => handleNodeHover(3)}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                  activeStep >= 3 ? "bg-blue border-blue text-white shadow-lg shadow-blue/30 scale-110" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <Megaphone className="h-7 w-7" />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-600">Marketing Connects</span>
              </div>

              {/* Node 4: AI */}
              <div
                className="absolute bottom-[80px] left-[80px] -translate-x-1/2 translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                onMouseEnter={() => handleNodeHover(4)}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                  activeStep >= 4 ? "bg-blue border-blue text-white shadow-lg shadow-blue/30 scale-110" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <Bot className="h-7 w-7" />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-600">AI Activates</span>
              </div>

              {/* Center Node 5: Growth */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20"
                onMouseEnter={() => handleNodeHover(5)}
                onMouseLeave={resetAnimation}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-4 transition-all duration-500 ${
                  activeStep >= 5 ? "bg-emerald-500 border-emerald-400 text-white shadow-xl shadow-emerald-500/40 scale-110 animate-pulse" : "bg-white border-slate-200 text-slate-400"
                }`}>
                  <TrendingUp className={`h-10 w-10 ${activeStep >= 5 ? "animate-bounce" : ""}`} />
                </div>
                <span className="mt-2 text-sm font-black text-navy uppercase tracking-wider">Growth Appears</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
