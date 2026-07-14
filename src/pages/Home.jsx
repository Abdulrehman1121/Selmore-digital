import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Target, BriefcaseBusiness, Palette, LineChart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogCard from "../components/BlogCard.jsx";
import SelectedWorkSection from "../components/SelectedWorkSection.jsx";
import ServiceCarousel from "../components/ServiceCarousel.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ConnectedSystemsSection from "../components/ConnectedSystemsSection.jsx";
import ConnectedGrowthSection from "../components/ConnectedGrowthSection.jsx";
import BusinessReadinessSection from "../components/BusinessReadinessSection.jsx";
import InteractiveAINodes from "../components/InteractiveAINodes.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import IndustriesSection from "../components/IndustriesSection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import StatsSection from "../components/StatsSection.jsx";
import VisualImage from "../components/VisualImage.jsx";
import {
  automationHighlights,
  blogPosts,
  brandAssets,
  caseStudies,
  growthSystems,
  industries,
  portfolioItems,
  problems,
  quickHighlights,
  values,
} from "../data/siteData.js";
import { localBusinessSchema, organizationSchema } from "../lib/schema.js";

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
        title="Digital Growth Company | AI, Web Development, SEO & Marketing | Selmore Digital"
        description="Selmore Digital helps ambitious businesses grow through high-performing websites, AI solutions, SEO, mobile apps, and performance marketing. We build connected digital systems that generate measurable business growth."
        path="/"
        schema={[organizationSchema, localBusinessSchema]}
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

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="WHAT WE BUILD"
            title="Everything Your Business Needs To Grow."
            description="Every business grows differently. That's why we build tailored digital systems instead of selling disconnected services."
            dark
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {growthSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <FadeIn
                  key={system.title}
                  delay={index * 0.05}
                >
                  <Link
                    to="/growth-systems"
                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-glow transition-all duration-300 hover:border-cyan/35 hover:bg-white/[0.08] hover:-translate-y-1.5 cursor-pointer block h-full text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan/10 text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-navy">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan">
                        {system.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{system.description}</p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/growth-systems"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-green"
            >
              Explore Growth Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SelectedWorkSection />

      <IndustriesSection />

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="AI Automation"
              title="Artificial Intelligence That Solves Real Business Problems."
              dark
            />

            <div className="mt-6 space-y-4 max-w-xl text-base leading-relaxed text-slate-300">
              <p className="text-slate-300 text-lg">
                Artificial Intelligence should improve how your business operates—not create unnecessary complexity.
              </p>
              <p>
                From intelligent assistants and customer support automation to workflow optimization and 
                AI-powered decision making, we help businesses adopt practical AI solutions that save time, 
                reduce costs, and improve customer experiences.
              </p>
            </div>

            <Link
              to="/ai-solutions"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan"
            >
              Explore AI Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <InteractiveAINodes />
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <VisualImage
            src={brandAssets.heroVisual}
            alt="Digital growth dashboard visual"
            className="aspect-[4/3] shadow-soft"
          />

          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Why Selmore"
              title="Built Around Growth. Not Services."
            />

            <div className="mt-4 space-y-4 max-w-xl text-base leading-relaxed text-slate-600">
              <p className="font-bold text-navy text-lg">
                We don't measure success by how many websites we launch or campaigns we publish. We measure success by how much value we create for our clients.
              </p>
              <p>
                Every recommendation begins with understanding your business. Every solution is chosen because 
                it supports your long-term goals. Every project is designed to become a valuable business asset.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 w-full">
              {selmoreValues.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.title}
                    delay={index * 0.05}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-blue/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-blue" />
                      <h3 className="font-display text-sm font-extrabold tracking-normal text-navy">
                        {item.title}
                      </h3>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Ideas That Help Businesses Grow."
              description="Short ideas on websites, marketing, AI, and growth."
            />

            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green"
            >
              Explore Insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Categories tag bar */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Latest Articles",
              "AI",
              "SEO",
              "Technology",
              "Business Growth",
              "Web Development",
              "Marketing",
              "Automation",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-blue hover:text-blue cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build What's Next."
        description="Whether you're launching a new business, improving your digital presence, implementing AI, or scaling internationally, we're ready to help you build smarter digital systems designed for long-term growth."
        primaryLabel="Book a Strategy Call"
        primaryPath="/book-consultation"
        secondaryLabel="Request a Proposal"
        secondaryPath="/contact"
      />
    </>
  );
}
