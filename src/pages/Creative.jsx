import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { creativeData, creativeOverview } from "../data/creativeData.js";

export default function Creative() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": creativeOverview.title,
    "url": "https://selmoredigital.com/creative",
    "description": creativeOverview.heroDesc
  };

  return (
    <>
      <SEO
        title={creativeOverview.seo.title}
        description={creativeOverview.seo.description}
        path="/creative"
        schema={collectionSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{creativeOverview.eyebrow}</p>
          <TypingHeading text={creativeOverview.heroTitle} className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {creativeOverview.heroDesc}
          </p>
        </div>
      </section>

      {/* Creative Categories Showcase Grid */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="CREATIVE DISCIPLINES"
            title="Explore Creative Capabilities"
            description="From visual identity and UI/UX to motion graphics and pitch deck storytelling."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creativeData.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.04}>
                <Link
                  to={`/creative/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-cyan hover:shadow-md block h-full text-left"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan">
                    <span>{item.eyebrow}</span>
                    {item.draftContent && (
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] text-slate-600">Draft Concept</span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy group-hover:text-cyan transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan group-hover:text-navy transition">
                    Explore Discipline <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need World-Class Creative Direction?"
        description="Let's build visual identity and digital experiences that set your brand apart."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
