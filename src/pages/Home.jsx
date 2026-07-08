import { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import ServiceCarousel from "../components/ServiceCarousel.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import HeroVideoZoom from "../components/HeroVideoZoom.jsx";
import IndustryCard from "../components/IndustryCard.jsx";
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
        title="Selmore Digital | Digital Growth & AI Automation Agency"
        path="/"
        schema={[organizationSchema, localBusinessSchema]}
      />

      <HeroVideoZoom />

      <section id="features" className="bg-navy px-4 pb-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsSection dark />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Growth Complexity"
            title="Growing a business has never been more complex."
            description="Your customers expect seamless digital experiences. Search engines evolve constantly. Advertising costs continue to rise. AI is changing how businesses operate. Success today requires more than isolated services. It requires a connected digital strategy built around visibility, leads, automation, and growth."
            align="center"
          />

          <p className="mt-6 text-center text-sm text-slate-500">
            Growth shouldn’t be complicated.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.slice(0, 6).map((problem, index) => (
              <FadeIn
                key={problem}
                delay={index * 0.04}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green" />
                  <p className="font-bold text-navy">{problem}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Growth Systems"
            title="Growth Systems We Build"
            description="Every service we offer is designed to support one goal: helping your business grow with clarity, consistency, and measurable results."
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
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{system.description}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <VisualImage
            src={brandAssets.heroVisual}
            alt="Digital growth dashboard visual"
            className="aspect-[4/3] shadow-soft"
          />

          <div>
            <SectionHeading
              eyebrow="Why Selmore Digital"
              title="We don’t sell services. We build growth systems."
              description="Most agencies focus on deliverables. Selmore Digital focuses on outcomes: more visibility, better leads, stronger customer experiences, smarter operations, and sustainable growth."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.title}
                    delay={index * 0.05}
                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-blue" />
                      <h3 className="font-display text-lg font-extrabold tracking-normal text-navy">
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

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Solutions Tailored by Sector"
            description="Custom growth systems for trust, visibility, and leads."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="AI Automation"
              title="Scale Smarter with AI"
              description="Automate repetitive work and respond faster."
              dark
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {automationHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.title}
                    delay={index * 0.05}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-cyan" />
                      <h3 className="font-display text-lg font-extrabold tracking-normal text-white">
                        {item.title}
                      </h3>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <Link
              to="/services/ai-automation"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan"
            >
              Explore AI Automation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <VisualImage
            src="/assets/direct/ai-crm-workspace.png"
            alt="AI workflow automation visual"
            className="aspect-[4/3] border border-white/10 shadow-glow"
          />
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Work"
              title="Selected Work Built for Growth"
              description="Explore digital experiences, websites, campaigns, and automation systems designed to help businesses attract customers, improve operations, and scale with confidence."
            />

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green"
            >
              View Selected Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Works"
              title="Featured Client Works"
              description="Premium mockups for websites, funnels, brands, and automation."
            />

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <PortfolioCard key={item.slug} item={item} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Strategic Growth Insights"
              description="Short ideas on websites, marketing, AI, and growth."
            />

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green"
            >
              Read Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
