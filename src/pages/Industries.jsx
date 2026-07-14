import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import SelectedWorkSection from "../components/SelectedWorkSection.jsx";
import { brandAssets } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

const industryCards = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Helping clinics, medical practices, wellness brands, and healthcare providers create trustworthy digital experiences that improve patient confidence and simplify appointments.",
    services: ["Websites", "Booking Systems", "SEO", "Branding", "AI Assistants"],
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    description:
      "Create memorable dining experiences before customers even walk through the door with reservations, ordering, and local visibility built into every experience.",
    services: ["Websites", "Reservations", "Online Ordering", "Social Media", "Performance Marketing"],
  },
  {
    title: "Construction",
    slug: "construction",
    description:
      "Showcase completed projects, generate qualified enquiries, and establish credibility through professional digital experiences built for contractors and builders.",
    services: ["Websites", "SEO", "Case Studies", "Lead Generation"],
  },
  {
    title: "Technology",
    slug: "technology",
    description:
      "Modern websites and digital products designed to communicate innovation while supporting customer acquisition and product adoption.",
    services: ["Website", "Branding", "AI", "Content Strategy"],
  },
  {
    title: "Professional Services",
    slug: "professional-services",
    description:
      "For law firms, accountants, consultants, and agencies. Build authority, generate trust, and increase enquiries with clear service positioning.",
    services: ["Branding", "Website", "Local SEO", "Performance Marketing"],
  },
  {
    title: "Retail",
    slug: "retail",
    description:
      "Create seamless shopping experiences that convert visitors into loyal customers and support repeat purchase journeys.",
    services: ["Website", "Checkout", "Loyalty", "Ads"],
  },
  {
    title: "Beauty",
    slug: "beauty",
    description:
      "Strengthen your brand through modern websites, online bookings, and customer engagement for salons, spas, and wellness studios.",
    services: ["Websites", "Bookings", "Membership", "Email"],
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Improve admissions, communication, and digital learning experiences for schools, academies, and training providers.",
    services: ["Websites", "Admissions", "CRM", "Content"],
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description:
      "Communicate capability, innovation, and reliability while supporting B2B growth for industrial brands and manufacturers.",
    services: ["Website", "SEO", "B2B Funnels", "Product Trust"],
  },
];

const growthSystemRows = [
  {
    label: "Healthcare",
    items: ["Website Development", "Booking Systems", "SEO", "AI Patient Assistant"],
  },
  {
    label: "Restaurants",
    items: ["Website", "Online Reservations", "Social Media", "Google Ads"],
  },
  {
    label: "Construction",
    items: ["Website", "SEO", "Case Studies", "Lead Generation"],
  },
  {
    label: "Professional Services",
    items: ["Branding", "Website", "Local SEO", "Performance Marketing"],
  },
  {
    label: "Technology",
    items: ["Website", "Branding", "AI", "Content Strategy"],
  },
];

const faqItems = [
  {
    question: "Do you specialise in one industry?",
    answer:
      "No. We work across multiple industries while tailoring every strategy to the specific needs of each business.",
  },
  {
    question: "Can you help businesses in regulated industries?",
    answer:
      "Yes. We adapt our design, content, and digital strategies to meet industry-specific requirements wherever applicable.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Absolutely. We partner with businesses in North America, Europe, Australia, the Middle East, and Pakistan.",
  },
  {
    question: "How do you understand our industry?",
    answer:
      "Every project begins with research, competitor analysis, and collaborative discovery sessions.",
  },
];

