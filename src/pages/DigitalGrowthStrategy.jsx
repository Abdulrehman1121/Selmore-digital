import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

const serviceBlocks = [
  {
    eyebrow: "Digital Growth Audit™",
    title: "A complete review of your digital presence.",
    points: [
      "Website performance",
      "SEO",
      "User experience",
      "Branding",
      "Marketing",
      "Analytics",
      "AI opportunities",
      "Customer journey",
      "Technology stack",
    ],
    action: "Book Your Growth Audit™",
    path: "/book-consultation",
  },
  {
    eyebrow: "Digital Transformation Strategy",
    title: "Modernise operations with a connected technology plan.",
    points: [
      "Process mapping",
      "Technology recommendations",
      "Automation opportunities",
      "Customer experience improvements",
      "Digital maturity assessment",
    ],
    action: "Explore Growth Systems",
    path: "/growth-systems",
  },
  {
    eyebrow: "AI Readiness Assessment",
    title: "Understand where AI can deliver measurable value.",
    points: [
      "Repetitive tasks",
      "Automation opportunities",
      "Customer support improvements",
      "Internal knowledge systems",
      "Data readiness",
    ],
    action: "Explore AI Solutions",
    path: "/ai-solutions",
  },
  {
    eyebrow: "Website & Digital Experience Audit",
    title: "Review your website from the customer's perspective.",
    points: [
      "Customers",
      "Search engines",
      "Accessibility",
      "Performance",
      "Conversion",
      "Brand consistency",
    ],
    action: "Explore Website Development",
    path: "/website-design-development",
  },
  {
    eyebrow: "Marketing Strategy",
    title: "Align SEO, paid media, social, and content around shared business goals.",
    points: [
      "SEO strategy",
      "Paid media planning",
      "Social media direction",
      "Content alignment",
    ],
    action: "Explore Performance Marketing",
    path: "/performance-marketing",
  },
  {
    eyebrow: "Executive Workshops",
    title: "Align leadership around digital priorities and technology investment decisions.",
    points: [
      "Leadership alignment",
      "Growth opportunities",
      "Technology roadmaps",
      "Decision frameworks",
    ],
    action: "Talk to a Strategist",
    path: "/book-consultation",
  },
];

const auditChecklist = [
  "Website Review",
  "SEO Assessment",
  "Brand Evaluation",
  "Customer Journey Analysis",
  "AI Opportunities",
  "Marketing Review",
  "Competitor Analysis",
  "Growth Score",
  "30-Day Action Plan",
  "Recommended Growth Systems",
];

const strategySteps = [
  "Discover",
  "Research",
  "Audit",
  "Prioritise",
  "Roadmap",
  "Execute",
  "Measure",
  "Improve",
];

const industries = [
  "Healthcare",
  "Technology",
  "Hospitality",
  "Construction",
  "Retail",
  "Professional Services",
];

