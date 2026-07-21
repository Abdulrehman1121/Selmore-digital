import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, CheckCircle2 } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { libraryData, libraryOverview } from "../data/libraryData.js";

export default function GrowthLibrary() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": libraryOverview.title,
    "url": "https://selmoredigital.com/growth-library",
    "description": libraryOverview.heroDesc
  };

  return (
    <>
      <SEO
        title={libraryOverview.seo.title}
        description={libraryOverview.seo.description}
        path="/growth-library"
        schema={collectionSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{libraryOverview.eyebrow}</p>
          <TypingHeading text={libraryOverview.heroTitle} className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {libraryOverview.heroDesc}
          </p>
        </div>
      </section>

      {/* Library Resource Cards */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="RESOURCES & TOOLS"
            title="Browse Growth Library Frameworks"
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {libraryData.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.05}>
                <Link
                  to={`/growth-library/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-cyan hover:shadow-md block h-full text-left"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-green">
                    <span>{item.format}</span>
                    <FileText className="h-4 w-4 text-slate-400" />
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-navy group-hover:text-cyan transition">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500 font-semibold mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {item.includes.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Audience: {item.audience}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan group-hover:text-navy transition">
                      {item.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need A Custom Business Growth Audit?"
        description="Book a session with our growth architects for a custom audit of your website, SEO, and lead automation."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
