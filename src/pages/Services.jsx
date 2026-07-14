import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets } from "../data/siteData.js";
import { organizationSchema } from "../lib/schema.js";

const buildSystems = [
  {
    title: "Website Design & Development",
    description:
      "Create websites that welcome visitors, communicate your offer clearly, and turn interest into action.",
    bullets: ["Corporate Websites", "WordPress", "Custom Development", "Ecommerce", "Landing Pages"],
    path: "/website-design-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Design and build Android and iOS apps that deepen engagement, support customers, and grow your business through mobile-first experiences.",
    bullets: ["Android", "iOS", "Flutter", "React Native", "Enterprise Apps"],
    path: "/mobile-app-development",
  },
  {
    title: "Booking Systems",
    description:
      "Simplify reservations and appointments with systems that sync calendars, collect payments, and keep customers coming back.",
    bullets: ["Online Bookings", "Payments", "Calendar Sync", "Staff Management", "Notifications"],
    path: "/booking-systems",
  },
  {
    title: "Branding & UI/UX",
    description:
      "Build memorable identities and intuitive experiences that strengthen trust, engagement, and long-term brand value.",
    bullets: ["Brand Identity", "UI Design", "UX Research", "Design Systems", "Prototypes"],
    path: "/branding-ui-ux",
  },
];

const growSystems = [
  {
    title: "Search Engine Optimization",
    description:
      "Improve visibility through technical SEO, content strategy, local SEO, and international optimization.",
    path: "/search-engine-optimization",
  },
  {
    title: "Performance Marketing",
    description:
      "Generate qualified leads with Google Ads, Meta campaigns, LinkedIn ads, and conversion-focused targeting.",
    path: "/performance-marketing",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strengthen brand awareness and audience engagement with meaningful, consistent social campaigns.",
    path: "/social-media-marketing",
  },
];

const automateSystems = [
  {
    title: "AI Business Assistants",
    description: "Enable smarter internal knowledge, employee support, and documentation workflows with AI.",
  },
  {
    title: "AI Chatbots",
    description: "Provide 24/7 customer support, qualify leads, and manage bookings through conversational AI.",
  },
  {
    title: "Workflow Automation",
    description: "Connect CRM, email, reporting, approvals, and notifications to simplify operations.",
  },
  {
    title: "AI Integrations",
    description: "Integrate OpenAI, Claude, Gemini, and custom AI systems to unlock new business potential.",
  },
];

const challenges = [
  {
    label: "I need more leads",
    services: ["SEO", "Performance Marketing"],
  },
  {
    label: "I need a new website",
    services: ["Website Development"],
  },
  {
    label: "I want to automate work",
    services: ["AI Solutions"],
  },
  {
    label: "I need an app",
    services: ["Mobile Development"],
  },
  {
    label: "I want customers to book online",
    services: ["Booking Systems"],
  },
  {
    label: "I want to build a stronger brand",
    services: ["Branding"],
  },
];

