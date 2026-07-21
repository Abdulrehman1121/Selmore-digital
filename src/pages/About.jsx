import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Palette, Cpu, Users } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import TypingHeading from "../components/TypingHeading.jsx";
import { industries as industriesData } from "../data/siteData.js";

/* ─── Reusable animation variants ─── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const slideRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const beliefs = [
  { title: "Strategy Before Execution", icon: Target, description: "Every successful project starts with understanding the problem." },
  { title: "Design With Purpose", icon: Palette, description: "Great design builds trust, improves usability, and supports business growth." },
  { title: "Technology That Scales", icon: Cpu, description: "We create solutions designed to grow with your business." },
  { title: "Long-Term Partnerships", icon: Users, description: "Your launch is the beginning—not the finish line." },
];

const processSteps = [
  { label: "Discover", color: "from-cyan/20 to-cyan/5" },
  { label: "Plan",     color: "from-blue/20 to-blue/5" },
  { label: "Design",   color: "from-green/20 to-green/5" },
  { label: "Build",    color: "from-cyan/20 to-cyan/5" },
  { label: "Launch",   color: "from-blue/20 to-blue/5" },
  { label: "Grow",     color: "from-green/20 to-green/5" },
];

export default function About() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const currentInd = industriesData[activeIndustry] || industriesData[0];
  const ActiveIcon = currentInd.icon || Target;

  return (
    <>
      <SEO
        title="About Selmore Digital | Connected Digital Growth Systems"
        description="Learn how Selmore Digital helps businesses grow through connected digital systems, combining websites, branding, AI, SEO, and marketing into one scalable strategy."
        path="/about"
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-navy pt-32 pb-28 text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[560px] flex items-center"
        style={{ backgroundImage: "url('/assets/heros/about-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/40 pointer-events-none" />

        {/* subtle animated background pulse */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Stagger children on page load */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
              ABOUT SELMORE DIGITAL
            </motion.p>
            <motion.div variants={itemVariants}>
              <TypingHeading
                text="Building Digital Systems That Help Businesses Grow."
                className="mt-5 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl max-w-4xl"
                speed={36}
                delay={400}
              />
            </motion.div>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Every business has unique goals, challenges, and opportunities. Our role is to connect strategy,
              creativity, technology, and marketing into digital systems that support sustainable growth—not just short-term results.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-cyan"
                >
                  Let's Build Together
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-pad bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading eyebrow="OUR STORY" title="Connected Systems For Ambitious Brands." />
              <div className="mt-8 space-y-5 text-slate-700 leading-8 text-base md:text-lg">
                <p>
                  Selmore Digital was founded with a simple belief:{" "}
                  <strong>Businesses grow faster when their digital presence works as one connected system.</strong>
                </p>
                <p>
                  Instead of offering isolated services, we combine websites, AI, branding, SEO, automation, and digital
                  marketing into solutions designed around real business goals.
                </p>
                <p>
                  Our focus isn't simply delivering projects—it's creating long-term partnerships that continue to evolve
                  as businesses grow.
                </p>
              </div>
            </motion.div>

            {/* Right — accent card */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-3xl bg-navy p-10 text-white relative overflow-hidden"
              >
                {/* glowing orb */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan/10 blur-2xl pointer-events-none" />
                <p className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">Why Selmore?</p>
                <ul className="space-y-4 relative z-10">
                  {["End-to-end digital strategy", "AI-powered growth tools", "SEO & performance marketing", "Brand identity systems", "Long-term partnership model"].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="section-pad bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading eyebrow="WHAT WE BELIEVE" title="Core Principles Behind Our Work" align="center" />
          </FadeIn>

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {beliefs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col text-left cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan mb-4"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section-pad bg-navy text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* background decoration */}
        <motion.div
          className="absolute right-0 top-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <SectionHeading eyebrow="HOW WE WORK" title="A Clear Path From Discovery to Growth" dark align="center" />
          </FadeIn>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.label}
                variants={itemVariants}
                whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center cursor-default relative overflow-hidden group"
              >
                {/* step number accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + 0.3, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan to-blue"
                />
                <span className="text-xs font-bold text-cyan">Step 0{index + 1}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-white group-hover:text-cyan transition-colors duration-300">
                  {step.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="INDUSTRIES"
              title="Solutions Tailored by Sector"
              description="Every industry has different challenges, but the goal remains the same: building digital experiences that create trust, improve engagement, and support long-term growth."
              align="center"
            />
          </FadeIn>

          {/* Pills */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {industriesData.map((ind, idx) => {
              const isActive = idx === activeIndustry;
              return (
                <motion.button
                  key={ind.title}
                  variants={itemVariants}
                  onClick={() => setActiveIndustry(idx)}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 border ${
                    isActive
                      ? "bg-blue border-blue text-white shadow-md shadow-blue/20"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue/40 hover:text-blue"
                  }`}
                >
                  {ind.title}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Dynamic card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 mx-auto max-w-4xl"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-soft grid md:grid-cols-2 text-left items-stretch min-h-[340px]"
              >
                {/* Text */}
                <div className="p-8 flex flex-col justify-between items-start">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue mb-4"
                    >
                      <ActiveIcon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-extrabold text-navy">
                      {currentInd.title} Growth Systems
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 font-light">
                      {currentInd.description} We build high-performing digital channels designed for trust, visibility,
                      and measurable customer conversions in the {currentInd.title.toLowerCase()} sector.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                    <motion.div whileHover={{ x: 4 }} className="inline-flex">
                      <Link
                        to="/work"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-cyan transition-colors"
                      >
                        Explore {currentInd.title} Projects
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[250px] md:min-h-full overflow-hidden group">
                  <motion.img
                    src={currentInd.image}
                    alt={currentInd.alt || currentInd.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection
        title="Let's Build Something That Lasts."
        description="Whether you need a new website, stronger branding, AI automation, or a complete digital growth strategy, we're ready to help."
        primaryLabel="Start Your Project"
        primaryPath="/contact"
        secondaryLabel="View Our Work"
        secondaryPath="/work"
      />
    </>
  );
}
