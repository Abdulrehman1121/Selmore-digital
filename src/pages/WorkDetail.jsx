import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building, Layers } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";
import { projectsData } from "../data/projectsData.js";

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selmoredigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://selmoredigital.com/work" },
    { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://selmoredigital.com/work/${project.slug}` }
  ];

  const caseStudySchema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.summary,
      "author": {
        "@type": "Organization",
        "name": "Selmore Digital"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  return (
    <>
      <SEO
        title={project.seo.title}
        description={project.seo.description}
        path={`/work/${project.slug}`}
        schema={caseStudySchema}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
            <Link to="/work" className="hover:underline">Work</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          <h1 className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl">
            {project.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {project.heroDesc}
          </p>

          {/* Project Snapshot Card */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-glow">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Client</span>
              <p className="mt-1 text-sm font-bold text-white">{project.client}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Industry</span>
              <p className="mt-1 text-sm font-bold text-cyan">{project.industry}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Focus</span>
              <p className="mt-1 text-sm font-bold text-white">{project.snapshot.focus}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Platform</span>
              <p className="mt-1 text-sm font-bold text-green">{project.snapshot.platform}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Opportunity */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy flex items-center gap-3">
              <Building className="h-6 w-6 text-cyan" />
              The Opportunity & Challenge
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{project.opportunity}</p>
          </div>

          {/* What We Created */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy flex items-center gap-3">
              <Layers className="h-6 w-6 text-cyan" />
              What We Created
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{project.whatWeCreated}</p>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Growth Systems Integrated:</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.growthSystemsUsed.map((sys) => (
                  <span key={sys} className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold text-navy">
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="rounded-2xl border border-green/30 bg-green/5 p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green" />
              Verified Outcome
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-800 font-medium">{project.outcome}</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Similar Growth Results?"
        description="Let's build a connected digital system tailored to your industry."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Explore All Work"
        secondaryPath="/work"
      />
    </>
  );
}
