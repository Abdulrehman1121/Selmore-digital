import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { projectsData } from "../data/projectsData.js";

export default function Work() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", ...new Set(projectsData.map((p) => p.industry))];

  const filteredProjects =
    selectedIndustry === "All"
      ? projectsData
      : projectsData.filter((p) => p.industry === selectedIndustry);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Selected Work & Growth Stories | Selmore Digital",
    "url": "https://selmoredigital.com/work",
    "description": "Explore 16 real-world growth stories across technology, real estate, hospitality, legal, and luxury retail."
  };

  return (
    <>
      <SEO
        title="Selected Work & Growth Stories | Selmore Digital"
        description="Explore 16 client growth stories across web development, AI automation, SEO, and marketing."
        path="/work"
        schema={collectionSchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">SELECTED WORK</p>
          <TypingHeading text="Real Work. Verified Outcomes." className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore 16 case studies demonstrating how connected digital systems deliver clarity, build trust, and drive business growth.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-pad bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Industry Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  selectedIndustry === ind
                    ? "bg-navy text-cyan shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-cyan"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.04}>
                <Link
                  to={`/work/${project.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan hover:shadow-md block h-full text-left"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan">
                    <span>{project.industry}</span>
                    <Briefcase className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy group-hover:text-cyan transition">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-500 font-semibold">Outcome:</p>
                    <p className="text-xs text-navy mt-1 line-clamp-2">{project.outcome}</p>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan group-hover:text-navy transition">
                    Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Growth Story?"
        description="Let's transform your digital presence into a high-performing system."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
