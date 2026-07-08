import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, services } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Selmore Digital"
        description="Premium digital growth services across websites, ecommerce, SEO, social, paid ads, branding, AI automation, and mobile apps."
        path="/services"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Services</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Growth Services
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Strategy, design, marketing, and automation in one visual system.
            </p>
          </div>
          <VisualImage
            src="/assets/direct/hero-workspace.jpg"
            alt="Selmore Digital service ecosystem dashboard visual"
            className="aspect-[4/3] border border-white/10 shadow-glow"
            loading="eager"
          />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Explore" title="Image-Led Services" description="Clear offers. Strong visuals. One next step." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
