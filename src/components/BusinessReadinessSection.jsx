import { motion } from "framer-motion";
import { AlertCircle, ArrowRightLeft, ShieldAlert } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const readinessCards = [
  {
    problem: "Website Doesn't Convert",
    solution: "Custom High-Performing UI/UX",
    detail: "We rebuild websites around conversion pathways, speed, and trust signals to turn visitors into leads.",
  },
  {
    problem: "SEO Isn't Working",
    solution: "Technical SEO & Search Position",
    detail: "We target high-intent keywords and optimize search visibility to drive organic traffic that qualifies.",
  },
  {
    problem: "Manual Processes",
    solution: "AI Workflow Automation",
    detail: "We implement bots, auto-responders, and automated routing to remove team bottlenecking.",
  },
  {
    problem: "Poor Customer Experience",
    solution: "Connected CRM Gateways",
    detail: "We streamline customer communications with unified touchpoints and instant automated response systems.",
  },
  {
    problem: "Disconnected Systems",
    solution: "Unified Growth Ecosystems",
    detail: "We map and connect strategy, marketing, data, and software to scale operations without friction.",
  },
  {
    problem: "Slow Business Growth",
    solution: "Data-Driven Growth Systems",
    detail: "We shift focus from simple deliverables to measurable outcomes: more volume, higher lead quality, and higher ROI.",
  },
];

export default function BusinessReadinessSection() {
  return (
    <section className="section-pad bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* Left Side: Intro Copy */}
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Business Readiness"
              title="Is Your Business Ready For What's Next?"
              description="Digital transformation isn't coming. It's already here. Every day, growing businesses face new operational and marketing challenges that slow down momentum."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-5 w-full">
                <p className="font-bold text-rose-800 text-lg flex items-center gap-2 mb-2">
                  <ShieldAlert className="h-5 w-5 text-rose-600" />
                  Growing Pressures:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-rose-700 font-semibold text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    Rising advertising costs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    Increasing customer expectations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    More intense competition
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    New complex technologies
                  </li>
                  <li className="flex items-center gap-2 col-span-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    Growing organizational complexity
                  </li>
                </ul>
              </div>

              <p className="font-bold text-navy text-lg pt-2">
                Without the right strategy, growth becomes harder.
              </p>
              <p>
                Selmore Digital helps businesses replace disconnected systems with connected digital 
                ecosystems that create measurable business outcomes.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Flip Cards (Reveal Solution) */}
          <div className="grid gap-5 sm:grid-cols-2">
            {readinessCards.map((card, index) => (
              <div
                key={card.problem}
                className="group relative h-[180px] w-full [perspective:1000px]"
              >
                {/* Inner Container holding Front and Back */}
                <div className="relative h-full w-full rounded-2xl border border-slate-200 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm bg-white">
                  
                  {/* Front Side: Problem */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 [backface-visibility:hidden]">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Pain Point {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy">
                        {card.problem}
                      </h3>
                      <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-blue">
                        <span>Reveal Selmore's Solution</span>
                        <ArrowRightLeft className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  {/* Back Side: Solution */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-blue to-indigo-900 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan">
                        Selmore Growth System
                      </span>
                      <h4 className="font-display text-lg font-black tracking-tight text-white mt-1">
                        {card.solution}
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200">
                      {card.detail}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
