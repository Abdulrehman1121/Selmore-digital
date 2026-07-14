import CTASection from "../components/CTASection.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, caseStudies } from "../data/siteData.js";
import useCollection from "../hooks/useCollection.js";
import { organizationSchema } from "../lib/schema.js";

export default function CaseStudies() {
  const studies = useCollection("/case-studies", caseStudies);

  return (
    <>
      <SEO
        title="Case Studies | Selmore Digital"
        description="Visual Selmore Digital case studies across websites, paid growth, and AI automation."
        path="/case-studies"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Case Studies</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Proof in Motion
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Challenge, strategy, result. Clear and visual.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Growth stories" title="Visual Case Cards" description="Three signals. Clear outcome." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {studies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
