import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import AnimatedGradientBackground from "../components/AnimatedGradientBackground.jsx";
import SEO from "../components/SEO.jsx";
import { contactDetails } from "../data/siteData.js";
import { localBusinessSchema } from "../lib/schema.js";

const timelineSteps = [
  {
    title: "Tell Us About Your Business",
    copy: "Complete our short project form with goals, challenges, and timeline. No lengthy questionnaires — just enough to understand your project.",
  },
  {
    title: "Discovery Call",
    copy: "We schedule a Growth Session to explore your business. This isn’t a sales call. It’s a strategic conversation about opportunities and solutions.",
  },
  {
    title: "Growth Roadmap",
    copy: "If we’re the right fit, we prepare a tailored proposal: scope, timeline, investment, and next steps with no surprises.",
  },
  {
    title: "Let’s Build Together",
    copy: "Once approved, our team begins discovery, planning, and design to turn your vision into a connected digital growth system.",
  },
];

const reasons = [
  "Honest advice",
  "Transparent communication",
  "Clear timelines",
  "Practical strategies",
  "Long-term partnerships",
  "Measurable business outcomes",
];

const faqs = [
  {
    question: "Do I need a clear project brief?",
    answer: "Not at all. Many of our clients begin with an idea, a challenge, or simply a desire to grow. We'll help define the roadmap together.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. We work with businesses across North America, Europe, Australia, the Middle East, and Pakistan. Most meetings are conducted remotely.",
  },
  {
    question: "How quickly will you respond?",
    answer: "We aim to respond to every enquiry within one business day. For urgent projects, please let us know in your message.",
  },
  {
    question: "What happens during the Growth Session?",
    answer: "We learn about your business, discuss your goals, answer questions, and recommend the most suitable Growth System. There’s no obligation to move forward.",
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. Whether you're launching a startup or scaling an established organisation, our process adapts to your stage of growth.",
  },
];

const regions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Europe",
  "Middle East",
  "Pakistan",
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Selmore Digital | Book Your Growth Session"
        description="Ready to grow your business? Book a Growth Session with Selmore Digital and discover how strategy, technology, AI, and digital marketing can help you achieve measurable results."
        path="/contact"
        schema={localBusinessSchema}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <AnimatedGradientBackground />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/80">START THE CONVERSATION</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl whitespace-nowrap">
              Let's Build What's Next.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-300 sm:text-xl">
              <p>Every successful project begins with a conversation. Not a proposal. Not a contract. A conversation.</p>
              <p>
                Whether you're planning a new website, exploring AI, improving your search visibility, strengthening your brand, or scaling your business, we'd love to understand what you're building.
              </p>
              <p>Our goal isn't to sell you a service. It's to help you identify the right growth system for your business. Let's start there.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan">
                Book Your Growth Session
              </a>
              <a href="#contact-form" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">
                Send Us Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-950 px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/80">What Happens Next?</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                One of the biggest reasons people hesitate to contact agencies is uncertainty.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              “What happens after I submit the form?” Let’s answer that.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {timelineSteps.map((step, index) => (
              <div key={step.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-xl font-semibold text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue">Tell Us About Your Project</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                Instead of a boring contact form. Let’s ask meaningful questions.
              </h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Your Progress</div>
              <div className="rounded-full bg-slate-100/80 p-1">
                <div className="h-2 rounded-full bg-blue transition-all" style={{ width: "35%" }} />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  "Project details",
                  "Strategy & budget",
                  "Submit",
                ].map((label, index) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-semibold text-slate-700">
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Need help faster?</p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                You can also reach us directly by email, phone, or WhatsApp if you want a faster reply.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  ["Email", contactDetails.email, Mail],
                  ["Phone", contactDetails.phone, Phone],
                  ["WhatsApp", contactDetails.whatsapp, MessageCircle],
                ].map(([label, value, Icon]) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3 text-slate-700">
                      <Icon className="h-5 w-5 text-blue" />
                      <div>
                        <p className="text-sm font-semibold">{label}</p>
                        <p className="mt-1 text-sm text-slate-500">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm sourcePage="Contact" />
        </div>
      </section>

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/80">Why Businesses Choose Selmore</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Because choosing a digital partner is a long-term decision.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We're not interested in quick wins. We're interested in building systems that continue creating value long after launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-base font-semibold text-white">✔ {reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue">Frequently Asked Questions</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                We answer the questions that matter before you reach out.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Knowing what to expect makes the next step easier. Here’s how our Growth Session works.
              </p>
            </div>
            <div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/80">Global Reach. Personal Partnership.</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Although our team operates from Pakistan, our work has always been global.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We've collaborated with businesses across the United States, Canada, the United Kingdom, Australia, Europe, and the Middle East. Distance has never been a barrier to delivering exceptional digital experiences.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Technology makes collaboration seamless. Relationships make it meaningful.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-950">
                <svg viewBox="0 0 640 420" className="h-full w-full">
                  <rect width="640" height="420" fill="rgba(15, 23, 42, 0.9)" />
                  <path d="M60 240 C 110 180, 180 180, 230 220" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.6" />
                  <path d="M280 120 C 340 80, 420 90, 480 130" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
                  <path d="M120 300 C 200 340, 310 320, 380 280" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.6" />
                  <circle cx="70" cy="245" r="8" fill="#22d3ee" />
                  <circle cx="230" cy="220" r="8" fill="#38bdf8" />
                  <circle cx="480" cy="130" r="8" fill="#22d3ee" />
                  <circle cx="380" cy="280" r="8" fill="#22c55e" />
                  <circle cx="520" cy="180" r="8" fill="#60a5fa" />
                  <circle cx="140" cy="80" r="8" fill="#a5b4fc" />
                </svg>
              </div>
              <div className="mt-6 grid gap-3">
                {regions.map((region) => (
                  <div key={region} className="rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200">
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white px-4 text-navy sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue">Before We Talk...</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              We have one question. What are you trying to build?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>Maybe it's a new business. Maybe it's a stronger brand. Maybe it's a website that finally reflects the quality of your company.</p>
              <p>Maybe it's an AI solution that gives your team back valuable time. Whatever it is... we'd love to help you build it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue/10 via-cyan/10 to-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-center shadow-soft backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/80">Your Next Stage of Growth Starts With One Conversation.</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              You don't need all the answers today. You just need the right partner to help you find them.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Let's explore what's possible together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-sm font-semibold text-navy transition hover:bg-blue">
                Book Your Growth Session
              </a>
              <a href="/growth-systems" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan">
                Explore Our Growth Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
