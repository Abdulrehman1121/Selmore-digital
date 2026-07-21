import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, User, Calendar, CheckSquare, List } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";
import { journalData } from "../data/journalData.js";

export default function JournalDetail() {
  const { slug } = useParams();
  const article = journalData.find((a) => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selmoredigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Growth Journal", "item": "https://selmoredigital.com/growth-journal" },
    { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://selmoredigital.com/growth-journal/${article.slug}` }
  ];

  const articleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.summary,
      "datePublished": article.publishedDate,
      "author": { "@type": "Organization", "name": article.author },
      "publisher": { "@type": "Organization", "name": "Selmore Digital" }
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
        title={article.seo.title}
        description={article.seo.description}
        path={`/growth-journal/${article.slug}`}
        schema={articleSchema}
      />

      {/* Hero Header */}
      <section className="bg-navy px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
            <Link to="/growth-journal" className="hover:underline">Growth Journal</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>

          {article.draftContent && (
            <div className="mb-4 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/30">
              Generated Editorial Draft • Pending Final Review
            </div>
          )}

          <h1 className="font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {article.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-cyan" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-cyan" /> {article.publishedDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-cyan" /> {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Table of Contents */}
          {article.toc && article.toc.length > 0 && (
            <aside className="hidden lg:block sticky top-28 h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                <List className="h-4 w-4 text-cyan" /> Table of Contents
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                {article.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-cyan transition">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Body Content Blocks */}
          <div className="space-y-10 text-left">
            {article.contentBlocks && article.contentBlocks.map((block) => (
              <div key={block.id} id={block.id} className="scroll-mt-32">
                <h2 className="font-display text-2xl font-bold text-navy">{block.h2}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700 whitespace-pre-line">{block.text}</p>
              </div>
            ))}

            {/* Related Growth Systems */}
            {article.relatedSystems && article.relatedSystems.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mt-12">
                <h3 className="font-display text-base font-bold text-navy uppercase tracking-wider">Related Growth Systems:</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.relatedSystems.map((sysSlug) => (
                    <Link
                      key={sysSlug}
                      to={`/growth-systems/${sysSlug}`}
                      className="rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-cyan hover:bg-cyan hover:text-navy transition"
                    >
                      {sysSlug.replace(/-/g, " ")} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Put These Strategy Ideas Into Practice?"
        description="Book a Growth Session with our digital strategists."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Explore Growth Journal"
        secondaryPath="/growth-journal"
      />
    </>
  );
}
