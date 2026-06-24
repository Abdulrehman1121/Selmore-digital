import CTASection from "../components/CTASection.jsx";
import IndustryCard from "../components/IndustryCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, industries } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries | Selmore Digital"
        description="Digital growth systems for healthcare, real estate, education, ecommerce, and professional services."
        path="/industries"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Industries</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Market-Ready Systems
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Visual growth engines for service, product, and local brands.
            </p>
          </div>
          <VisualImage src={brandAssets.heroVisual} alt="Industry growth system dashboard visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Sectors" title="Built Around Buyers" description="Each market gets its own digital path." align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
