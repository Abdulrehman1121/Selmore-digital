import { useMemo, useState } from "react";
import CTASection from "../components/CTASection.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { brandAssets, portfolioItems } from "../data/siteData.js";
import useCollection from "../hooks/useCollection.js";
import { organizationSchema } from "../lib/schema.js";

const categories = ["All", "Websites", "Ecommerce", "Branding", "Marketing", "AI Automation", "Mobile Apps"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const items = useCollection("/portfolio", portfolioItems);
  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.category === active)),
    [active, items]
  );

  return (
    <>
      <SEO
        title="Portfolio | Selmore Digital"
        description="Visual portfolio work across websites, ecommerce, branding, marketing, AI automation, and mobile apps."
        path="/portfolio"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Portfolio</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Visual Growth Work
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Premium systems across brand, web, marketing, and AI.
            </p>
          </div>
          <VisualImage src={brandAssets.heroVisual} alt="Portfolio dashboard visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>

      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Selected work" title="Image-Led Projects" description="Filter by capability." />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                  active === category ? "bg-blue text-white" : "border border-slate-200 bg-white text-slateText hover:border-blue"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <PortfolioCard key={item.slug} item={item} delay={index * 0.04} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