export default function Industries() {
  const { slug } = useParams();
  const focusedIndustry = industryCards.find((industry) => industry.slug === slug);

  return (
    <>
      <SEO
        title="Industries We Serve | Digital Growth Solutions for Every Business | Selmore Digital"
        description="Explore how Selmore Digital helps healthcare, hospitality, technology, construction, retail, legal, education, and professional service businesses grow through connected digital systems."
        path={slug ? `/industries/${slug}` : "/industries"}
        schema={organizationSchema}
      />

      <section className="bg-navy px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Industry Expertise</p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Every Industry Has Different Challenges.
              <span className="block text-cyan">We Build Growth Systems Around Them.</span>
            </h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
              <p>
                No two businesses grow the same way. A healthcare provider doesn't face the same challenges as a restaurant.
              </p>
              <p>
                A construction company doesn't market itself like a technology startup. Every industry has different customers, buying journeys, regulations, and expectations.
              </p>
              <p>
                That's why we never start with a template. We begin by understanding your industry, your audience, and the challenges that shape your business.
              </p>
              <p>
                Then we design connected digital growth systems that help you attract customers, improve operations, and scale with confidence.
              </p>
            </div>
            {focusedIndustry && (
              <div className="mt-8 rounded-2xl border border-cyan/20 bg-cyan/10 p-5 text-sm text-cyan-100">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Focused industry</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">{focusedIndustry.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{focusedIndustry.description}</p>
              </div>
            )}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/industries"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-slate-100"
              >
                Explore Your Industry
              </Link>
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:bg-white/10"
              >
                Book a Growth Session
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan/20 to-transparent" />
            <VisualImage
              src={brandAssets.heroVisual}
              alt="Industry growth systems illustration"
              className="relative rounded-[1.75rem] border border-white/10 shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-navy/80 p-5 text-slate-200 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Business Growth</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white">
                Industry icons, customer journeys, and digital systems working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Strategy Over Templates"
            title="We Don't Build Industry Templates. We Build Industry Strategies."
            description="Successful digital experiences begin with understanding people. Different industries require different approaches."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Healthcare needs trust.</h3>
              <p className="mt-4 text-slate-600">
                We design patient-facing systems that feel credible, compliant, and easy to use.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Restaurants need convenience.</h3>
              <p className="mt-4 text-slate-600">
                We shape quick ordering journeys and local discovery that make every seat easier to fill.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Construction companies need credibility.</h3>
              <p className="mt-4 text-slate-600">
                We showcase projects, testimonials, and process clarity that builds confidence.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Technology companies need clarity.</h3>
              <p className="mt-4 text-slate-600">
                We simplify complex products into clear benefits, use cases, and conversion paths.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Professional service firms need authority.</h3>
              <p className="mt-4 text-slate-600">
                We position experts with trust signals, case evidence, and a persuasive service narrative.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-navy">Retail brands need seamless customer experiences.</h3>
              <p className="mt-4 text-slate-600">
                We connect product discovery, checkout, and retention into a consistent merchant journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Work With"
            description="Each card links to its own SEO landing page."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-7 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="font-display text-2xl font-bold text-navy">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{industry.description}</p>
                <div className="mt-6 space-y-2">
                  {industry.services.map((service) => (
                    <div key={service} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                      {service}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue transition group-hover:text-cyan">
                  <span>Explore {industry.title.split(" ")[0]}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Every Industry. One Growth Philosophy."
            title="Our approach stays the same: understand, build, grow, automate, scale."
            description="Regardless of the industry, our work begins with clarity and ends with systems that support long-term growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {[
              { title: "Understand", description: "Research the business." },
              { title: "Build", description: "Create the right digital foundation." },
              { title: "Grow", description: "Increase visibility. Generate leads. Improve engagement." },
              { title: "Automate", description: "Simplify operations through AI and intelligent workflows." },
              { title: "Scale", description: "Continuously optimise and improve." },
            ].map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{step.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Growth Systems by Industry"
            title="How different industries use the same services in different ways."
            description="Instead of listing services, we show the industry-specific systems that make them work."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft">
            <div className="grid grid-cols-2 gap-px bg-slate-200 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 sm:grid-cols-5">
              <div className="bg-white px-6 py-4">Industry</div>
              <div className="bg-white px-6 py-4">Service 1</div>
              <div className="bg-white px-6 py-4">Service 2</div>
              <div className="bg-white px-6 py-4">Service 3</div>
              <div className="bg-white px-6 py-4">Service 4</div>
            </div>
            {growthSystemRows.map((row) => (
              <div key={row.label} className="grid grid-cols-2 gap-px bg-slate-200 text-sm sm:grid-cols-5">
                <div className="bg-white px-6 py-5 font-semibold text-navy">{row.label}</div>
                {row.items.map((item) => (
                  <div key={item} className="bg-white px-6 py-5 text-slate-600">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SelectedWorkSection />

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Industry questions answered."
            description="Common questions about our approach, reach, and experience working across markets."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-navy">{item.question}</h3>
                <p className="mt-4 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to Transform Your Industry"
        title="Every Industry Has Different Challenges. The right digital strategy begins by understanding yours."
        description="Whether you're a healthcare provider, restaurant, technology company, construction firm, or professional service business, we'll help you build a connected digital growth system designed around your goals."
        primaryLabel="Book Your Growth Session"
        primaryPath="/book-consultation"
        secondaryLabel="Explore Growth Systems"
        secondaryPath="/growth-systems"
      />
    </>
  );
}
