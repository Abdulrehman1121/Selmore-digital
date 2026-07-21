import { useParams, Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles, Layers } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";
import { creativeData } from "../data/creativeData.js";

export default function CreativeDetail() {
  const { slug } = useParams();
  const item = creativeData.find((c) => c.slug === slug);

  if (!item) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selmoredigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Creative", "item": "https://selmoredigital.com/creative" },
    { "@type": "ListItem", "position": 3, "name": item.title, "item": `https://selmoredigital.com/creative/${item.slug}` }
  ];

  // Apply Service schema when offering a service (e.g. brand-identity, ui-ux-design), otherwise CreativeWork
  const isServiceCategory = ["brand-identity", "ui-ux-design", "mobile-app-design", "presentation-design"].includes(item.slug);

  const mainSchema = isServiceCategory
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": item.title,
        "description": item.summary,
        "provider": { "@type": "Organization", "name": "Selmore Digital" }
      }
    : {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": item.title,
        "description": item.summary
      };

  const schemaItems = [
    mainSchema,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  return (
    <>
      <SEO
        title={item.seo.title}
        description={item.seo.description}
        path={`/creative/${item.slug}`}
        schema={schemaItems}
      />

      {/* Hero */}
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
            <Link to="/creative" className="hover:underline">Creative</Link>
            <span>/</span>
            <span>{item.title}</span>
          </div>

          {item.draftContent && (
            <div className="mb-4 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/30">
              Generated Draft Content • Pending Final Client Review
            </div>
          )}

          <h1 className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl">
            {item.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {item.heroDesc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-bold text-navy hover:bg-cyan transition"
            >
              Discuss {item.title} Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy flex items-center gap-3">
              <Palette className="h-6 w-6 text-cyan" />
              Creative Scope & Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{item.summary}</p>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Focus Areas:</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Strategic concepting, visual refinement, iterative reviews, export package handoff, and brand alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Elevate Your Brand with ${item.title}`}
        description="Let's build visual assets that capture attention and build lasting equity."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Explore Creative Overview"
        secondaryPath="/creative"
      />
    </>
  );
}
