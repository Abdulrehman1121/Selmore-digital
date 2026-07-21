import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { journalData, journalOverview } from "../data/journalData.js";

export default function GrowthJournal() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": journalOverview.title,
    "url": "https://selmoredigital.com/growth-journal",
    "description": journalOverview.heroDesc
  };

  return (
    <>
      <SEO
        title={journalOverview.seo.title}
        description={journalOverview.seo.description}
        path="/growth-journal"
        schema={collectionSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{journalOverview.eyebrow}</p>
          <TypingHeading text={journalOverview.heroTitle} className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {journalOverview.heroDesc}
          </p>
        </div>
      </section>

      {/* Editorial Article Index */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="ARTICLES & INSIGHTS"
            title="Latest Growth Journal Articles"
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {journalData.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.05}>
                <Link
                  to={`/growth-journal/${article.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-cyan hover:shadow-md block h-full text-left"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 text-slate-500 font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-navy group-hover:text-cyan transition">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs text-slate-500 font-medium">By {article.author}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan group-hover:text-navy transition">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Stay Ahead With Growth Insights"
        description="Let's build a digital strategy tailored to your market."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
