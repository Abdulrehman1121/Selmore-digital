import { Link, Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { portfolioItems } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) return <Navigate to="/portfolio" replace />;
  const image = item.image?.startsWith("/") ? item.image : "/assets/direct/portfolio-board-direct.png";

  return (
    <>
      <SEO
        title={`${item.title} | Selmore Digital Portfolio`}
        description={item.description}
        path={`/portfolio/${slug}`}
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{item.category}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">{item.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{item.description}</p>
          </div>
          <VisualImage src={image} alt={item.imageAlt || `${item.title} visual`} className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">Project</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-normal text-navy">{item.client_name}</h2>
          <Link to="/request-proposal" className="mt-8 inline-flex rounded-lg bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy">
            Request Similar Work
          </Link>
        </FadeIn>
      </section>
      <CTASection />
    </>
  );
}
