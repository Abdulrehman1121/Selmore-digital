import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, contactDetails } from "../data/siteData.js";
import { localBusinessSchema } from "../lib/schema.js";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Selmore Digital"
        description="Contact Selmore Digital for premium digital growth and AI automation services."
        path="/contact"
        schema={localBusinessSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Contact</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Start the Growth Conversation
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Tell us what you want to build, grow, or automate.
            </p>
          </div>
          <VisualImage src={brandAssets.contactVisual} alt="Contact and consultation dashboard visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm sourcePage="Contact" />
          <div className="space-y-5">
            <VisualImage src={brandAssets.heroVisual} alt="Digital growth contact visual" className="aspect-[4/3] shadow-soft" />
            {[
              ["Email", contactDetails.email, Mail],
              ["Phone", contactDetails.phone, Phone],
              ["WhatsApp", contactDetails.whatsapp, MessageCircle],
            ].map(([label, value, Icon], index) => (
              <FadeIn key={label} delay={index * 0.05} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="mb-3 h-5 w-5 text-blue" />
                <h2 className="font-display text-xl font-extrabold tracking-normal text-navy">{label}</h2>
                <p className="mt-1 text-sm text-darkGray">{value}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
