import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { serviceDetails, services } from "../data/siteData.js";
import { faqSchema, serviceSchema } from "../lib/schema.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const detail = serviceDetails[slug];
  const service = services.find((item) => item.slug === slug);

  if (!detail || !service) return <Navigate to="/services" replace />;

  return (
    <>
      <SEO
        title={`${detail.title} | Selmore Digital`}
        description={detail.description}
        path={`/services/${slug}`}
        schema={[serviceSchema({ ...service, ...detail }), faqSchema(detail.faqs)]}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{detail.eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              {detail.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{detail.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-3 text-sm font-bold text-navy transition hover:bg-cyan">
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/request-proposal" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan hover:text-cyan">
                Request Proposal
              </Link>
            </div>
          </div>
          <VisualImage
            src={detail.image || service.image}
            alt={detail.imageAlt || service.imageAlt}
            className="aspect-[4/3] border border-white/10 shadow-glow"
            loading="eager"
          />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Benefits" title="Built to Perform" description={detail.overview} align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {detail.benefits.slice(0, 3).map((benefit, index) => (
              <FadeIn key={benefit} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="mb-5 h-7 w-7 text-green" />
                <h2 className="font-display text-2xl font-extrabold tracking-normal text-navy">{benefit}</h2>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <VisualImage src={detail.image || service.image} alt={detail.imageAlt || service.imageAlt} className="aspect-[4/3] shadow-soft" />
          <div>
            <SectionHeading eyebrow="Inside the system" title="Visual Delivery Flow" description="A focused path from strategy to launch." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {detail.process.slice(0, 6).map((step, index) => (
                <FadeIn key={step} delay={index * 0.04} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">0{index + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold tracking-normal text-navy">{step}</h3>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Quick Answers" description="Simple details before you start." />
          <FAQAccordion faqs={detail.faqs.slice(0, 3)} />
        </div>
      </section>

      <CTASection title={`Start ${detail.title}`} description="Get a focused roadmap and the right next step." />
    </>
  );
}