export default function DigitalGrowthStrategy() {
  return (
    <>
      <SEO
        title="Digital Growth Strategy Consulting | Business Transformation & AI Strategy | Selmore Digital"
        description="Build a smarter digital future with Selmore Digital. We help businesses create digital growth strategies, AI roadmaps, technology plans, and connected systems that support long-term success."
        path="/digital-growth-strategy"
        schema={organizationSchema}
      />

      <section className="bg-navy px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Digital Strategy • Transformation • Business Growth</p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Your Business Doesn't Need More Tools.
              <span className="block text-cyan">It Needs A Better Strategy.</span>
            </h1>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow">
            <div className="hero-color-ring hero-color-ring-1" />
            <div className="hero-color-ring hero-color-ring-2" />
            <div className="hero-color-ring hero-color-ring-3" />
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan/25 to-transparent" />
            <VisualImage
              src={brandAssets.heroVisual}
              alt="Digital strategy roadmap graphic"
              className="relative rounded-[1.75rem] border border-white/10 shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-navy/80 p-5 text-slate-200 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Connected Strategy</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white">A smarter roadmap for growth, not another toolset.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 text-base leading-8 text-slate-300 md:text-lg">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Technology has never been more accessible.</h2>
            <p className="text-lg font-medium text-slate-300">Websites. AI. Automation. Marketing. Analytics. CRM platforms.</p>
            <p>Every business has access to thousands of digital tools. Yet many still struggle to grow.</p>
            <p>Why? Because growth isn't created by technology alone. It's created by making the right digital decisions at the right time.</p>
            <p>At Selmore Digital, we help businesses identify opportunities, remove inefficiencies, and build connected digital strategies that support sustainable growth.</p>
            <p>Before recommending technology, we help you understand where your business is today—and where it needs to go next.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-slate-100"
            >
              Book a Growth Audit™
            </Link>
            <Link
              to="/growth-systems"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan"
            >
              Explore Growth Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Every Business Wants To Grow"
            title="Few Have A Roadmap."
            description="Many organisations invest in technology without a clear strategy. A new website. A CRM. AI tools. Marketing campaigns. Automation software. Individually, each investment has value. But without a connected plan, they often create complexity instead of progress. Our role is to help you connect the dots. We identify where technology can create the greatest impact, prioritise opportunities, and build a practical roadmap that supports your business goals."
          />
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Digital Growth Strategy Services" title="Strategy work that clarifies where growth happens." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceBlocks.map((block, index) => (
              <FadeIn key={block.eyebrow} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 160, damping: 20 }}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{block.eyebrow}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-navy">{block.title}</h3>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan to-blue" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={block.path}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
                  >
                    {block.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Strategy Comes Before Execution" title="Execution without strategy creates activity. Strategy creates progress." align="center" description="A beautiful website won't solve the wrong problem. AI won't fix broken processes. Advertising won't convert if the customer journey is confusing. That's why every project at Selmore begins with discovery, research, and planning before a single design or line of code is produced." />
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Growth Audit™" title="Selmore's signature strategic review." align="center" description="This should become Selmore's signature offering." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">What's Included?</p>
              <ul className="mt-6 space-y-3 text-slate-600">
                {auditChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Deliverable</p>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>A professionally prepared report explaining:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan" />Where your business is today.</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan" />Where the opportunities are.</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan" />What should happen next.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our Strategy Framework" title="A clear path from discovery to improvement." align="center" />
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {strategySteps.map((step, index) => (
                <div key={step} className="rounded-3xl bg-slate-50 p-6 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Step {index + 1}</p>
                  <p className="mt-4 font-display text-xl font-bold text-navy">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Who Is This For?" title="Strategy for businesses ready to grow with clarity." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <FadeIn key={item} delay={index * 0.08}>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
                  <p className="font-display text-xl font-semibold text-navy">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Common questions about our Growth Audit™ and strategy work." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                q: "What is a Growth Audit™?",
                a: "A Growth Audit™ is Selmore Digital's strategic review of your digital business. It evaluates your website, marketing, SEO, branding, customer experience, and technology to identify opportunities for growth.",
              },
              {
                q: "Is this different from a consultation?",
                a: "Yes. Rather than simply discussing your project, we assess your current digital ecosystem and provide practical recommendations.",
              },
              {
                q: "How long does the process take?",
                a: "Depending on the scope, most Growth Audits are completed within one to two weeks.",
              },
              {
                q: "Will I receive a report?",
                a: "Yes. You'll receive a structured report outlining findings, priorities, and recommendations.",
              },
            ].map((item, index) => (
              <FadeIn key={item.q} delay={index * 0.08}>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                  <h3 className="font-display text-xl font-semibold text-navy">{item.q}</h3>
                  <p className="mt-4 text-slate-600">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Better Decisions Create Better Growth"
        title="Before investing in technology, invest in understanding where your business can create the greatest impact."
        description="Let's build a roadmap together."
        primaryLabel="Book Your Growth Audit™"
        primaryPath="/book-consultation"
        secondaryLabel="Talk to a Strategist"
        secondaryPath="/book-consultation"
      />
    </>
  );
}
