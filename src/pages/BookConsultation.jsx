import ConsultationForm from "../components/ConsultationForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, consultationBenefits } from "../data/siteData.js";
import { localBusinessSchema } from "../lib/schema.js";

export default function BookConsultation() {
  return (
    <>
      <SEO
        title="Book a Free Strategy Call | Selmore Digital"
        description="Book a free strategy call with Selmore Digital for websites, marketing, automation, and digital growth systems."
        path="/book-consultation"
        schema={localBusinessSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Consultation</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Plan Your Next Move
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A focused call for website, marketing, AI automation, and growth clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <VisualImage src="/assets/direct/contact-crm-direct.png" alt="Consultation visual panel" className="aspect-[4/3] shadow-soft" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {consultationBenefits.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="mb-3 h-5 w-5 text-blue" />
                    <h2 className="font-display text-lg font-extrabold tracking-normal text-navy">{item.title}</h2>
                  </FadeIn>
                );
              })}
            </div>
          </div>
          <ConsultationForm />
        </div>
      </section>

      <CTASection title="Prefer an Audit?" primaryLabel="Get Website Audit" primaryPath="/free-website-audit" />
    </>
  );
}
