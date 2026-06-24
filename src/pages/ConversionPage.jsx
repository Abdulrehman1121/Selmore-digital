import { CheckCircle2 } from "lucide-react";
import AuditForm from "../components/AuditForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { auditPages, brandAssets, trustIndicators } from "../data/siteData.js";
import { localBusinessSchema } from "../lib/schema.js";

export default function ConversionPage({ page }) {
  const current = page || auditPages[0];

  return (
    <>
      <SEO
        title={`${current.title} | Selmore Digital`}
        description={current.description}
        path={current.path}
        schema={localBusinessSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{current.auditType}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">{current.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{current.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustIndicators.slice(0, 4).map((item) => (
                <span key={item} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <VisualImage src={brandAssets.heroVisual} alt={`${current.auditType} dashboard visual`} className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <VisualImage src="/assets/direct/contact-crm-direct.png" alt={`${current.auditType} request visual`} className="aspect-[4/3] shadow-soft" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {current.benefits.slice(0, 3).map((benefit, index) => (
                <FadeIn key={benefit} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-green" />
                  <h2 className="font-display text-lg font-extrabold tracking-normal text-navy">{benefit}</h2>
                </FadeIn>
              ))}
            </div>
          </div>
          <AuditForm auditType={current.auditType} />
        </div>
      </section>
      <CTASection title="Book Strategy Call" primaryLabel="Book Consultation" primaryPath="/book-consultation" />
    </>
  );
}