export default function GrowthSystems() {
  const [activeChallenge, setActiveChallenge] = useState(challenges[0]);

  return (
    <>
      <SEO
        title="Digital Growth Services | AI, Websites, SEO & Marketing | Selmore Digital"
        description="Discover Selmore Digital's connected growth systems including website development, AI solutions, SEO, performance marketing, social media, branding, mobile apps, and booking systems designed to help businesses grow."
        path="/growth-systems"
        schema={organizationSchema}
      />

      <section className="bg-navy px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Connected Digital Growth</p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Every Business Grows Differently. Every
              <span className="block text-cyan">Growth System Is Built Differently.</span>
            </h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
              <p>Every business faces different challenges.</p>
              <p>Some need a website that converts more visitors. Some need more qualified leads. Others want to automate repetitive work.</p>
              <p>Some are preparing for AI. Others want to build a stronger brand.</p>
              <p>That's why we don't believe in one-size-fits-all services.</p>
              <p>At Selmore Digital, we design connected growth systems tailored to your business goals. Every solution we create works together to help your business attract customers, improve operations, and grow with confidence.</p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/growth-systems"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-slate-100"
              >
                Explore Growth Systems
              </Link>
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow">
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan/25 to-transparent" />
            <VisualImage
              src={brandAssets.heroVisual}
              alt="Connected digital growth system visual"
              className="relative rounded-[1.75rem] border border-white/10 shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-navy/80 p-5 text-slate-200 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Business Growth</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white">An ecosystem built on Build, Grow, Automate, and Scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Growth Doesn't Come From One Service"
            title="It Comes From Connected Systems."
            description="Imagine building a beautiful website... but nobody finds it. Now imagine ranking on Google... but your website doesn't convert. Now imagine running successful ads... but your sales team struggles to follow up with leads. Each solution creates value. Together, they create growth."
          />
          <div className="mt-10 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Build</p>
              <p className="mt-4 text-slate-700">We don't simply build websites. We build connected digital ecosystems where every investment supports the next.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Why it matters</p>
              <p className="mt-4 text-slate-700">Every project begins with understanding how your entire business works before recommending technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Build" title="Create Digital Foundations That Last." description="The right foundation makes every growth system stronger." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {buildSystems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="font-display text-2xl font-bold text-navy">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={item.path}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
                >
                  Explore {item.title.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Grow" title="Attract More Customers." description="Building a website is only the beginning. Growth comes from helping the right audience discover your business." align="center" />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {growSystems.map((system) => (
              <div key={system.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <h3 className="font-display text-2xl font-bold text-navy">{system.title}</h3>
                <p className="mt-4 text-slate-600">{system.description}</p>
                <Link
                  to={system.path}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
                >
                  Explore {system.title.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Automate" title="Free Your Team To Focus On What Matters." description="Artificial Intelligence isn't replacing businesses. It's helping them operate more efficiently." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {automateSystems.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
                <h3 className="font-display text-2xl font-bold text-navy">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-navy/5 p-8 text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">AI Integrations</p>
            <p className="mt-4 text-base leading-7">OpenAI, Claude, Gemini, Custom AI — we connect the platforms that amplify your business systems.</p>
            <Link
              to="/ai-solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
            >
              Explore AI Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Scale" title="Continue Growing With Confidence." description="Launching a project is the beginning of the journey. We continue measuring, optimizing, and improving every digital system to help your business adapt as customer expectations and technology evolve." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "Analytics",
              "Conversion Optimization",
              "Performance Monitoring",
              "Continuous Improvements",
              "Growth Strategy",
              "Digital Consulting",
            ].map((item) => (
              <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="font-display text-xl font-semibold text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Which Growth System Is Right For You?"
            title={'Instead of asking "What service do you need?" We ask "What challenge are you trying to solve?"'}
            description="Choose the challenge that matches your business goal and we’ll show you the best growth systems to start with."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {challenges.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveChallenge(item)}
                className={`rounded-[1.75rem] border p-6 text-left transition ${
                  activeChallenge.label === item.label
                    ? "border-cyan bg-cyan/10 text-navy"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan/50"
                }`}
              >
                <p className="font-display text-lg font-semibold">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.services.join(" • ")}</p>
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-100 p-8 text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Selected growth systems</p>
            <p className="mt-4 text-xl font-semibold text-navy">{activeChallenge.label}</p>
            <p className="mt-3 text-slate-600">{activeChallenge.services.join(" and ")} are the systems we would use to solve that challenge.</p>
            <Link
              to="/book-consultation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
            >
              Let's Find The Right Growth System
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Connected Growth Works" title="Businesses that grow sustainably don't rely on a single marketing channel or technology." description="They create systems where every investment supports the next. A website improves trust. SEO increases visibility. Advertising generates demand. AI improves efficiency. Analytics guide decisions. Branding builds recognition. Together, these systems create momentum." align="center" />
        </div>
      </section>

      <CTASection
        eyebrow="Let's Build What's Next"
        title="Whether you're launching a new business, modernizing your digital presence, implementing AI, or scaling internationally, we'll help you design the right growth system for your business."
        description="Every individual service page supports this philosophy, reinforcing that clients aren't buying isolated services — they are investing in a connected strategy for long-term business growth."
        primaryLabel="Book a Strategy Session"
        primaryPath="/book-consultation"
        secondaryLabel="Explore Our Work"
        secondaryPath="/select-work"
      />
    </>
  );
}
