import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import ServiceCarousel from "../components/ServiceCarousel.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import HeroSection from "../components/HeroSection.jsx";
import IndustryCard from "../components/IndustryCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatsSection from "../components/StatsSection.jsx";
import VisualImage from "../components/VisualImage.jsx";
import {
  automationHighlights,
  blogPosts,
  brandAssets,
  caseStudies,
  industries,
  portfolioItems,
  problems,
  quickHighlights,
  services,
} from "../data/siteData.js";
import { localBusinessSchema, organizationSchema } from "../lib/schema.js";

export default function Home() {
  return (
    <>
      <SEO
        title="Selmore Digital | Digital Growth & AI Automation Partner"
        path="/"
        schema={[organizationSchema, localBusinessSchema]}
      />
      <HeroSection />

      <section className="bg-navy px-4 pb-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsSection dark />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Friction points"
            title="Fix Your Growth Blockers"
            description="Identify the critical gaps limiting your digital growth."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.slice(0, 6).map((problem, index) => (
              <FadeIn key={problem} delay={index * 0.04} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green" />
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
            eyebrow="Services"
            title="Services Built for Scale"
            description="Explore our strategic digital solutions."
            dark
            align="center"
          />
          <div className="mt-12">
            <ServiceCarousel />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <VisualImage
            src={brandAssets.heroVisual}
            alt="Premium growth dashboard visual"
            className="aspect-[4/3] shadow-soft"
          />
          <div>
            <SectionHeading
              eyebrow="Why Selmore"
              title="Results Driven Strategy"
              description="We combine high-performance design with scalable systems."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-blue shrink-0" />
                      <h3 className="font-display text-lg font-extrabold tracking-normal text-navy">{item.title}</h3>
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
          <SectionHeading eyebrow="Industries" title="Solutions Tailored by Sector" description="Custom growth systems designed for your industry." align="center" />
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
              eyebrow="AI automation"
              title="Scale Smarter with AI"
              description="Automate manual workflows to increase efficiency."
              dark
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {automationHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-cyan shrink-0" />
                      <h3 className="font-display text-lg font-extrabold tracking-normal text-white">{item.title}</h3>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
            <Link to="/services/ai-automation" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy hover:bg-cyan">
              Explore AI Automation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <VisualImage src="/assets/direct/ai-crm-workspace.png" alt="AI workflow automation visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Proof" title="Our Success Stories" description="Explore real results driven by our strategy." />
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green">
              View cases
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
            <SectionHeading eyebrow="Works" title="Featured Client Works" description="Mockups showcasing our premium digital builds." />
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green">
              View portfolio
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
            <SectionHeading eyebrow="Insights" title="Strategic Growth Insights" description="Short notes on technology, marketing, and scale." />
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-green">
              Read blog
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
