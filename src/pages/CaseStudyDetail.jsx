import { Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { caseStudies } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;
  const image = study.image || study.featured_image || "/assets/direct/case-results-direct.png";

  const blocks = [
    ["Challenge", study.challenge],
    ["Strategy", study.strategy],
    ["Result", study.results],
  ];

  return (
    <>
      <SEO
        title={`${study.title} | Selmore Digital Case Study`}
        description={study.results}
        path={`/case-studies/${slug}`}
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{study.industry}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">{study.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{study.service}</p>
          </div>
          <VisualImage src={image} alt={study.imageAlt || `${study.title} visual`} className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {blocks.map(([title, copy], index) => (
            <FadeIn key={title} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-2xl font-extrabold tracking-normal text-navy">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-darkGray">{copy}</p>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
