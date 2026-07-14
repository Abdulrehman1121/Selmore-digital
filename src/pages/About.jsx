import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, processSteps, values } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

export default function About() {
  return (
    <>
      <SEO
        title="About Selmore Digital | Strategic Digital Growth & AI Automation"
        description="Selmore Digital is a premium digital growth and AI automation partner for modern businesses."
        path="/about"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">About</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Growth With Intelligence
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We build brands, lead systems, and AI-powered operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Story", "Digital systems for ambitious brands.", "/assets/direct/portfolio-board-direct.png"],
            ["Mission", "Grow through transformation and automation.", "/assets/direct/ai-crm-workspace.png"],
            ["Vision", "Trusted globally for digital growth.", "/assets/direct/hero-ecommerce-dashboard.png"],
          ].map(([title, copy, image], index) => (
            <FadeIn key={title} delay={index * 0.05} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
              <VisualImage src={image} alt={`${title} visual`} className="aspect-[4/3] rounded-none" />
              <div className="p-6">
                <h2 className="font-display text-3xl font-extrabold tracking-normal text-navy">{title}</h2>
                <p className="mt-3 leading-7 text-darkGray">{copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Values" title="How We Work" description="Premium thinking, clear execution." align="center" />
          <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-xl font-extrabold tracking-normal text-navy">{value.title}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <VisualImage src="/assets/direct/analytics-dashboard-closeup.png" alt="Growth process dashboard visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
          <div>
            <SectionHeading eyebrow="Process" title="From Signal to Scale" description="A clean path from insight to launch." dark />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <FadeIn key={step} delay={index * 0.04} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">0{index + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold tracking-normal text-white">{step}</h3>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Build What Comes Next" description="Premium digital systems for global growth." />
    </>
  );
}
