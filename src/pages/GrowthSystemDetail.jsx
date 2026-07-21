import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";
import { growthSystemsData } from "../data/systemsData.js";

/* ─── shared variants ─── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Animated Accordion FAQ ─── */
function FaqItem({ faq, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-xl border border-slate-200 bg-white shadow-sm text-left overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h3 className="flex items-center gap-3 font-display text-base font-bold text-navy group-hover:text-blue transition-colors">
          <HelpCircle className="h-5 w-5 text-cyan shrink-0" />
          {faq.question}
        </h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 px-6 pl-[3.25rem] text-sm leading-6 text-slate-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GrowthSystemDetail() {
  const { slug } = useParams();
  const system = growthSystemsData.find((item) => item.slug === slug);

  if (!system) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selmoredigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Growth Systems", "item": "https://selmoredigital.com/growth-systems" },
    { "@type": "ListItem", "position": 3, "name": system.title, "item": `https://selmoredigital.com/growth-systems/${system.slug}` }
  ];

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": system.title,
      "description": system.summary,
      "provider": {
        "@type": "Organization",
        "name": "Selmore Digital",
        "url": "https://selmoredigital.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  return (
    <>
      <SEO
        title={system.seo.title}
        description={system.seo.description}
        path={`/growth-systems/${system.slug}`}
        schema={serviceSchema}
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-navy pt-32 pb-28 text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[580px] flex items-center"
        style={{ backgroundImage: `url('/assets/heros/system-${system.slug}-hero.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/40 pointer-events-none" />

        {/* ambient glow */}
        <motion.div
          className="absolute -bottom-24 -right-24 w-[480px] h-[480px] rounded-full bg-blue/5 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial="hidden" animate="show" variants={containerVariants}>

            {/* breadcrumb */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan mb-6"
            >
              <Link to="/growth-systems" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">
                Growth Systems
              </Link>
              <span className="opacity-50">/</span>
              <span>{system.title}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl"
            >
              {system.heroTitle}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {system.heroDesc}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 text-sm font-bold text-navy hover:bg-cyan transition-colors"
                >
                  Get Started with {system.title}
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/book-growth-session"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Book a Session
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── System Overview Sections ── */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,200,255,0.04)_0%,_transparent_70%)]" />

        <div className="mx-auto max-w-4xl space-y-10 relative z-10">
          {system.sections && system.sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.09)" }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm relative overflow-hidden cursor-default"
            >
              {/* left accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan to-blue rounded-l-2xl" />
              <h2 className="font-display text-2xl font-bold text-navy pl-2">{sec.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-700 whitespace-pre-line pl-2">{sec.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      {system.faqs && system.faqs.length > 0 && (
        <section className="section-pad bg-slate-50 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <SectionHeading
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Got Questions? We Have Answers."
                align="center"
              />
            </FadeIn>

            <motion.div
              className="mt-10 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {system.faqs.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} idx={idx} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Implement ${system.title}?`}
        description="Book a session with our growth team to discuss your goals."
        primaryLabel="Book Growth Session"
        primaryPath="/book-growth-session"
        secondaryLabel="Contact Us"
        secondaryPath="/contact"
      />
    </>
  );
}
