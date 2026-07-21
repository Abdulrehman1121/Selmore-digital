import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Target, BriefcaseBusiness, Palette, LineChart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "../components/HeroSection.jsx";
import ConnectedGrowthSection from "../components/ConnectedGrowthSection.jsx";
import ConnectedSystemsSection from "../components/ConnectedSystemsSection.jsx";
import BusinessReadinessSection from "../components/BusinessReadinessSection.jsx";
import SelectedWorkSection from "../components/SelectedWorkSection.jsx";
import IndustriesSection from "../components/IndustriesSection.jsx";
import InteractiveAINodes from "../components/InteractiveAINodes.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import StatsSection from "../components/StatsSection.jsx";

import { growthSystemsData } from "../data/systemsData.js";
import { journalData } from "../data/journalData.js";
import { libraryData } from "../data/libraryData.js";
import { defaultSEO } from "../data/seoData.js";

const selmoreValues = [
  { title: "Strategy First", icon: Target },
  { title: "Business Before Technology", icon: BriefcaseBusiness },
  { title: "Design With Purpose", icon: Palette },
  { title: "Performance Driven", icon: LineChart },
  { title: "AI Ready", icon: Sparkles },
  { title: "Long-Term Partnerships", icon: Users },
];

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title={defaultSEO.title}
        description={defaultSEO.description}
        path="/"
        schema={defaultSEO.organizationSchema}
      />

      <HeroSection />

      <ConnectedGrowthSection />

      <section className="section-pad bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsSection dark />
        </div>
      </section>

      <ConnectedSystemsSection />

      <BusinessReadinessSection />

      {/* Growth Systems Feature Grid */}
      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="GROWTH SYSTEMS"
            title="Everything Your Business Needs To Grow."
            description="Every business grows differently. That's why we build connected digital systems instead of selling disconnected services."
            dark
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {growthSystemsData.map((system, index) => (
              <FadeIn key={system.slug} delay={index * 0.04}>
                <Link
                  to={`/growth-systems/${system.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-glow transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.08] hover:-translate-y-1 block h-full group text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-navy transition">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-cyan transition">
                    {system.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300 line-clamp-3">
                    {system.summary}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/growth-systems"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-bold text-navy transition hover:bg-green"
            >
              Explore Growth Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SelectedWorkSection />

      <IndustriesSection />

      {/* AI Section */}
      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="AI Automation"
              title={
                <>
                  <span className="text-cyan">Artificial Intelligence</span> That Solves Real Business Problems.
                </>
              }
              dark
            />

            <div className="mt-6 space-y-4 max-w-xl text-base leading-relaxed text-slate-300">
              <p className="text-slate-300 text-lg">
                Artificial Intelligence should improve how your business operates—not create unnecessary complexity.
              </p>
              <p>
                From intelligent assistants and customer support automation to workflow optimization and AI-powered lead intake, we help businesses adopt practical AI solutions.
              </p>
            </div>

            <Link
              to="/growth-systems/ai-automation"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan"
            >
              Explore AI Automation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <InteractiveAINodes />
        </div>
      </section>

      {/* Why Selmore */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Selmore"
            title="Built Around Growth. Not Services."
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selmoreValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-blue" />
                      <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Growth Journal Insights */}
      <section className="section-pad bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Growth Journal"
              title="Ideas That Help Businesses Grow."
              description="Practical strategy articles on websites, AI, SEO, and business growth."
            />
            <Link
              to="/growth-journal"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-cyan"
            >
              Read Growth Journal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journalData.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.05}>
                <Link
                  to={`/growth-journal/${article.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md block h-full text-left"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan">{article.category}</p>
                  <h3 className="mt-3 font-display text-base font-bold text-navy line-clamp-2">{article.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">{article.summary}</p>
                  <span className="mt-4 inline-block text-xs font-semibold text-blue">{article.readTime}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Library Resources */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Growth Library"
              title="Free Business Planning Resources"
              description="Checklists, templates, and planning frameworks built from real client work."
            />
            <Link
              to="/growth-library"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-cyan"
            >
              Explore Growth Library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {libraryData.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.05}>
                <Link
                  to={`/growth-library/${item.slug}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-cyan block h-full text-left"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-green">{item.format}</p>
                  <h3 className="mt-3 font-display text-base font-bold text-navy line-clamp-2">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">{item.summary}</p>
                  <span className="mt-4 inline-block text-xs font-bold text-cyan">{item.ctaLabel} →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build What's Next."
        description="Whether you're launching a new business, improving your digital presence, implementing AI, or scaling internationally, we're ready to help."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
