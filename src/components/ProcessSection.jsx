import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading.jsx";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover",
    detail: "We research your audience, map out competitor gaps, and understand your core business metrics.",
  },
  {
    title: "Strategy",
    detail: "We outline the digital systems, tech stack, and marketing channels needed to hit your targets.",
  },
  {
    title: "Design",
    detail: "We create user-first wireframes, high-fidelity mockups, and premium brand aesthetics.",
  },
  {
    title: "Development",
    detail: "We engineer fast, secure, clean-code web systems and custom AI workflow automation.",
  },
  {
    title: "Launch",
    detail: "We complete quality assurance, launch checklists, and hand over a polished business asset.",
  },
  {
    title: "Optimize",
    detail: "We monitor performance, tracking setups, and organic traffic to improve conversion.",
  },
  {
    title: "Grow",
    detail: "We scale lead funnels, paid campaign budgets, and operational automations to drive outcomes.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    // 1. Animate vertical drawing line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 25%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // 2. Animate step items
    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-pad bg-light px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Partner for Scale."
          align="center"
        />

        <p className="mt-4 text-center text-slate-500 max-w-xl mx-auto text-base">
          Each phase of our workflow is aligned to remove operational gaps and construct high-converting digital foundations.
        </p>

        {/* Scroll Process Timeline */}
        <div className="relative mt-16 pb-12">
          
          {/* Vertical Base Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-slate-200 rounded-full" />
          
          {/* Animated Line Overlay */}
          <div
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 bg-blue rounded-full origin-top transform"
          />

          {/* Timeline Step Cards */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.title}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  className="flex flex-col md:flex-row relative items-start md:items-center"
                >
                  {/* Spacer or Left Card */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end px-8">
                    {/* Render card only on the left for even indices */}
                    {isEven && (
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-md text-left w-full hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue">
                          Phase 0{idx + 1}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-black text-navy">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Centered Circle Badge */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue font-display text-sm font-bold text-white shadow z-10">
                    {idx + 1}
                  </div>

                  {/* Spacer or Right Card */}
                  <div className="w-full md:w-1/2 flex justify-start px-8 mt-4 md:mt-0">
                    {/* Render card only on the right for odd indices */}
                    {!isEven && (
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-md text-left w-full hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue">
                          Phase 0{idx + 1}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-black text-navy">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    )}
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
