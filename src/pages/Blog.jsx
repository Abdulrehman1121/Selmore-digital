import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import VisualImage from "../components/VisualImage.jsx";
import { blogCategories, blogPosts, brandAssets } from "../data/siteData.js";
import useCollection from "../hooks/useCollection.js";
import { organizationSchema } from "../lib/schema.js";

export default function Blog() {
  const [active, setActive] = useState("All");
  const posts = useCollection("/blogs", blogPosts);
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [active, posts]
  );

  return (
    <>
      <SEO
        title="Blog | Selmore Digital Insights"
        description="Visual insights about SEO, digital marketing, websites, AI automation, and business growth."
        path="/blog"
        schema={organizationSchema}
      />
      <section className="bg-navy px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Blog</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-normal md:text-7xl">
              Growth Notes
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Short ideas for smarter digital scale.
            </p>
          </div>
          <VisualImage src="/assets/direct/social-content-planner.png" alt="Blog insights editorial visual" className="aspect-[4/3] border border-white/10 shadow-glow" />
        </div>
      </section>
      <section className="section-pad bg-light px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Categories" title="Read by Signal" description="Pick a topic and go deeper." />
          <div className="mt-8 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
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
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <BlogCard key={post.slug} post={post} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
