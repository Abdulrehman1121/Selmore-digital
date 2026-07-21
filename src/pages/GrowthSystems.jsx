import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Bot, Search, BarChart2, Share2, Sparkles, CalendarCheck, Layers } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { growthSystemsData, growthSystemsOverview } from "../data/systemsData.js";

/* ─── Icon mapping by slug ─── */
const SLUG_ICONS = {
  "digital-growth-system":             Layers,
  "website-development":               Globe,
  "ai-automation":                     Bot,
  "seo":                               Search,
  "performance-marketing":             BarChart2,
  "social-media-marketing":            Share2,
  "brand-identity-digital-experience": Sparkles,
  "online-booking-systems":            CalendarCheck,
};


/* ─── shared variants ─── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function GrowthSystems() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": growthSystemsOverview.title,
    "url": "https://selmoredigital.com/growth-systems",
    "description": growthSystemsOverview.heroDesc
  };

  return (
    <>
      <SEO
        title={growthSystemsOverview.seo.title}
        description={growthSystemsOverview.seo.description}
        path="/growth-systems"
        schema={collectionSchema}
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-navy pt-32 pb-28 text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[560px] flex items-center"
        style={{ backgroundImage: "url('/assets/heros/growth-systems-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/40 pointer-events-none" />

        {/* ambient glow */}
        <motion.div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-cyan/5 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
              {growthSystemsOverview.eyebrow}
            </motion.p>
            <motion.div variants={itemVariants}>
              <TypingHeading
                text={growthSystemsOverview.heroTitle}
                className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl"
                speed={36}
                delay={400}
              />
            </motion.div>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {growthSystemsOverview.heroDesc}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/book-growth-session"
                  className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-bold text-navy hover:bg-cyan transition-colors"
                >
                  Book a Growth Session
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Systems Grid ── */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* background decoration */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(0,200,255,0.04)_0%,_transparent_70%)]" />

        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <SectionHeading
              eyebrow="OUR SYSTEMS"
              title="Explore The Growth Systems"
              description="Select a standalone system or combine multiple systems into a tailored strategy for your business."
              align="center"
            />
          </FadeIn>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {growthSystemsData.map((system, index) => (
              <motion.div
                key={system.slug}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 24px 48px -10px rgba(0,0,0,0.13)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Link
                  to={`/growth-systems/${system.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm block h-full text-left relative overflow-hidden"
                >
                  {/* hover accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan to-blue"
                  />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-navy transition-colors"
                  >
                    {(() => { const Icon = SLUG_ICONS[system.slug] || Layers; return <Icon className="h-6 w-6" />; })()}
                  </motion.div>

                  <h3 className="mt-6 font-display text-xl font-bold text-navy group-hover:text-blue transition-colors">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {system.summary}
                  </p>
                  <motion.span
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan group-hover:text-blue transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Growth System?"
        description="Let's map out a connected digital system tailored to your business."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
